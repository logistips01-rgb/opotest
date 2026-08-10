#!/usr/bin/env node
/* =======================================================
   Validador de bancos de preguntas
   Uso:  node tools/validar.js
   Comprueba que cada data/<slug>.js se puede cargar, que
   todas las preguntas están bien formadas y que el número
   de preguntas del catálogo coincide con la realidad.
   ======================================================= */
'use strict';

const path = require('path');
const fs = require('fs');
const ROOT = path.join(__dirname, '..');

let errores = 0;
function error(msg){ errores++; console.log('  ✗ ' + msg); }

/* ---- catálogo ---- */
const catalogo = [];
global.window = {
  OPOSICIONES: null,
  registerOposicion(){},
  getOposicion(){ return null; }
};
const catalogSrc = fs.readFileSync(path.join(ROOT,'assets/js/catalog.js'),'utf8');
new Function('window', catalogSrc)(global.window);
global.window.OPOSICIONES.forEach(o=>catalogo.push(o));

/* ---- bancos ---- */
catalogo.forEach(meta=>{
  let registrado = null;
  global.window.registerOposicion = payload=>{ registrado = payload; };

  const file = path.join(ROOT, meta.file);
  if(!fs.existsSync(file)){ error(`${meta.slug}: no existe ${meta.file}`); return; }

  try{
    new Function('window', fs.readFileSync(file,'utf8'))(global.window);
  }catch(e){
    error(`${meta.slug}: error de sintaxis en ${meta.file} → ${e.message}`);
    return;
  }
  if(!registrado){ error(`${meta.slug}: ${meta.file} no llamó a registerOposicion`); return; }
  if(registrado.slug !== meta.slug) error(`${meta.slug}: el archivo registra el slug '${registrado.slug}'`);

  const {temas, questions} = registrado;
  const ids = new Set(temas.map(t=>t.id));
  temas.forEach(t=>{
    if(typeof t.id !== 'number' || !t.title) error(`${meta.slug}: tema mal definido → ${JSON.stringify(t)}`);
  });

  let total = 0;
  Object.keys(questions).forEach(k=>{
    if(!ids.has(Number(k))) error(`${meta.slug}: hay preguntas del tema ${k} pero ese tema no está en TEMAS`);
    questions[k].forEach((q,i)=>{
      const ref = `${meta.slug} · tema ${k} · pregunta ${i+1}`;
      if(!q.q) error(`${ref}: falta el enunciado`);
      if(!Array.isArray(q.options) || q.options.length < 2) error(`${ref}: necesita al menos 2 opciones`);
      else if(!Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length)
        error(`${ref}: 'correct' (${q.correct}) fuera del rango de opciones`);
      if(!q.exp) error(`${ref}: falta la explicación (exp)`);
      total++;
    });
  });

  const temasVacios = temas.filter(t=>!(questions[t.id]||[]).length).map(t=>t.id);
  if(meta.preguntas !== total)
    console.log(`  ⚠ ${meta.slug}: catalog.js dice ${meta.preguntas} preguntas y hay ${total} (actualiza 'preguntas')`);

  console.log(`  · ${meta.slug.padEnd(24)} ${String(total).padStart(5)} preguntas · ${temas.length} temas` +
    (temasVacios.length ? ` · sin preguntas: ${temasVacios.join(', ')}` : ''));
});

console.log(errores ? `\n${errores} error(es) encontrados.` : '\nTodo correcto.');
process.exit(errores ? 1 : 0);
