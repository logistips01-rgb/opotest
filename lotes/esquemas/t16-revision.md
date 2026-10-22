# Revisión del esquema del tema 16 (reglamentos y ordenanzas municipales): Auxiliar Administrativo, Ayto. Zaragoza

Revisor independiente. Fecha: 22-oct-2026.

## Fuentes consultadas

Descargadas hoy de boe.es (`act.php?id=…`) y pasadas a texto plano en la carpeta de trabajo
(`scratchpad/rev-t15-16/boe/` y `scratchpad/rev-t15-16/ley7-1999/`):

- **Ley 7/1985 (LBRL)**, BOE-A-1985-5392. **Última actualización publicada el 03/10/2026.** Arts. 4, 20, 22, 47,
  49, 65, 70, 70 bis, 122, 123 y 127, con sus notas de modificación. El art. 49 tiene su última redacción desde
  el 22/04/1999 (Ley 11/1999), y el 70 desde el 23/10/2013.
- **RDLeg 781/1986 (TRRL)**, BOE-A-1986-9865. **Última actualización publicada el 09/11/2024.** Arts. 55 a 59:
  sin notas de modificación, redacción original.
- **RDLeg 2/2004 (TRLRHL)**, BOE-A-2004-4214. **Última actualización publicada el 07/10/2026.** Arts. 15 a 19:
  sin notas de modificación.
- **Ley 10/2017 de capitalidad de Zaragoza**, BOE-A-2018-1683. **Última actualización publicada el 15/01/2019.**
  Arts. 10, 14, 48, 49 y 50. Los arts. 48 y 49 no tienen notas de modificación. El 14 solo tiene la anulación de
  la letra u) (STC 137/2018), que no afecta a la letra a).
- **Ley 7/1999, de 9 de abril, de Administración Local de Aragón**, BOE-A-1999-10151 («BOA» núm. 45, de
  17/04/1999; «BOE» núm. 108, de 06/05/1999). La encontré con la API de datos abiertos del BOE
  (`/datosabiertos/api/legislacion-consolidada`, título «Administración Local de Aragón»). **Última actualización
  publicada el 25/10/2022.** Arts. 139 a 142 (Título V «Disposiciones comunes a las entidades locales», Capítulo
  III «Procedimiento y régimen jurídico de los actos y acuerdos»): sin notas de modificación, redacción original.
- Epígrafe: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, tema 16. Avisos de `tools/fuentes.json` de los
  temas 13 y 16.
- Banco: tema 21 (exámenes oficiales de 2025 y 2026).
- No me he fiado de `t16-citas.md`: todas sus citas las he cotejado con mi descarga y son literales.

## Comprobaciones hechas: unas 120

- **Epígrafe**: literal del BOPZ 170 (con «or-/denanzas» unido).
- **Fuentes**: los 4 identificadores y las 4 fechas de última actualización, correctos.
- **Mapa**: los 21 artículos y apartados de los 4 bloques, correctos.
- **Cifras**: las 8 (30 días, 15 días hábiles, 10 %, 30 días, 10.000 y 20.000 habitantes, 30 días naturales,
  30 días), correctas.
- **Esencial, secciones y ejemplo**: cada órgano, plazo, mayoría y delegación (22.2.d y 22.4; 47.1 y 47.2.f;
  123.1.c-d, 123.2 y 123.3; 127.1.a), los pasos del art. 49 LBRL, los arts. 65.2 y 70.2, los arts. 15 a 19
  TRLRHL, y los arts. 48 y 49 de la Ley 10/2017, letra a letra.
- **Trampas**: las 10. Todas las `x` son falsas y todas las `ok` ciertas.
- **Marcas de examen**: P18 y P37 de 2026, bien puestas. Faltaban P25 y P26 de 2025 (ver punto 3).

## Punto 2: régimen general frente a ley de capitalidad

Lo comprobado, diferencia por diferencia:

| Trámite | ¿Es real la diferencia? | Comprobación |
|---|---|---|
| Iniciativa | Sí, pero la fila era incompleta. | Ley 10/2017, 48.2: «a) El Gobierno de Zaragoza, mediante la remisión del correspondiente proyecto normativo. b) Los grupos políticos, a través de la correspondiente proposición. c) La iniciativa popular, en los términos previstos en la normativa básica.» El art. 49 LBRL no regula la iniciativa y el 127.1.a da a la JGL «La aprobación de los proyectos de ordenanzas y de los reglamentos». Pero la iniciativa popular también existe en el régimen general (art. 70 bis.2 LBRL), y el 48.2.c remite a ella. Tal como estaba, la fila daba a entender que la iniciativa popular era una especialidad de Zaragoza. **Corregido (nº 9).** |
| Primer acuerdo | Sí. | 49.a LBRL: «Aprobación inicial por el Pleno.» 48.3.a Ley 10/2017: «Aprobación del proyecto por el Gobierno de Zaragoza, excepto en el caso de proyectos de normas reguladoras del Pleno y sus Comisiones, cuya aprobación corresponderá al Pleno.» |
| Información pública de 30 días | Sí, en dos detalles: «naturales» y el medio del anuncio. | 49.b LBRL: «por el plazo mínimo de treinta días». 48.3.b: «por el plazo mínimo de treinta días naturales […] mediante anuncio en el boletín oficial correspondiente y en el tablón de anuncios municipal». En las ordenanzas fiscales de Zaragoza el 49.b dice solo «treinta días» (sin «naturales»), y el esquema no le añade nada. |
| Dictamen | El art. 49 no lo menciona, pero la fila inducía a error. | Es cierto que el art. 49 LBRL no habla de dictamen. Pero el régimen general sí tiene comisiones que estudian e informan antes del Pleno: art. 20.1.c LBRL («órganos que tengan por objeto el estudio, informe o consulta de los asuntos que han de ser sometidos a la decisión del Pleno») y art. 122.4.a para gran población («El estudio, informe o consulta de los asuntos que hayan de ser sometidos a la decisión del Pleno»). Lo propio de Zaragoza es el dictamen expreso de ordenanzas: 48.3.c y 10.4.b («El dictamen de las ordenanzas y Reglamentos municipales, incluidos los de naturaleza orgánica, con carácter previo a su aprobación por el Pleno»). **Corregido (nº 10).** |
| Aprobación en acto único | Sí. | 49.c LBRL: «Resolución de todas las reclamaciones y sugerencias presentadas dentro del plazo y aprobación definitiva por el Pleno.» 48.3.d: «Aprobación en acto único del Reglamento u ordenanza por el Pleno, con resolución de las reclamaciones y sugerencias presentadas.» No se confunde con el «acuerdo de aprobación, que será único» del art. 168.5 TRLRHL (aviso del tema 13), que el esquema no menciona. |
| Aprobación tácita | Sí, y **faltaba en la tabla**. | LBRL 49, párrafo final: «En el caso de que no se hubiera presentado ninguna reclamación o sugerencia, se entenderá definitivamente adoptado el acuerdo hasta entonces provisional.» El art. 48 de la Ley 10/2017 no tiene ninguna regla parecida: el procedimiento acaba siempre en la aprobación en acto único por el Pleno (48.3.d y 48.4.c). En cambio, el 49.c sí la tiene para las fiscales: «En caso de que no se hubieren presentado reclamaciones, la ordenanza fiscal se entenderá definitivamente aprobada». El aviso del tema 13 en `fuentes.json` dice lo mismo («ni el 48 ni el 50 recogen la aprobación tácita que sí tienen el art. 49.c)»). Es la diferencia más preguntable, y la tabla no la recogía. **Añadida (nº 11).** |
| Ordenanza fiscal | Sí. | Arts. 17.1 y 17.3 TRLRHL frente a 49.a-c Ley 10/2017 (citados en `t16-citas.md`, comprobados). La P37 de 2026 confirma el reparto: proyecto del Gobierno, aprobación inicial de la Comisión plenaria y aprobación del Pleno. |

## Punto 3: Ley 7/1999 de Administración Local de Aragón

- **Texto oficial vigente encontrado**: BOE-A-1999-10151, consolidado del BOE, última actualización 25/10/2022.
  Los arts. 139 y 142 mantienen su redacción original.
- **¿Están en el epígrafe?** Sí. El art. 139 se titula «Reglamentos y ordenanzas», el 140 regula su
  procedimiento de elaboración, el 141 su entrada en vigor y el 142 los bandos. Es la ley autonómica de régimen
  local sobre «Reglamentos y ordenanzas de los municipios», la primera frase del epígrafe.
- **P25 de 2025** (tema 21, índice 24): «las disposiciones generales aprobadas por las entidades locales en el
  ejercicio de la potestad reglamentaria y en el ámbito de su competencia adoptarán la denominación de:»,
  respuesta c) «Reglamentos u ordenanzas según cual sea su objeto». Art. 139.1, literal: «Las disposiciones
  generales aprobadas por las entidades locales en el ejercicio de la potestad reglamentaria y en el ámbito de
  su competencia adoptarán la denominación de reglamentos, si tuvieren por objeto regular la organización y
  funcionamiento de la entidad local y, en otro caso, la de ordenanzas.» Coinciden.
- **P26 de 2025** (tema 21, índice 25): «los bandos dictados por los Alcaldes se publicarán:», respuesta b)
  «Conforme a los usos y costumbre de la localidad». Art. 142.1, literal: «Los bandos dictados por los Alcaldes
  tendrán como finalidad exhortar a los ciudadanos a la observancia de las obligaciones y deberes establecidos
  en las leyes y en las ordenanzas y reglamentos municipales, recordarles el contenido preciso de dichas
  obligaciones y los plazos establecidos para su cumplimiento, así como efectuar convocatorias populares con
  motivo de acontecimientos ciudadanos. Se publicarán conforme a los usos y costumbre de la localidad.»
  Coinciden.
- **Añadido**: los dos puntos preguntados, con marca 2025, en la sección «Potestad normativa local», más la
  fuente, un bloque en el mapa y dos notas en `examenes` (correcciones 1 a 8).

## Correcciones

| # | Lugar | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|---|
| 1 | Comentario de cabecera | «… Ley 10/2017 de capitalidad de Zaragoza, BOE-A-2018-1683, arts. 48-49 (y 10.4, 14.1).» | Añade: «Ley 7/1999 de Administración Local de Aragón, BOE-A-1999-10151, arts. 139.1 y 142.1 (preguntados en el examen de 1-jun-2025).» | Nueva fuente (punto 3). | — |
| 2 | `fuentes[0]` (LBRL) | «… arts. 4, 22, 47, 49, 65, 70, 70 bis, 123 y 127.» | «… arts. 4, 20, 22, 47, 49, 65, 70, 70 bis, 122, 123 y 127.» | Se citan los arts. 20.1.c y 122.4.a en la tabla (corrección 10). | Ver corrección 10. |
| 3 | `fuentes` (nueva, 5.ª) | (no existía) | «Ley 7/1999, de 9 de abril, de Administración Local de Aragón. Texto consolidado BOE-A-1999-10151 (última actualización publicada el 25/10/2022), arts. 139 y 142.» | Punto 3. | Cabecera del consolidado: «Última actualización publicada el 25/10/2022». |
| 4 | `mapa` (bloque nuevo) | (no existía) | «Ley 7/1999 (Administración Local de Aragón)», «tít. V, cap. III»: «139 Reglamentos y ordenanzas», «142 Bandos». | Punto 3. | Rótulos del consolidado: «TÍTULO V Disposiciones comunes a las entidades locales», «CAPÍTULO III Procedimiento y régimen jurídico de los actos y acuerdos», «Artículo 139. Reglamentos y ordenanzas.», «Artículo 142. Bandos.» |
| 5 | Sección «Potestad normativa local», campo `a` | «art. 4.1.a LBRL y arts. 55-58 TRRL» | «art. 4.1.a LBRL, arts. 55-58 TRRL y arts. 139 y 142 Ley 7/1999» | Punto 3. | — |
| 6 | Sección «Potestad normativa local», lista nueva (tintada), ítem 1 | (no existía) | «Aragón: las disposiciones generales locales se llaman <b>reglamentos</b> si regulan la organización y funcionamiento de la entidad local y, en otro caso, <b>ordenanzas</b>.» (art. 139.1 Ley 7/1999, examen 2025) | P25 de 2025. | Art. 139.1 (citado arriba). |
| 7 | Misma lista, ítem 2 | (no existía) | «Los <b>bandos</b> de los Alcaldes se publican <b>conforme a los usos y costumbre de la localidad</b>.» (art. 142.1 Ley 7/1999, examen 2025) | P26 de 2025. | Art. 142.1 (citado arriba). |
| 8 | `examenes` (dos notas nuevas, al principio) | (no existían) | «Art. 139.1 Ley 7/1999 de Administración Local de Aragón (reglamentos u ordenanzas según su objeto): examen oficial 1-jun-2025, pregunta 25.» y «Art. 142.1 Ley 7/1999 de Administración Local de Aragón (los bandos se publican conforme a los usos y costumbre de la localidad): examen oficial 1-jun-2025, pregunta 26.» | Punto 3. | Tema 21, índices 24 y 25 (citados arriba). |
| 9 | Tabla comparativa, fila «Iniciativa» | General: «El art. 49 LBRL empieza en la aprobación inicial. En gran población, la JGL aprueba los proyectos (127.1.a LBRL).» / Zaragoza: «Gobierno (proyecto), grupos políticos (proposición) o iniciativa popular (48.2).» | General: «… (127.1.a LBRL). Los vecinos pueden presentar proyectos de reglamentos por iniciativa popular (70 bis.2 LBRL).» / Zaragoza: «… o iniciativa popular «en los términos previstos en la normativa básica» (48.2).» | La fila presentaba la iniciativa popular como una diferencia de Zaragoza, y el 48.2.c remite precisamente a la normativa básica. | LBRL 70 bis.2: «Los vecinos que gocen del derecho de sufragio activo en las elecciones municipales podrán ejercer la iniciativa popular, presentando propuestas de acuerdos o actuaciones o proyectos de reglamentos en materias de la competencia municipal.» Ley 10/2017, 48.2.c: «La iniciativa popular, en los términos previstos en la normativa básica.» |
| 10 | Tabla comparativa, fila «Antes del Pleno» | General: «El art. 49 LBRL no menciona dictamen.» / Zaragoza: «… (48.3.c).» | General: «El art. 49 LBRL no menciona dictamen. Las comisiones estudian e informan los asuntos que decide el Pleno (20.1.c y 122.4.a LBRL).» / Zaragoza: «… (48.3.c y 10.4.b).» | Llevaba a pensar que en el régimen general no hay informe previo de una comisión, y la LBRL sí lo prevé con carácter general. | LBRL 20.1.c y 122.4.a, y Ley 10/2017 10.4.b (citados en el punto 2). |
| 11 | Tabla comparativa, fila nueva «Sin reclamaciones» | (no existía) | General: «El acuerdo provisional se entiende <b>definitivamente adoptado</b> (49, párrafo final).» / Zaragoza: «El art. 48 no prevé aprobación tácita: el Pleno aprueba siempre en acto único (48.3.d). Solo las ordenanzas fiscales se entienden aprobadas sin reclamaciones (49.c).» | La diferencia de la aprobación tácita no estaba en la tabla (punto 2 del encargo y aviso del tema 13 en `fuentes.json`). | LBRL 49, párrafo final; Ley 10/2017, 48.3.d y 49.c (citados en el punto 2). |

Total: **11 correcciones** (8 por el punto 3 y 3 en la tabla comparativa). Ningún dato del esquema original era
falso. Los fallos eran omisiones o simplificaciones que inducían a error en la tabla comparativa.

## Lo que no he tocado

- **Resto de la Ley 7/1999 (arts. 139.2-3, 140, 141 y 142.2)**: es del epígrafe, pero el encargo pide añadir solo
  lo preguntado. Lo dejo anotado porque tiene diferencias con la LBRL que pueden preguntarse:
  - Art. 140.1.b: información pública «previo anuncio en la sección correspondiente del «Boletín Oficial de
    Aragón» y en el tablón de anuncios de la entidad del acuerdo de aprobación inicial, por el plazo mínimo de
    treinta días». El 140.1.c añade una «Audiencia previa a las asociaciones vecinales y de defensa de los
    consumidores y usuarios» que no está en el art. 49 LBRL.
  - Art. 141.1: no producen efectos «en tanto no hayan transcurrido quince días contados desde el siguiente al
    de la publicación de su texto íntegro en el «Boletín Oficial» de la provincia». La LBRL cuenta 15 días
    hábiles desde la recepción de la comunicación del acuerdo (arts. 70.2 y 65.2). Si se añade, habría que
    explicar cómo encajan las dos reglas, y eso no se puede resolver solo con el texto. Por eso no lo añado.
  - Recomiendo incluir la Ley 7/1999 (arts. 139-142) en `tools/fuentes.json`, tema 16. Ahora no figura, pero el
    examen de 2025 le dedicó dos preguntas.
- **Banco, tema 21, índice 24 (P25 de 2025)**: el campo `fuente` dice «Art. 139.1 TRLRHL (RDLeg 2/2004)», pero
  la pregunta es del art. 139.1 de la Ley 7/1999. Es otro archivo: no lo toco.
- **Cómputo de los «treinta días» del art. 49.b LBRL**: el esquema no dice si son hábiles o naturales, y hace
  bien. La regla de cómputo está en la LPAC, que no es fuente de este tema.
- **ROF (RD 2568/1986)**: lo cita el aviso de `fuentes.json` para el dictamen de las comisiones. El esquema no lo
  usa, y basta con la LBRL para explicar la diferencia. No lo añado.
- **Art. 59 TRRL** (multas en pesetas): fuera del alcance según `fuentes.json`. Bien omitido.

## Veredicto

**APTO.** Todos los datos coinciden con la redacción vigente. La tabla comparativa ya no presenta como propias
de Zaragoza cosas que también tiene el régimen general, y recoge la diferencia de la aprobación tácita. Los dos
puntos de la Ley 7/1999 preguntados en 2025 están añadidos con su texto oficial.
`node tools/validar-esquemas.js aux-admin-zaragoza 16` → «Todo correcto».
