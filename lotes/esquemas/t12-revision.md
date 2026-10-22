# Tema 12 · Revisión independiente

Esquema: `data/esquemas/aux-admin-zaragoza/t12.js` · Citas del redactor: `lotes/esquemas/t12-citas.md`

## Fuentes consultadas

- TRLRHL, Real Decreto Legislativo 2/2004, texto consolidado **BOE-A-2004-4214**, descargado por el
  revisor el 22-oct-2026 (`act.php?id=BOE-A-2004-4214`, pasado a texto plano). Última actualización:
  **publicada el 07/10/2026**. Ficha «Análisis» (`doc.php?id=BOE-A-2004-4214`) leída entera en sus
  referencias posteriores de 2024-2026.
- Redacciones anteriores del mismo consolidado: `&tn=1&p=20260321`, `&p=20260603` y `&p=20260930`, para
  ver el art. 72 antes del Real Decreto-ley 26/2026 y del 29/2026.
- Real Decreto-ley 29/2026, de 6 de octubre, **BOE-A-2026-20823** (BOE núm. 249, de 07/10/2026). Entrada
  en vigor: **08/10/2026**. Ficha sin ninguna referencia de derogación ni de convalidación a 22-oct-2026.
- Epígrafe: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, tema 12. Coincide literalmente.
- Alcance: `tools/fuentes.json` → `aux-admin-zaragoza` → `12`.
- Exámenes: tema 21 del banco (147 preguntas). Revisadas una a una todas las de haciendas locales.

## Punto 1 del encargo: qué está vigente hoy (22-oct-2026)

- **Art. 72 (IBI).** Nota del consolidado: «Se modifica, con efectos para los periodos impositivos que se
  inicien a partir del 8 de octubre de 2026, por el art. 8 del Real Decreto-ley 29/2026». El RDL 26/2026,
  de contenido igual, quedó sin efecto por la Resolución de 2 de octubre de 2026 (BOE-A-2026-20526).
  El 29/2026 está en vigor desde el 08/10/2026 y no consta derogado. El texto del consolidado ya es el
  nuevo: el 72.4 se queda con los tipos diferenciados por usos, el recargo por vivienda desocupada pasa
  al **72.4 bis** y se añade el recargo por alojamientos turísticos en el **72.4 ter**. Como el período
  impositivo del IBI es el año natural y el impuesto se devenga el 1 de enero (art. 75.1-2), el
  primer período al que se aplica es **2027**. **El 72.1, el 72.2 y el 72.3 no cambian**: 0,4 % / 1,10 %
  urbanos, 0,3 % / 0,90 % rústicos, 0,6 % y 0,4-1,3 % de características especiales.
- **Art. 107.4 (coeficientes máximos del IIVTNU).** Nota: «Se modifican los importes máximos de los
  coeficientes … con efectos desde el 1 de diciembre de 2026, por el art. 10 del Real Decreto-ley 29/2026».
  La tabla que muestra hoy el consolidado **todavía no está en vigor**. Las de los RDL 9/2024, 16/2025 y
  26/2026 quedaron sin efecto. El esquema no da coeficientes y está bien que no los dé. El 107.1
  (veinte años) no cambia.
- Otras modificaciones recientes del Título II que **no** afectan al esquema: arts. 74.5 y 103.2.b (RDL
  7/2026), arts. 20 y 24 (Ley 9/2025, que añade la letra v del 20.3 y un párrafo del 24.1.a, sobre zonas de
  bajas emisiones). He comprobado que las letras r) y s) del 20.4, el 20.5 y el 1,5 % del 24.1.c siguen
  igual.
- Lo único del esquema que dependía de la reforma del art. 72 era la nota de `examenes` sobre el 72.4.
  Decía que el recargo pasó al 72.4 bis «con otro contenido». No es exacto: fuera de las zonas tensionadas,
  el contenido es el mismo. Además, la nota no avisaba de que la clave oficial es dudosa (ver punto 4).
  La he reescrito (corrección 8).

## Punto 2: tabla de los cinco impuestos, celda a celda (20 celdas)

| Impuesto | Exigencia y naturaleza | Hecho imponible | Tipo o cuota |
|---|---|---|---|
| IBI | OK: arts. 59.1.a y 60 | OK: 61.1-2 | OK, pero el «máximo 1,10 %» se podía leer como tope absoluto: el 72.3 permite sumar puntos (corrección 4) |
| IAE | OK: 59.1.b y 78.1 | OK: 78.1 | Daba a entender que el coeficiente de situación es obligatorio, y es potestativo («podrán», 87.1) (corrección 5) |
| IVTM | OK: 59.1.c y 92.1 | OK: 92.1 | OK: 95.1 y 95.4 |
| ICIO | OK: 59.2 y 100.1 («tributo indirecto») | OK: 100.1, incluido «siempre que … corresponda al ayuntamiento de la imposición» | OK: 102.1 y 102.3 |
| IIVTNU | OK: 59.2 y 104.1 | OK: 104.1 | OK: 108.1 |

## Punto 4: marcas de examen

Revisé las 16 marcas que había en el esquema. Todas tienen su pregunta en el tema 21, con el año
correcto. Una de ellas se apoyaba en una clave dudosa y la he quitado:

- **1-jun-2025 P6** (21[5]). La marca `{{examen:2025}}` estaba justo en la frase «Sin tasa (21.1) **ni precio
  público (42)**: … limpieza de la vía pública». La plantilla da por buena la c), que incluye «podrán
  exigir precios públicos», y el art. 42 lo prohíbe. Es una de las cinco claves que el redactor dijo no
  haber marcado, pero sí la marcó. He quitado la marca y he puesto un aviso en `examenes` (correcciones
  6 y 7).

Hay **una clave dudosa más** que el redactor no detectó: **31-may-2026, segundo ejercicio, supuesto 2,
P15** (21[142], art. 72.4, párrafos tercero y cuarto). La plantilla da la d) («ninguna»). Pero el párrafo
tercero vigente el 31-may-2026 decía «los ayuntamientos podrán exigir un recargo de hasta el 50 por
ciento de la cuota líquida del impuesto», que es literalmente la opción a). No tenía marca en el cuerpo.
Solo tenía la nota de `examenes`, que he corregido.

Marcas que se quedan, comprobadas (prefijo, fecha y número):
1-jun-2025 P7 (31.1, ×2), P12 (72.1), P28 (129.3, ×2), reserva 1 (30.2.c);
31-may-2026 P14 (48 bis.1), P33 (107.1), P43 (20.4/21.1), P44 (20.5), reserva 1 (95.6.b),
segundo ejercicio, supuesto 2, P11 (61), P12 (62.4), P13 (65) y P16 (14.2.i).
Las otras claves dudosas del tema (1-jun-2025 reserva 4, sobre el 100.1, y 31-may-2026 segundo ejercicio,
supuesto 1, P5, sobre el art. 4) no tienen marca en el esquema. Correcto.

## Comprobaciones hechas: 358

- 183 citas del redactor buscadas como subcadena literal en el consolidado vigente: las 183 son literales.
- 175 comprobaciones del esquema contra la ley: epígrafe, fuentes y etiquetas (3), 5 ideas esenciales,
  23 entradas del mapa (comprobadas contra los rótulos de títulos, capítulos y secciones), 10 cifras,
  74 elementos de las secciones (con las enumeraciones de 2.1 [8], 21.1 [6], 23.2 [4], 129.1 [4]
  y 16.1), más 15 celdas de la tabla de impuestos contadas aparte (20 en total), 10 trampas, 13 notas de `examenes`, 16 marcas, y la vigencia de
  los arts. 20, 24, 72, 74, 103 y 107.

## Correcciones

| # | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|
| 1 | «Beneficios fiscales: solo los de <b>normas con rango de ley</b> o tratados. La ordenanza puede bonificar hasta el 5 %…» | «…o tratados, y los de las ordenanzas en los supuestos que prevea la ley. En particular, la ordenanza puede bonificar hasta el 5 %…» | El «solo» chocaba con la frase siguiente. La ley admite también los beneficios de las ordenanzas en los casos previstos por ley. | art. 9.1: «No obstante, también podrán reconocerse los beneficios fiscales que las entidades locales establezcan en sus ordenanzas fiscales en los supuestos expresamente previstos por la ley.» |
| 2 | Precios públicos: «Cobro por <b>vía de apremio</b>.» | «Puede exigirse por <b>vía de apremio</b>.» | Es una facultad («podrán»), no una obligación. | art. 46.3: «Las deudas por precios públicos podrán exigirse por el procedimiento administrativo de apremio.» |
| 3 | IAE: «exentos las personas físicas, las entidades… y quien inicia actividad» · IIVTNU: «no sujetos los terrenos rústicos ni…» | «exentos, entre otros, …» · «no sujetos, entre otros, …» | Las dos listas son parciales y no lo decían: faltan, por ejemplo, 82.1.a, d-h y 104.3-4. | art. 82.1: «Están exentos del impuesto: a) El Estado, las comunidades autónomas y las entidades locales…» · art. 104.3: «No se producirá la sujeción al impuesto en los supuestos de aportaciones de bienes y derechos realizadas por los cónyuges a la sociedad conyugal…» |
| 4 | Tabla, IBI: «máximo <b>1,10 %</b>.» | «máximo <b>1,10 %</b> (72.1; el 72.3 permite sumar algunos puntos).» | La columna dice «límites legales». El 1,10 % no es un tope absoluto. | art. 72.3: «Los ayuntamientos respectivos podrán incrementar los tipos fijados en el apartado 1 con los puntos porcentuales que para cada caso se indican…» |
| 5 | Tabla, IAE: «con coeficiente de ponderación (86) y de situación entre 0,4 y 3,8 (87).» | «…(86) y, si lo fija el ayuntamiento, de situación entre 0,4 y 3,8 (87).» | El de ponderación se aplica «en todo caso». El de situación es potestativo. | art. 86: «se aplicará, en todo caso, un coeficiente de ponderación» · art. 87.1: «los ayuntamientos podrán establecer una escala de coeficientes que pondere la situación física del local» |
| 6 | «…<b>limpieza de la vía pública</b> {{examen:2025}} y enseñanza obligatoria.» | Sin la marca. | La marca se apoyaba en la P6 de 2025, cuya clave da por correcto que caben precios públicos. La frase marcada dice lo contrario. | art. 42: «No podrán exigirse precios públicos por los servicios y actividades enumerados en el artículo 21 de esta ley.» |
| 7 | `examenes`: «Art. 21.1 (limpieza de la vía pública, sin tasa): examen oficial 1-jun-2025, pregunta 6.» | «Arts. 21.1 y 42 (limpieza de la vía pública): … pregunta 6. Ojo: la plantilla da por buena también la opción de que caben precios públicos, y el art. 42 lo prohíbe. Quédate con la ley.» | Aviso de clave contraria a la ley. | art. 21.1.e: «Limpieza de la vía pública.» · art. 42 (arriba). |
| 8 | `examenes`, 72.4: «…pregunta 15, con la redacción anterior. El Real Decreto-ley 29/2026 ha llevado el recargo al art. 72.4 bis con otro contenido.» | «…pregunta 15. Ojo: la plantilla da «ninguna es correcta», pero el párrafo tercero del art. 72.4 entonces vigente decía «hasta el 50 por ciento» (opción a). Desde el 08/10/2026 el recargo está en el art. 72.4 bis (Real Decreto-ley 29/2026), con efectos para los períodos impositivos que empiecen desde esa fecha: en el IBI, desde 2027.» | «Con otro contenido» era inexacto: fuera de zona tensionada, el 72.4 bis repite el antiguo párrafo. Además, faltaba avisar de la clave dudosa y de la fecha de efectos. | Redacción de 21/03/2026, art. 72.4, párrafo 3.º: «Tratándose de inmuebles de uso residencial que se encuentren desocupados con carácter permanente, los ayuntamientos podrán exigir un recargo de hasta el 50 por ciento de la cuota líquida del impuesto.» · Nota vigente del art. 72: «Se modifica, con efectos para los periodos impositivos que se inicien a partir del 8 de octubre de 2026, por el art. 8 del Real Decreto-ley 29/2026» · art. 75.2: «El período impositivo coincide con el año natural.» |

En total, **8 correcciones** (la 3 cambia dos frases).

`node tools/validar-esquemas.js aux-admin-zaragoza 12` → «Todo correcto».

## Lo que añadiría o quitaría pero no he tocado

- **Título III (recursos de las provincias, arts. 131-149).** El epígrafe dice «Recursos de las haciendas
  locales», y el examen de 1-jun-2025 preguntó dos veces por ese título: la P27, sobre lo que no incluye
  el Título III, y la P29, sobre el art. 147.2. `fuentes.json` lo deja fuera «por presupuesto de agentes».
  Recomiendo, como mínimo, una línea: las provincias no tienen impuestos propios ni prestación personal y
  de transporte (arts. 132 y ss.). No la añado porque el alcance fijado lo excluye.
- **Art. 14.2.a.** El esquema dice que la reposición «va antes» de la reclamación económico-administrativa.
  Es literal del TRLRHL. Pero en Zaragoza, municipio de gran población, la reposición previa a la
  Junta Municipal es potestativa (art. 137 LBRL; 31-may-2026, segundo ejercicio, supuesto 2, P18). Eso es
  del tema de la LBRL, no de estas fuentes, y por eso no lo toco. Convendría una remisión cruzada.
- **Reserva 1 de 2025 (art. 30.2.c).** La opción a) dice «titulares de derechos sobre los bienes» y la ley,
  «propietarios». La marca se queda, porque el punto marcado (las compañías de seguros) coincide con la
  ley.
- **Avisos en `examenes`** para las otras dos claves dudosas sin marca (reserva 4 de 2025, sobre el 100.1;
  segundo ejercicio de 2026, supuesto 1, P5, sobre el art. 4). Serían útiles, pero el esquema ya dice lo
  correcto en los dos puntos, así que no los añado.
- **Coeficientes del 107.4 y recargos del 72.4 bis/ter.** No los añadiría hasta que el RDL 29/2026 se
  convalide y sus efectos empiecen (01/12/2026 y 2027). Son materia que el Congreso ha derogado tres
  veces en dos años.
- **Letra v) del 20.3** (tasa por circular en zonas de bajas emisiones, Ley 9/2025). Es nueva y está en
  vigor desde el 05/12/2025. Puede preguntarse, pero no es un error que falte.

## Veredicto

**APTO.** 8 correcciones aplicadas. No queda nada sin resolver.
