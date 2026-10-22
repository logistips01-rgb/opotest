# Revisión normativa · octubre de 2026

Consulta hecha el **22-oct-2026** en la API de legislación consolidada del BOE: todas las versiones de cada bloque y el texto de las normas que los modifican.
Las bases exigen la normativa «vigente en el momento de celebración de los ejercicios», y el examen es en 2027. Por eso la referencia es la **última redacción publicada**, aunque alguna parte entre en vigor más adelante.

Entregable con los cambios propuestos: `lotes/normativa/revision-2026-10.json` (9 preguntas). No se ha tocado ningún archivo de datos.

## Resumen

| | Preguntas |
|---|---|
| Revisadas (citan el artículo o tratan su contenido) | 101 |
| Siguen bien | 92 |
| Cambia la explicación | 4 |
| Cambia la respuesta (texto de una opción) | 4 |
| Retirar | 1 |

De las 9 que no siguen bien, **4 vienen de las reformas de 2026**. Las otras **5 son errores antiguos** que han salido al cotejar con el texto vigente del art. 25 LBRL: no vienen de esta reforma, sino de la Ley 27/2013. En el tema 21 no hay que cambiar nada.

| Tema | Pregunta (inicio) | Artículo | Decisión | Origen |
|---|---|---|---|---|
| 15 | «Según el art. 69.1 de la LBRL, las Corporaciones locales facilitarán…» | LBRL 69.1 | Respuesta (texto de la opción) | Ley 4/2026 |
| 14 | «¿Qué relación existe entre las ordenanzas de accesibilidad…» | LBRL 25.2 q) | Explicación | Ley 4/2026 |
| 12 | «El recargo que los ayuntamientos pueden exigir sobre la cuota líquida del IBI…» | TRLRHL 72.4 bis | Explicación | RDL 29/2026 |
| 12 | «Según la tabla del art. 107.4 TRLRHL, el coeficiente máximo… 20 años…» | TRLRHL 107.4 | Respuesta: 0,40 → 0,30 | RDL 29/2026 |
| 14 | «Según el art. 25.2 del LBRL, también es competencia propia municipal…» | LBRL 25.2 k) | Respuesta (quitar «alumbrado público») | error previo (2013) |
| 14 | «¿Qué relación existe entre una ordenanza reguladora de cementerios…» | LBRL 25.2 k) | Respuesta (letra j → k) | error previo (2013) |
| 14 | «…policía local, ordenación del tráfico de vehículos y personas en:» | LBRL 25.2 f), g) | Retirar | error previo (2013) |
| 14 | «Según el art. 25.2 de la LBRL, ¿cuál de las siguientes es una competencia propia…» | LBRL 25.2 b) | Explicación (cita cortada) | error previo |
| 11 | «¿Qué relación existe entre el art. 25.2 LBRL… y el art. 85 LBRL…?» | LBRL 25.2 | Explicación (quitar «alumbrado») | error previo (2013) |

---

## LBRL (Ley 7/1985)

### Art. 25: nueva letra q) del apartado 2

- **Norma:** Ley 4/2026, de 1 de octubre, disposición final 3.1. BOE del 03/10/2026; **en vigor desde el 23/10/2026** («entrará en vigor a los veinte días de su publicación», disp. final 28.ª).
- **Antes:** la lista del 25.2 acababa en la letra p), añadida por el RDL 7/2026, de 20 de marzo.
- **Ahora:** se añade
  > «q) Promoción de actuaciones en materia de igualdad de oportunidades, no discriminación y accesibilidad universal de las personas con discapacidad.»
- **Revisadas:** 36. Son las que citan el art. 25 LBRL en `fuente` (temas 11, 14 y 16), más la 1.251 (competencias municipales en la CE) y la 11.67.
- **Decisión:**
  - **14 · ordenanzas de accesibilidad → explicación.** La respuesta (urbanismo, 25.2 a) sigue valiendo. Hay que añadir que desde el 23/10/2026 la letra q) recoge expresamente la accesibilidad universal.
  - No hay ninguna pregunta del tipo «¿cuál NO es competencia propia?» con un distractor que ahora encaje en la letra q), ni que cuente las letras del 25.2. Las de la letra p) (14.168 y 14.277) siguen bien.
  - **Errores previos** que han salido al revisar (no vienen de la reforma de 2026; el texto actual de esas letras es de la Ley 27/2013):
    - **14 · «también es competencia propia municipal» → respuesta.** La opción correcta era «Alumbrado público, cementerios y actividades funerarias». El alumbrado público no está en el 25.2: está en el 26.1 a) («En todos los Municipios: alumbrado público, cementerio, recogida de residuos…»). Además, los cementerios son la letra k), no la j). Nueva opción: «Cementerios y actividades funerarias».
    - **14 · ordenanza de cementerios → respuesta.** La opción correcta citaba el «art. 25.2 j)». Es la k): «k) Cementerios y actividades funerarias.» La j) es «Protección de la salubridad pública». La auditoría de agosto ya lo anotó en la explicación, pero no lo corrigió.
    - **14 · «policía local, ordenación del tráfico de vehículos y personas en:» → retirar.** El enunciado copia la redacción anterior a 2013. Hoy la f) es «Policía local, protección civil, prevención y extinción de incendios» y la g) es «Tráfico, estacionamiento de vehículos y movilidad. Transporte colectivo urbano». Ya no se mencionan las «vías urbanas». La pregunta no tiene arreglo sin reescribir el enunciado, y la f) y la g) ya las preguntan otras (14.167 y 16.36).
    - **14 · competencia propia, medio ambiente urbano → explicación.** La cita de la letra b) se cortaba en «contaminación acústica.». El texto sigue: «…acústica, lumínica y atmosférica en las zonas urbanas».
    - **11 · relación entre el 25.2 y el 85 → explicación.** Ponía el alumbrado público como ejemplo del 25.2.
  - Detalle menor que no se ha tocado: en la 14.93 y la 14.288, una opción dice «Ordenación, gestión, ejecución y disciplina urbanística» (redacción de 1985). La actual es «Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística». La respuesta se reconoce igual.

### Art. 69.1: información y participación

- **Norma:** Ley 4/2026, disposición final 3.2. BOE del 03/10/2026; **en vigor desde el 23/10/2026**.
- **Antes:**
  > «1. Las Corporaciones locales facilitarán la más amplia información sobre su actividad y la participación de todos los ciudadanos en la vida local.»
- **Ahora:**
  > «1. Las Corporaciones locales facilitarán la más amplia información sobre su actividad y la participación de toda la ciudadanía en la vida local. A tal fin la información se ofrecerá en formatos accesibles, siguiendo las reglas marcadas por el principio del diseño universal, de manera que resulten comprensibles para todas las personas.»
- El apartado 2 no cambia.
- **Revisadas:** 6 (15.147, 15.150, 15.151, 15.152, 15.170 y 15.176).
- **Decisión:** **15.150 → respuesta.** Es una cita literal. La opción correcta pasa a decir «toda la ciudadanía», la explicación recoge la frase nueva y el índice de la correcta no cambia. Las demás siguen bien.

### Art. 92 bis: apartado 6, provisión de puestos de habilitación nacional

- **Norma:** RDL 13/2026, de 2 de junio, disposición final 1. BOE del 03/06/2026; en vigor desde el 04/06/2026. Convalidado (Resolución de 18-jun-2026, BOE-A-2026-13462).
- **Antes:**
  - «el concurso ordinario y el concurso unitario».
  - Libre designación solo para los puestos reservados, y para los de la letra 1.b) con «autorización expresa» del Estado.
  - El cese de los de la letra 1.b) exigía «informe preceptivo previo».
- **Ahora:**
  > «el concurso ordinario y el concurso unitario, que tendrá naturaleza supletoria»
  - También pueden cubrirse por libre designación «los puestos de trabajo de los titulares de los órganos directivos a los que se refiere el artículo 130».
  - En el cese «el acuerdo del cese deberá ser comunicado al órgano competente de la Administración General del Estado en materia de Función Pública. Esta comunicación deberá incluir la correspondiente motivación del cese referido al desempeño profesional del funcionario».
- **Revisadas:** 44. Son 40 que citan el 92 bis (19.0–19.59, 10.59, 16.56 y 21.96) y las de libre designación del RD 128/2018 (19.244–19.247).
- **Decisión:** todas siguen bien. Las del apartado 6 (19.36, 19.39 y 19.41) ya están redactadas con el texto nuevo. Ninguna pregunta usa la «autorización expresa» ni el «informe preceptivo previo» suprimidos.

## TRLRHL (RDLeg 2/2004)

### Aviso común a los arts. 72 y 107 y a la DA 20.ª LPAP

Los tres vienen del **RDL 29/2026, de 6 de octubre**, que repite casi literalmente el RDL 26/2026, de 29 de septiembre. El Congreso **derogó** el RDL 26/2026 (Resolución de 2-oct-2026). A 22-oct-2026, la API del BOE no registra todavía la convalidación del RDL 29/2026. El plazo es de treinta días desde su promulgación (art. 86.2 CE), es decir, hasta primeros de noviembre de 2026.

Las actualizaciones de coeficientes de la plusvalía de los RDL 9/2024 y 16/2025 también fueron derogadas. **Si el RDL 29/2026 no se convalida, hay que deshacer las dos propuestas de TRLRHL de esta revisión.** Conviene volver a pasar `tools/vigilar-normas.js` en noviembre.

### Art. 72: recargos del IBI

- **Norma:** RDL 29/2026, art. 8. BOE del 07/10/2026; en vigor desde el 08/10/2026. Se aplica «Con efectos para los períodos impositivos que se inicien a partir de la entrada en vigor de este Real Decreto-ley». Como «El período impositivo coincide con el año natural» (art. 75.2), en el IBI **se aplica desde 2027**.
- **Antes (Ley 12/2023):** en el art. 72.4, párrafos 3.º y siguientes:
  - «los ayuntamientos podrán exigir un recargo de hasta el 50 por ciento de la cuota líquida del impuesto».
  - Desocupado permanente es el inmueble vacío «por un plazo superior a dos años» y de titulares de cuatro o más inmuebles.
  - El recargo llega hasta el 100 % si la desocupación supera tres años, y 50 puntos más para titulares de dos o más inmuebles vacíos en el mismo municipio.
- **Ahora:** el título del artículo añade «y de alojamientos de uso turístico». El recargo pasa a un **apartado 4 bis**:
  > «4 bis. Tratándose de inmuebles de uso residencial que se encuentren desocupados con carácter permanente, en el caso de que no se trate de municipios ubicados en una zona de mercado residencial tensionado según lo establecido en la Ley 12/2023 [...], los ayuntamientos podrán exigir un recargo de hasta el 50 por ciento de la cuota líquida del impuesto.»
  - Fuera de las zonas tensionadas, el resto del régimen sigue igual.
  - En zonas tensionadas hay un régimen propio:
    - recargo de hasta el 50 % para cualquier inmueble desocupado más de dos años;
    - «En el caso de titulares de cuatro o más inmuebles de uso residencial, este recargo podrá ser de hasta el 100 por ciento»;
    - 50 puntos más si la desocupación supera tres años (también para titulares de cuatro o más inmuebles).
  - Nuevo **apartado 4 ter**, para alojamientos de uso turístico en zonas tensionadas: recargo de hasta el 50 %, del 100 % para titulares de dos o más y del 150 % para titulares de cuatro o más.
- **Revisadas:** 7 (12.115, 12.116, 12.117, 21.11, 21.139, 21.141 y 21.142).
- **Decisión:**
  - **12.117 → explicación y fuente.** La respuesta («El 100 por ciento si la desocupación supera los tres años») sigue siendo la regla general fuera de zonas tensionadas, pero el recargo ya está en el 72.4 bis, no en el 72.4.
  - **21.142 (examen 2026) → sigue bien.** Ya está actualizada con el 72.4 bis.
  - Las del 72.1 (tipos 0,4 % y 1,10 %) siguen bien, porque el apartado 1 no cambia.

### Art. 107: coeficientes de la plusvalía (IIVTNU)

- **Norma:** RDL 29/2026, art. 10. BOE del 07/10/2026. Coeficientes «Con efectos desde el 1 de diciembre de 2026». El texto del 107.4 no cambia: el BOE consolida la tabla nueva y deja la anterior como «Redacción anterior».
- **Antes → ahora (coeficiente máximo):**

  | Años | <1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | ≥20 |
  |---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
  | hasta 30/11/2026 | 0,15 | 0,15 | 0,14 | 0,14 | 0,16 | 0,18 | 0,19 | 0,20 | 0,19 | 0,15 | 0,12 | 0,10 | 0,09 | 0,09 | 0,09 | 0,09 | 0,10 | 0,13 | 0,17 | 0,23 | 0,40 |
  | desde 01/12/2026 | 0,17 | 0,16 | 0,16 | 0,17 | 0,17 | 0,19 | 0,21 | 0,23 | 0,24 | 0,25 | 0,22 | 0,18 | 0,14 | 0,12 | 0,11 | 0,11 | 0,11 | 0,11 | 0,13 | 0,20 | 0,30 |

  Cita: «Igual o superior a 20 años. 0,30» (art. 10 RDL 29/2026).
- **Revisadas:** 5 (12.200, 12.209, 12.210, 12.211 y 21.107).
- **Decisión:**
  - **12.210 → respuesta.** Para 20 años o más, la correcta pasa de 0,40 a **0,30**. Se cambia el texto de esa opción y se mantienen los tres distractores (0,20, 0,23 y 0,15). Ninguno coincide con el nuevo coeficiente de 20 años; el 0,20 es ahora el de 19 años.
  - Las del 107.1 (periodo máximo de veinte años) siguen bien.

### Disposición adicional decimosexta: inversión financieramente sostenible

- **Norma:** RDL 13/2026, disposición final 2. BOE del 03/06/2026; en vigor desde el 04/06/2026.
- **Antes:** el apartado 5 hablaba de proyectos que no pudieran ejecutarse «íntegramente en 2014», con cargo al «remanente de tesorería de 2014».
- **Ahora:** el apartado 5 vale para cualquier ejercicio («en aquel ejercicio», «en el siguiente ejercicio»). Además, añade:
  > «Asimismo, las corporaciones locales podrán aprobar mediante acuerdo del Pleno la tramitación de una inversión financieramente sostenible como un gasto plurianual.»
- **Revisadas:** 0. No hay ninguna pregunta sobre esta disposición. La búsqueda de «decimosexta», «superávit» y «financieramente sostenible» da 12 preguntas, pero todas son de otros preceptos: usan esas palabras como distractor o en otro contexto.

## TREBEP (RDLeg 5/2015), art. 49: permisos

- **Norma:** Ley 4/2026, disposición final 11. BOE del 03/10/2026; **la letra e) cambia desde el 23/10/2026**.
- **Antes:** en el permiso por cuidado de hijo con cáncer o enfermedad grave, la reducción de jornada llegaba hasta los 23 años, o hasta los 26 con discapacidad del 65 % acreditada antes de los 23.
- **Ahora:** se añaden dos párrafos:
  > «No obstante lo anterior, excepcionalmente cuando la persona a cargo se encuentre en situación de gran discapacidad o gran dependencia que requiera cuidados directos, continuos y permanentes, el derecho a la reducción de jornada podrá prorrogarse más allá de los límites de edad previstos, mientras persista la necesidad de cuidado debidamente acreditada y se mantenga la convivencia con la persona beneficiaria del permiso.»
  >
  > «Asimismo, en estos supuestos de especial intensidad asistencial, ambos progenitores [...] excepcionalmente podrán compartir el porcentaje de reducción de jornada hasta el máximo de 100% entre los dos progenitores [...]»
- **Revisadas:** 2 que citan el art. 49 (17.54 y 17.62). También se buscaron por contenido: cáncer, enfermedad grave, semanas, nacimiento, monoparentalidad, permiso parental y violencia de género.
- **Decisión:** las dos siguen bien. **No hay ninguna pregunta sobre el contenido del art. 49**: ni sobre la letra e) ni sobre las 19 semanas del RDL 9/2025. El esquema del tema 17 ya recoge el cambio de la letra e).

## Ley 38/2003, General de Subvenciones, art. 2

- **Norma:** Ley 4/2026, disposición final 7. **En vigor desde el 23/10/2026**.
- **Antes:** el art. 2.4 acababa en la letra i), sobre ayudas a víctimas de violencia de género y sexual.
- **Ahora:** se añade
  > «j) Las ayudas económicas de emergencia o urgencia social gestionadas por las administraciones competentes a través de los servicios sociales, destinadas a cubrir necesidades básicas de la ciudadanía.»

  Estas ayudas no tienen carácter de subvención.
- **Revisadas:** 1 (11.70, que cita el concepto del art. 2.1).
- **Decisión:** sigue bien. No hay preguntas sobre el art. 2.4.

## Ley 33/2003, del Patrimonio, disposición adicional vigésima

- **Norma:** RDL 29/2026, art. 11. BOE del 07/10/2026; en vigor desde el 08/10/2026. Está pendiente de convalidación (ver el aviso de arriba).
- **Antes:** «Régimen patrimonial de SEPES».
- **Ahora:** «Régimen patrimonial de CASA 47 Entidad Pública Empresarial». Además, se limita el precio de venta de sus viviendas: «no podrá superar la cantidad resultante de aplicar a la superficie registral de la vivienda el módulo más alto de los contemplados en la legislación en materia de vivienda protegida de la comunidad autónoma».
- **Revisadas:** 0. Ninguna pregunta menciona SEPES, CASA 47 ni esta disposición.

## Tema 21 (exámenes oficiales)

Se han revisado las del tema 21 que tocan estos artículos: 21.11, 21.96, 21.107, 21.139, 21.141 y 21.142. Ninguna cambia.
La 21.142 (recargo por vivienda desocupada) ya explica el traslado al 72.4 bis.

**Ojo, incoherencia con el esquema del tema 12.** El esquema (`data/esquemas/aux-admin-zaragoza/t12.js`, bloque de exámenes) dice que en esa pregunta «la plantilla da "ninguna es correcta"». En cambio, la pregunta 21.142 del banco, corregida hoy según la plantilla, da por buena «hasta el 50 por ciento». Uno de los dos está mal: hay que mirar la plantilla oficial y alinear el esquema.

## Cómo se ha buscado

- Se usó el banco tal como lo carga la app: `cargarOposicion("aux-admin-zaragoza")`, 5.745 preguntas en 22 temas.
- Primero, las preguntas que citan cada artículo en `fuente`.
- Después, búsqueda por contenido en enunciado, opciones, explicación y fuente: «competencias propias», «25.2», «accesibilidad universal», «más amplia información», «92 bis», «libre designación», «concurso unitario», «recargo», «desocupad», «IBI», «plusvalía», «IIVTNU», «coeficiente», «periodo de generación», «financieramente sostenible», «cáncer», «enfermedad grave», «semanas», «permiso», «carácter de subvención», «emergencia», «SEPES», «CASA 47»…
- Cada coincidencia se revisó a mano contra el texto del BOE.
