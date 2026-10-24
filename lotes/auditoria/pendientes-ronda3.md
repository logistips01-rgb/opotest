# Correcciones pendientes, ronda 3 (temas 4, 5, 6, 7, 8 y 10)

Banco: `aux-admin-zaragoza`. Fechas: 23 y 24-oct-2026. No se ha modificado ningún archivo de `data/` ni se ha hecho commit.

- Propuestas: `lotes/auditoria/pendientes-ronda3.json`, 19 entradas en el formato de `tools/aplicar-cambios.js`.
- `node tools/aplicar-cambios.js lotes/auditoria/pendientes-ronda3.json --tipo correccion --titulo prueba --simular` localiza y aplica las 19 sin error (banco de HEAD f8ad9bc).
- Índice = posición en `data.questions[tema]`, base 0, en el banco de hoy. Cada `q` es el enunciado exacto actual y es único en su tema (comprobado por script).

## Alcance

Se compararon las secciones de `pendientes-siguiente-ronda.md` con lo ya resuelto en `pendientes-ronda2.revisado.json` (29 entradas, aplicadas en f8ad9bc) y `pendientes-varias.revisado.json`:

- **Ya resueltas, no se tocan:** tema 18 (57.5, 61.6, 55.2), tema 3 (art. 41 EAA), cupo aragonés del 8 %, tema 19 (art. 4.f RD 896/1991), tema 2 (RDL 6/2019), tema 14 completo (incluido el 122.5 del «Añadido 22-oct») y los índices de inventario y cesiones del tema 10.
- **El art. 11.3 r) del tema 14** es de un lote nuevo, no de una pregunta existente.
- **Las secciones de `tools/fuentes.json`** no se tocan (ver al final).

**Bloque A (8 entradas): avisos de la lista sin tratar.**
- tema 8 #90;
- tema 4 #138 y #159;
- tema 5 #136;
- tema 6 #110;
- el aviso añadido el 24-oct («tema 5, n.º 234»), que en realidad es la **7-234**;
- lo que quedaba del tema 10: la 10-44, que la ronda 2 dejó en «Otros hallazgos», y la 10-83 (cesiones).

**Bloque B (11 entradas): recorrido de los temas 5 y 6** con el criterio del aviso #110 (nulidad o anulabilidad, «manifiestamente», «podrá» o «deberá»), más errores de cita que salieron en el recorrido. Es separable: basta con quitar las 11 últimas entradas.

## Resumen

| Tema-índice | Acción | Problema | Solución |
|---|---|---|---|
| 8-90 | **retirar** | La clave añade al art. 119.3 la salvedad «sin perjuicio de… incoar de oficio un nuevo procedimiento», que es del art. 88.2 | Corregida («No, en ningún caso») sería idéntica a la 21-48 (examen oficial); la salvedad del 88.2 ya está en la 7-64 |
| 4-138 | respuesta (+exp) | Clave con un ministerio suprimido en 2023 y un órgano suprimido en 2025, sin aviso | Clave «La Secretaría General de Administración Digital» (literal) y aviso en la explicación |
| 4-159 | respuesta (+exp) | Igual, en el art. 10.2 c) | Igual |
| 5-136 | enunciado (+opciones) | Da por hecho que el superior jerárquico solo propone (el art. 23.1 es ambiguo) | Pregunta de literalidad («¿Cómo continúa el texto?»); la explicación señala la ambigüedad |
| 6-110 | respuesta (+exp) | Clave sin «manifiestamente» (art. 47.1 b), luego falsa | Se añade el adverbio y se alargan los distractores |
| 7-234 | enunciado (+opciones) | «además de la decisión motivada»: la decisión solo se motiva en los casos del art. 35 | Enunciado sin «motivada»; se igualan las longitudes |
| 10-44 | enunciado (+opciones, exp) | Enunciado general («¿Qué órgano…?») con clave «el Pleno», que no es la regla de Zaragoza (regla 9) | Se ciñe al art. 47.2 m) LBRL y al 126.4 ll) de la Ley 7/1999 y pregunta la mayoría; se mantiene el aviso de Zaragoza |
| 10-83 | respuesta (distractores, exp) | La explicación solo citaba el RBEL (supletorio en Aragón) y no avisaba de Zaragoza; la clave casi doblaba en longitud a los distractores | Explicación con el art. 187 de la Ley 7/1999, los arts. 118-119 RBASO y el art. 14.1 g) de la Ley 10/2017; distractores alargados; la clave no cambia |
| 5-46, 5-48, 5-127, 5-128, 5-129 | enunciado (+exp) | Dicen que el plazo «se suspende» o que «procede la suspensión» en supuestos del art. 22.1, que dice «se podrá suspender» | «podrá suspenderse»; la explicación distingue el 22.1 del 22.2. Las claves no cambian |
| 6-111 | **retirar** | Clave doctrinal («Sólo afecta a los interesados»), explicación inexacta y con números de opción | Lo literal (convalidación) ya está en la 6-79 y la 6-219 |
| 6-112 | **retirar** | Gemela de la 6-111; dos opciones que hay que dar por ciertas chocan con la letra del art. 39.1 | Lo literal ya está en la 6-82, la 6-220 y la 6-228 |
| 6-68 | **retirar** | Cita un «art. 49.1 a)» inexistente | Corregida repetiría la 6-203 |
| 6-69 | **retirar** | Cita un «art. 49.1 b)» inexistente (es el 49.2) | Corregida repetiría la 6-206 |
| 6-72 | **retirar** | `fuente` con un «49.1 b)» inexistente y clave parafraseada | Corregida repetiría la 6-205 y la 6-206 |
| 6-81 | **retirar** | `fuente` «Art. 39»; la regla es del art. 52.2 | Corregida repetiría la 6-221 |

En total: 8 retiradas y 11 correcciones. Ninguna clave corregida cambia de sentido, salvo la de la 6-110 (que era falsa) y la de la 5-136 (reformulada).

## Razonamiento por pregunta

### 8-90 (art. 119.3 LPAC)

El art. 119.3 termina: «sin que en ningún caso pueda agravarse su situación inicial». La salvedad «sin perjuicio de la potestad de la Administración de incoar de oficio un nuevo procedimiento, si procede» está solo en el art. 88.2, que se refiere a los procedimientos tramitados a solicitud del interesado.

Corregir la clave daría «No, en ningún caso», que es exactamente la pregunta de examen 21-48. Además:
- la 8-172 y la 21-100 preguntan lo mismo;
- la 7-64 ya cubre la salvedad del art. 88.2.

Por eso se retira. En el `motivo` va la alternativa de corregirla.

### 4-138 y 4-159 (arts. 9.2 c y 10.2 c LPAC): el ministerio y la Secretaría General

Esto va más allá de lo que decía el aviso.

- **El ministerio.** El RD 829/2023 suprimió el «Ministerio de Asuntos Económicos y Transformación Digital» (disposición final primera). Las materias de transformación digital y de administración pública y función pública corresponden al «Ministerio para la Transformación Digital y de la Función Pública» (art. 22). Su disposición final segunda dice que las referencias a los órganos suprimidos se entienden hechas a los que asumen sus competencias. El consolidado no tiene modificaciones desde el 29/12/2023 y el RD sigue vigente: el RD 1009/2023, actualizado el 29/07/2026, mantiene ese ministerio en su art. 21.
- **La Secretaría General de Administración Digital también se ha suprimido.**
  - El RD 1118/2024 (Estatuto de la Agencia Estatal de Administración Digital) dispone en su DA 1.ª.2 que, en la fecha de constitución efectiva de la Agencia, «quedarán suprimidos la Secretaría General de Administración Digital…».
  - La constitución fue el 21 de febrero de 2025. Lo dice la nota del consolidado del RD 1009/2023 al art. 21, y la Resolución BOE-A-2025-3627 menciona la «reunión constitutiva del 21 de febrero de 2025» del Consejo Rector.
  - La DF 1.ª.2 del RD 1118/2024 subroga a la Agencia en «la totalidad de los derechos y obligaciones de la Secretaría General de Administración Digital» en sus competencias y funciones. La DF 1.ª.1 dice que las menciones al extinto ministerio, en lo que el Estatuto atribuye a la Agencia, se entienden hechas a esta. El Estatuto (art. 7) no menciona expresamente la comunicación de los arts. 9.2 c) y 10.2 c). Por eso la explicación no afirma que la comunicación vaya hoy a la Agencia: solo dice que la Agencia se subroga en las competencias y funciones de la Secretaría General.
- **La LPAC sigue diciendo lo mismo.** El consolidado se actualizó por última vez el 06/11/2024 y conserva la denominación en los arts. 9.2 c), 10.2 c) y en las disposiciones adicionales 6.ª y 8.ª.

**Decisión.**
- La clave queda en «La Secretaría General de Administración Digital»: es literal, es lo que preguntaría un examen ceñido a la ley y además deja de delatarse por la longitud (pasa de 100 a 47 caracteres).
- La explicación avisa de los dos cambios.
- Ningún distractor es la Agencia ni el ministerio actual.
- La Secretaría de Estado de Seguridad, que es un distractor, aparece en el precepto pero con otro papel: el informe vinculante.

### 5-136 (art. 23.1 LPAC)

El texto dice: «el órgano competente para resolver, a propuesta, en su caso, del órgano instructor o el superior jerárquico del órgano competente para resolver, podrá acordar…». Admite dos lecturas:
- el superior jerárquico propone, si se sobrentiende «del» ante «superior»;
- el superior jerárquico es un segundo sujeto que acuerda: en castellano, dos sujetos unidos por «o» admiten el verbo en singular.

En el art. 21.5, el mismo esquema sí deja claro que el superior actúa por sí mismo («podrán habilitar»).

El enunciado anterior daba por buena la primera lectura. Se reformula para preguntar solo cómo continúa el texto. La explicación cita el precepto completo, dice expresamente que la redacción no aclara el papel del superior y lo contrasta con el 21.5.

Los distractores (unidad tramitadora, interesado, control interno) no aparecen en el art. 23.1. No repite ninguna pregunta del banco ni de `lotes/nuevas`. La alternativa es retirarla: el resto del art. 23.1 ya está en la 5-51, la 5-134 y la 5-135.

### 6-110 (art. 47.1 b LPAC)

Sin «manifiestamente», la incompetencia territorial no es causa de nulidad:
- la incompetencia no manifiesta es anulable (art. 48.1);
- es convalidable por el superior jerárquico («incompetencia no determinante de nulidad», art. 52.3);
- la 6-285 pregunta precisamente eso.

La clave era, por tanto, falsa. Se añade el adverbio.

Para que la clave no sea la única opción con matiz, los distractores llevan uno, igual de falso como causa de nulidad:
- **Defecto de forma sin indefensión:** como mucho determina la anulabilidad (art. 48.2), nunca la nulidad.
- **Restringir intereses legítimos con la motivación debida:** el art. 35.1 a) solo obliga a motivar.
- **Contenido posible, aunque sea desfavorable:** el art. 47.1 c) declara nulo el contenido imposible.

La 6-53 pregunta la letra del 47.1 b); esta, la aplicación, y el aviso pedía corregirla.

### 7-234 (art. 88.3 LPAC)

La lista dice «tema 5, pregunta n.º 234», pero el enunciado citado («además de la decisión motivada») es el de la 7-234, porque el art. 88 es materia del tema 7. La 5-234 trata del art. 14.3 y no tiene ese problema.

El art. 88.3 dice: «contendrán la decisión, que será motivada en los casos a que se refiere el artículo 35». Se quita «motivada» del enunciado. La 7-318 ya pregunta cuándo se motiva la decisión, así que no se convierte en esa pregunta.

La clave (106 caracteres frente a 49-62) se abrevia y se alargan los distractores. Quedan entre 80 y 91 caracteres.

### 10-44 (enajenación, más del 20 %)

Es lo único de competencias en Zaragoza que quedaba pendiente en el tema 10. Se revisaron todas las preguntas del tema que mencionan el inventario, las cesiones, la enajenación, el Pleno, el Alcalde o la Junta: las de inventario y cesiones ya llevan el aviso de la ronda 2.

La 10-44 tenía la explicación correcta, pero el enunciado era general. Se reformula como pregunta de mayoría, ceñida a dos normas:
- el art. 47.2 m) LBRL;
- el art. 126.4 ll) de la Ley 7/1999, comprobado en el consolidado del BOE: está en el apartado 4, el de la mayoría absoluta, y no en el 3, el de los dos tercios.

El RBASO (art. 108.3) remite a ese quórum.

**Distractores:**
- la mayoría simple, que es la regla general del 126.1;
- los dos tercios del número de hecho, que son del 126.3, donde no está la enajenación;
- la mayoría absoluta de los presentes.

**Aviso de Zaragoza:**
- el art. 47.3 LBRL remite al 123.2, que no incluye esta mayoría;
- el art. 14.1 g) de la Ley 10/2017 da la enajenación al Gobierno de Zaragoza;
- la DA 2.ª.11 LCSP dice «cualquiera que sea el importe del contrato».

Todo está comprobado en los consolidados. Se ha quitado la frase anterior sobre el art. 114 RBEL («no rige»), porque ningún texto oficial lo dice así.

### 10-83 (cesión gratuita)

Según las instrucciones, en Aragón mandan la Ley 7/1999 y el RBASO, y el RBEL es supletorio.

**La clave es correcta también con la norma aragonesa.**
- «Acreditar el interés público» se corresponde con el art. 119.1 a) RBASO, la «Justificación documental de los fines…».
- «Dar cuenta a la autoridad autonómica» se corresponde con el 109.2 RBEL y con el 119.1 f) RBASO, la «autorización o toma de conocimiento».

**Cambios.**
- La explicación incorpora esas normas, el art. 119.2 (Pleno, mayoría absoluta) y el aviso de Zaragoza (art. 14.1 g Ley 10/2017, con la misma fórmula que la 10-139 revisada en la ronda 2).
- Se alargan los distractores (regla 7 bis).

### 5-46, 5-48, 5-127, 5-128, 5-129 (art. 22.1 LPAC)

El art. 22.1 dice «se podrá suspender» y el 22.2 «se suspenderá». La 5-133 y la 5-274 preguntan justamente esa diferencia. Cinco preguntas del 22.1 la contradecían en el enunciado:
- con «se suspende»: la 5-46, la 5-48 y la 5-128;
- con «procede la suspensión», que puede leerse como suspensión obligada: la 5-127 y la 5-129.

Solo cambian el enunciado y la explicación. La 5-49 y la 5-131 (art. 22.2, «se suspende») son correctas y no se tocan.

### 6-111 y 6-112 (caracteres de los actos nulos y anulables)

Proceden de un banco de test externo (`lotes/auditoria/legacy-t6.json`: «Pregunta 728/729 del banco de test»), no de un examen oficial de Zaragoza.

**6-111.**
- La clave «Sólo afecta a los interesados» no tiene base literal.
- La explicación es inexacta: dice que la anulabilidad «solo pueden hacer valer los interesados», cuando la Administración puede impugnar sus actos favorables anulables previa declaración de lesividad (art. 107.1).
- La explicación nombra «las opciones 0, 2 y 3», contra la regla 3.

**6-112.**
- Para que su clave sea la única respuesta, hay que dar por ciertas, respecto de los actos nulos, «No producen efectos» y «Producen ineficacia por sí mismos».
- Son caracterizaciones doctrinales que chocan con la letra del art. 39.1 («se presumirán válidos y producirán efectos»).

Lo que tienen de literal ya lo cubren otras preguntas: la 6-79, la 6-82, la 6-219, la 6-220 y la 6-228. Por eso se retiran las dos. Si se prefiere conservar la 6-112, la alternativa está en su `motivo`.

### 6-68, 6-69, 6-72 (art. 49) y 6-81 (art. 52.2)

- **Art. 49.** El consolidado tiene dos apartados sin letras. Las tres preguntas citan un «49.1 a)» o un «49.1 b)» que no existen.
- **6-81.** Atribuye al art. 39 la regla del art. 52.2.

En los cuatro casos, la pregunta corregida sería un duplicado exacto de otra que ya cita bien el precepto con la clave literal:
- la 6-68, de la 6-203;
- la 6-69, de la 6-206;
- la 6-72, de la 6-205 y la 6-206;
- la 6-81, de la 6-221.

Por eso se retiran, en lugar de corregir la cita.

### Revisadas sin cambios (temas 5 y 6)

**Tema 5.** Todas las preguntas de los arts. 21 a 25, 29 a 33 y 13 a 28 que llevan «podrá», «deberá», «en todo caso» o «en ningún caso». En particular:
- 5-49 y 5-131 (22.2);
- 5-50 y 5-132 (recuentos);
- 5-62 y 5-152 (25.1 a, «podrán entender desestimadas»);
- 5-92 y 5-206 (32.1);
- 5-210 y 5-211 (32.3);
- 5-212 y 5-213 (32.4 y 32.5; el 32.5 lo añadió el RDL 6/2022, como dice la pregunta);
- 5-122 (21.5);
- los casos prácticos 5-292 a 5-297, cuyos cómputos he comprobado uno a uno.

**Tema 6.** Todas las preguntas de los arts. 47 a 52. En particular:
- 6-53, 6-195, 6-196, 6-224 y 6-285 (incompetencia);
- 6-90, 6-197, 6-198 y 6-232 (defecto de forma);
- 6-82, 6-219 y 6-220 (convalidación);
- 6-216 («dispondrá siempre»);
- 6-223 («podrá realizarse»);
- 6-228 y 6-229 (revisión y lesividad).

Además, las preguntas de «podrá» o «deberá» de los arts. 40 a 46.

## Verificación

**Script `…/scratchpad/pend3/bin/validar.js`.** Comprueba en las 19 entradas:
- que cada `q` existe y es único en su tema;
- que hay 4 opciones distintas y la clave está dentro de rango;
- que ninguna opción remite a otras;
- que la explicación no nombra opciones por su letra o número;
- que ningún enunciado nuevo repite otro del banco ni de `lotes/nuevas/*.json`;
- que todo fragmento entre «» del enunciado, de la explicación y de `cita` aparece literalmente en los textos descargados (normalizando espacios).

Pasan todas.

**Longitudes (regla 7 bis).** En las entradas que cambian opciones, la clave queda entre 0,95 y 1,1 veces el distractor más largo. Excepciones:
- 10-83: 126 frente a 94; antes era 126 frente a 68.
- 5-46 y 5-127: no cambian las opciones; la clave ya era la más larga. Quedan para una ronda de forma.

**Construcción del JSON.** Lo genera `…/scratchpad/pend3/bin/construir.js`, que toma cada `q` del banco por su índice y comprueba su comienzo.

## Fuentes descargadas

En `/tmp/claude-0/-home-user-opotest/b89be96f-03bf-5e1f-ba88-44c94e136a9e/scratchpad/pend3/dl/` (HTML) y `…/pend3/txt/` (texto). Las del BOE se bajaron con `curl` y reintentos (`bin/bajar.sh`).

| Norma | ID | Última actualización |
|---|---|---|
| LPAC, Ley 39/2015 | BOE-A-2015-10565 | 06/11/2024 (sin redacciones pendientes de vigor) |
| LRJSP, Ley 40/2015 | BOE-A-2015-10566 | 02/08/2024 |
| RD 829/2023, reestructuración de departamentos | BOE-A-2023-23537 | 29/12/2023 |
| RD 1009/2023, estructura orgánica básica | BOE-A-2023-24842 | 29/07/2026 |
| RD 210/2024, estructura del MTDFP | BOE-A-2024-3796 | 12/06/2026 |
| RD 1118/2024, Estatuto de la AEAD | BOE-A-2024-22929 | 12/06/2026 |
| Resolución de 21-feb-2025 (Consejo Rector de la AEAD) | BOE-A-2025-3627 | — |
| RD 466/2026 y RD 328/2026 (títulos y menciones, para descartar una nueva reestructuración) | BOE-A-2026-12711, BOE-A-2026-9079 | — |
| LBRL | BOE-A-1985-5392 | 03/10/2026 |
| Ley 10/2017, capitalidad de Zaragoza | BOE-A-2018-1683 | 15/01/2019 |
| Ley 7/1999, Administración Local de Aragón | BOE-A-1999-10151 | 25/10/2022 |
| RBEL, RD 1372/1986 | BOE-A-1986-17958 | 07/07/1986 |
| LCSP, Ley 9/2017 | BOE-A-2017-12902 | 09/04/2026 |
| Decreto 347/2002 (RBASO), BOA | ELI `d/2002/11/19/347` | Versión de publicación |

## Hallazgos no incluidos en el JSON

**Duplicados que la propuesta no toca.** Ninguno tiene error de fondo.
- 4-52 con 4-138; 4-78 con 4-140; 4-87 con 4-139 (art. 9.2 c). Siete preguntas sobre esa letra. Candidatas a retirar: 4-52, 4-78 y 4-87, cuyas claves además se delatan por la longitud.
- 8-37 con 8-170; 8-38 con 8-171; 8-89 con 8-173 (art. 119).
- 6-71 y 6-91 con 6-203 y 6-204 (art. 49.1).
- 6-65, 6-113 y 6-199 (art. 48.3).
- 6-79, 6-82, 6-219 y 6-220 (art. 52.1).

**Otras menciones a la Secretaría General de Administración Digital.** Están en enunciados o distractores de la 4-139, la 4-140, la 4-161, la 4-162, la 4-169 y la 4-254. Son literales de la LPAC y no preguntan por el órgano. Si se quiere, se les puede añadir el mismo aviso. La 5-204 tiene un distractor con el «Ministerio de Asuntos Económicos», que es falso en cualquier caso.

**10-109.** Pregunta quién emite el informe previo al ejercicio de acciones y da como clave «El Secretario». El art. 9.3 RBEL dice «previo dictamen del secretario, o, en su caso, de la Asesoría Jurídica y, en defecto de ambos, de un Letrado». La clave está incompleta, y en Zaragoza, municipio de gran población con Asesoría Jurídica (art. 129 LBRL), no es el Secretario. Habría que revisarla en otra ronda; no es de inventario ni de cesiones.

**La lista de pendientes.** El aviso «Tema 5, pregunta existente n.º 234» corresponde al tema 7 (7-234).

**RBASO.** Como en la ronda 2, se ha usado la versión de publicación del BOA. No he comprobado si los arts. 108, 118, 119 y 121 tienen modificaciones posteriores.

## Errores en `tools/fuentes.json` (sin tocar)

**Tema 10.** Solo lista la LBRL, el RBEL y la LPAP; faltan:
- la Ley 7/1999 de Administración Local de Aragón (BOE-A-1999-10151);
- el Decreto 347/2002 (RBASO), que según `INSTRUCCIONES-PREGUNTAS.md` son las normas que mandan en Aragón;
- la Ley 10/2017 (art. 14.1 g y DA 1.ª), para la regla de Zaragoza.

Además, presenta la LPAP como «aplicable a las entidades locales con carácter supletorio del RBEL», cuando parte de sus preceptos son básicos (disposición final segunda de la LPAP). Esto último no lo he contrastado aquí con el texto.

**Tema 4.** No recoge ninguna norma de organización que permita actualizar la mención de los arts. 9.2 c) y 10.2 c): el RD 829/2023 y el RD 1118/2024. Es una sugerencia, no un error.
