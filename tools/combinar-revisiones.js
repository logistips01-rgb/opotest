#!/usr/bin/env node
/* =======================================================
   Combina un lote nuevo con sus dos revisiones independientes.
   Uso:
     node tools/combinar-revisiones.js lotes/nuevas/<id>.json
   Lee <id>.rev1.json y <id>.rev2.json y escribe <id>.revisado.json,
   listo para tools/fusionar.js. Una pregunta queda CONFIRMADA solo si
   los dos revisores la confirman; en cualquier otro caso se marca
   DUDOSA y fusionar.js la aparta a data/pendientes/ con las dos notas.
   (Formato y reglas: lotes/INSTRUCCIONES-PREGUNTAS.md)
   ======================================================= */
'use strict';
const fs = require('fs');

const fichero = process.argv[2];
if(!fichero){
  console.error('Uso: node tools/combinar-revisiones.js lotes/nuevas/<id>.json');
  process.exit(1);
}
const base = fichero.replace(/\.json$/, '');
const lote = JSON.parse(fs.readFileSync(fichero, 'utf8'));
const revs = [1, 2].map(n=>{
  const f = `${base}.rev${n}.json`;
  if(!fs.existsSync(f)){ console.error(`Falta ${f}`); process.exit(1); }
  const lista = JSON.parse(fs.readFileSync(f, 'utf8'));
  return new Map(lista.map(r=>[r.q, r]));
});

let confirmadas = 0;
const cuenta = {};
lote.preguntas = lote.preguntas.map(p=>{
  const [r1, r2] = revs.map(m=>m.get(p.q));
  const v1 = r1 ? r1.veredicto : 'SIN REVISAR';
  const v2 = r2 ? r2.veredicto : 'SIN REVISAR';
  const ok = v1 === 'CONFIRMADA' && v2 === 'CONFIRMADA';
  const clave = `${v1} + ${v2}`;
  cuenta[clave] = (cuenta[clave] || 0) + 1;
  if(ok) confirmadas++;
  const { cita, ...resto } = p;
  return {
    ...resto,
    veredicto: ok ? 'CONFIRMADA' : (v1 === 'RECHAZADA' || v2 === 'RECHAZADA' ? 'RECHAZADA' : 'DUDOSA'),
    notaRevision: `Revisor 1 (${v1}): ${(r1 && r1.notaRevision) || '—'} | Revisor 2 (${v2}): ${(r2 && r2.notaRevision) || '—'}`
  };
});

fs.writeFileSync(`${base}.revisado.json`, JSON.stringify(lote, null, 1) + '\n');
console.log(`${fichero}: ${lote.preguntas.length} preguntas, ${confirmadas} confirmadas por los dos revisores`);
Object.entries(cuenta).forEach(([k, n])=>console.log(`   ${n} · ${k}`));
console.log(`→ ${base}.revisado.json`);
