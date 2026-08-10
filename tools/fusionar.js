#!/usr/bin/env node
/* =======================================================
   Fusiona un lote revisado en el banco de una oposición.
   Uso:
     node tools/fusionar.js lotes/aux-admin-zaragoza-t18.json [...]
     node tools/fusionar.js lotes/*.json --simular

   Solo entran al banco las preguntas con veredicto CONFIRMADA.
   Las DUDOSAS y RECHAZADAS se guardan en data/pendientes/ para
   revisarlas a mano: la decisión final nunca la toma el script.
   ======================================================= */
'use strict';

const fs = require('fs');
const path = require('path');
const { ROOT, normalizar, normalizarOpcion, cargarOposicion } = require('./lib/cargar.js');

const args = process.argv.slice(2);
const simular = args.includes('--simular');
const ficheros = args.filter(a=>!a.startsWith('--'));

if(!ficheros.length){
  console.error('Uso: node tools/fusionar.js <lote.json> [...] [--simular]');
  process.exit(1);
}

const HOY = new Date().toISOString().slice(0,10);

/* Registra el archivo de ampliación en el catálogo la primera vez, para que
   la app no pida un archivo inexistente (un <script> que da 404 ensucia la
   consola aunque el cargador lo tolere). */
function asegurarEnCatalogo(slug, ruta){
  const cat = path.join(ROOT, 'assets/js/catalog.js');
  let src = fs.readFileSync(cat,'utf8');
  if(src.includes(`'${ruta}'`)) return false;

  const base = `files:['data/${slug}.js'],`;
  if(!src.includes(base)){
    console.log(`   ⚠ no se ha podido registrar ${ruta} en catalog.js: añádelo a mano al array 'files' de ${slug}`);
    return false;
  }
  src = src.replace(base, `files:['data/${slug}.js', '${ruta}'],`);
  fs.writeFileSync(cat, src);
  console.log(`   → ${ruta} registrado en assets/js/catalog.js`);
  return true;
}
let totalIntegradas = 0, totalApartadas = 0, errores = 0;

for(const fichero of ficheros){
  console.log(`\n── ${fichero}`);
  let lote;
  try{
    lote = JSON.parse(fs.readFileSync(fichero,'utf8'));
  }catch(e){
    console.log(`   ✗ no se puede leer: ${e.message}`);
    errores++; continue;
  }

  const { slug, tema, preguntas } = lote;
  if(!slug || !tema || !Array.isArray(preguntas)){
    console.log('   ✗ el lote necesita slug, tema y preguntas[]');
    errores++; continue;
  }

  let oposicion;
  try{
    oposicion = cargarOposicion(slug);
  }catch(e){
    console.log(`   ✗ ${e.message}`);
    errores++; continue;
  }

  if(!oposicion.data.temas.some(t=>t.id===tema)){
    console.log(`   ✗ el tema ${tema} no existe en el temario de ${slug}`);
    errores++; continue;
  }

  // Enunciados ya presentes en TODA la oposición, no solo en este tema:
  // una pregunta repetida en otro tema también es una repetición.
  const yaExisten = new Set();
  Object.values(oposicion.data.questions).forEach(lista=>
    lista.forEach(q=>yaExisten.add(normalizar(q.q))));

  const integradas = [], apartadas = [];
  const vistasEnLote = new Set();

  preguntas.forEach((q,i)=>{
    const ref = `pregunta ${i+1}`;
    const problemas = [];

    if(!q.q) problemas.push('sin enunciado');
    if(!Array.isArray(q.options) || q.options.length < 3) problemas.push('necesita 3 o 4 opciones');
    else if(!Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length)
      problemas.push(`'correct' fuera de rango (${q.correct})`);
    else if(new Set(q.options.map(normalizarOpcion)).size !== q.options.length)
      problemas.push('tiene opciones repetidas');
    if(!q.exp) problemas.push('sin explicación');
    if(!q.fuente) problemas.push('sin cita de fuente');

    const clave = q.q ? normalizar(q.q) : '';
    if(clave && yaExisten.has(clave)) problemas.push('ya está en el banco');
    if(clave && vistasEnLote.has(clave)) problemas.push('repetida dentro del propio lote');

    if(problemas.length){
      apartadas.push({...q, _motivo: problemas.join('; ')});
      console.log(`   ⚠ ${ref} apartada: ${problemas.join('; ')}`);
      return;
    }
    if(q.veredicto !== 'CONFIRMADA'){
      apartadas.push({...q, _motivo: `veredicto ${q.veredicto || 'ausente'}`});
      return;
    }
    vistasEnLote.add(clave);
    const {veredicto, notaRevision, ...limpia} = q;
    integradas.push(limpia);
  });

  console.log(`   ${integradas.length} confirmadas · ${apartadas.length} apartadas (de ${preguntas.length})`);
  totalIntegradas += integradas.length;
  totalApartadas += apartadas.length;

  if(simular) continue;

  if(integradas.length){
    const destino = path.join(ROOT, `data/${slug}.ampliacion.js`);
    if(!fs.existsSync(destino)){
      fs.writeFileSync(destino,
`/* =======================================================
   Ampliaciones del banco de ${slug}
   -------------------------------------------------------
   Archivo generado por tools/fusionar.js. Cada bloque es un
   lote revisado. Se puede editar a mano sin problema: basta
   respetar las llamadas a window.addQuestions().
   ======================================================= */
`);
    }
    const bloque = `
/* tema ${tema} · lote ${HOY} · ${integradas.length} preguntas revisadas */
window.addQuestions('${slug}', ${tema}, ${JSON.stringify(integradas, null, 2)});
`;
    fs.appendFileSync(destino, bloque);
    console.log(`   → añadidas a data/${slug}.ampliacion.js`);
    asegurarEnCatalogo(slug, `data/${slug}.ampliacion.js`);
  }

  if(apartadas.length){
    const dir = path.join(ROOT, 'data/pendientes');
    fs.mkdirSync(dir, {recursive:true});
    const revisar = path.join(dir, `${slug}-t${tema}-revisar.json`);
    fs.writeFileSync(revisar, JSON.stringify({slug, tema, fecha:HOY, preguntas:apartadas}, null, 2));
    console.log(`   → apartadas en data/pendientes/${slug}-t${tema}-revisar.json`);
  }
}

console.log(`\n${totalIntegradas} preguntas integradas · ${totalApartadas} apartadas${simular?' (simulación, no se ha escrito nada)':''}`);
if(!simular && totalIntegradas) console.log('Comprueba el resultado con: node tools/validar.js');
process.exit(errores ? 1 : 0);
