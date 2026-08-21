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

## tema1-fuera-alcance-aux-admin.json

52 preguntas que seguían en el tema 1 de `aux-admin-zaragoza` después de la
primera purga (la de las 260 de `constitucion-fuera-alcance-aux-admin.json`) y
que tampoco entran en el alcance oficial del tema. Retiradas el 17-ago-2026 en
una segunda pasada de auditoría, disparada porque el usuario señaló una
pregunta concreta que le salió en el test («¿En qué año se establecen las
provincias como división territorial del Estado?», 1833) y que no está en la
Constitución.

Alcance oficial del tema 1 (CONV 4/2026, ANEXO I): «La Constitución española:
elaboración y aprobación. Estructura y título preliminar. La Administración
pública en la Constitución. Organización territorial del Estado en la
Constitución: principios generales y Administración local». Es decir:

- **dentro**: elaboración y aprobación, estructura del texto, arts. 1-9
  (título preliminar), Título IV (arts. 97-107, Gobierno y Administración) y
  Título VIII capítulos I y II (arts. 137-142, principios generales y
  Administración local);
- **fuera**: historia constitucional, Título I, Corona (II), Cortes Generales
  (III), Poder Judicial (VI), relaciones Gobierno-Cortes (V), Economía y
  Hacienda (VII), reforma constitucional (X), el capítulo III del Título VIII
  (comunidades autónomas) y todo lo que **no es la Constitución** (Ley 50/1997
  del Gobierno, LOFAGE / Ley 40/2015, reales decretos de estructura).

Grupos del JSON: `historia_constitucional` (4),
`historia_division_provincial` (2), `reforma_constitucional` (2), `corona` (1),
`cortes_generales` (1), `procedimiento_legislativo_y_presupuesto` (3),
`relaciones_gobierno_cortes` (8), `ley_del_gobierno_50_1997` (10),
`organizacion_age_lofage_ley40` (13), `comunidades_autonomas` (5) y
`defectuosas` (3).

`defectuosas` es distinto de los demás: **no reutilizar tal cual**. Son tres
preguntas del banco original con la respuesta marcada mal o desfasada:

- «¿Qué artículo de la Constitución recoge la institución del Gobierno en
  funciones?» → marcaba el art. 107, que es el Consejo de Estado; el Gobierno
  en funciones es el art. 101.2 CE, y ninguna opción lo ofrece.
- «¿En cuál de las siguientes materias el gobierno ejerce el monopolio de la
  iniciativa legislativa?» → marcaba «desarrollo de la institución de la
  Corona»; el único monopolio real es el de los presupuestos (art. 134.1 CE).
- «¿De qué año es la Ley de Haciendas Locales?» → 1988 solo vale para la Ley
  39/1988, sustituida por el TRLRHL (RDL 2/2004); además una opción arrastra
  basura de scraping («1990. Tema Nº 10. El Municipio.»).

Cosas que **no** se archivaron, para que quede constancia de por qué:

- Las preguntas del tipo «¿en qué Título se regula X?» se quedan en el tema 1
  aunque X esté fuera de alcance: lo que preguntan es la **estructura** del
  texto, que sí entra.
- La investidura, el cese y la responsabilidad penal del Presidente
  (arts. 99-102) se quedan: están en el Título IV, no en el V.
- Dos preguntas correctas pero mal colocadas se **movieron** en lugar de
  archivarse, porque sí entran en la oposición: el año de la LBRL al tema 14 y
  el año del TRRL al tema 16 (van en
  `data/aux-admin-zaragoza.ampliacion.js`).
- Se corrigió en el sitio una respuesta falsa que se quedaba dentro de alcance:
  «¿Qué artículos comprende el Título I?» marcaba «del 9 al 55» cuando es del
  **10** al 55 (el art. 9 es del título preliminar, y otra pregunta del mismo
  tema ya decía que el preliminar va del 1 al 9).

Destino natural de este contenido: **Policía Nacional** y **Auxiliar
Administrativo DGA**, cuyos temarios sí tratan por separado la Corona, las
Cortes, el Poder Judicial y la organización de la Administración General del
Estado — comprobar sus bases antes de importar, igual que se hizo aquí.

## tema1-banco-original-sin-verificar.json

83 preguntas del tema 1 de `aux-admin-zaragoza` retiradas el 17-ago-2026 por
**no poder verificarse**, no por estar fuera de alcance. Son todo el resto del
material heredado del banco original: su `exp` es del tipo «Pregunta 404 del
banco de test (...)» y **no dice a qué artículo corresponde**, así que no hay
forma de contrastarlas contra el consolidado del BOE.

La decisión la tomó el usuario («quita las del banco original si hay dudas, y
genérame nuevas preguntas») después de ver que ese material tiene una tasa de
error real medible: de las 52 que se archivaron ese mismo día por alcance,
**tres tenían la respuesta marcada mal**, y entre las que se quedaban había
otra —«¿Qué artículos comprende el Título I?»— que decía «del 9 al 55» cuando
es del 10 al 55 y contradecía a otra pregunta del mismo tema.

Contraste, para que quede claro por qué se separan las dos mitades: las **93
preguntas que se quedan** en el tema 1 citan el precepto en la explicación
(«Art. 9.3: '...'»), y se comprobaron una a una contra el consolidado del BOE
(BOE-A-1978-31229) buscando el texto entrecomillado dentro del articulado real.
Las 83 de este archivo no ofrecen nada que comprobar.

Grupos del JSON, por bloque del temario: `estructura_del_texto` (24),
`administracion_publica_titulo_iv` (20),
`organizacion_territorial_titulo_viii` (15), `elaboracion_y_aprobacion` (12) y
`titulo_preliminar_y_otros` (12).

**Casi todas están dentro del alcance oficial del tema**, así que el contenido
es aprovechable: sirven de inventario de los ángulos que un examinador
pregunta de verdad, y se pueden rescatar de una en una si alguien las verifica
contra el BOE y les pone la cita. Lo que no se puede es servirlas a quien
estudia sin verificarlas. Su sustitución son los lotes nuevos del tema 1, con
artículo y apartado citados y pasados por revisor.

## tema15-informacion-age-fuera-alcance.json

50 preguntas retiradas del tema 15 de `aux-admin-zaragoza` el 19-ago-2026, en
la campaña de dejar el banco entero con cita de artículo. Son del banco original
importado (`exp` del tipo «Pregunta N del banco de test») y **no tratan la
materia del tema**.

El tema 15 oficial es «**El Reglamento de Órganos territoriales y Participación
ciudadana de Zaragoza. El Manual de Atención a la ciudadanía del Ayuntamiento de
Zaragoza**». Estas 50 tratan los servicios de información de la
**Administración General del Estado**: comisiones ministeriales de información
administrativa, unidades departamentales, oficinas de información de los
departamentos ministeriales, el Centro de Información Administrativa adscrito al
extinto Ministerio de Administraciones Públicas, y el libro de quejas y
sugerencias de los departamentos ministeriales. Cero solape con el reglamento
municipal de Zaragoza.

Además de estar fuera de alcance, buena parte está **desfasada**: se apoyan en
decretos de los años ochenta y noventa, en la Ley Orgánica de protección de
datos de 1999 (derogada por la LOPDGDD 3/2018) y en un ministerio que ya no
existe con ese nombre. Por eso este archivo se marca como **material de
consulta, no de reutilización directa**: si algún día sirviera para una
oposición de Administración del Estado, habría que rehacer las citas contra la
normativa vigente antes de usarlas.

Grupos del JSON: `clases_y_efectos_de_la_informacion_administrativa` (15),
`organizacion_informacion_administrativa_age` (14), `otros` (12),
`acceso_a_archivos_y_registros` (4), `libro_de_quejas_y_sugerencias_age` (4) y
`proteccion_de_datos_normativa_derogada` (1).

## banco-original-auditado-6.json · -10.json · -14.json

Preguntas del banco original de los temas 6, 10 y 14 retiradas el 19-ago-2026,
tras auditarlas **una a una contra el consolidado del BOE**. El encargo del dueño
del proyecto fue explícito: que toda pregunta muestre su artículo y que no quede
nada obsoleto ni fuera de alcance, porque la aplicación la usa una persona real
para preparar el examen.

De las 349 auditadas se conservan 99 (con su artículo localizado y su respuesta
comprobada), se reubican 14 en el tema que les corresponde y se archivan 236.

**tema6 (50 auditadas → 19 conservadas, 7 movidas, 24 archivadas)**
Grupos: `ley_30_1992_derogada` (13), `respuesta_marcada_incorrecta` (4),
`no_verificable_o_defectuosa` (3), `fuera_del_temario` (2), `otros` (2).

**tema10 (50 → 46 conservadas, 4 archivadas)**
Grupos: `respuesta_marcada_incorrecta` (3) y `otros` (1). Es el único tema donde
el material heredado estaba casi todo bien: trataba su materia y se apoyaba en
normas vigentes.

**tema14 (249 → 34 conservadas, 7 movidas, 208 archivadas)**
Grupos: `fuera_de_alcance_funcionamiento_y_electoral` (63),
`fuera_de_alcance_la_provincia` (36), `organo_derogado_comision_de_gobierno` (35),
`fuera_de_alcance_otras_entidades_locales` (31), `norma_o_regimen_derogado` (23),
`respuesta_marcada_incorrecta` (8), `otros_fuera_de_alcance` (6),
`defectuosa_o_ambigua` (4), `historia_del_regimen_local` (2).

### Lo que la auditoría demostró

**Trece preguntas tenían la respuesta marcada simplemente mal.** No eran matices:

- Plazo de caducidad de la revisión de actos nulos y de la declaración de
  lesividad: marcaban **tres meses**, que es el dato de la Ley 30/1992
  derogada. Los arts. 106.5 y 107.3 LPAC dicen **seis meses**, y la respuesta
  correcta no figuraba entre las cuatro opciones.
- Plazo para celebrar una sesión extraordinaria pedida por los concejales:
  marcaba **dos meses**; el art. 46.2.a LBRL dice **quince días hábiles**, y
  tampoco estaba entre las opciones.
- Número mínimo de concejales para pedirla: marcaba **una décima parte**; el
  mismo artículo dice **la cuarta parte**.
- El título de la LBRL dedicado a los bienes: marcaba el **IV**; es el **VI**.
- Uso común general y especial: **dos preguntas del mismo esquema resueltas de
  forma contradictoria entre sí**; el art. 75.1 RBEL dice lo contrario de lo que
  marcaba una de las dos.
- Publicación de la resolución de una alteración territorial: marcaba solo el
  **BOE**; el art. 13.2 RPDT exige BOE **y** boletines de la comunidad autónoma
  **y** de la provincia.

**Y una capa entera de obsolescencia**, además de las 13 anteriores: la
«Comisión de Gobierno», sustituida por la Junta de Gobierno Local en 2003; el
art. 45 LBRL, sin contenido desde la Ley 27/2013, y el art. 24 bis, que dejó a
las entidades inframunicipales sin personalidad jurídica; la lista de servicios
mínimos del art. 26.1 previa a 2013; el umbral de población del concejo abierto,
suprimido; y la dispensa de servicios mínimos, que ya no existe.

Se conserva todo porque el contenido puede servir para otra oposición cuyo
temario sí cubra la Provincia, las otras entidades locales o el funcionamiento
de los órganos municipales — pero **con dos avisos**: hay que rehacer las citas
contra normativa vigente, y las agrupadas en
`respuesta_marcada_incorrecta`, `norma_o_regimen_derogado` y
`organo_derogado_comision_de_gobierno` **no se pueden reutilizar tal cual**.

## tema15-rd208-1996-informacion-age.json

40 preguntas **generadas** (no heredadas) retiradas del tema 15 el 19-ago-2026,
sobre el Real Decreto 208/1996, de 9 de febrero, de servicios de información
administrativa y atención al ciudadano **de la Administración General del
Estado**.

Están correctamente redactadas y citan su artículo, pero **no entran en el
tema**: el epígrafe oficial son dos documentos municipales, el Reglamento de
Órganos Territoriales y de Participación Ciudadana de Zaragoza y el Manual de
Atención a la ciudadanía. La prueba está en el examen real de 1-jun-2025, que
pregunta cinco veces por materia de este tema y las cinco veces por el ROTPC.

El RD 208/1996 no figuraba en la lista de normas del tema en
`tools/fuentes.json`: lo añadió por su cuenta el redactor de esos lotes. Es la
misma materia por la que se archivaron 50 preguntas heredadas del mismo tema
(ver `tema15-informacion-age-fuera-alcance.json`), así que archivar estas 40 es
lo coherente.

A diferencia de esas 50, **estas sí son reutilizables tal cual** en una
oposición de Administración del Estado: llevan artículo y apartado citados y
verificados contra el consolidado.

## duplicados-retirados.json

33 preguntas retiradas el 20-ago-2026 por ser **duplicados reales**: el mismo
hecho preguntado dos veces con distintas palabras, con la misma respuesta y
citando el mismo artículo. Cada entrada guarda la retirada completa y el
enunciado de la que se quedó en su lugar, para poder deshacerlo.

De cada grupo se conservó la que tiene la **explicación más larga**, que es la
más útil para estudiar; a igualdad, la que ya estaba antes en el banco.

El patrón de origen es claro: casi todos son un par formado por una pregunta del
banco escrito a mano y otra de un lote generado. El redactor del lote recibe la
lista de enunciados existentes para no repetirlos, pero **compara texto**, y una
reformulación se le escapa: «Según el art. 37.1, las Cortes de Aragón tienen
carácter:» y «Según el art. 37.1 EAA, ¿qué carácter tienen las Cortes de
Aragón?», las dos con «Unicameral».

### Cómo se detectaron, y el falso positivo que casi se cuela

El primer detector daba **76 duplicados** y estaba mal. Dos defectos:

1. Filtraba las palabras de menos de cinco letras, así que **el número del
   artículo desaparecía** y «el art. 40 se titula» parecía idéntica a «el art. 46
   se titula». Llegó a agrupar **siete** preguntas distintas —los arts. 40 a 46
   de la LPAC— como si fueran una.
2. Comparaba las respuestas con «contiene» en vez de por igualdad, y
   «Notificación» está contenido en «Notificaciones a través de medios
   electrónicos».

El criterio corregido exige tres cosas a la vez: **misma referencia de artículo**
en la cita, respuesta correcta **exactamente igual**, y mucho solape de palabras
**conservando los números**. Eso bajó de 76 a 33 y dejó los grupos revisables a
mano, que es lo que se hizo.

Aun así quedó un falso positivo que hubo que excluir a mano: en el tema 10, las
preguntas sobre quién **aprueba**, quién **rectifica** y quién **comprueba** el
inventario de bienes comparten la respuesta («Al Pleno», art. 34 RBEL) y son casi
idénticas en su redacción, pero son **tres hechos distintos** —y el auditor del
tema 10 los había verificado uno a uno—. Borrar dos habría hecho perder
información real. Las tres siguen en el banco.

Lección para la próxima: un detector de duplicados que se fije solo en el
parecido del texto **no sirve**; la clave es la respuesta correcta, y aun así
hace falta mirar los grupos antes de borrar.

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

---

## `tema13-financiacion-capitalidad-fuera-alcance.json`

7 preguntas de los **arts. 56 a 59 de la Ley 10/2017** (régimen especial del
municipio de Zaragoza como capital de Aragón), retiradas el 21-ago-2026 de un
lote generado para el tema 13.

Los cuatro artículos están en el **Capítulo VII, «Especialidades del régimen de
financiación»**: asignaciones derivadas de la participación en los tributos de
la Comunidad Autónoma, Convenio bilateral económico-financiero con el Gobierno
de Aragón, competencias delegadas y su financiación, y procedimiento de pago y
compensación de deudas.

Ese capítulo **no entra por ninguna de las tres puertas** por las que el temario
de Auxiliar Administrativo llama a la ley de capitalidad:

| Tema | Lo que las bases CONV 4/2026 piden de la Ley 10/2017 | Artículos |
|------|------------------------------------------------------|-----------|
| 13 | «La aprobación del presupuesto municipal» | art. 50 (y los 48-49 a los que remite) |
| 14 | «disposiciones generales y especialidades en materia de organización» | Capítulos I y II, arts. 1-18 |
| 16 | «la aprobación de ordenanzas, ordenanzas fiscales y Reglamentos» | arts. 48 y 49 |

El redactor del lote las incluyó dando el art. 57 por concordancia del art. 50,
y el revisor discrepó con razón: el art. 57 regula el presupuesto **de la
Comunidad Autónoma**, no la aprobación del presupuesto municipal.

**Las 7 son correctas**: el revisor las verificó una a una contra el consolidado
`BOE-A-2018-1683` y todas citan bien su artículo y apartado. Se archivan por
alcance, no por error, y sirven tal cual si algún día el temario incorpora la
financiación de la capitalidad. Cada una lleva su `motivoArchivo`.

Del mismo lote, otras 3 preguntas (arts. 11.1.g, 14.1.h y 14.2) **no se
archivaron**: están en el Capítulo II, «Especialidades en materia de
organización», que es literalmente lo que pide el tema 14, y se reasignaron a
ese tema en lugar de retirarse.
