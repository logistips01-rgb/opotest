#!/usr/bin/env node
/* =======================================================
   Validador de bancos de preguntas
   Uso:  node tools/validar.js
   Comprueba, para cada oposición del catálogo:
     · que los archivos cargan y registran bien la oposición
     · que las preguntas están bien formadas
     · que no hay enunciados repetidos
     · que el recuento del catálogo coincide con la realidad
   ======================================================= */
'use strict';

const { normalizar, normalizarOpcion, catalogo, cargarOposicion } = require('./lib/cargar.js');

let errores = 0, avisos = 0;
const error = m=>{ errores++; console.log('  ✗ ' + m); };
const aviso = m=>{ avisos++; console.log('  ⚠ ' + m); };

const { entradas } = catalogo();

entradas.forEach(entrada=>{
  let oposicion;
  try{
    oposicion = cargarOposicion(entrada.slug);
  }catch(e){
    error(`${entrada.slug}: ${e.message}`);
    return;
  }

  const { data, cargados } = oposicion;
  const ids = new Set(data.temas.map(t=>t.id));
  data.temas.forEach(t=>{
    if(typeof t.id !== 'number' || !t.title) error(`${entrada.slug}: tema mal definido → ${JSON.stringify(t)}`);
  });

  const enunciados = new Map();
  let total = 0, conFuente = 0;

  Object.keys(data.questions).forEach(k=>{
    if(!ids.has(Number(k))) error(`${entrada.slug}: hay preguntas del tema ${k} pero ese tema no está en TEMAS`);
    data.questions[k].forEach((q,i)=>{
      const ref = `${entrada.slug} · tema ${k} · pregunta ${i+1}`;
      total++;

      if(!q.q) error(`${ref}: falta el enunciado`);
      if(!Array.isArray(q.options) || q.options.length < 2) error(`${ref}: necesita al menos 2 opciones`);
      else{
        if(!Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length)
          error(`${ref}: 'correct' (${q.correct}) fuera del rango de opciones`);
        if(new Set(q.options.map(normalizarOpcion)).size !== q.options.length)
          error(`${ref}: tiene opciones repetidas (una respuesta correcta puede contar como fallo)`);
      }
      if(!q.exp) error(`${ref}: falta la explicación (exp)`);
      if(q.fuente) conFuente++;

      if(q.q){
        const clave = normalizar(q.q);
        if(enunciados.has(clave)) aviso(`${ref}: enunciado repetido (ya aparece en ${enunciados.get(clave)}); la app las distingue por su solución, pero conviene revisar si sobra una`);
        else enunciados.set(clave, `tema ${k} · pregunta ${i+1}`);
      }
    });
  });

  if(entrada.preguntas !== total)
    aviso(`${entrada.slug}: catalog.js dice ${entrada.preguntas} preguntas y hay ${total} (actualiza 'preguntas')`);

  const vacios = data.temas.filter(t=>!(data.questions[t.id]||[]).length).map(t=>t.id);
  const flojos = data.temas.filter(t=>{
    const n = (data.questions[t.id]||[]).length;
    return n > 0 && n < 10;
  }).map(t=>`${t.id} (${(data.questions[t.id]||[]).length})`);

  console.log(`  · ${entrada.slug.padEnd(24)} ${String(total).padStart(5)} preguntas · ${data.temas.length} temas · ${conFuente} con fuente citada`);
  console.log(`    ${cargados.length} archivo(s): ${cargados.join(', ')}`);
  if(vacios.length) console.log(`    temas sin preguntas: ${vacios.join(', ')}`);
  if(flojos.length) console.log(`    temas con menos de 10: ${flojos.join(', ')}`);
  oposicion.avisos.forEach(a=>aviso(`${entrada.slug}: ${a}`));
});

console.log('');
if(errores) console.log(`${errores} error(es) y ${avisos} aviso(s).`);
else console.log(avisos ? `Sin errores. ${avisos} aviso(s).` : 'Todo correcto.');
process.exit(errores ? 1 : 0);
