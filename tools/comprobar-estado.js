#!/usr/bin/env node
/* =======================================================
   Chequeo rápido tras un corte (fin de créditos, caída, etc.)
   Uso: node tools/comprobar-estado.js
   Comprueba que la app está entera y dice qué ha quedado a medias:
     1. banco de preguntas (tools/validar.js)
     2. esquemas (tools/validar-esquemas.js)
     3. que todos los .js de la app y de datos se pueden ejecutar
     4. que los lotes de lotes/ son JSON válidos y en qué fase están
     5. cambios sin guardar en git
   ======================================================= */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync, spawnSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
let mal = 0;

function paso(titulo, fn){
  process.stdout.write(`· ${titulo}… `);
  try{ const r = fn(); console.log(r || 'bien'); }
  catch(e){ mal++; console.log('MAL\n   ' + String(e.message).split('\n').slice(0, 6).join('\n   ')); }
}
function correr(script){
  const r = spawnSync('node', [path.join(ROOT, 'tools', script)], {cwd: ROOT, encoding: 'utf8'});
  if(r.status !== 0) throw new Error((r.stdout + r.stderr).trim().split('\n').slice(-5).join('\n'));
  return (r.stdout.trim().split('\n').pop());
}

paso('banco de preguntas', ()=>correr('validar.js'));
paso('esquemas', ()=>correr('validar-esquemas.js'));
paso('archivos de la app', ()=>{
  const dirs = ['assets/js', 'data', 'data/esquemas/aux-admin-zaragoza'];
  let n = 0;
  dirs.forEach(d=>fs.readdirSync(path.join(ROOT, d)).filter(f=>f.endsWith('.js')).forEach(f=>{
    const r = spawnSync('node', ['--check', path.join(ROOT, d, f)], {encoding: 'utf8'});
    if(r.status !== 0) throw new Error(`${d}/${f} no se puede ejecutar`);
    n++;
  }));
  return `bien (${n} archivos)`;
});
paso('lotes', ()=>{
  const dir = path.join(ROOT, 'lotes', 'nuevas');
  if(!fs.existsSync(dir)) return 'no hay lotes';
  const lotes = fs.readdirSync(dir).filter(f=>/^[^.]+\.json$/.test(f));
  const estado = lotes.map(f=>{
    const base = f.replace('.json', '');
    for(const x of fs.readdirSync(dir).filter(g=>g.startsWith(base + '.'))) JSON.parse(fs.readFileSync(path.join(dir, x), 'utf8'));
    const tiene = s=>fs.existsSync(path.join(dir, `${base}.${s}.json`));
    const fase = tiene('integrado') ? 'integrado'
      : tiene('revisado') ? 'combinado, falta integrar'
      : tiene('rev1') && tiene('rev2') ? 'revisado, falta combinar'
      : tiene('rev1') || tiene('rev2') ? 'falta un revisor' : 'sin revisar';
    return `${base}: ${fase}`;
  });
  return '\n   ' + estado.join('\n   ');
});
paso('git', ()=>{
  const s = execFileSync('git', ['status', '--short'], {cwd: ROOT, encoding: 'utf8'}).trim();
  return s ? `cambios sin guardar:\n   ${s.split('\n').join('\n   ')}` : 'todo guardado';
});

console.log(mal ? `\n${mal} problema(s): revisar antes de seguir.` : '\nLa app está entera.');
process.exit(mal ? 1 : 0);
