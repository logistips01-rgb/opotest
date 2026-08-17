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

## prl-fuera-alcance-aux-admin.json

263 preguntas de **Prevención de Riesgos Laborales** que estaban en el tema 20
del banco de `aux-admin-zaragoza`, retiradas el 17-ago-2026 al comprobar que
la convocatoria vigente **cambió ese tema**.

El banco se había construido sobre las bases de la convocatoria de 47 plazas
(BOPZ núm. 147, 30-jun-2025, `tools/temarios/bases-aux-admin-zaragoza-2025.pdf`),
cuyo tema 20 era «La Ley de Prevención de Riesgos laborales: objeto y carácter
de la norma, derecho a la protección frente a los riesgos laborales, servicios
de prevención». La convocatoria nueva —**CONV 4/2026**, 85 plazas, firmada el
15-jul-2026, `tools/temarios/bases-aux-admin-zaragoza-2026-conv4.pdf`— sustituye
ese tema 20 por «**La Ley de Urbanismo de Aragón**». Los temas 1 a 19 no
cambian de materia (el 19 solo se redacta más corto), así que solo se retiró
el tema 20.

Estructura del JSON: objeto con una clave por norma de origen, cada una con un
array de preguntas en el formato habitual `{q, options, correct, exp, fuente}`:
- `lprl` (178): Ley 31/1995 de Prevención de Riesgos Laborales.
- `rd39_servicios_prevencion` (42): RD 39/1997, Reglamento de los Servicios de Prevención.
- `rd486_lugares_trabajo` (26): RD 486/1997, lugares de trabajo.
- `rd488_pantallas` (17): RD 488/1997, pantallas de visualización.

**Destino de reutilización ya identificado y verificado**: en el *mismo* PDF de
la convocatoria nueva, el temario de **Oficial Mantenimiento General** mantiene
la LPRL en su parte primera, tema 4 («… La Ley de Prevención de Riesgos
Laborales: objeto y carácter de la norma»), y también aparece en los temarios
de Oficial Fontanero (temas 19-20) y Oficial Polivalente Instalaciones
Deportivas (tema 20). Si algún día se añade alguna de esas categorías al
catálogo, estas 263 preguntas valen casi tal cual — comprobando primero el
alcance exacto de cada tema, que es más estrecho que el que tenía Auxiliar.
