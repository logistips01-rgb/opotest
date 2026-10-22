# Revisión del esquema del tema 9 (LCSP: tipos contractuales y entidades locales): Auxiliar Administrativo, Ayto. Zaragoza

Revisor independiente. Fecha: 22-oct-2026.

## Fuentes consultadas

- **Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público (LCSP)**: texto consolidado
  `BOE-A-2017-12902`, descargado hoy de https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902 y pasado a
  texto plano en la carpeta de trabajo (`scratchpad/rev-t09/lcsp.txt`). **Última actualización publicada el
  09/04/2026.** Notas de modificación de los preceptos usados:
  - arts. 12 a 18, 25, 26 y 34: sin notas de modificación (redacción original);
  - **DA 2.ª**: sin notas de modificación (redacción original de 2017, 12 apartados);
  - **DA 3.ª**: solo el apartado 3, modificado por la disposición final 27.13 de la Ley 31/2022 (en vigor el
    01/01/2023). El resto, redacción original (11 apartados).
- Epígrafe oficial: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, tema 9.
- Alcance: `tools/fuentes.json`, `aux-admin-zaragoza`, tema 9.
- Banco: tema 21 (exámenes oficiales; 147 preguntas, revisadas todas las de contratación) y tema 9
  (`fuente` de las 241 preguntas).
- He intentado descargar la plantilla del examen de 31-may-2026 de zaragoza.es para comprobar la P11, pero las
  direcciones del anuncio devuelven 404. Para la clave me baso en el tema 21 del banco, que según
  `lotes/ESTADO.md` (entrada del 9-sep-2026) se transcribió de las plantillas definitivas.
- No me he fiado de `t09-citas.md`: he cotejado cada cita con mi propia descarga. Todas las citas son literales
  y de la redacción vigente; la nota sobre la P11 es correcta.

## Comprobaciones hechas: unas 115

- **Epígrafe**: coincide literalmente con el BOPZ 170.
- **Mapa**: rúbricas de los arts. 12 a 18, 25 y 26; ubicación (Título Preliminar, Capítulo II, Sección 1.ª,
  y Sección 3.ª «Contratos administrativos y contratos privados»); número de apartados de la DA 2.ª (12) y de la
  DA 3.ª (11). Todo correcto.
- **Importes, porcentajes y plazos, contra la redacción vigente**:
  - DA 2.ª.1: **10 %** de los recursos ordinarios, **6 millones** de euros, plurianuales de hasta **4 años**
    con prórrogas, importe acumulado de las anualidades y porcentaje referido al primer ejercicio. Correcto.
  - DA 2.ª.9: **10 %** y **3 millones** de euros. Correcto; la base es el presupuesto base de licitación
    (art. 100.1), no el valor estimado (añadido).
  - DA 2.ª.3 y 6, DA 3.ª.4 y 7: **5.000 habitantes**. Correcto.
  - DA 2.ª.5: **10 %** de los recursos ordinarios (Juntas de Contratación). Correcto.
  - DA 2.ª.7: **no menos de tres** y electos **no más de un tercio**. Correcto.
  - DA 3.ª.9: aplazamiento de hasta **4 años**. Correcto.
  - DA 3.ª.11: **20.000 habitantes** y anualidad media de **200.000 euros**. Correcto.
  - Art. 18.3: obra de más de **50.000 euros** en un mixto, proyecto. Correcto.
- **Órganos**: Alcalde, Pleno, Junta de Gobierno Local (DA 2.ª.4 y 11), Pleno para los pliegos generales
  (DA 2.ª.2 y 4), Interventor (DA 3.ª.3), Secretario y asesoría jurídica, Órgano de Apoyo (DA 3.ª.8),
  Diputación o Comunidad uniprovincial (DA 2.ª.6 y DA 3.ª.6). Correctos.
- **Enumeraciones**: los cinco tipos (art. 12.1); los cuatro supuestos del art. 16.3; los siete informes
  jurídicos preceptivos de la DA 3.ª.8 (están todos); las tres clases de contratos privados del art. 26.1; las
  materias de las Juntas de Contratación (DA 2.ª.5). Faltaban la letra b) del art. 13.1 y la segunda causa de
  los administrativos especiales del art. 25.1.b (corregido).
- **Trampas**: las 10 afirmaciones tachadas son falsas y las 10 correcciones, ciertas.
- **Marcas de examen**, contra el tema 21:
  - 2025: P14 y P33 (DA 2.ª.4), P34 (DA 2.ª.7), P35 (DA 3.ª.6). Correctas en `esencial`, secciones y
    `examenes`.
  - 2026: P11 (DA 3.ª.8) y P20 (art. 15, concesión de servicios). Correctas.
  - Sin marca, bien: P2 de 2025 (art. 85.2 LBRL) y P14 de la segunda prueba de 2025 (art. 9 LCSP, fuera de
    los arts. 12-18).
- **DA 3.ª.8 y P11 de 2026**: la redacción vigente dice: «en los municipios acogidos al régimen regulado en su
  Título X, corresponderá al titular de la asesoría jurídica la emisión de los informes atribuidos al
  Secretario en el presente apartado. La coordinación de las obligaciones de publicidad e información
  antedichas corresponderá al titular del Órgano de Apoyo a la Junta de Gobierno». No hay ningún reparto por
  importe ni duración (esa fórmula es la de la DA 2.ª.4 y 11, para el órgano de contratación). La clave del
  banco es la c) («según cual sea el importe del contrato o la duración del mismo»). El esquema recogía bien
  el texto legal, pero no avisaba de la discrepancia; he añadido una nota neutral en `examenes`, con el mismo
  formato que la del tema 7 (P50 de 2026).

## Correcciones

| # | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|
| 1 | `esencial` 1: «Se califican por los arts. 12 a 17» | «Se califican por las normas de la sección 1.ª (arts. 12 a 18)» | La sección que califica llega al art. 18 (contratos mixtos). | Art. 12.1: «se calificarán de acuerdo con las normas contenidas en la presente sección». Sección 1.ª: arts. 12 a 18. |
| 2 | Obras (13): «Ejecutar una obra, sola o con la redacción del proyecto, o los trabajos del Anexo I.» | Se añade: «También realizar, por cualquier medio, una obra que cumpla los requisitos fijados por la entidad contratante.» | Faltaba la letra b) del art. 13.1, que es un objeto distinto. | Art. 13.1.b: «La realización, por cualquier medio, de una obra que cumpla los requisitos fijados por la entidad del sector público contratante que ejerza una influencia decisiva en el tipo o el proyecto de la obra.» |
| 3 | Suministro (16): «Adquirir, arrendar (con o sin opción de compra) o arrendamiento financiero…»; «No lo son los contratos sobre propiedades incorporales o valores negociables.» | «Adquisición, arrendamiento financiero o arrendamiento (con o sin opción de compra)…»; se añade «(salvo lo dicho para los programas de ordenador en el 16.3.b)». | Concordancia de la frase y salvedad legal que faltaba. Sin ella, la regla parece contradecir la columna «Siempre son suministro». | Art. 16.2: «Sin perjuicio de lo dispuesto en la letra b) del apartado 3 de este artículo respecto de los contratos que tengan por objeto programas de ordenador, no tendrán la consideración de contrato de suministro los contratos relativos a propiedades incorporales o valores negociables.» |
| 4 | Art. 25: «(salvo algunos servicios financieros, artísticos y suscripciones)»; «Administrativos especiales: los declarados por ley o vinculados al giro o tráfico de la Administración» | «(salvo algunos servicios financieros, de creación artística y literaria y de espectáculos, y las suscripciones a revistas, publicaciones periódicas y bases de datos)»; «Los declarados así por una ley y los administrativos especiales: vinculados al giro o tráfico específico de la Administración o que satisfacen de forma directa o inmediata una finalidad pública de su específica competencia» | Enumeración incompleta: faltaba la segunda causa de los administrativos especiales, que es pregunta típica. | Art. 25.1.b: «Los contratos declarados así expresamente por una Ley, y aquellos otros de objeto distinto […] que tengan naturaleza administrativa especial por estar vinculados al giro o tráfico específico de la Administración contratante o por satisfacer de forma directa o inmediata una finalidad pública de la específica competencia de aquella.» |
| 5 | Tabla de órganos, contratos privados y patrimoniales: «Hasta el 10 % de los recursos ordinarios y 3 millones.» | «Presupuesto base de licitación (en la enajenación, su valor) hasta el 10 % de los recursos ordinarios y 3 millones.» | El límite no se mide como en la DA 2.ª.1 (valor estimado). Puede preguntarse. | DA 2.ª.9: «cuando el presupuesto base de licitación, en los términos definidos en el artículo 100.1, no supere el 10 por ciento de los recursos ordinarios del presupuesto ni el importe de tres millones de euros, así como la enajenación del patrimonio, cuando su valor no supere el porcentaje ni la cuantía indicados». |
| 6 | DA 3.ª.8, régimen común: terminaba en «…interpretación y resolución.» | Se añade: «También coordina las obligaciones de publicidad e información de la Ley 19/2013.» | Faltaba el tercer contenido del párrafo 1, al que remite la línea siguiente («la coordinación de publicidad […], el titular del Órgano de Apoyo»). | DA 3.ª.8: «Corresponderá también al Secretario la coordinación de las obligaciones de publicidad e información que se establecen en la Ley 19/2013, de 9 de diciembre, de Transparencia, Acceso a la Información Pública y Buen Gobierno.» |
| 7 | Cifra «20.000 hab. / 200.000 €»: «Municipios menores pueden licitar una concesión de servicios de varios servicios si la anualidad media no supera esa cifra» | «Municipios de menos de 20.000 hab.: una concesión de servicios no armonizada puede abarcar dos o más servicios públicos si la anualidad media no supera 200.000 €» | «Municipios menores» era ambiguo (en el resto del tema «pequeños» son los de menos de 5.000) y faltaba que el contrato no esté sujeto a regulación armonizada. | DA 3.ª.11: «Los Municipios de población inferior a 20.000 habitantes podrán licitar contratos no sujetos a regulación armonizada de concesión de servicios que se refieran a la gestión de dos o más servicios públicos diferentes siempre y cuando la anualidad media del contrato no supere los 200.000 euros». |
| 8 | `examenes`: «DA 3.ª.8 (informes del Secretario en municipios de gran población): examen oficial 31-may-2026, pregunta 11.» | Se añade: «Ojo: la respuesta que consta como correcta es la c), «Al titular del Órgano de Apoyo a la Junta de Gobierno o al titular de la asesoría jurídica según cual sea el importe del contrato o la duración del mismo». La redacción vigente de la DA 3.ª.8 no reparte por importe ni por duración: atribuye esos informes al titular de la asesoría jurídica (opción b) y al titular del Órgano de Apoyo le da la coordinación de las obligaciones de publicidad e información. El esquema sigue la ley.» | Punto 2 del encargo. Sin el aviso, quien estudie con el esquema respondería b) sin saber que la clave dio c). La nota recoge las dos cosas y no opina. | DA 3.ª.8, párrafo 2: «corresponderá al titular de la asesoría jurídica la emisión de los informes atribuidos al Secretario en el presente apartado. La coordinación de las obligaciones de publicidad e información antedichas corresponderá al titular del Órgano de Apoyo a la Junta de Gobierno.» |

`node tools/validar-esquemas.js aux-admin-zaragoza 9` → «Todo correcto» (antes y después de las correcciones).

## Lo que no he tocado, y por qué

- **Explicación de la P11 en el banco** (tema 21, `exp`): dice que la DA 3.ª.8 «distribuye la emisión de esos
  informes […] en función del importe o duración del contrato», y eso no lo dice la ley. No lo corrijo porque
  está fuera de mi encargo (solo t09.js). Recomiendo que se reescriba para decir que la clave oficial es la c)
  y que el texto vigente no recoge ese reparto, sin cambiar la clave.
- **Arts. 25 y 26** (contratos administrativos y privados): son de la Sección 3.ª, no de la 1.ª
  («Delimitación de los tipos contractuales»). Los dejo como apoyo, marcados así en el mapa, porque la DA 2.ª
  reparte competencias con esas categorías («contratos administrativos especiales», «contratos privados»).
- **DA 2.ª.7, párrafo 2** (personal de las Diputaciones o de las Comunidades uniprovinciales en la Mesa) y
  **DA 3.ª.6, última frase** (la referencia a la supervisión favorable en el acuerdo de aprobación): no
  aparecen. Son detalles menores; el esquema no dice que las listas estén completas en esos puntos.
- **DA 2.ª.5**: la ley no deja claro si el límite del 10 % se aplica solo a los servicios o a las tres
  materias, y el esquema mantiene esa misma ambigüedad. Lo dejo así para no interpretar más allá del texto.
- **Composición de la Mesa** en `esencial` («son vocales el Secretario y el Interventor»): abrevia las
  alternativas «o, en su caso, el titular…», que sí están completas en la sección. No cambia el sentido.

## Veredicto

**APTO.** 8 correcciones; todas las cifras (6 millones, 3 millones, 10 %, 4 años, 5.000 y 20.000 habitantes,
200.000 €, 50.000 €, tres vocales, un tercio) coinciden con la redacción vigente (consolidado del 09/04/2026).
