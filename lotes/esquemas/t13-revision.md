# Tema 13 · Revisión independiente

Esquema: `data/esquemas/aux-admin-zaragoza/t13.js` · Citas del redactor: `lotes/esquemas/t13-citas.md`

## Fuentes consultadas

- TRLRHL, Real Decreto Legislativo 2/2004, consolidado **BOE-A-2004-4214**, descargado el 22-oct-2026.
  Última actualización: **publicada el 07/10/2026**. Ninguna modificación de 2024-2026 toca el Título VI.
  La última que afecta a los artículos usados es la del art. 212.3 y 5 (Ley 11/2020).
- RD 500/1990, **BOE-A-1990-9664**, descargado el 22-oct-2026. «Última actualización, publicada el
  27/04/1990». La ficha solo registra una **corrección de errores** (BOE núm. 136, de 7 de junio de 1990,
  BOE-A-1990-12791), ya integrada en los arts. 43.1.d y 60.1.
- Ley 10/2017, de capitalidad de Zaragoza, consolidado **BOE-A-2018-1683**, descargado el 22-oct-2026.
  «Última actualización publicada el 15/01/2019». Publicada en el «BOA» núm. 231, de 01/12/2017, y en el
  «BOE» núm. 35, de 08/02/2018.
- Epígrafe: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, tema 13. Coincide literalmente.
- Alcance: `tools/fuentes.json` → `aux-admin-zaragoza` → `13`, con el aviso «DIFERENCIAS REALES».
- Exámenes: tema 21 del banco (147 preguntas), revisadas todas las de presupuesto y de la Ley 10/2017.

## Punto 3 del encargo: art. 50 de la Ley 10/2017 frente a los arts. 168-169 TRLRHL

He comprobado fila a fila la tabla «Régimen general / Zaragoza» contra los textos:

| Fila | Resultado |
|---|---|
| Iniciativa | Diferencia real. Presidente (168.1 y 4) frente a Gobierno de Zaragoza (50.a; 14.1.b «La aprobación del proyecto de presupuesto»). OK. |
| Llegada al Pleno | **Parece diferencia y no lo es.** «antes del día 15 de octubre» (168.4) y «antes del día quince de octubre de cada año» (50.c). El esquema ya decía «igual». OK. |
| Exposición pública | Diferencia real en el objeto: el **proyecto** (50.b) frente al presupuesto «aprobado inicialmente» (169.1). También en el boletín: «el boletín oficial correspondiente» frente al de la provincia. **El plazo de 15 días es igual en los dos.** La tabla lo dice bien. OK. |
| Aprobación | Diferencia real: Pleno en acto único (48.3.d, por remisión del 50) y sin aprobación tácita, frente a la definitiva automática del 169.1. Marca 2026 P12 correcta. OK. |
| Fecha límite | **Parece diferencia y no lo es.** El esquema decía solo «El art. 50 no fija fecha». Así se puede leer que Zaragoza no tiene plazo. El art. 169.2 es básico y se aplica en todo el territorio (art. 1.1-2 TRLRHL). El propio aviso de `fuentes.json` dice que «la sigue fijando el art. 169.2». **Corregido (6).** |
| Enmiendas | Diferencia real (50.d-e). OK. |
| Vigor y prórroga | El 50.f «se enuncia sin el detalle del art. 169.6», pero no lo contradice. Puesto al lado del régimen general, invitaba a pensar que en Zaragoza no hay prórroga con créditos iniciales. **Corregido (7).** |

La lista de abajo («acuerdo único» del 168.5 frente a «acto único» del 48.3.d) es correcta y recoge la
trampa que señala el aviso. La nota del art. 49 (ordenanzas fiscales, con aprobación tácita) y la del 48.6
también coinciden con el texto.

## Punto 4: marcas de examen

Había 15 marcas. Las 15 tienen pregunta en el tema 21, con el año correcto. **Dos se apoyaban en claves
dudosas que el redactor no detectó.** Las he quitado y he puesto el aviso en `examenes`:

- **31-may-2026, segundo ejercicio, supuesto 1, P9** (21[136], art. 173.2). El enunciado dice que los tres
  inmuebles son «patrimoniales … no afectados a un uso o servicio público». La plantilla da la d): no se
  puede embargar. Pero eso es justo la excepción del 173.2, así que según la ley sí cabe (opción c). La
  marca estaba en la frase del 173.2 (correcciones 5 y 9).
- **1-jun-2025, segunda prueba, caso 1, P4** (21[58], arts. 169-170). La plantilla da la d): «las tres
  correctas». Pero la a) dice «**Solo** tendrán la condición de interesados los habitantes … y los que
  resulten directamente afectados», y omite el 170.1.c (colegios, cámaras, sindicatos, asociaciones). La
  marca estaba en la cifra «15 días» (correcciones 4 y 8). El dato de los 15 días es exacto. Lo que falla
  es la clave en su conjunto.

Las dos claves dudosas que señaló el redactor (2025, segunda prueba, P6, sobre el 171.2 «nivelación
presupuestaria», y P7, sobre el 177.1: sin crédito procede crédito extraordinario) **no** tienen marca.
El esquema dice lo correcto en los dos puntos (sección de recursos y trampa 5). Correcto.

Marcas que se quedan, comprobadas (prefijo, fecha y número): 1-jun-2025, segunda prueba, caso 1, P1
(164.1, ×1), P2 (166.1.a, ×2), P3 (167.3.b), P5 (169.6, ×2), P8 (RD 56), P9 (RD 67, ×2) y P10 (188);
31-may-2026 P12 (arts. 11, 14 y 50, ×2) y P37 (art. 49). Las 11 notas de `examenes` tienen bien la fecha
y el número.

## Comprobaciones hechas: 371

- 180 citas del redactor buscadas como subcadena literal en los tres textos descargados: las 180 son
  literales.
- 191 comprobaciones del esquema: epígrafe, fuentes y etiquetas (3), 5 ideas esenciales, 42 entradas
  del mapa (contra los rótulos de secciones y capítulos de las tres normas), 10 cifras, 83 elementos
  de las secciones (14 celdas más de la tabla de Zaragoza contadas aparte, con las enumeraciones de
  164.1 [3], 166.1 [4], 168.1 [7], 170.1 [3], 170.2 [3], 181 [5], 182.1 [4], RD 30.1 [3], RD 67.1 [2] y RD 93.2
  [4]), 10 trampas, 11 notas de `examenes` y 13 marcas que quedan (las 2 quitadas, contadas en el punto 4).

## Correcciones

| # | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|
| 1 | Cabecera y `fuentes`: RD 500/1990 «(sin modificaciones)» / «(sin modificaciones desde su publicación).» | «(sin modificaciones; una corrección de errores de 1990)» / «(…; solo una corrección de errores, BOE núm. 136, de 7 de junio de 1990).» | La ficha del BOE registra una corrección de errores. El consolidado la integra en dos artículos. | Ficha BOE-A-1990-9664: «CORRECCIÓN de errores en BOE núm. 136, de 7 de junio de 1990 (Ref. BOE-A-1990-12791).» · art. 60: «Redactado el apartado 1 conforme a la corrección de errores publicada en BOE núm. 136, de 7 de junio de 1990.» |
| 2 | Mapa: «Ley 10/2017 · Cap. V Especialidades procedimentales» | «Ley 10/2017 · Cap. V Especialidades en materia procedimental (extracto; el cap. llega al art. 51)» | El rótulo oficial es otro y el capítulo tiene un cuarto artículo (51, formas de gestión), que queda fuera del epígrafe. | Ley 10/2017: «CAPÍTULO V · Especialidades en materia procedimental» · «Artículo 51. Formas de gestión de los servicios públicos.» |
| 3 | Sección Zaragoza, `a`: «Ley 10/2017, arts. 11.1.h, 14.1.b, 48 y 50» | «Ley 10/2017, arts. 11.1.h, 14.1.b y 48 a 50» | La sección también usa el art. 49 (ordenanzas fiscales). | art. 49: «Las ordenanzas fiscales se tramitarán conforme al procedimiento regulado en el artículo anterior…» |
| 4 | Cifra: «Exposición al público tras la aprobación inicial (hábiles, según el RD 500/1990) {{examen:2025}}» | Sin la marca. | Se apoyaba en la P4 de la segunda prueba de 2025, cuya clave («las tres correctas») incluye una opción contraria al 170.1. | art. 170.1.c: «Los colegios oficiales, cámaras oficiales, sindicatos, asociaciones y demás entidades legalmente constituidas para velar por intereses profesionales o económicos y vecinales, cuando actúen en defensa de los que les son propios.» |
| 5 | Lista de créditos, 173.2: `examen: '2026'` | Sin la marca. | Se apoyaba en la P9 del segundo ejercicio de 2026 (supuesto 1), cuya clave niega el embargo justo en el caso que la ley exceptúa. | art. 173.2: «…excepto cuando se trate de bienes patrimoniales no afectados a un uso o servicio público.» |
| 6 | Tabla Zaragoza, «Fecha límite»: «El art. 50 no fija fecha» | «El art. 50 no fija fecha, pero rige igual el <b>31 de diciembre</b> del 169.2 TRLRHL, que es básico y se aplica en todo el territorio (art. 1 TRLRHL). No es una diferencia» | Como estaba, se leía como una diferencia de régimen que no existe. | art. 169.2: «La aprobación definitiva del presupuesto general por el Pleno de la corporación habrá de realizarse antes del día 31 de diciembre del año anterior al del ejercicio en que deba aplicarse.» · art. 1.1: «Tienen la consideración de bases del régimen jurídico financiero de la Administración local … los preceptos contenidos en esta ley» · art. 1.2: «Esta ley se aplicará en todo el territorio nacional…» |
| 7 | Tabla Zaragoza, «Vigor y prórroga»: «Vigor tras su publicación oficial; prórroga automática del anterior (50.f)» | «…(50.f). El art. 50 no da el detalle, pero rige el 169.6 TRLRHL (créditos iniciales). No es una diferencia» | El mismo problema que en la 6: el 50.f calla, no excluye. | art. 50.f: «Si el presupuesto correspondiente no hubiera entrado en vigor una vez iniciado el ejercicio económico, se considerará automáticamente prorrogado el del ejercicio anterior.» · art. 169.6: «…se considerará automáticamente prorrogado el del anterior, con sus créditos iniciales…» |
| 8 | `examenes`: «Art. 169.1 (exposición de 15 días): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 4.» | «Arts. 169.1 y 170 (exposición de 15 días y reclamaciones): … pregunta 4. Ojo: la plantilla da por correctas las tres opciones, pero la a) («solo» habitantes y directamente afectados) omite a los colegios, cámaras, sindicatos y asociaciones del art. 170.1.c. El dato de los 15 días sí es exacto.» | La pregunta es de los arts. 169 y 170, y su clave es dudosa. | art. 170.1.c (arriba). · art. 169.1: «por 15 días». |
| 9 | `examenes`: «Art. 173.2 (inembargabilidad): examen oficial 31-may-2026, segundo ejercicio, supuesto 1, pregunta 9.» | «… pregunta 9. Ojo: la plantilla da que no cabe embargo, pero los tres inmuebles del enunciado son patrimoniales no afectados a un uso o servicio público, que es justo la excepción del art. 173.2. Quédate con la ley.» | Aviso de clave contraria a la ley. | art. 173.2 (arriba). |

`node tools/validar-esquemas.js aux-admin-zaragoza 13` → «Todo correcto».

## Lo que añadiría o quitaría pero no he tocado

- **«Documentos contables»**, que está literalmente en el epígrafe. El esquema solo da la retención de
  crédito y la certificación (RD 31-32), las relaciones de órdenes de pago (RD 66) y la acumulación de
  fases (RD 67). Los documentos con sus siglas (RC, A, D, AD, ADO, O, P…) están en la Instrucción del
  modelo normal de contabilidad local (Orden HAP/1781/2013). Esa norma no está en `fuentes.json` y no la
  he descargado. Recomiendo añadirla como fuente y completar este punto en otra ronda.
- **Aprobación tácita en Zaragoza.** Mantengo «sin aprobación tácita», como dicen el aviso de
  `fuentes.json` y la clave de 2026 P12. Encaja con el texto: el 169.1 opera sobre un presupuesto
  «aprobado inicialmente» por el Pleno, y en Zaragoza ese acto no existe (el Gobierno aprueba el proyecto
  y el Pleno aprueba en acto único). Lo distingo de las correcciones 6 y 7, donde la norma básica
  completa al art. 50 sin chocar con su procedimiento.
- **Art. 127.1.b LBRL** (la Junta de Gobierno aprueba el proyecto en los municipios de gran población;
  1-jun-2025 P43). Es la norma básica que está detrás del art. 14.1.b de la Ley 10/2017. Una remisión
  ayudaría, pero es del tema de organización.
- **Opción a) de 2026 P12** («aprobación inicial del Gobierno de Zaragoza»). Conviene recordar que el
  Gobierno no aprueba «inicialmente»: aprueba el proyecto. El esquema ya lo dice así.

## Veredicto

**APTO.** 9 correcciones aplicadas. No queda nada sin resolver.
