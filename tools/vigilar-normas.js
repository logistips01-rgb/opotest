#!/usr/bin/env node
/* =======================================================
   Control de cambios legales del temario
   -------------------------------------------------------
   Consulta la API de datos abiertos del BOE (legislación consolidada)
   y compara, artículo por artículo, la fecha de la última versión de
   cada bloque con la foto guardada en tools/normas-foto.json.

   Uso:
     node tools/vigilar-normas.js              informe, sin tocar nada
     node tools/vigilar-normas.js --actualizar informe y, después, guarda
                                               la foto nueva y la fecha de
                                               comprobación que ve la app
                                               (data/normativa.js)

   Las bases exigen las normas «vigentes en el momento de celebración de
   los ejercicios» (BOPZ 170, 27-jul-2026), así que cualquier cambio en un
   artículo del temario obliga a revisar las preguntas y el esquema que
   lo usan. El informe lista, para cada artículo cambiado, las preguntas
   candidatas (las que lo citan en «fuente»); hay que confirmarlas a mano
   o con un agente revisor antes de tocar nada.

   Sale con código 2 si hay cambios, 0 si no, 1 si falla la consulta.
   ======================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const CONF = path.join(__dirname, 'normas-vigiladas.json');
const FOTO = path.join(__dirname, 'normas-foto.json');
const APP = path.join(ROOT, 'data', 'normativa.js');
const API = 'https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/';

const actualizar = process.argv.includes('--actualizar');
const conf = JSON.parse(fs.readFileSync(CONF, 'utf8'));
const fotoPrevia = fs.existsSync(FOTO) ? JSON.parse(fs.readFileSync(FOTO, 'utf8')) : null;

function hoy(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function fecha(aaaammdd){
  return aaaammdd ? `${aaaammdd.slice(0,4)}-${aaaammdd.slice(4,6)}-${aaaammdd.slice(6,8)}` : '';
}

/* curl en vez de fetch: respeta el proxy del entorno. El BOE corta a veces
   la conexión, así que se reintenta con espera creciente. */
function getJSON(url){
  let ultimo;
  for(let i = 0; i < 5; i++){
    try{
      const out = execFileSync('curl', ['-sS', '-m', '90', '-H', 'Accept: application/json', url], {encoding:'utf8', maxBuffer: 64*1024*1024});
      const j = JSON.parse(out);
      if(!j.status || j.status.code !== '200') throw new Error('respuesta ' + (j.status && j.status.code));
      return j.data;
    }catch(e){
      ultimo = e;
      execFileSync('sleep', [String(2 ** (i + 1))]);
    }
  }
  throw new Error(`No se pudo consultar ${url}: ${ultimo.message}`);
}

function consultar(norma){
  const meta = getJSON(API + norma.id + '/metadatos')[0];
  const indice = getJSON(API + norma.id + '/texto/indice');
  const bloques = {};
  (indice[0] ? indice[0].bloque : indice.bloque).forEach(b=>{
    bloques[b.id] = {titulo: b.titulo || b.id, fecha: b.fecha_actualizacion || ''};
  });
  return {
    derogada: meta.estatus_derogacion === 'S' || meta.vigencia_agotada === 'S',
    anulada: meta.estatus_anulacion === 'S',
    titulo: meta.titulo,
    bloques
  };
}

/* Número de artículo a partir del rótulo del bloque («Artículo 72 bis»). */
function numeroArticulo(titulo){
  const m = /^Art[íi]culo\s+(\d+)(\s*(bis|ter|quater|quinquies))?/i.exec(titulo || '');
  return m ? {n: m[1], suf: m[3] ? m[3].toLowerCase() : ''} : null;
}

/* Preguntas que citan esa norma y ese artículo en «fuente». Es una
   búsqueda amplia a propósito: mejor revisar de más que de menos. */
let banco = null;
function preguntasQueCitan(norma, titulo){
  const art = numeroArticulo(titulo);
  if(!art) return [];
  if(!banco){
    const { cargarOposicion } = require('./lib/cargar.js');
    banco = cargarOposicion(conf.slug).data;
  }
  const alias = norma.alias.map(a=>new RegExp(a, 'i'));
  const num = new RegExp(`(?:art[íi]?c?u?l?o?s?\\.?|arts\\.)[^A-Za-z]{0,40}?\\b${art.n}\\b${art.suf ? '\\s*' + art.suf : '(?!\\s*(bis|ter|quater))'}`, 'i');
  const res = [];
  Object.entries(banco.questions).forEach(([tema, qs])=>{
    qs.forEach((q, i)=>{
      const f = q.fuente || '';
      if(alias.some(a=>a.test(f)) && num.test(f)) res.push({tema: Number(tema), i, q: q.q});
    });
  });
  return res;
}

const foto = {comprobado: hoy(), normas: {}};
const cambios = [];
const avisos = [];

for(const norma of conf.normas){
  let r;
  try{ r = consultar(norma); }
  catch(e){ console.error(e.message); process.exit(1); }

  const previa = fotoPrevia && fotoPrevia.normas[norma.id];
  const ultima = Object.values(r.bloques).map(b=>b.fecha).filter(Boolean).sort().pop() || '';
  foto.normas[norma.id] = {nombre: norma.nombre, ultima: fecha(ultima), bloques: Object.fromEntries(Object.entries(r.bloques).map(([k,b])=>[k, b.fecha]))};

  if(r.derogada) avisos.push(`${norma.nombre}: el BOE la da por DEROGADA o con vigencia agotada.`);
  if(r.anulada) avisos.push(`${norma.nombre}: el BOE marca anulaciones.`);
  if(!previa) continue;

  const cambiados = [];
  Object.entries(r.bloques).forEach(([id, b])=>{
    if(!(id in previa.bloques)) cambiados.push({id, titulo: b.titulo, antes: '', ahora: b.fecha, tipo: 'nuevo'});
    else if(previa.bloques[id] !== b.fecha) cambiados.push({id, titulo: b.titulo, antes: previa.bloques[id], ahora: b.fecha, tipo: 'modificado'});
  });
  Object.keys(previa.bloques).filter(id=>!(id in r.bloques)).forEach(id=>{
    cambiados.push({id, titulo: id, antes: previa.bloques[id], ahora: '', tipo: 'suprimido'});
  });
  if(cambiados.length){
    cambiados.forEach(c=>{ c.preguntas = preguntasQueCitan(norma, c.titulo); });
    cambios.push({norma, cambiados});
  }
}

/* ---------- informe ---------- */
const lineas = [];
lineas.push(`# Control de cambios legales · ${hoy()}`, '');
if(!fotoPrevia){
  lineas.push('Primera ejecución: se toma la foto de referencia. No hay nada con qué comparar.');
} else {
  lineas.push(`Foto anterior: ${fotoPrevia.comprobado}. Normas vigiladas: ${conf.normas.length}.`, '');
  if(!cambios.length) lineas.push('**Sin cambios** en ninguna norma vigilada.');
  cambios.forEach(({norma, cambiados})=>{
    lineas.push(`## ${norma.nombre} (${norma.id})`, `Temas: ${norma.temas.join(', ')}`, '');
    cambiados.forEach(c=>{
      lineas.push(`- **${c.titulo}** (${c.tipo}): ${fecha(c.antes) || '—'} → ${fecha(c.ahora) || '—'}`);
      c.preguntas.forEach(p=>lineas.push(`  - tema ${p.tema} #${p.i}: ${p.q.slice(0, 140)}`));
      if(numeroArticulo(c.titulo) && !c.preguntas.length) lineas.push('  - (ninguna pregunta lo cita en «fuente»; revisar igualmente explicaciones y esquema)');
    });
    lineas.push('');
  });
}
if(avisos.length) lineas.push('', '## Avisos', ...avisos.map(a=>'- ' + a));
lineas.push('', '## Sin texto consolidado (comprobar a mano)', ...conf.sin_consolidado.map(s=>`- ${s.nombre} (temas ${s.temas.join(', ')}): ${s.como} ${s.donde}`));
const informe = lineas.join('\n');
console.log(informe);

if(actualizar){
  fs.writeFileSync(FOTO, JSON.stringify(foto, null, 1) + '\n');
  const app = {
    comprobado: foto.comprobado,
    normas: conf.normas.map(n=>({nombre: n.nombre, id: n.id, ultima: foto.normas[n.id].ultima})),
    sinConsolidado: conf.sin_consolidado.map(s=>s.nombre)
  };
  fs.writeFileSync(APP,
    '/* Generado por tools/vigilar-normas.js --actualizar. No editar a mano.\n' +
    '   Fecha de la última comprobación de la normativa y fecha de la última\n' +
    '   modificación de cada norma según el BOE consolidado. */\n' +
    'window.NORMATIVA = ' + JSON.stringify(app, null, 1) + ';\n');
  const dir = path.join(ROOT, 'lotes', 'normativa');
  fs.mkdirSync(dir, {recursive: true});
  fs.writeFileSync(path.join(dir, `informe-${hoy()}.md`), informe + '\n');
  console.log(`\nGuardados: tools/normas-foto.json, data/normativa.js y lotes/normativa/informe-${hoy()}.md`);
}
process.exit(cambios.length ? 2 : 0);
