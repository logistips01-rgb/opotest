/* Esquema · Auxiliar Administrativo · Tema 11
   Fuentes: LBRL (BOE-A-1985-5392) arts. 84-87, 44 y 47.2.k; Ley 40/2015 (BOE-A-2015-10566)
   arts. 118-127; Reglamento de Servicios de las Corporaciones locales de 1955
   (BOE-A-1955-10057) Títulos I y II; Ley 38/2003 General de Subvenciones (BOE-A-2003-20977);
   LCSP (BOE-A-2017-12902) art. 284.1 y DA 34.ª.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 11, {
  titulo: 'Actividad de las entidades locales: policía, fomento y servicio público',
  epigrafe: 'La actividad de las entidades Locales. Policía. El fomento. El servicio público local y sus formas de gestión.',
  etiquetas: ['LBRL · arts. 84 a 87', 'Ley 40/2015 · arts. 118 a 127', 'RSCL 1955 · LGS'],
  fuentes: [
    'Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LBRL). Texto consolidado BOE-A-1985-5392, arts. 84 a 87 (con los arts. 44 y 47.2.k).',
    'Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público (LRJSP). Texto consolidado BOE-A-2015-10566, arts. 118 a 127 (consorcios).',
    'Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de las Corporaciones locales (RSCL). Texto consolidado BOE-A-1955-10057, Títulos I (intervención) y II (fomento).',
    'Ley 38/2003, de 17 de noviembre, General de Subvenciones (LGS). Texto consolidado BOE-A-2003-20977, arts. 2, 3, 8, 17 y 22.',
    'Ley 9/2017, de Contratos del Sector Público (LCSP). Texto consolidado BOE-A-2017-12902, art. 284.1 y disposición adicional trigésima cuarta.'
  ],

  esencial: [
    {t: '<b>Policía</b>: las entidades locales intervienen la actividad de los ciudadanos con ordenanzas y bandos, licencias, comunicación previa o declaración responsable, control posterior y órdenes individuales.', a: 'LBRL 84.1'},
    {t: 'Regla general: <b>sin licencia</b>. Solo cabe por <b>orden público, seguridad pública, salud pública o medio ambiente</b> (si no basta una declaración responsable) o si el número de operadores es <b>limitado</b>.', a: 'LBRL 84 bis.1'},
    {t: '<b>Fomento</b>: la subvención es una entrega de dinero <b>sin contraprestación directa</b>, ligada a un objetivo de utilidad pública o interés social. Procedimiento ordinario: <b>concurrencia competitiva</b>.', a: 'LGS 2.1 y 22.1'},
    {t: '<b>Gestión directa</b>: la propia entidad, organismo autónomo local, entidad pública empresarial local o sociedad mercantil local de capital público. <b>Indirecta</b>: concesión de servicios.', a: 'LBRL 85.2', examen: '2025'},
    {t: 'Servicios <b>reservados</b> a las entidades locales: agua (abastecimiento domiciliario y depuración), residuos y transporte público de viajeros.', a: 'LBRL 86.2'}
  ],

  mapa: [
    {titulo: 'LBRL · Título VI, Cap. II «Actividades y servicios»', rango: 'arts. 84-87', items: [
      ['84', 'Medios de intervención'], ['84 bis', 'Licencia: solo si está justificada'],
      ['84 ter', 'Comunicación y verificación posterior'], ['85', 'Servicios públicos locales y formas de gestión'],
      ['85 bis', 'Organismos autónomos y entidades públicas empresariales locales'], ['85 ter', 'Sociedades mercantiles locales'],
      ['86', 'Iniciativa económica y reserva de servicios'], ['87', 'Derogado (consorcios: Ley 40/2015)']
    ]},
    {titulo: 'Ley 40/2015 · Título II, Cap. VI «De los consorcios»', rango: 'arts. 118-127', items: [
      ['118', 'Definición y actividades'], ['119', 'Régimen jurídico'], ['120', 'Adscripción'],
      ['121', 'Personal'], ['122', 'Presupuesto, contabilidad y control'], ['123', 'Creación'],
      ['124', 'Estatutos'], ['125-126', 'Derecho de separación'], ['127', 'Disolución']
    ]},
    {titulo: 'Reglamento de Servicios (1955)', rango: 'Títulos I y II', items: [
      ['1-22', 'Intervención administrativa en la actividad privada'], ['23-29', 'Acción de fomento: subvenciones']
    ]},
    {titulo: 'Ley General de Subvenciones', rango: 'arts. 2-22', items: [
      ['2', 'Concepto de subvención'], ['3', 'Ámbito: incluye la Administración local'], ['8', 'Plan estratégico y principios'],
      ['17', 'Bases reguladoras'], ['22', 'Procedimientos de concesión']
    ]}
  ],

  cifras: [
    {v: '5', d: 'Medios de intervención en la actividad de los ciudadanos', a: 'LBRL 84.1'},
    {v: '4', d: 'Formas de gestión directa de los servicios públicos locales {{examen:2025}}', a: 'LBRL 85.2.A'},
    {v: '3', d: 'Actividades o servicios esenciales reservados a las entidades locales', a: 'LBRL 86.2'},
    {v: '5 años', d: 'De ejercicio profesional, si el máximo directivo de un OAL o una EPEL viene del sector privado', a: 'LBRL 85 bis.1.b'},
    {v: '+50 %', d: 'Financiar más de la mitad de la actividad: criterio f) para adscribir un consorcio', a: 'LRJSP 120.2.f'},
    {v: '6 meses', d: 'Para modificar los estatutos de un consorcio que cambia de adscripción', a: 'LRJSP 120.4'},
    {v: '2.400.000 € / 50', d: 'Activo, ingresos (euros) o trabajadores: con dos de las tres circunstancias, auditoría de cuentas del consorcio', a: 'LRJSP 122.3'},
    {v: '2', d: 'Administraciones (o entes de más de una) que deben seguir para que el consorcio continúe tras una separación', a: 'LRJSP 126.1'}
  ],

  secciones: [
    {titulo: 'Policía: medios de intervención', a: 'LBRL 84, 84 bis y 84 ter; RSCL 1 y 6', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Medios · LBRL 84.1', items: [
          'a) <b>Ordenanzas y bandos</b>',
          'b) <b>Previa licencia</b> y otros actos de control preventivo (con lo dispuesto en la Ley 17/2009 para actividades de servicios)',
          'c) <b>Comunicación previa</b> o <b>declaración responsable</b>',
          'd) <b>Control posterior</b> al inicio de la actividad',
          'e) <b>Órdenes individuales</b> que mandan o prohíben un acto'
        ]},
        {titulo: 'Principios', reglas: [
          '<b>Igualdad de trato, necesidad y proporcionalidad</b> con el objetivo que se persigue (LBRL 84.2).',
          'Contenido congruente con los motivos y fines; entre varios admisibles, <b>el menos restrictivo</b> de la libertad individual (RSCL 6).'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'La función de policía (RSCL 1.1.º): intervenir cuando hay perturbación o <b>peligro de perturbación grave</b> de la tranquilidad, seguridad, salubridad o moralidad ciudadanas.', a: 'RSCL 1'},
        {t: 'Licencia excepcional para actividades económicas: <b>orden público, seguridad pública, salud pública o protección del medio ambiente</b> en el lugar concreto, si no bastan la declaración responsable o la comunicación.', a: 'LBRL 84 bis.1.a'},
        {t: 'También cuando el número de operadores es limitado: <b>escasez de recursos naturales</b>, uso del <b>dominio público</b>, impedimentos técnicos o servicios públicos con <b>tarifas reguladas</b>.', a: 'LBRL 84 bis.1.b'},
        {t: 'Instalaciones o infraestructuras físicas: autorización solo si la establece una <b>ley</b> y pueden dañar el medio ambiente, el entorno urbano, la seguridad, la salud o el patrimonio histórico.', a: 'LBRL 84 bis.2'},
        {t: 'Sin autorización previa: la entidad debe planificar los procedimientos de <b>comunicación</b> y de <b>verificación posterior</b>.', a: 'LBRL 84 ter'}
      ]}
    ]},

    {titulo: 'Las licencias', a: 'LBRL 84.3 y 84 bis.3; RSCL 12, 13 y 16', bloques: [
      {tipo: 'lista', items: [
        {t: 'Las licencias de <b>otras Administraciones no eximen</b> de obtener las licencias locales.', a: 'LBRL 84.3'},
        {t: 'Si concurren licencias de la entidad local y de otra Administración, la local debe <b>motivar</b> el interés general concreto que protege y que no cubre ya otra autorización.', a: 'LBRL 84 bis.3'},
        {t: 'Se otorgan <b>salvo el derecho de propiedad y sin perjuicio del de tercero</b>. No sirven para excluir la responsabilidad civil o penal.', a: 'RSCL 12'},
        {t: 'Las relativas a una obra, instalación o servicio son transmisibles, comunicándolo por escrito. <b>No son transmisibles</b> si el número es limitado.', a: 'RSCL 13'}
      ]},
      {tipo: 'tabla', cab: ['Situación', 'Efecto', 'Indemnización'], filas: [
        ['Se incumplen las condiciones', 'Quedan <b>sin efecto</b>', 'No se prevé'],
        ['Desaparecen las circunstancias o surgen otras que habrían justificado denegarla', '<b>Deben</b> revocarse', 'No se prevé'],
        ['Se adoptan nuevos criterios de apreciación', '<b>Pueden</b> revocarse', '<b>Sí</b>, daños y perjuicios'],
        ['Otorgadas erróneamente', '<b>Pueden</b> anularse', '<b>Sí</b>, daños y perjuicios']
      ]}
    ]},

    {titulo: 'Fomento: las subvenciones', a: 'LGS 2, 3, 8, 17 y 22; RSCL 23-27', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Requisitos de la subvención · LGS 2.1', items: [
          'Disposición <b>dineraria</b> a personas públicas o privadas',
          '<b>Sin contraprestación directa</b> de los beneficiarios',
          'Sujeta a un objetivo, proyecto, actividad, comportamiento o situación',
          'Para <b>fomentar</b> una actividad de utilidad pública o interés social, o una finalidad pública'
        ]},
        {titulo: 'Régimen en las entidades locales', reglas: [
          'La LGS se aplica a las entidades que integran la <b>Administración local</b> (LGS 3.1.b).',
          'Antes: un <b>plan estratégico de subvenciones</b> (LGS 8.1). Principios: publicidad, transparencia, concurrencia, objetividad, igualdad y no discriminación; eficacia; eficiencia (8.3).',
          'Bases reguladoras: en las <b>bases de ejecución del presupuesto</b>, en una <b>ordenanza general</b> de subvenciones o en una <b>ordenanza específica</b> (LGS 17.2).'
        ]}
      ]},
      {tipo: 'tabla', cab: ['Procedimiento', 'Cuándo'], filas: [
        ['<b>Concurrencia competitiva</b> (ordinario)', 'Se comparan las solicitudes y se ordenan según los criterios de las bases y la convocatoria (LGS 22.1).'],
        ['<b>Concesión directa</b>', 'a) Previstas <b>nominativamente</b> en los presupuestos. b) Impuestas por una norma con <b>rango de ley</b>. c) Excepcionalmente, por razones de interés público, social, económico o humanitario que dificulten la convocatoria (LGS 22.2).']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'RSCL: pueden subvencionarse entidades u organismos cuyos servicios o actividades <b>complementen o suplan</b> los de competencia local.', a: 'RSCL 23.1'},
        {t: 'RSCL: carácter <b>voluntario y eventual</b>; <b>no son invocables como precedente</b>.', a: 'RSCL 26.1'},
        {t: 'RSCL: son <b>nulos</b> los acuerdos de subvención por <b>mera liberalidad</b>.', a: 'RSCL 27.1'}
      ]}
    ]},

    {titulo: 'Servicio público local y formas de gestión', a: 'LBRL 85; LCSP 284.1 y DA 34.ª', bloques: [
      {tipo: 'lista', items: [
        {t: 'Son servicios públicos locales los que prestan las entidades locales <b>en el ámbito de sus competencias</b>.', a: 'LBRL 85.1'},
        {t: 'Se gestionan de la forma <b>más sostenible y eficiente</b> de las enumeradas.', a: 'LBRL 85.2'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Gestión directa · 85.2.A {{examen:2025}}', items: [
          'a) Por la <b>propia entidad local</b>',
          'b) <b>Organismo autónomo</b> local',
          'c) <b>Entidad pública empresarial</b> local',
          'd) <b>Sociedad mercantil local</b> con capital de titularidad pública'
        ], reglas: [
          'c) y d) solo si una <b>memoria justificativa</b> acredita que son más sostenibles y eficientes que a) y b), con criterios de rentabilidad económica y recuperación de la inversión. {{examen:2026}}',
          'La memoria del asesoramiento se eleva al <b>Pleno</b>; informe del <b>interventor</b> sobre la sostenibilidad financiera.'
        ]},
        {titulo: 'Gestión indirecta · 85.2.B', reglas: [
          'La ley remite a las formas del antiguo contrato de <b>gestión de servicios públicos</b>.',
          'La LCSP dispone que esas referencias se entienden hechas al contrato de <b>concesión de servicios</b> (DA 34.ª).',
          'Nunca por concesión los servicios que impliquen <b>ejercicio de la autoridad</b> (LCSP 284.1).',
          'La forma elegida debe respetar las funciones reservadas a <b>funcionarios públicos</b> (art. 9 EBEP).'
        ]}
      ]},
      {tipo: 'ejemplo', t: 'Un ayuntamiento quiere gestionar las piscinas con una sociedad mercantil 100 % municipal. Es gestión directa, pero antes necesita una memoria justificativa de que es más sostenible y eficiente que gestionarlas él mismo o con un organismo autónomo. Si las adjudica a una empresa privada que asume el riesgo, es gestión indirecta (concesión de servicios).'}
    ]},

    {titulo: 'Organismos autónomos, EPEL y sociedades', a: 'LBRL 85 bis y 85 ter', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'OAL y EPEL · 85 bis', reglas: [
          'Creación, modificación, refundición y supresión: el <b>Pleno</b>, que aprueba sus <b>estatutos</b>.',
          'Adscritos a una Concejalía, Área u órgano equivalente (las EPEL, también a un OAL).',
          'Máximo directivo: funcionario de carrera o laboral de las Administraciones, o profesional del sector privado; <b>titulados superiores</b>, y el privado con <b>más de 5 años</b> de ejercicio.',
          'OAL: <b>consejo rector</b>. EPEL: <b>consejo de administración</b>, con un secretario funcionario de titulación superior.',
          'Inventario remitido <b>anualmente</b> a la concejalía o área. Estatutos aprobados y publicados <b>antes</b> de empezar a funcionar.'
        ]},
        {titulo: 'Sociedades mercantiles locales · 85 ter', reglas: [
          'Se rigen <b>íntegramente por el Derecho privado</b>, salvo en materia presupuestaria, contable, de control financiero, de control de eficacia y de contratación.',
          'Adoptan una forma de la <b>Ley de Sociedades de Capital</b>; la escritura indica el capital que aportan las Administraciones o sus entes.',
          'Los estatutos regulan la <b>Junta General</b>, el <b>Consejo de Administración</b> y los máximos órganos de dirección.'
        ]}
      ]}
    ]},

    {titulo: 'Iniciativa económica y reserva de servicios', a: 'LBRL 86 y 47.2.k', bloques: [
      {tipo: 'lista', items: [
        {t: 'Las entidades locales <b>pueden</b> ejercer la iniciativa pública en actividades económicas si se garantiza la <b>estabilidad presupuestaria</b> y la <b>sostenibilidad financiera</b>.', a: '86.1'},
        {t: 'El expediente de conveniencia y oportunidad incluye un <b>análisis del mercado</b> (oferta, demanda, rentabilidad y efectos sobre la concurrencia). Lo aprueba el <b>Pleno</b>, que fija la forma de gestión.', a: '86.1'},
        {t: 'Reservados: <b>abastecimiento domiciliario y depuración de aguas</b>; <b>recogida, tratamiento y aprovechamiento de residuos</b>; <b>transporte público de viajeros</b>. El Estado y las CCAA pueden reservar otros por <b>ley</b>.', a: '86.2'},
        {t: 'Ejecutarlos en <b>monopolio</b>: acuerdo del Pleno más <b>aprobación de la Comunidad Autónoma</b>.', a: '86.2'},
        {t: 'La municipalización en monopolio y la forma concreta de gestión requieren <b>mayoría absoluta</b>.', a: '47.2.k'},
        {t: 'El Estado puede impugnar estos actos si incumplen la legislación de estabilidad presupuestaria.', a: '86.3'}
      ]}
    ]},

    {titulo: 'Consorcios y mancomunidades', a: 'LRJSP 118-127; LBRL 44', bloques: [
      {tipo: 'lista', items: [
        {t: 'Consorcio: entidad de <b>derecho público</b> con personalidad propia, creada por varias Administraciones o entes del sector público, entre sí o con <b>entidades privadas</b>, para actividades de interés común.', a: '118.1'},
        {t: 'Pueden hacer actividades de <b>fomento</b>, prestacionales o de <b>gestión común de servicios públicos</b>. En su nombre: «consorcio» o «C».', a: '118.2 y 4'},
        {t: 'Se crean por <b>convenio</b> entre los participantes. Con entidades privadas, <b>sin ánimo de lucro</b>.', a: '123.1 y 120.3'},
        {t: 'Se adscriben cada ejercicio a una Administración según criterios por orden de prioridad (mayoría de votos en los órganos de gobierno, el primero).', a: '120.2'},
        {t: 'Personal funcionario o laboral <b>procedente de las Administraciones participantes</b>; régimen de la Administración de adscripción.', a: '121'},
        {t: 'Separación libre si no hay término de duración; si lo hay, por incumplimiento de otro miembro. Se ejerce por escrito al <b>máximo órgano de gobierno</b>.', a: '125'},
        {t: 'La separación <b>disuelve</b> el consorcio, salvo que los demás acuerden seguir y queden al menos dos Administraciones (o entes de más de una).', a: '126.1'},
        {t: 'Cumplidos sus fines, se disuelve; el máximo órgano de gobierno nombra un <b>liquidador</b> de la Administración de adscripción.', a: '127.1-2'},
        {t: '<b>Mancomunidades</b>: asociación de municipios para obras y servicios de su competencia; personalidad propia; estatutos aprobados por los Plenos de todos los ayuntamientos.', a: 'LBRL 44'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'La concesión es una forma de gestión directa', ok: 'Es gestión indirecta. Las directas son: propia entidad, OAL, EPEL y sociedad mercantil local.', a: 'LBRL 85.2'},
    {x: 'Se puede optar libremente por una EPEL o una sociedad mercantil', ok: 'Solo con memoria justificativa de que son más sostenibles y eficientes que la gestión propia o el OAL.', a: 'LBRL 85.2.A'},
    {x: 'La sociedad mercantil local de gestión directa puede tener capital privado', ok: 'Su capital social debe ser de titularidad pública.', a: 'LBRL 85.2.A.d'},
    {x: 'La regla general es que toda actividad necesita licencia', ok: 'La regla general es lo contrario: sin licencia ni control preventivo.', a: 'LBRL 84 bis.1'},
    {x: 'La licencia de otra Administración exime de la municipal', ok: 'No exime de las licencias de la entidad local.', a: 'LBRL 84.3'},
    {x: 'El Alcalde crea los organismos autónomos locales', ok: 'Los crea el Pleno, que aprueba sus estatutos.', a: 'LBRL 85 bis.1.a'},
    {x: 'Para gestionar en monopolio un servicio reservado basta el acuerdo del Pleno', ok: 'Hace falta además la aprobación de la Comunidad Autónoma.', a: 'LBRL 86.2'},
    {x: 'Los consorcios se regulan en el art. 87 LBRL', ok: 'Está derogado desde 2016: Ley 40/2015, arts. 118 a 127.', a: 'LBRL 87; LRJSP 118'},
    {x: 'El procedimiento ordinario de subvenciones es la concesión directa', ok: 'Es la concurrencia competitiva; la directa es excepcional y tasada.', a: 'LGS 22'},
    {x: 'Revocar una licencia por nuevos criterios no se indemniza', ok: 'Comporta resarcir los daños y perjuicios.', a: 'RSCL 16.3'}
  ],

  examenes: [
    'LBRL art. 85.2 (la concesión no es gestión directa): examen oficial 1-jun-2025, pregunta 2.',
    'LBRL art. 85.2.A (memoria justificativa para EPEL o sociedad mercantil): examen oficial 31-may-2026, pregunta 28.'
  ]
});
