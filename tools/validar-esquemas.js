#!/usr/bin/env node
/* Comprueba la estructura de los esquemas (data/esquemas/<slug>/tNN.js).
   Uso: node tools/validar-esquemas.js [slug] [tema]
   No comprueba el contenido jurídico: eso lo hacen los revisores contra
   el texto oficial. Aquí solo se vigila que la página pueda pintarlo. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const BASE = path.join(ROOT, 'data', 'esquemas');
const [slugArg, temaArg] = process.argv.slice(2);

const ETIQUETAS_OK = /^(b|\/b|i|\/i|br|br\/|br \/)$/;
let errores = 0, avisos = 0, total = 0;

function err(f, m){ errores++; console.log(`  ERROR ${f}: ${m}`); }
function warn(f, m){ avisos++; console.log(`  aviso ${f}: ${m}`); }

function revisarHTML(f, donde, s){
  if(typeof s !== 'string'){ err(f, `${donde}: se esperaba texto`); return; }
  if(!s.trim()) err(f, `${donde}: texto vacío`);
  const tags = s.match(/<[^>]*>/g) || [];
  tags.forEach(t=>{
    const nombre = t.slice(1, -1).trim().toLowerCase();
    if(!ETIQUETAS_OK.test(nombre)) err(f, `${donde}: etiqueta no permitida ${t}`);
  });
  const abiertas = (s.match(/<b>/g)||[]).length, cerradas = (s.match(/<\/b>/g)||[]).length;
  if(abiertas !== cerradas) err(f, `${donde}: <b> sin cerrar`);
  const ab2 = (s.match(/<i>/g)||[]).length, ce2 = (s.match(/<\/i>/g)||[]).length;
  if(ab2 !== ce2) err(f, `${donde}: <i> sin cerrar`);
  (s.match(/\{\{[^}]*\}\}/g)||[]).forEach(tok=>{
    if(!/^\{\{examen:\d{4}\}\}$/.test(tok)) err(f, `${donde}: marca desconocida ${tok}`);
  });
}
function revisarTexto(f, donde, x){
  if(typeof x === 'string') return revisarHTML(f, donde, x);
  if(!x || typeof x !== 'object'){ err(f, `${donde}: texto inválido`); return; }
  revisarHTML(f, donde + '.t', x.t);
  if(x.a !== undefined && (typeof x.a !== 'string' || !x.a.trim())) err(f, `${donde}.a vacío`);
  if(x.examen !== undefined && !/^\d{4}$/.test(String(x.examen))) err(f, `${donde}.examen debe ser un año`);
  const extra = Object.keys(x).filter(k=>!['t','a','examen'].includes(k));
  if(extra.length) err(f, `${donde}: campos desconocidos ${extra.join(', ')}`);
}
function lista(f, donde, arr, min, max){
  if(!Array.isArray(arr)){ err(f, `${donde}: falta o no es lista`); return false; }
  if(arr.length < min) err(f, `${donde}: mínimo ${min} elementos (tiene ${arr.length})`);
  if(max && arr.length > max) warn(f, `${donde}: más de ${max} elementos (${arr.length})`);
  return true;
}

function revisarBloque(f, donde, b){
  if(!b || typeof b !== 'object'){ err(f, `${donde}: bloque inválido`); return; }
  switch(b.tipo){
    case 'lista':
      if(lista(f, donde+'.items', b.items, 1)) b.items.forEach((x,i)=>revisarTexto(f, `${donde}.items[${i}]`, x));
      break;
    case 'tabla':
      if(lista(f, donde+'.cab', b.cab, 2, 4)) b.cab.forEach((c,i)=>{ if(typeof c !== 'string') err(f, `${donde}.cab[${i}] no es texto`); });
      if(lista(f, donde+'.filas', b.filas, 1)) b.filas.forEach((fila,i)=>{
        if(!Array.isArray(fila)) return err(f, `${donde}.filas[${i}] no es lista`);
        if(Array.isArray(b.cab) && fila.length !== b.cab.length) err(f, `${donde}.filas[${i}]: ${fila.length} celdas, la cabecera tiene ${b.cab.length}`);
        fila.forEach((c,j)=>revisarHTML(f, `${donde}.filas[${i}][${j}]`, c));
      });
      break;
    case 'columnas':
      if(lista(f, donde+'.cols', b.cols, 2, 2)) b.cols.forEach((c,i)=>{
        const d = `${donde}.cols[${i}]`;
        if(!c || typeof c.titulo !== 'string') err(f, `${d}: falta titulo`);
        if(!c.items && !c.reglas) err(f, `${d}: necesita items o reglas`);
        (c.items||[]).forEach((x,k)=>revisarTexto(f, `${d}.items[${k}]`, x));
        (c.reglas||[]).forEach((x,k)=>revisarTexto(f, `${d}.reglas[${k}]`, x));
      });
      break;
    case 'ejemplo':
      revisarHTML(f, donde+'.t', b.t);
      break;
    default:
      err(f, `${donde}: tipo desconocido "${b.tipo}"`);
  }
}

function revisar(f, slug, tema, e){
  ['titulo','epigrafe'].forEach(k=>{ if(typeof e[k] !== 'string' || !e[k].trim()) err(f, `falta ${k}`); });
  if(lista(f, 'etiquetas', e.etiquetas, 1, 3)) e.etiquetas.forEach((x,i)=>revisarHTML(f, `etiquetas[${i}]`, x));
  if(lista(f, 'fuentes', e.fuentes, 1)) e.fuentes.forEach((x,i)=>revisarHTML(f, `fuentes[${i}]`, x));
  if(lista(f, 'esencial', e.esencial, 3, 7)) e.esencial.forEach((x,i)=>revisarTexto(f, `esencial[${i}]`, x));
  if(lista(f, 'mapa', e.mapa, 1)) e.mapa.forEach((m,i)=>{
    if(typeof m.titulo !== 'string') err(f, `mapa[${i}]: falta titulo`);
    if(lista(f, `mapa[${i}].items`, m.items, 1)) m.items.forEach((it,k)=>{
      if(!Array.isArray(it) || it.length !== 2 || typeof it[0] !== 'string' || typeof it[1] !== 'string')
        err(f, `mapa[${i}].items[${k}]: debe ser ['nº','nombre']`);
    });
  });
  if(lista(f, 'cifras', e.cifras, 3, 12)) e.cifras.forEach((c,i)=>{
    ['v','d','a'].forEach(k=>{ if(typeof c[k] !== 'string' || !c[k].trim()) err(f, `cifras[${i}]: falta ${k}`); });
    if(c.d) revisarHTML(f, `cifras[${i}].d`, c.d);
  });
  if(lista(f, 'secciones', e.secciones, 3, 10)) e.secciones.forEach((s,i)=>{
    if(typeof s.titulo !== 'string') err(f, `secciones[${i}]: falta titulo`);
    if(lista(f, `secciones[${i}].bloques`, s.bloques, 1)) s.bloques.forEach((b,k)=>revisarBloque(f, `secciones[${i}].bloques[${k}]`, b));
  });
  if(lista(f, 'trampas', e.trampas, 4, 12)) e.trampas.forEach((t,i)=>{
    ['x','ok','a'].forEach(k=>{ if(typeof t[k] !== 'string' || !t[k].trim()) err(f, `trampas[${i}]: falta ${k}`); });
    if(t.x) revisarHTML(f, `trampas[${i}].x`, t.x);
    if(t.ok) revisarHTML(f, `trampas[${i}].ok`, t.ok);
  });
  if(e.examenes !== undefined && lista(f, 'examenes', e.examenes, 0)) e.examenes.forEach((x,i)=>revisarHTML(f, `examenes[${i}]`, x));
  const conocidos = ['titulo','epigrafe','etiquetas','fuentes','esencial','mapa','cifras','secciones','trampas','examenes'];
  Object.keys(e).filter(k=>!conocidos.includes(k)).forEach(k=>err(f, `campo desconocido ${k}`));
}

const slugs = slugArg ? [slugArg] : fs.readdirSync(BASE).filter(d=>fs.statSync(path.join(BASE, d)).isDirectory());
slugs.forEach(slug=>{
  const dir = path.join(BASE, slug);
  if(!fs.existsSync(dir)){ console.log(`No existe ${dir}`); errores++; return; }
  const ficheros = fs.readdirSync(dir).filter(n=>/^t\d{2}\.js$/.test(n))
    .filter(n=>!temaArg || parseInt(n.slice(1,3)) === parseInt(temaArg)).sort();
  console.log(`${slug}: ${ficheros.length} esquema(s)`);
  ficheros.forEach(n=>{
    const f = `${slug}/${n}`;
    const tema = parseInt(n.slice(1,3));
    const registrados = [];
    const ctx = { registerEsquema:(s,t,d)=>registrados.push({s,t,d}) };
    try{
      vm.runInNewContext(fs.readFileSync(path.join(dir, n), 'utf8'), ctx, {filename:f});
    }catch(e){ err(f, 'no se puede ejecutar: ' + e.message); return; }
    if(registrados.length !== 1){ err(f, `debe llamar a registerEsquema una vez (lo hace ${registrados.length})`); return; }
    const r = registrados[0];
    if(r.s !== slug) err(f, `slug "${r.s}" no coincide con la carpeta`);
    if(r.t !== tema) err(f, `tema ${r.t} no coincide con el nombre del archivo`);
    total++;
    revisar(f, slug, tema, r.d || {});
  });
});

// el catálogo debe anunciar exactamente los esquemas que existen
// (solo en la pasada completa: con un tema suelto no tiene sentido)
if(!temaArg) try{
  const win = {};
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'assets/js/catalog.js'), 'utf8'), {window: win});
  (win.OPOSICIONES||[]).forEach(o=>{
    const dir = path.join(BASE, o.slug);
    const hay = fs.existsSync(dir) ? fs.readdirSync(dir).filter(n=>/^t\d{2}\.js$/.test(n)).map(n=>parseInt(n.slice(1,3))).sort((a,b)=>a-b) : [];
    const dice = (o.esquemas||[]).slice().sort((a,b)=>a-b);
    if(hay.join() !== dice.join()) err('catalog.js', `${o.slug}: esquemas anunciados [${dice}] y existentes [${hay}] no coinciden`);
  });
}catch(e){ err('catalog.js', e.message); }

console.log(`\n${total} esquema(s) revisados · ${errores} error(es) · ${avisos} aviso(s)`);
console.log(errores ? 'HAY ERRORES' : 'Todo correcto');
process.exit(errores ? 1 : 0);
