# Revisión independiente de `pendientes-varias.json`

Banco: `aux-admin-zaragoza`. Fecha: 22-oct-2026. Revisor: Claude, sin relación con el agente que hizo la propuesta. No se ha modificado ningún archivo de datos ni se ha hecho commit.

Resultado: **12 aprobadas**, 9 sin cambios y 3 con correcciones (19-152, 19-153 y 19-159). Están en `lotes/auditoria/pendientes-varias.revisado.json`, con el mismo formato y un campo `revisor` en cada entrada. `node tools/aplicar-cambios.js lotes/auditoria/pendientes-varias.revisado.json --tipo correccion --titulo … --simular` aplica las 12 sin error.

## Veredictos

| Tema | Índice | Acción | Veredicto | Nota |
|---|---|---|---|---|
| 19 | 141 | explicacion | Aprobada | — |
| 19 | 142 | enunciado | Aprobada | — |
| 19 | 152 | enunciado (+ opciones) | Aprobada con cambio en el `motivo` | El `motivo` decía que el banco no tenía ninguna pregunta sobre el art. 60.2 TREBEP, y es falso |
| 19 | 153 | enunciado (+ opciones) | **Aprobada con reformulación** | La versión propuesta repetía casi literalmente la pregunta 18-295 |
| 19 | 159 | enunciado | Aprobada con un retoque en la explicación | El art. 247.4 de la Ley 7/1999 no dice «en ningún caso» |
| 19 | 155 | enunciado (+ clave) | Aprobada | — |
| 19 | 168 | respuesta | Aprobada | — |
| 19 | 15 | enunciado | Aprobada | — |
| 14 | 92 | respuesta | Aprobada | Su clave coincide con la de 14-165, pero el enunciado es distinto |
| 14 | 291 | respuesta | Aprobada | — |
| 15 | 178 | respuesta | Aprobada | — |
| 17 | 69 | enunciado | Aprobada | — |

Índice = posición en `data.questions[tema]` en el banco cargado hoy. Los 12 `q` coinciden exactamente con una sola pregunta de su tema. Las de los índices 92 y 291 del tema 14 son las que el informe identifica por contenido.

## Comprobaciones hechas

- **Textos oficiales.** Los descargué yo mismo del BOE consolidado (`act.php`) y no usé los del otro agente:
  - TREBEP (BOE-A-2015-11719): actualizado el 03/10/2026;
  - RD 896/1991 (BOE-A-1991-15126): sin modificar;
  - LBRL (BOE-A-1985-5392): actualizada el 03/10/2026; también descargué la redacción original de 1985;
  - Ley 10/2017 (BOE-A-2018-1683): actualizada el 15/01/2019;
  - Ley 7/1999 de Aragón (BOE-A-1999-10151): actualizada el 25/10/2022.

  Las reformas de 2026 de la LBRL (Ley 4/2026, en vigor el 23/10/2026) solo añaden la letra q) al art. 25.2 y cambian el art. 69.1. No afectan a lo que preguntan estas preguntas.
- **Bases de Zaragoza.** Las comprobé en `tools/temarios/`:
  - TRBGTL 6.8.3: todos los miembros del tribunal, salvo la secretaría, deben ser funcionarios de carrera;
  - TRBGTL 6.8.4: la pertenencia al tribunal «será siempre a título individual»;
  - bases de 2025: el TRBGTL se aprobó por decreto de la Concejalía delegada de Personal de 19 de mayo de 2025, y el sistema selectivo es la oposición (base 1.6).
- **Script de validación.** `…/scratchpad/rev-pend/bin/validar.js` comprueba lo siguiente:
  - que el `q` es único y coincide;
  - que hay 4 opciones distintas y la clave está dentro de rango;
  - que ninguna opción remite a otras («todas las anteriores» y similares);
  - que la explicación no menciona letras de opción;
  - que ningún enunciado nuevo repite otro del banco;
  - que todo fragmento entre «» de la explicación, del enunciado nuevo y de `cita` aparece literalmente en los textos descargados.

  Pasan todas. También comprobé que el validador detecta una cita inventada y una mención «la opción C» que añadí a propósito.
- **«Deroga».** Ninguna explicación, enunciado ni `motivo` dice que el TREBEP «deroga» algo. Todos usan «desplaza», «matiza» o «superada». Es la formulación prudente:
  - para la Ley 7/1999, que es autonómica, la relación con la legislación básica es de prevalencia;
  - para el RD 896/1991 y el art. 127.1.h) LBRL, «desplazado» tampoco es inexacto.

## Detalle por pregunta

### 19-141 (art. 2 RD 896/1991, sistema general): aprobada

La clave «Oposición» es literal del art. 2, y el enunciado se limita a ese artículo. Las dos citas del art. 61.6 TREBEP son literales.

La explicación no dice que la preferencia del RD por la oposición esté desplazada. Solo dice que el concurso necesita ley, y es correcto. Zaragoza convoca por oposición (base 1.6 de 2025).

### 19-142 (art. 2, criterio para concurso-oposición/concurso): aprobada

Opciones y clave no cambian. La clave es literal: «por la naturaleza de las plazas o de las funciones a desempeñar». El paréntesis del enunciado dice «desplazado», no «derogado», y no da pistas sobre la respuesta. La explicación descarta los tres distractores sin usar letras.

### 19-152 (art. 4.f RD, Presidente del tribunal → TREBEP 60.2): aprobada; se corrige solo el `motivo`

- La clave «No, porque el personal de elección o de designación política no puede formar parte de ellos» reproduce el art. 60.2.
- Los tres distractores son falsos según el art. 60.2: «Sí, pero solo para la presidencia, con voz y sin voto», «Sí, si lo prevén las bases» y «Sí, si no superan un tercio».
- El distractor de la presidencia podría parecer apoyado por el art. 127.1.h) LBRL. Pero ese artículo no habla de «voz y sin voto», el enunciado se limita al art. 60.2 y la explicación explica por qué el 127.1.h) ya no permite elegir a un concejal.
- La cita del RD en el enunciado es literal. La del art. 247.1 de la Ley 7/1999 también: «será el Presidente de la Corporación o miembro de la misma en quien delegue».
- Lo que dice de las bases de Zaragoza está comprobado (TRBGTL 6.8.3).
- **Error en la justificación.** El `motivo` decía que retirarla «dejaría el banco sin ninguna pregunta sobre el art. 60.2 TREBEP (no hay ninguna en los temas 17, 18 ni 19)». Es falso: **el tema 18 tiene en el índice 294 «Según el art. 60.2 del TREBEP, no podrán formar parte de los órganos de selección:»**.
- Aun así, la versión nueva no la duplica. Aplica la regla al Alcalde y los concejales, en el tema de la función pública local, y explica por qué ya no rige el art. 4.f). Por eso la apruebo y corrijo solo el `motivo`.

### 19-153 (art. 4.f RD, vocal de la Comunidad Autónoma → TREBEP 60.3): aprobada con reformulación

- **Problema.** El tema 18 tiene en el índice 295 «Según el art. 60.3 del TREBEP, la pertenencia a los órganos de selección será siempre:». Su clave es «A título individual, sin que pueda ostentarse en representación o por cuenta de nadie».
- La versión propuesta tenía casi la misma clave: «Será siempre a título individual, sin que pueda ostentarse en representación o por cuenta de nadie». También tenía distractores del mismo tipo: «salvo la del Presidente» frente a «salvo la del secretario», y la representación sindical en los dos casos. Era un duplicado práctico, y su justificación («el banco no tiene ninguna pregunta sobre el art. 60.3») es falsa.
- **Corrección.** La reformulo como pregunta aplicada, en paralelo a la 152: «Conforme al artículo 60.3 del TREBEP, ¿puede hoy un vocal formar parte del tribunal de selección de un ayuntamiento en representación de la Comunidad Autónoma?».
  - Clave: «No, porque la pertenencia a los órganos de selección es siempre a título individual».
  - Distractor 1: «Sí, cuando lo prevean las bases y lo proponga el IAAP». Es la fórmula del art. 247.2.b) Ley 7/1999, desplazada.
  - Distractor 2: «Sí, aunque solo con voz y sin voto…».
  - Distractor 3: «Sí, siempre que sea funcionario de carrera y tenga la titulación exigida». Son requisitos de los miembros, no una habilitación para representar a nadie.
- Todos los distractores son falsos según el art. 60.3.
- La explicación cita literalmente el art. 60.3, el art. 247.2.b) de la Ley 7/1999 y la base 6.8.4 del TRBGTL. Dice que el RD y la ley aragonesa «siguen diciendo lo contrario en su texto» pero «han quedado desplazados».
- La explicación propuesta decía que esas normas lo «preveían», en pasado. Era inexacto, porque su texto no ha cambiado.
- Si el coordinador prefiere no tener dos preguntas sobre el art. 60.3, la alternativa limpia es retirar la 19-153.

### 19-159 (art. 7 RD, no aprobar más que plazas → TREBEP 61.8): aprobada con retoque

- El enunciado nuevo quita «en ningún caso» y menciona la excepción del art. 61.8. La clave sigue siendo correcta.
- Las citas del art. 7 RD y del art. 61.8 TREBEP son literales. La paráfrasis de la relación complementaria por renuncias (art. 61.8, párrafo segundo) es fiel.
- **Retoque.** La explicación decía que el art. 247.4 de la Ley 7/1999 lo dice «en los mismos términos», pero ese artículo no contiene «en ningún caso» y añade la nulidad de pleno derecho. Pasa a: «la misma regla, sin excepciones, está en el art. 247.4…».

### 19-155 (quién aprueba las bases en Zaragoza): aprobada

- **Clave.** «El Gobierno de Zaragoza, que es su Junta de Gobierno Local». Está comprobada:
  - el art. 127.1.h) LBRL lo atribuye a la Junta de Gobierno Local en los municipios de gran población («las bases de las convocatorias de selección y provisión de puestos de trabajo»);
  - el art. 14.1.i) de la Ley 10/2017 lo repite para el Gobierno de Zaragoza;
  - la DA 2.ª de la Ley 10/2017 dice que la Junta de Gobierno Local «se denomina … Gobierno de Zaragoza».
- **Delegación.** Es delegable: el art. 14.2 de la Ley 10/2017 no excluye las bases de las materias que se pueden delegar, y tampoco lo hace el art. 127.2 LBRL. Por eso es correcto lo que dice la explicación sobre el decreto de la Concejalía delegada.
- **Distractores.** Son falsos en Zaragoza:
  - «el Presidente de la Corporación» es la regla de régimen común (art. 21.1.g LBRL);
  - «el Pleno» es lo que dicen el art. 5 RD y el art. 246.1 de la Ley 7/1999, superados por la LBRL. El art. 21.1.g procede de la Ley 11/1999, posterior a la Ley 7/1999;
  - el tribunal no aprueba las bases.
- Una sola opción es correcta, la explicación es exacta y la pregunta vale para Zaragoza como municipio de gran población.

### 19-168 (DA 2.ª RD 896/1991, personal laboral fijo): aprobada

- La opción correcta nueva es literal de la DA 2.ª.2, sin el inciso del Pleno.
- El distractor «Oposición libre en todo caso, con bases aprobadas por el Presidente de la Corporación» sigue siendo falso por su primera mitad.
- Las citas de la DA 2.ª.2 y del art. 61.7 TREBEP son literales, y lo que dice sobre Zaragoza coincide con la 155.

### 19-15 (art. 102 LBRL): aprobada

- Comprobé que el art. 102 está en el Capítulo IV del Título VII, que sigue vigente. El que derogó el TREBEP es el Capítulo III.
- Con el enunciado limitado al art. 102, la clave es literal. El distractor de la Junta de Gobierno Local es falso, porque añade que nombra el Pleno.
- La explicación da correctamente la regla de Zaragoza (arts. 127.1.h LBRL y 14.1.i Ley 10/2017). La cita del art. 21.1.g) es literal.

### 14-92 (art. 25.2 LBRL, urbanismo): aprobada

- La letra a) vigente dice «Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística» y la j) dice «Protección de la salubridad pública». Lo comprobé en el texto consolidado.
- En la redacción original de 1985, «Ordenación, gestión, ejecución y disciplina urbanística…» estaba en la letra d). Lo comprobé en la versión de 03/04/1985.
- Las letras a) y j) no cambian con las reformas de 2018-2026.
- Tras el cambio, la clave coincide con la de 14-165, pero el enunciado es distinto. No es un duplicado.

### 14-291 (art. 25.2.f LBRL, protección civil): aprobada

La letra f) vigente es «Policía local, protección civil, prevención y extinción de incendios». La de 1985 era la letra c): «Protección civil, prevención y extinción de incendios». Ninguna habla de «prevención de riesgos».

La opción correcta y la explicación quedan exactas. La nota de procedencia se conserva tal como estaba.

### 15-178 (ubicación de los arts. 69 a 72 LBRL): aprobada

Lo comprobé en el índice del texto consolidado:

- el Título II tiene cuatro capítulos: Territorio y población, Organización, Competencias y Regímenes Especiales;
- el Título V, «Disposiciones comunes a las Entidades locales», tiene el Capítulo IV, «Información y participación ciudadanas», desde el art. 69;
- el Capítulo V empieza en el art. 73;
- la ley empieza por el Título I, «Disposiciones generales», sin Título Preliminar.

Una sola opción es correcta.

### 17-69 (art. 20.1 TREBEP): aprobada

El art. 20.1 dice «establecerán», y su párrafo segundo es la definición que recoge el enunciado. Opciones y clave no cambian.

La DF 4.ª.1 difiere los efectos del Capítulo II del Título III, pero el enunciado pregunta qué dice el artículo, así que es correcto.

## Hallazgos para el coordinador (no incluidos en el JSON)

- **Afirmación falsa del informe original.** El informe dice que se buscó «60.2», «60.3», «designación política» y «a título individual» en todos los temas sin resultados. Pero el banco cargado hoy tiene las preguntas 18-294 (art. 60.2) y 18-295 (art. 60.3).
- **Los otros hallazgos del informe original quedan fuera de esta revisión:** 14-93, 18-273 y 19-18. El de 19-18 me parece fundado: el art. 127.1.h LBRL y el art. 14.1.i Ley 10/2017 atribuyen al Gobierno de Zaragoza «el número y régimen del personal eventual», y lo comprobé en ambos textos.
