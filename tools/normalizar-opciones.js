#!/usr/bin/env node
/* =======================================================
   Normaliza las opciones de un banco de preguntas.
   Uso:
     node tools/normalizar-opciones.js <archivo.js> [--reducir] [--aplicar] [--muestra N]

   Hace dos cosas independientes:

   1. REPARTIR la posición de la respuesta correcta (siempre).
      En los bancos escritos a mano la correcta tiende a quedarse en la
      primera posición: en Zaragoza estaba ahí el 73 % de las veces y en
      el banco de la DGA 57 de 58. La app baraja las opciones al
      mostrarlas, así que estudiando no se nota, pero el dato guardado
      queda sesgado y eso importa si el banco se exporta o se lee fuera
      de la app. Se reparte por turnos entre todas las posiciones.

   2. REDUCIR de 4 opciones a 3 (solo con --reducir).
      El examen oficial de Auxiliar Administrativo del Ayuntamiento de
      Zaragoza es de tres opciones, así que ese banco debe entrenar con
      ese formato. No se elimina la última opción, sino el distractor
      MENOS confundible con la respuesta correcta: quitando uno al azar
      se corre el riesgo de tirar el distractor bueno y dejar dos
      absurdos, con lo que la pregunta se vuelve trivial. Se puntúa cada
      distractor por su parecido con la correcta (trigramas + misma
      naturaleza numérica + longitud similar) y cae el de puntuación más
      baja.

   Preguntas con opciones referenciales
   ------------------------------------
   Las del tipo «todas las anteriores» o «a) y b) son correctas» se
   tratan aparte, porque su sentido depende del orden y del número de
   opciones:
     · No se reordenan nunca: «todas las anteriores» tiene que seguir la
       última.
     · Si la correcta es referencial, tampoco se reducen: quitar
       cualquier opción cambiaría lo que la frase afirma.
     · Si es un distractor, al reducir se elimina esa misma opción, que
       es la que peor encaja en un formato de tres.
   ======================================================= */
'use strict';

const fs = require('fs');

const args = process.argv.slice(2);
const aplicar = args.includes('--aplicar');
const reducir = args.includes('--reducir');
const iM = args.indexOf('--muestra');
const muestra = iM >= 0 ? parseInt(args[iM+1]) || 0 : 0;
const fichero = args.find((a,i)=>!a.startsWith('--') && (iM < 0 || i !== iM+1));

if(!fichero){
  console.error('Uso: node tools/normalizar-opciones.js <archivo.js> [--reducir] [--aplicar] [--muestra N]');
  process.exit(1);
}

/* ---------- comparación de opciones ---------- */
const REFERENCIAL = /todas las (anteriores|respuestas|opciones)|ninguna de las (anteriores|respuestas|opciones)|son correctas|son ciertas|a\)\s*y\s*b\)|las dos primeras|ambas son/i;

function limpia(s){
  return String(s).toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9 ]/g,' ')
    .replace(/\s+/g,' ').trim();
}
function trigramas(s){
  const t = ' ' + limpia(s) + ' ';
  const g = new Set();
  for(let i=0;i<t.length-2;i++) g.add(t.slice(i,i+3));
  return g;
}
function dice(a,b){
  if(!a.size || !b.size) return 0;
  let comunes = 0;
  a.forEach(x=>{ if(b.has(x)) comunes++; });
  return (2*comunes)/(a.size+b.size);
}
const tieneNumero = s=>/\d/.test(String(s));

/* Cuanto más alto, más se parece el distractor a la correcta y más
   merece quedarse. */
function parecido(distractor, correcta){
  const d = dice(trigramas(distractor), trigramas(correcta));
  const mismaNaturaleza = tieneNumero(distractor) === tieneNumero(correcta) ? 1 : 0;
  const la = String(distractor).length, lb = String(correcta).length;
  const longitud = Math.min(la,lb) / Math.max(la,lb,1);
  return 0.6*d + 0.25*mismaNaturaleza + 0.15*longitud;
}

const turno = {};            // contador de reparto por número de opciones
let nReducidas = 0, nMovidas = 0, nReferenciales = 0, nTotal = 0;
const posFinal = {};
const ejemplos = [];

/* Transforma una pregunta. Devuelve {options, correct} ya normalizados.
   Se usa igual para el banco base (una pregunta por línea) que para los
   archivos de ampliación (JSON generado por fusionar.js). */
function normalizar(q, ref){
  nTotal++;
  let opciones = q.options.slice();
  const correcta = opciones[q.correct];
  const hayReferencial = opciones.some(o=>REFERENCIAL.test(o));
  let eliminada = null, motivo = null;

  if(reducir && opciones.length === 4 && !REFERENCIAL.test(correcta)){
    const distractores = opciones.map((o,i)=>i).filter(i=>opciones[i] !== correcta);
    let fuera = distractores.find(i=>REFERENCIAL.test(opciones[i]));
    motivo = 'referencial';
    if(fuera === undefined){
      let peorPunt = Infinity;
      distractores.forEach(i=>{
        const p = parecido(opciones[i], correcta);
        if(p < peorPunt){ peorPunt = p; fuera = i; }
      });
      motivo = 'menos confundible';
    }
    eliminada = opciones[fuera];
    opciones = opciones.filter((_,i)=>i!==fuera);
    nReducidas++;
  }

  let destino = opciones.indexOf(correcta);
  if(hayReferencial){
    nReferenciales++;
  } else {
    const k = opciones.length;
    turno[k] = (turno[k] || 0);
    const objetivo = turno[k] % k;
    turno[k]++;
    const resto = opciones.filter(o=>o !== correcta);
    const reordenadas = [];
    let j = 0;
    for(let i=0;i<k;i++) reordenadas.push(i === objetivo ? correcta : resto[j++]);
    if(!reordenadas.some(o=>o === undefined)){
      if(reordenadas.join('\u0000') !== opciones.join('\u0000')) nMovidas++;
      opciones = reordenadas;
      destino = objetivo;
    }
  }
  posFinal[destino] = (posFinal[destino] || 0) + 1;

  if(eliminada && ejemplos.length < muestra){
    ejemplos.push({n:ref, q:q.q, correcta, eliminada, quedan:opciones.filter(o=>o!==correcta), motivo});
  }
  return {options:opciones, correct:destino};
}

const fuente = fs.readFileSync(fichero,'utf8');

/* ---------- formato de ampliación: window.addQuestions(...) ---------- */
if(fuente.includes('window.addQuestions(')){
  const bloques = [];
  const win = { addQuestions(slug, tema, preguntas){ bloques.push({slug, tema, preguntas}); } };
  new Function('window', fuente)(win);

  bloques.forEach(b=>b.preguntas.forEach((q,i)=>{
    const r = normalizar(q, `${b.slug} t${b.tema} #${i+1}`);
    q.options = r.options;
    q.correct = r.correct;
  }));

  ejemplos.forEach(e=>{
    console.log(`\n── ${e.n} (${e.motivo})`);
    console.log(`   ${e.q.slice(0,110)}`);
    console.log(`   ✓ correcta:  ${e.correcta}`);
    e.quedan.forEach(o=>console.log(`     se queda:  ${o}`));
    console.log(`   ✗ eliminada: ${e.eliminada}`);
  });

  console.log(`\n${nTotal} preguntas procesadas.`);
  if(reducir) console.log(`${nReducidas} reducidas de 4 opciones a 3.`);
  console.log(`${nMovidas} con la correcta recolocada.`);
  if(nReferenciales) console.log(`${nReferenciales} con opciones referenciales, sin reordenar ni reducir.`);
  console.log('Reparto final de la posición correcta:', JSON.stringify(posFinal));

  if(aplicar){
    const cabecera = fuente.slice(0, fuente.indexOf('\nwindow.addQuestions('));
    const cuerpos = bloques.map(b=>
      `\n/* tema ${b.tema} · ${b.preguntas.length} preguntas revisadas */\n` +
      `window.addQuestions('${b.slug}', ${b.tema}, ${JSON.stringify(b.preguntas, null, 2)});\n`
    ).join('');
    fs.writeFileSync(fichero, cabecera + '\n' + cuerpos);
    console.log(`\n${fichero} actualizado. Comprueba con: node tools/validar.js`);
  } else {
    console.log('\nSimulación. Vuelve a ejecutarlo con --aplicar para escribir los cambios.');
  }
  process.exit(0);
}

/* ---------- formato de banco base: una pregunta por línea ---------- */
const lineas = fuente.split('\n');

const salida = lineas.map((linea, n)=>{
  if(!/^\s*\{q:/.test(linea)) return linea;

  const sangria = linea.match(/^\s*/)[0];
  const cuerpo = linea.trim().replace(/,$/,'');
  let q;
  try{ q = new Function('return ' + cuerpo)(); }
  catch(e){ console.log(`  ⚠ línea ${n+1}: no se puede interpretar, se deja igual`); return linea; }
  if(!Array.isArray(q.options)) return linea;

  const r = normalizar(q, n+1);

  if(!aplicar) return linea;

  const partes = [
    `q:${JSON.stringify(q.q)}`,
    `options:[${r.options.map(o=>JSON.stringify(o)).join(',')}]`,
    `correct:${r.correct}`,
    `exp:${JSON.stringify(q.exp)}`
  ];
  if(q.fuente) partes.push(`fuente:${JSON.stringify(q.fuente)}`);
  const coma = linea.trimEnd().endsWith(',') ? ',' : '';
  return `${sangria}{${partes.join(',')}}${coma}`;
});

ejemplos.forEach(e=>{
  console.log(`\n── línea ${e.n} (${e.motivo})`);
  console.log(`   ${e.q.slice(0,110)}`);
  console.log(`   ✓ correcta:  ${e.correcta}`);
  e.quedan.forEach(o=>console.log(`     se queda:  ${o}`));
  console.log(`   ✗ eliminada: ${e.eliminada}`);
});

console.log(`\n${nTotal} preguntas procesadas.`);
if(reducir) console.log(`${nReducidas} reducidas de 4 opciones a 3.`);
console.log(`${nMovidas} con la correcta recolocada.`);
if(nReferenciales) console.log(`${nReferenciales} con opciones referenciales, sin reordenar ni reducir (su sentido depende del orden).`);
console.log('Reparto final de la posición correcta:', JSON.stringify(posFinal));
if(!aplicar) console.log('\nSimulación. Vuelve a ejecutarlo con --aplicar para escribir los cambios.');
else {
  fs.writeFileSync(fichero, salida.join('\n'));
  console.log(`\n${fichero} actualizado. Comprueba con: node tools/validar.js`);
}
