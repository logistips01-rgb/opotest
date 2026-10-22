#!/usr/bin/env node
/* Pone en assets/js/catalog.js el número real de preguntas de UNA oposición
   (por defecto aux-admin-zaragoza), sin tocar las demás entradas.
   Uso: node tools/actualizar-recuento.js [slug] */
'use strict';
const fs = require('fs');
const path = require('path');
const { ROOT, cargarOposicion } = require('./lib/cargar.js');

const slug = process.argv[2] || 'aux-admin-zaragoza';
const { data } = cargarOposicion(slug);
const total = Object.values(data.questions).reduce((a, q)=>a + q.length, 0);

const f = path.join(ROOT, 'assets/js/catalog.js');
const src = fs.readFileSync(f, 'utf8');
const ini = src.indexOf(`slug:'${slug}'`);
if(ini < 0){ console.error(`No está ${slug} en catalog.js`); process.exit(1); }
const fin = src.indexOf('\n    }', ini);              // cierre de esa entrada
const bloque = src.slice(ini, fin);
if(!/preguntas:\d+/.test(bloque)){ console.error('La entrada no tiene «preguntas»'); process.exit(1); }
fs.writeFileSync(f, src.slice(0, ini) + bloque.replace(/preguntas:\d+/, `preguntas:${total}`) + src.slice(fin));
console.log(`${slug}: ${total} preguntas`);
