# Revisión independiente de `pendientes-ronda3.json`

Banco: `aux-admin-zaragoza`. Fecha: 24-oct-2026. Revisor: Claude, sin relación con el agente que hizo la propuesta. No se ha modificado ningún archivo de `data/` ni se ha hecho commit.

Resultado: **19 aprobadas, 0 rechazadas**.
- 7 retiradas confirmadas: 8-90, 6-111, 6-112, 6-68, 6-69, 6-72 y 6-81. Ninguna se arregla con poco sin duplicar otra pregunta.
- 5 correcciones sin cambios: 4-159, 7-234, 10-44, 5-128 y 5-129.
- 7 correcciones con cambios:
  - 2 con un error de fondo en la explicación (10-83 y 6-110);
  - 2 con frases imprecisas en la explicación (4-138 y 5-136);
  - 3 con ajustes de forma por la regla 7 bis (5-46, 5-48 y 5-127), que la propuesta dejaba para otra ronda.

Las 19 están en `lotes/auditoria/pendientes-ronda3.revisado.json`, en el mismo orden y formato, con un campo `revisor` en cada una. `node tools/aplicar-cambios.js lotes/auditoria/pendientes-ronda3.revisado.json --tipo correccion --titulo prueba --simular` localiza y aplica las 19 sin error (banco de HEAD e82e847; la comprobación se repitió después de que entraran los lotes t19-2 y t02-2).

Nota: mientras trabajaba, la sesión principal hizo commit de `pendientes-ronda3.revisado.json` («Revisiones en curso», 15fa8b4). La versión de ese commit coincide con la final del árbol de trabajo. Este informe no está en ningún commit.

## Veredictos

| Tema-índice | Acción | Veredicto | Nota |
|---|---|---|---|
| 8-90 | retirar | Aprobada | Corregida sería la 21-48 (examen de 2025); la salvedad del 88.2 ya está en la 7-64 |
| 4-138 | respuesta | **Aprobada con cambios** | Punto delicado 1. Se corrige la frase sobre la Secretaría de Estado de Seguridad: el informe es «previo» a la vía jurisdiccional |
| 4-159 | respuesta | Aprobada | Punto delicado 1 |
| 5-136 | enunciado (+ opciones) | **Aprobada con cambios** | Punto delicado 3. Se corrige la frase sobre el art. 21.5 de la explicación |
| 6-110 | respuesta | **Aprobada con cambios** | La explicación decía «Un defecto de forma nunca es causa de nulidad», demasiado tajante frente al art. 47.1 e). Se precisa un distractor y lo que dice el art. 52.3 |
| 7-234 | enunciado (+ opciones) | Aprobada | Punto delicado 4 |
| 10-44 | enunciado (+ opciones) | Aprobada | Regla 9, abajo |
| 10-83 | respuesta | **Aprobada con cambios** | **Error de fondo**: citaba el art. 47.2 ñ) LBRL, que solo comprende la cesión a Administraciones o instituciones públicas; se alargan más los distractores |
| 5-46 | enunciado | **Aprobada con cambios** | Punto delicado 2. Se alargan los distractores (la clave tenía 82 caracteres frente a 31-48) |
| 5-48 | enunciado | **Aprobada con cambios** | Punto delicado 2. Distractores nuevos: la clave era la más larga y uno de ellos no respondía al enunciado |
| 5-127 | enunciado | **Aprobada con cambios** | Punto delicado 2. Se alargan los distractores (la clave tenía 69 caracteres frente a 35-49) |
| 5-128 | enunciado | Aprobada | Punto delicado 2 |
| 5-129 | enunciado | Aprobada | Punto delicado 2 |
| 6-111 | retirar | Aprobada | Clave doctrinal y explicación inexacta (art. 107.1) |
| 6-112 | retirar | Aprobada | Sus opciones chocan con el art. 39.1 |
| 6-68 | retirar | Aprobada | Corregida sería la 6-203 |
| 6-69 | retirar | Aprobada | Corregida sería la 6-206 |
| 6-72 | retirar | Aprobada | Corregida sería la 6-205 |
| 6-81 | retirar | Aprobada | Corregida sería la 6-221 |

Índice = posición en `data.questions[tema]` en el banco de hoy. Los 19 `q` coinciden exactamente con una sola pregunta de su tema.

En las correcciones, la clave nueva o corregida queda entre 0,80 y 1,14 veces el distractor más largo.

## Puntos delicados

### 1. 4-138 y 4-159: la Secretaría General de Administración Digital

**Decisión: se aprueba la solución del proponente, con una frase corregida en la 4-138.**

**Lo que he comprobado en los textos oficiales:**
- **LPAC** (consolidado de 06/11/2024). Los arts. 9.2 c) y 10.2 c) siguen diciendo «previa comunicación a la Secretaría General de Administración Digital del Ministerio de Asuntos Económicos y Transformación Digital». Las disposiciones adicionales 6.ª y 8.ª dicen lo mismo.
- **RD 829/2023, de 20 de noviembre.**
  - La disposición final primera suprime el «Ministerio de Asuntos Económicos y Transformación Digital».
  - El art. 22 atribuye al Ministerio para la Transformación Digital y de la Función Pública la transformación digital (apartado 1) y la administración pública y la función pública (apartado 2).
  - La disposición final segunda remite las referencias de los órganos suprimidos a los que asumen sus competencias.
- **RD 1009/2023** (actualizado el 29/07/2026). Su art. 21 mantiene ese ministerio, así que no ha habido una reestructuración posterior.
- **RD 1118/2024.**
  - La disposición adicional primera, apartado 2, suprime la Secretaría General «A la fecha de constitución efectiva de la Agencia».
  - La disposición final primera, apartado 2, subroga a la Agencia «en la totalidad de los derechos y obligaciones de la Secretaría General de Administración Digital». La cita de la explicación es literal.
- **Fecha de la constitución.** Fue el 21-feb-2025. Lo dicen la nota del consolidado del RD 1009/2023 al art. 21 y la Resolución BOE-A-2025-3627: «en su reunión constitutiva del 21 de febrero de 2025».

**Por qué vale para 2027:**
- El enunciado dice «Según el art. … de la LPAC» y la clave es el nombre literal del órgano. Ya no lleva el ministerio extinto.
- Ninguna opción es la Agencia ni el ministerio actual, así que, aunque alguien sepa la organización vigente, no hay dos respuestas posibles.
- La explicación avisa de los dos cambios sin afirmar a quién se dirige hoy la comunicación. El Estatuto de la Agencia no lo dice expresamente, así que hace bien en no afirmarlo.
- La pregunta solo dejaría de ser exacta si se modificara la LPAC, y eso lo vigila `tools/normas-vigiladas.json`.

**Alternativa descartada: preguntar algo que no dependa del órgano.** El plazo de dos meses, la declaración responsable y el informe de la Secretaría de Estado de Seguridad ya los preguntan la 4-78, la 4-79, la 4-87 y las 4-139 a 4-143 y 4-160 a 4-162. Reformular estas dos preguntas las duplicaría.

**Cambio en la 4-138.** La explicación decía que la Secretaría de Estado de Seguridad «interviene después, con un informe vinculante, si el órgano estatal… acude a la vía jurisdiccional». Eso sugiere que el informe es posterior, y el precepto dice «previo informe vinculante». Ahora dice: «solo emite, en su caso, el informe vinculante previo a que el órgano estatal competente… acuda a la vía jurisdiccional». La 4-159 ya lo decía bien.

### 2. «Se suspende» → «podrá suspenderse» (5-46, 5-48, 5-127, 5-128 y 5-129)

**El art. 22 en el consolidado.** El apartado 1 dice «se podrá suspender» y el 2, «se suspenderá».

He comprobado cada pregunta con el verbo nuevo. En las cinco la clave sigue siendo la única correcta y ningún distractor pasa a ser cierto:

| Pregunta | Letra | Comprobación |
|---|---|---|
| 5-46 | 22.1 a) | Solo la clave describe el intervalo que fija el precepto |
| 5-48 | 22.1 e) | El precepto no fija plazo cerrado ni máximo |
| 5-127 | 22.1 c) | El único requisito es que el procedimiento europeo «condicione directamente» la resolución |
| 5-128 | 22.1 f) | Solo el art. 86 |
| 5-129 | 22.1 g) | Solo el órgano jurisdiccional. El pronunciamiento de un órgano de la Unión Europea, que es del 22.1 b), no está entre las opciones |

La explicación común es exacta: distingue el 22.1 («se podrá suspender») del 22.2 («se suspenderá»), y las citas literales están comprobadas.

**Cambios de forma (regla 7 bis).** La propuesta dejaba la 5-46 y la 5-127 «para una ronda de forma», y no mencionaba que la 5-48 tenía el mismo problema. Como las preguntas ya se tocan, lo he arreglado ahora:
- **5-46.** La clave tenía 82 caracteres frente a 31-48. Los distractores pasan a 66-81: tramitación de urgencia, firma y notificación de la resolución, y anotación registral de la solicitud.
- **5-48.** La clave tenía 73 caracteres frente a 21-53, y el distractor «Solo si el interesado lo solicita por escrito notarial» no respondía a «durante:». Los tres distractores nuevos son plazos, todos falsos para la letra e):
  - treinta días naturales;
  - un máximo de tres meses, que es el límite de los informes preceptivos del 22.1 d), como dice la explicación;
  - el plazo que fije el interesado.
- **5-127.** La clave tenía 69 caracteres frente a 35-49. Los distractores pasan a 61-74 y mantienen la misma idea.

En las tres, la explicación añade por qué fallan los distractores. La clave no cambia de texto ni de posición.

### 3. 5-136 (art. 23.1): la ambigüedad del superior jerárquico

**Decisión: se aprueba la reformulación**, con dos retoques en la explicación.

- **Neutralidad.** La pregunta solo pide cómo continúa el texto, y la respuesta («el superior jerárquico del órgano competente para resolver») es la misma con cualquiera de las dos lecturas. El fragmento del enunciado es literal.
- **Distractores.** La unidad tramitadora, el interesado y el control interno no aparecen en el art. 23.1. Longitudes de 49 a 58 caracteres.
- **Duplicados.** No repite la 5-51, la 5-134 ni la 5-135, que preguntan otras partes del art. 23.1.

**Retoques en la explicación:**
- **El art. 21.5.** La propuesta decía que allí el superior jerárquico «actúa por sí mismo». Es inexacto, porque actúa «a propuesta de éste», es decir, del órgano competente. Ahora la explicación cita el 21.5 completo y dice que el plural «podrán habilitar» deja claro que el superior también decide.
- **«En su caso».** «La propuesta no es obligatoria» pasa a «no siempre es necesaria», más fiel a esa expresión.

### 4. 7-234 (art. 88.3)

**Decisión: se aprueba sin cambios.**

- **Enunciado.** El art. 88.3 dice: «Las resoluciones contendrán la decisión, que será motivada en los casos a que se refiere el artículo 35. Expresarán, además, los recursos…». El enunciado nuevo («además de contener la decisión») ya no da a entender que toda decisión se motiva.
- **Clave.** Abrevia «órgano administrativo o judicial» como «el órgano», sin cambiar el sentido.
- **Distractores.** No están en el art. 88. El 88.4 exige garantizar la identidad del órgano competente, no la de los funcionarios instructores.
- **Duplicados.** No se convierte en la 7-318 (cuándo se motiva) ni repite otra pregunta del banco ni de `lotes/nuevas`.
- **Número.** Es la 7-234. La 5-234 trata del art. 14.3, como dice el proponente.

## Otras comprobaciones por pregunta

### 10-44 y la regla 9

**Lo comprobado:**
- **LBRL** (consolidado de 03/10/2026). Art. 47.2 m) y art. 47.3, que remite al 123.2. El art. 123.2 no incluye la enajenación entre los acuerdos de mayoría absoluta.
- **Ley 7/1999** (consolidado de 25/10/2022).
  - Art. 126.4 ll). Está en el apartado 4, el de la mayoría absoluta del número legal.
  - Art. 126.3. Exige dos tercios del número de hecho y, en todo caso, la mayoría absoluta, y sus letras a) a d) no incluyen la enajenación.
  - Art. 126.1. Mayoría simple de los presentes.
  - Art. 186.1. Aprobación autonómica si el valor supera el 25 %.
- **RBASO.** El art. 108.3 remite al quórum del 126.4 ll), y el art. 121 exige aprobación por encima del 25 %.
- **Zaragoza.** El art. 14.1 g) de la Ley 10/2017 da la enajenación al Gobierno de Zaragoza. La DA 2.ª.11 LCSP dice literalmente «cualquiera que sea el importe del contrato».

**Por qué se aprueba, cuando en el lote t16-1 se rechazaron dos preguntas del art. 126.4:**
- Aquellas daban la mayoría absoluta para acuerdos que en Zaragoza sí vota el Pleno, pero por mayoría simple. Era una contradicción directa.
- Aquí, en Zaragoza la enajenación ni siquiera es competencia del Pleno.
- El enunciado se ciñe a las dos normas y la explicación avisa de lo que rige en Zaragoza. Es el mismo criterio que la 10-139 aprobada en la ronda 2.

Ninguna otra pregunta del banco ni de `lotes/nuevas` pregunta esta mayoría.

### 10-83: el art. 47.2 ñ) LBRL (error de fondo)

**El error.** La explicación y la `fuente` propuestas apoyaban la mayoría absoluta de esta cesión en el art. 47.2 ñ) LBRL. Ese precepto solo comprende la «Cesión gratuita de bienes a otras Administraciones o instituciones públicas», y la pregunta trata de una asociación cultural privada. La letra n) del art. 126.4 de la Ley 7/1999 tiene el mismo alcance.

**La corrección.** Se sustituye por el art. 110.1 RBEL: «En todo caso, la cesión gratuita de los bienes requerirá acuerdo adoptado con el voto favorable de la mayoría absoluta…». Se mantiene el art. 119.2 RBASO. Se corrige también el `motivo`.

**El resto de la explicación está comprobado:**
- art. 109.2 RBEL;
- art. 187.1 de la Ley 7/1999;
- arts. 118.1 y 119.1, letras a), e) y f), RBASO, citados literalmente. La explicación no repite la denominación de 2002 del departamento autonómico.

**Forma (regla 7 bis).** La clave tenía 126 caracteres frente a 94 del distractor más largo. Se alargan más los tres distractores, hasta 108-112.

En el distractor del precio no he puesto nada sobre la tasación, porque el art. 186.2 de la Ley 7/1999 sí exige informe pericial «En toda enajenación o cesión». La clave no cambia.

### 6-110 (art. 47.1 b)

La clave nueva es literal. Lo que he cambiado:
- **Un distractor.** «Defecto de forma que no cause indefensión» pasa a «…que no cause indefensión ni le impida alcanzar su fin». Así es sin duda un defecto no invalidante (art. 48.2), y nadie puede objetar que la omisión total del procedimiento del art. 47.1 e) es nula aunque no cause indefensión.
- **La explicación.**
  - Decía «Un defecto de forma nunca es causa de nulidad». Ahora cita literalmente el art. 48.2.
  - Decía que el acto con incompetencia no manifiesta «puede convalidarlo el superior jerárquico». Ahora recoge lo que dice el art. 52.3: la convalidación la hace «el órgano competente cuando sea superior jerárquico del que dictó el acto viciado».

Los otros dos distractores siguen siendo falsos (art. 35.1 a y art. 47.1 c).

### Retiradas

Comprobé una por una las preguntas que, según la propuesta, ya cubren cada materia: 21-48, 21-100, 8-172, 7-64, 6-79, 6-219, 6-82, 6-220, 6-228, 6-203, 6-204, 6-205, 6-206 y 6-221. Ninguna de las retiradas tiene un arreglo barato:

| Pregunta | Por qué no se arregla |
|---|---|
| 8-90 | Con la clave correcta («No, en ningún caso») es la 21-48. Preguntar dónde está la salvedad duplicaría la 7-64 |
| 6-68 | Con la cita corregida es la 6-203 |
| 6-69 | Con la cita corregida es la 6-206 |
| 6-72 | Con la cita y la clave corregidas es la 6-205 |
| 6-81 | Con la cita corregida es la 6-221 |
| 6-111 | La clave no tiene base legal. Lo único literal, la convalidación, ya está en la 6-79 y la 6-219 |
| 6-112 | Su alternativa (explicar dos opciones como doctrina) seguiría dejando una pregunta discutible frente al art. 39.1 |

## Cómo se ha comprobado

**Textos oficiales.** Los descargué yo con `curl` y reintentos (`…/scratchpad/rev-pend3/bin/bajar.sh`). No usé los del proponente.

| Norma | ID | Actualización |
|---|---|---|
| LPAC | BOE-A-2015-10565 | 06/11/2024 |
| LBRL | BOE-A-1985-5392 | 03/10/2026 |
| Ley 7/1999 de Aragón | BOE-A-1999-10151 | 25/10/2022 |
| Ley 10/2017 (capitalidad) | BOE-A-2018-1683 | 15/01/2019 |
| RD 829/2023 | BOE-A-2023-23537 | 29/12/2023 |
| RD 1009/2023 | BOE-A-2023-24842 | 29/07/2026 |
| RD 1118/2024 | BOE-A-2024-22929 | 12/06/2026 |
| Resolución de 21-feb-2025 (Agencia Estatal de Administración Digital) | BOE-A-2025-3627 | — |
| RBEL | BOE-A-1986-17958 | — |
| LCSP | BOE-A-2017-12902 | 09/04/2026 |
| Decreto 347/2002 (RBASO), BOA | ELI `d/2002/11/19/347` | Versión de publicación (ISO-8859-1) |

**Script de validación.** `…/scratchpad/rev-pend3/bin/validar.js` comprueba en las 19 entradas:
- que el `q` es único y coincide;
- que hay 4 opciones distintas y la clave está dentro de rango;
- que ninguna opción remite a otras;
- que la explicación no nombra opciones por su letra;
- que ningún enunciado nuevo repite otro del banco ni de `lotes/nuevas/*.json`;
- que todo fragmento entre «» del enunciado, de la explicación y de `cita` aparece literalmente en los textos descargados;
- las longitudes de las opciones.

Pasan todas. Comprobé que el script detecta una cita inventada, una mención «la opción C» y una opción «Todas las anteriores» añadidas a propósito.

**Duplicados.** Además del script, busqué en todo el banco y en `lotes/nuevas` las materias de cada pregunta nueva o reformulada: arts. 9.2 c) y 10.2 c), 22.1, 23.1, 47.1 b), 88.3 LPAC; enajenación por encima del 20 %; cesión gratuita. No hay duplicados nuevos.

## Hallazgos para el coordinador (no incluidos en el JSON)

- **4-52 y 4-138.** La 4-52 pregunta casi lo mismo que la 4-138: su clave es «Registro previo como usuario y comunicación a la Secretaría General de Administración Digital». Además, no lleva el aviso de la supresión. Conviene retirarla, como ya proponía el proponente. Lo mismo vale para la 4-78 (repite la 4-140) y la 4-87 (repite la 4-139).
- **Otras menciones a la Secretaría General.** La 4-139, la 4-140, la 4-161, la 4-162, la 4-169 y la 4-254 la mencionan sin aviso. Son literales y no preguntan por el órgano, pero sería coherente añadirles una frase de aviso en la explicación.
- **10-109.** Coincido con el proponente. El art. 9.3 RBEL dice «previo dictamen del secretario, o, en su caso, de la Asesoría Jurídica». La clave «El Secretario» está incompleta y no es la regla en Zaragoza. Hay que revisarla en otra ronda.
- **RBASO.** Como en la ronda 2, he usado la versión de publicación del BOA; la web del BOA no ofrece versión consolidada que pueda descargarse con curl. No he podido comprobar si los arts. 108, 118 y 119 tienen modificaciones posteriores. El 121 tiene la corrección de errores del BOA n.º 9, de 24-1-2003, que ya recoge la 10-309 y que no afecta a lo que dicen la 10-44 y la 10-83.
