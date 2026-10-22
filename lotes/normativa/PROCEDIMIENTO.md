# Revisión mensual de cambios legales

Las bases de la convocatoria (BOPZ 170, 27-jul-2026) exigen las normas «vigentes en el momento de
celebración de los ejercicios». Cada mes se comprueba si alguna norma del temario ha cambiado y,
si ha cambiado, se actualizan las preguntas y los esquemas. La usuaria lo ve en la app, en
**Actualizaciones** (`actualizaciones.html`), y no hay avisos por correo.

## Pasos

1. Rama de trabajo: `claude/homepage-new-oppositions-e298rd`. Haz `git pull` antes de empezar.
2. Ejecuta `node tools/vigilar-normas.js`. Sale con código 0 si no hay cambios y con 2 si hay
   artículos cambiados; en ese caso lista las preguntas que los citan. El script reintenta solo
   cuando el BOE corta la conexión.
3. **Sin cambios:** ejecuta `node tools/vigilar-normas.js --actualizar`. Así se renueva la fecha
   «Normativa comprobada» de la app. Después, commit y push con el mensaje
   «Normativa comprobada a AAAA-MM-DD (sin cambios)». Fin.
4. **Con cambios:** por cada artículo cambiado:
   1. Descarga la redacción nueva y la anterior. La API del bloque,
      `https://www.boe.es/datosabiertos/api/legislacion-consolidada/id/<ID>/texto/bloque/<bloque>`
      con `Accept: application/xml`, trae todas las versiones.
   2. Un agente redactor revisa **todas** las preguntas afectadas, también las que tratan el
      contenido sin citar el artículo. Entrega un JSON como `lotes/normativa/revision-2026-10.json`.
   3. Un agente revisor **distinto** comprueba cada cambio propuesto contra el texto oficial.
      Solo se aplica lo que él da por bueno.
   4. Aplica los cambios al banco. En el tema 21 (exámenes oficiales) nunca se cambia la respuesta
      oficial: solo se actualiza la explicación, para indicar qué dice ahora la ley.
   5. Actualiza los esquemas afectados: `data/esquemas/<slug>/tNN.js` y
      `node tools/validar-esquemas.js`.
   6. Añade al principio de `data/actualizaciones.js` una entrada `tipo: "ley"` con la fecha, la
      norma, el artículo, un resumen claro del cambio y la lista de preguntas
      (`{tema, q, options, antes, ahora}`). Esas preguntas se pueden practicar desde la app.
   7. `node tools/validar.js` y `node tools/validar-esquemas.js` tienen que dar «Todo correcto».
   8. `node tools/vigilar-normas.js --actualizar`. Guarda la foto nueva y el informe en
      `lotes/normativa/`.
   9. Commit y push con un mensaje que diga qué norma ha cambiado y cuántas preguntas se han tocado.
5. Normas sin texto consolidado (Decreto 347/2002 de Aragón, ROTPC, Manual de Atención, Plan de
   Igualdad): el informe recuerda dónde mirarlas. Si una ha cambiado, se procede igual.
6. Nunca se borra contenido. Lo que deja de valer se archiva en `data/reserva/`.
