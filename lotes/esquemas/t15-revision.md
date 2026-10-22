# Revisión del esquema del tema 15 (ROTPC y Manual de Atención a la Ciudadanía): Auxiliar Administrativo, Ayto. Zaragoza

Revisor independiente. Fecha: 22-oct-2026.

## Fuentes consultadas

- **Reglamento de Órganos Territoriales y de Participación Ciudadana (ROTPC)**: `tools/temarios/rotpc-zaragoza-texto-vigente.txt`,
  texto consolidado de la ficha oficial https://www.zaragoza.es/sede/servicio/normativa/109 (aprobación definitiva:
  Pleno de 28-7-2005, BOPZ nº 288 de 17-12-2005; única modificación: «Creación del nuevo Distrito Sur», Pleno de
  22-12-2017, BOPZ nº 44 de 23-2-2018, que «Afecta a: Art. 2 y Disposiciones Adicionales (se añade una Quinta)»).
  Es normativa municipal, no está en boe.es. Lo he leído entero (arts. 1-117, DA, DT, DD y DF).
- **Manual de Atención a la Ciudadanía** (revisión de marzo de 2018, 45 páginas):
  `tools/temarios/manual-atencion-ciudadania-zaragoza-2018.pdf`, pasado con `pdftotext -layout`. Leído entero.
  El pie de página sale truncado en la extracción, así que he sacado página a página (`pdftotext -f N -l N`)
  la página de cada apartado citado.
- Epígrafe: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, tema 15.
- Alcance: `tools/fuentes.json`, `aux-admin-zaragoza`, tema 15.
- Banco: tema 21 (las 75 preguntas de 2025 y las 72 de 2026).
- Intenté descargar la plantilla definitiva del 31-may-2026 de zaragoza.es para confirmar P13, P15 y P29, pero
  las direcciones devuelven 404 (igual que en la revisión del tema 9). Uso la clave del banco, que según
  `lotes/ESTADO.md` (entrada del 9-sep-2026) se transcribió de las plantillas definitivas.
- No me he fiado de `t15-citas.md`: todo lo he cotejado con los dos documentos.

## Comprobaciones hechas: unas 150

- **Epígrafe**: literal del BOPZ 170.
- **Fuentes y etiquetas**: boletines, números y fechas de la ficha oficial, correctos.
- **Mapa**: los 14 rangos del ROTPC (Títulos I a VII, arts. 1-117, DA 3.ª y 5.ª) y las 5 páginas del Manual
  (5, 8, 14, 33 y 40), correctos.
- **Cifras**: las 10 (16 distritos, 14 barrios, 10 vocales, 4 o 6 vocales, 10 %, 10.000 + 5 %, 3 %, 5 años,
  4 sesiones al año, 3 reuniones al año), correctas.
- **Enumeraciones**: los 16 distritos y los 14 barrios del art. 2, uno a uno; los 4 factores de calidad; los
  7 errores; las 5 características de la calidad; las 6 fases de la curva de la hostilidad; los 3 niveles de
  atención; los 4 «hay que evitar» de la escucha activa; los «qué no hacer»; los 14 principios numerados.
- **Datos de las 8 secciones**: quórum, plazos (24 h, 72 h, 15 minutos, 30 días, 1 mes, 10 y 15 días),
  mayorías, órganos, «podrá» frente a pérdida automática (arts. 70 y 74), requisitos de la Audiencia, la
  Consulta y la Encuesta, composición del Consejo de la Ciudad y de la Comisión de Sugerencias.
- **Trampas**: las 10. Todas las `x` son falsas y todas las `ok` ciertas.
- **Marcas de examen**: las 7 notas y todas las marcas contra el tema 21.
- **Preguntas del ROTPC en el examen de 2025**: el banco tiene las 75 preguntas de ese examen (P1-P50, reservas
  1-5 y las 20 de la segunda prueba). Solo cuatro son del ROTPC: P16 (modificación de 2018), P30 y P31
  (art. 2) y P32 (art. 51). **No hay una quinta.** El aviso de `tools/fuentes.json` («pregunta cinco veces
  por materia de este tema y las CINCO son del ROTPC (arts. 2 y 51 y su modificación de 2018)») cuenta una de
  más: arts. 2 (2), 51 (1) y modificación (1) suman cuatro. La P37 de 2025 nombra el «Consejo Social de la
  Ciudad» en una opción, pero pregunta por los arts. 122.1 y 124.1 LBRL, no por el ROTPC. El esquema ya tenía
  bien las cuatro marcas de 2025.

## Las tres discrepancias del examen de 2026

| Pregunta | Clave del banco | Texto oficial | Qué hace ahora el esquema |
|---|---|---|---|
| P29 (art. 31) | a) «Alcalde pedáneo.» | Art. 31: «El Presidente, que recibe el nombre tradicional de Alcalde del Barrio.» Art. 32: «con la denominación tradicional de Alcalde de Barrio». La palabra «pedáneo» no aparece en el Reglamento. | Sigue el texto («Alcalde del Barrio»). Añado la marca 2026 en el art. 31 y una nota en `examenes` con la opción de la plantilla y el texto literal. |
| P13 (DA 3.ª) | c) «Las respuestas a) y b) son correctas» (a: «La declaración de entidad ciudadana»; b: «La declaración de interés público municipal») | DA 3.ª: «Se reconoce a la Unión Vecinal Cesaraugusta y a la Federación de Asociaciones de Barrios de Zaragoza la declaración de Interés público municipal en los términos señalados en este Reglamento.» El Reglamento solo regula las declaraciones de Interés público municipal y de Interés ciudadano (y cita la de Utilidad Pública supramunicipal). No existe una «declaración de entidad ciudadana». | Sigue el texto (solo Interés público municipal). La marca estaba bien puesta. Amplío la nota de `examenes` con la discrepancia. |
| P15 (Manual) | c) «Las dos respuestas anteriores son correctas» | El enunciado dice «concluye con quince principios básicos», pero el apartado «Principios básicos en la atención a la ciudadanía» (págs. 40-45) numera 14, el último «14. PARA CAMBIAR SE NECESITA MUCHO TIEMPO Y ESFUERZO». El principio 9 dice: «Lo que más irrita a cualquier persona es que lo que le digamos no se cumpla o sea inexacto.» y «Es preferible reconocer nuestra ignorancia sobre un tema que dar información ambigua.» La respuesta c) es correcta. | Ya decía «14 principios básicos numerados» y tenía bien la marca del principio 9. Amplío la nota de `examenes` para avisar del «quince» del enunciado. |

## Correcciones

| # | Lugar | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|---|
| 1 | Sección «Juntas Municipales», columna «Órganos», regla 3 | «Pleno de la Junta: el Presidente, <b>10 vocales</b> nombrados por el Alcalde a propuesta de los grupos, los Presidentes de Concejos Locales y, con voz y sin voto, un representante de cada Asociación de Vecinos inscrita en el Censo.» | «Pleno de la Junta: el Presidente, <b>10 vocales</b> nombrados por el Alcalde a propuesta de los grupos y los Presidentes de Concejos Locales. Con voz y sin voto: un representante de cada Asociación de Vecinos del territorio inscrita en el Censo y un representante por cada uno de estos grupos: padres de alumnos, juveniles, mayores, empresarios y comerciantes, y resto de entidades.» | Enumeración incompleta presentada como completa: faltaba la letra e) del art. 17. Además, la Asociación de Vecinos tiene que tener su domicilio en el territorio de la Junta. | Art. 17.d: «un representante de cada Asociación de Vecinos que tenga su domicilio social en el ámbito territorial de la Junta y estén inscritos en el Censo Municipal de Entidades Ciudadanas». Art. 17.e: «Serán miembros del Pleno, con voz y sin voto: Un representante por todas las Asociaciones de Padres de Alumnos. Un representante por todas las Asociaciones Juveniles Un representante por todas las Asociaciones de Mayores. Un representante por las Asociaciones de Empresarios y Comerciantes. Un representante por el resto de Entidades Ciudadanas.» |
| 2 | Sección «Barrios rurales y Concejos Locales», ítem del art. 31 | sin marca | `examen: '2026'` | La P29 de 2026 pregunta por este punto exacto (nombre tradicional del Presidente del Barrio Rural). | Tema 21, índice 103: «[EXAMEN OFICIAL 31-may-2026, P29] Según el artículo 31 del Reglamento de Órganos Territoriales y Participación Ciudadana el Presidente de cada Barrio Rural recibe la denominación tradicional de:». Art. 31 citado arriba. |
| 3 | Tabla de instrumentos, fila «Audiencia Pública (52)», columna de requisitos | «Juntas, Consejo de la Ciudad, Comisión de Sugerencias, entidades o el <b>10 % del padrón</b> (en una Junta, nunca hace falta aportar más de 300 firmas en las Vecinales ni más de 3.000 en las Municipales). …» | «De ciudad: Juntas, Consejo de la Ciudad, Comisión de Sugerencias, entidades o el <b>10 % del padrón</b>. De Junta: los mismos salvo las Juntas, con el 10 % del padrón de la Junta (nunca más de 300 firmas en las Vecinales ni de 3.000 en las Municipales). …» | Simplificación que cambia el sentido: las Juntas solo pueden pedir la Audiencia de ámbito de ciudad, y para la de Junta el 10 % es del padrón de la Junta, no de la ciudad. | Art. 52: «Podrán pedir la celebración de Audiencia Pública de ámbito ciudadano: Las Juntas Municipales o Vecinales. El Consejo de la Ciudad de Zaragoza. La Comisión Especial de Sugerencias y Reclamaciones. Las entidades ciudadanas […]. Un colectivo de ciudadanos […] que represente, como mínimo, el 10% del padrón municipal. Podrán pedir la celebración de Audiencia Pública de ámbito de Junta Municipal o Vecinal: El Consejo de la Ciudad de Zaragoza. La Comisión Especial de Sugerencias y Reclamaciones. Las entidades ciudadanas […]. Un colectivo de ciudadanos […] que represente, como mínimo, el 10% del padrón municipal del territorio de la Junta, sin que sea necesario en ningún caso aportar más de 300 firmas para las Juntas Vecinales y 3.000 para las Juntas Municipales.» |
| 4 | `examenes[5]` (P13 de 2026) | «DA 3.ª ROTPC (Unión Vecinal Cesaraugusta y Federación de Asociaciones de Barrios): examen oficial 31-may-2026, pregunta 13.» | La misma frase, más: «Ojo: la plantilla oficial dio por buena la opción c), «Las respuestas a) y b) son correctas», es decir, también la a), «La declaración de entidad ciudadana». La DA 3.ª solo dice: «Se reconoce a la Unión Vecinal Cesaraugusta y a la Federación de Asociaciones de Barrios de Zaragoza la declaración de Interés público municipal» (opción b). El Reglamento no regula ninguna «declaración de entidad ciudadana». El esquema sigue el texto.» | Punto 1 del encargo. La nota callaba la discrepancia. Sigo el modelo de las notas de t03, t07 y t08. | DA 3.ª (citada arriba). Tema 21, índice 87: a) «La declaración de entidad ciudadana.», b) «La declaración de interés público municipal.», c) «Las respuestas a) y b) son correctas.»; `correct: 2`. |
| 5 | `examenes[6]` (P15 de 2026) | «Manual, principio 9 (información veraz y concreta): examen oficial 31-may-2026, pregunta 15.» | La misma frase, más: «Ojo: el enunciado dice que el Manual «concluye con quince principios básicos», pero el Manual numera 14 (págs. 40-45). La respuesta correcta, c), sí coincide con el texto del principio 9.» | Punto 1 del encargo: avisar del «quince» del enunciado. | Manual, págs. 40-45, principios numerados del «1. PARA LA CIUDADANÍA» al «14. PARA CAMBIAR SE NECESITA MUCHO TIEMPO Y ESFUERZO». Tema 21, índice 89: «concluye con quince principios básicos». |
| 6 | `examenes[7]` (nueva, P29 de 2026) | (no existía) | «Art. 31 ROTPC (nombre tradicional del Presidente de cada Barrio Rural): examen oficial 31-may-2026, pregunta 29. Ojo: la plantilla oficial dio por buena la opción a), «Alcalde pedáneo», pero el art. 31 dice «El Presidente, que recibe el nombre tradicional de Alcalde del Barrio» (opción b). La palabra «pedáneo» no aparece en el Reglamento. El esquema sigue el texto.» | Faltaba la pregunta P29 en la lista, y tiene una discrepancia que la opositora debe conocer. | Art. 31 (citado arriba). Tema 21, índice 103: a) «Alcalde pedáneo.», b) «Alcalde del Barrio.», c) «Representante vecinal.»; `correct: 0`. |

Total: **6 correcciones**.

## Lo que no he tocado

- **Banco, tema 21**: la explicación de la P29 (índice 103) afirma: «El artículo 31 del ROTPC otorga al Presidente
  de cada Barrio Rural la denominación tradicional de Alcalde pedáneo». Es falso según el texto vigente. La de la
  P13 (índice 87) dice que la DA 3.ª reconoce «tanto la declaración de entidad ciudadana como la de interés
  público municipal», y la DA no dice eso. No las toco porque son otro archivo y la clave es la de la plantilla,
  pero convendría que la explicación avisara de la discrepancia, como ya se hizo con la P26 y la P50 de 2026.
- **`tools/fuentes.json`, tema 15**: dice que el examen de 2025 preguntó «cinco veces» por el ROTPC; son cuatro
  (P16, P30, P31 y P32). Otro archivo: no lo toco.
- **Art. 29 frente al art. 2**: el art. 29 nombra «Torrecilla de Valmadrid» y el art. 2 «Torrecilla». El esquema
  copia el art. 2, el que cita el examen de 2025 (P30). Está bien.
- **Art. 32**: el Reglamento usa «Alcalde del Barrio» (art. 31) y «Alcalde de Barrio» (art. 32). El esquema
  respeta cada forma en su artículo.
- No he quitado nada. No añado materia nueva: las preguntas de examen del tema ya están todas cubiertas.

## Veredicto

**APTO.** Todos los datos del esquema coinciden con el texto vigente del ROTPC y con el Manual. Las tres
discrepancias de la plantilla de 2026 quedan avisadas en `examenes` con citas literales, y el esquema sigue el
texto. `node tools/validar-esquemas.js aux-admin-zaragoza 15` → «Todo correcto».
