# Correcciones pendientes, ronda 2 (temas 2, 3, 10, 14, 18 y 19)

Banco: `aux-admin-zaragoza`. Fecha: 22-oct-2026. No se ha modificado ningún archivo de datos ni se ha hecho commit.

- Propuestas: `lotes/auditoria/pendientes-ronda2.json`, con 29 entradas en el formato de `tools/aplicar-cambios.js`.
- Se ha probado con `--simular`: las 29 se localizan y se aplican sin error.
- También se aplican sin error junto con `pendientes-varias.revisado.json`, porque no tocan las mismas preguntas.

Índice = posición en `data.questions[tema]`, empezando en 0, en el banco cargado hoy a las 18:00 (después del commit 5efa25c, que aplicó las correcciones de la ronda anterior). Todas las preguntas se han localizado por su contenido. El `q` de cada entrada es el enunciado exacto actual, y es único en su tema.

## Alcance

**Bloque A: el encargo.** Comprende:
- `pendientes-siguiente-ronda.md` tal como estaba al recibir el encargo, sin las secciones de `tools/fuentes.json`;
- tema 14, índice 93;
- tema 18, índice 273;
- tema 19, índice 18;
- el cupo de discapacidad;
- otras preguntas con el mismo problema en el mismo tema.

**Bloque B: secciones nuevas.** Mientras trabajaba, otros agentes añadieron a `pendientes-siguiente-ronda.md` tres secciones nuevas: tema 2, tema 10 y tema 14 del redactor del lote t14-1. Se han incluido porque el encargo pedía «la lista completa», pero van separadas. Si otro agente las tiene asignadas, basta con quitar del JSON las 18 entradas del bloque B (las 18 últimas: de 2-213 a 10-62).

## Resumen

### Bloque A (11 entradas)

| Tema | Índice | Acción | Problema | Solución |
|---|---|---|---|---|
| 14 | 93 | enunciado (+ opciones) | Cita el «art. 26.1 del TRLRHL» y da por vigente la dispensa autonómica de servicios mínimos, que se suprimió en 2013 | Se reconvierte: el art. 26 LBRL vigente ya no prevé esa dispensa. Avisa del art. 45 de la Ley 7/1999 aragonesa |
| 14 | 72 | enunciado (+ opciones) | **Encontrada.** Cita el «art. 26.3» y pregunta qué se propone «al Ministerio de Hacienda», un inciso del 26.2 anulado por la STC 111/2016 | Se reconvierte: de quién se necesita la conformidad para la forma de prestación (art. 26.2) |
| 14 | 71 | respuesta | **Encontrada.** La clave mezcla el art. 36.2.a) con la finalidad «para reducir los costes efectivos», que en el 26.2 estaba en la frase anulada | La clave pasa a las formas de prestación del art. 26.2 vigente |
| 18 | 268 | enunciado | Cita el «art. 57.4» (es el 57.5) y añade una excepción que no está en la ley | Se corrigen el artículo y el enunciado; opciones y clave no cambian |
| 18 | 273 | enunciado (+ clave) | Cita el «art. 61.2» (es el 61.6), y la clave añade «con las fases que se establezcan reglamentariamente» | Se corrige el artículo; la clave recoge el segundo párrafo del 61.6 |
| 18 | 263 | respuesta | Clave «Publicidad, transparencia y objetividad»: la objetividad no es un principio del 55.2 | La clave pasa a «Publicidad, transparencia e imparcialidad»; se cambia un distractor que estaba en parte en el 55.2.d |
| 18 | 274 | respuesta | **Encontrada.** Clave «Prestar juramento o promesa…»: el art. 62.1.c) dice «acto de acatamiento» | La clave se ajusta a las letras c) y d) del 62.1 |
| 18 | 269 | explicacion | Da el 7 % sin avisar de la regla aragonesa | Avisa del 8 % del art. 27.2 de la Ley 5/2019; la respuesta, según el TREBEP, sigue siendo el 7 % |
| 18 | 270 | explicacion | Ídem (reserva para discapacidad intelectual) | Avisa del 8 %, con un 2 % para discapacidad intelectual y un 1 % para enfermedad mental; la respuesta no cambia |
| 19 | 18 | enunciado (+ un distractor) | Enunciado general con la clave «el Pleno»; en Zaragoza decide el Gobierno de Zaragoza, y un distractor era esa regla | Se acota al art. 104.1 LBRL, la explicación da la regla de Zaragoza y se cambia el distractor |
| 3 | 115 | respuesta (un distractor) | El distractor «designación de los Senadores» también es función de las Cortes (art. 41.c) | Se sustituye por el nombramiento de los Consejeros, que es del Presidente (art. 53.2) |

### Bloque B (18 entradas)

| Tema | Índice | Acción | Problema | Solución |
|---|---|---|---|---|
| 2 | 213 | enunciado (+ clave) | Clave «Ley 6/2019»: el Plan dice «Real Decreto-ley 6/2019», partido por un salto de página | La clave pasa a «El Real Decreto-ley 6/2019, de 1 de marzo», y el enunciado dice «qué norma» |
| 14 | 3 | enunciado | Cita el «art. 12.2»; el contenido es del 13.1 | Se corrige el número |
| 14 | 22 | **retirar** | Clave «además de los concejales» (es «además del Alcalde») | Corregida, repetiría la 14-139, la 14-213 y la 21-35. En el `motivo` va la alternativa de corregirla |
| 14 | 24 | **retirar** | Pregunta por el art. 127.1.f) LBRL, derogado por la Ley 30/2007 | La materia ya está en la 9-57, la 9-227, la 14-216 y la 21-13 |
| 14 | 57 | **retirar** | El contenido (la iniciativa para alterar términos) no está ni en el art. 14 ni en el 13 LBRL | No se puede arreglar cambiando el número; el art. 13.1 ya está en la 14-3 y la 14-241 |
| 14 | 73 | enunciado (+ opciones) | Usa la redacción de 1985 del art. 27.1 (eficacia y participación ciudadana) | Se reconvierte sobre el texto vigente (eliminar duplicidades); la participación ciudadana pasa a ser un distractor |
| 14 | 74 | enunciado | Cita el «art. 27.2»; la financiación está en el 27.6 | Se corrige el número |
| 14 | 75 | **retirar** | Cita el «art. 27.3»; los cinco años están en el 27.1 | Corregida, repetiría la 14-174 y la 21-45 |
| 14 | 85 | enunciado (+ opciones) | Premisa falsa: el art. 122.5 no dice que el Pleno elija a quien preside las comisiones ni al secretario | Se reconvierte: en Zaragoza nombra y cesa a los presidentes de las Comisiones del Pleno el Alcalde (art. 12.1.e Ley 10/2017) |
| 10 | 117 | enunciado (+ opciones) | «¿A quién corresponde la aprobación del inventario? Al Pleno»; en Zaragoza es el Gobierno de Zaragoza, y el distractor «Comisión de Gobierno» era esa regla | Se reconvierte en la pregunta sobre Zaragoza (art. 14.1.g Ley 10/2017) |
| 10 | 118 | **retirar** | Igual que la anterior (rectificación del inventario) | Repetía la 10-253 |
| 10 | 119 | **retirar** | Igual que la anterior (comprobación) | Repetía la 10-253; el órgano de la comprobación en Zaragoza no está claro |
| 10 | 93 | **retirar** | «Típicamente…»: el Pleno aprueba cada incorporación al inventario | Impreciso, no vale para Zaragoza y repetía la 10-253 |
| 10 | 253 | respuesta (un distractor) | Distractor «La Junta de Gobierno Local» = regla de Zaragoza | Se cambia el distractor; la explicación da la regla aragonesa y la de Zaragoza |
| 10 | 143 | explicacion | Cesión gratuita: mayoría absoluta (RBEL 110.1) sin aviso | Se añaden el art. 119.2 RBASO y el art. 47.2.ñ LBRL, y el aviso de Zaragoza |
| 10 | 157 | respuesta (un distractor) | Distractor «La Junta de Gobierno Local» = regla de Zaragoza | Se cambia; la explicación añade el art. 105.2 RBASO y el aviso de Zaragoza |
| 10 | 204 | respuesta (dos distractores) | Distractores JGL y «Alcalde por delegación», próximos a la regla de Zaragoza | Se cambian los dos; la explicación avisa de Zaragoza |
| 10 | 62 | **retirar** | «Competencias reglamentarias» del Alcalde sobre el patrimonio, sin base literal | La regla de Zaragoza ya está en la 21-137 |

En total: 8 retiradas (todas en el bloque B) y 21 corregidas. «(+ opciones)» quiere decir que el `nuevo` trae también `options` y `correct`. Las acciones de las entradas que solo cambian distractores se han etiquetado `respuesta`, como en `t10-t11-aragon`; la clave no cambia.

## Comprobaciones por problema

### Tema 14: la dispensa de servicios mínimos (14-93) y el art. 26.2 (14-71 y 14-72)

**La dispensa.**
- Comprobado en la versión de la LBRL anterior a 2013: el art. 26.2 decía «Los Municipios podrán solicitar de la Comunidad Autónoma respectiva la dispensa de la obligación de prestar los servicios mínimos…». La versión se descargó con `act.php?id=BOE-A-1985-5392&tn=1&p=19960608`. El apartado 2 no cambió de 1985 a 2013.
- La Ley 27/2013 (art. 1.9) sustituyó el art. 26. Hoy:
  - el art. 26.1 dice «deberán prestar, en todo caso»;
  - el 26.2 regula la coordinación por la Diputación en los municipios de menos de 20.000 habitantes.
- La única dispensa que conserva la LBRL es la del municipio fusionado (art. 13.4.f), que ya pregunta la 21-3.
- El art. 26 del TRLRHL trata del devengo de las tasas.

**Complicación aragonesa.** El art. 45 de la Ley 7/1999 sigue regulando la dispensa por la Diputación General de Aragón. El consolidado del BOE está actualizado el 25/10/2022 y ese artículo no tiene notas.
- Es anterior a la Ley 27/2013.
- Es dudoso que siga siendo aplicable frente al art. 26.1 LBRL, que es básico y posterior.
- No he encontrado en los textos oficiales nada que lo resuelva.

Por eso la pregunta se reconvierte sobre lo que dice hoy el art. 26 LBRL, que se puede comprobar en el texto. La explicación avisa del art. 45. Si el coordinador prefiere no tocar el tema, la alternativa es retirarla.

**STC 111/2016.** La nota del consolidado dice: «Se declaran inconstitucionales y nulos los incisos destacados del apartado 2». En el HTML del BOE, los incisos destacados (`<strong>`) son:
- «al Ministerio de Hacienda y Administraciones Públicas»;
- la frase «Para reducir los costes efectivos de los servicios el mencionado Ministerio decidirá…».

Consecuencias:
- La 14-72 preguntaba precisamente qué se propone al Ministerio, y además citaba el 26.3, que trata de la asistencia de las Diputaciones.
- La 14-71 tenía como clave «fórmulas de prestación unificada o supramunicipal, para reducir los costes efectivos», que es una mezcla del art. 36.2.a) y de la frase anulada.
- Si se arreglaran las dos por separado, tendrían la misma clave. Por eso la 71 pregunta las formas de prestación y la 72 de quién se necesita la conformidad («de los municipios afectados»).
- El redactor del lote t14-1 señaló después la 72 por el mismo motivo.

### Tema 18: Título IV del TREBEP

Texto del consolidado del BOE, actualizado el 03/10/2026. La única redacción pendiente de entrar en vigor es la del art. 49, que no afecta a estas preguntas.

- **57.4 frente a 57.5 (18-268).** La exención de nacionalidad por ley es el art. 57.5. La excepción del «poder público» es del 57.1 y no del 57.5. La 18-288 cita bien el 57.4 (extranjeros como personal laboral).
- **61.2 frente a 61.6 (18-273).** No se ha usado como matiz de la clave que el sistema «deberá incluir pruebas de capacidad», porque es la clave de la 18-300.
- **55.2 (18-263).** Las seis letras del 55.2 se han comprobado una a una. «Discrecionalidad» aparece en la letra d), así que el distractor «Discrecionalidad y confidencialidad absoluta» era en parte cierto y se cambia.
- **62.1 (18-274).** La palabra «juramento» no aparece en el TREBEP.
- He revisado las demás preguntas del tema 18 sobre los arts. 55 a 62 (índices 262 a 306) y no he encontrado otras con el artículo equivocado o con texto añadido.

### Cupo de discapacidad: Ley 5/2019 de Aragón

Ley 5/2019, de 21 de marzo, de derechos y garantías de las personas con discapacidad en Aragón (BOE-A-2019-7785). El consolidado no tiene modificaciones: la última actualización es del 10/04/2019.

**Qué dice el art. 27.2:**
- Fija un cupo «no inferior al 8% de las vacantes».
- Dentro de él, «al menos, el 2%» es para discapacidad intelectual y «un 1%» para personas con enfermedad mental con un grado de discapacidad igual o superior al 33 %.
- El objetivo del 2 % de efectivos se refiere solo a la Administración autonómica.

**Se aplica a las entidades locales aragonesas.** Conclusión: sí.
1. El art. 2.1.b) aplica la ley «A las entidades que integran la Administración local».
2. El art. 27.1 habla de las «Administraciones públicas de Aragón». El 27.2 no limita su ámbito. Cuando la ley quiere limitarse a la Comunidad Autónoma, lo dice: en el objetivo del 2 % y en los apartados 4 y 9.
3. Aragón tiene competencia compartida sobre el «Régimen estatutario de los funcionarios de la Comunidad Autónoma de Aragón y de su Administración Local» (art. 75.13.ª del Estatuto). El art. 3.1 TREBEP somete a los funcionarios locales también a la legislación autonómica.
4. El art. 59.1 TREBEP fija un mínimo («no inferior al siete por ciento»), compatible con uno mayor.
5. La práctica del Ayuntamiento coincide. En la convocatoria 4/2026 de Auxiliar Administrativo, 7 de las 85 plazas son de reserva por discapacidad (4 TLRDIS, 2 TLRINTEL y 1 TLRMEN), es decir, el 8,2 %. Además, hay un turno de discapacidad mental (TLRMEN), que el TREBEP no prevé y la ley aragonesa sí. Las bases no citan la Ley 5/2019, y la oferta de empleo público no la he consultado.

**Preguntas afectadas.**
- Tema 18: 18-269 y 18-270. Las dos dicen «Según el art. 59.1 del TREBEP», así que la respuesta no cambia y solo se completa la explicación.
- La 18-276 y la 18-291 no dan porcentajes.
- Tema 17: ninguna pregunta da el 7 %. Busqué «discapacidad», «siete por ciento», «7 %» y «cupo».

### Tema 19: personal eventual (19-18)

- El art. 127.1.h) LBRL y el art. 14.1.i) de la Ley 10/2017 dan «el número y régimen del personal eventual» a la Junta de Gobierno Local, que en Zaragoza es el Gobierno de Zaragoza (DA 2.ª).
- No se puede delegar (art. 127.2 LBRL y art. 14.2 Ley 10/2017).
- Se ha seguido el mismo criterio que la ronda anterior aplicó a la 19-15 (art. 102 LBRL): enunciado acotado al artículo y explicación con la regla de Zaragoza.
- El distractor «Los fija la Junta de Gobierno Local en cualquier momento del mandato» era, en cuanto al órgano, la regla de Zaragoza, y se sustituye.
- La 19-19 (nombramiento y cese por el Alcalde, art. 104.2) es correcta también en Zaragoza: ni el art. 127 LBRL ni el art. 14 de la Ley 10/2017 dan esa decisión a otro órgano.
- No hay más preguntas del tema 19 con el mismo problema. Se revisaron todas las que mencionan el Pleno, la Junta de Gobierno o el Alcalde; las de bases y tribunales ya estaban en la ronda anterior.

### Tema 3: art. 41 EAA (3-115)

- He revisado las demás preguntas del tema 3 sobre el art. 41 (índices 28, 29, 78, 88, 117, 118, 119, 253 y 255) y ninguna tiene un distractor que sea función de las Cortes.
- El nuevo distractor, el nombramiento de los Consejeros, ya se usa en la 3-88 y la 3-255, pero aquí la pregunta es otra.

### Bloque B

- **2-213.** Comprobado en el PDF del Plan (pdftotext):
  - «Real Decreto-» queda al final de la página 10 y «ley 6/2019» al principio de la 11;
  - en la página de conciliación, el Plan vuelve a escribir «Real Decreto-ley 6/2019»;
  - el título está comprobado en el BOE (BOE-A-2019-3244).
- **Tema 14 (redactor del t14-1).**
  - Todos los números de artículo se han comprobado en el consolidado.
  - En tres casos (14-22, 14-75 y 14-24) la pregunta corregida repetiría otra que ya está bien, o la materia ya está preguntada. Por eso se propone retirarlas; en el `motivo` va la alternativa de corregirlas.
  - La 14-57 no tiene arreglo con el número: su contenido no está en la LBRL. La iniciativa en Aragón está en el art. 13 de la Ley 7/1999, con otro régimen.
  - Reconversiones:
    - la 14-73 pasa al texto vigente del art. 27.1, y la redacción de 1985 se usa como distractor;
    - la 14-85 pasa a una regla de Zaragoza que el banco no tenía (art. 12.1.e Ley 10/2017).
- **Tema 10 (revisor de la auditoría aragonesa).**
  - Mapeo de los índices aproximados:
    - 94 → 93; 118 → 117; 119 → 118; 120 → 119; 269 → 253;
    - 144 → 143; 161 → 157; 216 → 204;
    - 63 → 62.
  - Criterio, el de `t10-t11-aragon.revision.md`:
    - en Zaragoza, la Ley 10/2017 (art. 14.1.g y DA 1.ª.4) da al Gobierno de Zaragoza el patrimonio, el inventario y sus rectificaciones;
    - en los demás municipios aragoneses rige el RBASO (arts. 27.1, 105.2 y 119.2), y el RBEL es supletorio.
  - El grupo del inventario (93, 117, 118, 119 y 253) eran cinco preguntas sobre la misma regla. Queda así:
    - la 253 (art. 34 RBEL) se conserva con la explicación completada;
    - la 117 pasa a ser la pregunta de Zaragoza;
    - las otras tres se retiran.
  - La comprobación del inventario: el RBASO (art. 26.3) no dice qué órgano la acuerda y la Ley 10/2017 no la menciona. Por eso no se ha hecho ninguna pregunta sobre quién la hace en Zaragoza.
  - En el RBASO (arts. 96 a 103) y en la Ley 7/1999 (arts. 179 a 185) no hay una regla propia sobre la cesión del aprovechamiento de comunales (10-204). Se aplica el RBEL 102.

## Verificación automática

El script `…/scratchpad/pend2/bin/validar.js`, adaptado del de la ronda anterior, comprueba:
- que cada `q` coincide con el índice indicado y es único en el tema;
- que hay 4 opciones distintas y una clave dentro de rango;
- que ninguna opción remite a otras;
- que la explicación no menciona letras de opción;
- que ningún enunciado nuevo repite otro del banco ni de `lotes/nuevas/*.json` (2.573 preguntas);
- que todo fragmento entre «» de la explicación nueva, del enunciado nuevo y de `cita` aparece literalmente en los textos descargados.

Pasan las 29. El script también muestra la longitud de las opciones, para la regla 7 bis:
- En las preguntas reconvertidas (14-72, 14-73, 14-85, 10-117) y en la 2-213, la clave no es la opción más larga.
- En la 14-93 sí lo es, por muy poco: 105 caracteres frente a 104.
- En la 18-273, la clave nueva (75 caracteres) es la más larga, como lo era la anterior (72).
- En las demás, la longitud relativa de la clave es la que ya tenían.

## Fuentes descargadas

Están en `/tmp/claude-0/-home-user-opotest/b89be96f-03bf-5e1f-ba88-44c94e136a9e/scratchpad/pend2/dl/` (HTML) y `…/pend2/txt/` (texto). Los textos del BOE se bajaron con `curl` y reintentos (`bin/bajar.sh`).

| Norma | ID | Última actualización |
|---|---|---|
| LBRL, Ley 7/1985: texto vigente y versión anterior a 2013 (`&tn=1&p=19960608`) | BOE-A-1985-5392 | 03/10/2026 (las reformas pendientes afectan solo a los arts. 25 y 69) |
| TREBEP, RDLeg 5/2015 | BOE-A-2015-11719 | 03/10/2026 (pendiente solo el art. 49) |
| Ley 10/2017, de capitalidad de Zaragoza | BOE-A-2018-1683 | 15/01/2019 |
| Ley 7/1999, de Administración Local de Aragón | BOE-A-1999-10151 | 25/10/2022 |
| Estatuto de Autonomía de Aragón, LO 5/2007 | BOE-A-2007-8444 | 28/12/2022 |
| TRLRHL, RDLeg 2/2004 | BOE-A-2004-4214 | 07/10/2026 |
| Ley 5/2019 de Aragón, de derechos y garantías de las personas con discapacidad | BOE-A-2019-7785 | 10/04/2019 (sin modificaciones) |
| RBEL, RD 1372/1986 | BOE-A-1986-17958 | 07/07/1986 |
| RDL 6/2019 (solo el título) | BOE-A-2019-3244 | — |
| Decreto 347/2002 (RBASO), del BOA | boa.aragon.es, ELI `d/2002/11/19/347` | Versión de publicación; no he comprobado si tiene modificaciones posteriores |
| Bases de Auxiliar Administrativo de 2025, convocatoria 4/2026, TRBGTL y II Plan de Igualdad | `tools/temarios/*.pdf` (pdftotext) | — |

## Otros hallazgos (no incluidos en el JSON)

- **Esquema del tema 18** (`data/esquemas/aux-admin-zaragoza/t18.js`, líneas 42, 77 y 253). Da el 7 % del art. 59.1 sin avisar del 8 % aragonés. Es un archivo de datos y no se ha tocado. Propuesta de nota: «En Aragón, también en Zaragoza, el cupo mínimo es del 8 %, con al menos un 2 % para discapacidad intelectual y un 1 % para enfermedad mental (art. 27.2 de la Ley 5/2019)».
- **21-19** (examen oficial, art. 59.1 → «El cinco por ciento»). Es literal del TREBEP, pero su explicación podría llevar el mismo aviso. Queda para el procedimiento del tema 21.
- **Lote t18-1** (pregunta del 59.1 sobre el 2 % de efectivos). El revisor 1 ya pidió que la explicación no presente el 7 % y el 5 % como las únicas cifras aplicables en Aragón.
- **18-270.** La opción «discapacidad visual» repite la palabra con la que acaba el enunciado («…discapacidad: discapacidad visual»). Podría quedar «Visual exclusivamente».
- **3-28 y 3-115.** Las dos preguntan por el art. 41.a) EAA con la misma clave. Puede valorarse si sobra una.
- **19-6** (art. 91.2 LBRL: «concurso, oposición o concurso-oposición libre»). La clave es literal, pero la explicación presenta el concurso como sistema ordinario. Habría que leerlo con el art. 61.6 TREBEP (concurso solo por ley y con carácter excepcional), como se hizo con la 19-141.
- **14-84** (art. 122.4 LBRL). La clave («seguimiento de la gestión del Alcalde, la Junta de Gobierno Local y los concejales que ostenten delegaciones») no es literal. El 122.4.b) dice «El seguimiento de la gestión del Alcalde y de su equipo de gobierno».
- **10-44.** El enunciado es general («¿Qué órgano es competente para acordar la enajenación…?») y la clave es «el Pleno». La explicación ya avisa de Zaragoza (ronda anterior), pero el enunciado no se ciñe a una norma, como pide la regla 9.
