# Reserva de preguntas fuera de alcance

Preguntas que estaban en un banco pero **no entran en el temario oficial**
de esa oposición en concreto. No se descartan porque el contenido es
correcto y puede servir para otra oposición cuyo temario sí las cubra.

## constitucion-fuera-alcance-aux-admin.json

260 preguntas que estaban en el tema 1 ("La Constitución Española") del
banco original de `aux-admin-zaragoza`, retiradas el 12-ago-2026 al
comprobar contra las bases oficiales reales (BOPZ núm. 147, 30-jun-2025,
`tools/temarios/bases-aux-admin-zaragoza-2025.pdf`) que el Tema 1 de esa
convocatoria es mucho más estrecho de lo que parecía: solo cubre
"elaboración y aprobación, estructura y título preliminar, la
Administración pública en la Constitución (Título IV) y la organización
territorial del Estado: principios generales y Administración local
(Título VIII)". No incluye Título I (derechos y deberes), la Corona, las
Cortes Generales, el Poder Judicial, Economía y Hacienda, el Tribunal
Constitucional ni la reforma constitucional — que es justo lo que cubre
la mayoría de estas 260 preguntas.

Estructura del JSON: objeto con una clave por categoría temática
(`corona`, `cortes_generales`, `poder_judicial`, `comunidades_autonomas`,
`derechos_titulo_i`, `fuentes_del_derecho`, `hacienda_tc_reforma`, `otros`),
cada una con un array de preguntas en el formato habitual
`{q, options, correct, exp}` (sin `fuente`, son del banco original sin
cita de artículo).

Candidatas obvias para reutilizar este contenido en el futuro:
- **Policía Nacional**: su temario sí trae temas dedicados a Corona,
  Cortes Generales y Poder Judicial por separado — comprobar antes de
  usarlo tal cual, igual que se hizo aquí.
- **Auxiliar Administrativo DGA**: su tema de la Constitución puede tener
  un alcance distinto (más amplio) al del Ayuntamiento de Zaragoza —
  comprobar las bases de esa convocatoria antes de asumir nada.

Quedan además 10 preguntas del tema 1 que no se pudieron clasificar con
seguridad ni dentro ni fuera del alcance oficial; están en
`data/pendientes/aux-admin-zaragoza-t1-dudosas-revisar.json` para revisar
a mano.
