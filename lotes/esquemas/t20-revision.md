# Revisión del esquema del tema 20 (TRLUA): Auxiliar Administrativo, Ayto. Zaragoza

Revisor independiente. Fecha: 22-oct-2026.

## Fuentes consultadas

- **Decreto Legislativo 1/2014, de 8 de julio (TRLUA)**: texto consolidado `BOA-d-2014-90410`, descargado
  hoy de https://www.boe.es/buscar/act.php?id=BOA-d-2014-90410 y pasado a texto plano en la carpeta de
  trabajo (`scratchpad/rev-t20/trlua.txt`). **Última actualización publicada el 31/12/2024**, por la Ley 5/2024
  (arts. 3.a y 40.1.k). He comprobado las notas de modificación de cada artículo citado: Ley 2/2016 (arts. 57.2
  y 85.2.a), Ley 1/2021 (arts. 226.3 derogado y 227.2.f-h añadidos), Ley 2/2022 (art. 62.2-3 y el nuevo art.
  82 bis), Ley 2/2023 (arts. 35.1.c, 37.2, 72, 269.3 y 279.c) y Ley 5/2024 (art. 40.1.k). Todos los datos del
  esquema salen de la redacción vigente.
- Epígrafe oficial: `tools/temarios/anexo-i-aux-admin-bopz170-2026.txt`, tema 20.
- Alcance: `tools/fuentes.json`, `aux-admin-zaragoza`, tema 20.
- Banco: tema 21 (exámenes oficiales) y tema 20 (`fuente` de las 191 preguntas).
- No he usado el texto que guardó el redactor ni me he fiado de `t20-citas.md`. Todo lo he cotejado con mi
  propia descarga.

## Comprobaciones hechas: unas 170

- **Epígrafe**: coincide literalmente con el BOPZ 170.
- **Mapa**: he comprobado los 5 títulos y los 25 rangos de capítulos y secciones contra los rótulos del
  consolidado. Todos son correctos (Tít. I 10-37, II 38-88, IV 118-213, V 214-263 y VI 264-287). Busqué los
  artículos por su ancla, así que no fallan los rótulos sin punto (48, 55, 124-126, 134, 182, 245) ni el art.
  82 bis.
- **Datos**: he comprobado una a una las 10 cifras, las 5 ideas esenciales, las 10 trampas y cada dato de
  las 8 secciones: plazos, porcentajes, órganos, mayorías y efectos del silencio. Lo más relevante:
  - plazos: 1 mes del avance, 2 meses de información pública, 3 meses de la declaración ambiental
    estratégica y 4 meses de la aprobación definitiva; 3 meses del informe del CPU para el plan parcial y para
    la delimitación del suelo urbano; 1 año y 2 años de la suspensión de licencias y 4 años sin repetirla;
    20 años de horizonte de gestión y 20 / 12 años para ordenar; 2 meses de la cédula urbanística; 20 días
    hábiles y 2 + 2 meses de la autorización especial;
  - porcentajes y medidas: 15 % de cesión por alineaciones y de normalización de fincas; 90 % de
    aprovechamiento; 6 % de garantía en la compensación; 10 % de beneficio del urbanizador; 10 años de
    aplazamiento en la cooperación; 4 años de la expropiación; 5 años de garantía de la urbanización;
    150 m, 300 m² y 10.000 m² en el no urbanizable; 3 plantas y 3 m;
  - edificación y conservación: 2 años para edificar y 6 meses de la ejecución por sustitución; la mitad
    como límite del deber de conservación; 1/4 y 10 % de la subvención; multas coercitivas de 1 mes y 10 %;
    inspección a los 50 años, en municipios de más de 25.000 habitantes y cada 15 años; 6 meses de la ruina;
  - disciplina: 2 meses para pedir la legalización; 6 meses de caducidad; 6 años para cumplir las medidas;
    10 días para el traslado al juez; cuantías de las multas; prescripción de 1-4-10 años y 1-2-3 años;
    50 % de condonación;
  - órganos: Pleno, Alcalde, CPU y Jurado Aragonés de Expropiación;
  - silencio: el plan general queda aprobado; la licencia y la parcelación se desestiman; la ruina caduca
    o se desestima; la autorización especial depende del informe del CPU.
- **Referencias de artículo**: todas apuntan al artículo y apartado correctos.
- **Trampas**: las 10 afirmaciones tachadas son falsas y las 10 correcciones son ciertas según la redacción
  vigente.
- **Marcas de examen**: el esquema no tiene ninguna y no debe tenerla. En el tema 21 no hay ninguna pregunta
  sobre el TRLUA: las 6 que contienen «urbanismo», «suelo» o «licencia» son del EAAr, del TRLRHL o de la
  LBRL. En 2025 y 2026 el tema 20 era PRL. No hay lista `examenes`, lo cual es correcto.
- **Alcance**: no hay nada del título preliminar ni de los títulos III y VII.
- **Validador**: `node tools/validar-esquemas.js aux-admin-zaragoza 20` dice «Todo correcto».

## Correcciones aplicadas en `data/esquemas/aux-admin-zaragoza/t20.js`

No había ningún dato numérico, órgano ni plazo erróneo. Las correcciones son de enumeraciones incompletas
presentadas como cerradas y de frases que podían leerse mal.

| # | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|
| 1 | «construcciones de explotaciones agrarias o ganaderas y las vinculadas a obras públicas (34.1)» | «… explotaciones agrarias o ganaderas (y, en general, de explotación de recursos naturales o protección del medio ambiente) y las vinculadas a obras públicas (34.1)» | La lista estaba incompleta y no decía «entre otros». | Art. 34.1.a: «Las destinadas a las explotaciones agrarias y/o ganaderas y, en general, a la explotación de los recursos naturales o relacionadas con la protección del medio ambiente…» |
| 2 | Licencia, actos: «… talas en espacios de alto valor paisajístico; casas prefabricadas.» | Se añade «; otros supuestos que fije el plan general.» | Faltaba la letra g) en una lista que se presentaba como cerrada. | Art. 226.2.g: «Otros supuestos establecidos en el plan general por concurrir razones especiales de interés público…» |
| 3 | Declaración responsable: «… placas solares de autoconsumo; puntos de recarga…» | «… placas solares de autoconsumo en cubiertas; instalaciones solares en pérgolas de aparcamiento y espacios libres privados; puntos de recarga…» | Faltaba la letra g) que añadió la Ley 1/2021. | Art. 227.2.g: «Instalaciones de producción de energía proveniente de la energía solar sobre las pérgolas de los aparcamientos de vehículos y en los espacios libres privados no susceptibles de ocupación de las parcelas.» |
| 4 | Esencial: «Gestión por actuaciones aisladas … o integradas …» | «Gestión, sobre todo, por actuaciones aisladas … o integradas …». En la lista de Gestión se añade una línea: «Además de las aisladas y las integradas, hay actuaciones para obtener sistemas generales y actuaciones en suelo no urbanizable» (118.2.c-d). | El art. 118.2 enumera cuatro tipos de actuaciones y el esquema daba a entender que solo había dos. | Art. 118.2: «c) Actuaciones urbanísticas para la obtención de sistemas generales… d) Actuaciones en suelo no urbanizable, de carácter aislado o en el marco del correspondiente plan especial.» |
| 5 | «Aprovechamiento del propietario: … el 90 % del aprovechamiento medio. El resto, para la Administración.» (a: 127-128) | Se añade «Excepcionalmente y de forma motivada, el plan general puede elevar la parte municipal hasta el 20 %» (a: 127.3, 127.5.c y 128). | El 90 % es la regla general. El tope del 20 % es un dato típico de test y faltaba. | Art. 128.3: «El plan general podrá incrementar excepcionalmente y de forma específicamente motivada… el porcentaje de aprovechamiento correspondiente al municipio hasta alcanzar un máximo del veinte por ciento del aprovechamiento medio de referencia…». El art. 127.5.c dice lo mismo para el suelo urbano no consolidado. |
| 6 | «Si la orden supera la cuarta parte del valor de la edificación, el municipio puede subvencionar hasta el 10 %.» | «Si el presupuesto de la orden supera la cuarta parte del valor de la edificación (sin el suelo), el municipio puede subvencionar hasta el 10 % de ese presupuesto.» | No quedaba claro sobre qué se calcula el 10 % y faltaba «excluido el suelo». | Art. 256.1: «Cuando el presupuesto de las obras… supere la cuarta parte del valor de las edificaciones, excluido el suelo, el municipio podrá subvencionar hasta el diez por ciento de dicho presupuesto.» |
| 7 | Plan general: «Fija la ordenación estructural y la pormenorizada.» | «Fija la ordenación estructural y, en todo caso en urbano consolidado, la pormenorizada.» | La frase hacía pensar que el plan general siempre fija la ordenación pormenorizada. Solo es obligatoria en suelo urbano consolidado. En los demás suelos puede remitirla a planes parciales o especiales. | Art. 41.1: «En suelo urbano consolidado, el plan general establecerá como ordenación pormenorizada…». Véanse también los arts. 42.2, 43 y 51.1. |
| 8 | Ordenanzas: «aspectos morfológicos y estéticos… Se aprueban por la legislación de régimen local.» | «regulan, entre otras materias, los aspectos morfológicos y estéticos… Se aprueban con las reglas de competencia y procedimiento de la legislación de régimen local.» | La lista de materias era parcial y no lo decía. La frase final estaba mal construida. | Art. 69.1 (letras a, b y c) y 69.3: «se aplicarán las reglas de competencia y procedimiento establecidas en la legislación de régimen local.» |

## Lo que añadiría pero no he tocado

No he hecho estas ampliaciones porque no corrigen ningún error, alargarían el esquema y `cifras` ya tiene
el máximo de 10 entradas. Las propongo porque el banco del tema 20 pregunta mucho por ellas:

- **Art. 26, consulta de viabilidad en urbanizable no delimitado**: hay 5 preguntas en el banco. Resuelve
  el Pleno en 3 meses. Si no contesta, la consulta se entiende **viable**. Después hay 1 año para presentar
  los instrumentos. El informe del CPU produce efecto durante 4 años.
- **Art. 10.2, patrimonialización de la edificabilidad**: la edificabilidad solo se patrimonializa con su
  realización efectiva.
- **Arts. 249-253, contenido de la regularización de parcelaciones ilegales**: hay unas 12 preguntas en el
  banco. Destacan los 3 años para presentar los planes, el 10 % de espacios libres, la escala 1:2000 y una
  sola vivienda por parcela mínima.
- **Art. 25, deberes del promotor** de actuaciones de urbanización.

No quito nada. Todo lo que contiene el esquema está dentro del epígrafe y de los títulos I, II, IV, V y VI.

## Veredicto

**APTO.** He aplicado 8 correcciones, todas de completitud o de claridad. No queda nada sin resolver. El
validador dice «Todo correcto».
