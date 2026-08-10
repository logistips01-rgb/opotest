#!/usr/bin/env node
/* =======================================================
   Corrige preguntas con opciones repetidas.
   Uso:
     node tools/corregir-duplicados.js data/aux-admin-zaragoza.js [--aplicar]

   Sin --aplicar solo informa. Con --aplicar reescribe únicamente
   las líneas afectadas, dejando el resto del archivo intacto.

   Una opción repetida es un error que penaliza al que estudia: si
   la respuesta correcta aparece dos veces y se pincha la segunda
   copia, el test la cuenta como fallo. La corrección elimina la
   copia y recoloca `correct` sobre la primera aparición, así que
   nunca cambia cuál es la respuesta buena.
   ======================================================= */
'use strict';

const fs = require('fs');
const { normalizarOpcion } = require('./lib/cargar.js');

const args = process.argv.slice(2);
const aplicar = args.includes('--aplicar');
const fichero = args.find(a=>!a.startsWith('--'));

if(!fichero){
  console.error('Uso: node tools/corregir-duplicados.js <archivo.js> [--aplicar]');
  process.exit(1);
}

const lineas = fs.readFileSync(fichero,'utf8').split('\n');
let corregidas = 0;

const salida = lineas.map((linea, n)=>{
  if(!/^\s*\{q:/.test(linea)) return linea;

  const sangria = linea.match(/^\s*/)[0];
  const cuerpo = linea.trim().replace(/,$/,'');
  let q;
  try{
    q = new Function('return ' + cuerpo)();
  }catch(e){
    console.log(`  ⚠ línea ${n+1}: no se puede interpretar, se deja igual`);
    return linea;
  }
  if(!Array.isArray(q.options)) return linea;

  const vistas = new Map();
  const opciones = [];
  q.options.forEach((opt, i)=>{
    const clave = normalizarOpcion(opt);
    if(vistas.has(clave)) return;
    vistas.set(clave, opciones.length);
    opciones.push({opt, original:i});
  });
  if(opciones.length === q.options.length) return linea;

  const textoCorrecto = q.options[q.correct];
  const nuevoCorrect = vistas.get(normalizarOpcion(textoCorrecto));
  if(nuevoCorrect === undefined){
    console.log(`  ✗ línea ${n+1}: no se localiza la respuesta correcta tras deduplicar, se deja igual`);
    return linea;
  }

  corregidas++;
  const eliminadas = q.options.length - opciones.length;
  const eraLaCorrecta = q.options.filter(o=>normalizarOpcion(o)===normalizarOpcion(textoCorrecto)).length > 1;
  console.log(`  · línea ${n+1}: -${eliminadas} opción(es) repetida(s)` +
    (eraLaCorrecta ? '  ← la repetida era la RESPUESTA CORRECTA' : '') +
    `\n      ${q.q.slice(0,88)}`);

  if(!aplicar) return linea;

  const nuevo = {
    q: q.q,
    options: opciones.map(o=>o.opt),
    correct: nuevoCorrect,
    exp: q.exp
  };
  if(q.fuente) nuevo.fuente = q.fuente;

  const partes = [
    `q:${JSON.stringify(nuevo.q)}`,
    `options:[${nuevo.options.map(o=>JSON.stringify(o)).join(',')}]`,
    `correct:${nuevo.correct}`,
    `exp:${JSON.stringify(nuevo.exp)}`
  ];
  if(nuevo.fuente) partes.push(`fuente:${JSON.stringify(nuevo.fuente)}`);
  const coma = linea.trimEnd().endsWith(',') ? ',' : '';
  return `${sangria}{${partes.join(',')}}${coma}`;
});

console.log(`\n${corregidas} pregunta(s) con opciones repetidas.`);
if(corregidas && !aplicar) console.log('Vuelve a ejecutarlo con --aplicar para corregirlas.');
if(corregidas && aplicar){
  fs.writeFileSync(fichero, salida.join('\n'));
  console.log(`${fichero} actualizado. Comprueba con: node tools/validar.js`);
}
