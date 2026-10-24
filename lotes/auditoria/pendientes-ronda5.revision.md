# Revisión independiente de `pendientes-ronda5.json`

Banco: `aux-admin-zaragoza`. Fecha: 24-oct-2026. Revisor: Claude, sin relación con el agente que hizo la propuesta. No se ha modificado ningún archivo de `data/` ni se ha hecho commit.

Resultado: **38 aprobadas, 0 rechazadas**.
- **25 retiradas confirmadas.** 21 son duplicados comprobados uno a uno contra la pregunta que se conserva. Las otras 4 no son duplicados puros:
  - 14-76: errónea; corregida sería la 14-347;
  - 14-236: fuera del epígrafe;
  - 18-195: supuesto sin aplicación;
  - 10-58: doctrinal.
- **13 correcciones**, 6 sin cambios y 7 con cambios:
  - sin cambios: 14-73, 14-250, 13-232, 4-131, 18-257 y 14-75 (esta, salvo el resumen);
  - con cambios: 14-26, 14-80, 18-198, 18-200, 18-213, 18-215 y 18-239. Ningún cambio toca enunciados, opciones ni claves.
- **Retoques en tres resúmenes de retiradas** (4-52, 6-65 y 6-76), que exageraban el parecido («el mismo enunciado», «la misma clave»).

Las 38 están en `lotes/auditoria/pendientes-ronda5.revisado.json`, en el mismo orden y formato, con un campo `revisor` en cada una. `node tools/aplicar-cambios.js lotes/auditoria/pendientes-ronda5.revisado.json --tipo correccion --titulo prueba --simular` localiza y aplica las 38 sin error (banco de HEAD 96df0ca).

Nota: mientras trabajaba, la sesión principal incluyó una versión intermedia de `pendientes-ronda5.revisado.json` en el commit 96df0ca («Integra lote t05-2…»). La versión buena es la del árbol de trabajo. Respecto a la del commit, solo cambian las notas `revisor`: las citas de la propia propuesta van ahora entre comillas inglesas, y está corregida la frase sobre el art. 87.4 TREBEP de la 18-195. Los campos que se aplican al banco son iguales en las dos versiones.

## Veredictos

| Tema-índice | Acción | Veredicto | Nota |
|---|---|---|---|
| 14-75 | enunciado | Aprobada (retoque en el resumen) | Art. 133 e) literal; distractores falsos; no repite la 14-143 ni la 14-346 |
| 14-76 | retirar | Aprobada | El art. 134 no dice esa dependencia; corregida sería la 14-347 |
| 14-26 | enunciado | **Aprobada con cambios** | Art. 123.1 c) y art. 11.1 c) 6.ª Ley 10/2017 literales; «el art. 130 solo enumera» era inexacto |
| 14-80 | enunciado | **Aprobada con cambios** | Art. 122.4 b) literal; letras «a) b) c)» de la explicación pasan a «(letra a)…» |
| 14-73 | enunciado | Aprobada | Art. 130.1 B) b) literal; no repite la 14-141 ni la 21-106 |
| 14-250 | explicación | Aprobada | Art. 17.4 LBRL (vigente) y arts. 84 y 86.2 RPDT (RD 141/2024) literales |
| 14-74 | retirar | Aprobada | Duplicado de la 14-314, que enseña más y con la redacción vigente |
| 14-55 | retirar | Aprobada | Duplicado de la 14-110; explicación con el art. 17.1 anterior al RDL 6/2023 |
| 14-111 | retirar | Aprobada | Duplicado de la 14-110 (mismas opciones y clave) |
| 14-112 | retirar | Aprobada | Ídem |
| 14-113 | retirar | Aprobada | Ídem |
| 14-114 | retirar | Aprobada | Ídem (gestión: párrafo 3.º del 17.1; la excepción está en la 14-248) |
| 14-236 | retirar | Aprobada | Por alcance: financiación transitoria, fuera del epígrafe del tema 14 |
| 13-232 | respuesta | Aprobada | Arts. 193.2-3 TRLRHL y DA 14.ª RDL 20/2011 comprobados; aviso coherente con 13-107 a 13-109 |
| 18-195 | retirar | Aprobada | Servicio militar suspendido; no está en el art. 87.1 TREBEP (regla 10) |
| 18-198 | explicación | **Aprobada con cambios** | Fuera «no se ha actualizado» (el RD se modificó en 2006) |
| 18-200 | explicación | **Aprobada con cambios** | Ídem |
| 18-213 | respuesta | **Aprobada con cambios** | Ídem; distractores nuevos falsos según los arts. 12.2 y 18.1 y el art. 90 TREBEP |
| 18-215 | explicación | **Aprobada con cambios** | Ídem |
| 18-239 | explicación | **Aprobada con cambios** | Ídem |
| 18-257 | explicación | Aprobada | Derogaciones de la LORU y la LOU y art. 50.1 LOSU comprobados |
| 10-58 | retirar | Aprobada | Doctrinal («según la práctica administrativa»); lo literal está en 10-228, 10-246, 10-260, 10-115 y 10-249 |
| 4-77 | retirar | Aprobada | Su clave suma la 4-138 y la 4-139 |
| 4-52 | retirar | Aprobada (retoque en el resumen) | Casi idéntica a la 4-141 |
| 4-142 | retirar | Aprobada | La regla de la 4-141, preguntada como sí/no |
| 4-50 | retirar | Aprobada | Duplicado de la 4-131 (y la 4-132 para la Lista de confianza) |
| 4-51 | retirar | Aprobada | Duplicado de la 4-134 |
| 4-133 | retirar | Aprobada | Duplicado de la 4-134 |
| 4-131 | respuesta | Aprobada | Clave abreviada fiel al 9.2 a); explicación exacta con la letra c) vigente |
| 6-69 | retirar | Aprobada | Duplicado de la 6-197 y la 6-198 |
| 6-87 | retirar | Aprobada | Ídem |
| 6-65 | retirar | Aprobada (retoque en el resumen) | Casi idéntica a la 6-193 |
| 6-107 | retirar | Aprobada | Paráfrasis de la 6-193, la 6-194 y la 6-280 |
| 6-76 | retirar | Aprobada (retoque en el resumen) | Misma respuesta que la 6-213 |
| 6-78 | retirar | Aprobada | Misma respuesta que la 6-214 |
| 8-169 | retirar | Aprobada | Duplicado de la 8-37 |
| 8-170 | retirar | Aprobada | Duplicado de la 8-38 |
| 8-89 | retirar | Aprobada | Duplicado de la 8-172 |

Índice = posición en `data.questions[tema]` en el banco de hoy, antes de aplicar la tanda. Los 38 `q` coinciden exactamente con una sola pregunta de su tema. Ninguna es del tema 21 (examen oficial).

## Retiradas por duplicado: comparación

Para cada retirada puse una al lado de otra la pregunta retirada y la que se conserva (enunciado, cuatro opciones, clave y explicación). En todas, la conservada pregunta la misma regla y da la misma respuesta, o la incluye en su enunciado. Así, quien la estudia aprende lo mismo.

### Tema 14

**Padrón (14-55, 14-111 a 14-114 frente a la 14-110).**
- Las 14-111 a 14-114 tienen las mismas cuatro opciones que la 14-110, en otro orden, y la misma clave («Al Ayuntamiento respectivo»). Solo cambia el verbo.
- La formación, el mantenimiento, la revisión y la custodia están en una sola frase del art. 17.1, y la explicación de la 14-110 la cita entera.
- La «gestión» (14-114) está en el párrafo tercero («se llevará por los Ayuntamientos con medios informáticos»). La respuesta es la misma, y la excepción de ese párrafo (gestión informatizada por las Diputaciones) ya la pregunta la 14-248.
- La 14-55 da la misma respuesta, con una clave no literal, y su explicación cita el art. 17.1 en la redacción anterior al RDL 6/2023 (ministerios de Economía y Hacienda y de Administraciones Públicas). Comprobé en el consolidado (20/12/2023) que el art. 17.1 vigente dice «de acuerdo con lo que establezca la legislación del Estado».

**14-74 frente a la 14-314.** El enunciado de la 14-314 da entero el art. 130.3 (funcionarios de carrera del Estado, de las CCAA, de las EELL o con habilitación nacional, salvo que el Reglamento Orgánico permita otra cosa) y pregunta además el subgrupo A1. La 14-74 omitía el A1 (Ley 27/2013) y su explicación daba la redacción de 2003.

**14-76 (no es un duplicado; tiene un error).** El art. 134.1 remite al «órgano u órganos que se determinen en el Reglamento orgánico municipal». No hay dependencia legal de la Junta de Gobierno. Corregida sería la 14-347, que tiene esa clave literal; el apartado 2 lo pregunta la 14-144.

### Tema 4 (art. 9.2 LPAC, consolidado de 06/11/2024)

**4-77.** Su clave («Acudir a la vía jurisdiccional, previo informe vinculante de la Secretaría de Estado de Seguridad») es la suma de dos preguntas:
- la 4-138: quién puede acudir a la vía jurisdiccional durante los dos meses;
- la 4-139: de quién es el informe vinculante.

**Último párrafo del 9.2.**
- La 4-52 tiene un enunciado casi idéntico al de la 4-141 y la misma respuesta.
- La 4-142 pregunta como sí/no si admitir la letra c) exime de las letras a) y b).

**Letra a).** La 4-50 y la 4-131 preguntan lo mismo: certificados cualificados de firma electrónica. La «Lista de confianza», que la clave de la 4-50 incluía, la pregunta la 4-132.

**Letra b).** La 4-51, la 4-133 y la 4-134 dan la misma respuesta: certificados cualificados de sello electrónico.

### Tema 6 (LPAC)

- **6-69 y 6-87 frente a la 6-197 y la 6-198 (art. 49.1).** La 6-69 da la misma regla con la misma respuesta. La 6-87 la pregunta como criterio («depende de si son independientes»).
- **6-65 y 6-107 frente a la 6-193 (art. 48.3).** La 6-65 tiene un enunciado casi idéntico. La 6-107 es una paráfrasis («Sólo si el término es esencial»). La 6-194 y la 6-280 cubren además la regla.
- **6-76 frente a la 6-213, y 6-78 frente a la 6-214 (art. 52.1).** Misma respuesta: se convalidan los actos anulables, y un acto nulo no se convalida.

### Tema 8 (art. 119 LPAC)

- **8-169 frente a la 8-37.** La 8-37 cita en el enunciado el art. 119.1 entero y pregunta el pronunciamiento que falta.
- **8-170 frente a la 8-38.** Misma respuesta: la retroacción. La explicación de la 8-38 recoge la convalidación del art. 52.
- **8-89 frente a la 8-172.** El enunciado de la 8-172 parte de que el órgano decide cuestiones no alegadas y pregunta el mismo requisito: oír previamente a los interesados.

En cada pareja, la de peor forma (clave delatada por la longitud o distractores absurdos) es la que se retira.

### Retiradas que no son duplicados

- **14-236 (DT 3.ª.1 Ley 10/2017).** La pregunta es correcta («ocho millones de euros», comprobado). Pero el epígrafe del tema 14 solo incluye de la ley de capitalidad las «disposiciones generales y especialidades en materia de organización», y la financiación no entra en ningún epígrafe. Se aplica el mismo criterio que la reserva del 21-ago.
- **18-195 (art. 4 k) RD 365/1995, servicio militar).** Se aplica la regla 10. Lo comprobé en tres textos:
  - LO 5/2005, disposición derogatoria única 1 b): deroga la LO 13/1991 del Servicio Militar;
  - preámbulo de la Ley 39/2007: la Ley 17/1999 «supuso la suspensión del servicio militar obligatorio»;
  - TREBEP (consolidado de 03/10/2026): el art. 87.1 no recoge el supuesto (solo el de reservistas voluntarios activados, letra l), y el 87.4 remite a los supuestos del Estatuto y de las leyes de función pública.

  Los demás supuestos del art. 4 siguen en el banco.
- **10-58.** Se pregunta «según la práctica administrativa», sin precepto, y la clave (214 caracteres frente a 56-87) se acierta por la longitud. Lo que tiene de literal ya lo preguntan cinco preguntas: 10-228 (art. 9.3 RBEL), 10-246 (art. 32.1), 10-260 (art. 53), 10-115 y 10-249 (art. 36.2).

## Correcciones

### Tema 14

**14-75 (art. 133 e).**
- **Clave.** Comprobé las ocho letras del art. 133. La clave anterior («Programación, con proyección plurianual…») no está en el artículo. La nueva es literal de la letra e).
- **Distractores.** La publicación mensual de la ejecución, la aprobación trimestral del presupuesto y la gestión directa de todos los servicios no figuran en el art. 133.
- **Duplicados.** No hay otra pregunta del banco ni de `lotes/nuevas` sobre la letra e).
- **Retoque.** El resumen entrecomillaba «programación con proyección plurianual» como si fuera literal. Ahora se entrecomilla solo «con proyección plurianual».

**14-26 (art. 123.1 c).**
- **Texto comprobado.** La cita del art. 123.1 c) LBRL es literal, y el art. 11.1 c) 6.ª Ley 10/2017 dice «dependientes directamente de los miembros del Gobierno de Zaragoza». Vale en Zaragoza, y la explicación lo avisa (regla 9).
- **Distractores.** Son falsos: los coordinadores coordinan a los directores generales, y el secretario general del Pleno y el titular de la asesoría jurídica son órganos directivos (art. 130.1 B d y e). No se usa al Alcalde como distractor, y está bien así.
- **Retoque.** «El art. 130 LBRL solo enumera los órganos superiores y directivos» era inexacto, porque los apartados 3 y 4 regulan el nombramiento y las incompatibilidades. Ahora dice: «El art. 130 LBRL enumera los órganos superiores y directivos, pero no dice de quién dependen los coordinadores generales».

**14-80 (art. 122.4 b).**
- **Clave.** Es literal. La clave antigua era la fórmula del art. 20.1 c), que comprobé.
- **Zaragoza.** El art. 10.4 c) Ley 10/2017 dice lo mismo que el 122.4 b). La letra b) del art. 10.4 (dictamen de ordenanzas y Reglamentos) no se usa como distractor.
- **Distractores.** Son falsos según los arts. 136.1, 126.2 y 123.1 c). Ninguno es una materia delegable en las comisiones (art. 123.3 LBRL; art. 11.3 Ley 10/2017), de modo que no pueden ser ciertos por la vía de la letra c).
- **Retoque.** La explicación enumeraba las funciones como «a) «…»; b) «…»; y c) …». En la app, que muestra las opciones con letras, eso puede leerse como una referencia a las opciones (regla 3). Ahora dice «(letra a)», «(letra b)» y «(letra c)».

**14-73 (art. 130.1 B b).**
- La cita es literal.
- Los distractores (distritos, comisiones del Pleno, sociedades mercantiles) son falsos; se evita bien «organismos autónomos», por el art. 130.2.
- No repite la 14-141 ni la 21-106: estas preguntan qué órgano es directivo; esta, el ámbito de los directores generales.

**14-250 (art. 17.4).**
- El art. 17.4 vigente, aun después del RDL 6/2023, sigue diciendo «Ministerio de Economía y Hacienda», así que el enunciado es literal.
- El art. 84 RPDT (RD 141/2024, en vigor el 08/02/2024) y el art. 86.2 son literales.
- El RD 829/2023 (art. 16; consolidado de 29/12/2023, no derogado) mantiene el Ministerio de Economía, Comercio y Empresa.

### Tema 13: 13-232

- Los arts. 193.2 y 193.3 TRLRHL (consolidado de 07/10/2026) se citan literalmente.
- La DA 14.ª RDL 20/2011 (consolidado de 28/12/2012) y la DF 31.ª Ley 17/2012 («Con efectos de la entrada en vigor de esta Ley y vigencia indefinida») están comprobadas, con todas sus condiciones: ahorro neto positivo, 75 por ciento y autorización hasta el art. 53.
- El aviso es el que propuso el revisor de la ronda 4 y coincide con el de las 13-107 a 13-109. No dice que el 193.2 esté derogado: dice que hoy no cabe usarlo «por esta vía».
- La clave abreviada no cambia el sentido, y los distractores son falsos según el art. 193.

### Tema 18 (RD 365/1995, consolidado de 04/03/2006)

**Citas.** Las de los arts. 5, 6.2, 12.1, 12.4 y 18.3 y la de la DA 4.ª son literales. Los arts. 2, 22.2 y 22.3 c) RD 829/2023 también.

**Retoque común (18-198, 18-200, 18-213, 18-215 y 18-239).** El aviso decía que el Reglamento «no se ha actualizado». No es exacto: el RD 255/2006 modificó su art. 15. Ahora dice solo que «conserva denominaciones de órganos que ya no existen».

**18-213.**
- La clave nueva es fiel al art. 12.1.
- Los distractores son falsos:
  - agotar el año lleva a la excedencia forzosa (art. 12.2);
  - quien está en las dos primeras fases puede pedir la excedencia voluntaria incentivada (art. 18.1);
  - la suspensión firme es la situación del art. 90 TREBEP.
- Longitudes de 78 a 90.

**18-257.** Comprobé tres puntos:
- la LO 6/2001 deroga la LO 11/1983 (disposición derogatoria única 1);
- la LO 2/2023 deroga la LO 6/2001, con efectos de 12/04/2023;
- los dos fragmentos citados del art. 50.1 LOSU son literales.

El aviso no afirma más de lo que dice la ley.

### Tema 4: 4-131

- La clave abreviada es fiel al art. 9.2 a).
- Los distractores son falsos. El de sello electrónico es la letra b).
- La explicación es exacta con la letra c) vigente, en la redacción de la Ley 11/2022: «Cualquier otro sistema que las Administraciones públicas consideren válido…».

### Longitudes (regla 7 bis)

En las siete entradas que cambian opciones, la clave no es la más larga en ninguna. Queda entre 0,80 y 0,97 veces el distractor más largo. Posiciones de la correcta: 1, 2, 0, 3, 0, 2 y 1.

## Cómo se ha comprobado

**Textos oficiales.** Los descargué yo con `curl` y reintentos (`…/scratchpad/rev-pend5/bin/bajar.sh`). No usé los del proponente.

| Norma | ID | Actualización |
|---|---|---|
| LBRL | BOE-A-1985-5392 | 03/10/2026 (art. 17: 20/12/2023) |
| Ley 10/2017 (capitalidad) | BOE-A-2018-1683 | 15/01/2019 |
| RPDT (RD 1690/1986) | BOE-A-1986-21944 | 07/02/2024 |
| TRLRHL | BOE-A-2004-4214 | 07/10/2026 |
| RDL 20/2011 (DA 14.ª) | BOE-A-2011-20638 | 28/12/2012 |
| Ley 17/2012 (DF 31.ª) | BOE-A-2012-15651 | 20/10/2022 |
| TREBEP | BOE-A-2015-11719 | 03/10/2026 |
| RD 829/2023 | BOE-A-2023-23537 | 29/12/2023 |
| LPAC | BOE-A-2015-10565 | 06/11/2024 |
| RD 365/1995 | BOE-A-1995-8730 | 04/03/2006 |
| Ley 39/2007 (carrera militar) | BOE-A-2007-19880 | 09/11/2024 |
| LO 5/2005 (Defensa Nacional) | BOE-A-2005-18933 | 18/11/2005 |
| LO 2/2023 (LOSU) | BOE-A-2023-7500 | 02/08/2024 |
| LO 6/2001 (LOU) | BOE-A-2001-24515 | 23/03/2023 (derogada) |
| RBEL | BOE-A-1986-17958 | 07/07/1986 |

Epígrafe: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`.

**Construcción.** `…/scratchpad/rev-pend5/bin/construir.js` parte de la propuesta y aplica los cambios con sustituciones exactas, que fallan si el texto no está una sola vez. Luego añade el campo `revisor`, cuyas notas están en `bin/notas.py`.

**Validación.**
- `bin/citas.js` comprueba que todo fragmento entre «» del enunciado, de la explicación, de `cita`, de `motivo`, de `resumen` y de `revisor` aparece literalmente en los textos descargados, en el epígrafe o en el banco (normalizando espacios y comillas). Lo probé con citas alteradas a propósito, y las detecta. Resultado: 0 fallos.
- `bin/validar.js` comprueba cinco cosas:
  - que cada `q` es único y está en su tema, y que ninguno es del tema 21;
  - que hay 4 opciones distintas y ninguna remite a otras;
  - que la clave no es la más larga;
  - que ninguna explicación nombra opciones por su letra;
  - que ningún enunciado nuevo repite otro del banco ni de `lotes/nuevas/*.json`.

  Resultado: 0 avisos.

**Duplicados de las preguntas nuevas.** Busqué en los temas 14, 16 y 21 y en `lotes/nuevas`: «coordinador», «seguimiento de la gestión», «equipo de gobierno», «culmin», «coste» y «comisiones del Pleno». La única pregunta cercana es la 16-314 (art. 10.4 b, dictamen de normas), que pregunta otra cosa.

## Hallazgos para el coordinador (no incluidos en el JSON)

- **18-239.** El distractor «La Comisión Superior de Personal» no lleva la preposición «A» que tienen las otras tres opciones. Es un detalle de forma.
- **14-110.** Conviene añadir a su explicación el párrafo tercero del art. 17.1 («La gestión del Padrón municipal se llevará por los Ayuntamientos con medios informáticos»). Así recoge también lo que enseñaba la 14-114 al retirarse. No es imprescindible.
- **Hallazgos de forma del proponente.** Los que señala para otra ronda (14-16, 14-17, 14-25, 14-27, 14-107, 4-130, y las 6-191, 6-199, 6-218, 6-226 y 6-228) son razonables. No los he revisado a fondo.
