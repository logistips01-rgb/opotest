# Tema 1 · Revisión independiente del esquema (t01.js)

Revisión del 22-oct-2026. He comprobado cada dato contra los textos oficiales que he descargado y extraído yo. Las citas de `t01-citas.md` solo me han servido para saber dónde buscar. Todas las que he contrastado son literales y de la redacción vigente.

## Fuentes consultadas

| Fuente | Identificador | Última actualización / versión |
|---|---|---|
| Constitución Española, texto consolidado (`act.php`) | BOE-A-1978-31229 | Ficha: «Última actualización publicada el 20/05/2026». Versiones: «Modificación publicada el 17/02/2024», «… 27/09/2011», «… 28/08/1992», «Texto inicial publicado el 29/12/1978». «Publicado en: «BOE» núm. 311, de 29/12/1978. Entrada en vigor: 29/12/1978». |
| Constitución Española, texto original y análisis (`txt.php`) | BOE-A-1978-31229 | Análisis: «Fecha de disposición: 27/12/1978 · Fecha de publicación: 29/12/1978 · Fecha de entrada en vigor: 29/12/1978». «Referencias posteriores»: cuatro «SE MODIFICA» (arts. 69.3, 49, 135 y 13.2). |
| Reforma del art. 69.3 CE, de 19 de mayo de 2026 | BOE-A-2026-10881 | «BOE» núm. 123, de 20 de mayo de 2026. Se ha usado para confirmar la cuarta reforma. |
| Real Decreto 2560/1978, de 3 de noviembre (referéndum) | BOE-A-1978-27525 | «BOE» núm. 265, de 6-nov-1978. Arts. 1 a 3. |
| Real Decreto 679/1977, de 15 de abril (elecciones generales) | BOE-A-1977-9545 | «BOE» núm. 92, de 18-abr-1977. «[Vigencia agotada]». Artículo único. |
| Epígrafe oficial | `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, TEMA 1 | Coincide literalmente con `epigrafe`. |
| Alcance | `tools/fuentes.json` → `aux-admin-zaragoza` → tema 1 | Respetado: elaboración y aprobación, estructura, arts. 1-9, 97-107 y 137-142. De los títulos excluidos solo aparecen las rúbricas, lo que admite el «MATIZ ADMITIDO». |
| Exámenes oficiales | `data.questions[21]` del banco | Índices 22 (1-jun-2025, P23), 77 (31-may-2026, P3), 81 (31-may-2026, P7) y 127 (31-may-2026, Reserva 5). He buscado por Constitución, Consejo de Estado, Tribunal Supremo, investidura, soberanía, bandera, personalidad jurídica, Haciendas locales y Cortes Generales: no hay más preguntas del tema 21 sobre esta materia. |

## Comprobaciones hechas: 174

- 174 elementos del esquema: 3 fuentes y el epígrafe (4); 5 ideas esenciales; 39 entradas del mapa (rúbricas y rangos de los 11 títulos, la parte final y los arts. 1-9, 97-107 y 137-142); 10 cifras; 95 celdas o frases de las 7 secciones; 10 trampas (que la `x` sea falsa y la `ok` cierta); 3 notas de `examenes` y 8 marcas `{{examen}}`.
- Puntos concretos del encargo:
  1. **Fechas de elaboración y aprobación.** Correctas, y todas salen del BOE:
     - **15-jun-1977**, RD 679/1977, artículo único: «La votación se celebrará el día quince de junio de mil novecientos setenta y siete».
     - **31-oct-1978**, RD 2560/1978, art. 1: «proyecto de Constitución aprobado por las Cortes en sesiones plenarias del Congreso de los Diputados y del Seriado [sic] celebradas el día treinta y uno de octubre de mil novecientos setenta y ocho».
     - **6-dic-1978**, RD 2560/1978, art. 2: «El Referéndum se celebrará el día seis de diciembre de mil novecientos setenta y ocho». Pregunta del art. 3: «¿Aprueba el proyecto de Constitución?».
     - **27-dic-1978**, fórmula final: «PALACIO DE LAS CORTES, A VEINTISIETE DE DICIEMBRE DE MIL NOVECIENTOS SETENTA Y OCHO. JUAN CARLOS».
     - **29-dic-1978**, disposición final y ficha: «entrará en vigor el mismo día de la publicación de su texto oficial en el boletín oficial del Estado»; «BOE» núm. 311, de 29/12/1978.
  2. **Número de reformas.** Son 4. Análisis del BOE: «SE MODIFICA: el art. 69.3, por Reforma de 19 de mayo de 2026 (Ref. BOE-A-2026-10881). el art. 49, por Reforma de 15 de febrero de 2024 (…). el art. 135, por Reforma de 27 de septiembre de 2011 (…)» y «SE MODIFICA el art. 13.2, por Reforma de 27 de agosto de 1992». La nota del art. 69 en el consolidado: «Se modifica el apartado 3 por el art. único de la Reforma de 19 de mayo de 2026». Ninguno de esos artículos está en el alcance del tema.
  3. **Estructura.** He contado en el índice del consolidado:
     - 169 artículos, del 1 al 169, sin huecos;
     - título preliminar y títulos I a X, con los rangos y rúbricas del mapa;
     - capítulos solo en los títulos I (5, con dos secciones en el segundo), III (3) y VIII (3);
     - disposiciones adicionales primera a cuarta (4), transitorias primera a novena (9), una derogatoria y una final.
- Todas las marcas de examen corresponden a una pregunta del tema 21 sobre ese punto exacto, con el año correcto. Las tres notas de `examenes` (fecha y número de pregunta) son correctas.

## Correcciones

| # | Lugar | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|---|
| 1 | `cifras` «15-jun-1977», `a` | `'RD 679/1977'` | `'RD 679/1977; disp. trans. 8.ª.1'` | El RD 679/1977 solo da la fecha de las elecciones. Que esas Cámaras aprobaran la Constitución sale de la disposición transitoria octava. | DT 8.ª.1: «Las Cámaras que han aprobado la presente Constitución asumirán, tras la entrada en vigor de la misma, las funciones y competencias que en ella se señalan, respectivamente, para el Congreso y el Senado, sin que en ningún caso su mandato se extienda más allá del 15 de junio de 1981.» |
| 2 | `esencial[0]`, `a` | `'RD 2560/1978; disp. final'` | `'RD 2560/1978; fórmula final; disp. final'` | La fecha de sanción (27-dic-1978) no está en el RD ni en la disposición final, sino en la fórmula final. | «PALACIO DE LAS CORTES, A VEINTISIETE DE DICIEMBRE DE MIL NOVECIENTOS SETENTA Y OCHO. JUAN CARLOS» |
| 3 | Sección «Título preliminar», fila art. 8 | «Garantizan soberanía, independencia, integridad territorial y ordenamiento constitucional.» | «Misión: garantizar la soberanía e independencia de España y defender su integridad territorial y el ordenamiento constitucional.» | El art. 8.1 tiene dos verbos: «garantizar» la soberanía y la independencia, y «defender» la integridad territorial y el ordenamiento constitucional. La versión anterior lo unía todo bajo «garantizan», y una pregunta que juegue con el verbo se podría fallar. El art. 8.1 sale 5 veces en el banco. | Art. 8.1: «… tienen como misión garantizar la soberanía e independencia de España, defender su integridad territorial y el ordenamiento constitucional.» |
| 4 | Sección «Título preliminar», fila art. 9 | «Ciudadanos y poderes públicos, sujetos a la Constitución. Los poderes públicos deben remover los obstáculos a la libertad e igualdad reales.» | «Ciudadanos y poderes públicos, sujetos a la Constitución **y al resto del ordenamiento jurídico**. Los poderes públicos deben promover las condiciones para que la libertad y la igualdad sean reales y efectivas y remover los obstáculos que impidan o dificulten su plenitud.» | El 9.1 estaba recortado: faltaba «y al resto del ordenamiento jurídico», que es lo que se pregunta. Del 9.2 faltaba el primer mandato, promover las condiciones. Los arts. 9.1 y 9.2 salen 7 veces en el banco. | Art. 9.1: «Los ciudadanos y los poderes públicos están sujetos a la Constitución y al resto del ordenamiento jurídico.» Art. 9.2: «Corresponde a los poderes públicos promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integra sean reales y efectivas; remover los obstáculos que impidan o dificulten su plenitud…» |

El resto del esquema coincide con el texto vigente.

## Lo que añadiría o quitaría, pero no he tocado

- **Art. 98.2** («El Presidente dirige la acción del Gobierno y coordina las funciones de los demás miembros del mismo…»). Sale 2 veces en el banco y el esquema no lo recoge. Es una omisión, no un error: el art. 98 ya está en el mapa. Lo dejo para que lo valore el redactor.
- **Art. 3.3** (las modalidades lingüísticas, patrimonio cultural objeto de especial respeto y protección). Sale 2 veces en el banco y tampoco está. Mismo motivo.
- **«Parte dogmática / parte orgánica».** `fuentes.json` la incluye en el alcance, pero es una clasificación doctrinal que no aparece en el texto oficial. El redactor la dejó fuera a propósito y estoy de acuerdo: no se puede citar con artículo.
- **Cifra «1/4» (art. 102.2).** Dice «para acusar al Gobierno», que es una abreviatura de «la acusación» contra el Presidente y los demás miembros del Gobierno. No cambia el sentido y la columna de la sección lo explica bien; no lo toco.
- **Aviso de proceso.** Durante la revisión, otro proceso hizo un commit en el repositorio (`0436f7d`, «Banco: corrige la clave de 2025 P9…»). Ese commit ya incluye mis cambios en `t01.js`. Yo no he hecho commit.

## Validación

`node tools/validar-esquemas.js aux-admin-zaragoza 1` → «Todo correcto» (0 errores, 0 avisos).

## Veredicto: APTO
