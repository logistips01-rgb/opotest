# Instrucciones para redactar esquemas de estudio (Auxiliar Administrativo, Ayto. Zaragoza)

Objetivo: un esquema de estudio rápido por tema, para la opositora. Se lee en el móvil y se
imprime en A4. La exigencia es **cero errores**: cada dato tiene que poder señalarse en el texto
oficial vigente. Si no puedes confirmar un dato, no lo pongas.

## Qué leer primero (en el repo /home/user/opotest)

1. `data/esquemas/FORMATO.md`: formato del archivo.
2. `data/esquemas/aux-admin-zaragoza/t05.js`: esquema de referencia, ya aprobado por el usuario.
   Copia su tono, su densidad y su estructura (5 ideas esenciales, mapa, 6-10 cifras,
   4-8 secciones, 6-10 trampas).
3. `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`: **epígrafes oficiales vigentes**
   (BOPZ 170, 27-jul-2026). El campo `epigrafe` va literal de aquí, uniendo las palabras
   partidas con guion a final de línea («Administracio-/nes» → «Administraciones»).
   Si el epígrafe de `tools/fuentes.json` no coincide, manda el del BOPZ.
4. `tools/fuentes.json` → `"aux-admin-zaragoza"` → tu tema: normas, identificadores BOE y,
   sobre todo, los AVISOS DE ALCANCE (qué entra y qué no). Respétalos, salvo que el epígrafe
   del BOPZ 170 sea más amplio (por ejemplo, el tema 17 incluye «Derechos y deberes» y el 18
   «adquisición y pérdida de la relación de servicio»).

## Fuentes oficiales

- Legislación estatal y autonómica: texto consolidado del BOE,
  `curl -sL "https://www.boe.es/buscar/act.php?id=<ID>&tn=1&p=<fecha?>"` o simplemente
  `https://www.boe.es/buscar/act.php?id=<ID>`. Guarda la descarga en tu carpeta de trabajo
  (te la indica el encargo) y pásala a texto plano (por ejemplo con
  `python3 -I -c` y `html.parser`) para poder buscar artículos. Usa siempre la redacción
  vigente (la última del consolidado), nunca la original.
- Documentos municipales ya descargados: `tools/temarios/` (PDF → `pdftotext -layout`).
  El ROTPC está en `tools/temarios/rotpc-zaragoza-texto-vigente.txt`.
- No uses academias, blogs ni la memoria. El banco de preguntas de la app tampoco es fuente:
  solo sirve para ver qué se pregunta más.

## Qué se pregunta

- Preguntas del tema en el banco:
  `node -e 'const {data}=require("./tools/lib/cargar.js").cargarOposicion("aux-admin-zaragoza"); console.log(data.questions[N].length)'`
  (cada pregunta tiene `fuente` con el artículo: sirve para ver qué artículos caen más).
- Exámenes oficiales reales: tema 21 del banco (`data.questions[21]`). Prefijos del enunciado:
  `[EXAMEN OFICIAL, Pnn]`, `[EXAMEN OFICIAL 1-jun-2025 …]` y `[EXAMEN OFICIAL SEGUNDA PRUEBA …]`
  son del **examen de 1-jun-2025**; `[EXAMEN OFICIAL 31-may-2026 …]` son del **examen de
  31-may-2026**. Busca las de tu tema (por norma y artículo). Si un punto del esquema es
  exactamente lo que preguntó un examen, márcalo (`examen:'2025'` o `{{examen:2026}}`) y
  añade una línea en `examenes` con artículo, fecha y número de pregunta. Nunca marques
  algo que no esté en el tema 21.

## Qué entregar

1. `data/esquemas/aux-admin-zaragoza/tNN.js` (NN con dos cifras: t01, t12…).
2. `lotes/esquemas/tNN-citas.md`: para cada cifra, cada trampa y cada dato concreto de las
   secciones, el artículo y la **cita literal** del texto oficial que lo respalda. Lo usará
   un revisor independiente.
3. Ejecuta `node tools/validar-esquemas.js aux-admin-zaragoza NN` hasta que diga «Todo correcto».

No toques ningún otro archivo, no hagas commit ni push.

## Estilo

- Español claro, frases cortas, sin emojis, sin relleno. Negrita solo en lo que se pregunta.
- Nada de reglas mnemotécnicas inventadas salvo que sean evidentes y útiles.
- Las trampas son confusiones reales y típicas (plazos parecidos, órganos que se confunden,
  «podrá» frente a «deberá», mayorías, excepciones), cada una con su artículo.
- Si el tema tiene varias normas, el mapa lleva un bloque por norma (o por título/capítulo).
- El campo `a` de cada sección indica los artículos que resume.

## Informe final

Responde con: tema(s) hechos, normas e identificadores usados (con la fecha de última
actualización del consolidado), puntos marcados como examen, y cualquier duda o dato que
hayas dejado fuera por no poder confirmarlo.
