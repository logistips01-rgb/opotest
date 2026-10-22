# Tema 5 · Revisión independiente

Esquema: `data/esquemas/aux-admin-zaragoza/t05.js` · Citas del redactor: no hay (`t05-citas.md` no existe).
Todos los datos se han comprobado directamente contra el texto oficial descargado.

## Fuentes consultadas

- Ley 39/2015 (LPAC), texto consolidado **BOE-A-2015-10565**, descargado por el revisor el 22-oct-2026
  (`https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565`, pasado a texto plano; Título II, arts. 13-33).
  Última actualización del consolidado: **publicada el 06/11/2024**.
  - Art. 28: última actualización publicada el 06/12/2018 (en vigor el 07/12/2018). Nota: «Se modifican
    los apartados 2 y 3 por la disposición final 12 de la Ley Orgánica 3/2018, de 5 de diciembre. Ref.
    BOE-A-2018-16673». El esquema usa la redacción vigente: consulta salvo oposición del interesado, sin
    oposición posible en potestades sancionadoras o de inspección; informes ya elaborados en 10 días;
    originales solo excepcionalmente.
  - Art. 32: última actualización publicada el 30/03/2022 (en vigor el 31/03/2022). Nota: «Se añade el
    apartado 5 por la disposición final 21 del Real Decreto-ley 6/2022, de 29 de marzo. Ref.
    BOE-A-2022-4972». El esquema no recogía ni el 32.4 ni el 32.5; ahora sí (corrección 15).
  - Resto de arts. 13-33: sin notas de modificación (redacción original).
- Epígrafe: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt` (BOPZ 170), tema 5. Coincide literalmente.
- Alcance: `tools/fuentes.json` → `aux-admin-zaragoza` → tema 5 (Título II, arts. 13-33).
- Exámenes oficiales: tema 21 del banco (147 preguntas). Revisadas todas las que citan la Ley 39/2015 o
  tratan plazos, silencio, registros, copias, urgencia o ampliación. Solo dos caen en los arts. 13-33:
  - #37 `[EXAMEN OFICIAL, P38]` (1-jun-2025): art. 30.2, sábados, domingos y festivos. Marca `{{examen:2025}}`
    en la fila «Días» correcta.
  - #97 `[EXAMEN OFICIAL 31-may-2026, P23]`: art. 30.6. Marca `examen: '2026'` en el 30.6 correcta.
  - La lista `examenes` (fechas y números de pregunta) es exacta.
- Cobertura: preguntas del tema 5 del banco (261) agrupadas por artículo de la `fuente`.

## Comprobaciones hechas: 116

Epígrafe, etiquetas y fuentes (3); 5 ideas esenciales; mapa (2 capítulos con su rango y 21 artículos: 23);
8 cifras; 7 afirmaciones de «Cómputo de plazos» (incluido el ejemplo); 4 del art. 31; 17 de «Obligación de
resolver» (incluidos los 7 supuestos del 22.1 y los 3 del 22.2, uno por uno); 10 de «Silencio» (incluidas
las 6 excepciones al silencio positivo del 24.1 y la excepción de la alzada); 15 de «Personas y
Administración» (los 5 obligados del 14.2 y los 5 lugares del 16.4, uno por uno); 5 de «Documentos y
copias»; 7 de «Ampliación y urgencia»; 8 trampas; 2 marcas de examen y 2 notas de `examenes`.

Puntos del encargo:

1. **Cifras**: 3 meses (21.3), 6 meses (21.2), 3 meses de suspensión (22.1.d), 10 días (21.4 y 28.2),
   15 días (24.4 y 27.4) y 24 horas (30.1): todas correctas y con su apartado correcto.
2. **22.1 y 22.2**: el 22.2 estaba completo. El 22.1 decía «7 casos» pero solo enumeraba 6: juntaba en uno
   las letras b) y c) (corrección 5).
3. **Excepciones del 24.1**: estaban las seis, pero dos con redacción inexacta y faltaba el límite de la
   excepción de la alzada (correcciones 6 y 7).
4. **14.2 y 16.4**: las dos listas están completas (5 y 5). Se precisa la letra c) del 14.2 y la regla de
   las personas físicas, que omitía el «salvo que estén obligadas» y el 14.3 (correcciones 8 y 9).
5. **Art. 31**: correcto salvo la excepción del 31.2.b (corrección 4).
6. **Ejemplo de cómputo por meses**: correcto. Notificado el 31 de enero, el cómputo empieza el 1 de febrero
   y el plazo concluye «el mismo día en que se produjo la notificación […] en el mes […] de vencimiento»;
   como febrero no tiene día 31, «expira el último día del mes» (28 o 29). Si es inhábil, se prorroga (30.5).
7. **32.5 y 28.2-3**: ver arriba.

## Correcciones

| # | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|
| 1 | esencial: «La Administración <b>siempre debe resolver</b> y notificar.» | «La Administración debe resolver y notificar <b>en todos los procedimientos</b>, salvo las excepciones del 21.1.» | «Siempre» es falso: hay excepciones, y una pregunta tipo test puede buscarlas. | art. 21.1: «está obligada a dictar resolución expresa y a notificarla en todos los procedimientos cualquiera que sea su forma de iniciación. […] Se exceptúan de la obligación […] los supuestos de terminación del procedimiento por pacto o convenio, así como los procedimientos relativos al ejercicio de derechos sometidos únicamente al deber de declaración responsable o comunicación» |
| 2 | esencial: «el silencio es positivo por regla general, con excepciones tasadas.» | «… Es negativo si así lo dice una ley o el Derecho UE o internacional, y en los casos que enumera el 24.1.» | «Tasadas» sugiere una lista cerrada; cualquier norma con rango de ley puede fijar el silencio negativo. | art. 24.1: «excepto en los supuestos en los que una norma con rango de ley o una norma de Derecho de la Unión Europea o de Derecho internacional aplicable en España establezcan lo contrario» |
| 3 | esencial: «Urgencia: plazos <b>a la mitad</b>. Ninguna de las dos admite recurso.» | «Urgencia: plazos <b>a la mitad</b>, salvo los de solicitudes y recursos. Contra el acuerdo de ampliación o de urgencia no cabe recurso.» | Sin la salvedad, la idea clave lleva a fallar la pregunta típica (la propia trampa 4). «Ninguna admite recurso» se podía leer como que el procedimiento no admite recurso. | art. 33.1: «se reducirán a la mitad los plazos establecidos para el procedimiento ordinario, salvo los relativos a la presentación de solicitudes y recursos»; 32.3: «Los acuerdos sobre ampliación de plazos o sobre su denegación no serán susceptibles de recurso»; 33.2: «No cabrá recurso alguno contra el acuerdo que declare la aplicación de la tramitación de urgencia» |
| 4 | 31: «Presentado en día inhábil: cuenta como hecho en la primera hora del primer día hábil siguiente.» | «… , salvo que una norma permita expresamente recibir en día inhábil.» | Faltaba la salvedad literal, que el banco pregunta (tema 5, #200). | art. 31.2.b: «la presentación en un día inhábil se entenderá realizada en la primera hora del primer día hábil siguiente salvo que una norma permita expresamente la recepción en día inhábil» |
| 5 | 22.1 (7 casos): «…, pronunciamiento o procedimiento de la UE, …» | «…, pronunciamiento previo de un órgano de la UE, procedimiento de la UE no finalizado, …» | Dos supuestos distintos (letras b y c) aparecían como uno: la lista anunciaba 7 y enumeraba 6. | art. 22.1.b: «Cuando deba obtenerse un pronunciamiento previo y preceptivo de un órgano de la Unión Europea»; c): «Cuando exista un procedimiento no finalizado en el ámbito de la Unión Europea que condicione directamente el contenido de la resolución» |
| 6 | 24.1: «facultades sobre dominio o servicio público, actividades que dañen el medio ambiente, … impugnación de actos» | «transferencia de facultades sobre dominio o servicio público, actividades que puedan dañar el medio ambiente, … impugnación de actos y disposiciones» | Se perdían matices literales («transfirieran», «puedan dañar», «y disposiciones») que el test usa para construir distractores. | art. 24.1: «aquellos cuya estimación tuviera como consecuencia que se transfirieran al solicitante o a terceros facultades relativas al dominio público o al servicio público, impliquen el ejercicio de actividades que puedan dañar el medio ambiente […] en los procedimientos de impugnación de actos y disposiciones» |
| 7 | 24.1: «recurso de alzada contra una desestimación por silencio que tampoco se resuelve: se entiende estimado.» | «… se entiende <b>estimado</b>, salvo en las cuatro primeras materias (petición, dominio o servicio público, medio ambiente, responsabilidad patrimonial).» | Sin el límite, la regla es falsa para esas materias. | art. 24.1: «se entenderá estimado el mismo si, llegado el plazo de resolución, el órgano administrativo competente no dictase y notificase resolución expresa, siempre que no se refiera a las materias enumeradas en el párrafo anterior de este apartado» |
| 8 | 14.2: «Profesionales con colegiación obligatoria (incluye notarios y registradores)» | «Profesionales con colegiación obligatoria, en trámites de esa actividad (incluye notarios y registradores)» | La obligación se limita a los trámites de la actividad profesional (igual que en la e). El banco lo pregunta. | art. 14.2.c: «Quienes ejerzan una actividad profesional para la que se requiera colegiación obligatoria, para los trámites y actuaciones que realicen con las Administraciones Públicas en ejercicio de dicha actividad profesional» |
| 9 | 14: «Las personas físicas eligen y pueden cambiar de medio en cualquier momento.» | «… , salvo que estén obligadas. Un <b>reglamento</b> puede obligar a ciertos colectivos de personas físicas (14.3).» | Faltaba la salvedad del 14.1, y la lista del 14.2 es de mínimos («al menos»). Tal como estaba, llevaba a fallar las preguntas del 14.1 y 14.3 (tema 5, #8, #15, #233-235). | art. 14.1: «salvo que estén obligadas a relacionarse a través de medios electrónicos»; 14.3: «Reglamentariamente, las Administraciones podrán establecer la obligación de relacionarse con ellas a través de medios electrónicos para determinados procedimientos y para ciertos colectivos de personas físicas» |
| 10 | 16: «Lo presentado en papel se digitaliza y se devuelven los originales.» | «Lo presentado de forma presencial se digitaliza y se devuelven los originales, salvo que la norma obligue a custodiarlos o no se puedan digitalizar.» | La ley habla de presentación presencial y tiene excepciones a la devolución. | art. 16.5: «Los documentos presentados de manera presencial […] deberán ser digitalizados […] devolviéndose los originales al interesado, sin perjuicio de aquellos supuestos en que la norma determine la custodia por la Administración de los documentos presentados o resulte obligatoria la presentación de objetos o de documentos en un soporte específico no susceptibles de digitalización» |
| 11 | 28.2: «Derecho a no aportar documentos que ya tenga la Administración, salvo oposición del interesado.» | «Derecho a no aportar documentos que ya tenga la Administración actuante o que haya elaborado otra. La Administración los consulta, salvo que el interesado se oponga.» | Se leía como si el derecho a no aportar dependiera de que el interesado no se opusiera. La oposición es a la consulta. Faltaban los documentos de otra Administración. | art. 28.2 (redacción LO 3/2018): «Los interesados tienen derecho a no aportar documentos que ya se encuentren en poder de la Administración actuante o hayan sido elaborados por cualquier otra Administración. La administración actuante podrá consultar o recabar dichos documentos salvo que el interesado se opusiera a ello.» |
| 12 | 32.2: «Siempre por el máximo en trámites con misiones diplomáticas, en el extranjero o …» | «Siempre por el máximo en procedimientos tramitados por misiones diplomáticas u oficinas consulares, con algún trámite en el extranjero o …» | Faltaban las oficinas consulares, y «trámites con misiones» no es lo que dice la ley (procedimientos tramitados por ellas). El banco lo pregunta (tema 5, #208-209). | art. 32.2: «se aplicará en todo caso a los procedimientos tramitados por las misiones diplomáticas y oficinas consulares, así como a aquellos que, sustanciándose en el interior, exijan cumplimentar algún trámite en el extranjero o en los que intervengan interesados residentes fuera de España» |
| 13 | Tabla 30, «Meses / años»: «Vence el mismo día del mes o año de vencimiento.» | «Vence el mismo día en que se notificó, publicó o se produjo el silencio, en el mes o año de vencimiento.» | Claridad: «el mismo día» no decía respecto de qué. | art. 30.4: «El plazo concluirá el mismo día en que se produjo la notificación, publicación o silencio administrativo en el mes o el año de vencimiento.» |
| 14 | Tabla 30, «Días»: «Si una ley fija días naturales, se dice en la notificación.» | «Si una ley o el Derecho UE fija días naturales, se dice en la notificación.» | Faltaba el Derecho de la UE. | art. 30.2: «Cuando los plazos se hayan señalado por días naturales por declararlo así una ley o por el Derecho de la Unión Europea, se hará constar esta circunstancia en las correspondientes notificaciones.» |
| 15 | 32: no recogía los apartados 4 y 5 | Nuevo recuadro: «Incidencia técnica (32.4): puede ampliar los plazos <b>no vencidos</b> y lo publica en la sede. Ciberincidente grave (32.5): puede acordar una <b>ampliación general</b> de plazos.» | La columna presentaba el art. 32 como completo sin los apartados 4 y 5. El 32.5 está en vigor desde el 31-3-2022 (RDL 6/2022) y el banco pregunta los dos (tema 5, #212-213). | art. 32.4: «la Administración podrá determinar una ampliación de los plazos no vencidos, debiendo publicar en la sede electrónica tanto la incidencia técnica acontecida como la ampliación concreta del plazo no vencido»; 32.5: «Cuando como consecuencia de un ciberincidente se hayan visto gravemente afectados los servicios y sistemas […] la Administración podrá acordar la ampliación general de plazos de los procedimientos administrativos.» |
| 16 | cifra 21.4: «Para comunicar al interesado plazo y efectos del silencio» | «… , desde que se recibe su solicitud» | Claridad: faltaba desde cuándo corren los 10 días. | art. 21.4: «dentro de los diez días siguientes a la recepción de la solicitud iniciadora del procedimiento en el registro electrónico» |

`node tools/validar-esquemas.js aux-admin-zaragoza 5` → «Todo correcto».

## Lo que añadiría pero no he tocado

No son errores. Son detalles que el banco del tema 5 pregunta y el esquema no recoge. No los añado
porque mi encargo es corregir, no ampliar (la corrección 15 es la excepción, por el encargo expreso
sobre el 32.5):
- **Art. 13 (derechos de las personas)**: solo aparece en el mapa, y el banco tiene 16 preguntas sobre él
  (letras a-i, cuántos son, relación con el art. 53). Es la omisión más relevante. Bastaría una lista de
  los 9 derechos (a-i) en la sección «Personas y Administración».
- 31.1 (publicar días y horario de las oficinas de asistencia), 31.2.b segundo párrafo (orden de los
  documentos presentados en inhábil: se reputan anteriores a los del primer hábil) y 31.2.c (los plazos de
  la Administración empiezan con la fecha y hora de presentación, que se comunica a quien presentó).
- 24.1, inciso final del primer párrafo: si el procedimiento es de acceso a actividades o su ejercicio, la
  ley que fije el silencio negativo debe fundarse en «razones imperiosas de interés general».
- 25.1, encabezado: el vencimiento del plazo «no exime a la Administración del cumplimiento de la obligación
  legal de resolver».
- 15.3 (traducción al castellano) y 21.5 (habilitar medios personales y materiales).

Nada que quitar: todo el contenido está dentro del Título II (arts. 13-33).

**Aviso sobre el banco (no es de este archivo, no lo toco)**: la pregunta #97 del tema 21 (31-may-2026,
P23, art. 30.6) da por correcta solo la b) («inhábil en el municipio del interesado y hábil en la sede»).
El art. 30.6 dice «Cuando un día fuese hábil en el municipio o Comunidad Autónoma en que residiese el
interesado, e inhábil en la sede del órgano administrativo, o a la inversa, se considerará inhábil en todo
caso», con lo que a) y b) son ciertas por ley y la c) («Las respuestas a) y b) son correctas») parecería
la buena. Conviene comprobar la plantilla oficial; si confirma la b), la explicación debería avisar con un
«OJO», como en otras preguntas del banco. El esquema dice lo que dice la ley («o al revés»), que es lo
correcto.

## Veredicto

**APTO**. 16 correcciones. No queda nada pendiente en el esquema.
