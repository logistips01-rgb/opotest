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

## Cómo se accede al BOE

`boe.es` está permitido en la política de red del entorno, pero **solo por la
red de la sesión**: `curl` funciona y `WebFetch` no (esa herramienta tiene su
propia política y sigue devolviendo `EGRESS_BLOCKED`). Mejor así, porque
descargar el consolidado da el articulado íntegro sin pasar por un resumidor.

Lo primero de cada tanda es comprobarlo:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719"
```

Si responde `200`, se descarga el consolidado y se lee el artículo:

```bash
curl -sS "https://www.boe.es/buscar/act.php?id=<ID-BOE>" -o /tmp/norma.html
python3 - <<'EOF'
import re, html
s = open('/tmp/norma.html', encoding='utf-8', errors='replace').read()
t = re.sub(r'<[^>]+>', '\n', s); t = html.unescape(t)
t = re.sub(r'[ \t]+', ' ', t); t = re.sub(r'\n\s*\n+', '\n', t)
pos = [m.start() for m in re.finditer(r'Artículo 85\.', t)]   # el último es el cuerpo
print(t[pos[-1]:pos[-1]+800])
EOF
```

Ojo: la **primera** aparición de «Artículo N.» es el índice del documento; el
articulado real es la **última**. Identificadores útiles: TREBEP
`BOE-A-2015-11719`, LBRL `BOE-A-1985-5392`, LPRL `BOE-A-1995-24292`, LPAC
`BOE-A-2015-10565`, LO 2/1986 `BOE-A-1986-6859`, CE `BOE-A-1978-31229`.

Si algún día vuelve a estar bloqueado, la alternativa es `WebSearch` con
consultas de frase literal, contrastando **varias búsquedas por artículo**.
Ese modo degradado fue el origen de los tres errores de cita detectados en el
tema 18: la respuesta era correcta pero el apartado citado no, porque los
resúmenes parciales inducían a confundir 87.2 con 87.3 o 98.3 con 98.4.

## Número de opciones

**El examen oficial de Auxiliar Administrativo del Ayuntamiento de Zaragoza es
de 4 opciones.** Todo lo que se redacte para esa oposición debe tener 4
opciones, nunca 3.

Esto no siempre fue así en este proyecto: entre el 10 y el 11 de agosto de
2026 se asumió erróneamente que era de 3 (por la proporción de la reproducción
del examen real de 1-jun-2025 en el tema 21, que en realidad mezcla 3 y 4 según
la prueba) y se redujeron a 3 tanto el banco base como todo lo generado para
los temas 16 a 20. Ese error está documentado y pendiente de arreglo en
[ESTADO.md](../lotes/ESTADO.md); no lo repitas en temas nuevos.

Antes de lanzar un redactor, comprueba en `assets/js/catalog.js` cuántas
opciones tiene el banco de la oposición (mira cualquier pregunta existente) y
dile explícitamente al agente cuántas opciones debe usar. No asumas.

**Cada oposición puede tener un número de opciones distinto**, aunque sea del
mismo Ayuntamiento. Confirmado por bases oficiales:

| Oposición | Opciones | Fuente |
|---|---|---|
| Auxiliar Administrativo, Ayto. Zaragoza | 4 | ver más arriba |
| Policía Local, Ayto. Zaragoza | 3 | base 8.4.C de las bases generales (TRBGTL), ver [tools/temarios/policia-local-zaragoza.md](temarios/policia-local-zaragoza.md) |

El banco `data/policia-local-zaragoza.js` está todavía en 4 opciones
(heredado del banco inicial, antes de verificar el formato real); hay que
reducirlo a 3 antes de generar contenido nuevo para esa oposición, con
`tools/normalizar-opciones.js --reducir` (esta vez sí corresponde usarlo: es
el caso real, no una suposición).

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
   pregunta se descarta en la fusión. Y la cita debe ser del apartado exacto
   leído en el consolidado, no del artículo «por aproximación».
2. **Nada de memoria.** Cada dato (número de artículo, plazo, cifra, fecha)
   tiene que estar en el texto descargado. Si no se encuentra,
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

1. Descarga por su cuenta el consolidado y localiza el artículo citado en
   `fuente`. No reutiliza el archivo que se bajó el redactor.
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
