# Revisión independiente de `pendientes-ronda4.json`

Banco: `aux-admin-zaragoza`. Fecha: 24-oct-2026. Revisor: Claude, sin relación con el agente que hizo la propuesta. No se ha modificado ningún archivo de `data/` ni se ha hecho commit.

Resultado: **26 aprobadas, 0 rechazadas**.
- 8 retiradas confirmadas: 18-251, 18-232, 18-233, 4-52, 4-78, 4-87 y 10-109. Ninguna se arregla con poco sin duplicar otra pregunta.
- 13 correcciones sin cambios: 18-222, 18-201, 18-202, 18-209, 18-211, 4-139, 4-140, 4-160, 4-161, 4-162, 4-254, 13-108, 13-109 y 13-415.
- 6 correcciones con cambios, todas en la explicación (ninguna toca opciones ni clave):
  - **13-386**: el aviso daba a entender que la atribución general al Pleno solo falla en Zaragoza, y la DA 2.ª.1 LCSP la desplaza en todos los municipios;
  - **13-107**: la mayoría absoluta del art. 47.2 l) LBRL podía leerse como aplicable a Zaragoza;
  - **4-169**: decía que la Secretaría General «solo aparece en el art. 10.2 c)» de la LPAC;
  - **10-229**: «la regla es la misma» en Aragón y una paráfrasis del art. 129 LBRL;
  - **18-21**: la vigencia del art. 29.3 c) de la Ley 30/1984 callaba que el TREBEP lo deroga, aunque con el alcance de su DF 4.ª.2.

Las 26 están en `lotes/auditoria/pendientes-ronda4.revisado.json`, en el mismo orden y formato, con un campo `revisor` en cada una. `node tools/aplicar-cambios.js lotes/auditoria/pendientes-ronda4.revisado.json --tipo correccion --titulo prueba --simular` localiza y aplica las 26 sin error (banco de HEAD 16443bd; repetido en c50e8c3).

Nota: mientras trabajaba, la sesión principal incluyó `pendientes-ronda4.revisado.json` en el commit c50e8c3 («Lote t16-2 redactado…»). La versión de ese commit coincide con la final del árbol de trabajo. Este informe no está en ningún commit.

## Veredictos

| Tema-índice | Acción | Veredicto | Nota |
|---|---|---|---|
| 18-251 | retirar | Aprobada | Art. 21.4 RD 365/1995 (75 %) desplazado por el 98.3 TREBEP; corregida sería la 18-177 |
| 18-222 | enunciado | Aprobada | Clave literal del 89.4 («resolución judicial o administrativa») |
| 18-232 | retirar | Aprobada | Punto delicado 1: máximo de quince años suprimido por la Ley 13/1996 |
| 18-233 | retirar | Aprobada | Punto delicado 1: pérdida de la condición suprimida; no está en el art. 63 TREBEP |
| 18-21 | explicación | **Aprobada con cambios** | Punto delicado 1. Vigencia del art. 29.3 c) Ley 30/1984 dicha con exactitud |
| 18-201 | respuesta | Aprobada | Punto delicado 2: el art. 7.1 a) RD 365/1995 cumple el mínimo del 87.3 TREBEP |
| 18-202 | respuesta | Aprobada | Punto delicado 2 |
| 18-209 | respuesta | Aprobada | Aviso «servicio en otras Administraciones Públicas» exacto |
| 18-211 | respuesta | Aprobada | Ídem; 88.3 TREBEP literal |
| 4-52 | retirar | Aprobada | Repite la 4-138 (y en parte la 4-254) |
| 4-78 | retirar | Aprobada | Repite la 4-140 |
| 4-87 | retirar | Aprobada | Repite la 4-139 |
| 4-139 | respuesta | Aprobada | Aviso de la ronda 3; distractores alargados (clave 0,92 del más largo) |
| 4-140 | explicación | Aprobada | Aviso de la ronda 3 |
| 4-160 | respuesta | Aprobada | «vendrá acompañada» comprobado; clave ya no se delata |
| 4-161 | explicación | Aprobada | Aviso de la ronda 3 |
| 4-162 | explicación | Aprobada | Explica bien por qué falla el distractor de la Secretaría General |
| 4-169 | explicación | **Aprobada con cambios** | La Secretaría General aparece también en el 9.2 c) y en las DA 6.ª y 8.ª |
| 4-254 | explicación | Aprobada | Aviso de la ronda 3 |
| 10-109 | retirar | Aprobada | Clave incompleta; corregida sería la 10-229 |
| 10-229 | respuesta | **Aprobada con cambios** | Punto delicado 4. «Equivalente», no «la misma»; art. 129 LBRL citado literalmente |
| 13-107 | explicación | **Aprobada con cambios** | Punto delicado 3. El 47.2 l) LBRL, solo para régimen común |
| 13-108 | explicación | Aprobada | Punto delicado 3 |
| 13-109 | explicación | Aprobada | Punto delicado 3 |
| 13-415 | explicación | Aprobada | Aviso del art. 174.3 TRLRHL exacto |
| 13-386 | explicación | **Aprobada con cambios** | Aviso extendido a la DA 2.ª.1 y 2 LCSP; límites del art. 86 remitidos al 174 TRLRHL |

Índice = posición en `data.questions[tema]` en el banco de hoy. Los 26 `q` coinciden exactamente con una sola pregunta de su tema.

En las ocho entradas que cambian opciones, la clave queda entre 0,88 y 0,98 veces el distractor más largo y en ninguna es la más larga.

## Puntos delicados

### 1. Excedencia por interés particular: plazo máximo y pérdida de la condición de funcionario (18-232, 18-233, 18-21)

**Decisión: se confirman las dos retiradas y se aprueba la 18-21 con un retoque.**

He comprobado la historia del art. 29.3 c) de la Ley 30/1984 en los textos de publicación:
- **Ley 22/1993, art. 19.** Le da una redacción que fija un máximo de permanencia («con un máximo de quince») y añade un párrafo: «La falta de petición de reingreso al servicio activo dentro del período de duración de la excedencia voluntaria por interés particular comportará la pérdida de la condición de funcionario».
- **Ley 13/1996, art. 104.** Lo redacta de nuevo: quedan los cinco años previos y «en ella no se podrá permanecer menos de dos años continuados». Desaparecen el máximo y la pérdida de la condición. Es la redacción que recoge el consolidado de la Ley 30/1984 (última actualización de 31/10/2015).
- **RD 365/1995.** Es anterior a la Ley 13/1996 y su consolidado no ha cambiado desde 2006 (solo el art. 15). Por eso sigue diciendo el máximo de quince años (art. 16.3) y la pérdida de la condición (art. 16.4).
- **TREBEP** (consolidado de 03/10/2026). El art. 89.2 no fija máximo: remite a las leyes de desarrollo «los periodos mínimos de permanencia». El art. 63 enumera cinco causas de pérdida de la condición de funcionario, y la falta de petición de reingreso no está entre ellas.

**Por qué se confirman las retiradas:**
- La 18-232, corregida, sería la 18-21 (mínimo de dos años) o la 18-38 (art. 89.2).
- La 18-233 no tiene arreglo: sin plazo máximo no hay plazo que incumplir.

**Retoque en la 18-21.** La explicación decía que el art. 29.3 c) «se mantiene en vigor… (disposición final cuarta.2 TREBEP)». Faltaba un dato: la disposición derogatoria única b) del TREBEP deroga el art. 29 de la Ley 30/1984, salvo el último párrafo de sus apartados 5, 6 y 7, pero lo hace «con el alcance establecido en el apartado 2 de la disposición final cuarta». Por eso sigue aplicándose, en tanto no se oponga al Estatuto, hasta que se dicten las leyes y normas reglamentarias de desarrollo. Es lo que dice la nota del consolidado de la Ley 30/1984. La explicación lo dice ahora así. El resto (cita del 16.3, aviso del máximo y de la pérdida de la condición) es exacto.

### 2. Art. 87.3 TREBEP frente al art. 7 RD 365/1995 (18-201, 18-202)

**Decisión: se aprueban sin cambios.** Las dos normas no chocan.

- **Lo que garantiza el art. 87.3.** Es un mínimo («al menos»): reingresar «en la misma localidad, en las condiciones y con las retribuciones correspondientes a la categoría, nivel o escalón de la carrera consolidados». No exige un destino definitivo.
- **Art. 7.1 a) RD 365/1995.** Da un puesto de igual nivel y similares retribuciones en el mismo municipio, con carácter provisional hasta obtener otro definitivo. Cumple el mínimo.
- **Art. 7.1 b).** Lo da con carácter definitivo y en el mismo Ministerio. Es más favorable.
- **Art. 7.2.** Niega la reserva de puesto a quien viene de una situación sin puesto, y podría chocar con el 87.3. Ninguna pregunta lo usa (lo comprobé, como el proponente).

**Distractores.** Los nuevos son falsos según el 7.1. En la 18-202 se quita el distractor «con carácter provisional», que contradecía el propio enunciado («con carácter definitivo»).

**Longitudes.** Clave de 128 frente a 121-132 en la 18-201, y de 85 frente a 90-96 en la 18-202.

### 3. DA 14.ª RDL 20/2011 y art. 177.5 TRLRHL; remisión al art. 47 LBRL (13-107, 13-108, 13-109)

**Decisión: el aviso no enseña nada falso. Se aprueba, con un retoque en la 13-107.**

**El texto de la DA 14.ª.** Lo comprobé en el consolidado del RDL 20/2011, en la redacción de la Ley 17/2012, DF 31.ª: «Con efectos de la entrada en vigor de esta Ley y vigencia indefinida». No ha cambiado desde el 01/01/2013. Dice:
- las entidades que liquiden con ahorro neto positivo «podrán concertar nuevas operaciones de crédito a largo plazo para la financiación de inversiones» si el capital vivo no excede del 75 % de los ingresos corrientes;
- entre el 75 % y el límite del art. 53 TRLRHL necesitan autorización del órgano de tutela financiera;
- con ahorro neto negativo o deuda por encima del art. 53, «no podrán concertar operaciones de crédito a largo plazo».

Cada dato del aviso está en el texto.

**La conclusión del aviso.** El aviso concluye: «hoy no cabe acudir a un préstamo a largo plazo para financiar gasto corriente por la vía del art. 177.5». Es la lectura del Ministerio de Hacienda. Su *Nota informativa sobre el régimen legal aplicable en el año 2012…* (Secretaría General de Coordinación Autonómica y Local, sobre la DA 14.ª) exige el «destino a inversiones» y añade: «Quedan excluidas del régimen vigente en 2012: Las operaciones de crédito a largo plazo que, con carácter extraordinario, pueden financiar gasto corriente, en los supuestos y con los límites establecidos en el artículo 177.5 del TRLRHL. Los préstamos de legislatura, previstos en el artículo 193.2…». La redacción indefinida de la Ley 17/2012 mantiene el mismo requisito de destino.

El aviso no dice que el 177.5 esté derogado. Dice que sigue escrito, y que hoy no puede usarse. Las claves de las tres preguntas son literales del 177.5 y no cambian.

**La remisión al art. 47.3 LBRL.** Comprobé con el selector de versiones del BOE que el art. 47.3, en la redacción de 1999 (Ley 11/1999), enumeraba en su letra g) «las operaciones de crédito previstas en el artículo 158.5 de la Ley 39/1988». Desde la Ley 57/2003 (en vigor el 01/01/2004):
- el 47.3 remite al art. 123.2 para los municipios de gran población;
- esa mención pasó al art. 47.2 l).

La remisión del 177.5 estaba ya desfasada cuando se aprobó el TRLRHL (marzo de 2004).

**Retoque en la 13-107.** La explicación decía «remite al art. 123.2 para los municipios de gran población (como Zaragoza), y la mayoría absoluta para estas operaciones figura en el art. 47.2 l)». Así seguido, podía entenderse que en Zaragoza rige el 47.2 l). Pero:
- el art. 123.2 no recoge estas operaciones;
- el art. 11.2 de la Ley 10/2017 remite a «la legislación básica».

Ahora dice «en los municipios de régimen común, la mayoría absoluta… figura hoy en el art. 47.2 l)», sin afirmar qué mayoría rige en Zaragoza. Como el 177.5 no puede usarse hoy, la cuestión no tiene efecto práctico.

**Lo que falta: la 13-232.** El aviso debería llegar también a la 13-232, que la propuesta no incluye: ver los hallazgos.

### 4. 10-229: asesoría jurídica en Zaragoza (art. 129 LBRL)

**Decisión: se aprueba, con dos retoques en la explicación.**

**Textos comprobados:**
- **RBEL, art. 9.3:** «previo dictamen del secretario, o, en su caso, de la Asesoría Jurídica y, en defecto de ambos, de un Letrado».
- **RBASO, art. 43.2** (BOA, versión de publicación): misma fórmula.
- **Ley 7/1999, art. 120.3:** «del Secretario, de la asesoría jurídica de la entidad local o de un letrado externo». Son tres alternativas, sin el orden subsidiario del RBEL. Por eso «la regla es la misma» pasa a «la regla es equivalente».
- **LBRL, art. 129:** crea un órgano «responsable de la asistencia jurídica al Alcalde, a la Junta de Gobierno Local y a los órganos directivos, comprensiva del asesoramiento jurídico y de la representación y defensa en juicio del ayuntamiento», sin perjuicio de las funciones del secretario del Pleno (art. 122.5 e). La propuesta lo parafraseaba («responsable del asesoramiento jurídico y de la representación y defensa en juicio») y dejaba fuera la salvedad. Ahora se cita literalmente.
- **Ley 10/2017.** No regula este dictamen. Su art. 17 solo prevé un Consejo Jurídico Municipal potestativo, de informes no vinculantes.

**Por qué vale en Zaragoza:**
- El enunciado se ciñe al 9.3 RBEL y la clave es su fórmula.
- En Zaragoza existe la asesoría jurídica, así que «en su caso» se cumple. La explicación no afirma qué órgano firma el dictamen en Zaragoza, y hace bien.

**Distractores.** Tienen la misma estructura y son falsos: interventor, Intervención General y Tesorero; Alcalde, Junta de Gobierno y Pleno; órgano autonómico y Diputación. Longitudes de 85 a 90.

## Otras comprobaciones

### 13-386 (art. 88.1 RD 500/1990)

**Por qué se cambia el aviso.** La propuesta avisaba de que «esta atribución general al Pleno no es la regla en Zaragoza», y eso da a entender que en los demás municipios sí lo es. No lo es: la DA 2.ª.1 LCSP atribuye al Alcalde, en cualquier municipio, los contratos «incluidos los de carácter plurianual cuando su duración no sea superior a cuatro años», dentro de los límites de cuantía. El apartado 2 deja al Pleno los demás.

**El nuevo aviso (regla 10):**
- dice que la atribución general está desplazada en buena parte por normas posteriores con rango de ley;
- da después lo que rige en Zaragoza: DA 2.ª.4 LCSP («cualquiera que sea el importe del contrato o la duración del mismo»), art. 14.1 f) y h) de la Ley 10/2017 y arts. 123.1 h) y 127.1 g) LBRL, con citas literales comprobadas.

**Coherencia con la 13-415.** La frase sobre el art. 86 remitía a «los arts. 82 y, en su caso, 84» sin más. Ahora añade «(hoy, los del art. 174 TRLRHL)», para no contradecir el aviso de la 13-415.

**Se mantiene en lugar de retirarla.** La literalidad del RD 500/1990 es preguntable, la clave es la única correcta según el 88.1 y el aviso dice qué rige.

### 13-415

Comprobé:
- el art. 82.1 RD 500/1990: «al crédito inicial correspondiente en el año en que se adquiera el compromiso en firme», solo para inversiones y transferencias de capital;
- el art. 174.2 e), 174.3 y 174.5 TRLRHL (consolidado de 07/10/2026).

Las citas son literales y el aviso es exacto.

### Tema 4

**El aviso común**, frase por frase:
- la LPAC (consolidado de 06/11/2024) sigue nombrando el ministerio extinto en los arts. 9.2 c) y 10.2 c);
- el RD 829/2023, DF 1.ª, suprime ese ministerio;
- el RD 1118/2024, DA 1.ª.2 y DF 1.ª.2, suprime la Secretaría General y subroga a la Agencia (cita literal);
- la Resolución BOE-A-2025-3627 fija la fecha: «reunión constitutiva del 21 de febrero de 2025».

**4-169.** La explicación decía que la Secretaría General «solo aparece en el art. 10.2 c)». En la LPAC aparece también en el art. 9.2 c) y en las disposiciones adicionales sexta y octava. Ahora dice «En el art. 10, … solo aparece en el apartado 2 c)».

**4-160.** El texto oficial dice «vendrá acompañada». La cita queda corregida.

**Retiradas por repetición:**
- la 4-52 pregunta lo mismo que la 4-138 (registro y comunicación), y en parte que la 4-254;
- la 4-78 repite la 4-140 (dos meses);
- la 4-87 repite la 4-139 (declaración responsable).

Las parejas 9.2 c) / 10.2 c) (4-139 y 4-160, 4-140 y 4-161) no se cuentan como repetidas: una trata de la identificación y la otra de la firma.

### Tema 18, resto

**18-222.** Es literal del art. 89.4 (sin cambios desde 2015 en ese inciso). La cita del art. 14.1 RD 365/1995 de la explicación es exacta. No repite la 18-8 ni la 18-309.

**18-209 y 18-211.** Comprobé el art. 85.1 TREBEP, que ya no tiene la situación de «servicio en Comunidades Autónomas», y el art. 88.1 a 88.3, con las citas literales de los avisos. Los distractores nuevos son falsos según el RD y según el TREBEP.

## Cómo se ha comprobado

**Textos oficiales.** Los descargué yo con `curl` y reintentos (`…/scratchpad/rev-pend4/bin/bajar.sh`). No usé los del proponente.

| Norma | ID | Actualización |
|---|---|---|
| TREBEP | BOE-A-2015-11719 | 03/10/2026 |
| RD 365/1995 | BOE-A-1995-8730 | 04/03/2006 |
| Ley 30/1984 | BOE-A-1984-17387 | 31/10/2015 |
| Ley 22/1993 (art. 19) | BOE-A-1993-31153 | Publicación |
| Ley 13/1996 (art. 104) | BOE-A-1996-29117 | Publicación |
| LPAC | BOE-A-2015-10565 | 06/11/2024 |
| RD 829/2023 | BOE-A-2023-23537 | 29/12/2023 |
| RD 1118/2024 | BOE-A-2024-22929 | 12/06/2026 |
| Resolución de 21-feb-2025 | BOE-A-2025-3627 | — |
| TRLRHL | BOE-A-2004-4214 | 07/10/2026 |
| RD 500/1990 | BOE-A-1990-9664 | 27/04/1990 |
| RDL 20/2011 (DA 14.ª) | BOE-A-2011-20638 | 28/12/2012 |
| Ley 17/2012 (DF 31.ª) | BOE-A-2012-15651 | Publicación |
| LBRL | BOE-A-1985-5392 | 03/10/2026; art. 47 también en la versión de 22/04/1999 |
| Ley 7/1999 de Aragón | BOE-A-1999-10151 | 25/10/2022 |
| Ley 10/2017 (capitalidad) | BOE-A-2018-1683 | 15/01/2019 |
| RBEL | BOE-A-1986-17958 | — |
| LCSP | BOE-A-2017-12902 | 09/04/2026 |
| Decreto 347/2002 (RBASO), BOA | ELI `d/2002/11/19/347` | Versión de publicación |

**Apoyo para interpretar la DA 14.ª.** Usé la nota del Ministerio de Hacienda (hacienda.gob.es, DGCFEL, «Regimen endeudamiento 2012»). Solo sirve para confirmar cómo se lee la norma. No es fuente de ninguna cita de la explicación.

**Construcción.** `…/scratchpad/rev-pend4/bin/construir.js` parte de la propuesta, aplica los cambios con sustituciones exactas (fallan si el texto no está una sola vez) y añade el campo `revisor`.

**Validación.** `…/scratchpad/rev-pend4/bin/validar.js` comprueba en las 26 entradas:
- que el `q` es único y coincide;
- que hay 4 opciones distintas y la clave está dentro de rango;
- que ninguna opción remite a otras;
- que la explicación no nombra opciones por su letra;
- que el enunciado nuevo no repite otro del banco ni de `lotes/nuevas/*.json`;
- que todo fragmento entre «» del enunciado, de la explicación, de `cita` y de `motivo` aparece literalmente en los textos descargados;
- las longitudes de las opciones.

Pasan todas las citas. Quedan dos avisos, y los dos son falsos positivos, como en la propuesta:
- «la letra b)» de la 18-201 es la letra del art. 7.1, no una opción;
- «todas las Comunidades Autónomas» de la 4-160 no remite a otras opciones.

**Duplicados.** Busqué en todo el banco las materias tocadas: art. 89.4 (desde cuándo se cuenta la excedencia), art. 9.3 RBEL y dictamen previo, art. 177.5 y 36.3, gastos plurianuales, y todas las menciones a la Secretaría General de Administración Digital. No hay duplicados nuevos. Las once preguntas del banco que mencionan la Secretaría General quedan retiradas o con aviso: nueve en esta tanda y la 4-138 y la 4-159 desde la ronda 3.

## Hallazgos para el coordinador (no incluidos en el JSON)

**13-232 (art. 193.2 TRLRHL).** Es la misma cuestión que la 13-107 a la 13-109, y la propuesta no la recoge. La pregunta da como respuesta, sin aviso, que ante un remanente de tesorería negativo se puede concertar «una operación de crédito por su importe, en las condiciones del art. 177.5». La nota de Hacienda citada excluye expresamente estos «préstamos de legislatura» del régimen de la DA 14.ª. Basta un aviso en la explicación, como el de la 13-108. La clave es literal del 193.2 y no cambia. Propuesta de frase:

> Aviso: este régimen sigue escrito en el art. 193.2 TRLRHL, pero la disposición adicional decimocuarta del Real Decreto-ley 20/2011, en la redacción que le dio la Ley 17/2012 «con efectos de la entrada en vigor de esta Ley y vigencia indefinida», solo permite a las entidades locales concertar «nuevas operaciones de crédito a largo plazo para la financiación de inversiones»; por eso hoy no cabe sanear el remanente negativo con un préstamo a largo plazo por esta vía.

**18-235 y 18-238 (agrupación familiar, «mínima de dos años y máxima de quince»).** Coincido con el proponente: no están desplazadas.
- Ese límite sigue en el art. 29.3 d) de la Ley 30/1984 vigente. Lo comprobé en el consolidado: la Ley 13/1996 solo tocó la letra c).
- El art. 89.3 TREBEP no fija duración, pero tampoco la prohíbe.

**Los demás hallazgos del proponente** son razonables para una ronda de forma o de denominaciones: 18-195, las denominaciones orgánicas del RD 365/1995, la 10-58 y el art. 7.2 RD 365/1995. No los he revisado a fondo.
