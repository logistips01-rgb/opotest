#!/usr/bin/env node
/* =======================================================
   Aplica al banco un lote de cambios ya revisado (por ejemplo, por una
   actualización de ley) y lo registra para la usuaria.
   Uso:
     node tools/aplicar-cambios.js <cambios.json> --tipo ley|correccion \
          --titulo "..." --texto "..." [--simular]

   <cambios.json> es un array de:
     {"tema": N, "q": "<enunciado exacto actual>",
      "accion": "explicacion|respuesta|enunciado|retirar",
      "nuevo": {q?, options?, correct?, exp?, fuente?},
      "resumen"?: "..."}

   - Edita la pregunta en su archivo (banco base o ampliación) sin
     reformatear nada más: el diff queda limpio.
   - «retirar» no borra: guarda la pregunta en data/reserva/ con el motivo
     y la quita del banco.
   - Añade una entrada al principio de data/actualizaciones.js con cada
     pregunta (antes y ahora), que se ve en actualizaciones.html y se
     puede practicar.
   ======================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const { ROOT, cargarOposicion } = require('./lib/cargar.js');

const args = process.argv.slice(2);
const opt = n=>{ const i = args.indexOf('--' + n); return i >= 0 ? args[i+1] : null; };
const fichero = args[0];
const simular = args.includes('--simular');
const tipo = opt('tipo') || 'ley';
const titulo = opt('titulo');
const texto = opt('texto') || '';
const slug = opt('slug') || 'aux-admin-zaragoza';
if(!fichero || !titulo){
  console.error('Uso: node tools/aplicar-cambios.js <cambios.json> --tipo ley|correccion --titulo "..." --texto "..." [--simular]');
  process.exit(1);
}

const cambios = JSON.parse(fs.readFileSync(fichero, 'utf8'));
const { meta, data } = cargarOposicion(slug);
const archivos = (meta.files || [meta.file]).map(f=>path.join(ROOT, f));
const textos = Object.fromEntries(archivos.map(f=>[f, fs.readFileSync(f, 'utf8')]));
const J = s=>JSON.stringify(s);

/* Localiza el objeto literal de la pregunta: desde su «{» hasta la «}»
   que lo cierra, saltando el contenido de las cadenas. */
function localizar(q){
  const clave = '"q": ' + J(q);
  const hallados = archivos.filter(f=>textos[f].split(clave).length === 2);
  if(hallados.length !== 1) return null;
  const f = hallados[0], s = textos[f];
  const iq = s.indexOf(clave);
  const ini = s.lastIndexOf('{', iq);
  let prof = 0, enCadena = false, fin = -1;
  for(let i = ini; i < s.length; i++){
    const c = s[i];
    if(enCadena){ if(c === '\\') i++; else if(c === '"') enCadena = false; continue; }
    if(c === '"') enCadena = true;
    else if(c === '{') prof++;
    else if(c === '}'){ prof--; if(prof === 0){ fin = i + 1; break; } }
  }
  return fin < 0 ? null : {f, ini, fin};
}

function reemplazarCampo(obj, campo, valor){
  const re = campo === 'options'
    ? /"options": \[(?:\s*"(?:[^"\\]|\\.)*",?)*\s*\]/
    : campo === 'correct' ? /"correct": \d+/ : new RegExp(`"${campo}": "(?:[^"\\\\]|\\\\.)*"`);
  if(!re.test(obj)) throw new Error(`campo ${campo} no encontrado`);
  const nuevo = campo === 'options'
    ? '"options": [\n' + valor.map(o=>'      ' + J(o)).join(',\n') + '\n    ]'
    : `"${campo}": ${J(valor)}`;
  return obj.replace(re, ()=>nuevo);
}

const reserva = [];
const registro = [];
let errores = 0;

for(const c of cambios){
  const actual = (data.questions[c.tema] || []).find(x=>x.q === c.q);
  const loc = localizar(c.q);
  if(!actual || !loc){ console.log(`✗ no encontrada (tema ${c.tema}): ${c.q.slice(0, 80)}`); errores++; continue; }
  let { f, ini, fin } = loc;
  const s = textos[f];
  const antes = actual.options[actual.correct];

  if(c.accion === 'retirar'){
    reserva.push({...actual, tema: c.tema, _retirada: new Date().toISOString().slice(0,10), _motivo: c.resumen || c.motivo || titulo});
    // quita también la coma y el salto que la separaban de la vecina
    let a = ini, b = fin;
    const tras = s.slice(b).match(/^\s*,[ \t]*\n?/);
    if(tras){
      b += tras[0].length;
      const linea = s.slice(0, a).match(/\n[ \t]*$/);   // sangría de la línea del «{»
      if(linea) a -= linea[0].length - 1;
    } else { const prev = s.slice(0, a).match(/,\s*$/); if(prev) a -= prev[0].length; }
    textos[f] = s.slice(0, a) + s.slice(b);
    registro.push({tema: c.tema, q: c.q, options: actual.options, antes, ahora: '(pregunta retirada)', nota: c.resumen || ''});
    console.log(`− retirada (tema ${c.tema}): ${c.q.slice(0, 70)}`);
    continue;
  }

  let obj = s.slice(ini, fin);
  const n = c.nuevo || {};
  try{
    for(const campo of ['q', 'options', 'correct', 'exp', 'fuente']){
      if(n[campo] !== undefined) obj = reemplazarCampo(obj, campo, n[campo]);
    }
  }catch(e){ console.log(`✗ ${e.message}: ${c.q.slice(0, 70)}`); errores++; continue; }
  textos[f] = s.slice(0, ini) + obj + s.slice(fin);
  const opts = n.options || actual.options;
  const corr = n.correct !== undefined ? n.correct : actual.correct;
  registro.push({tema: c.tema, q: n.q || c.q, options: opts, antes, ahora: opts[corr], nota: c.resumen || ''});
  console.log(`✓ ${c.accion} (tema ${c.tema}): ${(n.q || c.q).slice(0, 70)}`);
}

if(errores){ console.log(`\n${errores} error(es): no se ha escrito nada.`); process.exit(1); }
if(simular){ console.log('\n--simular: no se ha escrito nada.'); process.exit(0); }

archivos.forEach(f=>fs.writeFileSync(f, textos[f]));
if(reserva.length){
  const fr = path.join(ROOT, 'data', 'reserva', `retiradas-${new Date().toISOString().slice(0,10)}.json`);
  const previas = fs.existsSync(fr) ? JSON.parse(fs.readFileSync(fr, 'utf8')) : [];
  fs.writeFileSync(fr, JSON.stringify(previas.concat(reserva), null, 1) + '\n');
  console.log(`Archivadas en ${path.relative(ROOT, fr)}`);
}

// registro para la app
const fa = path.join(ROOT, 'data', 'actualizaciones.js');
const win = {};
new Function('window', fs.readFileSync(fa, 'utf8'))(win);
const lista = (win.ACTUALIZACIONES || {})[slug] || [];
const hoy = new Date().toISOString().slice(0,10);
lista.unshift({id: `${hoy}-${tipo}-${lista.length + 1}`, fecha: hoy, tipo, titulo, texto, preguntas: registro});
const cab = fs.readFileSync(fa, 'utf8').split('window.ACTUALIZACIONES = ')[0];
fs.writeFileSync(fa, cab + 'window.ACTUALIZACIONES = window.ACTUALIZACIONES || {};\nwindow.ACTUALIZACIONES[' + J(slug) + '] = ' + JSON.stringify(lista, null, 1) + ';\n');
console.log(`Registrado en data/actualizaciones.js (${registro.length} preguntas).`);
