# Revisión del esquema del tema 14 (municipio, gran población y Ley de capitalidad): Auxiliar Administrativo, Ayto. Zaragoza

Revisor independiente. Fecha: 22-oct-2026.

## Fuentes consultadas

- **Ley 7/1985, de 2 de abril (LBRL)**: texto consolidado `BOE-A-1985-5392`, descargado hoy de
  https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392 y pasado a texto plano en la carpeta de trabajo
  (`scratchpad/rev-t14/lbrl.txt`). **Última actualización publicada el 03/10/2026**. He mirado las notas
  de modificación de cada artículo usado (11-18, 25-28 y 121-138). Para los incisos anulados por el TC
  he consultado también el HTML original, donde el BOE los marca en negrita.
- **Ley 10/2017, de 30 de noviembre, de capitalidad de Zaragoza**: texto consolidado `BOE-A-2018-1683`,
  descargado hoy (`scratchpad/rev-t14/capit.txt`). **Última actualización publicada el 15/01/2019**: la
  anulación del art. 14.1.u por la STC 137/2018, que el esquema no usa. He leído los caps. I y II
  (arts. 1-18), el art. 50 (para la P12 de 2026) y las DA 1.ª y 2.ª.
- Epígrafe oficial: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, tema 14.
- Alcance: `tools/fuentes.json`, `aux-admin-zaragoza`, tema 14 (aviso de alcance de 19-ago-2026).
- Banco: tema 21 (exámenes oficiales, 147 preguntas) y tema 14 (las `fuente` de sus 296 preguntas, para
  ver qué se pregunta más).
- No me he fiado de `t14-citas.md`: he cotejado cada cita con mi propia descarga. Las citas literales del
  redactor coinciden con el consolidado. Los errores estaban en cómo se resumían en el esquema.

## Comprobaciones hechas: unas 150

- **Epígrafe**: literal del BOPZ 170.
- **Fuentes y fechas**: las fechas de actualización de los dos consolidados son correctas.
- **Mapa**: 4 bloques y 35 entradas comprobados contra los rótulos de los consolidados. Solo había una
  imprecisión: el art. 11 no está en el cap. I (corregido).
- **Cifras**: las 9 (4.000 hab., 10 años, 2 años, 5 años, 250.000, 175.000, 6 meses, 1/3 y 3) son correctas.
  La de 2 años la he precisado (ver tabla).
- **Esencial**: las 5 ideas. He corregido una (art. 121.1).
- **Secciones**: he comprobado cada dato. Lo más relevante:
  - **Art. 25.2.q (punto 1 del encargo)**: la nota del consolidado dice «Se añade la letra q) al apartado 2
    por la disposición final 3.1 de la Ley 4/2026, de 1 de octubre. Ref. BOE-A-2026-20528». El selector de
    redacciones del art. 25 dice: «Última actualización, publicada el 03/10/2026, en vigor a partir del
    23/10/2026, [No vigente aún]». La redacción vigente hoy es la de la «Modificación publicada el
    21/03/2026, en vigor a partir del 22/03/2026» (letra p, RDL 7/2026). La fecha del redactor era correcta,
    pero «en vigor desde el 23-10-2026» se podía leer como si la letra q ya estuviera en vigor. Hoy (22-oct)
    todavía no lo está. Además, el contenido de la letra q estaba recortado. Lo he corregido.
  - **Art. 26 (punto 2)**: he comprobado celda a celda las 4 filas de la tabla con el art. 26.1.a-d. Todas
    coinciden con el texto vigente: todos los municipios (8 servicios), más de 5.000 (parque, biblioteca y
    tratamiento de residuos), más de 20.000 (protección civil, evaluación e información de situaciones de
    necesidad social y atención inmediata a personas en situación o riesgo de exclusión social, prevención
    y extinción de incendios e instalaciones deportivas) y más de 50.000 (transporte colectivo urbano y
    medio ambiente urbano). El art. 26.2 (coordinación de la Diputación, letras a-f) también es correcto.
    Los incisos anulados por la STC 111/2016 son «al Ministerio de Hacienda y Administraciones Públicas» y
    la frase «Para reducir los costes efectivos de los servicios el mencionado Ministerio decidirá sobre la
    propuesta formulada…» (en negrita en el HTML del BOE). **No aparecen** en el esquema. Correcto.
  - **Art. 126.2 (punto 3)**: el inciso que el BOE marca en negrita es «El Alcalde podrá nombrar como
    miembros de la Junta de Gobierno Local a personas que no ostenten la condición de concejales, siempre
    que su número no supere un tercio de sus miembros, excluido el Alcalde.». La nota dice «Se declara la
    inconstitucionalidad y nulidad del inciso destacado del párrafo segundo del apartado 2 por Sentencia del
    TC 103/2013, de 25 de abril». El esquema lo trata bien: da el tope de un tercio «además del Alcalde» como
    vigente y explica que el inciso de los no concejales es inconstitucional y nulo (STC 103/2013). No hay
    nada que corregir.
  - Arts. 121-138: ámbito, Pleno (mayorías del 123.2 y delegables del 123.3), Alcalde (indelegables del
    124.5), Tenientes, JGL (126-127), distritos, asesoría jurídica, la lista completa del art. 130.1.B,
    Consejo Social, Comisión de Sugerencias, arts. 133-136, art. 137 (vía, reposición potestativa y
    composición) y art. 138. Todo es correcto.
  - Ley 10/2017: arts. 1-4, 6, 7, 8.1, 10, 11 (atribuciones y el reparto del 11.3 en indelegables, solo en
    Comisiones y la letra r), 12 (incluidos 12.2 y 12.3), 13, 14, 15-18 y DA 2.ª. Todo es correcto salvo
    una frase confusa sobre el art. 18 (corregida).
- **Trampas**: las 10. Cada `x` es falsa y cada `ok` es cierta según el texto vigente.
- **Marcas de examen (punto 4)**: he comprobado las 19 preguntas en el tema 21 del banco, y también cada
  marca `{{examen}}` y cada línea de `examenes`:

| Examen | P | Índice del banco | Punto | Marca en el esquema | Resultado |
|---|---|---|---|---|---|
| 1-jun-2025 | 4 | #3 | 13.4.f, la dispensa no tiene plazo | 13.4.f, 2025 | OK |
| 1-jun-2025 | 15 | #14 | 26.1.b, biblioteca (más de 5.000) | tabla del art. 26, 2025 | OK |
| 1-jun-2025 | 17 | #16 | 121.1.c, capital de provincia: lo decide la Asamblea Legislativa | regla de c) y d), 2025 | OK |
| 1-jun-2025 | 22 | #21 | 137.2, solo contencioso | tabla del art. 137, 2025 | OK |
| 1-jun-2025 | 36 | #35 | 126.2, un tercio además del Alcalde | JGL, 2025 | OK |
| 1-jun-2025 | 37 | #36 | 122.1, el Pleno es el órgano de máxima representación política | Pleno, 2025 | OK |
| 1-jun-2025 | 43 | #42 | 127.1.b, proyecto de presupuesto: JGL | JGL, 2025 | OK |
| 1-jun-2025 | 46 | #45 | 27.1, no inferior a 5 años | esencial y art. 27, 2025 | OK |
| 31-may-2026 | 1 | #75 | art. 6, Siempre Heroica e Inmortal | títulos, 2026 | OK |
| 31-may-2026 | 2 | #76 | 12.2, bandos indelegables | delegaciones del Alcalde, 2026 | OK |
| 31-may-2026 | 6 | #80 | 12.1, representa y responde ante el Pleno | fila del Alcalde, 2026 | OK |
| 31-may-2026 | 8 | #82 | 129.2, hay que ser funcionario | asesoría jurídica, 2026 | OK |
| 31-may-2026 | 9 | #83 | 121.1.a y b, Zaragoza | 121.1.b, 2026 | OK |
| 31-may-2026 | 12 | #86 | arts. 11, 14 y 50: proyecto del Gobierno, aprobación del Pleno, sin «aprobación inicial» | Pleno y Gobierno, 2026 | OK (comprobado con el art. 50.a-c) |
| 31-may-2026 | 32 | #106 | 130.1.B, el presidente del órgano económico-administrativo no está en la lista | art. 130, 2026 | OK |
| 31-may-2026 | 36 | #110 | 13.5, secretas salvo atribuciones delegadas por el Pleno | Gobierno, 2026 | OK |
| 31-may-2026 | 43 | #115 | 26.1.a, alcantarillado | tabla del art. 26, 2026 | OK |
| 31-may-2026 | 46 | #118 | 13.4, colindantes de la misma provincia | fusión, 2026 | OK |
| 31-may-2026 | 47 | #119 | 16.1, residencia y domicilio habitual | Padrón, 2026 | OK |

  En `examenes` hay 19 líneas y todas tienen bien la fecha y el número. No hay ninguna marca sin pregunta
  detrás.

- **Segundo ejercicio de 2026, P10 (punto 5)** (banco #137): el enunciado pregunta a qué órgano
  corresponden «las competencias ejecutivas y de gestión, en todos sus aspectos, relativas a la
  adquisición, gestión, administración, aprovechamiento y enajenación del patrimonio municipal». La clave
  del banco es c) «Al Alcalde, que puede delegar o desconcentrar esas funciones». Pero el art. 14.1 de la
  Ley 10/2017 dice: «Corresponden al Gobierno de Zaragoza las siguientes atribuciones: […] g) Las
  competencias ejecutivas y de gestión, en todos sus aspectos, relativas a la adquisición, gestión,
  administración, aprovechamiento y enajenación del patrimonio municipal y concesiones sobre los bienes
  […]». Además, el art. 14.2 permite al Gobierno de Zaragoza delegar o desconcentrar la letra g). Según el
  texto legal, la respuesta es **d) Al Gobierno de Zaragoza**. El redactor tiene razón. El esquema pone el
  patrimonio entre las atribuciones del Gobierno de Zaragoza, **sin marca de examen**, y no lo menciona en
  `examenes`. Correcto: no se debe marcar.

## Correcciones

| # | Dónde | Texto anterior | Texto nuevo | Motivo | Cita oficial |
|---|---|---|---|---|---|
| 1 | Sección «Competencias municipales», art. 25.2 | «…comunidades de energía; igualdad y accesibilidad de las personas con discapacidad (letra q, en vigor desde el 23-10-2026).» | «…comunidades de energía. Letra q (igualdad de oportunidades, no discriminación y accesibilidad universal de las personas con discapacidad): la añade la Ley 4/2026 y **entra en vigor el 23-10-2026**; hasta entonces la lista acaba en la p.» | Hoy la letra q aún no está en vigor. «En vigor desde» se podía leer como si ya lo estuviera. Además, su contenido estaba recortado. | Nota: «Se añade la letra q) al apartado 2 por la disposición final 3.1 de la Ley 4/2026, de 1 de octubre.» Selector: «Última actualización, publicada el 03/10/2026, en vigor a partir del 23/10/2026, [No vigente aún].» Art. 25.2.q: «Promoción de actuaciones en materia de igualdad de oportunidades, no discriminación y accesibilidad universal de las personas con discapacidad.» |
| 2 | Misma frase, letra e) | «atención inmediata a personas en riesgo de exclusión social» | «evaluación e información de situaciones de necesidad social y atención inmediata a personas en situación o riesgo de exclusión social» | Faltaba la primera mitad de la letra e), que se pregunta en el banco (tema 14, #68). | Art. 25.2.e: «Evaluación e información de situaciones de necesidad social y la atención inmediata a personas en situación o riesgo de exclusión social.» |
| 3 | Esencial 4, art. 121.1 | «Otras capitales y municipios de más de 75.000 con circunstancias especiales, solo si lo decide la Asamblea Legislativa.» | «Capitales de provincia, capitales autonómicas o sedes de instituciones autonómicas, y municipios de más de 75.000 con circunstancias especiales: solo si lo decide la Asamblea Legislativa, a iniciativa del ayuntamiento.» | «Otras capitales» dejaba fuera las sedes de instituciones autonómicas y la iniciativa municipal. También podía hacer pensar que la capital de provincia necesita un mínimo de población. En la P17 de 2025, la respuesta es que basta la decisión de la Asamblea, «independientemente de su población». | Art. 121.1.c: «A los municipios que sean capitales de provincia, capitales autonómicas o sedes de las instituciones autonómicas.» Último párrafo: «se exigirá que así lo decidan las Asambleas Legislativas correspondientes a iniciativa de los respectivos ayuntamientos.» |
| 4 | Padrón, art. 15 | «Los inscritos son los vecinos. La vecindad se adquiere…» | «El conjunto de inscritos es la población del municipio y los inscritos son los vecinos. La vecindad se adquiere…» | Faltaba la definición de población, que es un elemento del epígrafe y se pregunta (tema 14, #106). | Art. 15: «El conjunto de personas inscritas en el Padrón municipal constituye la población del municipio.» |
| 5 | Padrón, art. 16.1, y cifra «2 años» | «Extranjeros no comunitarios…» / «extranjeros no comunitarios» | «Extranjeros de fuera de la UE y del Espacio Económico Europeo…» / «extranjeros de fuera de la UE y del EEE» | «No comunitarios» es impreciso: la ley también excluye a los ciudadanos del EEE (y de los Estados con convenio). | Art. 16.1: «extranjeros sin autorización de residencia de larga duración, no pertenecientes a un Estado miembro de la Unión Europea, a Estados parte en el Acuerdo sobre el Espacio Económico Europeo o a otros Estados a los que, en virtud de un convenio internacional se extienda el régimen jurídico…» |
| 6 | Padrón, art. 17.1 | «…el Ayuntamiento, con medios informáticos.» | Se añade: «Si un municipio no puede mantenerlo informatizado, asume esa gestión la Diputación (o Cabildo o Consejo insular).» | Es un dato preguntado (tema 14, #253) y entra en el epígrafe. | Art. 17.1: «Las Diputaciones Provinciales o entidades equivalentes, Cabildos y Consejos insulares asumirán la gestión informatizada de los Padrones de los municipios que, por su insuficiente capacidad económica y de gestión, no puedan mantener los datos de forma automatizada.» |
| 7 | Derechos y deberes, art. 18 | 8 puntos (letras a-h) | Se añade «Los demás establecidos en las leyes» | Sin la letra i) la lista parecía cerrada. | Art. 18.1.i: «Aquellos otros derechos y deberes establecidos en las leyes.» |
| 8 | Ley 10/2017, fila «Otros (15-18)» | «…y fija en el acuerdo de creación las comisiones específicas de asesoramiento para dictaminar recursos.» | «Puede haber comisiones específicas de asesoramiento para dictaminar recursos administrativos; sus funciones, composición y funcionamiento los fija el Gobierno de Zaragoza en el acuerdo de creación.» | La frase anterior era confusa: daba a entender que el Gobierno «fija las comisiones» en el acuerdo de creación del Consejo Jurídico. | Art. 18: «Podrán constituirse Comisiones específicas de asesoramiento para dictaminar recursos administrativos, cuyas funciones, composición y funcionamiento se establecerán por el Gobierno de Zaragoza en el acuerdo de creación.» |
| 9 | Delegaciones del Alcalde, art. 12.2 | «medidas urgentes» | «medidas de extraordinaria y urgente necesidad» | Es el término legal (letra h); «urgentes» sin más es impreciso. | Art. 12.1.h: «Adoptar las medidas necesarias y adecuadas en casos de extraordinaria y urgente necesidad, dando cuenta inmediata al Pleno.» |
| 10 | Mapa, bloque 1 | «LBRL · Título II, cap. I · Territorio y población» | «LBRL · Título II (art. 11) y cap. I · Territorio y población» | El art. 11 va antes del capítulo I. El capítulo I empieza en el art. 12. | Consolidado: «Artículo 11.» y después «CAPÍTULO I Territorio y población», «Artículo 12.» |

`node tools/validar-esquemas.js aux-admin-zaragoza 14` → «Todo correcto».

## Lo que no he tocado

- **Clave del banco en la P10 del segundo ejercicio de 2026 (#137)**: según el art. 14.1.g de la Ley
  10/2017, la clave del banco (c, Alcalde) no es la correcta: debería ser d) Gobierno de Zaragoza. No es un
  archivo de esta revisión, así que no lo he cambiado. Conviene revisar esa pregunta, y si se puede la
  plantilla oficial, porque si la plantilla dio de verdad la c) habría que anotar la discrepancia en la
  explicación.
- **Art. 25.2, letras p y q**: la letra p (RDL 7/2026) está en vigor desde el 22/03/2026. A partir de mañana
  la frase «hasta entonces la lista acaba en la p» sobrará. Se puede quitar entonces, pero no es un error.
- **STC 103/2013**: el esquema no dice qué pasa con los párrafos del art. 126.2 que siguen en el texto (los
  derechos económicos de los no concejales y la regla de válida constitución). Han quedado vacíos de
  contenido, pero el consolidado no dice nada de ellos, así que no lo añado.
- **RPDT (RD 1690/1986)**: `fuentes.json` lo cita para «territorio y población», pero el encargo limita el
  tema a la LBRL y la Ley 10/2017, y el esquema tampoco lo usa. No lo añado.
- **Art. 17.2-17.5 LBRL** (INE, Consejo de Empadronamiento y padrón de españoles residentes en el extranjero):
  tienen alguna pregunta en el banco del tema 14, pero son detalle de gestión. No lo añado para no alargar
  más una sección que ya está llena.

## Veredicto

**APTO.** Diez correcciones aplicadas; no queda nada sin resolver en el esquema. Fuera del esquema queda
un aviso: la clave del banco de la P10 del segundo ejercicio de 2026 contradice el art. 14.1.g de la Ley
10/2017.
