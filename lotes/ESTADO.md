# Estado de la campaña de ampliación

Objetivo: **500 preguntas mínimo por tema**, avanzando del tema 20 hacia atrás,
un tema por tanda y con parada entre temas.

El tema 21 queda **fuera del objetivo**: reproduce el examen oficial del
1-jun-2025 y rellenarlo con preguntas generadas destruiría lo que lo hace útil.

## Conversión de 3 a 4 opciones (temas 1, 6, 14, 16-20) — CERRADA (13-ago-2026)

Cierra el `⚠️ PENDIENTE` que arrastraba el proyecto desde el 11-ago-2026: las
**1.107 preguntas** que se quedaron en 3 opciones (por errores de formato de
distintas épocas) ya tienen su cuarta opción, verificada contra la misma
fuente legal que cada pregunta ya citaba — nunca inventada sin comprobar.

| Tema | Convertidas | Fuente(s) |
|---|---|---|
| 1, 6, 14 | 1 + 1 + 1 | sueltas, sin norma citada (conocimiento general verificado a mano) |
| 16 | 40 | LBRL (arts. 1-2, 49, 55-56, 22.2, 47.2, 70.2) y Título X/XI (arts. 127-141) |
| 17 | 340 | TREBEP íntegro |
| 18 | 241 | RD 365/1995 (Reglamento de Situaciones Administrativas) + TREBEP |
| 19 | 243 | LBRL, RD 128/2018, RD 896/1991, TREBEP, TRRL (RDLeg 781/1986) |
| 20 | 240 | LPRL, RD 486/1997, RD 488/1997, RD 39/1997 |

Mecánica: por cada tema se repartieron las preguntas en lotes de ~40 por
fuente legal, un agente "arreglador" por lote (sin revisor separado, dado que
la tarea es mucho más acotada que redactar una pregunta nueva: solo añadir un
distractor verificado, con las 3 opciones y la respuesta correcta ya fijas e
intocables). Después se aplicó un script (`patch-3opc.js`, en el scratchpad
de la sesión) que localiza cada pregunta por su texto exacto en el archivo
base o en cualquiera de los bloques `addQuestions` de la ampliación, y
sustituye el objeto entero por la versión de 4 opciones.

Hallazgos y correcciones de este pase:
- **Trampa de las URLs `/eli/.../con`**: la URL ELI de una ley sin el sufijo
  `/con` devuelve el *texto original* de su publicación, no el consolidado
  vigente — para la LBRL eso significa quedarse en el art. 120 y perder
  enteros los Títulos X y XI (arts. 121-141, añadidos por la Ley 57/2003),
  justo los que citaba buena parte del tema 16. Se detectó a tiempo (un
  agente avisó honestamente de que no encontraba esos artículos) y se
  volvió a descargar con `/con` antes de seguir; se aplicó ya desde el
  principio para TREBEP, RD 365/1995, RD 128/2018, RD 896/1991, TRRL, LPRL
  y los reglamentos de desarrollo de la LPRL.
- **Un error real corregido a mano**: en una pregunta del tema 16 ("¿cuál
  NO figura entre los criterios del art. 140.2 LBRL?"), el primer intento
  de distractor ("la intencionalidad del responsable") resultó no ser
  ajeno a la lista real cuando se verificó contra el texto — habría dejado
  la pregunta con dos respuestas correctas. Se sustituyó por un criterio
  real de la propia lista antes de aplicar el lote.
- Varios agentes señalaron con acierto un matiz al aplicar la regla
  "verifica que el distractor no aparece en la lista" a preguntas de tipo
  «¿cuál de las siguientes SÍ/NO figura...?»: cuando la propia respuesta
  correcta original ya es el elemento ajeno a la lista, el distractor
  nuevo debe ser precisamente un elemento *real* de la lista (no otro
  ajeno), para no acabar con dos candidatas a "la que falta". Se dejó
  constancia en cada caso en el campo `notaConversion` de la pregunta.
- Varios agentes en paralelo compartieron el mismo directorio de scratchpad
  y sus scripts temporales se sobrescribieron entre sí; ninguno afectó al
  entregable final porque cada agente validó su archivo de salida en el
  filesystem real antes de terminar, no contra el script potencialmente
  contaminado.
- Dos agentes de un mismo lote (tema 18, lotes A-F) fallaron a mitad por el
  límite semanal de la API; los archivos ya escritos en disco antes del
  corte se recuperaron sin relanzar nada (lote F completo), y solo hubo que
  relanzar los que no habían llegado a escribir su salida.

## Tema 7 · LPAC (IV): procedimiento común — PRIMERA VUELTA CERRADA

**259 preguntas** (de 100 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo el consolidado de la LPAC ya descargado.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Garantías e iniciación (arts. 53-69) | 39 | 0 | 0 (1 apartada por duplicado ya en el banco) |
| B | Ordenación e instrucción (arts. 70-83) | 40 | 0 | 0 |
| C | Terminación del procedimiento (arts. 84-95) | 40 | 0 | 0 |
| D | Tramitación simplificada y ejecución forzosa (arts. 96-105) | 40 | 0 | 0 |

Notas:
- Los lotes A, C y D llegaron con la correcta siempre en la posición 0
  (sesgo típico); se reequilibraron los tres antes de fusionar.
- El lote D detectó dos errores en el banco original (no de este lote):
  una pregunta titula el art. 97 LPAC como "Título ejecutivo" cuando el
  consolidado dice solo "Título"; otra titula el art. 105 como
  "Prohibición de interdictos" cuando es "Prohibición de acciones
  posesorias". Pendientes de corregir en una futura pasada sobre el banco
  original (mismo tipo de fallo que el art. 26.3 del tema 14 o los de
  numeración del tema 13, sin urgencia).
- El lote C encontró que el art. 85 LPAC tiene una tercera aparición en el
  documento (dentro de una disposición final que modifica la Ley de la
  Jurisdicción Social, nada que ver con la LPAC) que podría haber
  confundido a un script que tomara "la última aparición" sin comprobar
  el contexto — quedó documentado para tenerlo en cuenta en el futuro.

**Aprovechado para Policía Local**: las 259 preguntas se redujeron a 3
opciones y se volcaron al tema 4, sin agentes adicionales — 0 duplicadas.
Banco de Policía Local: de 2.820 a **3.079 preguntas**.

## Tema 1 · La Constitución — depurado contra las bases oficiales reales (12-ago-2026)

El usuario pidió comprobar si el tema 1 respeta el alcance real de la
convocatoria (preocupación: "no quiero que Alma estudie cosas que no
entran"). Hasta ahora nunca se había buscado el documento oficial de
Auxiliar Administrativo — a diferencia de Policía Local, para la que sí se
hizo desde el principio.

Encontrado: **BOPZ núm. 147, 30-jun-2025, Sección Quinta núm. 4779** (47
plazas de Auxiliar Administrativo), guardado en
`tools/temarios/bases-aux-admin-zaragoza-2025.pdf`. El Anexo I completo de
los 20 temas coincide casi perfectamente con la estructura que ya
teníamos — mismo orden, mismos temas — **salvo el tema 1**, cuyo enunciado
oficial es mucho más estrecho de lo asumido:

> «Tema 1. La Constitución española: elaboración y aprobación. Estructura
> y título preliminar. La Administración pública en la Constitución.
> Organización territorial del Estado en la Constitución: principios
> generales y Administración local.»

No incluye Título I (derechos y deberes), Corona, Cortes Generales, Poder
Judicial, Economía y Hacienda, Tribunal Constitucional ni reforma
constitucional. El banco de 500 preguntas de este tema (original, nunca
tocado por la campaña de agentes, sin cita de `fuente`) sí cubría todo
eso, típico de un temario genérico de "toda la Constitución".

Clasificadas las 500 contra el alcance oficial real:

| | Preguntas |
|---|---|
| Dentro de alcance (se quedan en el tema 1) | 230 |
| Fuera de alcance (archivadas en `data/reserva/`) | 260 |
| Dudosas, revisar a mano (`data/pendientes/`) | 10 |

Las 260 fuera de alcance no se han borrado — están en
`data/reserva/constitucion-fuera-alcance-aux-admin.json`, repartidas por
categoría (Corona, Cortes Generales, Poder Judicial, CCAA, Título I,
fuentes del derecho, Hacienda/TC/reforma) para poder reutilizarlas si
alguna otra oposición del proyecto (Policía Nacional, DGA) tiene esos
bloques en su propio temario — ver `data/reserva/README.md`.

Tema 1: de 500 a **230 preguntas**. Banco total de Auxiliar Administrativo:
de 5.077 a **4.807**.

Pendiente (decisión explícita del usuario, sin resolver todavía): si
auditar también los temas ya cerrados (9 al 20) contra la redacción
literal exacta de sus respectivos temas oficiales — hay al menos una
sospecha concreta sin confirmar en el tema 9 (Contratos), cuyo enunciado
oficial ("Competencias en materia de contratación en las Entidades
Locales. Normas específicas...") parece más centrado en lo local que la
mecánica general de la LCSP que se generó.

## Tema 8 · LPAC (V): revisión de actos — PRIMERA VUELTA CERRADA

**260 preguntas** (de 100 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo el consolidado de la LPAC ya descargado.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Revisión de oficio (arts. 106-111) | 40 | 0 | 0 |
| B | Principios generales de los recursos (arts. 112-120) | 40 | 0 | 0 |
| C | Recurso de alzada y reposición (arts. 121-124) | 40 | 0 | 0 |
| D | Recurso extraordinario de revisión y comparativas (arts. 125-126) | 39 | 1 | 0 |

Nota: el lote A llegó con la correcta siempre en la posición 0 (sesgo típico
de redacción manual); se reequilibró antes de fusionar, como en el tema 12.

**Aprovechado para Policía Local**: las 260 preguntas se redujeron a 3
opciones y se volcaron al tema 4 ("La Administración Pública en la
Constitución. La Ley 39/2015... y de la Ley 40/2015"), sin agentes
adicionales — 259 nuevas, 1 duplicada. Banco de Policía Local: de 2.561 a
**2.820 preguntas**.

## Tema 9 · Contratos del sector público — PRIMERA VUELTA CERRADA

**260 preguntas** (de 100 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo el consolidado de la LCSP ya descargado.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Ámbito, tipos de contratos, negocios excluidos (LCSP arts. 1-38) | 40 | 0 | 0 |
| B | Órgano de contratación, capacidad, prohibiciones, clasificación (arts. 61-98) | 39 | 1 | 0 |
| C | Objeto, precio, garantías, expediente y pliegos (arts. 99-130) | 40 | 0 | 0 |
| D | Procedimientos de adjudicación y DA 2ª (competencias locales) (arts. 131-177, DA 2ª) | 40 | 0 | 0 |

Notas:
- La corrección del lote B fue de precisión: el art. 64.2 LCSP fija un
  estándar de *apariencia* de conflicto de intereses ("que pudiera parecer
  que compromete"), no de compromiso efectivo; se corrigió el texto de la
  opción correcta para citarlo con exactitud, sin cambiar cuál es la
  respuesta correcta.
- **Sin equivalente en Policía Local**: su temario oficial (50 temas) no
  incluye ningún bloque de contratación pública, así que no hay
  importación cruzada para este tema.

## Tema 10 · Bienes de las entidades locales — PRIMERA VUELTA CERRADA

**310 preguntas** (de 150 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo los consolidados de LBRL, RBEL y LPAP ya descargados.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Concepto, clasificación y patrimonio (LBRL 79-83, RBEL 1-16) | 40 | 0 | 0 |
| B | Inventario, administración, prerrogativas (RBEL 17-73) | 40 | 0 | 0 |
| C | Disfrute y aprovechamiento (RBEL 74-108) | 39 | 1 | 0 |
| D | Enajenación y negocios patrimoniales (RBEL 109-119, LPAP 110-114/153-154) | 40 | 0 | 0 |

Notas:
- El lote B detectó que el procedimiento de desahucio administrativo vive
  en el Título II del RBEL (arts. 120 y siguientes), fuera de su bloque
  asignado (44-73, donde solo se menciona como potestad); no se redactaron
  preguntas sobre ese procedimiento para no inventar contenido fuera del
  rango verificado. Pendiente para una posible segunda ronda.
- La corrección del lote C fue de formato, no de contenido: una opción
  llevaba pegada la consecuencia jurídica del plazo, delatando la
  respuesta correcta por longitud; se recortó para igualar las 4 opciones.

**Aprovechado para Policía Local**: las 310 preguntas se redujeron a 3
opciones y se volcaron al tema 6 ("Bienes de las Entidades locales.
Reglamentos y Ordenanzas locales"), sin agentes adicionales — 0 duplicadas.
Banco de Policía Local: de 2.251 a **2.561 preguntas**.

## Tema 11 · Actividad de las entidades locales — PRIMERA VUELTA CERRADA

**260 preguntas** (de 100 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo los consolidados de LBRL y LRJSP ya descargados.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Intervención administrativa: licencias, declaración responsable (arts. 84, 84 bis, 84 ter LBRL) | 40 | 0 | 0 |
| B | Servicios públicos locales: formas de gestión, iniciativa económica (arts. 85, 85 bis, 85 ter, 86 LBRL) | 40 | 0 | 0 |
| C | Mancomunidades y consorcios (art. 44 LBRL; arts. 118-127 LRJSP) | 40 | 0 | 0 |
| D | Potestad sancionadora en abstracto, medios de intervención (arts. 4.1, 84.1 LBRL) | 40 | 0 | 0 |

Notas:
- El lote C detectó que el art. 87 LBRL (consorcios) está derogado desde el
  2-oct-2016 por la Ley 40/2015; solo se hizo una pregunta sobre ese hecho,
  el resto del bloque de consorcios se redactó directamente sobre la LRJSP
  (arts. 118-127), que es donde vive ahora esa materia.
- Los revisores de los lotes C y D terminaron su verificación pero
  chocaron contra el **límite semanal de la API** (reinicio 2h UTC) justo
  al escribir el archivo final; ambos habían guardado el `.revisado.json`
  completo en disco antes del corte, así que no se perdió nada — se
  fusionaron igual sin relanzar ningún agente.
- No hay tema compatible en Policía Local para este contenido (su temario
  no tiene un bloque equivalente a "actividad de las entidades locales"
  en los temas 1-10), así que no se ha hecho importación cruzada.

## Tema 12 · Haciendas Locales I: recursos, tributos e impuestos municipales — PRIMERA VUELTA CERRADA

**340 preguntas** (de 100 que había), todas de 4 opciones. Primer tema
generado con las dos medidas de ahorro pedidas explícitamente: **4 lotes en
vez de 6** y **una sola descarga compartida** del TRLRHL para los 4
redactores (en vez de que cada uno la repitiera).

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas | Llamadas de herramienta (redactor) |
|---|---|---|---|---|---|
| A | Tributos: normas generales, ordenanzas fiscales, tasas (arts. 6-27) | 40 | 0 | 0 | 21 |
| B | Contribuciones especiales, recargos, participación, precios públicos (arts. 28-47) | 40 | 0 | 0 | 9 |
| C | IBI e IVTM (arts. 60-77, 92-99) | 40 | 0 | 0 | 15 |
| D | IAE, ICIO, IIVTNU (arts. 78-91, 100-103, 104-110) | 40 | 0 | 0 | 10 |

Media de 14 llamadas de herramienta por redactor, frente a las 20-40 de
rondas anteriores (p. ej. tema 14: 21-42). El ahorro viene sobre todo de no
repetir el curl + troceo de HTML por cada agente: se descargó una vez el
consolidado a `tools/temarios/_trlrhl-consolidado.txt` (excluido de git,
ver `.gitignore`) y los 4 redactores y los 4 revisores leyeron ese mismo
archivo, verificando cada uno de forma independiente sobre él.

Notas:
- El redactor B detectó que la numeración de `fuentes.json` para este tema
  estaba desplazada en un artículo (art. 38 = impuestos y recargos, no
  contribuciones especiales; art. 39 = participación, no recargos); se
  corrigió en el propio archivo con la numeración real verificada por dos
  agentes independientes.
- El revisor D verificó con cuidado extra los arts. 103.2 (ICIO) y 107.4
  (IIVTNU/plusvalía), que han tenido varias modificaciones por RDL con
  derogación parlamentaria posterior en 2025-2026; confirmó que las
  preguntas usan la redacción vigente a día de la revisión.
- Título III (recursos de las provincias) y Títulos IV-V (otras entidades)
  quedaron fuera de esta ronda por decisión explícita de presupuesto;
  pendientes de una posible segunda ronda.

**Aprovechado para Policía Local**: los temas 12 (340) y 13 (340, cerrado
antes) se redujeron juntos a 3 opciones y se volcaron íntegros al tema 7 de
Policía Local ("Presupuesto. Régimen jurídico de los ingresos y gastos
locales"), sin agentes adicionales — 600 preguntas nuevas, 0 duplicadas.
Banco de Policía Local: de 1.651 a **2.251 preguntas**.

## Tema 6 · LPAC (III): actos administrativos — PRIMERA VUELTA CERRADA

**310 preguntas** (de 150 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo el consolidado de la LPAC ya descargado.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Requisitos y eficacia inicial (arts. 34-39) | 39 | 1 | 0 |
| B | Notificaciones I (arts. 40-43) | 40 | 0 | 0 |
| C | Notificaciones II y nulidad de pleno derecho (arts. 44-47) | 40 | 0 | 0 |
| D | Anulabilidad y comparativas con la nulidad (arts. 48-52) | 40 | 0 | 0 |

Notas:
- La corrección del lote A fue de una premisa falsa: una pregunta daba por
  hecho que el art. 38 LPAC "abre" el Capítulo II ("Eficacia de los actos")
  del Título III, cuando en realidad lo abre el art. 37
  ("Inderogabilidad singular"); se corrigió el enunciado y la explicación
  sin tocar la opción marcada como correcta (seguía siendo la rúbrica real
  del art. 38, "Ejecutividad").
- El redactor del lote C confirmó que el separador en `_lpac.txt` entre
  "Artículo" y el número es un espacio de no separación (U+00A0), no un
  espacio normal — un grep simple no encuentra el texto si no se tiene en
  cuenta.
- El revisor del lote D verificó también las remisiones cruzadas del art.
  52.2 (art. 39.3) y de los arts. 122.1/124.1 (plazos de recurso vía arts.
  106.1/107.2), no solo los artículos citados directamente.

**Aprovechado para Policía Local**: las 310 preguntas se redujeron a 3
opciones y se volcaron al tema 4 ("La Administración Pública en la CE. Ley
39/2015 y Ley 40/2015"), el mismo destino que los temas 7 y 8, sin agentes
adicionales — 310 nuevas, 0 duplicadas. Banco de Policía Local: de 3.079 a
**3.389 preguntas**.

## Tema 5 · LPAC (II): la actividad de las AAPP. Normas generales de actuación. Términos y plazos — PRIMERA VUELTA CERRADA

**260 preguntas** (de 100 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo el consolidado de la LPAC ya descargado.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Derechos, relación electrónica, lengua, registros (arts. 13-16) | 40 | 0 | 0 |
| B | Archivo, colaboración, comparecencia, responsabilidad, obligación de resolver, suspensión y ampliación (arts. 17-23) | 40 | 0 | 0 |
| C | Silencio administrativo, emisión de documentos, validez de copias, documentos aportados (arts. 24-28) | 40 | 0 | 0 |
| D | Términos y plazos (arts. 29-33) | 40 | 0 | 0 |

Notas:
- Antes de generar este tema se verificó contra el Anexo I oficial real
  (BOPZ núm. 147, p.108, `tools/temarios/bases-aux-admin-zaragoza-2025.pdf`)
  que el Título II de la LPAC (arts. 13-33) es exactamente el alcance del
  tema 5, y que las 100 preguntas ya existentes caían íntegramente dentro
  de ese rango — a diferencia del tema 1, aquí no hizo falta ninguna
  depuración.
- De paso se descubrió y corrigió un error propio: se intentó mover 29
  preguntas del tema 5 (arts. 13-16) al tema 4 pensando que eran del
  Título I ("los interesados"); al comprobar el cuerpo real de la LPAC se
  vio que arts. 13-16 son en realidad el arranque del Título II (Cap. I,
  "Normas generales de actuación") — el cambio se revirtió antes de
  lanzar ningún agente.
- El redactor del lote A encontró que el art. 13 completo y buena parte
  del art. 16 ya estaban exhaustivamente cubiertos por un lote antiguo
  etiquetado bajo el tema 15 ("Participación ciudadana"); evitó duplicar
  y concentró su lote en los ángulos y artículos (14, 15) menos
  explotados. Queda pendiente, sin urgencia, revisar si conviene
  reetiquetar ese contenido histórico del tema 15 al tema 5.
- El lote D detectó que el separador entre "Artículo" y el número en
  `_lpac.txt` es un espacio de no separación (U+00A0), no un espacio
  normal — hay que tenerlo en cuenta al usar grep sobre ese archivo.

**Aprovechado para Policía Local**: las 260 preguntas se redujeron a 3
opciones y se volcaron al tema 4, el mismo destino que los temas 6, 7 y 8,
sin agentes adicionales — 260 nuevas, 0 duplicadas. Banco de Policía
Local: de 3.389 a **3.649 preguntas**.

## Tema 4 · LPAC (I): los interesados en el procedimiento — PRIMERA VUELTA CERRADA

**260 preguntas** (de 100 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo el consolidado de la LPAC ya descargado.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Capacidad de obrar, concepto de interesado, representación (arts. 3-5) | 40 | 0 | 0 |
| B | Registros de apoderamientos, pluralidad y nuevos interesados (arts. 6-8) | 40 | 0 | 0 |
| C | Sistemas de identificación y de firma (arts. 9-10) | 40 | 0 | 0 |
| D | Uso de medios de identificación/firma y asistencia electrónica (arts. 11-12) | 40 | 0 | 0 |

Notas:
- Se verificó primero contra el Anexo I oficial (BOPZ núm. 147, p.108) que
  el tema 4 es el Título I de la LPAC (arts. 3-12); las 100 preguntas ya
  existentes caían dentro de ese rango salvo 13 sobre los arts. 1-2
  (Título Preliminar: objeto y ámbito de la Ley), que no forman parte de
  ningún tema explícito del temario. Se decidió no depurarlas — señal
  ambigua, mismo criterio que en el tema 9 — y se documentó la duda en
  `fuentes.json`.
- El redactor del lote C generó 41 preguntas por un desajuste en su reparto
  por apartado; descartó él mismo la que quedaba duplicada en enfoque
  antes de entregar el lote.

**Aprovechado para Policía Local**: las 260 preguntas se redujeron a 3
opciones y se volcaron al tema 4, el mismo destino que los temas 5, 6, 7 y
8, sin agentes adicionales — 260 nuevas, 0 duplicadas. Banco de Policía
Local: de 3.649 a **3.909 preguntas**.

## Tema 3 · El Estatuto de Autonomía de Aragón: título preliminar, organización institucional y clases de competencias — PRIMERA VUELTA CERRADA

**260 preguntas** (de 100 que había), todas de 4 opciones. 4 lotes de 40,
compartiendo el consolidado del Estatuto de Autonomía de Aragón (LO
5/2007, BOE-A-2007-8444) ya descargado.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Título Preliminar (arts. 1-10) y Título III "La Administración Pública en Aragón" (arts. 61-62) | 40 | 0 | 0 |
| B | Título II, Cap. I "Las Cortes de Aragón" (arts. 33-45) | 40 | 0 | 0 |
| C | Título II, Cap. II-IV: Presidente, Gobierno/Diputación General y Justicia de Aragón (arts. 46-60) | 40 | 0 | 0 |
| D | Título V "Competencias de la Comunidad Autónoma" (arts. 70-80) | 40 | 0 | 0 |

Notas:
- Antes de generar se verificó la estructura real de los 9 títulos del
  Estatuto y se comprobó que el título oficial del tema ("título
  preliminar, organización institucional... y clases de competencias") no
  menciona el Título I (derechos, arts. 11-31, que el banco ya excluía
  correctamente) ni el Título IV "La Justicia" (poder judicial en Aragón,
  arts. 63-69) — se instruyó explícitamente a los 4 redactores para que
  no tocaran esos dos títulos, y ninguno lo hizo.
- El lote A llegó con la correcta desequilibrada (12/12/9/7); se
  reequilibró antes de fusionar.
- El redactor del lote C señaló que el Capítulo III del Título II (arts.
  53-58) se titula realmente "El Gobierno de Aragón o la Diputación
  General de Aragón", no "La Administración" como decía el encargo — el
  rango de artículos era correcto, solo la etiqueta del encargo estaba mal.

**Aprovechado para Policía Local**: las 260 preguntas se redujeron a 3
opciones y se volcaron al tema 3 ("Organización territorial del Estado.
Estatuto de Aragón"), sin agentes adicionales — 260 nuevas, 0 duplicadas.
Banco de Policía Local: de 3.909 a **4.169 preguntas**.

## Tema 16 · Reglamentos y ordenanzas de los municipios — PRIMERA VUELTA CERRADA

**302 preguntas** (de 140 que había), todas de 4 opciones. 4 lotes, uno por
fuente legal, sobre los consolidados descargados con el sufijo `/con`.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Ley de Capitalidad de Zaragoza (Ley 10/2017), arts. 48-49 | 40 | 0 | 0 |
| B | TRRL (RDLeg 781/1986), arts. 55-58 | 40 | 0 | 0 |
| C | ROF (RD 2568/1986): Comisiones Informativas, dictamen y publicación | 40 | 0 | 0 |
| D | LBRL: arts. 4, 22, 47, 49 y 70.2 | 41 | 1 | 0 |

Notas:
- **Laguna real cubierta**: el tema no tenía ni una sola pregunta sobre los
  arts. 48-49 de la **Ley de Capitalidad**, pese a que el enunciado oficial
  del tema los menciona expresamente ("...y Reglamentos en la ley de
  capitalidad de Zaragoza"). El lote A se dedicó íntegro a esa laguna.
- **Error propio detectado por un agente**: al lanzar el lote B se le pasó
  una descripción equivocada de los arts. 57 y 58 del TRRL (sacada de una
  entrada antigua de `fuentes.json`). El redactor leyó el texto real, vio
  que no cuadraba y redactó lo correcto, avisando en su informe: el art. 57
  es **prescripción** de las infracciones (plazos del Código Penal para las
  faltas), no el régimen sancionador general; y el art. 58 es apremio en
  defecto de **pago voluntario**, no "de otro procedimiento". Se verificó a
  mano y se corrigió `fuentes.json`. El revisor confirmó después que
  ninguna de las 40 preguntas arrastraba el error.
- La única corrección del lote D fue de precisión: una pregunta sobre la
  competencia del Pleno para aprobar ordenanzas no acotaba el ámbito, y el
  art. 33.2.b) LBRL atribuye "en todo caso" esa misma competencia al Pleno
  de la **Diputación**, así que un distractor era defendible. El revisor
  abrió el enunciado con "En el ámbito municipal, …".
- Los 4 lotes cayeron más de una vez por límite de sesión y por un 529 del
  servidor. En dos casos el agente **ya había escrito su archivo en disco**
  antes de morir (lote F del tema 18 y lote D de este tema): se recuperaron
  sin relanzar nada, solo comprobando el disco antes de dar el trabajo por
  perdido.

**Aprovechado para Policía Local**: las 302 preguntas se redujeron a 3
opciones y se volcaron al tema 6 ("Bienes de las Entidades locales.
Reglamentos y Ordenanzas locales") — 262 nuevas y 40 rechazadas por estar
ya importadas en una ronda anterior. Banco de Policía Local: de 4.428 a
**4.690 preguntas**.

## Tema 2 · Igualdad y violencia de género — PRIMERA VUELTA CERRADA

**259 preguntas** (de 100 que había), todas de 4 opciones. 4 lotes de 40,
sobre tres fuentes distintas: la LO 3/2007, la Ley 4/2007 de Aragón y el II
Plan de Igualdad municipal.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | LO 3/2007, Título I "El principio de igualdad y la tutela contra la discriminación" (arts. 3-13) | 39 | 0 | 0 (1 apartada por duplicado ya en el banco) |
| B | Ley 4/2007 de Aragón, Cap. I "Disposiciones generales" (arts. 1-4) y Cap. IV Sección 1.ª "Centros de protección y apoyo" (arts. 18-23) | 40 | 0 | 0 |
| C | Ley 4/2007 de Aragón, Cap. IV Sección 2.ª "Servicios de protección y apoyo" (arts. 24-31) | 39 | 1 | 0 |
| D | II Plan de Igualdad del Ayuntamiento de Zaragoza (2024-2027): marco normativo/conceptual, ejes A-D, Comisión de Igualdad, Protocolo de acoso (Anexo II) | 40 | 0 | 0 |

Notas:
- El banco existente (100 preguntas) ya estaba muy bien acotado al alcance
  real del tema — a diferencia del tema 1, no hizo falta ninguna
  depuración. Se verificó explícitamente que el título oficial del tema
  solo cubre el Título I de la LO 3/2007 y, de la Ley 4/2007, solo el
  Cap. I y el Cap. IV — se instruyó a los redactores para que no tocaran
  los Caps. II, III ni V de la Ley 4/2007, ni el resto de títulos de la LO
  3/2007.
- Localicé y descargué el documento primario real del tercer bloque del
  tema — el "II Plan de Igualdad para empleadas y empleados del
  Ayuntamiento de Zaragoza (2024-2027)" (BOPZ n.º 16, 20-ene-2024,
  `tools/temarios/plan-igualdad-zaragoza-2024-2027.pdf`, 67 páginas),
  guardado de forma permanente como fuente oficial, igual que las bases
  de las convocatorias.
- El lote C tuvo una corrección de calidad: una pregunta usaba distractores
  de un tipo distinto al de la respuesta correcta (nombres de
  Departamentos frente a una finalidad), lo que la hacía adivinable por
  descarte; se sustituyeron los tres distractores por otras finalidades
  plausibles, sin tocar la opción correcta.

**Aprovechado para Policía Local**: las 259 preguntas se redujeron a 3
opciones y se volcaron al tema 31 ("Igualdad de género y violencia de
género"), sin agentes adicionales — 259 nuevas, 0 duplicadas. Banco de
Policía Local: de 4.169 a **4.428 preguntas**.

## Policía Local Zaragoza · importación de la Constitución desde Aux. Admin. (11-ago-2026)

Segunda importación cruzada, esta vez con conversión real de 4→3 opciones
(no era "gratis" como la de temas 16-20): el tema 1 de aux-admin-zaragoza
("La Constitución Española") tenía 500 preguntas de 4 opciones, sin `fuente`
(banco original, previo a la campaña de agentes). Se redujeron a 3 con
`tools/normalizar-opciones.js --reducir --aplicar` (elige el distractor
menos confundible, nunca al azar) y se clasificaron por Título/artículo de
la CE citado en el propio enunciado con `tools/importar-constitucion-a-policia.js`:

| Destino en Policía Local | Preguntas |
|---|---|
| Tema 1 · Constitución (Tít. Preliminar y I) | 249 |
| Tema 2 · Corona/Cortes/Gobierno/P. Judicial (Tít. II-VI) | 185 |
| Tema 3 · Organización territorial (Tít. VIII) | 49 |
| Descartadas (Tít. VII Hacienda, IX TC, X reforma: sin tema en Policía) | 16 |

De paso se corrigió un problema real que esto dejó al descubierto: al
aplicar la importación, el banco de Policía Local quedó con una mezcla de
1.587 preguntas de 3 opciones y las 64 originales del banco inicial que
seguían en 4 (nunca se habían reducido, porque hasta ahora nadie había
verificado que el examen real es de 3). Se corrigió reduciendo también esas
64 con la misma herramienta, así que **todo el banco de Policía Local está
ya, de forma consistente, en 3 opciones** — sin excepciones ni mezcla.

Bug encontrado y documentado en `normalizar-opciones.js`: si el archivo de
entrada empieza directamente con `window.addQuestions(` (sin ningún
carácter antes, ni un comentario), `--aplicar` no localiza bien el final de
la "cabecera" y duplica el contenido en vez de sustituirlo. Hay que empezar
siempre el archivo con un comentario en la primera línea. Quedó anotado en
la cabecera del propio script para no repetirlo.

Banco de Policía Local tras esta importación: **1.651 preguntas**.

## Policía Local Zaragoza · importación cruzada desde el atasco de 3 opciones de Aux. Admin. (11-ago-2026)

El examen de Policía Local Zaragoza resultó ser de **3 opciones**
(confirmado en `tools/temarios/policia-local-zaragoza.md`, base 8.4.C de las
bases generales TRBGTL). Esto convierte en aprovechable, sin tocar nada, el
contenido que quedó parado en Auxiliar Administrativo tras el error de
opciones: 1.104 preguntas de los temas 16-20 de esa oposición ya estaban
redactadas y revisadas en 3 opciones (solo eran "inválidas" para Auxiliar,
que necesita 4 — para Policía Local son perfectas tal cual).

Con `tools/importar-3opc-a-policia.js` (extrae y reparte por artículo citado)
y `tools/aplicar-importacion-policia.js` (reescribe el banco), se trasladaron
sin generar ni revisar nada nuevo:

| Origen (aux-admin-zaragoza) | Preguntas | Destino (policia-local-zaragoza) |
|---|---|---|
| Tema 16 · Reglamentos y ordenanzas | 40 | Tema 6 · Bienes EL y reglamentos/ordenanzas |
| Tema 17 · Empleados públicos I (TREBEP Tít. II-V) | 340 | Repartidas por artículo: T8 (clases, Tít. II y V), T9 (derechos/deberes, Tít. III), T10 (adquisición/pérdida, Tít. IV) |
| Tema 18 · Empleados públicos II (situaciones/disciplinario) | 241 | T9 (disciplinario, arts. 93-98) y T10 (situaciones, RD 365/1995 y arts. 85-92) |
| Tema 19 · Empleados públicos III (función pública local) | 243 | Tema 8 (íntegro; es el tema que en Policía cubre "el personal al servicio de las corporaciones locales") |
| Tema 20 · Prevención de Riesgos Laborales | 240 | Tema 10 (coincide literalmente con el enunciado de ese tema en Policía) |

**Total importado: 1.104 preguntas** (0 duplicados con lo que ya había).
Banco de Policía Local: de 64 a **1.168 preguntas**.

El banco de Auxiliar Administrativo **no se ha tocado**: sigue con sus 166
preguntas de 4 opciones (las ya recuperadas) intactas y sus ~1.104 preguntas
de 3 opciones de los temas 16-20 igual de "atascadas" que antes — esta
importación las copia, no las mueve. Cuando llegue la pasada de "añadir
cuarta opción" para Auxiliar, no afecta a lo ya copiado a Policía Local.

Aviso de calidad: el reparto por artículo (temas 17 y 18) es fiable porque
usa la cita `fuente`; el de los temas 16, 19 y 20 es "en bloque" (todo el
tema a un único destino), así que alguna pregunta suelta puede encajar mejor
en un tema de Policía distinto del asignado (p. ej., alguna de disciplina de
funcionarios con habilitación nacional del tema 19 quedó en el tema 8 en
lugar del 9). No se ha revisado pregunta a pregunta el encaje fino, solo el
patrón general — más una pasada de repaso si se detectan casos claramente
descolocados.

## Tema 13 · Haciendas Locales II: presupuesto, gasto público, tesorería, contabilidad y control — PRIMERA VUELTA CERRADA

**340 preguntas** (de 100 que había), todas de 4 opciones. Seis lotes de 40,
sobre el articulado completo del Título VI del TRLRHL (arts. 162 a 223),
revisados uno por uno.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | Presupuesto general (arts. 162-169) | 39 | 1 | 0 |
| B | Prórroga, créditos extraordinarios/suplementos, bajas (arts. 169.6-176) | 40 | 0 | 0 |
| C | Transferencias, generación, ampliaciones, incorporaciones (arts. 177-182) | 40 | 0 | 0 |
| D | Ejecución del gasto e ingreso, fases ADO (arts. 183-190) | 40 | 0 | 0 |
| E | Liquidación y remanente de tesorería, tesorería (arts. 191-199) | 40 | 0 | 0 |
| F | Contabilidad, Cuenta General, control y función interventora (arts. 200-219) | 40 | 0 | 0 |

Notas:
- Varios redactores señalaron, de paso, posibles citas desfasadas en el banco
  ORIGINAL (no en estos lotes nuevos): preguntas que atribuyen a "art. 200"
  contenido real del art. 205, a "art. 201" contenido del art. 203, a "art.
  175" contenido del art. 177, y a "art. 184-190" definiciones que no están en
  el TRLRHL (posiblemente de otra norma o desplazadas +1 artículo). Pendiente
  de una futura pasada de corrección del banco original — igual que la nota
  del art. 26.3 del tema 14 —, no urgente.
- La estructura real de capítulos del Título VI TRLRHL difiere de la
  paráfrasis inicial de `fuentes.json` (contabilidad es el Cap. III y control
  el Cap. IV, no VI/VII como se apuntaba); no afecta a las preguntas porque
  todas citan artículo/apartado, no número de capítulo.

Quedan 160 preguntas para llegar a 500: pendiente de segunda ronda si se
decide seguir profundizando en este tema.

## Tema 14 · El municipio: organización y competencias. Régimen especial de Zaragoza — CERRADO

**688 preguntas** (de 349 que había), todas de 4 opciones. Cuatro lotes de 40,
escritos leyendo el consolidado del BOE (o de la Ley 10/2017 en el caso de la
Ley de Capitalidad) y revisados uno por uno.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas | Apartadas (duplicado) |
|---|---|---|---|---|---|
| A | LBRL arts. 13-26 (municipio, organización, competencias) | 39 | 0 | 0 | 1 |
| B | LBRL arts. 24 bis, 45, 25-30, Título III (provincia) | 39 | 1 | 0 | 0 |
| C | Ley 10/2017 de régimen especial de Zaragoza (Ley de Capitalidad) | 40 | 0 | 0 | 0 |
| D | LBRL Título X (gran población) + CE arts. 137-142 | 34 | 0 | 0 | 6 |

Notas:
- Lote C identificó y verificó de forma independiente (dos veces: redactor y
  revisor) la identidad de la "Ley de Capitalidad" citada de forma genérica en
  el temario clásico: es la **Ley 10/2017, de 30 de noviembre**, publicada en
  BOA núm. 231 (01/12/2017) y también en BOE-A-2018-1683. Queda fijada en
  `fuentes.json` para no tener que re-verificarla en el futuro.
- Lote A verificó una modificación legal muy reciente (letra p) del art. 25.2
  LBRL sobre comunidades ciudadanas de energía, añadida por el Real
  Decreto-ley 7/2026, de 20 de marzo, en vigor desde el 22/03/2026) contra el
  consolidado real, de forma independiente por redactor y revisor: es
  correcta y verificable, no una alucinación.
- Lote A señaló, de paso, una posible cita desactualizada en el banco
  ORIGINAL (no en este lote): dos preguntas ya existentes citan "art. 26.3
  LBRL" para la propuesta de la Diputación al Ministerio de Hacienda, pero
  ese contenido está hoy en el art. 26.2. Pendiente de revisar en una futura
  pasada de corrección del banco original, no urgente.
- La primera tanda de redactores se relanzó tras perderse sin aviso (igual que
  pasó con el tema 15); esta vez no hubo pérdida, los cuatro lotes llegaron.

Con 688 preguntas ya se supera de sobra el objetivo de 500; no se ha
considerado necesaria una segunda ronda para este tema.

## Tema 15 · Participación ciudadana y atención al ciudadano — PRIMERA VUELTA CERRADA

**350 preguntas** (de 150 que había), todas de 4 opciones. Seis lotes de 40,
sobre tramos distintos del temario, escritos leyendo el consolidado del BOE
(o, en el caso del ROTPC, el texto municipal) y revisados uno por uno.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| F | CE arts. 20/105 + LO 3/2018 protección de datos | 40 | 0 | 0 |
| A | LBRL arts. 18, 69, 70, 70 bis, 72 | 40 | 0 | 0 |
| B | RD 208/1996 (información administrativa y atención al ciudadano) | 40 | 0 | 0 |
| C | LPAC arts. 13, 16, 53 | 40 | 0 | 0 |
| D | Ley 19/2013 transparencia, arts. 12-24 | 40 | 0 | 0 |
| E | ROTPC (huecos: Juntas Municipales, Consejos, sesiones, iniciativas) | 40 | 1 | 0 |

Notas:
- Lote B resolvió una identidad de norma que llevaba pendiente desde el tema
  17: el bloque clásico "información administrativa y atención al ciudadano"
  corresponde al **Real Decreto 208/1996, de 9 de febrero** (BOE-A-1996-4997,
  verificado por el redactor y re-verificado de forma independiente por el
  revisor vía el permalink ELI). Sus arts. 11-13 y el capítulo III completo
  (arts. 15-24, Libro de Quejas y Sugerencias) están derogados por el RD
  776/2011 y el RD 951/2005 respectivamente; ninguna pregunta los cita como
  vigentes.
- Lote E accedió al texto consolidado íntegro del ROTPC (117 artículos) vía
  `https://www.zaragoza.es/sede/servicio/normativa/109`, no boe.es. Queda
  documentado aquí como fuente válida para futuras rondas sobre este tema.
- La primera tanda de 5 lotes (A-E) se perdió sin aviso (agentes en segundo
  plano no reachables, sin fichero en disco) y hubo que relanzarla entera;
  quedó documentado para no repetir la espera pasiva sin comprobar el disco.

Quedan 150 preguntas para llegar a 500: pendiente de segunda ronda si se
decide seguir profundizando en este tema, o dejarlo así y continuar con el
siguiente cuando llegue su turno.

## Tema 20 · Prevención de Riesgos Laborales — PRIMERA VUELTA CERRADA

**263 preguntas** (de 23 que había), todas de 3 opciones y 260 con el artículo
citado. Seis lotes de 40, cada uno sobre un tramo distinto del articulado,
escritos leyendo el consolidado del BOE y revisados uno por uno.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | LPRL arts. 1-13 | 39 | 1 | 0 |
| B | LPRL arts. 14-22 | 40 | 0 | 0 |
| C | LPRL arts. 23-31 | 40 | 0 | 0 |
| D | LPRL arts. 32 bis-44 | 40 | 0 | 0 |
| E | RD 39/1997 completo | 40 | 0 | 0 |
| F | RD 486/1997 + RD 488/1997 | 40 | 0 | 0 |

**239 de 240 sin tocar, 1 corregida, 0 rechazadas.** La corrección estaba en la
explicación de una pregunta del art. 4.6.º: decía que la primera opción era el
equipo de protección individual cuando la primera opción era la respuesta
correcta. No hacía fallar la pregunta, enseñaba lo contrario de lo que pregunta.

Contraste con la ronda anterior, hecha con `boe.es` bloqueado: allí 3 de 59
tenían la cita mal atribuida. Leer el consolidado en vez de cruzar resúmenes de
búsqueda eliminó esa clase de error.

### Para llegar a 500 hay que decidir sobre las fuentes

Con 263 preguntas ya está cubierto el articulado preguntable de las cuatro
normas del tema. Una segunda vuelta sobre lo que los redactores dejaron sin
explotar (lista más abajo) puede dar unas 100-150 más sin repetirse, hasta
unas 400. Pasar de ahí con estas mismas fuentes significa preguntas cada vez
más finas y repetitivas.

Para 500 con calidad habría que **ampliar las fuentes del tema**, y eso depende
de lo que acote el temario oficial de la convocatoria. Candidatas, todas de
examen habitual:

- RD 485/1997, señalización de seguridad y salud
- RD 487/1997, manipulación manual de cargas
- RD 773/1997, equipos de protección individual
- RD 1215/1997, equipos de trabajo
- LISOS (RDLeg 5/2000), infracciones en materia de prevención
- Plan de prevención y normativa propia del Ayuntamiento de Zaragoza

### Material sin explotar para la segunda vuelta

Los redactores anotaron lo que no usaron:

- Lote A: arts. 5.2, 5.3, 6.1 letras a/b/c/e/f, 9.4, 10.a/c/d.
- Lote B: arts. 14.2 y 14.3, 15.1 letras a/c/e/f/g como preguntas de orden,
  15.4, 15.5, 16.2 bis (plan simplificado), 17.1.a, 21.1.c, 22.4.
- Lote C: arts. 23.1.a-d y 23.3, 24.6, 27.1 párr. 3.º, 28.3, 30.1, 30.3,
  31.4, 31.6.
- Lote D: arts. 33.1.a/d/f, 35.1, 36.2.b/d/e/f, 38.2 técnicos ajenos, 39.1.a,
  39.3, 40.1, 40.3, 41.1 párrs. 1.º y 4.º, 41.2, 43.3, D.A. 3.ª, 10.ª y 12.ª.
- Lote E: arts. 13, 17, 19, 20, 22, 24, 27, 31 bis, 32, 33, 34, 38-39 y
  anexos II, III, VII y VIII.
- Lote F: arts. 2, 5 y 11 del RD 486/1997, corrientes de aire, resto de la
  tabla de iluminación, locales de descanso y embarazadas, Anexo I.B), y los
  apartados de emisiones, ruido y calor del RD 488/1997.

### Datos verificados que conviene no perder

- La cuantía de 1.841.000 € del art. 23.f) del RD 39/1997 **sigue vigente**:
  viene del RD 899/2015 y ninguna norma posterior la ha modificado.
- Las exclusiones del RD 488/1997 están en el **art. 1.3**, no en el 1.2.
- El consolidado de la LPRL sigue llamando al organismo del art. 8 «Instituto
  Nacional de Seguridad e **Higiene** en el Trabajo», sin actualizar.
- Los arts. 45 a 52 de la LPRL y los apartados 2, 4 y 5 del art. 42 están
  derogados por el RDLeg 5/2000. Los apartados 1 y 3 del art. 42 siguen vigentes.
- El consolidado del RD 486/1997 no se sirve por `act.php?id=BOE-A-1997-8669`
  (502 cacheado): hay que usar `https://www.boe.es/eli/es/rd/1997/04/14/486/con`.

## Tema 19 · Función pública local — PRIMERA VUELTA CERRADA

**265 preguntas** (de 22 que había), todas de 3 opciones y 263 con el artículo
citado. Seis lotes de 40 (uno de 43), cada uno sobre un tramo distinto,
escritos leyendo el consolidado del BOE y revisados uno por uno.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | LBRL arts. 89-92 bis | 40 | 0 | 0 |
| B | RD 128/2018: subescalas y funciones | 40 | 0 | 0 |
| C | RD 128/2018: provisión y disciplina | 43 | 0 | 0 |
| D | LBRL arts. 93-104 bis | 40 | 0 | 0 |
| E | TRRL (RDLeg 781/1986), Título VII | 40 | 0 | 0 |
| F | RD 896/1991 + TREBEP en lo local | 40 | 0 | 0 |

**243 de 243 sin tocar, 0 corregidas, 0 rechazadas.** El tema con menos ruido de
toda la campaña hasta ahora, con dos comprobaciones de derogación resueltas
correctamente por los redactores sin intervención del revisor:

- Los arts. 158 a 166 del TRRL (funcionarios con habilitación de carácter
  nacional) están derogados desde 2015 por el TREBEP. El lote E salta
  deliberadamente del art. 157 al 167 sin tocar esa zona.
- Los arts. 98 y 99 de la LBRL (Capítulo III) están derogados por el mismo
  motivo. Ninguna pregunta del lote D se apoya en ellos.
- El RD 896/1991 sigue íntegro desde su publicación: no ha sido modificado ni
  derogado por el TREBEP ni por normativa posterior.
- El RD 128/2018 no tiene modificaciones desde su publicación de 2018.
- Ninguna pregunta depende de la autorización estatal de libre designación
  del art. 92 bis.6 LBRL que suprimió el RD-ley 13/2026: era un riesgo que se
  señaló expresamente y los redactores lo evitaron.

### Para llegar a 500

Con 265 preguntas está bien cubierto el articulado preguntable de las cinco
normas del tema (LBRL Título VII, TRRL Título VII, RD 128/2018, RD 896/1991 y
los preceptos locales del TREBEP). El lote B dejó anotado material sin usar
para una segunda vuelta (arts. 2.4, 3.2.g/k/l, 4.2.a/f/k, 8.3-8.4, 9.2-9.3,
10.2-10.3, 14.1-14.3, 15.2-15.4, 16.2-16.3, 25, 26, DA 4ª.2.b-c y 3ª, DA 5ª-7ª,
DT 6ª.1-2), suficiente para otros 25-30 sin repetirse. Como en el tema 20, ir
más allá con estas mismas fuentes significa preguntas cada vez más finas.

## Tema 18 · Situaciones administrativas y régimen disciplinario — PRIMERA VUELTA CERRADA

**262 preguntas** (de 22 que había), todas de 3 opciones y 260 con el artículo
citado. Seis lotes de 40, cada uno sobre un tramo distinto de TREBEP arts.
85-98 y RD 365/1995, escritos leyendo el consolidado del BOE y revisados uno
por uno.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | TREBEP arts. 85-87 | 40 | 0 | 0 |
| B | TREBEP arts. 88-90 | 40 | 0 | 0 |
| C | TREBEP arts. 93-95 (faltas, 17 letras) | 40 | 0 | 0 |
| D | TREBEP arts. 91, 92, 96-98 | 40 | 0 | 0 |
| E | RD 365/1995 arts. 1-13 | 40 | 0 | 0 |
| F | RD 365/1995 arts. 14-23 | 39 | 1 | 0 |

**239 de 240 sin tocar, 1 corregida, 0 rechazadas.** La corrección: una pregunta
sobre la duración de la excedencia por cuidado de hijos citaba el art. 14.1 del
RD 365/1995, pero ese precepto, en su literalidad, solo fija el nacimiento como
inicio del cómputo de los tres años — la mención a la resolución judicial de
adopción en el reglamento se refiere solo a cuándo puede *solicitarse*. La
opción que se daba por correcta coincide en cambio con el art. 89.4 TREBEP
vigente («a contar desde la fecha de nacimiento o, en su caso, de la
resolución judicial o administrativa»). Se trasladó la cita al TREBEP.

Este tema tenía un riesgo específico, distinto del de los temas 19 y 20: el RD
365/1995 es un reglamento de 1995 que puede haber quedado desplazado por el
TREBEP (2015), norma de rango legal posterior. Los redactores lo gestionaron
bien por su cuenta, sin necesitar que el revisor rechazara nada:

- El lote F detectó que el art. 14.1 del reglamento restringe el disfrute
  simultáneo de la excedencia por cuidado de hijos a que «solo uno» de los
  progenitores la ejerza, mientras que el art. 89.4 TREBEP vigente permite a
  la Administración *limitarlo* por razones justificadas, que es una regla
  distinta. El redactor no escribió ninguna pregunta sobre esa restricción.
- El lote E, sobre la clasificación de 11 situaciones del art. 2 del
  reglamento frente a las 5 del art. 85 TREBEP, formuló sus preguntas
  limitándose a «qué dice el reglamento» sin inducir a creer que esa
  clasificación de 1995 sigue vigente sin matices.
- El lote D corrigió el encargo original, que suponía que el art. 92 TREBEP
  trataba de remisión a leyes de Función Pública: el texto real regula las
  situaciones del personal laboral.

### Para llegar a 500

Con 262 preguntas está bien cubierto el articulado preguntable de las dos
normas del tema. Queda margen menor para una segunda vuelta (el lote F dejó
sin usar las disposiciones transitorias del reglamento, de escaso valor por
sus remisiones a la Ley 30/1984 con fechas de los años 80-90). Como en los
temas 19 y 20, llegar a 500 con estas mismas fuentes sería relleno.

## Tema 17 · Empleados públicos I: clases — PRIMERA VUELTA CERRADA

**340 preguntas** (de 100 que había, sin cita de fuente ninguna de ellas —
venían del banco original). Seis lotes de 40 sobre territorio de TREBEP que
las 100 preguntas originales no tocaban: retribuciones (huecos), negociación
colectiva, deberes y código de conducta, pérdida de la relación de servicio,
huecos del Título II y ordenación de la actividad profesional.

| Lote | Tramo | Confirmadas | Corregidas | Rechazadas |
|---|---|---|---|---|
| A | TREBEP arts. 21-30 (retribuciones, huecos) | 40 | 0 | 0 |
| B | TREBEP arts. 31-46 (negociación colectiva) | 40 | 0 | 0 |
| C | TREBEP arts. 52-54 (deberes y código de conducta) | 40 | 0 | 0 |
| D | TREBEP arts. 63-68 (pérdida de la relación de servicio) | 40 | 0 | 0 |
| E | TREBEP arts. 8-13 (huecos del Título II) | 40 | 0 | 0 |
| F | TREBEP arts. 69-84 (ordenación de la actividad profesional) | 40 | 0 | 0 |

**240 de 240 sin tocar, 0 corregidas, 0 rechazadas.** El tema con menos ruido
de la campaña, igualado con el 19. Dos autocorrecciones de numeración de
capítulo, sin afectar al contenido: el tramo de negociación colectiva es el
Capítulo IV del Título III (no el V, como decía el encargo original), y el de
retribuciones el Capítulo III (mismo error). El lote F confirmó que el Título
V comprende los arts. 69 a 84 en tres capítulos (planificación de RRHH,
estructuración del empleo público, provisión y movilidad).

Con 340 preguntas, **este tema todavía no llega a 500**: quedan 160. A
diferencia de los temas 18-20, aquí sí queda margen real dentro de las mismas
fuentes, porque el propio TREBEP es una ley larga y varios lotes dejaron
material sin explotar (el lote B, por ejemplo, dejó sin usar buena parte del
art. 37 y de los arts. 38-46). Candidata natural para una segunda vuelta antes
de recurrir a otras normas.

## Temas siguientes, cuando el 20 esté cerrado

Del 19 hacia atrás. Estado y déficit hasta 500:

| Tema | Actual | Faltan |
|---|---|---|
| 19 · FP local | 265 | 235 |
| 18 · Situaciones y disciplinario | 262 | 238 |
| 17 · Empleados públicos: clases | 340 | 160 |
| 16 · Reglamentos y ordenanzas | 100 | 400 |
| 15 · Participación ciudadana | 150 | 350 |
| 14 · Municipio y régimen especial Zgz | 349 | 151 |
| 13 · Haciendas Locales II | 100 | 400 |
| 12 · Haciendas Locales I | 100 | 400 |
| 11 · Actividad de las entidades locales | 100 | 400 |
| 10 · Bienes de las entidades locales | 150 | 350 |
| 9 · Contratos del sector público | 100 | 400 |
| 8 · LPAC V: revisión de actos | 100 | 400 |
| 7 · LPAC IV: procedimiento común | 100 | 400 |
| 6 · LPAC III: actos administrativos | 150 | 350 |
| 5 · LPAC II: actividad administrativa | 100 | 400 |
| 4 · LPAC I: interesados | 100 | 400 |
| 3 · Estatuto de Autonomía de Aragón | 100 | 400 |
| 2 · Igualdad y violencia de género | 100 | 400 |
| 1 · La Constitución Española | 500 | 0 |

Con lotes de 40 preguntas y un revisor por lote, esto es del orden de 190 lotes
y unos 400 agentes. Es una campaña larga: conviene hacerla tema a tema, con
parada y revisión humana entre temas.
