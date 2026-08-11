/* Clasifica las preguntas de tema 1 (Constitución) de aux-admin-zaragoza,
   ya reducidas a 3 opciones en /tmp/tmp-constitucion.js, en los temas de
   Policía Local que les correspondan según qué Título/artículo de la CE
   tratan. Las de Título VII (Economía y Hacienda), IX (TC) y X (reforma)
   se descartan: Policía Local no tiene tema para ellas y forzar un
   encaje sería peor que no reutilizarlas. */
const fs = require('fs');
const path = require('path');
const { cargarOposicion, normalizar } = require('./lib/cargar.js');

const { data: pol } = cargarOposicion('policia-local-zaragoza');

const bloques = [];
new Function('window', fs.readFileSync('/tmp/tmp-constitucion.js', 'utf8'))(
  { addQuestions: (s, t, p) => bloques.push({ slug: s, tema: t, preguntas: p }) }
);
// el archivo quedó con dos bloques (bug de cabecera en normalizar-opciones.js
// al no encontrar un '\n' antes de 'window.addQuestions('); el último es el
// que de verdad está reducido a 3 opciones.
const preguntas = bloques[bloques.length - 1].preguntas;
if(preguntas.some(q => q.options.length !== 3 && !/todas las (anteriores|respuestas|opciones)/i.test(q.options[q.correct]))){
  throw new Error('El bloque usado no está reducido a 3 opciones — revisa /tmp/tmp-constitucion.js a mano.');
}

const TITULO_RE = /T[íi]tulo\s+(Preliminar|I{1,3}|IV|V|VI{0,3}|IX|X)\b/i;
const ART_RE = /art[íi]?c?u?l?o?\.?\s*(\d+)/i;

function porTitulo(m){
  const t = m[1].toLowerCase();
  if(t === 'preliminar' || t === 'i') return 1;
  if(['ii','iii','iv','v','vi'].includes(t)) return 2;
  if(t === 'viii') return 3;
  return null; // preliminar visto arriba; vii, ix, x -> sin destino
}
function porArticulo(n){
  if(n >= 1 && n <= 55) return 1;
  if(n >= 56 && n <= 127) return 2;
  if(n >= 137 && n <= 158) return 3;
  return null; // 128-136 (Hacienda), 159-169 (TC/reforma) -> sin destino
}

const KEYWORDS = [
  { re: /\brey\b|\bcorona\b|sucesi[oó]n a la corona|refrendo|regencia|pr[íi]ncipe de asturias/i, tema: 2 },
  { re: /cortes generales|congreso de los diputados|\bsenado\b|\bdiputados?\b|\bsenadores?\b|disoluci[oó]n de las c[aá]maras/i, tema: 2 },
  { re: /\bgobierno\b|presidente del gobierno|consejo de ministros|moci[oó]n de censura|cuesti[oó]n de confianza/i, tema: 2 },
  { re: /poder judicial|consejo general del poder judicial|\bcgpj\b|tribunal supremo|fiscal general del estado|\bjueces?\b/i, tema: 2 },
  { re: /\bmunicipios?\b|\bprovincias?\b|comunidad(es)? aut[oó]noma|estatuto de autonom[ií]a|diputaci[oó]n provincial/i, tema: 3 },
  { re: /tribunal constitucional|reforma constitucional/i, tema: null },
  { re: /econom[ií]a y hacienda|presupuestos generales del estado|tribunal de cuentas|deuda p[uú]blica/i, tema: null },
  { re: /derechos? (fundamentales?|y deberes)|libertad(es)?|nacionalidad|extranjer[oa]s|partidos? pol[ií]ticos?|sindicat|derecho de huelga|Defensor del Pueblo/i, tema: 1 }
];

function clasificar(q){
  const texto = q.q;
  const mTit = texto.match(TITULO_RE);
  if(mTit){
    const t = porTitulo(mTit);
    if(t !== null) return t;
    if(/vii\b/i.test(mTit[0]) || /ix\b/i.test(mTit[0]) || /\bx\b/i.test(mTit[0])) return null;
  }
  const mArt = texto.match(ART_RE);
  if(mArt){
    const t = porArticulo(parseInt(mArt[1], 10));
    if(t !== null) return t;
  }
  for(const k of KEYWORDS){
    if(k.re.test(texto)) return k.tema;
  }
  return 1; // Constitución en general, sin más pista: cae en el tema 1 (más amplio)
}

const vistos = new Set();
Object.values(pol.questions).forEach(lista => lista.forEach(q => vistos.add(normalizar(q.q))));

const nuevasPorTema = {};
let total = 0, descartadas = 0, duplicadas = 0;

preguntas.forEach(q => {
  const clave = normalizar(q.q);
  if(vistos.has(clave)){ duplicadas++; return; }
  const t = clasificar(q);
  if(t === null){ descartadas++; return; }
  vistos.add(clave);
  (nuevasPorTema[t] = nuevasPorTema[t] || []).push(q);
  total++;
});

console.log('Preguntas a trasladar:', total);
console.log('Descartadas (Título VII/IX/X, sin tema en Policía):', descartadas);
console.log('Duplicadas (ya existían):', duplicadas);
Object.keys(nuevasPorTema).sort((a,b)=>a-b).forEach(t => console.log('  tema', t, ':', nuevasPorTema[t].length));

fs.writeFileSync(
  path.join(__dirname, '..', 'lotes', 'importacion-constitucion-policia.json'),
  JSON.stringify(nuevasPorTema, null, 2)
);
console.log('\nGuardado en lotes/importacion-constitucion-policia.json (revisar antes de aplicar).');
