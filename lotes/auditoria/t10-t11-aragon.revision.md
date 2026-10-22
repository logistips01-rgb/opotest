# Revisión independiente: temas 10 y 11 frente a la normativa aragonesa

Revisa la propuesta `t10-t11-aragon.json` (60 entradas) y su informe `t10-t11-aragon.md`.
Fecha: 22-oct-2026. No se ha modificado ningún archivo de datos ni se ha hecho commit.

Entrega: `t10-t11-aragon.revisado.json`, con las 60 entradas aprobadas, 33 de ellas con cambios. Cada entrada lleva `resumen` y `revisor`.
- Se ha probado con `node tools/aplicar-cambios.js … --simular`: localiza las 60 preguntas y no da ningún error.
- Todas las citas entre comillas latinas de las `exp` y `cita` nuevas se han cotejado automáticamente con los textos descargados y aparecen literalmente. La única excepción es «autorecuperación», que es el término de la pregunta, no una cita.

## Recuento

| Acción final | Entradas |
|---|---|
| `explicacion` (la clave no cambia) | 26 |
| `enunciado` (se corrige el enunciado; la clave no cambia) | 3 |
| `respuesta` (cambia la clave, el texto de una opción o, en las recuperadas, la norma del enunciado) | 12 |
| `retirar` | 19 |
| **Total aprobadas** | **60**: 27 tal cual y 33 con cambios |

Cambios sobre la propuesta:
- **8 de las 27 retiradas se conservan.**
  - Por mandato, las 5 de los índices 27 a 31.
  - Las de los índices 17 y 47, que se arreglan solo cambiando la norma citada.
  - La del índice 189 (concesión demanial: 50 años en Aragón), que se arregla cambiando la norma y eligiendo como clave una opción que ya existía.
- **3 explicaciones pasan a corregir también el enunciado**: índices 32, 33 y 67.

## Hallazgo principal: la Ley 10/2017 (régimen especial de Zaragoza)

La propuesta no tuvo en cuenta la Ley 10/2017, de 30 de noviembre, de régimen especial del municipio de Zaragoza como capital de Aragón (BOE-A-2018-1683). Esa ley cambia quién decide sobre los bienes en Zaragoza:

- **Art. 14.1.g).** Corresponden al Gobierno de Zaragoza, que es la Junta de Gobierno Local (DA 2.ª):
  - «Las competencias ejecutivas y de gestión, en todos sus aspectos, relativas a la adquisición, gestión, administración, aprovechamiento y enajenación del patrimonio municipal y concesiones sobre los bienes»;
  - «los acuerdos relativos a la aceptación de bienes, alteración de la calificación jurídica de los bienes, mutaciones demaniales, desafectación de bienes comunales, aprobación del inventario y sus rectificaciones anuales».
- **Art. 11.2.** «Con carácter general los acuerdos se adoptarán por mayoría simple de votos. Se requerirá el voto favorable de la mayoría absoluta del número legal de miembros del Pleno, para la adopción de los acuerdos establecidos en la legislación básica».
- **DA 1.ª.**
  - Apartado 1: «En caso de contradicción entre los preceptos de esta Ley y las Leyes sectoriales autonómicas, prevalece lo regulado en la presente norma».
  - Apartado 4: las competencias que la legislación autonómica atribuya a los órganos del Ayuntamiento «se ejercerán conforme a la distribución de competencias prevista en esta Ley».
- **Art. 12.1.g) y 12.2.** El Alcalde dicta bandos, competencia que no puede delegar. **Art. 51**: procedimiento propio para el ejercicio de actividades económicas y las formas de gestión.

Por eso varias explicaciones propuestas eran incorrectas o dudosas para Zaragoza. Afirmaban que la alteración de la calificación jurídica, la desafectación de comunales, la enajenación, el deslinde, la investigación o el desahucio «los resuelve el Pleno» por la Ley 7/1999 o el RBASO, o que en Zaragoza rige la mayoría absoluta del art. 205.4 de la Ley 7/1999. Se han corregido así:
- **Índices 11, 45, 53 y 107** del tema 10: se dice expresamente quién decide en Zaragoza.
- **Índices 208, 281 y 288** del tema 10: se suprime la frase sobre el Pleno, que la pregunta no necesita.
- **Índices 24, 25 y 44** del tema 11: se suprime la frase sobre el Pleno o se presenta la mayoría absoluta como regla general.

Los demás diagnósticos de fondo de la propuesta se han comprobado y son correctos:
- **Las cifras y reglas del RBASO**: 50 años; 4 %; 20 días; 20 %; 50 %; tanteo; peritos; cinco potestades; quince días y BOA; art. 62.3; arts. 78 y 81; art. 100.2.
- **El desplazamiento del RBEL**: lo dicen el preámbulo del Decreto 347/2002, «el desplazamiento de los Reglamentos estatales correspondientes: el de Bienes del año 1986…», y el art. 1.2.c) y d) del propio RBEL.
- **Los preceptos de la LPAP invocados no lo contradicen.** Los arts. 86 y 92.3 no son básicos. El art. 93.3 es básico, pero sus 75 años son un máximo y el RBASO fija uno menor.

## Veredicto por entrada

Índices de `data.questions[N]` en base 0. En la columna «Veredicto», OK significa aprobada tal cual.

### Tema 10

| Índice | Propuesta | Final | Veredicto y motivo |
|---|---|---|---|
| 11 | explicacion | explicacion | **Cambios.** Clave correcta: literal del art. 22.2.l) LBRL, régimen común, igual que el art. 29.2.n) de la Ley 7/1999. La exp propuesta daba la competencia al Pleno en Zaragoza, pero es del Gobierno de Zaragoza (art. 14.1.g Ley 10/2017). |
| 17 | retirar | respuesta | **Cambios: se conserva.** Enunciado: «art. 5 del RBEL (según se recoge…)» pasa a «art. 4.1 del Decreto 347/2002 (RBASO)». La clave se ajusta al texto literal: «directamente» y «ni sean comunales». Los distractores siguen siendo falsos. |
| 22 | explicacion | explicacion | OK. Capítulo III del RBEL, arts. 17 a 73, con tres secciones; Capítulo IV del Título I del RBASO, arts. 25 a 42. Comprobado. |
| 27 | retirar | respuesta | **Cambios: se conserva** citando el art. 109.1 RBASO, texto idéntico. Opciones y clave igual. |
| 28 | retirar | respuesta | **Cambios: se conserva** citando el art. 109.2 RBASO, texto idéntico. |
| 29 | retirar | respuesta | **Cambios: se conserva** citando el art. 109.2 RBASO. Se quita «preferentemente», que la norma no dice. Solapa con el índice 157 (art. 115.1 RBEL). |
| 30 | retirar | respuesta | **Cambios: se conserva** citando el art. 110 RBASO. Se cambia el distractor «Ser repartidos entre los vecinos»: sería gasto corriente y, por tanto, también prohibido. |
| 31 | retirar | respuesta | **Cambios: se conserva** citando el art. 111 RBASO. Solapa con el índice 64. |
| 32 | explicacion | enunciado | **Cambios.** El enunciado decía «regulación básica (art. 79 TRRL…)». El carácter básico del art. 79 no está declarado: la DF 7.ª TRRL no lo enumera y para el Título VI remite a la legislación vigente. Se cita sin calificarlo. Exp reescrita. Casi duplica el índice 141. |
| 33 | explicacion | enunciado | **Cambios.** «Según la misma regulación… ese umbral» depende de la pregunta anterior y no se entiende al barajar. Se cita la norma. Exp reescrita. |
| 40 | retirar | retirar | OK. Podría salvarse citando el art. 80.1 LBRL, pero repetiría el índice 224. |
| 45 | explicacion | explicacion | **Cambios.** Clave correcta como regla general. Se añade que en Zaragoza enajena el Gobierno de Zaragoza (art. 14.1.g Ley 10/2017; DA 2.ª.11 LCSP). Comprobado que el art. 108.3 RBASO remite al art. 126.4.ll) de la Ley 7/1999. |
| 47 | retirar | respuesta | **Cambios: se conserva** citando el art. 72 RBASO. Se quita la referencia a la estructura del RBEL. La clave pasa a «Uso común, general o especial, y uso privativo»: la anterior podía leerse como si el uso privativo fuera general o especial. |
| 52 | explicacion | explicacion | **Cambios.** La exp atribuía la cita «colectiva y comunal» también a la Ley 7/1999, que dice «colectiva o comunal». |
| 53 | explicacion | explicacion | **Cambios.** La exp propuesta decía que «solo» pueden desafectarse los comunales sin disfrute durante diez años, pero el art. 13 RBASO prevé otra vía para transmitirlos o cederlos. Se describen las dos vías y se añade que en Zaragoza decide el Gobierno de Zaragoza. |
| 64 | explicacion | respuesta | **Cambios.** Se quita «del RBEL» de la clave («régimen general de subasta del RBEL»). La exp precisa que el art. 188.3 de la Ley 7/1999 habla de la «cesión». |
| 67 | explicacion | enunciado | **Cambios.** Con «prevé el RBEL», la clave no es exacta: la venta directa de bienes no utilizables no está en el RBEL, como admite la propia propuesta. Se cita el art. 109 RBASO, que recoge literalmente las tres excepciones. |
| 75 | explicacion | explicacion | OK. Comprobados el art. 112.2 RBEL (40 %), el art. 115 RBASO y el art. 189 de la Ley 7/1999 (50 %). |
| 82 | explicacion | explicacion | **Cambios.** Exp reescrita: aprobación por Orden del Consejero si el valor supera el 25 %; toma de conocimiento en todos los casos. |
| 93 | respuesta | respuesta | OK. La nueva clave es exacta: art. 1.2 RBEL, DF 2.ª.5 LPAP, Título VI de la Ley 7/1999, Título I del RBASO y su preámbulo. Los distractores son falsos. |
| 107 | explicacion | explicacion | **Cambios.** Se mantiene un mes. La exp propuesta daba la resolución al Pleno; en Zaragoza es del Gobierno de Zaragoza. |
| 123 | explicacion | explicacion | OK. Cinco potestades: art. 47 RBASO y art. 173.1 de la Ley 7/1999. |
| 127 | respuesta | respuesta | **Cambios.** Nueva clave correcta: art. 62.3 RBASO. Se añade el art. 105 de la Ley 39/2015, que es básico y dice lo mismo. Los distractores son falsos. |
| 134 | respuesta | respuesta | OK. Nueva clave conforme al art. 182.4 de la Ley 7/1999 y a los arts. 75, 78 y 81 RBASO. El art. 86 LPAP no es básico. |
| 140 | explicacion | explicacion | OK. El distractor «Cuando lo establezca el Pleno» es falso: la ordenanza solo entra si el disfrute común es impracticable. |
| 141 | explicacion | explicacion | **Cambios.** Exp reescrita con el mismo contenido que la del índice 32. |
| 142 | explicacion | explicacion | **Cambios.** La exp propuesta decía «En Aragón la cifra es la misma» en una pregunta que no trata de cifras. Se reescribe. |
| 147 | retirar | retirar | OK. El art. 119.1.d) RBASO no fija los diez años. |
| 154 | retirar | retirar | OK. El 50 % aragonés ya se pregunta en el índice 320. |
| 156 | retirar | retirar | OK. Para salvarla habría que cambiar la clave; y en Zaragoza no rige esa mayoría del Pleno. |
| 175 | explicacion | explicacion | OK. |
| 188 | retirar | retirar | OK. El art. 81 RBASO no somete a concesión todo uso privativo. |
| 189 | retirar | respuesta | **Cambios: se conserva** citando el art. 83.2 RBASO. La clave pasa a «Cincuenta años», que ya era una opción. Los 25, 99 y 75 años son falsos en Aragón. Es la única recuperación que cambia la clave; si se quiere el criterio estricto de «solo la norma», basta retirarla. |
| 196 | retirar | retirar | OK. El art. 89.1 RBASO remite a un perito del Colegio y resuelve la Corporación; ninguna opción sirve. |
| 199 | retirar | retirar | OK. El art. 90.1 RBASO ya se pregunta en el índice 316. |
| 200 | retirar | retirar | OK. En el RBASO, el peticionario inicial no tiene tanteo. |
| 201 | retirar | retirar | OK. |
| 202 | retirar | retirar | OK. El 20 % no está entre las opciones. En Zaragoza, además, las concesiones son del Gobierno de Zaragoza. |
| 203 | retirar | retirar | OK. En Aragón es el 4 %, que no está entre las opciones. |
| 204 | retirar | retirar | OK. En Aragón es el 4 %, que no está entre las opciones. |
| 206 | explicacion | explicacion | OK. Arts. 100.2 y 102 RBASO, comprobados. |
| 208 | explicacion | explicacion | **Cambios.** Se quita «El acuerdo lo adopta el Pleno», dudoso en Zaragoza. Se precisa que el RBASO no regula el desahucio de las viviendas del personal. |
| 209 | explicacion | explicacion | **Cambios.** Mismo error de cita que en el índice 52 («y» frente a «o»). |
| 242 | retirar | retirar | OK. El art. 10 RBASO limita la mayoría absoluta al dominio público, y en Zaragoza decide el Gobierno de Zaragoza. |
| 248 | retirar | retirar | OK. El art. 17.4 RBASO no fija el umbral del 1 %. |
| 257 | retirar | retirar | OK. Art. 6.4 RBASO. |
| 266 | retirar | retirar | OK. Art. 25.3 RBASO. |
| 277 | retirar | retirar | OK. Ninguna opción recoge las cinco potestades. |
| 280 | retirar | retirar | OK. |
| 281 | explicacion | explicacion | **Cambios.** Se quita «Resuelve el Pleno (art. 52 RBASO)». |
| 282 | retirar | retirar | OK. El art. 50.1 RBASO ya se pregunta en el índice 309. |
| 288 | explicacion | explicacion | **Cambios.** Se quita la frase sobre el Pleno (art. 60.1). Se añade que la antelación es «mínima». |

### Tema 11

| Índice | Propuesta | Final | Veredicto y motivo |
|---|---|---|---|
| 11 | explicacion | explicacion | OK. Comprobados el art. 95.1 TRRL, el art. 206.1 de la Ley 7/1999, el art. 232.2 RBASO, el art. 9.2 TREBEP y la supresión del art. 85.3 LBRL por la Ley 27/2013 (cotejado con la versión de 2007). |
| 24 | explicacion | explicacion | **Cambios.** Se quita la mayoría absoluta, que no hace falta para la pregunta y es dudosa en Zaragoza. Se mantienen el Gobierno de Aragón, los tres meses y el silencio positivo. |
| 25 | explicacion | explicacion | **Cambios.** La exp propuesta daba a entender que en Zaragoza la mayoría absoluta la impone la Ley 7/1999. Según el art. 11.2 y la DA 1.ª de la Ley 10/2017, eso es al menos dudoso. Se presenta como regla general y se citan literalmente el art. 47.3 LBRL y el art. 11.2 de la Ley 10/2017. |
| 44 | explicacion | explicacion | **Cambios.** Se quita que «el Pleno designa la comisión especial»: en Zaragoza, el art. 51 de la Ley 10/2017 prevé que la designe el Alcalde y que el proyecto lo apruebe el Gobierno de Zaragoza. Se añade el art. 11.1.k) de la Ley 10/2017. |
| 59 | explicacion | explicacion | **Cambios.** En Zaragoza los bandos los dicta el Alcalde por el art. 124.4.g) LBRL y el art. 12.1.g) de la Ley 10/2017, y no puede delegarlos (art. 124.5 LBRL y art. 12.2 de la Ley 10/2017). Los arts. 21.1.e) LBRL y 30.1.g) de la Ley 7/1999 son del régimen común. |
| 93 | explicacion | explicacion | OK. Comprobado el preámbulo del RBASO («producida por el cambio de la legislación básica»). |
| 126 | explicacion | explicacion | OK. Art. 193.1.a) de la Ley 7/1999, en la redacción del Decreto-ley 1/2010. |
| 227 | explicacion | explicacion | OK. |

## Fuera del encargo: preguntas que conviene revisar en otra ronda

La propuesta las dio por buenas, pero con la Ley 10/2017 su regla no es la de Zaragoza:

- **Tema 10, índices 94, 118, 119, 120 y 269.** El Pleno aprueba, rectifica y comprueba el inventario. En Zaragoza, la aprobación del inventario y sus rectificaciones anuales corresponden al Gobierno de Zaragoza (art. 14.1.g).
- **Tema 10, índices 144, 161 y 216.** Atribuyen al Pleno, con mayoría absoluta, la cesión gratuita, las cesiones a vecinos y la cesión del aprovechamiento de comunales. En Zaragoza hay que comprobarlo con los arts. 11.2 y 14.1.g) de la Ley 10/2017.
- **Tema 10, índice 63.** Atribuye al Alcalde la gestión del patrimonio, que en Zaragoza es del Gobierno de Zaragoza (art. 14.1.g).

## Fuentes descargadas para esta revisión

En `/tmp/claude-0/-home-user-opotest/b89be96f-03bf-5e1f-ba88-44c94e136a9e/scratchpad/rev-aragon/` (HTML en `dl*/`, texto en `txt/`):

| Norma | Origen |
|---|---|
| Decreto 347/2002, RBASO | https://www.boa.aragon.es/eli/es-ar/d/2002/11/19/347/dof/spa/html |
| Corrección de errores del RBASO (BOA núm. 9, 24-1-2003): arts. 115.1, 121 y 146.2 | BOA, DOCN 000075930 |
| Ley 7/1999, de Administración Local de Aragón | BOE-A-1999-10151 |
| Ley 10/2017, de régimen especial de Zaragoza | BOE-A-2018-1683 |
| RBEL, RD 1372/1986 | BOE-A-1986-17958 |
| LBRL | BOE-A-1985-5392, y su versión de 31-10-2007 para el antiguo art. 85.3 |
| LPAP | BOE-A-2003-20254 |
| TRRL | BOE-A-1986-9865 |
| TRLRHL | BOE-A-2004-4214 |
| LCSP | BOE-A-2017-12902 |
| TREBEP | BOE-A-2015-11719 |
| Ley 39/2015 | BOE-A-2015-10565 |
