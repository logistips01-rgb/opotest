# Revisión independiente · cambios normativos de octubre de 2026

Revisor distinto del redactor. Comprobación hecha el **22-oct-2026** sobre `lotes/normativa/revision-2026-10.json` (9 entradas) y su informe.

Entregable: `lotes/normativa/revision-2026-10.revisado.json`, con **9 entradas aprobadas, 4 de ellas con cambios**. No se ha tocado ningún archivo de datos ni se ha hecho commit.

## Fuentes consultadas (BOE)

- **LBRL** (BOE-A-1985-5392), API de legislación consolidada: bloques `a25`, `a26`, `a69` y `a85`, con todas sus versiones; además, el índice y los bloques `tii`, `ci-2`… `civ`, `tv`, `civ-2` y `cv`.
- **TRLRHL** (BOE-A-2004-4214): bloques `a72`, `a75` y `a107`, con todas sus versiones.
- **Ley 4/2026, de 1 de octubre** (BOE-A-2026-20528), texto del diario:
  - BOE núm. 246, de 03-10-2026;
  - `fecha_vigencia` 20261023;
  - disposición final 3.ª, uno (25.2 q) y dos (69.1);
  - disposición final 28.ª: «La presente ley entrará en vigor a los veinte días de su publicación en el «Boletín Oficial del Estado»».
- **RDL 29/2026, de 6 de octubre** (BOE-A-2026-20823): publicado el 07-10-2026 y en vigor el 08-10-2026 (disposición final 11.ª). Se han leído el art. 8 (art. 72 TRLRHL) y el art. 10 (coeficientes del IIVTNU).
- **Resolución de 2-oct-2026** (BOE-A-2026-20526): derogación del RDL 26/2026.

### Estado del RDL 29/2026

**Sigue en vigor y sin convalidar** a 22-oct-2026. Lo he comprobado de tres formas:

1. `estatus_derogacion` = N en sus metadatos.
2. En sus «referencias posteriores» solo figura el RDL 28/2026 («SE DICTA EN RELACIÓN»), tanto en el XML del diario como en `/analisis` de la API consolidada.
3. Repasé los sumarios del BOE del 8 al 22-oct-2026. Recogen las convalidaciones de los RDL 24/2026 y 25/2026, pero nada sobre el 29/2026.

El plazo del art. 86.2 CE («en el plazo de los treinta días siguientes a su promulgación») termina a primeros de noviembre de 2026.

- Las dos explicaciones afectadas (12.117 y 12.210) dicen expresamente que el cambio procede del «Real Decreto-ley 29/2026, de 6 de octubre». **Cumplen.**
- **Si el Congreso lo deroga, hay que deshacer ambas, igual que con el RDL 26/2026.** Lo mismo vale para la explicación de la 21.142, que ya está en el banco y también se apoya en el RDL 29/2026.

## Veredictos

| # | Pregunta | Acción propuesta | Veredicto |
|---|---|---|---|
| 0 | 15.150 · art. 69.1 LBRL | respuesta | **Aprobada** |
| 1 | 14.288 · accesibilidad / 25.2 a) y q) | explicación | **Aprobada con cambios** (opción correcta y explicación) |
| 2 | 12.117 · recargo del IBI | explicación | **Aprobada con cambios** (enunciado, explicación) |
| 3 | 12.210 · coeficiente del IIVTNU ≥ 20 años | respuesta | **Aprobada** |
| 4 | 14.8 · cementerios / alumbrado | respuesta | **Aprobada con cambios** (errata del enunciado) |
| 5 | 14.287 · ordenanza de cementerios, letra k) | respuesta | **Aprobada** |
| 6 | 14.92 · «vías urbanas» | retirar | **Aprobada con cambios** (resumen) |
| 7 | 14.7 · 25.2 b) | explicación | **Aprobada** |
| 8 | 11.74 · 25.2 y 85 | explicación | **Aprobada con cambios** (fuente) |

**Convención nueva para quien aplique:** si `nuevo` trae `q`, hay que sustituir el enunciado. El `q` de primer nivel sigue siendo el enunciado actual, que sirve para localizar la pregunta. En la 12.117 la acción pasa a `"enunciado"`: cambian el enunciado, la explicación y la fuente, y la respuesta y su índice no cambian.

He simulado en memoria la aplicación sobre `cargarOposicion("aux-admin-zaragoza")` y todo cuadra:

- las 9 preguntas se localizan;
- `antes_respuesta` coincide;
- solo cambia el texto de la opción correcta;
- no hay opciones repetidas;
- el `q` nuevo no choca con otro enunciado;
- ninguna explicación se refiere a una opción por su letra.

Todas las citas entre «» de las explicaciones nuevas son literales del texto consolidado vigente. Hay dos excepciones, ambas correctas: el «todos los ciudadanos» del 69.1 anterior, que la explicación presenta como redacción antigua, y la disposición final 28.ª de la Ley 4/2026.

---

### 0 · 15.150 · «Según el art. 69.1 de la LBRL, las Corporaciones locales facilitarán:» → APROBADA

- **Enunciado:** coincide exactamente (índice 150 del tema 15).
- **Opción correcta nueva:** coincide con el texto vigente desde el 23-10-2026: «1. Las Corporaciones locales facilitarán la más amplia información sobre su actividad y la participación de toda la ciudadanía en la vida local. A tal fin la información se ofrecerá en formatos accesibles, siguiendo las reglas marcadas por el principio del diseño universal, de manera que resulten comprensibles para todas las personas.» (art. 69.1 LBRL; versión BOE-A-2026-20528, `fecha_vigencia` 20261023; «Se modifica el apartado 1 por la disposición final 3.2 de la Ley 4/2026»).
- **Redacción anterior:** «la participación de todos los ciudadanos» (versión de 1985).
- **Distractores:** siguen siendo claramente falsos.
- **Fuente y fechas:** correctas.

### 1 · 14.288 · ordenanzas de accesibilidad → APROBADA CON CAMBIOS

- La letra q) existe y está en vigor desde el 23-10-2026: «q) Promoción de actuaciones en materia de igualdad de oportunidades, no discriminación y accesibilidad universal de las personas con discapacidad.» (art. 25.2 q) LBRL; disp. final 3.1 de la Ley 4/2026). La respuesta (urbanismo) sigue siendo la única correcta.
- **Cambio 1: texto de la opción correcta.** Decía «competencia propia municipal de **ordenación, gestión, ejecución y disciplina urbanística** (art. 25.2 a LBRL)». Esa es la redacción de 1985, y entonces era la letra **d)**: «d) Ordenación, gestión, ejecución y disciplina urbanística; promoción y gestión de viviendas…».
  - El 25.2 a) vigente desde la Ley 27/2013 dice: «a) Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística.»
  - El redactor lo vio y lo dejó como «detalle menor», pero atribuye al 25.2 a) unas palabras que no tiene.
  - Nueva opción, en el mismo índice 3: «Se enmarcan dentro de la competencia propia municipal de urbanismo: planeamiento, gestión, ejecución y disciplina urbanística (art. 25.2 a LBRL), desarrollando exigencias de accesibilidad universal». La acción pasa a `respuesta`.
- **Cambio 2: explicación.** «que también ampara estas ordenanzas» es una afirmación interpretativa que la ley no hace. Se cambia por «directamente relacionada con estas ordenanzas».

### 2 · 12.117 · recargo del IBI por vivienda desocupada → APROBADA CON CAMBIOS

Lo que la propuesta afirma, comprobado contra el BOE:

- La cita del 72.4 bis es literal.
- Vigencia: «Con efectos para los períodos impositivos que se inicien a partir de la entrada en vigor de este Real Decreto-ley y con vigencia indefinida» (art. 8 RDL 29/2026). En el consolidado: «con efectos para los periodos impositivos que se inicien a partir del 8 de octubre de 2026».
- «2. El período impositivo coincide con el año natural.» (art. 75.2). Por tanto, el cambio se aplica desde el IBI de 2027.
- Fuera de las zonas tensionadas, el régimen es idéntico al de la Ley 12/2023: lo comparé con la versión BOE-A-2023-12203.
- El 72.4 ter se refiere a alojamientos turísticos.

**Error de la propuesta.** Solo cambiaba la explicación y dejaba el enunciado «**según el art. 72.4 TRLRHL**».

- En el texto consolidado vigente, el art. 72.4 ya **solo** regula los tipos diferenciados por usos: «4. Dentro de los límites resultantes… excluidos los de uso residencial, tipos diferenciados…». El recargo está en el 4 bis.
- Además, en zonas tensionadas la opción marcada dejaría de ser cierta. Allí, con más de dos años, ya cabe el 100 % («En el caso de titulares de cuatro o más inmuebles de uso residencial, este recargo podrá ser de hasta el 100 por ciento»). Con más de tres años, se suman hasta 50 puntos más.

**Cambios:**

- **Nuevo enunciado** (`nuevo.q`): cita el «art. 72.4 bis TRLRHL» y se limita a «municipios que no estén en una zona de mercado residencial tensionado». Respuesta e índice sin cambios.
- **Explicación completada:**
  - en zona tensionada, recargo de hasta el 50 % para cualquier titular;
  - fuera de ella, hasta 50 puntos más para titulares de dos o más inmuebles desocupados en el mismo término municipal (párrafo 4.º del 72.4 bis).
  - Sigue mencionando el RDL 29/2026, de 6 de octubre.

### 3 · 12.210 · coeficiente máximo para ≥ 20 años → APROBADA

- El art. 10 del RDL 29/2026 dice: «Con efectos desde el 1 de diciembre de 2026, los importes máximos de los coeficientes… serán los siguientes: … Igual o superior a 20 años. 0,30».
- El consolidado del 107.4 ya muestra 0,30, y el 0,40 aparece como «Redacción anterior». Esa redacción es la tabla del RDL 8/2023, porque las del RDL 9/2024 y el RDL 16/2025 quedaron sin efecto al ser derogados.
- La tabla completa del informe del redactor coincide, casilla por casilla, con el BOE.
- **Distractores** (0,20, 0,23 y 0,15): ninguno es el de 20 años o más. El 0,20 corresponde ahora a 19 años y el 0,23 a 7 años, pero el enunciado pregunta solo por 20 años o más.
- **Explicación:** menciona el RDL de octubre de 2026 y la cita «serán actualizados anualmente mediante norma con rango legal» es literal.

### 4 · 14.8 · «también es competencia propia municipal» → APROBADA CON CAMBIOS

- **Fondo, correcto:**
  - el alumbrado público estaba en la letra l) de 1985 («Suministro de agua y alumbrado público…») y desapareció del 25.2 con la Ley 27/2013 (BOE 30-12-2013, en vigor el 31-12-2013);
  - hoy está en el 26.1 a): «a) En todos los Municipios: alumbrado público, cementerio, recogida de residuos…»;
  - los cementerios están en la letra «k) Cementerios y actividades funerarias.».
- **Cambio:** el enunciado dice «del LBRL». Se corrige a «de la LBRL» con `nuevo.q`; no choca con ningún otro enunciado.

### 5 · 14.287 · ordenanza de cementerios → APROBADA

«j) Protección de la salubridad pública. k) Cementerios y actividades funerarias.» (25.2 vigente). En 1985 era «j) Cementerios y servicios funerarios», que es de donde venía el error. Opción, explicación y fuente son correctas. La explicación habla de la letra j) del artículo, no de ninguna opción.

### 6 · 14.92 · «policía local, ordenación del tráfico… en:» → RETIRADA APROBADA, CON CAMBIOS EN EL RESUMEN

**Confirmo que no tiene arreglo.**

- Hoy: «f) Policía local, protección civil, prevención y extinción de incendios.» y «g) Tráfico, estacionamiento de vehículos y movilidad. Transporte colectivo urbano.». Ninguna habla de «vías urbanas».
- La opción correcta no está, por tanto, en el 25.2, y ninguna otra opción puede ocupar su lugar. Arreglarla exige otra pregunta, con otro enunciado y otra respuesta.

**Dos imprecisiones del redactor, corregidas en el `resumen`:**

- El enunciado no «reproduce la redacción anterior a 2013»: la mezcla con la actual. En 1985 no figuraba «policía local» en el 25.2: la a) era «Seguridad en lugares públicos» y la b) «Ordenación del tráfico de vehículos y personas en las vías urbanas».
- «La f) y la g) ya las preguntan otras (14.167 y 16.36)» solo es cierto para la f). La 16.36 trata del tipo de ordenanza y solo cita la g) en la explicación. **La letra g) se queda sin pregunta directa en el tema 14**; conviene crear una.

Según PROCEDIMIENTO.md (punto 6), retirar significa archivar en `data/reserva/`, no borrar.

### 7 · 14.7 · medio ambiente urbano → APROBADA

La explicación nueva coincide literalmente con el texto: «b) Medio ambiente urbano: en particular, parques y jardines públicos, gestión de los residuos sólidos urbanos y protección contra la contaminación acústica, lumínica y atmosférica en las zonas urbanas.». La opción correcta es un resumen fiel.

### 8 · 11.74 · relación entre el 25.2 y el 85 → APROBADA CON CAMBIOS

- **Explicación, correcta:**
  - «c) Abastecimiento de agua potable a domicilio y evacuación y tratamiento de aguas residuales.»
  - la gestión de residuos está en la b) y los cementerios en la k);
  - el alumbrado está en el 26.1 a);
  - «1. Son servicios públicos locales los que prestan las entidades locales en el ámbito de sus competencias.» (art. 85.1).
- **Cambio:** la explicación cita el 26.1 a), pero la `fuente` no lo recogía. La nueva fuente es: «Art. 25.2, art. 26.1 a) y art. 85.1 LBRL (Ley 7/1985)».

---

## Preguntas que faltan en la propuesta

Las he buscado por contenido en los 22 temas, en enunciado, opciones, explicación y fuente. Términos usados:

- **art. 25:** «25.2», «competencias propias», «alumbrado», «cementerio», «funerari», «vías urbanas», «tráfico», «policía local», «salubridad», «disciplina urban», «residuos sólidos», «contaminación acústica», «accesibilidad universal», «discapacidad», «barreras arquitect», «igualdad de oportunidades», «no discriminación»;
- **art. 69:** «más amplia información», «vida local», «ciudadanía», «art. 69», «diseño universal», «formatos accesibles»;
- **IBI e IIVTNU:** «desocupad», «72.4», «recargo», «turístic», «plusvalía», «IIVTNU», «periodo de generación», «107.4», «0,40», «coeficiente máximo».

Fuera de las 9 de la propuesta, ninguna pregunta del IBI ni de la plusvalía necesita cambios. En la LBRL faltan estas:

### A · 14.93 → hay que cambiar la respuesta (mismo error que la 14.288)

- **Enunciado:** «Según el art. 25.2 de la LBRL, el municipio ejerce competencias propias en materia de protección de la salubridad pública y, entre otras, en:».
- **Problema:** la opción correcta, «Ordenación, gestión, ejecución y disciplina urbanística», es la letra d) de 1985. La propia explicación ya cita el texto vigente («Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística»), así que contradice a la opción.
- **Propuesta:** opción del índice 1 → «Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística». Explicación y fuente sin cambios. Error previo, de 2013.

```json
{"tema":14,"q":"Según el art. 25.2 de la LBRL, el municipio ejerce competencias propias en materia de protección de la salubridad pública y, entre otras, en:","accion":"respuesta","norma":"Ley 7/1985, Reguladora de las Bases del Régimen Local (LBRL)","articulo":"art. 25.2 a)","fecha_cambio":"2013-12-30","en_vigor":"2013-12-31","nuevo":{"options":["La regulación del sistema nacional de salud","Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística","La homologación de títulos universitarios de medicina","La gestión de hospitales de titularidad estatal"]},"antes_respuesta":"Ordenación, gestión, ejecución y disciplina urbanística","ahora_respuesta":"Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística","resumen":"Error antiguo: la opción correcta usaba la redacción de 1985 (letra d). Desde la Ley 27/2013, el 25.2 a) dice «Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística».","cita":"«a) Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística.» (art. 25.2 a) LBRL)"}
```

### B · 15.178 → hay que cambiar la respuesta (error de ubicación de los arts. 69 a 72)

- **Enunciado:** «Los artículos 69 a 72 de la LBRL, relativos a la información y participación ciudadanas, se ubican dentro de:».
- **Problema:** la opción correcta dice «El Capítulo IV del **Título II**…», pero el índice consolidado del BOE da otra cosa:
  - **Título II**, «El municipio», tiene solo cuatro capítulos: I Territorio y población, II Organización, III Competencias y IV Regímenes Especiales;
  - los arts. 69 a 72 forman el **Capítulo IV («Información y participación ciudadanas») del Título V («Disposiciones comunes a las Entidades locales»)**, entre el Capítulo III (arts. 63-68) y el Capítulo V, «Estatuto de los miembros de las Corporaciones locales» (arts. 73-78).
- El redactor revisó el bloque del art. 69, pero esta pregunta no está entre las 6 que lista. Es un error previo, no viene de la reforma.
- **Propuesta:**
  - la opción del índice 0 dice «Título V»;
  - los distractores se ajustan para que sigan siendo falsos y coherentes;
  - la explicación se corrige.

```json
{"tema":15,"q":"Los artículos 69 a 72 de la LBRL, relativos a la información y participación ciudadanas, se ubican dentro de:","accion":"respuesta","norma":"Ley 7/1985, Reguladora de las Bases del Régimen Local (LBRL)","articulo":"Título V, Capítulo IV","fecha_cambio":"1985-04-03","en_vigor":"1985-04-23","nuevo":{"options":["El Capítulo IV del Título V, rubricado 'Información y participación ciudadanas'.","El Título Preliminar de la Ley.","El Capítulo II del Título II, rubricado 'Organización'.","El Capítulo V del Título V, rubricado 'Estatuto de los miembros de las Corporaciones locales'."],"exp":"En el texto consolidado de la LBRL, los arts. 69 a 72 forman el Capítulo IV, «Información y participación ciudadanas», del Título V, «Disposiciones comunes a las Entidades locales». El Capítulo V de ese mismo título, «Estatuto de los miembros de las Corporaciones locales», empieza en el art. 73. El Título II («El municipio») tiene cuatro capítulos: Territorio y población, Organización, Competencias y Regímenes Especiales.","fuente":"LBRL (Ley 7/1985), Título V, Capítulo IV (arts. 69 a 72)"},"antes_respuesta":"El Capítulo IV del Título II, rubricado 'Información y participación ciudadanas'.","ahora_respuesta":"El Capítulo IV del Título V, rubricado 'Información y participación ciudadanas'.","resumen":"Error antiguo: los arts. 69 a 72 están en el Capítulo IV del Título V, no del Título II.","cita":"«TÍTULO V. Disposiciones comunes a las Entidades locales» … «CAPÍTULO IV. Información y participación ciudadanas» (índice consolidado de la LBRL, bloques tv y civ-2)"}
```

Nota: el distractor del índice 1 («El Título Preliminar de la Ley») es falso porque la LBRL no tiene Título Preliminar: empieza en el Título I. Lo mantengo.

### C · 14.292 → imprecisión menor (recomendable corregirla)

La opción correcta y la explicación atribuyen al «art. 25.2 f» la «protección civil y **prevención de riesgos**». La f) dice «Policía local, protección civil, prevención y extinción de incendios»: la «prevención de riesgos» no aparece.

**Propuesta:**

- **Opción del índice 0:** «Puede desarrollar, entre otras, la competencia propia municipal de protección civil (art. 25.2 f LBRL), estableciendo normas de seguridad y uso».
- **Explicación:** cambiar «protección civil y prevención de riesgos (art. 25.2 f LBRL)» por «protección civil (art. 25.2 f LBRL: «Policía local, protección civil, prevención y extinción de incendios»)».

### Revisadas que siguen bien

- **14.121 («¿Sobre cual… no ejerce, en todo caso, competencias?»):**
  - dos distractores usan nombres de 1985: «Protección del medio ambiente» y «Transporte público de viajeros»;
  - la respuesta, «Acreditación de nacionalidad», sigue siendo la única correcta, y la explicación ya traduce esos nombres a las letras b) y g) vigentes;
  - sin cambios.
- **Resto:** siguen bien 14.7 (aparte de la propuesta), 14.9, 14.68–14.70, 14.166–14.168, 14.170, 14.277, 14.285, 14.286, 14.289–14.291, 14.293, 14.295, 11.57, 11.67, 11.72, 11.75, 16.35 y 16.36; también 15.147, 15.151, 15.152, 15.176, 12.115, 12.116, 12.209, 12.211, 21.11, 21.107, 21.141 y 21.142.

Las propuestas A, B y C las he redactado yo. Según PROCEDIMIENTO.md (punto 4.3), deberían pasar por otra comprobación independiente antes de aplicarlas.

## Avisos para quien aplique

1. **Nuevo enunciado.** La 12.117 y la 14.8 traen `nuevo.q`. En `data/actualizaciones.js`, el campo `q` de la entrada debe llevar el enunciado **nuevo**, que es el que tendrá el banco.
2. **Retirada.** La 14.92 se archiva en `data/reserva/` y no se borra.
3. **Volver a mirar el RDL 29/2026 en noviembre.** Hay que repetir `node tools/vigilar-normas.js` y mirar sus «referencias posteriores» en el BOE. Si aparece «Acuerdo de derogación», hay que revertir la 12.117 (enunciado, explicación y fuente), la 12.210 (vuelve a 0,40) y el aviso de la 21.142.
