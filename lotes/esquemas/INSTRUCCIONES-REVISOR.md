# Instrucciones para revisar esquemas de estudio (Auxiliar Administrativo, Ayto. Zaragoza)

Eres un revisor **independiente**. Otro agente ha redactado el esquema; tu trabajo es encontrar
cualquier error antes de que lo lea la opositora. La exigencia del usuario es **cero fallos**.
Parte de la idea de que el redactor se ha equivocado en algo y búscalo.

## Material

- Esquema: `data/esquemas/aux-admin-zaragoza/tNN.js`. Formato: `data/esquemas/FORMATO.md`.
- Citas del redactor: `lotes/esquemas/tNN-citas.md`. **No te fíes de ellas**: comprueba cada
  cita contra el texto oficial que descargues tú mismo. Una cita inventada o de una redacción
  antigua es justo el tipo de error que buscamos.
- Epígrafe oficial: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`.
- Alcance y normas: `tools/fuentes.json` → `"aux-admin-zaragoza"` → tema.
- Fuentes oficiales: consolidado del BOE (`curl -sL "https://www.boe.es/buscar/act.php?id=<ID>"`,
  pasado a texto plano en tu carpeta de trabajo) y documentos de `tools/temarios/`
  (`pdftotext -layout`). Nada de academias ni memoria.
- Exámenes oficiales: tema 21 del banco:
  `node -e 'const {data}=require("./tools/lib/cargar.js").cargarOposicion("aux-admin-zaragoza"); …data.questions[21]…'`.
  Los prefijos `[EXAMEN OFICIAL, Pnn]`, `[EXAMEN OFICIAL 1-jun-2025 …]` y
  `[EXAMEN OFICIAL SEGUNDA PRUEBA …]` son del examen de 1-jun-2025. `[EXAMEN OFICIAL 31-may-2026 …]`
  es del de 31-may-2026.

## Qué comprobar, punto por punto

1. **Cada dato** (cifras, plazos, mayorías, órganos, enumeraciones, excepciones, «podrá» frente a
   «deberá») coincide con la **redacción vigente** del texto oficial. Mira la fecha de la última
   actualización del consolidado y las notas de modificación del artículo.
2. **Cada referencia** de artículo (`a`, `art.`, mapa) apunta al artículo y apartado correctos.
3. **Enumeraciones completas**: si el esquema dice «7 casos» o lista los obligados, comprueba que
   no falte ni sobre ninguno. Si una lista es parcial, tiene que decirse («entre otros»).
4. **Simplificaciones**: un resumen puede abreviar, pero no puede cambiar el sentido. Una
   simplificación que lleve a fallar una pregunta tipo test es un error.
5. **Trampas**: la afirmación tachada (`x`) tiene que ser realmente falsa y la correcta (`ok`)
   realmente cierta.
6. **Marcas de examen**: solo donde el tema 21 tenga una pregunta sobre ese punto exacto, con el
   año correcto. Comprueba también la lista `examenes` (fecha y número de pregunta).
7. **Alcance**: nada fuera del epígrafe oficial. Y avisa si falta algo importante del epígrafe:
   un plazo o una enumeración que se pregunte mucho (mira las `fuente` de las preguntas del tema
   en el banco).
8. **Epígrafe**: literal del BOPZ 170.
9. Ortografía y claridad: frases que se puedan leer mal.

## Qué hacer con lo que encuentres

- Corrige directamente en `tNN.js` con el cambio mínimo. Si un dato no se puede confirmar en el
  texto oficial, quítalo.
- Ejecuta `node tools/validar-esquemas.js aux-admin-zaragoza NN` hasta que diga «Todo correcto».
- Escribe `lotes/esquemas/tNN-revision.md` con:
  - fuentes consultadas (ID y fecha de última actualización);
  - número de comprobaciones hechas;
  - tabla de **cada corrección**: texto anterior, texto nuevo, motivo y cita literal oficial;
  - lo que añadirías o quitarías pero no has tocado, y por qué;
  - veredicto final: APTO o NO APTO (NO APTO solo si queda algo que no has podido resolver).

No toques otros archivos ni hagas commit.

## Informe final

Responde con el veredicto, el número de correcciones y las más relevantes (una línea cada una).
