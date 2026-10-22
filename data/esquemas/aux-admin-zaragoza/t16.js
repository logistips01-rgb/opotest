/* Esquema · Auxiliar Administrativo · Tema 16
   Fuentes: Ley 7/1985 (LBRL), BOE-A-1985-5392, art. 49 y concordantes; RDLeg 781/1986 (TRRL),
   BOE-A-1986-9865, arts. 55-58; RDLeg 2/2004 (TRLRHL), BOE-A-2004-4214, arts. 15-19;
   Ley 10/2017 de capitalidad de Zaragoza, BOE-A-2018-1683, arts. 48-49 (y 10.4, 14.1);
   Ley 7/1999 de Administración Local de Aragón, BOE-A-1999-10151, arts. 139.1 y 142.1
   (preguntados en el examen de 1-jun-2025).
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 16, {
  titulo: 'Reglamentos y ordenanzas municipales',
  epigrafe: 'Reglamentos y ordenanzas de los municipios. La aprobación de ordenanzas, ordenanzas fiscales y Reglamentos en la ley de capitalidad de Zaragoza.',
  etiquetas: ['LBRL art. 49 · TRRL arts. 55-58', 'TRLRHL arts. 15-19', 'Ley 10/2017 arts. 48-49'],
  fuentes: [
    'Ley 7/1985, de 2 de abril, reguladora de las Bases del Régimen Local. Texto consolidado BOE-A-1985-5392 (última actualización publicada el 03/10/2026), arts. 4, 20, 22, 47, 49, 65, 70, 70 bis, 122, 123 y 127.',
    'Real Decreto Legislativo 781/1986, de 18 de abril, texto refundido de las disposiciones legales vigentes en materia de Régimen Local. Texto consolidado BOE-A-1986-9865 (última actualización publicada el 09/11/2024), arts. 55 a 58.',
    'Real Decreto Legislativo 2/2004, de 5 de marzo, texto refundido de la Ley Reguladora de las Haciendas Locales. Texto consolidado BOE-A-2004-4214 (última actualización publicada el 07/10/2026), arts. 15 a 19.',
    'Ley 10/2017, de 30 de noviembre, de régimen especial del municipio de Zaragoza como capital de Aragón. Texto consolidado BOE-A-2018-1683 (última actualización publicada el 15/01/2019), arts. 10, 14, 48 y 49.',
    'Ley 7/1999, de 9 de abril, de Administración Local de Aragón. Texto consolidado BOE-A-1999-10151 (última actualización publicada el 25/10/2022), arts. 139 y 142.'
  ],

  esencial: [
    {t: 'Las entidades locales aprueban <b>Ordenanzas y Reglamentos</b> y los <b>Alcaldes</b> dictan <b>Bandos</b>. Ninguno puede contener preceptos opuestos a las leyes.', a: 'art. 55 TRRL'},
    {t: 'Régimen general: <b>aprobación inicial</b> por el Pleno, información pública de <b>30 días</b> como mínimo y <b>aprobación definitiva</b> por el Pleno. Sin reclamaciones, el acuerdo provisional pasa a definitivo.', a: 'art. 49 LBRL'},
    {t: 'La ordenanza entra en vigor tras publicarse <b>completa</b> en el BOP y transcurrir el plazo del art. 65.2 (<b>15 días hábiles</b>). Presupuestos y ordenanzas fiscales siguen la ley de haciendas locales.', a: 'art. 70.2 LBRL'},
    {t: 'Zaragoza: el <b>Gobierno de Zaragoza aprueba el proyecto</b>, hay información pública de 30 días naturales, dictamina la <b>Comisión plenaria</b> y el Pleno aprueba en <b>acto único</b>.', a: 'art. 48.3 Ley 10/2017'},
    {t: 'Ordenanzas fiscales en Zaragoza: la <b>aprobación inicial</b> es de la <b>Comisión plenaria</b>; sin reclamaciones, la ordenanza queda definitivamente aprobada.', a: 'art. 49 Ley 10/2017', examen: '2026'}
  ],

  mapa: [
    {titulo: 'LBRL (Ley 7/1985)', rango: 'art. 49 y concordantes', items: [
      ['4.1.a', 'Potestad reglamentaria'], ['22.2.d', 'Pleno: reglamento orgánico y ordenanzas'],
      ['47.2.f', 'Mayoría absoluta: reglamento orgánico'], ['49', 'Aprobación de las ordenanzas'],
      ['65.2', 'Plazo de 15 días hábiles'], ['70.2', 'Publicación y entrada en vigor'],
      ['123.1.c-d', 'Pleno de gran población'], ['127.1.a', 'JGL: proyectos de ordenanzas']
    ]},
    {titulo: 'TRRL (RDLeg 781/1986)', rango: 'arts. 55-58', items: [
      ['55', 'Ordenanzas, Reglamentos y Bandos'], ['56', 'Aprobación y modificación'],
      ['57', 'Prescripción de las infracciones'], ['58', 'Multas: vía de apremio']
    ]},
    {titulo: 'TRLRHL (RDLeg 2/2004)', rango: 'arts. 15-19', items: [
      ['15', 'Ordenanzas fiscales'], ['16', 'Contenido'], ['17', 'Elaboración, publicación y publicidad'],
      ['18', 'Interesados para reclamar'], ['19', 'Recurso contencioso-administrativo']
    ]},
    {titulo: 'Ley 10/2017 (capitalidad)', rango: 'cap. V, arts. 48-49', items: [
      ['10.4.b', 'Comisiones: dictamen de ordenanzas'], ['14.1.a', 'Gobierno: proyectos de ordenanzas'],
      ['48', 'Ordenanzas y Reglamentos'], ['49', 'Ordenanzas fiscales']
    ]},
    {titulo: 'Ley 7/1999 (Administración Local de Aragón)', rango: 'tít. V, cap. III', items: [
      ['139', 'Reglamentos y ordenanzas'], ['142', 'Bandos']
    ]}
  ],

  cifras: [
    {v: '30 días', d: 'Información pública mínima de una ordenanza en el régimen general', a: 'art. 49.b LBRL'},
    {v: '15 días hábiles', d: 'Plazo del art. 65.2 que debe transcurrir para que la ordenanza entre en vigor', a: 'arts. 70.2 y 65.2 LBRL'},
    {v: '10 %', d: 'Vecinos que deben suscribir la iniciativa popular en municipios de más de 20.000 habitantes', a: 'art. 70 bis.2 LBRL'},
    {v: '30 días', d: 'Exposición mínima en el tablón del acuerdo provisional de una ordenanza fiscal', a: 'art. 17.1 TRLRHL'},
    {v: '10.000 hab.', d: 'Por encima, el anuncio de exposición de la ordenanza fiscal va también a un diario de la provincia', a: 'art. 17.2 TRLRHL'},
    {v: '20.000 hab.', d: 'Por encima, se edita el texto íntegro de las ordenanzas fiscales en el primer cuatrimestre', a: 'art. 17.5 TRLRHL'},
    {v: '30 días naturales', d: 'Información pública mínima de ordenanzas y Reglamentos en Zaragoza', a: 'art. 48.3.b Ley 10/2017'},
    {v: '30 días', d: 'Exposición mínima de la ordenanza fiscal aprobada inicialmente en Zaragoza', a: 'art. 49.b Ley 10/2017'}
  ],

  secciones: [
    {titulo: 'Potestad normativa local', a: 'art. 4.1.a LBRL, arts. 55-58 TRRL y arts. 139 y 142 Ley 7/1999', bloques: [
      {tipo: 'lista', items: [
        {t: 'Los municipios tienen, en la esfera de sus competencias, la <b>potestad reglamentaria</b> y de autoorganización.', a: 'art. 4.1.a LBRL'},
        {t: 'Las entidades locales aprueban <b>Ordenanzas y Reglamentos</b>; los <b>Alcaldes</b> dictan <b>Bandos</b>. Nunca pueden contener preceptos opuestos a las leyes.', a: 'art. 55 TRRL'},
        {t: 'Las Ordenanzas se aprueban por el procedimiento del art. 49 LBRL. Para <b>modificar</b> Ordenanzas y Reglamentos hay que seguir los <b>mismos trámites</b> que para aprobarlos.', a: 'art. 56 TRRL'},
        {t: 'Las infracciones de Ordenanzas, Reglamentos y Bandos <b>prescriben</b> en los plazos que el Código Penal fija para las faltas, salvo lo que establezcan las leyes.', a: 'art. 57 TRRL'},
        {t: 'Multas por infracción de Ordenanzas no pagadas voluntariamente: procedimiento administrativo de <b>apremio</b>.', a: 'art. 58 TRRL'}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Aragón: las disposiciones generales locales se llaman <b>reglamentos</b> si regulan la organización y funcionamiento de la entidad local y, en otro caso, <b>ordenanzas</b>.', a: 'art. 139.1 Ley 7/1999', examen: '2025'},
        {t: 'Los <b>bandos</b> de los Alcaldes se publican <b>conforme a los usos y costumbre de la localidad</b>.', a: 'art. 142.1 Ley 7/1999', examen: '2025'}
      ]}
    ]},

    {titulo: 'Quién aprueba y con qué mayoría', a: 'arts. 22, 47, 123 y 127 LBRL', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Régimen común', reglas: [
          {t: 'El <b>Pleno</b> aprueba el reglamento orgánico y las ordenanzas. Esta atribución <b>no se puede delegar</b> en el Alcalde ni en la JGL.', a: '22.2.d y 22.4'},
          {t: 'Reglamento orgánico: <b>mayoría absoluta</b> del número legal de miembros. Regla general de los acuerdos: mayoría simple de los presentes.', a: '47.2.f y 47.1'}
        ]},
        {titulo: 'Municipios de gran población', reglas: [
          {t: 'La <b>JGL</b> aprueba los <b>proyectos</b> de ordenanzas y reglamentos, incluidos los orgánicos, salvo las normas del Pleno y sus comisiones.', a: '127.1.a'},
          {t: 'El <b>Pleno</b> aprueba y modifica ordenanzas y reglamentos; solo puede delegarlo en sus <b>comisiones</b>.', a: '123.1.d y 123.3'},
          {t: 'Reglamentos orgánicos: <b>mayoría absoluta</b> del número legal de miembros del Pleno.', a: '123.1.c y 123.2'}
        ]}
      ]}
    ]},

    {titulo: 'Procedimiento general de las ordenanzas', a: 'arts. 49, 65.2 y 70.2 LBRL', bloques: [
      {tipo: 'lista', items: [
        {t: '<b>1. Aprobación inicial</b> por el Pleno.', a: '49.a'},
        {t: '<b>2. Información pública y audiencia</b> a los interesados: <b>mínimo 30 días</b> para presentar reclamaciones y sugerencias.', a: '49.b'},
        {t: '<b>3. Resolución</b> de todas las reclamaciones y sugerencias presentadas en plazo y <b>aprobación definitiva</b> por el Pleno.', a: '49.c'},
        {t: 'Si no se presenta ninguna reclamación o sugerencia, el acuerdo hasta entonces provisional se entiende <b>definitivamente adoptado</b>.', a: '49, párrafo final'}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Las ordenanzas se publican en el <b>Boletín Oficial de la Provincia</b>. No entran en vigor hasta que se publica <b>completamente</b> su texto y transcurre el plazo del art. 65.2: <b>15 días hábiles</b> desde que el Estado o la Comunidad Autónoma reciben la comunicación del acuerdo.', a: '70.2 y 65.2'},
        {t: 'Excepción: los <b>presupuestos</b> y las <b>ordenanzas fiscales</b> se publican y entran en vigor según la ley de haciendas locales.', a: '70.2'}
      ]},
      {tipo: 'ejemplo', t: 'El Pleno aprueba inicialmente una ordenanza de terrazas y la expone 30 días. Nadie reclama: queda aprobada definitivamente sin nuevo acuerdo. Entra en vigor cuando se ha publicado íntegra en el BOP y ha pasado el plazo de 15 días hábiles del art. 65.2.'}
    ]},

    {titulo: 'Ordenanzas fiscales', a: 'arts. 15-19 TRLRHL', bloques: [
      {tipo: 'lista', items: [
        {t: 'Las entidades locales deben acordar la <b>imposición y supresión</b> de sus tributos propios y aprobar sus ordenanzas fiscales, salvo los impuestos del art. 59.1.', a: '15.1'},
        {t: 'Contenido mínimo: hecho imponible, sujeto pasivo, responsables, exenciones, reducciones y bonificaciones, base imponible y liquidable, tipo o cuota, periodo impositivo y devengo; regímenes de declaración e ingreso; fechas de aprobación y de comienzo de aplicación.', a: '16.1'},
        {t: 'La ordenanza se aprueba <b>a la vez</b> que el acuerdo de imposición del tributo.', a: '16.1'}
      ]},
      {tipo: 'tabla', cab: ['Fase', 'Regla'], filas: [
        ['Acuerdo provisional', 'Exposición en el <b>tablón de anuncios</b> durante <b>30 días como mínimo</b> para examinar el expediente y reclamar.'],
        ['Anuncios', 'Siempre en el <b>BOP</b>. Ayuntamientos de <b>más de 10.000</b> habitantes: además, en un diario de los de mayor difusión de la provincia.'],
        ['Acuerdo definitivo', 'Resuelve las reclamaciones y aprueba la redacción definitiva. Sin reclamaciones, es definitivo <b>sin necesidad de acuerdo plenario</b>.'],
        ['Publicación', 'Acuerdo definitivo y texto íntegro en el BOP. <b>No entra en vigor</b> hasta esa publicación.'],
        ['Edición', 'Entidades de <b>más de 20.000</b> habitantes: editan el texto íntegro en el <b>primer cuatrimestre</b> del ejercicio.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Pueden reclamar quienes tengan un interés directo o resulten afectados, y los colegios oficiales, cámaras oficiales, asociaciones y demás entidades que defiendan sus intereses.', a: '18'},
        {t: 'Contra las ordenanzas fiscales <b>solo</b> cabe recurso <b>contencioso-administrativo</b>, desde su publicación en el BOP.', a: '19.1'},
        {t: 'Si una sentencia firme las anula o modifica, se mantienen los actos firmes o consentidos, salvo que la sentencia lo prohíba.', a: '19.2'}
      ]}
    ]},

    {titulo: 'Zaragoza: ordenanzas y Reglamentos', a: 'art. 48 Ley 10/2017', bloques: [
      {tipo: 'lista', items: [
        {t: 'Se aplica la legislación de procedimiento administrativo común y este artículo. Se excluye el <b>planeamiento urbanístico</b>, con su normativa propia.', a: '48.1'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Iniciativa · 48.2', items: [
          'Gobierno de Zaragoza: remite el <b>proyecto</b> normativo.',
          'Grupos políticos: presentan una <b>proposición</b> {{examen:2026}}.',
          'Iniciativa popular: en los términos de la normativa básica.'
        ]},
        {titulo: 'Proyectos · 48.3', reglas: [
          'a) <b>Aprobación del proyecto</b> por el Gobierno de Zaragoza (si regula el Pleno y sus Comisiones, por el Pleno).',
          'b) Información pública y audiencia: <b>mínimo 30 días naturales</b>, con anuncio en el boletín oficial y en el tablón municipal.',
          'c) Remisión a la <b>Comisión plenaria</b> competente, con las reclamaciones y sugerencias, para su dictamen.',
          'd) Aprobación en <b>acto único</b> por el Pleno, resolviendo las reclamaciones y sugerencias.',
          'e) Publicación <b>íntegra</b> en el boletín oficial.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Proposiciones de los grupos: con una memoria del grupo, van <b>primero a la Comisión</b> para dictamen; si se acepta, información pública de 30 días naturales como mínimo; después la Comisión propone al Pleno la aprobación en acto único.', a: '48.4'},
        {t: 'Proposiciones o enmiendas que aumenten créditos o disminuyan ingresos del ejercicio en curso: necesitan la <b>conformidad del Gobierno de Zaragoza</b>.', a: '48.6'},
        {t: 'Las enmiendas de los Concejales se rigen por el Reglamento orgánico.', a: '48.5'}
      ]}
    ]},

    {titulo: 'Zaragoza: ordenanzas fiscales', a: 'art. 49 Ley 10/2017', bloques: [
      {tipo: 'lista', items: [
        {t: 'Se tramitan como el art. 48, con estas especialidades:', a: '49'},
        {t: 'a) El Gobierno de Zaragoza aprueba el <b>proyecto</b> y lo remite a la Comisión plenaria para su dictamen y <b>aprobación inicial</b>.', a: '49.a', examen: '2026'},
        {t: 'b) Aprobada inicialmente por la Comisión, se expone al público <b>30 días como mínimo</b>, con anuncio en el boletín oficial, el tablón de anuncios y la sede electrónica.', a: '49.b'},
        {t: 'c) La Comisión propone al Pleno resolver las reclamaciones y aprobar en <b>acto único</b>. Si no hay reclamaciones, la ordenanza se entiende <b>definitivamente aprobada</b>.', a: '49.c', examen: '2026'}
      ]}
    ]},

    {titulo: 'Régimen general frente a ley de capitalidad', a: 'art. 49 LBRL, art. 17 TRLRHL y arts. 48-49 Ley 10/2017', bloques: [
      {tipo: 'tabla', cab: ['Trámite', 'Régimen general', 'Zaragoza (Ley 10/2017)'], filas: [
        ['Iniciativa', 'El art. 49 LBRL empieza en la aprobación inicial. En gran población, la JGL aprueba los proyectos (127.1.a LBRL). Los vecinos pueden presentar proyectos de reglamentos por iniciativa popular (70 bis.2 LBRL).', 'Gobierno (proyecto), grupos políticos (proposición) o iniciativa popular «en los términos previstos en la normativa básica» (48.2).'],
        ['Primer acuerdo', 'Aprobación inicial por el <b>Pleno</b> (49.a).', 'Aprobación del proyecto por el <b>Gobierno de Zaragoza</b> (48.3.a).'],
        ['Información pública', 'Mínimo <b>30 días</b> (49.b).', 'Mínimo <b>30 días naturales</b>, con anuncio en el boletín oficial y el tablón (48.3.b).'],
        ['Antes del Pleno', 'El art. 49 LBRL no menciona dictamen. Las comisiones estudian e informan los asuntos que decide el Pleno (20.1.c y 122.4.a LBRL).', 'Dictamen de la <b>Comisión plenaria</b>, con las reclamaciones (48.3.c y 10.4.b).'],
        ['Aprobación final', 'Resolución de reclamaciones y <b>aprobación definitiva</b> por el Pleno (49.c).', 'Aprobación en <b>acto único</b> por el Pleno, resolviendo las reclamaciones (48.3.d).'],
        ['Sin reclamaciones', 'El acuerdo provisional se entiende <b>definitivamente adoptado</b> (49, párrafo final).', 'El art. 48 no prevé aprobación tácita: el Pleno aprueba siempre en acto único (48.3.d). Solo las ordenanzas fiscales se entienden aprobadas sin reclamaciones (49.c).'],
        ['Ordenanza fiscal', 'Acuerdo provisional; exposición en el tablón 30 días como mínimo; acuerdo definitivo. Sin reclamaciones, definitivo sin acuerdo plenario (17 TRLRHL).', 'Proyecto del Gobierno; <b>aprobación inicial por la Comisión plenaria</b>; exposición 30 días como mínimo; Pleno en acto único. Sin reclamaciones, definitivamente aprobada (49).']
      ]}
    ]}
  ],

  trampas: [
    {x: 'Los Bandos los aprueba el Pleno', ok: 'Los dictan los Alcaldes. El Pleno aprueba Ordenanzas y Reglamentos.', a: '55 TRRL'},
    {x: 'Para modificar una ordenanza basta un acuerdo del Pleno', ok: 'Hay que seguir los mismos trámites que para aprobarla.', a: '56 TRRL'},
    {x: 'El art. 57 TRRL fija las sanciones por infringir ordenanzas', ok: 'Solo remite la prescripción de las infracciones a los plazos del Código Penal para las faltas.', a: '57 TRRL'},
    {x: 'La información pública de una ordenanza dura como mínimo 20 días', ok: 'Mínimo 30 días.', a: '49.b LBRL'},
    {x: 'Si nadie reclama, el Pleno tiene que adoptar la aprobación definitiva', ok: 'El acuerdo provisional se entiende definitivamente adoptado.', a: '49 LBRL'},
    {x: 'La ordenanza entra en vigor al día siguiente de su publicación', ok: 'Hace falta su publicación completa en el BOP y que transcurra el plazo del art. 65.2 (15 días hábiles).', a: '70.2 LBRL'},
    {x: 'Contra una ordenanza fiscal cabe recurso de reposición', ok: 'Solo cabe recurso contencioso-administrativo.', a: '19.1 TRLRHL'},
    {x: 'En Zaragoza los grupos políticos presentan proyectos normativos', ok: 'Presentan proposiciones; el proyecto lo remite el Gobierno de Zaragoza.', a: '48.2 Ley 10/2017'},
    {x: 'En Zaragoza el Gobierno aprueba inicialmente la ordenanza fiscal y el Pleno la definitiva', ok: 'El Gobierno aprueba el proyecto, la Comisión plenaria la aprobación inicial y el Pleno aprueba en acto único.', a: '49 Ley 10/2017'},
    {x: 'En Zaragoza la información pública de una ordenanza es de 30 días hábiles', ok: 'Es de 30 días naturales como mínimo.', a: '48.3.b Ley 10/2017'}
  ],

  examenes: [
    'Art. 139.1 Ley 7/1999 de Administración Local de Aragón (reglamentos u ordenanzas según su objeto): examen oficial 1-jun-2025, pregunta 25.',
    'Art. 142.1 Ley 7/1999 de Administración Local de Aragón (los bandos se publican conforme a los usos y costumbre de la localidad): examen oficial 1-jun-2025, pregunta 26.',
    'Art. 48.2.b Ley 10/2017 (los grupos políticos, mediante proposición): examen oficial 31-may-2026, pregunta 18.',
    'Art. 49 Ley 10/2017 (ordenanzas fiscales: proyecto del Gobierno, aprobación inicial de la Comisión plenaria y aprobación del Pleno): examen oficial 31-may-2026, pregunta 37.'
  ]
});
