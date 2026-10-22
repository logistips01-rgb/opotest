# Formato de los esquemas de estudio

Cada tema tiene un archivo `data/esquemas/<slug>/tNN.js` (NN con dos cifras) que llama a
`registerEsquema(slug, tema, datos)`. La página `esquema.html` los pinta en pantalla y en A4.
El ejemplo de referencia es `aux-admin-zaragoza/t05.js`. `node tools/validar-esquemas.js`
comprueba la estructura.

## Campos

| Campo | Obligatorio | Contenido |
|---|---|---|
| `titulo` | sí | Título corto del tema (como en la app). |
| `epigrafe` | sí | Epígrafe oficial literal del Anexo I de las bases. |
| `etiquetas` | sí | 1-3 textos cortos: norma y rango de artículos. |
| `fuentes` | sí | Normas usadas, con identificador oficial (BOE-A-…, BOA…, BOPZ…). |
| `esencial` | sí | 4-6 ideas clave. Cada una es un *texto*. |
| `mapa` | sí | Estructura de la norma: `[{titulo, rango, items:[[nº, nombre], …]}]`. |
| `cifras` | sí | 4-10 datos numéricos: `{v:'3 meses', d:'qué es', a:'art. 21.3'}`. |
| `secciones` | sí | `[{titulo, a, bloques:[…]}]`, 4-8 secciones. |
| `trampas` | sí | 5-10 errores típicos: `{x:'afirmación falsa', ok:'lo correcto', a:'art.'}`. |
| `examenes` | no | Notas sobre preguntas de exámenes oficiales relacionadas. |

## Textos

Un *texto* es una cadena o un objeto `{t, a, examen}`:
- `t`: frase. Se permiten solo `<b>`, `<i>` y `<br>`.
- `a`: referencia al artículo (`'art. 30.2'`, `'30.5'`).
- `examen`: año del examen oficial en que cayó (`'2025'`, `'2026'`).

Dentro de cualquier texto o celda se puede escribir `{{examen:2025}}` para la marca de examen.

## Bloques

- `{tipo:'lista', items:[texto…], tinte:true|false}`
- `{tipo:'tabla', cab:['col1','col2'], filas:[['celda','celda'], …]}` (máx. 4 columnas)
- `{tipo:'columnas', cols:[{titulo, items:[texto…], reglas:[texto…]}, …]}` (2 columnas; `items` = lista con puntos, `reglas` = recuadros)
- `{tipo:'ejemplo', t:'caso práctico corto'}`

## Reglas de contenido

1. Todo dato sale del texto oficial vigente (consolidado del BOE, BOA, BOPZ o documento
   municipal guardado en `tools/temarios/`). Nada de memoria.
2. Cada cifra y cada trampa lleva su artículo.
3. Frases cortas, sin relleno. Negrita solo en la palabra que se pregunta.
4. Respetar el alcance del epígrafe (ver avisos en `tools/fuentes.json`).
5. Marca de examen solo si la pregunta existe en el tema 21 del banco (exámenes oficiales).
