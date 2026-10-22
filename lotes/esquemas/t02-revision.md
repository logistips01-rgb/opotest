# Tema 2 · Revisión independiente del esquema (t02.js)

Revisión del 22-oct-2026. He comprobado cada dato contra los textos oficiales que he descargado y extraído yo. No he usado las citas de `t02-citas.md` como fuente: solo me han servido para saber dónde buscar.

## Fuentes consultadas

| Fuente | Identificador | Última actualización / versión |
|---|---|---|
| LO 3/2007, para la igualdad efectiva de mujeres y hombres | BOE-A-2007-6115 (consolidado, `act.php`) | «Última actualización, publicada el 02/08/2024». El Título I (arts. 3-13) no tiene notas de modificación, así que rige la redacción original. |
| Ley 4/2007 de Aragón, de Prevención y Protección Integral a las Mujeres Víctimas de Violencia | BOE-A-2007-11593 (consolidado, `act.php`) | «Última actualización, publicada el 09/04/2007» (solo hay texto inicial; no ha tenido modificaciones). |
| II Plan de Igualdad para empleadas y empleados del Ayuntamiento de Zaragoza | `tools/temarios/plan-igualdad-zaragoza-2024-2027.pdf` (`pdftotext -layout`) | Portada: «Aprobado por acuerdo del Gobierno de Zaragoza publicado en el BOPZ nº 16, de 20 de enero de 2024». 67 páginas. |
| Epígrafe oficial | `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, TEMA 2 | Coincide literalmente con `epigrafe`. |
| Alcance | `tools/fuentes.json` → `aux-admin-zaragoza` → tema 2 | Respetado: LO 3/2007 solo Título I; Ley 4/2007 solo caps. I y IV. |
| Exámenes oficiales | `data.questions[21]` del banco | Índices 0 (1-jun-2025, P1), 10 (1-jun-2025, P11), 78 (31-may-2026, P4) y 91 (31-may-2026, P17). No hay más preguntas del tema 21 sobre esta materia (búsqueda por igualdad, 3/2007, 4/2007, violencia, acoso, discrimin, mujer, acogida, embarazo, protocolo, maternidad, sexo, género, víctima, «Plan de»). |

## Comprobaciones hechas: 169

- 166 elementos del esquema: título, etiquetas, fuentes y epígrafe (8); 5 ideas esenciales; 42 entradas del mapa (rúbricas de los arts. 3-13 LO, 1-4 y 18-31 L4, y la estructura del Plan); 10 cifras; 82 frases o filas de las 8 secciones; 10 trampas (que la `x` sea falsa y la `ok` cierta); 4 notas de `examenes` y 5 marcas `{{examen}}`/`examen:`.
- Las 3 dudas del redactor (más abajo).

Todas las marcas de examen corresponden a una pregunta del tema 21 sobre ese punto exacto y con el año correcto. La lista `examenes` (fecha y número de pregunta) es correcta.

## Dudas del redactor: cómo quedan resueltas

1. **44 frente a 43 acciones.** Lo he confirmado: el apdo. 8 dice «En resumen, este II Plan de Igualdad cuenta con 4 Ejes de actuación con un objetivo cada uno, 12 Líneas de Actuación, 21 objetivos específicos y 44 acciones». La suma de su desglose por líneas (6+5+5+3+5+3+2+3+2+5+2+3) también da 44. Pero el apdo. 9 numera solo 43: en la Línea C.1, para la que el apdo. 8 anuncia «dos objetivos específicos y 3 acciones», solo aparecen C.1.1.1 y C.1.2.1.
   - **Decisión:** se mantiene «44 acciones», que es la cifra literal del Plan y la que pide la pregunta 48 del tema 2 del banco. Se añade que el apdo. 9 solo numera 43, para que contarlas no lleve a dudar en el examen.
2. **«Comité de Asesoramiento de 7 personas».** Lo he confirmado: Anexo II.VII.2 dice «Estará formado por: dos técnicos/as del Servicio Prevención y Salud Laboral, una persona de la Asesoría Confidencial, un abogado/a de la Asesoría Jurídica, un Psicólogo/a del Servicio de Igualdad y dos representantes Sindicales». 2+1+1+1+2 = 7. El Plan no escribe el total. Los expertos que pueden asistir al Comité («podrá ser asistido por profesionales expertos») no son miembros.
   - **Decisión:** se mantiene, porque la suma es exacta y útil. Se indica que es una suma de la composición y no una cifra del Plan, para que no se tome por un dato literal. También he completado la composición con los servicios de procedencia, que son lo que pregunta el banco (tema 2, pregunta 246).
3. **Nombre de la Línea A.1.** Lo he confirmado: «Conciliación y sensibilización» aparece una sola vez, en el desglose del apdo. 8 (pág. 20). «Comunicación y sensibilización» aparece cuatro veces: en el índice, en el cuadro de objetivos (pág. 22) y en las dos cabeceras de la Línea A 1 del apdo. 9.
   - **Decisión:** se mantiene «Comunicación y sensibilización». La variante del apdo. 8 es una errata evidente: sus objetivos A.1.1 («Informar y sensibilizar…») y A.1.2 («imagen de la institución inclusiva y no sexista») son de comunicación, y «Conciliación» es el nombre de la Línea C.1. Además, `fuentes.json` también la llama «comunicación y sensibilización». No añado la errata al esquema porque solo confundiría.

## Correcciones

| # | Lugar | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|---|
| 1 | `esencial[1]` | «la orden de discriminar, el acoso sexual y el acoso por razón de sexo, el trato desfavorable…» | «… el acoso sexual y el acoso por razón de sexo (y condicionar un derecho a aceptarlos), el trato desfavorable…» | La enumeración de supuestos asimilados a discriminación estaba incompleta y no lo decía: faltaba el art. 7.4. | LO art. 7.4: «El condicionamiento de un derecho o de una expectativa de derecho a la aceptación de una situación constitutiva de acoso sexual o de acoso por razón de sexo se considerará también acto de discriminación por razón de sexo.» |
| 2 | `cifras` «4 ejes» | «Del Plan, con 12 líneas, 21 objetivos específicos y 44 acciones» | «… y 44 acciones (cifra que da el propio Plan; en el apdo. 9 solo aparecen 43 numeradas)» | Duda 1 del redactor. | Apdo. 8: «… 21 objetivos específicos y 44 acciones.» Apdo. 9, Línea C 1: solo «C.1.1.1» y «C.1.2.1». |
| 3 | `cifras` «7 personas» | «Comité de Asesoramiento: 2 de Prevención, 1 de la Asesoría Confidencial, 1 abogado/a, 1 psicólogo/a, 2 sindicales» | «Comité de Asesoramiento (suma de su composición; el Plan no da el total): 2 técnicos/as de Prevención y Salud Laboral, 1 de la Asesoría Confidencial, 1 abogado/a, 1 psicólogo/a y 2 representantes sindicales» | Duda 2 del redactor: el total es una suma y no un dato literal. | Anexo II.VII.2 (citado arriba, en la duda 2). |
| 4 | Sección «Acoso, embarazo y represalias», lista | «Ambos acosos se consideran en todo caso discriminatorios. Todo ello sin perjuicio del Código Penal.» | «… La definición de acoso sexual se da sin perjuicio del Código Penal.» | «Todo ello» extendía la salvedad del Código Penal a los dos acosos. La ley solo la pone en la definición de acoso sexual (7.1); el 7.2 no la lleva. | LO art. 7.1: «Sin perjuicio de lo establecido en el Código Penal, a los efectos de esta Ley constituye acoso sexual…»; art. 7.2: «Constituye acoso por razón de sexo cualquier comportamiento…» |
| 5 | Sección «Ley 4/2007…», violencia doméstica (3.a) | «… o estén bajo potestad, tutela o guarda del cónyuge o conviviente.» | «… o estén bajo autoridad familiar, potestad, tutela, curatela, acogimiento o guarda de hecho del cónyuge o conviviente.» | Enumeración parcial presentada como completa. | L4 art. 3.a: «… que se hallen sujetas a autoridad familiar, potestad, tutela, curatela, acogimiento o guarda de hecho del cónyuge o conviviente.» |
| 6 | Sección «Ley 4/2007…», violencia social (3.c) | «sin ninguno de los vínculos anteriores; incluye a las personas bajo custodia o guarda en centros públicos o privados.» | «quien carece de los vínculos anteriores. Incluye en todo caso a quienes tengan con ella una relación distinta de la del apartado a) por la que esté integrada en su núcleo de convivencia familiar, y a las personas que, por su especial vulnerabilidad, están bajo custodia o guarda en centros públicos o privados.» | Faltaba el primero de los dos supuestos incluidos «en todo caso». | L4 art. 3.c: «… y entre los que se encuentran, en todo caso, las personas amparadas en cualquier relación distinta a la indicada en el apartado a) por la que se encuentre integrada en el núcleo de su convivencia familiar, así como las personas que por su especial vulnerabilidad se encuentran sometidas a custodia o guarda en centros públicos o privados.» |
| 7 | Sección del Plan, tabla de ejes, Eje A (objetivo) | «La igualdad como valor fundamental de la organización municipal.» | «La igualdad de trato y oportunidades como **uno de los valores fundamentales** de la organización municipal.» | «Como valor fundamental» y «uno de los valores fundamentales» no dicen lo mismo, y el matiz es justo el que distingue opciones de test. El banco lo pregunta (tema 2, pregunta 49). | Apdo. 8: «Eje A) CULTURA DE LA ORGANIZACIÓN. Tiene como objetivo garantizar la igualdad de trato y oportunidades entre mujeres y hombres como uno de los valores fundamentales de la organización municipal.» |
| 8 | Sección del Plan, tabla de ejes, Línea A.4 | «A.4 Estructura y órganos de seguimiento» | «A.4 Estructura y órganos municipales para el seguimiento del Plan» | Nombre de la línea recortado. | Índice y apdo. 9: «Línea A 4 ESTRUCTURA Y ÓRGANOS MUNICIPALES PARA EL SEGUIMIENTO DEL PLAN». |
| 9 | Sección «Protocolo…», columna Comité de Asesoramiento | «Dos técnicos/as de Prevención, …, un abogado/a, un psicólogo/a y dos representantes sindicales.» | «Dos técnicos/as del Servicio de Prevención y Salud Laboral, …, un abogado/a de la Asesoría Jurídica, un psicólogo/a del Servicio de Igualdad y dos representantes sindicales.» | Composición sin la procedencia de cada miembro, que es lo que pregunta el banco (tema 2, pregunta 246). | Anexo II.VII.2 (citado arriba, en la duda 2). |

`node tools/validar-esquemas.js aux-admin-zaragoza 2` → «Todo correcto» (0 errores, 0 avisos).

## Lo que no he tocado, y por qué

- **Vigencia según el apdo. 11.** El apdo. 11 dice «cuatro años desde su aprobación por el Gobierno de Zaragoza y publicación en el Boletín Oficial de la Provincia», mientras que el apdo. 5.3 dice «desde su aprobación y registro». El esquema sigue el 5.3, que es el que citó el examen de 2025 (P1). No añado la variante del apdo. 11 para no crear dudas.
- **Fecha de aprobación del Plan (22-dic-2023).** Aparece en la pregunta del examen de 2025, pero no en el PDF del Plan. Con razón, el redactor no la incluye.
- **Garantías del Protocolo (VI).** El esquema enumera las cinco garantías con nombre (1-5) y recoge parte del punto 7. Omite el 6 («la aplicación de este protocolo no impedirá … las acciones legales oportunas»). Este no es una garantía con nombre, así que la lista no queda falsamente completa. Lo añadiría solo si hiciera falta espacio para el procedimiento.
- **Otros puntos preguntados en el banco (tema 2) que el esquema no recoge.** Son la historia del I PIEEM (Mesa para la Igualdad de 9-mar-2009, aprobación en 2013), las fechas de la Comisión Negociadora (20-feb y 1-mar-2023), el art. 65 del Pacto-Convenio, más datos del diagnóstico (2,3 puntos de brecha retributiva, 77,8 % de mujeres en el Comité de Empresa) y el apdo. III (Alcance) del Protocolo. Todos son del Plan y entran en el epígrafe, pero son de detalle. Añadirlos alargaría el esquema por encima de lo razonable. Los dejo a criterio de quien coordine.
- **Abreviaturas aceptables.** Los títulos de los mapas, «Eje D · Prevención, salud laboral y protección frente al acoso» y «principio informador» en lugar de la cita completa del art. 4 resumen sin cambiar el sentido.

## Veredicto

**APTO.** Hice 9 correcciones y resolví las 3 dudas del redactor contra el texto oficial. No queda nada pendiente.
