# Correcciones pendientes de varias preguntas (temas 14, 15, 17 y 19)

Banco: `aux-admin-zaragoza`. Fecha: 22-oct-2026. No se ha modificado ningún archivo de datos.
Propuestas: `lotes/auditoria/pendientes-varias.json`, con 12 entradas en el formato de `tools/aplicar-cambios.js`.
Probado con `--simular`: las 12 se localizan y se aplican sin error.

## Resumen

Índice = posición en `data.questions[tema]`, empezando en 0, en el banco cargado hoy.

| Tema | Índice | Acción | Problema | Solución |
|---|---|---|---|---|
| 19 | 141 | explicacion | La explicación da por vigente el concurso «por la naturaleza de las plazas» (RD 896/1991, art. 2) | Se añade el art. 61.6 TREBEP: el concurso solo cabe en virtud de ley y con carácter excepcional |
| 19 | 142 | enunciado | Enseña sin advertencia el criterio del art. 2 para el concurso | El enunciado advierte de que el art. 61.6 TREBEP lo desplaza; opciones y clave no cambian |
| 19 | 152 | enunciado (+ opciones) | Clave: preside el tribunal el Presidente de la Corporación (art. 4.f). Va contra el TREBEP 60.2 | Se reconvierte en pregunta sobre el TREBEP 60.2, mencionando el RD en el enunciado |
| 19 | 153 | enunciado (+ opciones) | Clave: un vocal representante de la Comunidad Autónoma (art. 4.f). Va contra el TREBEP 60.3 | Se reconvierte en pregunta sobre el TREBEP 60.3, mencionando el RD en el enunciado |
| 19 | 159 | enunciado | «En ningún caso» más aprobados que plazas (art. 7), frente al TREBEP 61.8 | Se quita «en ningún caso», el enunciado avisa de la excepción y se completa la explicación |
| 19 | 155 | enunciado (+ clave) | **Encontrada.** Art. 5: bases «aprobadas por el Pleno». La clave era el Pleno | Se pregunta por el órgano competente en Zaragoza: el Gobierno de Zaragoza (art. 127.1.h LBRL; art. 14.1.i Ley 10/2017) |
| 19 | 168 | respuesta | **Encontrada.** DA 2.ª.2: la opción correcta decía «bases aprobadas por el Pleno» | Ese inciso se sustituye por otro literal de la misma DA; la clave sigue siendo la misma |
| 19 | 15 | enunciado | **Encontrada.** Bases aprobadas por el Presidente, sin citar artículo y como regla general | Se acota al art. 102 LBRL y la explicación da la regla de Zaragoza |
| 14 | **92** (señalada como 93) | respuesta | La opción correcta usaba la redacción de 1985 | Pasa a «Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística» |
| 14 | **291** (señalada como 292) | respuesta | Atribuye «prevención de riesgos» al art. 25.2.f) | Se quita de la opción correcta y de la explicación; se precisa la `fuente` |
| 15 | 178 | respuesta | Ubica los arts. 69-72 en el «Capítulo IV del Título II» | Se cambia a «Capítulo IV del Título V»; se corrigen la explicación y la `fuente` |
| 17 | 69 | enunciado | «pueden establecer» frente a «establecerán» (art. 20.1 TREBEP) | Se corrige el verbo; opciones y clave no cambian |

No se propone retirar ninguna. En las dos reconvertidas (19-152 y 19-153), el `motivo` ofrece retirar como alternativa.

## Comprobaciones

### Índices que no coincidían

En el tema 14, las preguntas señaladas como 93 y 292 están hoy en los índices **92** y **291**: se han localizado por su contenido. Las de los índices 93 y 292 tratan de otra cosa (ver «Otros hallazgos»). Los índices del tema 19, el 178 del tema 15 y el 69 del tema 17 sí coincidían.

### Tema 19: RD 896/1991 frente al TREBEP

**Derecho aragonés.** La Ley 7/1999, de Administración Local de Aragón, repite casi todas las reglas del RD 896/1991 que chocan con el TREBEP, y su texto consolidado no se ha modificado en estos artículos:
- art. 246.1: «El Pleno de la entidad local aprobará las bases de la convocatoria»;
- art. 247.1: el presidente del tribunal «será el Presidente de la Corporación o miembro de la misma en quien delegue»;
- art. 247.2.b): «Uno de los vocales lo será en representación de la Comunidad Autónoma»;
- art. 247.4: prohíbe aprobar más aspirantes que plazas, sin excepción.

Lo mismo pasa en parte con la LBRL. Su art. 127.1.h), párrafo segundo, aplicable a los municipios de gran población, dice que el presidente de los tribunales «podrá ser nombrado entre los miembros de la Corporación o entre el personal al servicio de las Administraciones públicas».

Todas estas reglas son anteriores al EBEP de 2007 y han quedado desplazadas por los arts. 60 y 61 TREBEP, que son legislación básica posterior. Las explicaciones nuevas lo dicen expresamente para que ningún revisor tome el texto aragonés como contradicción. Las bases del Ayuntamiento de Zaragoza siguen el TREBEP:
- Las bases generales (TRBGTL, 6.8.3) exigen que todos los miembros del tribunal, salvo quien ejerza la secretaría, sean funcionarios de carrera.
- La base 6.8.4 dice que la pertenencia al tribunal «será siempre a título individual».
- En la convocatoria 4/2026, la presidencia del tribunal la ejercen técnicos de Recursos Humanos.

**Quién aprueba las bases en Zaragoza.**
- Art. 127.1.h) LBRL: la Junta de Gobierno Local.
- Art. 14.1.i) de la Ley 10/2017, de capitalidad (BOE-A-2018-1683), que está en el epígrafe del tema 14: el Gobierno de Zaragoza. Según su disposición adicional segunda, es el nombre de la Junta de Gobierno Local en Zaragoza.
- Es una atribución delegable (art. 14.2). Según las bases de 2025, el texto refundido de las bases generales lo aprobó por decreto la Concejalía delegada de Personal, el 19 de mayo de 2025.
- En los municipios de régimen común, las aprueba el Alcalde (art. 21.1.g LBRL).

Por eso la pregunta 155 tenía como distractores las dos respuestas que son correctas hoy.

**Búsqueda de otras preguntas con el mismo problema.** Se revisaron todas las preguntas del tema 19 que mencionan «Pleno», «bases» o el RD 896/1991. Además de la 155 (art. 5), tienen el mismo problema la **168** (DA 2.ª: «bases aprobadas por el Pleno» dentro de la opción correcta) y la **15** (art. 102 LBRL: la clave es literal, pero el enunciado es general y no vale para Zaragoza). La 143 (art. 3: «el órgano correspondiente de la Corporación») y la 154 (art. 5: convoca el Presidente) son correctas.

**Por qué se reconvierten las preguntas 152 y 153 en lugar de retirarlas.** Preguntar qué decía un precepto inaplicable no tiene sentido en un examen sobre la normativa vigente. Pero el banco no tiene ninguna pregunta sobre el art. 60 TREBEP: se buscó «60.2», «60.3», «designación política» y «a título individual» en todos los temas. Las nuevas versiones citan el RD 896/1991 en el enunciado y preguntan la regla vigente. Se ha evitado cualquier distractor que el art. 127.1.h) LBRL o la Ley 7/1999 pudieran hacer parecer cierto, como «solo en régimen común».

### Tema 14

- **92.** Se ha comprobado que en la redacción original de 1985 la fórmula «Ordenación, gestión, ejecución y disciplina urbanística» estaba en la **letra d)**, no en la a). Desde la Ley 27/2013, la letra a) dice «Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística». La explicación ya citaba el texto vigente, así que opción y explicación no coincidían. **Aviso:** tras el cambio, la clave coincide con la de la pregunta 165 del mismo tema. Puede valorarse si sobra una de las dos.
- **291.** La letra f) vigente dice «Policía local, protección civil, prevención y extinción de incendios», y la letra c) de 1985 tampoco hablaba de «prevención de riesgos». La explicación conserva la nota de procedencia («Venía del tema 16…»).

### Tema 15

- **178.** En el índice del texto consolidado, el Título II («El municipio») tiene cuatro capítulos, y su Capítulo IV es «Regímenes Especiales». Los arts. 69-72 forman el Capítulo IV del Título V, y el art. 73 abre el Capítulo V, sobre el estatuto de los miembros. Los tres distractores siguen siendo falsos: la LBRL no tiene Título Preliminar, el Capítulo I del Título II es «Territorio y población» y el Título II no tiene Capítulo V.

### Tema 17

- **69.** El art. 20.1 TREBEP dice «establecerán». Además, el enunciado se ajusta a la definición literal del párrafo segundo. El `motivo` recuerda que la disposición final cuarta.1 difiere los efectos del Capítulo II del Título III, pero eso no convierte el mandato en una facultad.

## Verificación automática

El script `…/scratchpad/pend/bin/validar.js` comprueba lo siguiente en cada propuesta:
- que el enunciado `q` coincide exactamente con la pregunta del índice y es único en el tema;
- que hay 4 opciones distintas, una clave dentro de rango y ninguna opción que remita a otras;
- que la explicación no menciona letras de opción;
- que ningún enunciado nuevo coincide con otro del banco;
- que todos los fragmentos entre comillas latinas de las explicaciones nuevas y de `cita` aparecen literalmente en los textos descargados.

Además, `node tools/aplicar-cambios.js lotes/auditoria/pendientes-varias.json --tipo correccion --titulo … --simular` aplica las 12 sin error.

## Fuentes descargadas

Están en `/tmp/claude-0/-home-user-opotest/b89be96f-03bf-5e1f-ba88-44c94e136a9e/scratchpad/pend/dl/` (HTML) y `…/pend/txt/` (texto):

| Norma | ID | Última actualización |
|---|---|---|
| TREBEP, RDLeg 5/2015 | BOE-A-2015-11719 | 03/10/2026 |
| RD 896/1991 | BOE-A-1991-15126 | 14/06/1991, nunca modificado |
| LBRL, Ley 7/1985: texto vigente y versión original de 1985 (`&tn=1&p=19850403`) | BOE-A-1985-5392 | 03/10/2026 |
| Ley 7/1999, de Administración Local de Aragón | BOE-A-1999-10151 | 25/10/2022 |
| Ley 10/2017, de capitalidad de Zaragoza | BOE-A-2018-1683 | — |
| Bases de Auxiliar Administrativo 2025 y convocatoria 4/2026, y texto refundido de las bases generales (TRBGTL) | `tools/temarios/*.pdf` | — |

## Otros hallazgos (no incluidos en el JSON)

Están fuera del encargo. Se dejan para quien coordine.

- **Tema 14, índice 93** (la que ocupa hoy el índice señalado). Dice «Según el art. 26.1 del TRLRHL…» y da por correcto que la Comunidad Autónoma puede dispensar de los servicios mínimos. Esa dispensa era del art. 26.2 LBRL antes de la Ley 27/2013. El art. 26.2 vigente regula la coordinación por la Diputación en los municipios de menos de 20.000 habitantes, y el TRLRHL no tiene que ver con la cuestión. Parece errónea.
- **Tema 18, índice 273.** Cita el «art. 61.2» TREBEP para los sistemas selectivos, que son el 61.6. Además, la opción correcta añade «con las fases que se establezcan reglamentariamente», que no está en la ley.
- **Tema 19, índice 18** (art. 104.1 LBRL). Afirma que el número, las características y las retribuciones del personal eventual los determina el Pleno. Es el mismo problema de fondo que el de las bases: en Zaragoza, «el número y régimen del personal eventual» corresponde al Gobierno de Zaragoza (art. 127.1.h LBRL; art. 14.1.i Ley 10/2017). No se ha incluido porque el encargo se limitaba a las bases.
