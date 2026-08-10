# Fábrica de preguntas

Cómo ampliar un banco con ayuda de agentes, sin meter preguntas mal.

## El problema que resuelve esto

Un modelo de lenguaje que escribe preguntas de oposición **de memoria** se
inventa números de artículo, fechas y cifras. Y una pregunta con la respuesta
mal es peor que no tener la pregunta: te aprendes lo contrario de lo que dice
la norma.

Ejemplo real medido en este proyecto: al buscar el art. 85 del TREBEP, el
resumen automático devolvió **cuatro** situaciones administrativas y se dejó
fuera «suspensión de funciones», que es la quinta. Si una pregunta se hubiera
escrito sobre ese resumen, sería incorrecta.

De ahí las tres etapas: **redactar con fuente → revisar por separado →
aprobar a mano**. Ninguna pregunta entra al banco sin pasar por las tres.

## Limitación de red importante

En este entorno el acceso directo a `boe.es` está **bloqueado** (`WebFetch` y
`curl` fallan con `EGRESS_BLOCKED`). La única vía es `WebSearch`, que sí
devuelve contenido del BOE. Consecuencias prácticas:

- No se puede leer el texto consolidado completo de una norma, solo fragmentos.
- Por eso el redactor debe lanzar **varias búsquedas por artículo** y no dar
  nada por bueno con un solo resultado.
- Y por eso la etapa de revisión no es opcional.

Si algún día se habilita `boe.es` en la política de red, el redactor podrá leer
el articulado entero y la calidad subirá bastante.

## Etapa 1 · Redactor

Un agente por tema. Recibe:

- La oposición y el número de tema.
- Las normas del tema, sacadas de `tools/fuentes.json`.
- Los enunciados que **ya existen** en ese tema, para no repetirlos.

Y escribe `lotes/<slug>-t<tema>.json`:

```json
{
  "slug": "aux-admin-zaragoza",
  "tema": 18,
  "preguntas": [
    {
      "q": "Enunciado de la pregunta",
      "options": ["Opción A", "Opción B", "Opción C", "Opción D"],
      "correct": 0,
      "exp": "Por qué es correcta, citando el precepto.",
      "fuente": "Art. 85.1 TREBEP (RDLeg 5/2015)",
      "confianza": "alta"
    }
  ]
}
```

Reglas que se le imponen:

1. **Cada pregunta cita un artículo concreto** en `fuente`. Sin cita, la
   pregunta se descarta en la fusión.
2. **Nada de memoria.** Cada dato (número de artículo, plazo, cifra, fecha)
   tiene que aparecer en un resultado de búsqueda. Si no se encuentra,
   `confianza: "media"` y a revisión.
3. **Preguntar por lo que se pregunta en el examen**: plazos, enumeraciones,
   órganos competentes, mayorías, cuantías. No trivialidades.
4. **Distractores plausibles**, del mismo tipo que la respuesta correcta (si la
   buena es un plazo, los otros tres también). Nunca opciones repetidas.
5. **Sin evitar áreas que cambian** sin comprobarlas: retribuciones, escalas
   autonómicas, límites de velocidad y desarrollo reglamentario se modifican a
   menudo. Si `fuentes.json` marca un `aviso` en ese tema, extremar el cuidado.
6. No repetir ninguno de los enunciados que ya existen.

## Etapa 2 · Revisor

Otro agente, **sin ver el razonamiento del redactor**. Por cada pregunta:

1. Busca por su cuenta el artículo citado en `fuente`.
2. Comprueba tres cosas: que el artículo existe y es el que se cita, que dice
   lo que la pregunta da por bueno, y que la opción marcada como correcta lo es.
3. Emite `veredicto`:
   - `CONFIRMADA` — verificado contra el texto localizado.
   - `DUDOSA` — no ha podido confirmarlo, o la cita no encaja del todo.
   - `RECHAZADA` — la respuesta marcada es incorrecta, o el artículo no dice eso.
4. Añade `notaRevision` explicando en una línea qué ha comprobado.

Va con la instrucción de **rechazar por defecto ante la duda**: es mucho más
barato perder una pregunta buena que colar una mala.

## Etapa 3 · Fusión y aprobación

```bash
node tools/fusionar.js lotes/aux-admin-zaragoza-t18.json --simular   # ver qué pasaría
node tools/fusionar.js lotes/aux-admin-zaragoza-t18.json             # aplicar
node tools/validar.js
```

`fusionar.js` solo integra las `CONFIRMADA`, y además comprueba por su cuenta
formato, opciones repetidas y duplicados contra **toda** la oposición. Lo demás
va a `data/pendientes/<slug>-t<tema>-revisar.json` para decidirlo a mano.

Las preguntas aprobadas se añaden a `data/<slug>.ampliacion.js`, nunca al banco
base: así el `git diff` de cada tanda es legible y siempre se puede quitar un
lote entero.

La cita de `fuente` se muestra en la app debajo de la explicación. Es la red de
seguridad final: si estudiando ves algo que te chirría, tienes el artículo ahí
mismo para comprobarlo.

## Qué NO delegar en un agente

- El temario oficial. Los temas y su orden salen de la convocatoria, y eso se
  copia a mano.
- Las materias que `fuentes.json` marca con `aviso`.
- La aprobación final. La revisión automática filtra lo evidente; la última
  palabra es de quien estudia.
