# Revisión independiente de `pendientes-ronda2.json`

Banco: `aux-admin-zaragoza`. Fecha: 23-oct-2026. Revisor: Claude, sin relación con el agente que hizo la propuesta. No se ha modificado ningún archivo de `data/` ni se ha hecho commit.

Resultado: **29 aprobadas, 0 rechazadas**.
- 17 sin cambios en la pregunta: 9 correcciones y las 8 retiradas. En dos de ellas (14-3 y la retirada 14-22) se corrige solo el `motivo`.
- 12 con cambios:
  - 1 con error de fondo en la explicación (10-204);
  - 1 reformulada, porque la propuesta duplicaba una pregunta ya integrada (14-85);
  - 10 con ajustes de forma, casi todos por la regla 7 bis (la clave se delataba por la longitud).
- 8 retiradas confirmadas: 14-22, 14-24, 14-57, 14-75, 10-62, 10-93, 10-118 y 10-119.

Las 29 están en `lotes/auditoria/pendientes-ronda2.revisado.json`, en el mismo orden y formato, con un campo `revisor` en cada una. `node tools/aplicar-cambios.js lotes/auditoria/pendientes-ronda2.revisado.json --tipo correccion --titulo prueba --simular` localiza y aplica las 29 sin error (banco de HEAD 41b00e4).

Nota: mientras trabajaba, la sesión principal hizo commit de `pendientes-ronda2.revisado.json` dos veces («Archivos de lotes en curso»). El commit f631cf0 tiene un borrador intermedio. El a88cc98 ya tiene la versión final, que coincide con la del árbol de trabajo.

## Veredictos

| Tema | Índice | Acción | Veredicto | Nota |
|---|---|---|---|---|
| 14 | 93 | enunciado (+ opciones) | Aprobada | Punto delicado 1, abajo |
| 14 | 72 | enunciado (+ opciones) | Aprobada | Punto delicado 2 |
| 14 | 71 | respuesta | **Aprobada con cambios** | Clave correcta; se alargan los distractores (clave 106 frente a 58-63 caracteres) |
| 18 | 268 | enunciado | **Aprobada con cambios** | Se alargan dos distractores (30 y 52 frente a la clave de 84) |
| 18 | 273 | enunciado (+ clave) | **Aprobada con cambios** | Se alargan los tres distractores (la clave era la única con matiz) |
| 18 | 263 | respuesta | Aprobada | — |
| 18 | 274 | respuesta | **Aprobada con cambios** | Clave de 147 caracteres: se abrevia y se alargan dos distractores |
| 18 | 269 | explicacion → **respuesta** | **Aprobada con cambios** | Punto delicado 3. La clave pierde la coletilla «para personas con discapacidad», que la delataba |
| 18 | 270 | explicacion → **respuesta** | **Aprobada con cambios** | Punto delicado 3. «discapacidad visual» pasa a «Visual exclusivamente», como sugería el proponente |
| 19 | 18 | enunciado (+ un distractor) | **Aprobada con cambios** | Clave de 151 caracteres: se abrevia sin perder contenido |
| 3 | 115 | respuesta | Aprobada | — |
| 2 | 213 | enunciado (+ clave) | Aprobada | — |
| 14 | 3 | enunciado | Aprobada; se corrige el `motivo` | El motivo decía que en 1985 el art. 12 no tenía apartado 2, y es falso |
| 14 | 22 | retirar | Aprobada; se corrige el `motivo` | El motivo daba por vigente un inciso del art. 126.2 anulado por la STC 103/2013 |
| 14 | 24 | retirar | Aprobada | — |
| 14 | 57 | retirar | Aprobada | — |
| 14 | 73 | enunciado (+ opciones) | Aprobada | — |
| 14 | 74 | enunciado | **Aprobada con cambios** | Clave de 114 caracteres: se abrevia |
| 14 | 75 | retirar | Aprobada | — |
| 14 | 85 | enunciado (+ opciones) | **Aprobada con reformulación** | La versión propuesta duplicaba la 14-304, ya en el banco |
| 10 | 117 | enunciado (+ opciones) | Aprobada | — |
| 10 | 118 | retirar | Aprobada | — |
| 10 | 119 | retirar | Aprobada | — |
| 10 | 93 | retirar | Aprobada | — |
| 10 | 253 | respuesta | Aprobada | — |
| 10 | 143 | explicacion → **respuesta** | **Aprobada con cambios** | Solo de forma: la clave (63) era más larga que los distractores (41-44) |
| 10 | 157 | respuesta | **Aprobada con cambios** | Clave de 114 caracteres frente a 27-54; distractor del mismo tipo |
| 10 | 204 | respuesta | **Aprobada con cambios** | **Error de fondo**: la Ley 7/1999 sí regula esta cesión (art. 126.4.g) |
| 10 | 62 | retirar | Aprobada | — |

Índice = posición en `data.questions[tema]` en el banco de hoy. Los 29 `q` coinciden exactamente con una sola pregunta de su tema.

En los ajustes de forma ninguna clave cambia de sentido ni de posición, y todos los distractores nuevos o alargados son falsos según la norma citada. La proporción entre la longitud de la clave y la del distractor más largo queda entre 0,38 y 1,14 en todas las preguntas.

## Puntos delicados

### 1. La dispensa de servicios mínimos (14-93) y el art. 45 de la Ley 7/1999

**Decisión: se aprueba la reconversión tal como viene.**

- **LBRL.** El art. 26 vigente (redacción de la Ley 27/2013; actualización del consolidado de 15/07/2016) dice «deberán prestar, en todo caso,». Su apartado 2 regula la coordinación por la Diputación y no contiene ninguna dispensa.
- **Redacción anterior.** La cita es literal de la versión de 1996 del consolidado («Los Municipios podrán solicitar de la Comunidad Autónoma respectiva la dispensa…»).
- **Otras dispensas.** En el texto vigente de la LBRL solo aparece la del art. 13.4.f), la del municipio fusionado (ya preguntada en la 21-3).
- **Art. 45 de la Ley 7/1999.** Sigue escrito y sin notas en el consolidado (25/10/2022). Su art. 126.4.e) también menciona «La solicitud de la dispensa de servicios obligatorios».
- **Por qué se aprueba.** Si sigue siendo aplicable frente al «en todo caso» básico y posterior es discutible, y ningún texto oficial lo resuelve. Por eso es correcto que la pregunta se ciña a lo que dice el art. 26 LBRL, que se puede comprobar. La explicación avisa del art. 45 sin afirmar que esté desplazado ni que siga vigente. Eso cumple la regla 10 sin tomar partido.
- **Opciones.** La clave es la única correcta. El distractor «Sí, cuando… resulte de imposible o muy difícil cumplimiento» reproduce la regla anterior y la aragonesa, pero el enunciado pregunta expresamente por el art. 26 vigente, así que es falso. Los otros dos son falsos en cualquier lectura.

### 2. El art. 26.2 LBRL y la STC 111/2016 (14-71, 14-72)

Descargué la sentencia (BOE-A-2016-6839). Su fallo anula exactamente los dos incisos que el consolidado marca en `<strong>`:
- «al Ministerio de Hacienda y Administraciones Públicas»;
- la frase «Para reducir los costes efectivos de los servicios el mencionado Ministerio decidirá…».

La conformidad «de los municipios afectados» y las formas de prestación siguen vigentes. La propia sentencia las cita como el núcleo constitucional del precepto (FJ que precede al fallo).

- **14-72.** Correcta: pregunta de quién se necesita la conformidad. Ningún distractor es cierto. El informe de la Comunidad Autónoma estaba en el inciso anulado y, además, no era una conformidad.
- **14-71.** Correcta en el fondo. La cita del art. 36.2.a) («fórmulas de prestación unificada o supramunicipal para reducir sus costes efectivos») es literal. Solo se alargan los distractores.

### 3. El cupo del 8 % de la Ley 5/2019 de Aragón (18-269, 18-270)

**Decisión: el aviso está bien fundado y se aprueba.** Lo he comprobado yo, en el consolidado BOE-A-2019-7785 (sin modificaciones desde el 10/04/2019):
- **Art. 27.2.** Fija «no inferior al 8%», con al menos un 2 % para discapacidad intelectual y un 1 % para enfermedad mental. Solo el objetivo del «2% de los efectivos totales» se limita a la Administración de la Comunidad Autónoma.
- **Art. 2.1.b).** La ley se aplica «A las entidades que integran la Administración local».
- **Competencia.** El art. 75.13.ª del Estatuto atribuye a Aragón una competencia compartida sobre el «Régimen estatutario de los funcionarios de la Comunidad Autónoma de Aragón y de su Administración Local». El art. 3.1 TREBEP somete a los funcionarios locales también a la legislación autonómica.
- **TREBEP.** El art. 59.1 fija un mínimo («no inferior al siete por ciento»).
- **Práctica municipal.** La convocatoria 4/2026 (`tools/temarios/bases-aux-admin-zaragoza-2026-conv4.pdf`) reserva 7 de las 85 plazas: 4 TLRDIS, 2 TLRINTEL y 1 TLRMEN, es decir, el 8,2 %. Además tiene un turno de discapacidad mental que el TREBEP no prevé. Las bases no citan la Ley 5/2019.

Como las dos preguntas dicen «Según el art. 59.1 del TREBEP», sus claves siguen siendo correctas. Ninguna opción es el 8 % ni la enfermedad mental, así que no hay doble respuesta.

## Hallazgos que cambian las propuestas

- **10-204 (error de fondo).** La explicación propuesta decía: «La normativa aragonesa no tiene una regla propia sobre esta cesión, así que el RBEL se aplica como supletorio». Es falso. El art. 126.4.g) de la Ley 7/1999 exige la mayoría absoluta del número legal de miembros para «La aprobación de las ordenanzas reguladoras de los aprovechamientos de bienes comunales, así como la cesión, por cualquier título, de su aprovechamiento». El art. 47.2.i) LBRL dice lo mismo. Se reescribe la explicación con las dos normas, se mantiene el aviso de Zaragoza y se corrigen la `fuente` y el `motivo`. La clave no cambia.
- **14-85 (duplicado).** La reconversión propuesta preguntaba «Según el art. 12.1.e) de la Ley 10/2017, ¿a quién corresponde nombrar y cesar a los Presidentes o Vicepresidentes de las Comisiones del Pleno? Al Alcalde». Esa pregunta ya está en el banco: es la **14-304**, que entró con el lote t14-1 (commit 479f74a) después de que se redactara la propuesta.
  - Se reformula sobre lo que sí dice el art. 122.5 LBRL: «las funciones del secretario general del Pleno… quedan reservadas a: Funcionarios de Administración local con habilitación de carácter nacional».
  - Es literal del último párrafo del 122.5, vale para Zaragoza (art. 10.3 Ley 10/2017: el Pleno «contará con un Secretario General») y no la pregunta ninguna otra. La 14-133 y la 14-314 tratan del asesoramiento legal.
  - Distractores: concejal elegido por el Pleno, personal eventual y funcionario del Ayuntamiento designado por la Junta de Gobierno Local. Los tres son falsos según el 122.5 y la DA 8.ª.b) («requerirá en todo caso una previa convocatoria pública»).
  - Alternativa limpia si no se quiere contenido nuevo: retirarla.
- **14-22 (motivo).** El motivo decía que el art. 126.2 «permite nombrar miembros que no sean concejales (hasta un tercio)». Ese inciso fue declarado inconstitucional y nulo por la **STC 103/2013**: lo comprobé en el fallo, letra b), y en la nota del consolidado. Se corrige el motivo. La retirada se mantiene, porque corregida duplicaría la 14-139, la 14-213 y la 21-35.
- **14-3 (motivo).** El motivo decía que «en 1985 el art. 12 ni siquiera tenía apartado 2». Es falso: la redacción original tenía un art. 12.2 («Todos los residentes constituyen la población del Municipio»). Se suprime ese inciso. La pregunta es correcta.

## Comprobaciones hechas

**Textos oficiales.** Los descargué yo con `curl` y reintentos (`…/scratchpad/rev-pend2/bin/bajar.sh`) y no usé los del proponente:

| Norma | ID | Actualización |
|---|---|---|
| LBRL (vigente, versión de 1996 y texto original de 1985) | BOE-A-1985-5392 | 03/10/2026 |
| TREBEP | BOE-A-2015-11719 | 03/10/2026 |
| Ley 10/2017 (capitalidad) | BOE-A-2018-1683 | 15/01/2019 |
| Ley 7/1999 (Administración Local de Aragón) | BOE-A-1999-10151 | 25/10/2022 |
| Estatuto de Autonomía de Aragón | BOE-A-2007-8444 | 28/12/2022 |
| Ley 5/2019 de Aragón (discapacidad) | BOE-A-2019-7785 | 10/04/2019 |
| RBEL (RD 1372/1986) | BOE-A-1986-17958 | — |
| TRLRHL (art. 26: devengo de tasas) | BOE-A-2004-4214 | 07/10/2026 |
| LCSP (DA 2.ª.4) | BOE-A-2017-12902 | 09/04/2026 |
| RDL 6/2019 (título) | BOE-A-2019-3244 | — |
| STC 103/2013 y STC 111/2016 | BOE-A-2013-5446, BOE-A-2016-6839 | — |
| Decreto 347/2002 (RBASO), BOA | ELI `d/2002/11/19/347` | Versión de publicación (ISO-8859-1) |

Documentos municipales, leídos con pdftotext: II Plan de Igualdad, convocatoria 4/2026, bases de 2025 y TRBGTL.

**Script de validación.** `…/scratchpad/rev-pend2/bin/validar.js` comprueba en las 29 entradas:
- que el `q` es único y coincide;
- que hay 4 opciones distintas y la clave está dentro de rango;
- que ninguna opción remite a otras;
- que la explicación no nombra opciones por su letra;
- que ningún enunciado nuevo repite otro del banco;
- que todo fragmento entre «» del enunciado, de la explicación y de `cita` aparece literalmente en los textos descargados.

Pasan todas. Comprobé que detecta una cita inventada y una mención «la opción C» añadidas a propósito.

**Duplicados.** Además del script, busqué en el banco actual y en `lotes/nuevas/*.json` las materias de cada pregunta nueva o reconvertida: arts. 26, 27, 122.5 y 12.1.e; 55, 57, 59, 61.6 y 62.1 TREBEP; inventario; personal eventual. Solo encontré el duplicado de la 14-85.

**Retiradas.** Comprobé una por una las preguntas que, según la propuesta, ya cubren la materia: 14-139, 14-213, 21-35, 9-57, 9-227, 14-216, 21-13, 14-174, 21-45, 14-241, 10-253 y 21-137. Ninguna de las ocho retiradas se arregla con poco:
- 14-22 y 14-75 corregidas serían duplicados;
- 14-24 tiene una clave que con la LCSP sería falsa;
- 14-57 y 10-62 necesitarían una pregunta nueva;
- 10-118, 10-119 y 10-93 repiten la 10-253 o no tienen respuesta segura para Zaragoza.

**Zaragoza (regla 9).**
- 10-117 y 10-253 se complementan: el Gobierno de Zaragoza, por el art. 14.1.g), y el Pleno, por el art. 34 RBEL y el art. 27.1 RBASO.
- En 10-143, 10-157 y 10-204 ninguna opción es la regla de Zaragoza, y la explicación avisa de ella con el criterio de `t10-t11-aragon.revision.md` (art. 14.1.g y DA 1.ª.4 de la Ley 10/2017; art. 47.3 y 123 LBRL).
- 19-18 sigue el criterio ya aplicado a la 19-15.

## Hallazgos para el coordinador (no incluidos en el JSON)

- **3-28 y 3-115** tienen la misma clave (art. 41.a EAA). Puede sobrar una.
- **Esquema del tema 18** (`data/esquemas/aux-admin-zaragoza/t18.js`). Sigue dando el 7 % sin el aviso aragonés, como señaló el proponente. No lo he tocado.
- **14-84, 19-6, 10-44 y 21-19.** Los hallazgos del proponente sobre ellas siguen pendientes y quedan fuera de esta revisión.
- **Aviso sobre el RBASO.** Usé la versión de publicación del BOA. No he comprobado si el Decreto 347/2002 tiene modificaciones posteriores en los arts. 26, 27, 105 y 119.
