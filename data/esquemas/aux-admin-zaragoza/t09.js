/* Esquema · Auxiliar Administrativo · Tema 9
   Fuente única: Ley 9/2017 (LCSP), texto consolidado BOE-A-2017-12902:
   arts. 12 a 18 (tipos contractuales), con apoyo de los arts. 25, 26 y 34.2,
   y disposiciones adicionales segunda y tercera (entidades locales).
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 9, {
  titulo: 'Contratos del sector público: tipos y entidades locales',
  epigrafe: 'Los contratos del sector público: delimitación de los tipos contractuales. Competencias en materia de contratación en las Entidades Locales. Normas específicas de contratación pública en las Entidades Locales.',
  etiquetas: ['LCSP · arts. 12 a 18', 'LCSP · DA 2.ª y DA 3.ª'],
  fuentes: ['Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público (LCSP). Texto consolidado BOE-A-2017-12902: arts. 12 a 18 (con los arts. 25, 26 y 34.2 como apoyo) y disposiciones adicionales segunda y tercera.'],

  esencial: [
    {t: 'Cinco contratos típicos: <b>obras, concesión de obras, concesión de servicios, suministro y servicios</b>. Se califican por las normas de la sección 1.ª (arts. 12 a 18); el resto, por el Derecho administrativo o privado que les toque.', a: 'art. 12'},
    {t: 'La <b>concesión</b> se reconoce porque se paga con el <b>derecho a explotar</b> (solo o con un precio) y el concesionario asume el <b>riesgo operacional</b>.', a: 'arts. 14-15'},
    {t: 'Órgano de contratación: el <b>Alcalde</b> hasta el <b>10 %</b> de los recursos ordinarios y <b>6 millones</b> (plurianuales hasta <b>4 años</b>); por encima, el <b>Pleno</b>.', a: 'DA 2.ª.1-2'},
    {t: 'Municipios de gran población: contrata la <b>Junta de Gobierno Local</b>, sea cual sea el importe o la duración. Los pliegos de cláusulas administrativas generales los aprueba el <b>Pleno</b>.', a: 'DA 2.ª.4', examen: '2025'},
    {t: 'Mesa de contratación: la preside un <b>miembro de la Corporación o un funcionario</b>; son vocales el <b>Secretario</b> y el <b>Interventor</b>. Nunca personal eventual.', a: 'DA 2.ª.7', examen: '2025'}
  ],

  mapa: [
    {titulo: 'Título Preliminar, Cap. II, Sección 1.ª · Delimitación de los tipos contractuales', rango: 'arts. 12-18', items: [
      ['12', 'Calificación de los contratos'], ['13', 'Obras'], ['14', 'Concesión de obras'],
      ['15', 'Concesión de servicios'], ['16', 'Suministro'], ['17', 'Servicios'], ['18', 'Contratos mixtos']
    ]},
    {titulo: 'Sección 3.ª · Contratos administrativos y privados (apoyo)', rango: 'arts. 25-26', items: [
      ['25', 'Contratos administrativos'], ['26', 'Contratos privados']
    ]},
    {titulo: 'Disposiciones adicionales · Entidades locales', rango: 'DA 2.ª y 3.ª', items: [
      ['DA 2.ª', 'Competencias en materia de contratación en las Entidades Locales (12 apartados)'],
      ['DA 3.ª', 'Normas específicas de contratación pública en las Entidades Locales (11 apartados)']
    ]}
  ],

  cifras: [
    {v: '10 %', d: 'De los recursos ordinarios del presupuesto: tope del Alcalde como órgano de contratación', a: 'DA 2.ª.1'},
    {v: '6 millones €', d: 'Tope absoluto del Alcalde en obras, suministros, servicios, concesiones y administrativos especiales', a: 'DA 2.ª.1'},
    {v: '4 años', d: 'Duración máxima, prórrogas incluidas, de los plurianuales que contrata el Alcalde', a: 'DA 2.ª.1'},
    {v: '3 millones €', d: 'Tope del Alcalde en contratos privados, concesiones sobre bienes, compra de inmuebles y enajenación del patrimonio', a: 'DA 2.ª.9'},
    {v: '5.000 hab.', d: 'Por debajo: especialidades para pequeños municipios (Pleno, centrales de contratación, certificación de crédito, proyectos por partes)', a: 'DA 2.ª.3 y 6; DA 3.ª.4 y 7'},
    {v: '3', d: 'Vocales de la Mesa de contratación: nunca menos de tres en total', a: 'DA 2.ª.7'},
    {v: '1/3', d: 'Máximo de miembros electos en la Mesa de contratación', a: 'DA 2.ª.7'},
    {v: '50.000 €', d: 'Si la obra de un contrato mixto los supera, hay que hacer proyecto', a: 'art. 18.3'},
    {v: '4 años', d: 'Aplazamiento máximo del pago en la compra de bienes inmuebles', a: 'DA 3.ª.9'},
    {v: '20.000 hab. / 200.000 €', d: 'Municipios de menos de 20.000 hab.: una concesión de servicios no armonizada puede abarcar dos o más servicios públicos si la anualidad media no supera 200.000 €', a: 'DA 3.ª.11'}
  ],

  secciones: [
    {titulo: 'Los tipos contractuales', a: 'arts. 12-17', bloques: [
      {tipo: 'tabla', cab: ['Contrato', 'Objeto', 'Para no confundir'], filas: [
        ['<b>Obras</b> (13)', 'Ejecutar una obra, sola o con la redacción del proyecto, o los trabajos del Anexo I. También realizar, por cualquier medio, una obra que cumpla los requisitos fijados por la entidad contratante.', '«Obra»: trabajos de construcción o ingeniería civil sobre un <b>bien inmueble</b>. Se refiere a una <b>obra completa</b> (susceptible de entregarse al uso general o al servicio), salvo excepciones.'],
        ['<b>Concesión de obras</b> (14)', 'Realizar obras (también restaurar, reparar, conservar y mantener).', 'Se paga con el <b>derecho a explotar la obra</b>, o con ese derecho más un precio.'],
        ['<b>Concesión de servicios</b> (15)', 'Encomendar a título oneroso la <b>gestión de un servicio</b> de titularidad o competencia del poder adjudicador. {{examen:2026}}', 'Se paga con el <b>derecho a explotar el servicio</b>, o con ese derecho más un precio.'],
        ['<b>Suministro</b> (16)', 'Adquisición, arrendamiento financiero o arrendamiento (con o sin opción de compra) de <b>productos o bienes muebles</b>.', 'No lo son los contratos sobre propiedades incorporales o valores negociables (salvo lo dicho para los programas de ordenador en el 16.3.b).'],
        ['<b>Servicios</b> (17)', '<b>Prestaciones de hacer</b>: una actividad o un resultado distinto de una obra o un suministro.', 'Nunca servicios que impliquen <b>ejercicio de la autoridad</b> inherente a los poderes públicos.']
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Siempre son suministro · 16.3', items: [
          'Entregas sucesivas por precio unitario, sin cuantía total exacta',
          'Equipos y sistemas de telecomunicaciones o informáticos, y sus programas',
          'Fabricación con características fijadas por la entidad',
          'Energía primaria o transformada'
        ]},
        {titulo: 'Excepción que se pregunta', reglas: [
          'Los <b>programas de ordenador desarrollados a medida</b> son contrato de <b>servicios</b>, no de suministro (16.3.b).',
          'Los servicios también pueden ser sucesivos y por precio unitario (17).'
        ]}
      ]}
    ]},

    {titulo: 'Concesiones y riesgo operacional', a: 'arts. 14-15', bloques: [
      {tipo: 'lista', items: [
        {t: 'El derecho de explotación implica transferir al concesionario un <b>riesgo operacional</b>: de <b>demanda</b>, de <b>suministro</b> o de ambos.', a: '14.4'},
        {t: 'Hay riesgo operacional cuando <b>no está garantizado</b> que, en condiciones normales, recupere las inversiones ni cubra los costes de explotación.', a: '14.4'},
        {t: 'La pérdida potencial no puede ser <b>meramente nominal o desdeñable</b>: exposición real a las incertidumbres del mercado.', a: '14.4'},
        {t: 'En la concesión de servicios el riesgo operacional se transfiere <b>en los mismos términos</b> que en la de obras.', a: '15.2'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Concesión de obras · 14', items: [
          'Puede incluir adecuar, reformar y modernizar la obra',
          'Puede incluir reposición y gran reparación',
          'Puede obligar a proyectar, ejecutar y conservar obras accesorias o vinculadas'
        ]},
        {titulo: 'Concesión de servicios · 15', items: [
          'Uno o varios poderes adjudicadores la encomiendan',
          'A una o varias personas, naturales o jurídicas',
          'A título oneroso; el servicio es de su titularidad o competencia'
        ]}
      ]}
    ]},

    {titulo: 'Contratos mixtos y calificación', a: 'arts. 18, 25, 26 y 34.2', bloques: [
      {tipo: 'lista', items: [
        {t: 'Mixto: contiene prestaciones de otro u otros contratos de <b>distinta clase</b>.', a: '18.1'},
        {t: 'Solo se admite si las prestaciones están <b>directamente vinculadas</b> y son complementarias, como una <b>unidad funcional</b>.', a: '34.2'},
        {t: 'Varios de obras, suministros o servicios: manda la <b>prestación principal</b>. Si son servicios y suministros, o servicios especiales del Anexo IV y otros, manda el <b>mayor valor estimado</b>.', a: '18.1.a'},
        {t: 'Con una concesión: si no son separables, la principal; si son separables y se hace un contrato único, rigen las normas de obras, suministros o servicios cuando su valor estimado supere los umbrales de los arts. 20 a 22; si no, las de la concesión.', a: '18.1.b'},
        {t: 'Si la obra supera <b>50.000 euros</b>: proyecto. Si hay concesión: estudio de viabilidad.', a: '18.3'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Administrativos · 25 (si los celebra una Administración Pública)', items: [
          'Obras, concesiones, suministro y servicios (salvo algunos servicios financieros, de creación artística y literaria y de espectáculos, y las suscripciones a revistas, publicaciones periódicas y bases de datos)',
          'Los declarados así por una ley y los <b>administrativos especiales</b>: vinculados al giro o tráfico específico de la Administración o que satisfacen de forma directa o inmediata una finalidad pública de su específica competencia'
        ]},
        {titulo: 'Privados · 26', items: [
          'Los de una Administración con otro objeto',
          'Los de poderes adjudicadores que no son Administración Pública',
          'Los de entidades que no son poder adjudicador'
        ]}
      ]}
    ]},

    {titulo: 'Órgano de contratación en las entidades locales', a: 'DA 2.ª.1-4 y 9-11', bloques: [
      {tipo: 'tabla', cab: ['Órgano', 'Contratos', 'Cuándo'], filas: [
        ['<b>Alcalde / Presidente</b>', 'Obras, suministro, servicios, concesión de obras, concesión de servicios y administrativos especiales', 'Valor estimado hasta el <b>10 %</b> de los recursos ordinarios y nunca más de <b>6 millones</b>. Plurianuales: hasta <b>4 años</b> con prórrogas, y la suma de todas las anualidades dentro de esos límites (el porcentaje, sobre el primer ejercicio).'],
        ['<b>Pleno</b>', 'Los mismos', 'Cuando por valor o duración no correspondan al Alcalde. Además, aprueba los <b>pliegos de cláusulas administrativas generales</b>.'],
        ['<b>Alcalde / Presidente</b>', 'Privados, concesiones sobre bienes, adquisición de inmuebles y derechos, enajenación del patrimonio', 'Presupuesto base de licitación (en la enajenación, su valor) hasta el <b>10 %</b> de los recursos ordinarios y <b>3 millones</b>.'],
        ['<b>Pleno</b>', 'Los mismos', 'Cuando no correspondan al Alcalde, y siempre los bienes de <b>valor histórico o artístico</b>.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: '<b>Gran población</b> (art. 121 LBRL): todas esas competencias las ejerce la <b>Junta de Gobierno Local</b>, cualquiera que sea el importe o la duración.', a: 'DA 2.ª.4 y 11', examen: '2025'},
        {t: 'En gran población el <b>Pleno</b> conserva la aprobación de los pliegos de cláusulas administrativas generales.', a: 'DA 2.ª.4', examen: '2025'}
      ]},
      {tipo: 'ejemplo', t: 'Recursos ordinarios de 100 millones: el 10 % son 10 millones, pero el Alcalde solo llega a 6 millones en un contrato de obras. Un contrato de 7 millones es del Pleno. En un municipio de gran población, de la Junta de Gobierno Local.'}
    ]},

    {titulo: 'Mesa, Juntas de Contratación y comité de expertos', a: 'DA 2.ª.5, 7 y 8', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Mesa de contratación · DA 2.ª.7', reglas: [
          '<b>Presidente</b>: un miembro de la Corporación o un funcionario de la misma. {{examen:2025}}',
          '<b>Vocales</b>: el Secretario (o titular de la asesoría jurídica) y el Interventor (o titular del control económico-presupuestario), más los designados. <b>No menos de tres</b> en total.',
          '<b>Electos</b>: no más de <b>un tercio</b>. <b>Secretario de la Mesa</b>: un funcionario.',
          '<b>Personal eventual</b>: nunca en la Mesa ni en informes de valoración. <b>Interinos</b>: solo si faltan funcionarios de carrera cualificados.',
          'Su composición se publica en el <b>perfil de contratante</b>. Puede haber Mesas permanentes.'
        ]},
        {titulo: 'Juntas de Contratación · DA 2.ª.5', reglas: [
          'Son <b>potestativas</b>. Las crea el <b>Pleno</b>, que fija su composición (siempre Secretario o asesoría jurídica, e Interventor).',
          'Actúan como órgano de contratación en obras de reparación simple, conservación y mantenimiento; suministros de bienes consumibles o de fácil deterioro; y servicios, cuando no superen el <b>10 %</b> de los recursos ordinarios o, si lo superan, estén previstos en el presupuesto y se ajusten a sus bases de ejecución.',
          'Límites: en gran población, la <b>Junta de Gobierno Local</b>; en el resto, el <b>Pleno</b>.',
          'Cuando actúan, <b>no interviene la Mesa</b>.'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Comité de expertos (criterios de juicio de valor): funcionarios de carrera o laborales fijos que <b>no hayan redactado</b> la documentación técnica. Siempre un <b>técnico jurista</b> especializado en contratación.', a: 'DA 2.ª.8'}
      ]}
    ]},

    {titulo: 'Normas específicas de la contratación local', a: 'DA 3.ª', bloques: [
      {tipo: 'lista', items: [
        {t: 'Se aplica la LCSP con las especialidades de las DA 2.ª y 3.ª.', a: 'DA 3.ª.1'},
        {t: '<b>Tramitación anticipada</b>: si la ejecución empieza el ejercicio siguiente o depende de un préstamo, crédito o subvención. Adjudicación bajo <b>condición suspensiva</b>.', a: 'DA 3.ª.2'},
        {t: '<b>Fiscalización</b>: el <b>Interventor</b>. Incluye la valoración de la estabilidad presupuestaria de cada contrato, <b>salvo los menores</b>, y la comprobación material de la inversión.', a: 'DA 3.ª.3'},
        {t: 'Concesiones de obras y servicios: el expediente del art. 86.1 LBRL se tramita <b>junto con el estudio de viabilidad</b>.', a: 'DA 3.ª.5'},
        {t: 'Se aplican las normas de <b>supervisión de proyectos</b> del art. 235. Si no hay oficina propia, la de la Diputación o la Comunidad uniprovincial.', a: 'DA 3.ª.6', examen: '2025'},
        {t: 'Los informes de los servicios jurídicos los emite el <b>Secretario</b>. Informe jurídico preceptivo en aprobación de expedientes, modificación, revisión de precios, prórrogas, equilibrio económico, interpretación y resolución. También coordina las obligaciones de publicidad e información de la Ley 19/2013.', a: 'DA 3.ª.8'},
        {t: 'En gran población (Título X LBRL): esos informes, el <b>titular de la asesoría jurídica</b>; la coordinación de publicidad (Ley 19/2013), el <b>titular del Órgano de Apoyo a la Junta de Gobierno</b>.', a: 'DA 3.ª.8', examen: '2026'},
        {t: 'Compra de inmuebles: pago aplazable hasta <b>4 años</b>.', a: 'DA 3.ª.9'},
        {t: 'Pueden adherirse a centrales de contratación del Estado, las CCAA, otras entidades locales y las asociaciones de entidades locales.', a: 'DA 3.ª.10'}
      ]}
    ]},

    {titulo: 'Municipios pequeños', a: 'DA 2.ª.3 y 6; DA 3.ª.4, 7 y 11', bloques: [
      {tipo: 'tabla', cab: ['Población', 'Especialidad'], filas: [
        ['Menos de <b>5.000</b>', 'El <b>Pleno</b> autoriza redactar y licitar proyectos independientes de cada parte de una obra que dure más de un presupuesto anual (DA 2.ª.3).'],
        ['Menos de <b>5.000</b>', 'Pueden contratar a través de <b>centrales de contratación</b> (art. 228) o encomendar el procedimiento por convenio a la <b>Diputación</b> o a la Comunidad uniprovincial (DA 2.ª.6).'],
        ['Menos de <b>5.000</b>', 'La aprobación del gasto puede sustituirse por una <b>certificación de existencia de crédito</b> del Secretario-Interventor o del Interventor (DA 3.ª.4).'],
        ['Menos de <b>5.000</b>', 'Obras financiadas más allá de un presupuesto anual: <b>proyectos independientes</b> por partes, cada uno con su contrato (DA 3.ª.7).'],
        ['Menos de <b>20.000</b>', 'Una concesión de servicios no armonizada puede abarcar <b>dos o más servicios públicos</b> si la anualidad media no supera <b>200.000 euros</b> y se justifica (DA 3.ª.11).']
      ]}
    ]}
  ],

  trampas: [
    {x: 'En gran población, el órgano de contratación depende del importe del contrato', ok: 'Es la Junta de Gobierno Local, sea cual sea el importe o la duración.', a: 'DA 2.ª.4'},
    {x: 'En gran población, la Junta de Gobierno aprueba los pliegos de cláusulas administrativas generales', ok: 'Los aprueba el Pleno.', a: 'DA 2.ª.4'},
    {x: 'La Mesa de contratación solo puede presidirla un miembro de la Corporación', ok: 'Un miembro de la Corporación o un funcionario de la misma.', a: 'DA 2.ª.7'},
    {x: 'El personal eventual puede ser vocal de la Mesa', ok: 'Nunca: ni en la Mesa ni en informes de valoración de ofertas.', a: 'DA 2.ª.7'},
    {x: 'Las Juntas de Contratación son obligatorias y actúan junto a la Mesa', ok: 'Son potestativas y, cuando actúan, se prescinde de la Mesa.', a: 'DA 2.ª.5'},
    {x: 'Las normas de supervisión de proyectos no se aplican a las entidades locales', ok: 'Se aplican a sus contratos de obras (art. 235).', a: 'DA 3.ª.6'},
    {x: 'La concesión de servicios es una modalidad del contrato de servicios', ok: 'Es un tipo propio: se paga con el derecho a explotar y traslada el riesgo operacional.', a: 'arts. 15 y 17'},
    {x: 'Un programa de ordenador hecho a medida es un suministro', ok: 'Es un contrato de servicios.', a: 'art. 16.3.b'},
    {x: 'Por contrato de servicios se pueden encargar funciones de autoridad', ok: 'No pueden ser objeto de estos contratos.', a: 'art. 17'},
    {x: 'El Alcalde contrata hasta el 10 % de los recursos ordinarios, sin otro límite', ok: 'Además, nunca más de 6 millones (3 millones en privados y patrimoniales).', a: 'DA 2.ª.1 y 9'}
  ],

  examenes: [
    'DA 2.ª.4 (gran población: la Junta de Gobierno Local contrata cualquiera que sea el importe): examen oficial 1-jun-2025, pregunta 14.',
    'DA 2.ª.4 (gran población: el Pleno aprueba los pliegos de cláusulas administrativas generales): examen oficial 1-jun-2025, pregunta 33.',
    'DA 2.ª.7 (presidencia de la Mesa de contratación): examen oficial 1-jun-2025, pregunta 34.',
    'DA 3.ª.6 (supervisión de proyectos en las entidades locales): examen oficial 1-jun-2025, pregunta 35.',
    'DA 3.ª.8 (en gran población, los informes atribuidos al Secretario los emite el titular de la asesoría jurídica): examen oficial 31-may-2026, pregunta 11.',
    'Art. 15 (definición del contrato de concesión de servicios): examen oficial 31-may-2026, pregunta 20.'
  ]
});
