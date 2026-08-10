/* =======================================================
   Carga los bancos de preguntas fuera del navegador, para
   que los scripts de tools/ vean exactamente lo mismo que
   la aplicación (banco base + ampliaciones).
   ======================================================= */
'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..');

function normalizar(texto){
  return String(texto).toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9 ]/g,' ')
    .replace(/\s+/g,' ').trim();
}

/* Para comparar OPCIONES entre sí no se pueden quitar tildes ni símbolos:
   hay preguntas de ortografía cuyas opciones solo difieren en la tilde
   ("Examen" / "Exámen") y preguntas de ofimática con opciones que son
   solo símbolos ("=" / "+" / "#"). */
function normalizarOpcion(texto){
  return String(texto).toLowerCase().replace(/\s+/g,' ').trim();
}

/* Ejecuta un archivo del proyecto con un `window` simulado. */
function ejecutar(fichero, win){
  const abs = path.join(ROOT, fichero);
  if(!fs.existsSync(abs)) return false;
  new Function('window', fs.readFileSync(abs,'utf8'))(win);
  return true;
}

function crearWindow(){
  const cache = {};
  const avisos = [];
  const win = {
    OPOSICIONES: null,
    getOposicion(slug){ return (win.OPOSICIONES||[]).find(o=>o.slug===slug) || null; }
  };
  win.normalizarEnunciado = normalizar;
  win.console = console;

  /* catalog.js instala sus propias versiones de registerOposicion y
     addQuestions sobre window, con una caché interna que no se puede
     inspeccionar desde Node. Estas las sustituyen después de cargarlo,
     replicando la misma semántica (incluido el descarte de repetidas). */
  win.__instalarMocks = function(){
    win.registerOposicion = function(p){
      cache[p.slug] = { temas: p.temas || [], questions: p.questions || {} };
    };
    win.addQuestions = function(slug, tema, preguntas){
      const data = cache[slug];
      if(!data){ avisos.push(`addQuestions: ${slug} no está cargada`); return; }
      if(!data.temas.some(t=>t.id===tema)) avisos.push(`addQuestions: el tema ${tema} no está en el temario de ${slug}`);
      const lista = data.questions[tema] = data.questions[tema] || [];
      const vistas = new Set(lista.map(q=>normalizar(q.q)));
      preguntas.forEach(q=>{
        const clave = normalizar(q.q);
        if(vistas.has(clave)){ avisos.push(`addQuestions: pregunta repetida descartada en ${slug} tema ${tema}`); return; }
        vistas.add(clave);
        lista.push(q);
      });
    };
  };
  win.__instalarMocks();
  win.__cache = cache;
  win.__avisos = avisos;
  return win;
}

/* Devuelve el catálogo tal y como lo ve la app. */
function catalogo(){
  const win = crearWindow();
  ejecutar('assets/js/catalog.js', win);
  win.__instalarMocks(); // catalog.js acaba de sobrescribirlos
  return { entradas: win.OPOSICIONES, win };
}

/* Carga una oposición completa (base + ampliaciones). */
function cargarOposicion(slug){
  const {entradas, win} = catalogo();
  const meta = entradas.find(o=>o.slug===slug);
  if(!meta) throw new Error(`Oposición desconocida: ${slug}`);
  const files = meta.files || [meta.file];
  const cargados = [];
  files.forEach((f,i)=>{
    const ok = ejecutar(f, win);
    if(ok) cargados.push(f);
    else if(i===0) throw new Error(`Falta el banco base ${f}`);
  });
  const data = win.__cache[slug];
  if(!data) throw new Error(`${files[0]} no registró ninguna oposición`);
  return { meta, data, cargados, avisos: win.__avisos };
}

module.exports = { ROOT, normalizar, normalizarOpcion, catalogo, cargarOposicion };
