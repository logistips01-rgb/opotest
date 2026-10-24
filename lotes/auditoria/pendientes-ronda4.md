# Correcciones pendientes, ronda 4 (temas 4, 10, 13 y 18)

Banco: `aux-admin-zaragoza`. Fecha: 24-oct-2026. No se ha modificado ningún archivo de `data/` ni se ha hecho commit.

- Propuestas: `lotes/auditoria/pendientes-ronda4.json`, 26 entradas en el formato de `tools/aplicar-cambios.js`.
- `node tools/aplicar-cambios.js lotes/auditoria/pendientes-ronda4.json --tipo correccion --titulo prueba --simular` localiza y aplica las 26 sin error (banco de HEAD 219386b, después de integrar t17-2).
- Índice = posición en `data.questions[tema]`, base 0, en el banco de hoy. Cada `q` es el enunciado exacto actual y es único en su tema (comprobado por script).

## Alcance

Entradas de `pendientes-siguiente-ronda.md` añadidas el 24-oct y no resueltas en `pendientes-varias.revisado.json`, `pendientes-ronda2.revisado.json` ni `pendientes-ronda3.revisado.json` (aplicada en 3add42c), más tres avisos que la coordinación añadió durante el trabajo:

1. **Redactor de t18-2:** 18-251 y 18-222.
2. **Revisor de la ronda 3:** retirar 4-52, 4-78 y 4-87; aviso de la Secretaría General de Administración Digital en 4-139, 4-140, 4-161, 4-162, 4-169 y 4-254; 10-109; Decreto 347/2002 (arts. 108, 118 y 119).
3. **Encargo:** buscar en todo el banco preguntas que citen el art. 45.1 RD 128/2018 o la «autorización expresa» del Estado para la libre designación (art. 92 bis.6 LBRL, RDL 13/2026).
4. **Coordinación:** RD 365/1995 desplazado (excedencia por interés particular, art. 87.3 TREBEP y cualquier otro).
5. **Coordinación:** gastos plurianuales sobre el «crédito inicial» del art. 82 RD 500/1990 (temas 13 y 21).
6. **Coordinación:** operaciones de crédito para gasto corriente (art. 177.5 TRLRHL / 36.3 RD 500/1990) y DA 14.ª RDL 20/2011 (temas 13 y 21).

Las demás secciones de la lista ya estaban resueltas en las rondas anteriores (lo comprobó la ronda 3) o son de `tools/fuentes.json`, que no se toca.

## Resumen

| Tema-índice | Acción | Problema | Solución |
|---|---|---|---|
| 18-251 | **retirar** | Da como vigente el 75 % del art. 21.4 RD 365/1995 | Desplazado por el art. 98.3 TREBEP (retribuciones básicas); corregida sería la 18-177 |
| 18-222 | enunciado (+opciones, exp) | Clave «resolución judicial de adopción»; el art. 89.4 dice «judicial o administrativa». El enunciado usaba la fórmula del RD («en todo caso, una duración máxima») | Enunciado y clave literales del art. 89.4; distractores igualados |
| 18-232 | **retirar** | Máximo de quince años de la excedencia por interés particular (art. 16.3 RD 365/1995) | Suprimido por la Ley 13/1996; el TREBEP no fija máximo. Corregida repetiría la 18-21 o la 18-38 |
| 18-233 | **retirar** | Pérdida de la condición de funcionario por no pedir el reingreso (art. 16.4) | Suprimida por la Ley 13/1996; no está en el art. 63 TREBEP. Sin arreglo; lo cercano ya está en la 17-244, 17-245, 17-273 y 18-36 |
| 18-21 | explicación | Citaba entero el art. 16.3, máximo de quince años incluido | La explicación avisa de la supresión; la clave (dos años) no cambia |
| 18-201, 18-202 | respuesta (distractores, exp) | El aviso del art. 87.3 TREBEP: comprobado, el art. 7.1 RD 365/1995 no está desplazado. La 18-201 se delataba por la longitud y la 18-202 tenía un distractor «provisional» contra su propio enunciado | Explicación con la garantía mínima del 87.3; distractores nuevos; la clave no cambia de sentido |
| 18-209, 18-211 | respuesta (distractores, exp) | «Servicio en Comunidades Autónomas» del RD 365/1995 sin aviso; claves de 121-126 caracteres frente a 33-68 | Aviso: el TREBEP la sustituyó por «servicio en otras Administraciones Públicas» (arts. 85.1 c y 88); distractores alargados |
| 4-52, 4-78, 4-87 | **retirar** | Repiten la 4-138, la 4-140 y la 4-139 | Retiradas |
| 4-139 | respuesta (distractores, exp) | Secretaría General de Administración Digital sin aviso; clave de 103 caracteres frente a 33-55 | Aviso de la ronda 3; distractores alargados |
| 4-140, 4-161, 4-254 | explicación | Mencionan la Secretaría General sin aviso | Aviso de la ronda 3 |
| 4-162, 4-169 | explicación | La Secretaría General aparece en un distractor sin aviso ni explicación | Se explica por qué falla y se avisa |
| 4-160 | respuesta (distractores, exp) | Hallada de paso: la explicación entrecomillaba «venga acompañada» (el texto dice «vendrá») y la clave se delataba | Cita corregida y distractores alargados |
| 10-109 | **retirar** | Clave «El Secretario» incompleta (falta la Asesoría Jurídica y el Letrado) y engañosa en Zaragoza | Corregida sería la 10-229 |
| 10-229 | respuesta (distractores, exp) | Explicación sin la norma aragonesa ni Zaragoza; clave de 86 caracteres frente a 30-56 | Explicación con el art. 43.2 RBASO, el art. 120.3 Ley 7/1999 y el art. 129 LBRL; distractores con la misma estructura |
| 13-107, 13-108, 13-109 | explicación | Art. 177.5 TRLRHL sin aviso de la DA 14.ª RDL 20/2011; la 13-107 remite además a un art. 47.3 LBRL que ya no enumera mayorías | Aviso en la explicación; las claves, literales, no cambian |
| 13-415 | explicación | Remite a los límites del art. 82 RD 500/1990 («crédito inicial») sin decir que rige el art. 174.3 TRLRHL | Aviso en la explicación |
| 13-386 | explicación | Art. 88.1 RD 500/1990 («al Pleno») sin aviso de Zaragoza (regla 9) | Aviso: Gobierno de Zaragoza (art. 14.1 f y h Ley 10/2017; DA 2.ª.4 LCSP) |

En total: 8 retiradas y 18 correcciones. Solo la 18-222 cambia el texto de su clave (para hacerla literal). En las ocho entradas que cambian opciones, la clave no es la más larga en ninguna y queda entre 0,88 y 0,98 veces el distractor más largo.

## Razonamiento por bloque

### Tema 18: RD 365/1995 frente al TREBEP (regla 10)

El RD 365/1995 es el reglamento de situaciones de la AGE y desarrolla la Ley 30/1984. El consolidado del BOE no tiene notas desde 2006 (RD 255/2006, solo art. 15). Por eso no avisa de lo que han desplazado las leyes posteriores. Revisé las 80 preguntas del banco que lo citan (18-20, 18-21 y 18-182 a 18-261) contra el TREBEP, la Ley 30/1984 consolidada (con sus notas de vigencia) y las leyes que la modificaron.

**Excedencia voluntaria por interés particular.**
- La Ley 22/1993 (art. 19) redactó el art. 29.3 c) de la Ley 30/1984 con:
  - un máximo de permanencia de quince años;
  - la pérdida de la condición de funcionario si no se pedía el reingreso.
- La Ley 13/1996 (art. 104) le dio nueva redacción. Solo quedan los cinco años previos y el mínimo de «dos años continuados».
- El TREBEP no fija máximo (art. 89.2) y no recoge esa causa de pérdida (art. 63).
- Por eso se retiran la 18-232 y la 18-233.
- La 18-21 (mínimo de dos años) es correcta. Ese mínimo sigue en el art. 29.3 c), que se mantiene en vigor mientras no se oponga al TREBEP (DF 4.ª.2 TREBEP y nota del consolidado de la Ley 30/1984). Solo se corrige su explicación, que citaba el máximo como vigente.

**Suspensión provisional (18-251).**
- El art. 98.3 TREBEP dice que el suspenso provisional percibe «las retribuciones básicas y, en su caso, las prestaciones familiares por hijo a cargo».
- El 75 % del art. 21.4 está desplazado.
- Corregida, sería idéntica a la 18-177. Las salvedades del 21.4 (paralización, incomparecencia) restringen el derecho del 98.3, así que tampoco sirven para reformularla.

**Excedencia por cuidado de hijos (18-222).** El art. 89.4 cuenta los tres años «desde la fecha de nacimiento o, en su caso, de la resolución judicial o administrativa».
- La clave anterior era incompleta: solo «judicial de adopción».
- El enunciado decía «en todo caso, una duración máxima», que es la fórmula del art. 14.1 RD 365/1995.
- Se reescribe con la letra del Estatuto. Los distractores nuevos son falsos según el 89.4: fin del permiso por nacimiento, solicitud o concesión, reincorporación del otro progenitor.
- No repite la 18-8 (duración) ni la 18-309 (guarda y acogimiento).

**Art. 87.3 TREBEP (18-201 y 18-202).** El 87.3 garantiza «al menos» el reingreso en la misma localidad con las retribuciones de la carrera consolidada. El art. 7.1 RD 365/1995 da un puesto de igual nivel y similares retribuciones en el mismo municipio:
- con carácter provisional, si se venía de libre designación;
- con carácter definitivo, en el mismo Ministerio, en los demás casos.

No es contrario al TREBEP. No se retiran: la explicación añade el 87.3 y se arreglan los distractores. El art. 7.2, que niega la reserva a quien viene de una situación sin puesto, choca con el 87.3. Ninguna pregunta lo usa.

**Servicio en Comunidades Autónomas (18-209 y 18-211).** El TREBEP sustituyó esa situación por la de «servicio en otras Administraciones Públicas» (arts. 85.1 c y 88). El fondo coincide con los arts. 88.2 y 88.3, así que basta un aviso.

**Revisadas sin cambios.** Lo de la AGE que el TREBEP permite mantener:
- expectativa de destino, excedencia forzosa e incentivada (art. 85.2 TREBEP; último párrafo de los apartados 5, 6 y 7 del art. 29 de la Ley 30/1984, no derogados);
- servicios especiales;
- reingreso (art. 9);
- cuidado de hijos, arts. 14.2 y 14.3: la reserva del puesto durante todo el periodo es más favorable que el «al menos durante dos años» del 89.4;
- art. 19;
- suspensión, arts. 20 a 22, coherentes con los arts. 90 y 98;
- art. 23 y DA 5.ª (el art. 30.4 de la Ley 30/1984 sigue vigente: solo se derogaron sus apartados 3 y 5).

### Tema 4: Secretaría General de Administración Digital

**Criterio:** el aprobado en la ronda 3 para la 4-138 y la 4-159. Se mantiene la letra de la LPAC (consolidado del 06/11/2024, sin cambios en los arts. 9.2 c y 10.2 c) y se avisa de dos supresiones:
- la del ministerio (RD 829/2023, DF 1.ª);
- la de la Secretaría General, el 21-feb-2025 (RD 1118/2024, DA 1.ª.2, con subrogación de la Agencia en la DF 1.ª.2; Resolución BOE-A-2025-3627, «reunión constitutiva del 21 de febrero de 2025»).

El aviso no dice a quién se dirige hoy la comunicación.

**Retiradas por repetición:**
- 4-52 = 4-138 (registro previo y comunicación);
- 4-78 = 4-140 (dos meses);
- 4-87 = 4-139 (declaración responsable).

Las tres usaban además «Ministerio competente» o tenían la clave más larga.

### Tema 10: dictamen previo al ejercicio de acciones

**Textos comprobados:**
- **RBEL, art. 9.3:** «previo dictamen del secretario, o, en su caso, de la Asesoría Jurídica y, en defecto de ambos, de un Letrado».
- **RBASO, art. 43.2:** lo mismo.
- **Ley 7/1999, art. 120.3:** «del Secretario, de la asesoría jurídica de la entidad local o de un letrado externo».
- **LBRL, art. 129:** obliga a los municipios de gran población a tener asesoría jurídica, responsable del asesoramiento y de la defensa en juicio.

**10-109.** Su clave («El Secretario») era incompleta, y en Zaragoza engañosa. Corregida, sería idéntica a la 10-229, así que se retira.

**10-229.** Recibe el aviso aragonés y de Zaragoza, y distractores con la misma estructura.

**Alternativa descartada:** reformular la 10-109 sobre el allanamiento y la transacción del art. 120.3. Ese artículo está en el capítulo de funcionamiento de la Ley 7/1999 y choca en apariencia con la prohibición de allanarse del art. 73 RBEL y del art. 46 RBASO.

### Tema 19: art. 45.1 RD 128/2018 y RDL 13/2026

**Ninguna pregunta del banco cita el art. 45.1 RD 128/2018 ni la «autorización expresa».** Busqué por «128/2018», «92 bis», «libre designación», «autorización expresa» y «45.1» en todos los temas.

**Lo que dicen los textos:**
- La redacción de 2013/2015 del art. 92 bis.6 (descargada del selector de versiones del BOE) exigía, para los puestos con funciones del 92 bis.1 b), «la autorización expresa del órgano competente de la Administración General del Estado en materia de Haciendas locales».
- La disposición final primera del RDL 13/2026 (en vigor el 4-jun-2026, convalidado por la Resolución BOE-A-2026-13462) la suprime.
- El art. 45.1, párrafo segundo, del RD 128/2018 (consolidado sin cambios desde 2018) la sigue recogiendo.

**La única pregunta que la usaba no llegó al banco.** Era del lote t19-2, y el revisor 1 la rechazó por la regla 10 (`lotes/nuevas/t19-2.revisado.json`, `data/pendientes/aux-admin-zaragoza-t19-revisar.json`).

**Las preguntas del banco sobre el 92 bis.6 coinciden con la redacción vigente:** 19-11, 19-35 a 19-42, 19-284 y 19-319, y además la 19-306 (DA 4.ª.3 RD 128/2018). No hay nada que corregir.

### Tema 13: gastos plurianuales (art. 82 RD 500/1990)

**Las dos normas:**
- **Art. 174.3 TRLRHL** (consolidado de 07/10/2026): aplica los porcentajes «al crédito correspondiente del año en que la operación se comprometió». Los extiende a las transferencias corrientes de convenios (letra e). El 174.5 permite al Pleno ampliarlos.
- **Art. 82 RD 500/1990:** los aplica «al crédito inicial» y solo a inversiones y transferencias de capital.

**Preguntas que se tocan:**
- Solo la 13-415 remite a los límites del art. 82. Se corrige su explicación.
- La 13-386 (art. 88.1: los plurianuales los autoriza «el Pleno») salió en el mismo recorrido. Recibe el aviso de Zaragoza (regla 9): el Gobierno de Zaragoza autoriza y dispone gastos en su materia y es órgano de contratación «cualquiera que sea el importe del contrato o la duración del mismo» (art. 14.1 f y h Ley 10/2017; DA 2.ª.4 LCSP).

**Ya correctas:** la 13-23 y las 13-315 a 13-326 siguen el TRLRHL.

**Tema 21:** ninguna pregunta de examen trata de plurianuales.

### Tema 13: art. 177.5 TRLRHL y DA 14.ª RDL 20/2011

**La limitación.** La DA 14.ª, en la redacción de la Ley 17/2012 (DF 31.ª, «vigencia indefinida»; el consolidado no tiene cambios desde el 01/01/2013), limita las nuevas operaciones a largo plazo a la financiación de inversiones. Exige además ahorro neto positivo y no superar el 75 % de capital vivo.

**Preguntas que se tocan.** La 13-107, la 13-108 y la 13-109 se ciñen al texto del 177.5, así que solo se avisa en la explicación.

**Hallazgo de la 13-107.** El 177.5 remite al «quórum establecido por el artículo 47.3» LBRL, que desde la Ley 57/2003 ya no enumera mayorías: remite al art. 123.2 para los municipios de gran población. Lo comprobé con la versión de 1999 del art. 47, en el selector de versiones del BOE, donde el 47.3 g) incluía estas operaciones. La mayoría absoluta está hoy en el 47.2 l), que cita expresamente el antiguo art. 158.5 LRHL. La explicación lo dice sin afirmar qué mayoría rige en Zaragoza: el art. 123.2 no las incluye, y el art. 11.2 de la Ley 10/2017 remite a «la legislación básica».

**Fuera del alcance:**
- **Art. 36.3 RD 500/1990:** ninguna pregunta del banco lo cita.
- **Tema 21:** no tiene preguntas de examen sobre esto.

## Decreto 347/2002 (RBASO): modificaciones de los arts. 108, 118 y 119

No hay consolidado. Busqué en el BOA, en búsqueda avanzada y por texto, «"Decreto 347/2002"». Salen 976 resultados y revisé todos.

**De la sección I (Disposiciones generales) solo aparecen:**
- decretos que aprueban ordenanzas municipales de bienes comunales;
- la **corrección de errores del BOA n.º 9, de 24-ene-2003**. Corrige el art. 115.1 (permuta), el art. 121 (comunicación tras el acuerdo y antes de su ejecución) y el art. 146.2 (cómputo del plazo).

**Ninguna disposición modifica los arts. 108, 118 ni 119.** El banco ya aplica la corrección del art. 121 (10-32, 10-33, 10-80, 10-136, 10-137 y 10-309).

**Límite de la búsqueda:** la búsqueda por el título del Reglamento devolvió «No se han recuperado documentos», probablemente por la codificación. Una norma que lo modificara sin citar «Decreto 347/2002» no habría salido. Es poco probable, porque las modificaciones citan siempre el número.

## Verificación

**Script `…/scratchpad/pend4/bin/validar.py`.** Comprueba en las 26 entradas:
- que cada `q` existe y es único en su tema;
- que hay 4 opciones distintas y la clave está dentro de rango;
- que ninguna opción remite a otras;
- que la explicación no nombra opciones por su letra;
- que el enunciado nuevo de la 18-222 no repite ninguno del banco ni de `lotes/nuevas/*.json`;
- que todo fragmento entre «» de la explicación, del `motivo` y de la `cita` aparece literalmente en los textos descargados (normalizando espacios).

Pasan todas. Quedan dos avisos, y ambos son falsos positivos:
- «art. 7.1 a)» es una letra del precepto, no una opción;
- «todas las Comunidades Autónomas» no remite a otras opciones.

En los `motivo`, lo que se cita del propio banco va entre comillas inglesas.

**Construcción del JSON.** Lo genera `…/scratchpad/pend4/bin/construir.py`, que toma cada `q` del banco por su índice y comprueba su comienzo.

## Fuentes descargadas

En `/tmp/claude-0/-home-user-opotest/b89be96f-03bf-5e1f-ba88-44c94e136a9e/scratchpad/pend4/dl/` (HTML y PDF) y `…/pend4/txt/` (texto). Las del BOE se bajaron con `curl` y reintentos (`bin/bajar.sh`).

| Norma | ID | Última actualización |
|---|---|---|
| TREBEP, RDLeg 5/2015 | BOE-A-2015-11719 | 03/10/2026 |
| RD 365/1995 (+ análisis) | BOE-A-1995-8730 | 04/03/2006 |
| Ley 30/1984 | BOE-A-1984-17387 | 31/10/2015 (notas de derogación con el alcance de la DF 4.ª TREBEP) |
| Ley 22/1993 (art. 19) y Ley 13/1996 (art. 104) | BOE-A-1993-31153, BOE-A-1996-29117 | — |
| LBRL (vigente; art. 92 bis en la versión de 2015; art. 47 en la de 1999) | BOE-A-1985-5392 | 03/10/2026 |
| RDL 13/2026 | BOE-A-2026-11848 | — |
| RD 128/2018 | BOE-A-2018-3760 | 17/03/2018 |
| LPAC | BOE-A-2015-10565 | 06/11/2024 |
| RD 829/2023, RD 1118/2024, RD 1009/2023, Resolución de 21-feb-2025 | BOE-A-2023-23537, BOE-A-2024-22929, BOE-A-2023-24842, BOE-A-2025-3627 | — |
| RBEL | BOE-A-1986-17958 | 07/07/1986 |
| Ley 7/1999 de Administración Local de Aragón | BOE-A-1999-10151 | 25/10/2022 |
| Ley 10/2017, capitalidad | BOE-A-2018-1683 | 15/01/2019 |
| Decreto 347/2002 (RBASO) y su corrección de errores | BOA n.º 139 de 25-nov-2002; BOA n.º 9 de 24-ene-2003 | Versión de publicación |
| TRLRHL | BOE-A-2004-4214 | 07/10/2026 |
| RD 500/1990 | BOE-A-1990-9664 | 27/04/1990 |
| RDL 20/2011 (DA 14.ª) y Ley 17/2012 (DF 31.ª) | BOE-A-2011-20638, BOE-A-2012-15651 | 28/12/2012 |
| LCSP | BOE-A-2017-12902 | 09/04/2026 |

## Hallazgos no incluidos en el JSON

**18-235 y 18-238 (agrupación familiar, «mínima de dos años y máxima de quince»).**
- El límite sigue en el art. 29.3 d) de la Ley 30/1984, que se mantiene mientras no se oponga al TREBEP.
- El art. 89.3 TREBEP no fija duración, pero no la prohíbe.
- No lo trato como desplazado. Si el revisor lo ve de otro modo, bastaría un aviso en la explicación.

**18-195 (art. 4.k: servicio militar).** El supuesto está obsoleto y el art. 87.1 TREBEP no lo recoge. No he descargado la norma de suspensión del servicio militar. Candidata a retirar en otra ronda.

**Denominaciones orgánicas del RD 365/1995 sin aviso.** Son literales, pero los órganos ya no existen con ese nombre:
- «Ministerio para las Administraciones Públicas»: 18-198 y 18-213;
- «Secretaría de Estado para la Administración Pública»: 18-215 y 18-241;
- «Ministerio de Asuntos Exteriores»: 18-200;
- Rector según la LORU de 1983: 18-260.

Podrían recibir el mismo tipo de aviso que el tema 4.

**10-58** se apoya en «la práctica administrativa» y su clave es la más larga con diferencia. Conviene revisarla en una ronda de forma.

**Art. 7.2 RD 365/1995** (sin reserva de puesto al venir de una situación sin puesto). Choca con el art. 87.3 TREBEP. No hay pregunta que lo use.
