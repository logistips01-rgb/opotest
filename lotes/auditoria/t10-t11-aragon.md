# Temas 10 y 11 frente a la normativa aragonesa

Banco: Auxiliar Administrativo del Ayuntamiento de Zaragoza (`aux-admin-zaragoza`). Se auditan las preguntas existentes de `data.questions[10]` (300) y `data.questions[11]` (242).
Fecha: 22-oct-2026. No se ha modificado ningún archivo de datos.
Propuestas: `lotes/auditoria/t10-t11-aragon.json`, con 60 entradas, todas las preguntas que no están OK.

## Recuento

| Categoría | Tema 10 | Tema 11 | Total |
|---|---|---|---|
| OK | 248 | 234 | **482** |
| EXPLICACIÓN (se añade la regla aragonesa o se corrige la `fuente`; la clave no cambia) | 22 | 8 | **30** |
| RESPUESTA (cambia la opción correcta o el texto de una opción) | 3 | 0 | **3** |
| RETIRAR | 27 | 0 | **27** |
| **Total** | **300** | **242** | **542** |

- **RESPUESTA**: tema 10, preguntas sobre el uso privativo del dominio público, los bloques normativos del tema y los interdictos frente a la recuperación posesoria.
- **RETIRAR** (27), por dos motivos:
  - **19 preguntas** preguntan literalmente qué dice un artículo del RBEL que la norma aragonesa regula de otra forma (99 años, 40 %, 3 %, 5 %, 30 días, 10 %, cuatro potestades…). La clave es «correcta» para el RBEL, pero enseña una cifra que no rige en Zaragoza, y el enunciado («Según el art. X RBEL») no se puede adaptar con los campos editables (`options`, `correct`, `exp`, `fuente`).
  - **8 preguntas** (índices 17, 27, 28, 29, 30, 31, 40 y 47) atribuyen en el **enunciado** a un artículo del RBEL un contenido que no está en él. En cinco de ellas (27 a 31) el texto es literal del **Decreto 347/2002 con el mismo número de artículo**: quien las redactó copió la norma aragonesa y la etiquetó como RBEL. Si la sesión principal puede editar el enunciado, la solución mejor es cambiar «del RBEL» por «del Decreto 347/2002 (RBASO)». Así quedan como preguntas correctas de la norma aplicable, con las mismas opciones. El `motivo` de cada entrada lo indica.
- **Tema 11**: sus preguntas son casi todas literales de la LBRL o de la LRJSP, que son básicas. Ninguna cita el Reglamento de Servicios de 1955. Solo 8 piden añadir la regulación aragonesa: monopolio, ejercicio de autoridad, sociedad mercantil, medios de intervención, principios y bandos.

Criterio:
- **OK**: la clave es la regla aplicable en Zaragoza, o la pregunta es literal de una norma estatal cuya regla coincide con la aragonesa o no está regulada por esta. En este último caso el RBEL se aplica como supletorio, según el preámbulo del Decreto 347/2002.
- **EXPLICACIÓN**: la clave vale, pero la explicación o la `fuente` dan la regla estatal desplazada o citan mal el artículo.
- **RESPUESTA**: el enunciado es general y la clave es falsa en Zaragoza.

Todas las citas entre comillas latinas del JSON (las de `cita` y las de las nuevas `exp`) se han cotejado automáticamente con los textos descargados y aparecen literalmente.

## Fuentes descargadas para esta auditoría

En `/tmp/claude-0/-home-user-opotest/b89be96f-03bf-5e1f-ba88-44c94e136a9e/scratchpad/aud-aragon/dl/` (HTML) y `…/aud-aragon/txt/` (texto):

| Norma | Origen |
|---|---|
| Decreto 347/2002, RBASO (BOA núm. 139, 25-11-2002) | https://www.boa.aragon.es/eli/es-ar/d/2002/11/19/347/dof/spa/html |
| Corrección de errores del Decreto 347/2002 (BOA núm. 9, 24-1-2003): arts. 115.1, 121 y 146.2 | BOA, DOCN 000075930 |
| Ley 7/1999, de Administración Local de Aragón | BOE-A-1999-10151 (consolidado) |
| LBRL | BOE-A-1985-5392 |
| RBEL, RD 1372/1986 | BOE-A-1986-17958 |
| TRRL, RDLeg 781/1986 | BOE-A-1986-9865 |
| LPAP, Ley 33/2003 | BOE-A-2003-20254 |
| TRLRHL, RDLeg 2/2004 | BOE-A-2004-4214 |
| LCSP, Ley 9/2017 | BOE-A-2017-12902 |
| Reglamento de Servicios de 1955 | BOE-A-1955-10057 |

Por qué manda la norma aragonesa: el preámbulo del Decreto 347/2002 dice que «Esa regulación propia va a suponer el desplazamiento de los Reglamentos estatales correspondientes: el de Bienes del año 1986 y el de Servicios, aprobado en 1955 y que no ha sido actualizado». El propio RBEL coloca, en su art. 1.2.c) y d), «la legislación que en el ámbito de sus competencias dicten las Comunidades Autónomas» por delante de «la legislación estatal no básica».

## Diferencias entre la norma estatal y la aragonesa

Las preguntas se identifican por su índice en `data.questions[N]`, empezando en 0.

### Bienes (tema 10)

1. **Plazo máximo de la concesión demanial.**
   - Estatal: el RBEL 79 dice «noventa y nueve años» y la LPAP 93.3, que es básica, 75 años «salvo que se establezca otro menor».
   - Aragón: RBASO 83.2, «El plazo máximo de la concesión será de cincuenta años, salvo que disposiciones especiales señalen otro plazo menor».
   - Preguntas: 189 (retirar).
2. **Uso privativo: licencia o concesión.**
   - Estatal: el RBEL 78.1.a) somete a concesión todo uso privativo.
   - Aragón: RBASO 78, «Estarán sujetas a licencia: […] b) la utilización privativa normal, cuando no requiera instalaciones fijas o permanentes». RBASO 81, «Estarán sujetas a concesión administrativa: a) la utilización privativa normal […] cuando requiera obras o instalaciones de carácter permanente. b) la utilización anormal de los bienes». Ley 7/1999 182.4: «Está sujeto a concesión administrativa cuando requiera la implantación de instalaciones fijas y permanentes. En otro caso, podrá sujetarse a mera licencia».
   - Preguntas: 134 (respuesta) y 188 (retirar).
3. **Garantía definitiva de la concesión.**
   - Estatal: RBEL 90.1, 3 %; RBEL 91.d), 5 % en el uso anormal.
   - Aragón: RBASO 91.1, «consistirá en el cuatro por ciento del valor del dominio público ocupado». RBASO 94.d), «la garantía definitiva será el cuatro por ciento sobre las anteriores bases».
   - Preguntas: 203 y 204 (retirar).
4. **Información pública del proyecto de concesión.**
   - Estatal: RBEL 87.4, «durante treinta días».
   - Aragón: RBASO 90.1, «por plazo no inferior a veinte días».
   - Preguntas: 199 (retirar).
5. **Derecho de tanteo.**
   - Estatal: lo tiene el peticionario inicial, con un 10 % de diferencia y treinta minutos después de la adjudicación provisional (RBEL 88.1 y 88.3).
   - Aragón: solo puede ofrecerse en las bases del concurso de proyectos a su adjudicatario. RBASO 86.2.c): «si el adjudicatario del concurso de proyectos participare en la licitación […] que se prolongará al efecto después de la propuesta de adjudicación».
   - Preguntas: 200 y 201 (retirar).
6. **Mayoría absoluta para concesiones de más de cinco años.**
   - Estatal: RBEL 89, cuantía superior al 10 %.
   - Aragón: RBASO 82.2, «siempre que su cuantía exceda del veinte por ciento de los recursos ordinarios del presupuesto de la Entidad». En el mismo sentido, Ley 7/1999 126.4.h).
   - Preguntas: 202 (retirar).
7. **Discordia de peritos en la tasación del proyecto.**
   - Estatal: RBEL 86.1, la resuelve el Jurado Provincial de Expropiación.
   - Aragón: RBASO 89.1, informe de un «perito designado por el Colegio Profesional correspondiente, resolverá motivadamente la Corporación».
   - Preguntas: 196 (retirar).
8. **Permuta.**
   - Estatal: RBEL 112.2, diferencia de valor no superior al 40 %.
   - Aragón: RBASO 115.2, «no es superior al cincuenta por ciento del que tenga el valor más alto y se establece la contraprestación económica pertinente». Igual en Ley 7/1999 189.1.
   - Preguntas: 154 (retirar); 67, 75 y 175 (explicación).
9. **Mayoría absoluta para enajenar.**
   - Estatal: RBEL 114, más del 10 %.
   - Aragón: Ley 7/1999 126.4.ll), «La enajenación de bienes, si su cuantía excede del 20 por 100 de los recursos ordinarios del presupuesto», igual que LBRL 47.2.m). El RBASO 108.3 remite a ese quórum.
   - Preguntas: 156 (retirar) y 45 (explicación).
10. **Tutela autonómica de enajenaciones, gravámenes y permutas de inmuebles.**
    - Estatal: «autorización» por encima del 25 % y «dar cuenta» de todas (RBEL 109.1; TRRL 79.1).
    - Aragón: RBASO 121, corregido en el BOA de 24-1-2003: comunicación «una vez adoptado el acuerdo correspondiente de su aprobación y previamente a la ejecución de dicho acuerdo […] para su toma de conocimiento». Por encima del 25 %, «aprobación previa mediante Orden del Consejero». Ley 7/1999 186.1: «requerirá aprobación de la Administración de la Comunidad Autónoma de Aragón».
    - Preguntas: 32, 33, 82, 141 y 142 (explicación).
11. **Alteración expresa de la calificación jurídica.**
    - Estatal: RBEL 8.2, mayoría absoluta siempre.
    - Aragón: RBASO 10, «deberá ser resuelto por el Pleno de la Corporación, previa información pública por plazo de un mes. Si la alteración de la calificación jurídica se refiere a bienes de dominio público el acuerdo habrá de adoptarse por mayoría absoluta». Igual en Ley 7/1999 177.2.
    - Preguntas: 242 (retirar); 107 y 11 (explicación).
12. **Desafectación de comunales.**
    - Aragón: tiene un procedimiento propio. RBASO 12.2: «información pública por plazo de un mes, acuerdo del Pleno […] mayoría absoluta […] y posterior aprobación del Consejero». RBASO 13.1.c), para transmitir: «mayoría de los dos tercios del número legal de miembros».
    - Preguntas: 53 (explicación).
13. **Aprovechamiento de comunales.**
    - Estatal: RBEL 94.1, «precisamente en régimen de explotación común o cultivo colectivo».
    - Aragón: RBASO 96.2, «preferentemente en régimen de explotación colectiva y comunal». RBASO 96.3: si es impracticable, «regirá la costumbre u ordenanza local […] y, en su defecto, […] lotes o suertes». RBASO 97: subasta autorizada por el Gobierno de Aragón.
    - Preguntas: 52, 140 y 209 (explicación).
14. **Prerrogativas.**
    - Estatal: RBEL 44.1, cuatro potestades.
    - Aragón: RBASO 47, cinco: «e) La potestad sancionadora». También Ley 7/1999 173.1.d).
    - Preguntas: 277 (retirar) y 123 (explicación).
15. **Investigación.**
    - Estatal: denuncia con anticipo de 10.000 a 100.000 pesetas (RBEL 47); publicación en el BOP y un mes de alegaciones (RBEL 49 y 50).
    - Aragón: RBASO 49.1.b), anticipo «en la cuantía que se estime necesaria, según valoración técnica». RBASO 50.1: publicación en el «Boletín Oficial de Aragón» y en el tablón «por plazo de quince días, al objeto de que las personas afectadas […] puedan alegar». RBASO 52: resuelve el Pleno.
    - Preguntas: 280 y 282 (retirar); 281 (explicación).
16. **Deslinde.**
    - Aragón: el anuncio se publica en el «Boletín Oficial de Aragón» y en el tablón, con sesenta días de antelación (RBASO 57.1).
    - Preguntas: 288 (explicación).
17. **Recuperación de oficio e interdictos.**
    - Estatal: el RBEL 70.3 excluye los interdictos sin matices.
    - Aragón: RBASO 62.3, «No se admitirán demandas que pretendan la tutela sumaria de la tenencia o posesión […] siempre que éstas se ajusten al procedimiento establecido»; la vía de hecho es recurrible.
    - Preguntas: 127 (respuesta).
18. **Canon por la cesión de uso de bienes patrimoniales.**
    - Estatal: RBEL 92.2, 6 % «en todo caso».
    - Aragón: RBASO 100.2, «Como regla general […] seis por ciento […] Se exceptúa el supuesto previsto en el artículo 102», que regula la cesión por motivos sociales.
    - Preguntas: 206 (explicación).
19. **Desahucio administrativo.**
    - Aragón: está previsto para bienes de dominio público (RBASO 64; Ley 7/1999 173.1.e). El RBEL 93, sobre viviendas del personal, solo se aplica como supletorio.
    - Preguntas: 208 (explicación).
20. **Cesión gratuita.**
    - Estatal: RBEL 110.1.e), los bienes no deben ser necesarios «en los diez años inmediatos».
    - Aragón: RBASO 119.1.d), no lo fija: «ni es previsible que sean necesarios para la Entidad local».
    - Preguntas: 147 (retirar).
21. **Adquisición de bienes histórico-artísticos.**
    - Estatal: RBEL 11.1, umbral del 1 %.
    - Aragón: RBASO 17.4, informe autonómico cuando su transmisión «deba ser notificada a la Administración autonómica, según la legislación del patrimonio cultural aragonés».
    - Preguntas: 248 (retirar).
22. **Inventarios separados.**
    - Estatal: RBEL 31, ejemplar para el Estado y para la Comunidad Autónoma.
    - Aragón: RBASO 25.3, «Un ejemplar […] se unirá como anexo al general de la Entidad local, y otro quedará en la entidad respectiva».
    - Preguntas: 266 (retirar).
23. **Patrimonio municipal del suelo.**
    - Estatal: RBEL 16.2, «suelo urbano o urbanizable programado».
    - Aragón: RBASO 6.4, se regula «en cuanto a su constitución, bienes que lo integran, destino y cesiones por lo dispuesto en la legislación urbanística de Aragón».
    - Preguntas: 257 (retirar) y 64 (explicación).
24. **Órganos en Zaragoza, municipio de gran población.**
    - Las atribuciones de los arts. 22 y 47.2 LBRL son del régimen común. LBRL 47.3: «Las normas relativas a adopción de acuerdos en los municipios señalados en el artículo 121 de esta ley, son las contenidas en el apartado 2 del artículo 123».
    - DA 2.ª.11 LCSP: las competencias patrimoniales del Alcalde y del Pleno «se ejercerán por la Junta de Gobierno Local».
    - Las competencias del Pleno en bienes vienen, en Aragón, de la Ley 7/1999 (29.2.n y 126.4) y del RBASO.
    - Preguntas: 11 y 45 (explicación).

### Actividades y servicios (tema 11)

25. **Monopolio.**
    - Aragón: Ley 7/1999 205.4, el acuerdo del Pleno «deberá adoptarse por mayoría absoluta […] y requerirá la aprobación del Gobierno de Aragón […] en el plazo de tres meses […] entendiéndose aprobada si no hay resolución expresa». RBASO 226 y 227, en el mismo sentido. La explicación del banco cita el art. 47.2.k) LBRL, que no rige en los municipios de gran población.
    - Preguntas: 24, 25 y 44 (explicación).
26. **Servicios con ejercicio de autoridad.**
    - Aragón: Ley 7/1999 206.1, «En ningún caso podrán prestarse por gestión indirecta». RBASO 232.2 va más allá: «gestión directa de la propia Entidad sin órgano especial».
    - Preguntas: 11 (explicación).
27. **Sociedad mercantil de gestión directa.**
    - Estatal: LBRL 85.2.A).d), «capital social […] de titularidad pública».
    - Aragón: la Ley 7/1999 206.2.c) dice «íntegramente o mayoritariamente a la entidad» y así se preguntó en el examen de 2026 (P49). El RBASO 231.2.c) vuelve a «íntegramente», y su preámbulo explica que lo hace por el cambio de la legislación básica.
    - Preguntas: 93 (explicación).
28. **Medios de intervención.**
    - Estatal: LBRL 84.1.a), «Ordenanzas y bandos».
    - Aragón: Ley 7/1999 193.1.a), en la redacción del Decreto-ley 1/2010, «Ordenanzas y Decretos normativos de emergencia». El RBASO 122.1.a) mantiene «Ordenanzas y bandos».
    - Preguntas: 126 (explicación).
29. **Principios de la intervención.**
    - Estatal: LBRL 84.2, «igualdad de trato, necesidad y proporcionalidad».
    - Aragón: Ley 7/1999 193.2, «igualdad de trato, congruencia con los motivos y fines justificativos, respeto a la libertad individual y proporcionalidad».
    - Preguntas: 227 (explicación).
30. **Bandos.**
    - Aragón: RBASO 134 a 136. Su finalidad es «exhortar a los ciudadanos a la observancia de las obligaciones y deberes establecidos en las leyes y en las ordenanzas», recordarlas o afrontar catástrofes. El Alcalde no puede delegarlos, y de los bandos extraordinarios se da cuenta al Pleno.
    - Preguntas: 59 (explicación).

### Fuentes mal citadas

| Índice (tema 10) | Fuente o enunciado | Dónde está realmente | Acción |
|---|---|---|---|
| 17 | «art. 5 RBEL»: definición de patrimoniales | RBEL 6.1; RBASO 4.1 | retirar (error en el enunciado) |
| 22 | «Art. 16 RBEL»: secciones del Cap. III | Cap. III, arts. 17 a 73 (tres secciones, no dos) | explicación |
| 27 | «art. 109.1 RBEL»: subasta como regla general | RBASO 109.1; Ley 7/1999 188.1; TRRL 80 | retirar (error en el enunciado) |
| 28 | «art. 109.2 RBEL»: venta directa de parcelas sobrantes y bienes no utilizables | RBASO 109.2; Ley 7/1999 188.2 (RBEL 109.2 es la cesión gratuita) | retirar (error en el enunciado) |
| 29 | «art. 109.2 RBEL»: oferta a los colindantes | **RBEL 115.1**; RBASO 109.2 | retirar (error en el enunciado) |
| 30 | «art. 110 RBEL»: ingresos y gastos corrientes | RBASO 110; TRLRHL 5 (RBEL 110 es la cesión gratuita) | retirar (error en el enunciado) |
| 31 | «art. 111 RBEL»: patrimonio municipal del suelo | RBEL 16.1; RBASO 111 (RBEL 111 es la reversión) | retirar (error en el enunciado) |
| 40 | «art. 2.3 RBEL»: inalienabilidad de los comunales | RBEL 5; LBRL 80.1; RBASO 6 | retirar (error en el enunciado) |
| 47 | «art. 74 RBEL»: clases de uso | RBEL 75; RBASO 72; Ley 7/1999 182.1 | retirar (error en el enunciado) |
| 64 | fuente «Art. 111 RBEL»: patrimonio municipal del suelo | RBEL 16.1; RBASO 111 | explicación |
| 67 | fuente «Art. 109.1 RBEL»: excepciones a la subasta | RBEL 112.2 y 115.1; RBASO 109 | explicación |
| 75 | fuente «Art. 109.1 RBEL»: permuta | RBEL 112.2; RBASO 115 | explicación |

## OK con observaciones (sin entrada en el JSON)

- **RBEL aplicable como supletorio.** Son literales del RBEL sobre puntos que la norma aragonesa no regula; el RBEL rige como supletorio y la clave vale.
  - Tema 10: 149, 159, 160, 165, 191, 192, 207, 213, 217, 218, 219, 254, 256, 271 a 276 y 291.
  - Caso dudoso, la 120 (el Pleno comprueba el inventario). El RBASO 27.1 solo atribuye al Pleno la aprobación y las rectificaciones anuales; para la comprobación (RBASO 26.3) no dice el órgano, y se aplica el RBEL 34.
- **Coincidencias con la norma aragonesa.** Muchas preguntas literales del RBEL coinciden palabra por palabra o en la cifra con el RBASO: deslinde (sesenta y veinte días), apeo, inventario (ocho epígrafes, rectificación anual), cesión gratuita (cinco y treinta años; quince días de información pública), subasta en la cesión de patrimoniales (cinco años o 5 %), parcelas sobrantes, uso común especial sujeto a licencia… Siguen siendo correctas.
  - Se podría añadir el artículo aragonés a su `fuente`. No se ha hecho, para no inflar el lote.
- **Estructura del RBEL.** Las preguntas 20, 21, 25, 26, 50, 51, 180 y 181 del tema 10 tratan de la estructura o del ámbito de un reglamento que en Aragón solo es supletorio. Son correctas, pero aportan poco para Zaragoza; quedan a criterio de la sesión principal.
- **Servicios reservados (tema 11, pregunta 123).** El RBASO 224.2 aún enumera como servicios reservados «mataderos; mercados y lonjas centrales». Lo hace en un decreto, no en una ley, y es anterior a la redacción vigente del art. 86.2 LBRL. La pregunta, literal de la LBRL, es correcta.
- **Gestión directa (tema 11, pregunta 89).** La Ley 7/1999 206.2 enumera tres formas de gestión directa, sin la entidad pública empresarial. La pregunta 89 cuenta las cuatro del art. 85.2.A) LBRL, que es básico, y es correcta.
