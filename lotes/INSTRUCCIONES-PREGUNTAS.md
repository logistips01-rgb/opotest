# Preguntas nuevas: redactor y dos revisores independientes

Banco: Auxiliar Administrativo del Ayuntamiento de Zaragoza (`aux-admin-zaragoza`), repo
`/home/user/opotest`. La guía de fondo es `tools/generar.md`, que hay que leer. Este documento la
completa con las reglas de octubre de 2026. Exigencia: **cero errores**. Una pregunta mal es
peor que ninguna.

## Fuentes

- **Texto consolidado del BOE**, en su última redacción publicada:
  `curl -sL "https://www.boe.es/buscar/act.php?id=<ID>"`, con reintentos, porque el BOE a veces
  corta la conexión.
  - Las bases exigen la normativa «vigente en el momento de celebración de los ejercicios», y el
    examen será en 2027. Si un artículo tiene una redacción publicada que entra en vigor más
    tarde, se usa esa y la explicación dice desde cuándo rige.
  - Identificadores: `tools/fuentes.json` y `tools/normas-vigiladas.json`.
- **Normativa aragonesa.** En Zaragoza, para bienes, actividades, servicios y obras de las
  entidades locales mandan la **Ley 7/1999 de Administración Local de Aragón**
  (BOE-A-1999-10151) y el **Decreto 347/2002** (Reglamento de Bienes, Actividades, Servicios y
  Obras de las Entidades Locales de Aragón, BOA nº 139, 25-nov-2002,
  https://www.boa.aragon.es/eli/es-ar/d/2002/11/19/347/dof/spa/html). Sobre esas materias,
  el Reglamento de Bienes estatal de 1986 y el Reglamento de Servicios de 1955 solo se aplican
  donde la norma aragonesa no dice nada.
- **Epígrafe oficial** de cada tema: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`. No se
  pregunta nada fuera de él.
- Documentos municipales: `tools/temarios/`.
- Nada de memoria, academias ni blogs.

## Formato del lote (redactor)

Archivo `lotes/nuevas/<id-lote>.json`:

```json
{"slug": "aux-admin-zaragoza", "tema": N, "lote": "<id-lote>", "preguntas": [
  {"q": "...", "options": ["...","...","...","..."], "correct": 0,
   "exp": "...", "fuente": "Art. X.Y <norma abreviada> (<rango y número>)", "confianza": "alta",
   "cita": "fragmento literal del texto oficial que respalda la respuesta"}
]}
```

## Reglas de redacción

1. **4 opciones** y una sola correcta. Distractores plausibles del mismo tipo que la correcta,
   todos claramente falsos según la ley vigente. Sin opciones repetidas.
2. **Nunca opciones que remitan a otras** («a) y b) son correctas», «todas las anteriores»,
   «ninguna de las anteriores»), porque la app baraja las opciones.
3. La **explicación** cita el precepto y explica por qué; si ayuda, dice por qué fallan los
   distractores **nombrándolos por su contenido, nunca por su letra**.
4. `fuente` lleva el artículo y el apartado exactos. `cita` es literal y se puede encontrar con
   un buscador en el texto oficial.
5. Prioridad: lo que cae en el examen (plazos, órganos, mayorías, cuantías, enumeraciones,
   excepciones, «podrá» frente a «deberá») y los **artículos con menos preguntas** en el banco.
   Para medirlo, cuenta las `fuente` del tema:
   `node -e 'const {data}=require("./tools/lib/cargar.js").cargarOposicion("aux-admin-zaragoza"); …'`
6. **No repetir** enunciados ni preguntar lo mismo con otras palabras. Compara con las preguntas
   existentes del tema y del tema 21.
7. Reparte la opción correcta entre las cuatro posiciones (más o menos un cuarto en cada una).
7 bis. **La correcta no puede delatarse por la forma.** Las cuatro opciones deben tener longitud y nivel de detalle parecidos. Si la correcta necesita un matiz, los distractores también llevan uno, igual de plausible. Comprueba que en el lote la correcta no sea la más larga en más de un tercio de las preguntas. Los revisores marcan DUDOSA cualquier pregunta que se acierte solo por la longitud.
8. Frases claras, sin dobles negaciones ni trampas de redacción.
9. **Zaragoza es municipio de gran población y tiene ley de capitalidad.** Esto vale para toda
   pregunta sobre qué órgano decide (Pleno, Alcalde, Junta o Gobierno), qué mayoría se exige o qué
   procedimiento se sigue. La respuesta tiene que ser cierta también en Zaragoza: LBRL arts. 121-138
   (en especial 123 y 127) y Ley 10/2017 (BOE-A-2018-1683), arts. 11 (Pleno) y 14 (Gobierno de
   Zaragoza: patrimonio, concesiones, licencias, bases de subvenciones, personal, etc.).
   - Si la norma general dice otra cosa, no se pregunta así.
   - Si se pregunta, el enunciado se ciñe a esa norma y la explicación avisa de lo que rige en
     Zaragoza. Fue el motivo de rechazo más frecuente en la primera tanda.
10. **Preceptos desplazados.** No se presenta como vigente una regla desplazada por legislación
    básica posterior (TREBEP, LPAP, LCSP, TRLRHL…) ni declarada inconstitucional, aunque siga
    escrita en el texto. Comprueba las notas del consolidado y las sentencias del TC citadas.

## Reglas de revisión (cada revisor, por su cuenta)

- Descarga **tú mismo** el texto oficial; no uses lo que bajó el redactor ni su `cita` sin
  comprobarla.
- Para cada pregunta comprueba:
  - que el artículo existe y es el citado;
  - que la opción marcada es correcta según la redacción vigente;
  - que **las otras tres son falsas** (este fallo es frecuente: un distractor que también es
    cierto);
  - que el enunciado no es ambiguo;
  - que la explicación es exacta;
  - que está dentro del epígrafe;
  - que no repite una pregunta existente.
- Veredicto: `CONFIRMADA`, `DUDOSA` o `RECHAZADA`. **Ante la duda, rechaza.** No corrijas la
  pregunta: si tiene arreglo, márcala `DUDOSA` y propón el arreglo en `notaRevision`.
- Entrega `lotes/nuevas/<id-lote>.revN.json` (N = 1 o 2) como un array
  `[{"q": "<enunciado exacto>", "veredicto": "...", "notaRevision": "..."}]`, con una entrada
  por pregunta.

Solo entra en la app lo que **los dos revisores** confirman (`tools/combinar-revisiones.js`).
No se hace commit: lo integra la sesión principal.
