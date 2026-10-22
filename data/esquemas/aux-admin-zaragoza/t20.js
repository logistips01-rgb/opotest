/* Esquema · Auxiliar Administrativo · Tema 20
   Fuente única: Decreto Legislativo 1/2014 (TRLUA), texto consolidado BOA-d-2014-90410
   (última actualización publicada el 31/12/2024). Títulos I, II, IV, V y VI.
   Quedan fuera: título preliminar (arts. 1-9), Título III (arts. 89-117) y Título VII (arts. 288-294).
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 20, {
  titulo: 'Ley de Urbanismo de Aragón: aspectos básicos',
  epigrafe: 'La Ley de Urbanismo de Aragón: aspectos básicos sobre régimen urbanístico del suelo, planeamiento urbanístico, gestión urbanística, edificación y uso del suelo, y disciplina urbanística.',
  etiquetas: ['TRLUA (DLeg 1/2014) · arts. 10-88 y 118-287', 'Títulos I, II, IV, V y VI'],
  fuentes: ['Decreto Legislativo 1/2014, de 8 de julio, del Gobierno de Aragón, por el que se aprueba el texto refundido de la Ley de Urbanismo de Aragón. Texto consolidado BOA-d-2014-90410 (última actualización publicada el 31/12/2024), arts. 10-88 y 118-287.'],

  esencial: [
    {t: 'Tres clases de suelo, con dos categorías cada una: <b>urbano</b> (consolidado o no consolidado), <b>urbanizable</b> (delimitado o no delimitado) y <b>no urbanizable</b> (especial o genérico). Clasifica el <b>plan general</b>.', a: 'art. 11.1'},
    {t: 'El plan general lo formula el <b>Ayuntamiento</b> y lo aprueba definitivamente el <b>Consejo Provincial de Urbanismo</b> en 4 meses; si no resuelve, queda aprobado.', a: 'arts. 48-49'},
    {t: 'Gestión, sobre todo, por actuaciones <b>aisladas</b> (suelo urbano consolidado) o <b>integradas</b> (unidad de ejecución). Sistemas: gestión <b>directa</b> (expropiación o cooperación) o <b>indirecta</b> (compensación o urbanizador).', a: 'arts. 118.2 y 134.3'},
    {t: 'Tres títulos habilitantes: <b>licencia</b>, <b>declaración responsable</b> y <b>comunicación previa</b>. La licencia la da el Alcalde en <b>3 meses</b> y el silencio es <b>desestimatorio</b>.', a: 'arts. 225-239'},
    {t: 'Infracciones leves, graves y muy graves: multas de hasta 6.000, 60.000 y 300.000 euros. Prescriben a <b>1, 4 y 10 años</b>.', a: 'arts. 277-279 y 284'}
  ],

  mapa: [
    {titulo: 'Tít. I · Régimen urbanístico del suelo', rango: 'arts. 10-37', items: [
      ['10-18', 'Situaciones, clases y categorías del suelo'], ['19-22', 'Estatuto urbanístico de ciudadanía'],
      ['23-27', 'Libertad de empresa y actividad urbanística'], ['28-37', 'Régimen estatutario de la propiedad del suelo']
    ]},
    {titulo: 'Tít. II · Planeamiento urbanístico', rango: 'arts. 38-88', items: [
      ['38-50', 'Plan general de ordenación urbana'], ['51-60', 'Planes parciales'], ['61-66', 'Planes especiales'],
      ['67-76', 'Otros instrumentos de ordenación urbanística'],
      ['77-88', 'Disposiciones comunes']
    ]},
    {titulo: 'Tít. IV · Gestión urbanística', rango: 'arts. 118-213', items: [
      ['118-130', 'Disposiciones generales'], ['131-133', 'Actuaciones aisladas'],
      ['134-182', 'Actuaciones integradas'], ['183-186', 'Actuaciones de rehabilitación urbana'],
      ['187-193', 'Obtención de terrenos dotacionales'], ['194-209', 'Expropiación forzosa'],
      ['210-213', 'Sectores concertados de urbanización prioritaria']
    ]},
    {titulo: 'Tít. V · Edificación y uso del suelo', rango: 'arts. 214-263', items: [
      ['214-216', 'Normas de directa aplicación'], ['217-224', 'Edificación forzosa'],
      ['225-240', 'Títulos habilitantes de naturaleza urbanística'], ['241-253', 'Parcelaciones'],
      ['254-263', 'Deber de conservación']
    ]},
    {titulo: 'Tít. VI · Disciplina urbanística', rango: 'arts. 264-287', items: [
      ['264-267', 'Inspección urbanística'], ['268-276', 'Protección de la legalidad'], ['277-287', 'Régimen sancionador']
    ]}
  ],

  cifras: [
    {v: '3 meses', d: 'Plazo máximo para otorgar las licencias urbanísticas', a: 'art. 238.3'},
    {v: '4 meses', d: 'Para aprobar definitivamente el plan general; sin resolución expresa, queda aprobado', a: 'art. 49.5'},
    {v: '2 meses', d: 'Información pública mínima del plan general tras la aprobación inicial', a: 'art. 48.3'},
    {v: '1 año / 2 años', d: 'Suspensión de licencias para estudiar el plan: se extingue al año; con aprobación inicial, a los 2 años del acuerdo', a: 'art. 78.1'},
    {v: '90 %', d: 'Del aprovechamiento medio para el propietario en suelo urbano no consolidado y urbanizable', a: 'arts. 127.3 y 128'},
    {v: '15 %', d: 'Tope de cesión gratuita por alineaciones y rasantes en suelo urbano consolidado', a: 'art. 31.4.b'},
    {v: 'La mitad', d: 'Límite del deber de conservación: mitad del valor de una construcción nueva equivalente', a: 'art. 254.3'},
    {v: '50 años · 15 años', d: 'Inspección periódica de edificios residenciales de más de 50 años, en municipios de más de 25.000 habitantes, cada 15 años', a: 'art. 260.1'},
    {v: '6 meses', d: 'Caducidad del procedimiento de protección de la legalidad sin resolución notificada', a: 'arts. 268.3 y 269.6'},
    {v: '6 años', d: 'Plazo máximo para cumplir las medidas de restablecimiento, desde su firmeza administrativa', a: 'art. 270.3'}
  ],

  secciones: [
    {titulo: 'Clases de suelo', a: 'arts. 11-18 y 27', bloques: [
      {tipo: 'tabla', cab: ['Clase', 'Qué terrenos', 'Categorías'], filas: [
        ['Urbano', 'Con servicios urbanísticos suficientes, o que puedan tenerlos con solo obras de conexión, o consolidados por la edificación en <b>dos terceras partes</b>, o ya urbanizados en ejecución del plan.', '<b>Consolidado</b> y <b>no consolidado</b>. No consolidado: el que soporta actuaciones integradas. Lo que el plan no define como no consolidado es consolidado.'],
        ['Urbanizable', 'Los que el plan clasifica así por prever su posible transformación.', '<b>Delimitado</b>: los sectores de urbanización prioritaria previstos por el plan general. El resto es <b>no delimitado</b>.'],
        ['No urbanizable', 'Preservados por legislación sectorial o planificación territorial, con riesgos, con valores (ecológicos, agrícolas, forestales, paisajísticos…) o que el plan no considera transformables.', '<b>Especial</b>: siempre los protegidos por legislación o planificación y los de riesgo; los de valores, si el plan lo reconoce. <b>Genérico</b>: la categoría residual.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Lo que el plan general no clasifica como urbano o urbanizable es <b>no urbanizable</b>.', a: '11.2'},
        {t: 'Sin plan general, el suelo que no sea urbano se considera <b>no urbanizable</b>.', a: '11.3'},
        {t: '<b>Solar</b>: suelo urbano urbanizado según el plan, con alineaciones y rasantes señaladas (si el plan las define) y sin cesiones pendientes para calles. En urbano no consolidado y urbanizable, solo cuando las obras están <b>ejecutadas y recibidas</b>.', a: '14'},
        {t: '<b>Cédula urbanística</b>: informe municipal sobre una parcela, a solicitud de cualquiera. Se notifica en <b>2 meses</b> como máximo y <b>no vincula</b> a la Administración.', a: '27'}
      ]}
    ]},

    {titulo: 'Régimen de la propiedad del suelo', a: 'arts. 28-37', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'No urbanizable genérico · arts. 34-36', reglas: [
          'Con título habilitante: construcciones de <b>explotaciones agrarias</b> o ganaderas (y, en general, de explotación de recursos naturales o protección del medio ambiente) y las vinculadas a <b>obras públicas</b> (34.1).',
          'Vivienda unifamiliar aislada: sin posibilidad de núcleo de población (no <b>dos o más</b> edificaciones residenciales en un círculo de <b>150 m</b> de radio). Una por parcela, máximo <b>300 m²</b> construidos y parcela de al menos <b>10.000 m²</b>, salvo condiciones más severas (34.2).',
          'Autorización especial (interés público o social, vivienda aislada en municipios sin plan general, rehabilitación de edificios rurales tradicionales): información pública de <b>20 días hábiles</b> e informe del Consejo Provincial de Urbanismo en <b>2 meses</b>; el municipio resuelve en <b>2 meses</b> (35-36).',
          'Si no resuelve: con informe favorable del Consejo, autorización obtenida; con informe desfavorable, desestimada (36.2).'
        ]},
        {titulo: 'Resto del suelo · arts. 29, 32, 33 y 37', reglas: [
          'Urbano y urbanizable: solo se edifica en <b>solar</b>, salvo urbanización y edificación simultáneas (29.1).',
          'Urbanizable delimitado: sin ordenación pormenorizada aprobada, no se edifica (32.1).',
          'Urbanizable no delimitado: sin plan parcial, régimen del <b>no urbanizable genérico</b> (33).',
          'No urbanizable especial: <b>prohibido</b> todo uso que transforme su destino o lesione el valor protegido (37.1).'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Todo propietario debe <b>conservar</b> terrenos y construcciones en condiciones de seguridad, salubridad, accesibilidad y ornato.', a: '31.1'},
        {t: 'Suelo urbano consolidado: completar la urbanización hasta solar, ceder gratis lo afectado por alineaciones (como máximo el <b>15 %</b> de la finca) y regularizar la finca.', a: '31.4'},
        {t: 'Usos y obras <b>provisionales</b>: excepcionales; cesan y se demuelen <b>sin indemnización</b> cuando lo acuerde el municipio.', a: '29.3'}
      ]}
    ]},

    {titulo: 'Instrumentos de planeamiento', a: 'arts. 38-76', bloques: [
      {tipo: 'tabla', cab: ['Instrumento', 'Para qué', 'Aprobación'], filas: [
        ['Plan general', 'Ordenación integral de uno o varios términos municipales completos. <b>Clasifica</b> el suelo. Fija la ordenación estructural y, en todo caso en urbano consolidado, la pormenorizada.', 'Inicial y provisional: <b>Pleno</b>. Definitiva: <b>Consejo Provincial de Urbanismo</b>.'],
        ['Plan parcial', 'Ordenación pormenorizada de <b>sectores enteros</b> en urbano no consolidado y urbanizable. Exige plan general aprobado definitivamente.', 'Inicial: <b>Alcalde</b>, dando cuenta al Pleno. Información pública mínima de 1 mes. Informe del Consejo Provincial (3 meses). Definitiva: <b>Pleno</b>.'],
        ['Plan especial', 'Independiente o en desarrollo de directrices o del plan general: infraestructuras, protección, reforma interior… <b>No puede clasificar suelo</b>.', 'Según el caso, procedimiento del plan general o del plan parcial.'],
        ['Estudio de detalle', 'Completa o adapta alineaciones y rasantes, volúmenes y condiciones estéticas. No altera el destino del suelo ni el aprovechamiento.', 'Lo formula cualquier persona. Inicial: <b>Alcalde</b>. Definitiva: <b>Pleno</b>, tras información pública mínima de 1 mes.'],
        ['Delimitación del suelo urbano', 'Instrumento de los municipios <b>sin plan general</b>. <b>No</b> se considera instrumento de planeamiento.', 'Inicial y provisional: Pleno. Definitiva: Consejo Provincial, solo por legalidad, en 3 meses.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Sector: ámbito propio de un plan parcial o de un plan especial de reforma interior.', a: '45.1'},
        {t: 'Plan especial de reforma interior: solo en suelo urbano no consolidado, en desarrollo del plan general.', a: '65.1'},
        {t: 'Ordenanzas de edificación y urbanización: regulan, entre otras materias, los aspectos morfológicos y estéticos. <b>No pueden alterar</b> el plan general. Se aprueban con las reglas de competencia y procedimiento de la legislación de régimen local.', a: '69'}
      ]}
    ]},

    {titulo: 'Plan general: elaboración, efectos y alteración', a: 'arts. 39-50 y 77-85', bloques: [
      {tipo: 'lista', items: [
        {t: '<b>Avance</b>: criterios y alternativas; exposición al público durante <b>1 mes como mínimo</b> para sugerencias.', a: '48.1'},
        {t: '<b>Aprobación inicial</b> por el Pleno e información pública de <b>2 meses como mínimo</b>. Sin aprobación inicial no se entiende iniciado el procedimiento.', a: '48.3-48.4'},
        {t: 'Declaración ambiental estratégica (en 3 meses como máximo) y <b>aprobación provisional</b> por el Pleno. Si hay cambio sustancial, nueva información pública.', a: '48.5-48.6'},
        {t: '<b>Aprobación definitiva</b>: Consejo Provincial de Urbanismo, en <b>4 meses</b>; si no resuelve, aprobado. Solo puede denegarla por motivos <b>supralocales</b> o de <b>legalidad</b>.', a: '49'},
        {t: 'Si el plan no lo fija: horizonte de gestión de <b>20 años</b>; plazo máximo para ordenar y urbanizar, 20 años en urbanizable y 12 en urbano no consolidado.', a: '39.1.b y 40.1.f'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Efectos · arts. 79-83', reglas: [
          'Obligan a particulares y Administraciones. Las <b>reservas de dispensación</b> son nulas de pleno derecho.',
          'Ejecutivos al <b>publicarse</b> la aprobación definitiva y el texto íntegro de sus normas.',
          'Su aprobación implica la declaración de <b>utilidad pública</b> a efectos de expropiación.',
          'Vigencia <b>indefinida</b>.',
          'Edificios disconformes: <b>fuera de ordenación</b>. Solo pequeñas reparaciones, u obras parciales de consolidación si no hay expropiación o demolición prevista en 15 años.'
        ]},
        {titulo: 'Alteración y suspensión · arts. 77-78 y 84-85', reglas: [
          '<b>Revisión</b>: alteración que afecta sustancialmente a la ordenación estructural. El resto, <b>modificaciones</b>.',
          'Modificación de menor entidad: la que no afecta a la ordenación estructural del art. 40.',
          'Suspensión de licencias: la acuerda el <b>Pleno</b> para estudiar el plan. Se extingue en <b>1 año</b>, o a los <b>2 años</b> si hay aprobación inicial. No se repite con idéntica finalidad en <b>4 años</b>.'
        ]}
      ]}
    ]},

    {titulo: 'Gestión urbanística', a: 'arts. 118-213', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Actuaciones aisladas · arts. 131-133', reglas: [
          'En suelo urbano <b>consolidado</b>, de forma asistemática, mediante obras ordinarias (118.2.a).',
          'El propietario solo necesita la <b>licencia</b>, con urbanización previa o simultánea (132.1).',
          'Proyecto de obras ordinarias: el Pleno aprueba sus características generales tras <b>20 días</b> de información pública (131.2.a).',
          'Normalización de fincas: no afecta a más del <b>15 %</b> de la finca y la aprueba el <b>Alcalde</b>, con audiencia de 20 días (133).'
        ]},
        {titulo: 'Actuaciones integradas · arts. 134-182', reglas: [
          'Desarrollo sistemático del plan en una <b>unidad de ejecución</b>, en urbano no consolidado o urbanizable delimitado (118.2.b).',
          'Exigen plan con ordenación pormenorizada, unidad delimitada, reparto de beneficios y cargas y <b>proyecto de urbanización</b> (121.2).',
          'El sistema lo fija la Administración al aprobar la ordenación pormenorizada o al delimitar la unidad (122.1).'
        ]}
      ]},
      {tipo: 'tabla', cab: ['Sistema', 'Quién urbaniza', 'Claves'], filas: [
        ['Directa · <b>expropiación</b>', 'La Administración.', 'Por unidades de ejecución completas. Puede liberar bienes con condiciones (149).'],
        ['Directa · <b>cooperación</b>', 'Los propietarios aportan el suelo de cesión y la <b>Administración</b> ejecuta las obras.', 'Reparcelación forzosa. Aplazamiento de pagos hasta 10 años, con garantía (150).'],
        ['Indirecta · <b>compensación</b>', 'Los propietarios, en <b>junta de compensación</b>, a su costa.', 'Iniciativa de propietarios de <b>más de la mitad</b> de la superficie, en <b>1 año</b>. Garantía mínima del 6 % (151-154).'],
        ['Indirecta · <b>urbanizador</b>', 'El urbanizador, agente público elegido en pública competencia.', 'Cobra de los propietarios según el programa de urbanización. Beneficio empresarial máximo del <b>10 %</b> (159, 164-165).']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: '<b>Reparcelación</b>: agrupa las fincas de la unidad y las divide de nuevo según el plan, adjudicando parcelas en proporción a los derechos y los terrenos de cesión a la Administración. Voluntaria o forzosa.', a: '140-141'},
        {t: 'Aprovechamiento del propietario: en urbano consolidado, el <b>objetivo</b> del plan; en urbano no consolidado y urbanizable, el <b>90 %</b> del aprovechamiento medio. El resto, para la Administración. Excepcionalmente y de forma motivada, el plan general puede elevar la parte municipal hasta el <b>20 %</b>.', a: '127.3, 127.5.c y 128'},
        {t: 'Fuera del suelo urbano consolidado, las dotaciones locales se obtienen por <b>cesión obligatoria y gratuita</b>; los sistemas generales, por cesión, ocupación directa o expropiación.', a: '188-189'},
        {t: 'Expropiación forzosa: en <b>4 años</b> como máximo. El justiprecio en expropiaciones autonómicas y locales lo fija el <b>Jurado Aragonés de Expropiación</b>.', a: '199.1 y 209.2'},
        {t: 'Recibe las obras de urbanización el <b>municipio</b>. Plazo de garantía no inferior a <b>5 años</b>.', a: '123.1'},
        {t: 'Además de las aisladas y las integradas, hay actuaciones para obtener <b>sistemas generales</b> y actuaciones en <b>suelo no urbanizable</b>.', a: '118.2.c-d'}
      ]}
    ]},

    {titulo: 'Títulos habilitantes y parcelaciones', a: 'arts. 214-253', bloques: [
      {tipo: 'tabla', cab: ['Título', 'Qué es', 'Para qué actos', 'Desde cuándo legitima'], filas: [
        ['<b>Licencia</b> (226)', 'Acto por el que el <b>Alcalde</b> autoriza.', 'Movimientos de tierra, parcelaciones y segregaciones; obras de nueva planta; reformas que alteren la configuración arquitectónica o cambien el uso característico; obras en edificios protegidos; talas en espacios de alto valor paisajístico; casas prefabricadas; otros supuestos que fije el plan general.', 'Desde que la adopta formalmente el Alcalde.'],
        ['<b>Declaración responsable</b> (227)', 'El interesado manifiesta al Alcalde, <b>bajo su responsabilidad</b>, que cumple los requisitos.', 'Nueva planta de escasa entidad (no residencial ni pública, en una planta); reformas sin variación esencial; renovación de instalaciones; <b>primera ocupación</b>; otras talas; placas solares de autoconsumo en cubiertas; instalaciones solares en pérgolas de aparcamiento y espacios libres privados; puntos de recarga en edificios colectivos.', 'Desde su <b>presentación</b> en el registro.'],
        ['<b>Comunicación previa</b> (228)', 'Pone en conocimiento del Alcalde que reúne los requisitos.', 'Actos no sujetos ni a licencia ni a declaración responsable.', 'Desde su <b>presentación</b> en el registro.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Licencia: plazo máximo de <b>3 meses</b>. Sin notificación, <b>silencio desestimatorio</b>.', a: '238.3 y 239'},
        {t: 'Se otorga según el planeamiento vigente al <b>resolver</b> (si se resuelve en plazo), dejando a salvo el derecho de propiedad y sin perjuicio de tercero.', a: '232'},
        {t: 'Licencia y autorización de actividad para un mismo acto: <b>resolución única</b>.', a: '231.1'},
        {t: 'Nuevo plan incompatible: si la obra no ha empezado, se <b>revoca</b> la licencia; si ya empezó, se revoca o se deja terminar (queda fuera de ordenación). Con audiencia e indemnización, si procede.', a: '233'},
        {t: 'Sin plan que lo autorice, máximo <b>3 plantas</b>. Sin alineaciones fijadas, las construcciones se separan <b>3 m</b> de la calzada.', a: '215.1 y 216.1'}
      ]},
      {tipo: 'ejemplo', t: 'Reforma interior de una vivienda que no cambia la fachada, el volumen, la estructura ni el uso: declaración responsable. Si la obra cambia el uso característico del edificio, hace falta licencia.'},
      {tipo: 'columnas', cols: [
        {titulo: 'Parcelaciones · arts. 241-246', reglas: [
          '<b>Rústica</b>: división con finalidad exclusivamente agraria. Exige <b>declaración previa de innecesariedad</b> de licencia, salvo concentración parcelaria.',
          '<b>Urbanística</b>: división para facilitar edificar o usar el suelo. Exige <b>licencia</b> o proyecto de reparcelación aprobado.',
          'Resuelve el <b>Alcalde</b>. El silencio es <b>siempre denegatorio</b>.',
          'Notarios y registradores exigen la licencia o la declaración de innecesariedad.'
        ]},
        {titulo: 'Parcelaciones ilegales · arts. 242-248', reglas: [
          'Ilegal: contraria a la Ley o al plan, en especial si puede formar un <b>núcleo de población</b>.',
          'Los lotes de una parcelación ilegal <b>nunca son solares</b> ni se puede edificar en ellos.',
          'Regularización: solo las constituidas antes del <b>20 de marzo de 2012</b>, con censo, viables y fuera de suelos de protección especial.'
        ]}
      ]}
    ]},

    {titulo: 'Edificación forzosa, conservación y ruina', a: 'arts. 217-263', bloques: [
      {tipo: 'lista', items: [
        {t: 'Solares y construcciones en ruina o inadecuadas: edificar en el plazo del plan o, en su defecto, en <b>2 años</b>. El municipio puede prorrogar por un periodo igual como máximo.', a: '217.1 y 217.3'},
        {t: 'Declarado el incumplimiento y requerido el propietario, a los <b>6 meses</b> el solar queda en <b>ejecución por sustitución</b>. Concurso en 1 año como máximo.', a: '220.2 y 220.5'},
        {t: '<b>Deber de conservación</b>: seguridad, salubridad, ornato público y calidad ambiental, cultural y turística. Límite: la <b>mitad</b> del valor de una construcción nueva equivalente.', a: '254'},
        {t: '<b>Órdenes de ejecución</b>: las dicta el Alcalde. Lo que exceda del deber normal de conservación lo paga quien lo ordena.', a: '255'},
        {t: 'Si el presupuesto de la orden supera la cuarta parte del valor de la edificación (sin el suelo), el municipio puede subvencionar hasta el <b>10 %</b> de ese presupuesto.', a: '256.1'},
        {t: 'Multas coercitivas: periodicidad de <b>1 mes</b> como mínimo, cada una hasta el <b>10 %</b> del coste de las obras, con tope en el coste total.', a: '259'},
        {t: 'Inspección periódica: edificios de uso predominantemente residencial de más de <b>50 años</b>, en municipios de más de <b>25.000 habitantes</b>, cada <b>15 años</b>.', a: '260.1'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Ruina · art. 261', reglas: [
          'La declara el municipio, de oficio o a instancia de interesado, con audiencia del propietario y los moradores.',
          'Procede, entre otros supuestos, si las reparaciones <b>superan el límite del deber normal de conservación</b>, o si las obras no son autorizables por estar el edificio fuera de ordenación.',
          'Plazo: <b>6 meses</b>. Sin resolución: <b>caducidad</b> si se inició de oficio; <b>desestimación</b> si a instancia de parte.'
        ]},
        {titulo: 'Ruina inminente · art. 262', reglas: [
          'El <b>Alcalde</b> adopta las medidas precisas: apuntalar, desalojar, demoler.',
          'Estas medidas <b>no implican</b> la declaración de la situación legal de ruina.',
          'El municipio responde de los daños; las indemnizaciones son repercutibles al propietario hasta el límite del deber de conservación.'
        ]}
      ]}
    ]},

    {titulo: 'Disciplina urbanística', a: 'arts. 264-287', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Obras en curso · art. 268', reglas: [
          'Sin título habilitante o contra sus condiciones: el Alcalde ordena la <b>paralización inmediata</b>.',
          'Incompatibles con la ordenación: demolición, reconstrucción o cese, a costa del interesado.',
          'Compatibles: <b>2 meses</b> para pedir el título habilitante; si no se legaliza, demolición.',
          'El procedimiento <b>caduca a los 6 meses</b> sin resolución notificada.'
        ]},
        {titulo: 'Obras terminadas · arts. 269-270', reglas: [
          'Se actúa dentro del <b>plazo de prescripción</b> de la infracción, contado desde la total terminación.',
          '<b>Sin límite de plazo</b> en sistemas generales, zonas verdes, espacios libres y suelo no urbanizable especial.',
          'Pasado el plazo, la obra <b>no se legaliza</b>: solo pequeñas reparaciones de seguridad e higiene.',
          'Las medidas de restablecimiento se cumplen en <b>6 años</b> como máximo desde su firmeza.'
        ]}
      ]},
      {tipo: 'tabla', cab: ['Infracción', 'Multa', 'Prescripción (infracción · sanción)', 'Sanciona'], filas: [
        ['Leve', '600 a 6.000 €', '1 año · 1 año', '<b>Alcalde</b>'],
        ['Grave', '6.000,01 a 60.000 €', '4 años · 2 años', '<b>Pleno</b>'],
        ['Muy grave', '60.000,01 a 300.000 €', '10 años · 3 años', '<b>Pleno</b>']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Muy graves, entre otras: parcelación urbanística en no urbanizable o urbanizable no delimitado que pueda formar núcleo de población; actos ilegales sobre dominio público, espacios libres, equipamientos o no urbanizable especial.', a: '279'},
        {t: 'Inspectores urbanísticos: <b>agentes de la autoridad</b>. Sus actas son documentos públicos y prueban los hechos salvo prueba en contrario.', a: '265.1 y 266.1'},
        {t: 'Título habilitante que constituya manifiestamente infracción grave o muy grave: el Alcalde <b>suspende</b> sus efectos y da traslado al juez en <b>10 días</b>.', a: '271.1-271.2'},
        {t: 'Son <b>nulas de pleno derecho</b> las licencias que infrinjan la zonificación de sistemas generales, zonas verdes o espacios libres.', a: '273.3'},
        {t: 'La infracción nunca puede suponer un <b>beneficio económico</b> para el infractor.', a: '282.2'},
        {t: 'Reponer la realidad antes de iniciar el procedimiento sancionador: <b>eximente</b>. Después de la multa y antes del apremio: <b>condonación del 50 %</b>.', a: '282.5 y 287.1'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'El plan general lo aprueba definitivamente el Ayuntamiento Pleno', ok: 'Lo aprueba el Consejo Provincial de Urbanismo. El Pleno da la aprobación inicial y la provisional.', a: '48.3, 48.6 y 49.1'},
    {x: 'Los planes especiales pueden clasificar suelo', ok: 'No pueden: no sustituyen al plan general.', a: '61.3'},
    {x: 'El plan parcial lo aprueba inicialmente el Pleno', ok: 'La inicial es del Alcalde, dando cuenta al Pleno; la definitiva, del Pleno.', a: '57.1 y 57.5'},
    {x: 'La delimitación del suelo urbano es un instrumento de planeamiento', ok: 'No tiene esa consideración. Es el instrumento de los municipios sin plan general.', a: '70'},
    {x: 'En la cooperación, los propietarios ejecutan la urbanización', ok: 'Aportan el suelo de cesión y la Administración ejecuta las obras. En la compensación, la junta urbaniza a su costa.', a: '150.1 y 151.2'},
    {x: 'Si en 3 meses no se notifica nada, la licencia se entiende concedida', ok: 'Silencio desestimatorio. En licencias de parcelación, siempre denegatorio.', a: '239 y 246.4'},
    {x: 'La declaración responsable surte efecto cuando el Ayuntamiento la revisa', ok: 'Legitima desde el día de su presentación en el registro.', a: '229.2'},
    {x: 'Una parcelación rústica no necesita ningún trámite', ok: 'Necesita la declaración previa de innecesariedad de licencia, salvo concentración parcelaria.', a: '245.2'},
    {x: 'Las infracciones graves prescriben a los 2 años', ok: 'Prescriben a los 4 años. A los 2 años prescriben las sanciones impuestas por faltas graves.', a: '284.1 y 284.5'},
    {x: 'Prescrita la infracción, la obra ilegal queda legalizada', ok: 'No se legaliza: solo caben pequeñas reparaciones. En zonas verdes, espacios libres, sistemas generales o no urbanizable especial no hay plazo.', a: '269.3 y 269.4'}
  ]
});
