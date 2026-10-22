# Tema 3 · Revisión independiente del esquema (t03.js)

Revisión del 22-oct-2026. He comprobado cada dato contra los textos oficiales que he descargado y extraído yo. Las citas de `t03-citas.md` solo me han servido para saber dónde buscar. Todas las que he contrastado son literales y de la redacción vigente.

## Fuentes consultadas

| Fuente | Identificador | Última actualización / versión |
|---|---|---|
| Estatuto de Autonomía de Aragón (LO 5/2007), texto consolidado (`act.php`) | BOE-A-2007-8444 | Ficha: «Última actualización publicada el 28/12/2022». Versiones anteriores: 19/07/2011, 17/07/2010 y texto inicial de 23/04/2007. Notas de modificación en los arts. 36 («Se modifica por el art. único.1 de la Ley Orgánica 15/2022»), 38 («Se modifica el apartado 2 por el art. único.2…») y 55 («Se modifica por el art. único.3…»). |
| Estatuto, texto original y análisis (`doc.php`) | BOE-A-2007-8444 | «SE MODIFICA los arts. 36, 38.2 y 55, por Ley Orgánica 15/2022, de 27 de diciembre (Ref. BOE-A-2022-22677).» Lo he usado para comparar con la redacción de 2007. |
| Ley Orgánica 15/2022, de 27 de diciembre | BOE-A-2022-22677 | «BOE» núm. 311, de 28-dic-2022. En vigor el 28/12/2022, «Aplicable en la forma indicada en la disposición transitoria única». |
| Epígrafe oficial | `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, TEMA 3 | Coincide literalmente con `epigrafe`. |
| Alcance | `tools/fuentes.json` → `aux-admin-zaragoza` → tema 3 | Respetado: título preliminar, títulos II, III y V. Del resto solo aparecen las rúbricas del mapa. |
| Exámenes oficiales | `data.questions[21]` del banco | Índices 2 (1-jun-2025, P3), 4 (1-jun-2025, P5), 49 (1-jun-2025, P50), 79 (31-may-2026, P5), 105 (31-may-2026, P31) y 126 (31-may-2026, Reserva 4). He buscado por Estatuto, Aragón, Policía, Justicia de Aragón y Diputación General: no hay más preguntas del tema 21 sobre esta materia. |

## Comprobaciones hechas: 233

- 233 elementos del esquema: 2 fuentes y el epígrafe (3); 5 ideas esenciales; 63 entradas del mapa (rúbricas y rangos de títulos y capítulos, parte final y rúbricas de los arts. 1-10, 32-62 y 70-80); 10 cifras; 124 celdas o frases de las 6 secciones; 10 trampas; 6 notas de `examenes` y 12 marcas (`{{examen}}` y `examen:`).
- Puntos concretos del encargo:
  1. **Redacción vigente de los arts. 36, 38 y 55 (LO 15/2022).** El esquema la sigue:
     - **Art. 36.** Vigentes las cifras «entre sesenta y cinco y ochenta» escaños, «mínimo de 14 escaños» por provincia y «no supere 3 veces». La redacción de 2007 decía «2,75 veces» y no tenía mínimo provincial.
     - **Art. 38.2.** Dice ahora «Durante su mandato no podrán ser detenidos ni retenidos sino en caso de flagrante delito». Ha desaparecido la frase de 2007 «correspondiendo decidir, en todo caso, sobre su inculpación, prisión, procesamiento y juicio al Tribunal Superior de Justicia de Aragón».
     - **Art. 55.** Ahora tiene dos apartados (antes, tres). El 55.1 dice «no podrán ser detenidas ni retenidas sino en supuesto de flagrante delito».
     - **Supresión del aforamiento.** La trampa es correcta. Preámbulo de la LO 15/2022: «la supresión de los aforamientos de los diputados y las diputadas de las Cortes de Aragón y de las personas que componen el Gobierno de Aragón».
     - **Aplicación.** Disposición transitoria única: «será de aplicación a partir de la XI legislatura».
  2. **Capítulos del Título II, según el índice del consolidado.** Son:
     - art. 32, antes del capítulo I;
     - CAPÍTULO I «Las Cortes de Aragón» (33-45);
     - CAPÍTULO II «El Presidente» (46-52);
     - CAPÍTULO III «El Gobierno de Aragón o la Diputación General de Aragón» (53-58);
     - CAPÍTULO IV «El Justicia de Aragón» (59-60).

     El mapa tenía bien los rangos, pero metía el art. 32 en el capítulo I (corrección 2). `tools/fuentes.json` describe mal estos capítulos: llama «la Administración» al capítulo III y «Justicia de Aragón y otras instituciones» al IV. No lo he tocado porque las instrucciones no lo permiten. Hay que corregirlo aparte.
  3. **Pregunta 50 de 2025 (art. 76.3).** El texto vigente dice: «3. Corresponde a la Comunidad Autónoma la coordinación de la actuación de las Policías locales aragonesas». La opción b) del examen, «la coordinación de la actuación de la Policía autonómica con la de las Policías locales aragonesas», no aparece en el Estatuto. He buscado «polic» en todo el texto:
     - el art. 76.4 habla de la Junta de Seguridad, que coordina la Policía autonómica con los Cuerpos y Fuerzas de Seguridad del Estado;
     - el art. 71.58.ª habla de coordinar la seguridad privada con la Policía autonómica y las policías locales.

     La nota anterior de `examenes` no decía nada de la discrepancia, y la marca de examen estaba en una frase que también resumía el 76.1 y el 76.4. Las he corregido (correcciones 6 y 7).
- El resto de marcas de examen corresponden a una pregunta del tema 21 sobre ese punto exacto, con el año correcto. Las otras cinco notas de `examenes` (fecha y número de pregunta) son correctas.
- He contado en el índice del consolidado:
  - 115 artículos, del 1 al 115;
  - rangos de los títulos: TP 1-10, I 11-31, II 32-60, III 61-62, IV 63-69, V 70-80, VI 81-87, VII 88-98, VIII 99-114 y IX 115;
  - 6 disposiciones adicionales, 5 transitorias, una derogatoria y una final.

  Todo coincide con el mapa.

## Correcciones

| # | Lugar | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|---|
| 1 | `fuentes` (y comentario de cabecera) | Solo la LO 5/2007 consolidada | Se añade «Ley Orgánica 15/2022, de 27 de diciembre, de reforma del Estatuto (BOE-A-2022-22677): nueva redacción de los arts. 36, 38.2 y 55.» | La trampa del aforamiento cita la LO 15/2022, y la rúbrica vigente del art. 55 solo está en ella (corrección 3). Cada dato tiene que tener su fuente. | Análisis BOE: «SE MODIFICA los arts. 36, 38.2 y 55, por Ley Orgánica 15/2022, de 27 de diciembre (Ref. BOE-A-2022-22677).» |
| 2 | `mapa[2].titulo` | «Título II · Cap. I · Las Cortes de Aragón» (rango 32-45) | «Título II · Art. 32 y Cap. I · Las Cortes de Aragón» | El art. 32 («Instituciones») está en el Título II antes del capítulo I, que empieza en el art. 33. | Índice del consolidado: «TÍTULO II Organización institucional de la Comunidad Autónoma de Aragón · Artículo 32. Instituciones. · CAPÍTULO I Las Cortes de Aragón · Artículo 33. Disposiciones generales.» |
| 3 | `mapa[3]`, art. 55 | «Estatuto personal de los miembros» | «Estatuto de las personas miembros del Gobierno» | La LO 15/2022 cambió también la rúbrica del art. 55. El consolidado del BOE no recoge el cambio y sigue con la rúbrica de 2007 («Estatuto personal de los miembros del Gobierno de Aragón»). Manda el texto oficial publicado. El banco pregunta rúbricas de artículos (tema 3, pregunta 238). | LO 15/2022, art. único, Tres: «Se modifica el artículo 55, que queda redactado de la siguiente manera: «Artículo 55. Estatuto de las personas miembros del Gobierno de Aragón.»» |
| 4 | Sección «Título preliminar», fila art. 4 | «Aragoneses: los españoles con vecindad administrativa…» | «Condición política de aragonés: los españoles con vecindad administrativa…» | El art. 4 no define quién es aragonés en general, sino quién tiene la condición política de aragonés, que es lo que se pregunta. | Art. 4.1: «A los efectos del presente Estatuto, gozan de la condición política de aragoneses los ciudadanos españoles que tengan vecindad administrativa en cualquiera de los municipios de Aragón…» |
| 5 | Sección «Las Cortes de Aragón», art. 38 | «Diputados: sin mandato imperativo, inviolables por sus votos y opiniones, y no pueden ser detenidos ni retenidos salvo flagrante delito.» | «Diputados: sin mandato imperativo e inviolables, aun después de cesar, por sus votos y opiniones. Durante su mandato no pueden ser detenidos ni retenidos salvo flagrante delito.» | Faltaban los dos límites temporales que se preguntan: la inviolabilidad dura «aun después de haber cesado», y la protección frente a la detención solo «durante su mandato». Los arts. 38.1 y 38.2 salen 4 veces en el banco. | Art. 38: «1. … serán inviolables, aun después de haber cesado en su mandato, por los votos y opiniones que emitan en el ejercicio de su cargo. 2. Durante su mandato no podrán ser detenidos ni retenidos sino en caso de flagrante delito.» |
| 6 | Sección «Clases de competencias», lista, art. 76 | «Policía autonómica: Aragón podrá crearla. Le corresponde coordinar la actuación de las Policías locales aragonesas. Junta de Seguridad paritaria Estado-Comunidad.» con `examen: '2025'` en toda la frase | «Policía autonómica: Aragón podrá crearla (76.1). Le corresponde la coordinación de la actuación de las Policías locales aragonesas (76.3) {{examen:2025}}. Se creará, en su caso, una Junta de Seguridad paritaria Estado-Comunidad que coordina la Policía autonómica y los Cuerpos y Fuerzas de Seguridad del Estado (76.4).» | La marca de examen tiene que ir solo en el punto que cayó, el 76.3. Además, la Junta de Seguridad se crea «en su caso» y coordina con las fuerzas del Estado, no con las Policías locales. Sin eso, la frase podía reforzar la opción b) de la P50, que no está en el texto. | Art. 76: «1. La Comunidad Autónoma podrá crear una Policía autonómica… 3. Corresponde a la Comunidad Autónoma la coordinación de la actuación de las Policías locales aragonesas. 4. Se creará, en su caso, una Junta de Seguridad que, con representación paritaria del Estado y la Comunidad Autónoma, coordinará las actuaciones de la Policía autonómica y de los Cuerpos y Fuerzas de Seguridad del Estado.» |
| 7 | `examenes[2]` | «Art. 76.3 (coordinación de las Policías locales): examen oficial 1-jun-2025, pregunta 50.» | «Art. 76.3 (coordinación de la actuación de las Policías locales aragonesas): examen oficial 1-jun-2025, pregunta 50. La plantilla dio por correcta la opción c), «Las respuestas a) y b) son correctas». El art. 76.3 solo recoge la a): «Corresponde a la Comunidad Autónoma la coordinación de la actuación de las Policías locales aragonesas». La b), coordinación de la Policía autonómica con las Policías locales, no aparece con esa redacción en el Estatuto. El esquema sigue el texto del Estatuto.» | Punto 3 del encargo. La nota callaba la discrepancia, y la opositora no sabría qué contestar si la pregunta se repite. La nueva redacción solo describe hechos (qué dio por buena la plantilla y qué dice el artículo), sin opinar. Sigue el modelo de `t07.js` (P50 de 2026). | Art. 76.3 (citado arriba). Banco, `questions[21][49]`: opciones a) «La coordinación de la actuación de las Policías locales aragonesas», b) «La coordinación de la actuación de la Policía autonómica con la de las Policías locales aragonesas», c) «Las respuestas a) y b) son correctas»; `correct: 2`. |
| 8 | `trampas[9].ok` | «La LO 15/2022 suprimió el aforamiento. Solo queda que no pueden ser detenidos ni retenidos salvo flagrante delito.» | «La LO 15/2022 suprimió el aforamiento. Durante su mandato no pueden ser detenidos ni retenidos salvo en caso de flagrante delito.» | «Solo queda» podía leerse como que los diputados ya no tienen ninguna otra prerrogativa, y conservan la inviolabilidad del art. 38.1. Faltaba también «durante su mandato». | Art. 38.2: «Durante su mandato no podrán ser detenidos ni retenidos sino en caso de flagrante delito.» Art. 55.1: «… durante su mandato, no podrán ser detenidas ni retenidas sino en supuesto de flagrante delito.» |

El resto del esquema coincide con el texto vigente: cifras, investidura, confianza, censura, cese, disolución, delegación legislativa, decretos-leyes, Gobierno, Justicia, Administración y clases de competencias con sus ejemplos.

## Lo que añadiría o quitaría, pero no he tocado

- **Art. 55.2** (una ley de Cortes de Aragón determina el Estatuto, las atribuciones y las incompatibilidades de las personas miembros del Gobierno). Sale 2 veces en el banco y el esquema no lo recoge. Es una omisión, no un error.
- **Disposición transitoria única de la LO 15/2022** (la supresión del aforamiento se aplica «a partir de la XI legislatura»). Es exacta, pero no la he añadido: el esquema ya da la redacción vigente y el dato transitorio puede confundir más que ayudar.
- **Art. 36.3, regla de 3 veces.** Se podría añadir una trampa con el «2,75 veces» de la redacción de 2007. No hay ninguna pregunta del banco que use la cifra antigua (he buscado «2,75»), así que no hace falta.
- **`tools/fuentes.json`, tema 3.** La descripción de los capítulos II a IV del Título II es errónea (ver el punto 2 de arriba). Hay que corregirlo, pero no me corresponde tocar ese archivo.
- **Consolidado del BOE, rúbrica del art. 55.** No recoge la nueva rúbrica de la LO 15/2022. Cualquier pregunta sobre la rúbrica del art. 55 hay que contrastarla con la LO 15/2022, no con el consolidado.

- **Aviso de proceso.** Durante la revisión, otro proceso hizo un commit en el repositorio (`c989159`, «Esquemas de los temas 7 y 8 publicados»). Ese commit ya incluye mis cambios en `t03.js`. Yo no he hecho commit.

## Validación

`node tools/validar-esquemas.js aux-admin-zaragoza 3` → «Todo correcto» (0 errores, 0 avisos).

## Veredicto: APTO
