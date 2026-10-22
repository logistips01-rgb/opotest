/* Esquema · Auxiliar Administrativo · Tema 11
   Fuentes: LBRL (BOE-A-1985-5392) arts. 84-87, 44 y 47.2.k; Ley 40/2015 (BOE-A-2015-10566)
   arts. 118-127; Reglamento de Servicios de las Corporaciones locales de 1955
   (BOE-A-1955-10057) Títulos I y II; Ley 38/2003 General de Subvenciones (BOE-A-2003-20977);
   LCSP (BOE-A-2017-12902) art. 284.1 y DA 34.ª; Ley 7/1999 de Administración Local de Aragón
   (BOE-A-1999-10151); Decreto 347/2002 del Gobierno de Aragón (BOA núm. 139, 25/11/2002);
   TR de la Ley de Subvenciones de Aragón (BOE-A-2023-12919).
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 11, {
  titulo: 'Actividad de las entidades locales: policía, fomento y servicio público',
  epigrafe: 'La actividad de las entidades Locales. Policía. El fomento. El servicio público local y sus formas de gestión.',
  etiquetas: ['LBRL · arts. 84 a 87', 'Ley 40/2015 · arts. 118 a 127', 'LGS · Aragón: Ley 7/1999 y Decreto 347/2002'],
  fuentes: [
    'Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LBRL). Texto consolidado BOE-A-1985-5392, arts. 84 a 87 (con los arts. 44 y 47.2.k).',
    'Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público (LRJSP). Texto consolidado BOE-A-2015-10566, arts. 118 a 127 (consorcios).',
    'Decreto de 17 de junio de 1955 por el que se aprueba el Reglamento de Servicios de las Corporaciones locales (RSCL). Texto consolidado BOE-A-1955-10057, art. 6. En Aragón, supletorio: el preámbulo del Decreto 347/2002 anuncia su «desplazamiento».',
    'Ley 7/1999, de 9 de abril, de Administración Local de Aragón. Texto consolidado BOE-A-1999-10151 (BOA núm. 45, de 17/04/1999), arts. 193, 196, 205, 206 y 224.',
    'Decreto 347/2002, de 19 de noviembre, del Gobierno de Aragón, Reglamento de Bienes, Actividades, Servicios y Obras de las Entidades Locales de Aragón (RBASO). BOA núm. 139, de 25/11/2002; corrección de errores en BOA núm. 9, de 24/01/2003. Arts. 123, 140, 151, 153, 176, 179, 180 y 183.',
    'Decreto Legislativo 2/2023, de 3 de mayo, del Gobierno de Aragón, texto refundido de la Ley de Subvenciones de Aragón (TRLSA). Texto consolidado BOE-A-2023-12919, arts. 2.3 y 11.2.',
    'Ley 38/2003, de 17 de noviembre, General de Subvenciones (LGS). Texto consolidado BOE-A-2003-20977, arts. 2, 3, 8, 17 y 22.',
    'Ley 9/2017, de Contratos del Sector Público (LCSP). Texto consolidado BOE-A-2017-12902, art. 284.1 y disposición adicional trigésima cuarta.'
  ],

  esencial: [
    {t: '<b>Policía</b>: las entidades locales intervienen la actividad de los ciudadanos con ordenanzas y bandos, licencias, comunicación previa o declaración responsable, control posterior y órdenes individuales.', a: 'LBRL 84.1'},
    {t: 'Regla general: <b>sin licencia</b>. Solo cabe por <b>orden público, seguridad pública, salud pública o medio ambiente</b> (si no basta una declaración responsable) o si el número de operadores es <b>limitado</b>.', a: 'LBRL 84 bis.1'},
    {t: '<b>Fomento</b>: la subvención es una entrega de dinero <b>sin contraprestación directa</b>, ligada a un objetivo de utilidad pública o interés social. Procedimiento ordinario: <b>concurrencia competitiva</b>.', a: 'LGS 2.1 y 22.1'},
    {t: '<b>Gestión directa</b>: la propia entidad, organismo autónomo local, entidad pública empresarial local o sociedad mercantil local de capital público. <b>Indirecta</b>: concesión de servicios.', a: 'LBRL 85.2', examen: '2025'},
    {t: 'Servicios <b>reservados</b> a las entidades locales: agua (abastecimiento domiciliario y depuración), residuos y transporte público de viajeros.', a: 'LBRL 86.2'},
    {t: 'La Ley aragonesa clasifica la <b>sociedad mercantil</b> como gestión <b>directa o indirecta</b> según la participación local en su capital. La LBRL solo admite como directa la de capital de titularidad pública.', a: 'Ley 7/1999 206.2.c y 3.e; LBRL 85.2.A.d', examen: '2026'}
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
    {titulo: 'Ley 7/1999 de Aragón · Título VII', rango: 'arts. 193-228', items: [
      ['193-198', 'Intervención en la actividad privada (policía)'], ['199-217', 'Servicios públicos locales y formas de gestión'],
      ['218-219', 'Consorcios'], ['224-228', 'Acción de fomento']
    ]},
    {titulo: 'Decreto 347/2002 (RBASO) · Títulos II a VI', rango: 'arts. 122-…', items: [
      ['122-175', 'Intervención en la actividad privada'], ['176-197', 'Fomento: subvenciones y acción concertada'],
      ['198-204', 'Actividad económica'], ['205-230', 'Servicios públicos'], ['231 y ss.', 'Formas de gestión']
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
    {titulo: 'Policía: medios de intervención', a: 'LBRL 84, 84 bis y 84 ter; Ley 7/1999 193; RBASO 123', bloques: [
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
          'Contenido congruente con los motivos y fines; entre varios medios, <b>el menos restrictivo</b> de la libertad individual (RBASO 123; RSCL 6).'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Ley aragonesa, «De la función de policía»: los mismos medios, pero la letra a) dice «Ordenanzas y <b>Decretos normativos de emergencia</b>». Principios: igualdad de trato, congruencia, respeto a la libertad individual y proporcionalidad.', a: 'Ley 7/1999 193'},
        {t: 'Licencia excepcional para actividades económicas: <b>orden público, seguridad pública, salud pública o protección del medio ambiente</b> en el lugar concreto, si no bastan la declaración responsable o la comunicación.', a: 'LBRL 84 bis.1.a'},
        {t: 'También cuando el número de operadores es limitado: <b>escasez de recursos naturales</b>, uso del <b>dominio público</b>, impedimentos técnicos o servicios públicos con <b>tarifas reguladas</b>.', a: 'LBRL 84 bis.1.b'},
        {t: 'Instalaciones o infraestructuras físicas: autorización solo si la establece una <b>ley</b> y pueden dañar el medio ambiente y el entorno urbano, la seguridad o la salud públicas y el patrimonio histórico, y resulta proporcionado.', a: 'LBRL 84 bis.2'},
        {t: 'Sin autorización previa: la entidad debe planificar los procedimientos de <b>comunicación</b> y de <b>verificación posterior</b>.', a: 'LBRL 84 ter'}
      ]}
    ]},

    {titulo: 'Las licencias', a: 'LBRL 84.3 y 84 bis.3; RBASO 140, 151 y 153; Ley 7/1999 196', bloques: [
      {tipo: 'lista', items: [
        {t: 'Las licencias de <b>otras Administraciones no eximen</b> de obtener las licencias locales.', a: 'LBRL 84.3'},
        {t: 'Si concurren licencias de la entidad local y de otra Administración, la local debe <b>motivar</b> el interés general concreto que protege y que no cubre ya otra autorización.', a: 'LBRL 84 bis.3'},
        {t: 'Se otorgan <b>salvo el derecho de propiedad y sin perjuicio de tercero</b>. No sirven para excluir o disminuir la responsabilidad civil o penal.', a: 'RBASO 140'},
        {t: 'Son <b>transmisibles</b>, salvo las concedidas por <b>cualidades personales</b> o si el número es <b>limitado</b>. Se comunica por escrito; si en un mes no se notifica que no procede, la transmisión es eficaz.', a: 'RBASO 151'}
      ]},
      {tipo: 'tabla', cab: ['Situación', 'Efecto', 'Indemnización'], filas: [
        ['El titular incumple las condiciones por causas que le son imputables', 'Quedan <b>resueltas y sin efecto</b>', 'No se prevé'],
        ['Cambian o desaparecen las circunstancias, o surgen otras que habrían justificado denegarla', '<b>Procede</b> la revocación', 'No se prevé'],
        ['La Corporación adopta nuevos criterios de apreciación recogidos en la normativa', '<b>Pueden</b> revocarse', '<b>Sí</b>, daños y perjuicios'],
        ['Supuestos de anulabilidad del procedimiento común', '<b>Anulables</b>', '<b>No</b> si hubo dolo, culpa o negligencia grave del interesado']
      ]}
    ]},

    {titulo: 'Fomento: las subvenciones', a: 'LGS 2, 3, 8, 17 y 22; Ley 7/1999 224; RBASO 176-183', bloques: [
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
          'Bases reguladoras: en las <b>bases de ejecución del presupuesto</b>, en una <b>ordenanza general</b> de subvenciones o en una <b>ordenanza específica</b> (LGS 17.2; en Aragón, TRLSA 11.2).'
        ]}
      ]},
      {tipo: 'tabla', cab: ['Procedimiento', 'Cuándo'], filas: [
        ['<b>Concurrencia competitiva</b> (ordinario)', 'Se comparan las solicitudes y se ordenan según los criterios de las bases y la convocatoria (LGS 22.1).'],
        ['<b>Concesión directa</b>', 'a) Previstas <b>nominativamente</b> en los presupuestos. b) Impuestas por una norma con <b>rango de ley</b>. c) Excepcionalmente, por razones de interés público, social, económico o humanitario que dificulten la convocatoria (LGS 22.2).']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Auxilios económicos a <b>entidades públicas o privadas y a los particulares</b> que realicen actividades de interés público que <b>complementen o suplan</b> las de la entidad local.', a: 'Ley 7/1999 224; RBASO 176.1', examen: '2025'},
        {t: 'Subvenciones <b>directas o propias</b>: atribución efectiva, en dinero o en especie. <b>Indirectas o impropias</b>: sin desplazamiento dinerario o patrimonial (incentivos fiscales, <b>exenciones</b> o bonificaciones, avales, anticipos reintegrables, créditos subvencionados).', a: 'RBASO 180', examen: '2026'},
        {t: 'Carácter <b>voluntario y eventual</b>; el beneficiario no puede exigir su aumento o revisión. Son <b>nulas</b> las que responden a <b>mera liberalidad</b>.', a: 'RBASO 183 y 179.1'}
      ]}
    ]},

    {titulo: 'Servicio público local y formas de gestión', a: 'LBRL 85; LCSP 284.1 y DA 34.ª', bloques: [
      {tipo: 'lista', items: [
        {t: 'Son servicios públicos locales los que prestan las entidades locales <b>en el ámbito de sus competencias</b>.', a: 'LBRL 85.1'},
        {t: 'Se gestionan de la forma <b>más sostenible y eficiente</b> de las enumeradas.', a: 'LBRL 85.2'},
        {t: 'Cualquiera que sea la forma, hay que respetar las funciones reservadas en exclusiva a <b>funcionarios públicos</b> (art. 9 EBEP).', a: 'LBRL 85.2, último párrafo'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Gestión directa · 85.2.A', items: [
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
          'La LCSP dispone que esas referencias se entienden hechas al contrato de <b>concesión de servicios</b> (DA 34.ª). La concesión es gestión <b>indirecta</b> {{examen:2025}}',
          'Nunca por concesión los servicios que impliquen <b>ejercicio de la autoridad</b> (LCSP 284.1).'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Ley aragonesa. Directa: propia entidad (órganos ordinarios u órgano especial), organismo autónomo y sociedad mercantil de capital <b>íntegra o mayoritariamente</b> local. Indirecta: concesión, gestión interesada, arrendamiento, concierto y sociedad mercantil o cooperativa con participación local <b>minoritaria</b>.', a: 'Ley 7/1999 206.2-3', examen: '2026'},
        {t: 'Los servicios que impliquen <b>ejercicio de autoridad</b> nunca por gestión indirecta.', a: 'Ley 7/1999 206.1'}
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
    {x: 'Según la LBRL, la sociedad mercantil local de gestión directa puede tener capital privado', ok: 'En la LBRL su capital debe ser de titularidad pública. (La Ley aragonesa, art. 206, aún admite capital mayoritariamente local: si la pregunta cita esa ley, responde con su texto).', a: 'LBRL 85.2.A.d; Ley 7/1999 206.2.c'},
    {x: 'La regla general es que toda actividad necesita licencia', ok: 'La regla general es lo contrario: sin licencia ni control preventivo.', a: 'LBRL 84 bis.1'},
    {x: 'Una exención fiscal no es una subvención', ok: 'Es una subvención indirecta o impropia.', a: 'RBASO 180.3'},
    {x: 'El Alcalde crea los organismos autónomos locales', ok: 'Los crea el Pleno, que aprueba sus estatutos.', a: 'LBRL 85 bis.1.a'},
    {x: 'Para gestionar en monopolio un servicio reservado basta el acuerdo del Pleno', ok: 'Hace falta además la aprobación de la Comunidad Autónoma.', a: 'LBRL 86.2'},
    {x: 'Los consorcios se regulan en el art. 87 LBRL', ok: 'Está derogado desde 2016: Ley 40/2015, arts. 118 a 127.', a: 'LBRL 87; LRJSP 118'},
    {x: 'El procedimiento ordinario de subvenciones es la concesión directa', ok: 'Es la concurrencia competitiva; la directa es excepcional y tasada.', a: 'LGS 22'},
    {x: 'Revocar una licencia por nuevos criterios no se indemniza', ok: 'Comporta resarcir los daños y perjuicios.', a: 'RBASO 153.3; RSCL 16.3'}
  ],

  examenes: [
    'LBRL art. 85.2 (la concesión no es gestión directa): examen oficial 1-jun-2025, pregunta 2.',
    'LBRL art. 85.2.A (memoria justificativa para EPEL o sociedad mercantil): examen oficial 31-may-2026, pregunta 28.',
    'Ley 7/1999 art. 224 (auxilios económicos a entidades y particulares): examen oficial 1-jun-2025, pregunta 45.',
    'RBASO art. 180 (la exención fiscal es subvención indirecta o impropia): examen oficial 31-may-2026, pregunta 21.',
    'Ley 7/1999 art. 206 (la sociedad mercantil es gestión directa o indirecta según la participación en el capital): examen oficial 31-may-2026, pregunta 49.'
  ]
});
