# Estado de la campaña de ampliación

Objetivo: **500 preguntas mínimo por tema**, avanzando del tema 20 hacia atrás,
un tema por tanda y con parada entre temas.

El tema 21 queda **fuera del objetivo**: reproduce el examen oficial del
1-jun-2025 y rellenarlo con preguntas generadas destruiría lo que lo hace útil.

## Tema 20 · Prevención de Riesgos Laborales — EN CURSO

Objetivo 500. Ahora mismo **63 integradas**.

Seis redactores escribieron 240 preguntas repartidas por tramos de articulado
para que no se solapen. Una tanda de revisores se cortó a mitad al agotarse el
límite de sesión, así que **cinco lotes están escritos pero sin revisar**.

| Lote | Tramo | Escritas | Revisión | Estado |
|---|---|---|---|---|
| A | LPRL arts. 1-13 | 40 | pendiente | en `loteA.json` |
| B | LPRL arts. 14-22 | 40 | pendiente | en `loteB.json` |
| C | LPRL arts. 23-31 | 40 | 40/40 confirmadas | **integrado** |
| D | LPRL arts. 32 bis-44 | 40 | pendiente | en `loteD.json` |
| E | RD 39/1997 completo | 40 | pendiente | en `loteE.json` |
| F | RD 486/1997 + RD 488/1997 | 40 | pendiente | en `loteF.json` |

### Lo siguiente: revisar A, B, D, E y F

Ninguna pregunta entra al banco sin verificación independiente contra el texto
literal del BOE. Ese principio no se salta porque haya prisa: en tandas
anteriores el revisor encontró errores de cita en preguntas que el redactor
había marcado con «confianza alta».

Un revisor por lote, con el procedimiento de [../tools/generar.md](../tools/generar.md).
Riesgos concretos que conviene señalar a cada uno:

- **A** (arts. 1-13): los ordinales de las definiciones del art. 4; las
  exclusiones de ámbito del art. 3, que se confunden entre sí; la composición
  de la Comisión Nacional del art. 13. El redactor avisó de que el consolidado
  sigue llamando al organismo del art. 8 «Instituto Nacional de Seguridad e
  **Higiene** en el Trabajo», sin actualizar, y evitó preguntas sobre el nombre.
- **B** (arts. 14-22): el art. 15.1 enumera principios cuyo ORDEN se pregunta;
  el art. 16 distingue plan de prevención, evaluación y planificación.
- **D** (arts. 32 bis-44): el art. 36 separa competencias (36.1) de facultades
  (36.2), que es la confusión clásica; los arts. 38 y 39 separan composición de
  competencias del Comité. **Los arts. 45 a 52 están derogados por el RDLeg
  5/2000** y parte del 42 también: si alguna pregunta se apoya en un precepto
  derogado hay que rechazarla.
- **E** (RD 39/1997): umbrales de plantilla y remisiones al anexo I, que se han
  modificado con el tiempo; hay una pregunta con una cuantía en euros
  (1.841.000 €, art. 23.f) que hay que comprobar que sigue vigente.
- **F** (RD 486/1997 y RD 488/1997): lote muy numérico (alturas, superficies,
  anchuras, lux, humedad, renovación de aire). Cada cifra hay que verificarla
  contra el literal del anexo y comprobar que el supuesto coincide, porque la
  regla general no es la misma que la de oficinas. Aviso de acceso:
  `act.php?id=BOE-A-1997-8669` devolvía un 502 cacheado; el consolidado del
  RD 486/1997 se obtiene por `https://www.boe.es/eli/es/rd/1997/04/14/486/con`.

### Después: material que queda sin explotar

Los redactores dejaron anotado lo que no usaron, para una segunda vuelta:

- Lote A: arts. 5.2, 5.3, 6.1 letras a/b/c/e/f, 9.4, 10.a/c/d.
- Lote B: arts. 14.2 y 14.3, 15.1 letras a/c/e/f/g como preguntas de orden,
  15.4, 15.5, 16.2 bis (plan simplificado), 17.1.a, 21.1.c, 22.4.
- Lote C: arts. 23.1.a-d y 23.3, 24.6, 27.1 párr. 3.º, 28.3, 30.1, 30.3,
  31.4, 31.6.
- Lote D: arts. 33.1.a/d/f, 35.1, 36.2.b/d/e/f, 38.2 técnicos ajenos, 39.1.a,
  39.3, 40.1, 40.3, 41.1 párrs. 1.º y 4.º, 41.2, 43.3, D.A. 3.ª, 10.ª y 12.ª.
- Lote E: arts. 13, 17, 19, 20, 22, 24, 27, 31 bis, 32, 33, 34, 38-39 y
  anexos II-V, VII y VIII.
- Lote F: arts. 2, 5 y 11 del RD 486/1997, corrientes de aire, resto de la
  tabla de iluminación, locales de descanso y embarazadas, Anexo I.B), y los
  apartados de emisiones, ruido y calor del RD 488/1997.

### El techo de material de este tema

Las cuatro normas del tema 20 suman del orden de 110 artículos y 8 anexos,
descontando los arts. 45-52 de la LPRL que están derogados. Con 240 preguntas
escritas ya se ha cubierto buena parte del articulado preguntable. Llegar a 500
con este conjunto de fuentes exigiría preguntas cada vez más finas y
repetitivas.

Para alcanzar 500 con calidad habría que **ampliar las fuentes del tema**, y
esa decisión depende de lo que acote el temario oficial de la convocatoria.
Candidatas naturales, todas de examen habitual:

- RD 485/1997, señalización de seguridad y salud
- RD 487/1997, manipulación manual de cargas
- RD 773/1997, equipos de protección individual
- RD 1215/1997, equipos de trabajo
- LISOS (RDLeg 5/2000), infracciones en materia de prevención
- Plan de prevención y normativa propia del Ayuntamiento de Zaragoza

## Temas siguientes, cuando el 20 esté cerrado

Del 19 hacia atrás. Estado y déficit hasta 500:

| Tema | Actual | Faltan |
|---|---|---|
| 19 · FP local | 22 | 478 |
| 18 · Situaciones y disciplinario | 22 | 478 |
| 17 · Empleados públicos: clases | 100 | 400 |
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
