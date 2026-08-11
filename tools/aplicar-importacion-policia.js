/* Aplica lotes/importacion-3opc-policia.json (generado por
   importar-3opc-a-policia.js) al banco real de policia-local-zaragoza.js.
   Reescribe el archivo completo a partir de los TEMAS ya existentes y de
   las preguntas actuales + las importadas. */
const fs = require('fs');
const path = require('path');
const { cargarOposicion } = require('./lib/cargar.js');

const archivoEntrada = process.argv[2] || path.join(__dirname, '..', 'lotes', 'importacion-3opc-policia.json');

const { meta, data } = cargarOposicion('policia-local-zaragoza');
const nuevas = JSON.parse(fs.readFileSync(archivoEntrada, 'utf8'));

const questions = {};
Object.keys(data.questions).forEach(t => { questions[t] = data.questions[t].slice(); });
Object.keys(nuevas).forEach(t => {
  questions[t] = (questions[t] || []).concat(nuevas[t]);
});

// TEMAS: reconstruir literal a partir de la definición actual del archivo
const src = fs.readFileSync(path.join(__dirname, '..', 'data', 'policia-local-zaragoza.js'), 'utf8');
const temasBlockMatch = src.match(/const TEMAS = \[[\s\S]*?\];/);
if(!temasBlockMatch) throw new Error('No se encontró el bloque TEMAS en el archivo original.');
const temasBlock = temasBlockMatch[0];

const cabecera = src.slice(0, src.indexOf('const TEMAS'));
const cuerpoQuestions = Object.keys(questions)
  .map(Number).sort((a,b)=>a-b)
  .map(t => `${t}:${JSON.stringify(questions[t], null, 2)}`)
  .join(',\n');

const nuevoContenido =
  cabecera +
  temasBlock +
  '\n\nconst QUESTIONS = {\n' + cuerpoQuestions + '\n};\n\n' +
  "window.registerOposicion({\n  slug: 'policia-local-zaragoza',\n  temas: TEMAS,\n  questions: QUESTIONS\n});\n})();\n";

fs.writeFileSync(path.join(__dirname, '..', 'data', 'policia-local-zaragoza.js'), nuevoContenido);

const total = Object.values(questions).reduce((a,l)=>a+l.length, 0);
console.log('Archivo reescrito. Total de preguntas:', total);
Object.keys(questions).map(Number).sort((a,b)=>a-b).forEach(t => {
  if(questions[t].length) console.log('  tema', t, ':', questions[t].length);
});
