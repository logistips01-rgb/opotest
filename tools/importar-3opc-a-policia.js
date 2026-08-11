/* Traslada a policia-local-zaragoza.js las preguntas de 3 opciones que
   quedaron "atascadas" en aux-admin-zaragoza (temas 16-20, generadas
   cuando se asumió por error que esa oposición era de 3 opciones). Para
   Auxiliar Administrativo son inválidas (necesita 4); para Policía Local
   son directamente aprovechables, porque su examen real SÍ es de 3
   (confirmado en tools/temarios/policia-local-zaragoza.md).

   No inventa nada: son preguntas ya redactadas y revisadas contra el BOE
   en su momento, solo se reubican de banco y de tema.
*/
const fs = require('fs');
const path = require('path');
const { cargarOposicion, normalizar } = require('./lib/cargar.js');

const { data: aux } = cargarOposicion('aux-admin-zaragoza');
const { data: pol } = cargarOposicion('policia-local-zaragoza');

// artículo -> [rango, tema destino en policía] para temas con varias normas/títulos
function articuloDe(q){
  const texto = (q.fuente || q.q || '');
  const m = texto.match(/[Aa]rt\.?\s*(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

function destinoTema17(q){
  const n = articuloDe(q);
  if(n === null) return 8; // sin artículo identificable: caen en clases (fallback razonable)
  if(n >= 8 && n <= 13) return 8;   // TREBEP Título II: clases
  if(n >= 14 && n <= 54) return 9;  // TREBEP Título III: derechos y deberes
  if(n >= 55 && n <= 68) return 10; // TREBEP Título IV: adquisición y pérdida
  if(n >= 69 && n <= 84) return 8;  // TREBEP Título V: ordenación actividad profesional (mejor encaje: T8)
  return 8;
}

function destinoTema18(q){
  const n = articuloDe(q);
  if(n === null) return 10;
  if(n >= 93 && n <= 98) return 9;  // TREBEP Título VII: disciplinario
  return 10; // RD 365/1995 (1-23) y TREBEP Título VI situaciones (85-92)
}

const rutas = [
  { tema: 16, destino: () => 6 },
  { tema: 17, destino: destinoTema17 },
  { tema: 18, destino: destinoTema18 },
  { tema: 19, destino: () => 8 },
  { tema: 20, destino: () => 10 }
];

// enunciados ya existentes en TODO el banco de policía (para no duplicar)
const vistos = new Set();
Object.values(pol.questions).forEach(lista =>
  lista.forEach(q => vistos.add(normalizar(q.q)))
);

const nuevasPorTema = {};
let total = 0, saltadasPorDuplicado = 0, saltadasPor4Opciones = 0;

rutas.forEach(({ tema, destino }) => {
  const preguntas = (aux.questions[tema] || []).filter(q => q.options.length === 3);
  preguntas.forEach(q => {
    const clave = normalizar(q.q);
    if(vistos.has(clave)){ saltadasPorDuplicado++; return; }
    vistos.add(clave);
    const t = destino(q);
    (nuevasPorTema[t] = nuevasPorTema[t] || []).push(q);
    total++;
  });
  const con4 = (aux.questions[tema] || []).filter(q => q.options.length === 4).length;
  saltadasPor4Opciones += con4;
});

console.log('Preguntas a trasladar:', total);
console.log('Descartadas por duplicado (ya existían en policía):', saltadasPorDuplicado);
console.log('Ignoradas por seguir en 4 opciones (no tocadas, son de Aux. Admin.):', saltadasPor4Opciones);
console.log('Reparto por tema destino:');
Object.keys(nuevasPorTema).sort((a,b)=>a-b).forEach(t => console.log('  tema', t, ':', nuevasPorTema[t].length));

fs.writeFileSync(
  path.join(__dirname, '..', 'lotes', 'importacion-3opc-policia.json'),
  JSON.stringify(nuevasPorTema, null, 2)
);
console.log('\nGuardado en lotes/importacion-3opc-policia.json (revisar antes de aplicar).');
