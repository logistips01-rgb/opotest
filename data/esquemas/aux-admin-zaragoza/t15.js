/* Esquema · Auxiliar Administrativo · Tema 15
   Fuentes: Reglamento de Órganos Territoriales y de Participación Ciudadana de Zaragoza (ROTPC),
   texto consolidado de la ficha oficial (tools/temarios/rotpc-zaragoza-texto-vigente.txt), y
   Manual de Atención a la Ciudadanía del Ayuntamiento de Zaragoza, marzo de 2018
   (tools/temarios/manual-atencion-ciudadania-zaragoza-2018.pdf). Solo esos dos documentos.
   El Manual no tiene artículos: se cita apartado y página del PDF.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 15, {
  titulo: 'Participación ciudadana (ROTPC) y atención a la ciudadanía',
  epigrafe: 'El Reglamento de Órganos territoriales y Participación ciudadana de Zaragoza. El Manual de Atención a la ciudadanía del Ayuntamiento de Zaragoza.',
  etiquetas: ['ROTPC · arts. 1-117 y DA', 'Manual de Atención a la Ciudadanía (2018)'],
  fuentes: [
    'Reglamento de Órganos Territoriales y de Participación Ciudadana del Ayuntamiento de Zaragoza (ROTPC). Texto consolidado de la ficha oficial zaragoza.es/sede/servicio/normativa/109: aprobación definitiva publicada en el BOPZ nº 288, de 17-12-2005; modificación que crea el Distrito Sur, BOPZ nº 44, de 23-2-2018.',
    'Manual de Atención a la Ciudadanía del Ayuntamiento de Zaragoza, revisión de marzo de 2018 (45 páginas). Se cita por apartado y página del PDF.'
  ],

  esencial: [
    {t: 'El ROTPC canaliza la participación por una organización territorial (<b>Juntas Municipales, Juntas Vecinales y Concejos Locales</b>) y sectorial (<b>Consejo de la Ciudad</b>).', a: 'art. 1'},
    {t: '<b>16 distritos</b>; uno es el Distrito Rural, con los <b>14 barrios rurales</b>. Los Distritos se rigen por <b>Juntas Municipales</b> y los Barrios Rurales por <b>Juntas Vecinales</b>.', a: 'art. 2', examen: '2025'},
    {t: 'Iniciativa para proponer reglamentos y ordenanzas: ciudadanos mayores de edad empadronados que representen el <b>10 % del padrón</b>.', a: 'art. 51', examen: '2025'},
    {t: 'Las entidades se inscriben en el <b>Censo Municipal de Entidades Ciudadanas</b> y pueden ser declaradas de <b>Interés ciudadano</b> o de <b>Interés público municipal</b>.', a: 'arts. 8 y 59-74'},
    {t: 'Manual: el <b>trato</b> del personal en contacto directo es el factor clave en el «momento de la verdad». Hay que aspirar al nivel de <b>reconocimiento</b>.', a: 'Manual, págs. 8 y 26'}
  ],

  mapa: [
    {titulo: 'ROTPC · Títulos I a III', rango: 'arts. 1-43', items: [
      ['1', 'Objeto'], ['2', 'Distritos y barrios rurales'], ['3', 'Juntas Municipales y Vecinales'],
      ['7', 'Derechos de participación'], ['14-28', 'Juntas Municipales: órganos y sesiones'],
      ['29-35', 'Distrito Rural y Juntas Vecinales'], ['36', 'Concejos Locales'],
      ['37-43', 'Consejos de Distrito y oficinas']
    ]},
    {titulo: 'ROTPC · Título IV · Información y participación', rango: 'arts. 44-82', items: [
      ['44-50', 'Información municipal'], ['51', 'Iniciativa Ciudadana'], ['52', 'Audiencia Pública'],
      ['53', 'Consulta Popular'], ['54', 'Encuesta y Observatorio Urbano'], ['56', 'Ruegos y preguntas del público'],
      ['59-66', 'Censo de Entidades Ciudadanas'], ['67-74', 'Interés público municipal e Interés ciudadano'],
      ['75-81', 'Participación de las entidades']
    ]},
    {titulo: 'ROTPC · Títulos V a VII y disposiciones', rango: 'arts. 83-117', items: [
      ['83-101', 'Consejo de la Ciudad'], ['102-115', 'Comisión Especial de Sugerencias y Reclamaciones'],
      ['116-117', 'Consejos Sectoriales'], ['DA 3.ª', 'Interés público municipal de dos federaciones vecinales'],
      ['DA 5.ª', 'Límites de los distritos Casablanca y Sur']
    ]},
    {titulo: 'Manual de Atención a la Ciudadanía', rango: '45 págs.', items: [
      ['p. 5', 'El Ayuntamiento y la ciudadanía'], ['p. 8', 'La calidad en los servicios'],
      ['p. 14', 'La comunicación en la atención al público'], ['p. 33', 'Situaciones difíciles'],
      ['p. 40', 'Principios básicos']
    ]}
  ],

  cifras: [
    {v: '16', d: 'Distritos del término municipal (uno de ellos, el Distrito Rural)', a: 'art. 2'},
    {v: '14', d: 'Barrios rurales que comprende el Distrito Rural', a: 'art. 2'},
    {v: '10 vocales', d: 'En el Pleno de cada Junta Municipal, nombrados por el Alcalde a propuesta de los grupos', a: 'art. 17.b'},
    {v: '4 o 6', d: 'Vocales de una Junta Vecinal: 4 si tiene menos de 2.000 habitantes; 6 las demás', a: 'art. 33'},
    {v: '10 %', d: 'Del padrón: iniciativa de reglamentos y ordenanzas, y Audiencia Pública de ciudad', a: 'arts. 51 y 52'},
    {v: '10.000 + 5 %', d: 'Firmas para que el Alcalde lleve al Pleno una Consulta Popular: 10.000 más el 5 % de los habitantes que excedan de 100.000', a: 'art. 53'},
    {v: '3 %', d: 'Del padrón (mayores de 16 años) para pedir una encuesta ciudadana de ámbito de ciudad', a: 'art. 54'},
    {v: '5 años', d: 'Caducidad de la declaración de Interés público municipal', a: 'arts. 67 y 70'},
    {v: '4 al año', d: 'Sesiones ordinarias del Pleno del Consejo de la Ciudad', a: 'art. 94'},
    {v: '3 al año', d: 'Reuniones mínimas de la Comisión Especial de Sugerencias y Reclamaciones', a: 'art. 106.1'}
  ],

  secciones: [
    {titulo: 'Distritos y barrios rurales', a: 'arts. 1-4, 37-39 y DA 5.ª', bloques: [
      {tipo: 'lista', items: [
        {t: 'Los Distritos son divisiones territoriales con órganos de gestión desconcentrada: las <b>Juntas Municipales</b> y las <b>Juntas Vecinales</b>.', a: 'art. 2'},
        {t: '<b>16 distritos</b> {{examen:2025}}: Centro, Casco Histórico, Delicias, Universidad, San José, Las Fuentes, Almozara, Oliver-Valdefierro, Torrero, Actur-Rey Fernando, El Rabal, Casablanca, Santa Isabel, Miralbueno, Sur y el <b>Distrito Rural</b>.', a: 'art. 2'},
        {t: 'El Distrito Rural comprende los <b>14 barrios rurales</b>: Alfocea, Casetas, Garrapinillos, Juslibol, La Cartuja Baja, Montañana, Monzalbarba, Movera, Peñaflor, San Gregorio, San Juan de Mozarrifar, Torrecilla, Venta del Olivar y Villarrapa.', a: 'art. 2'},
        {t: 'Los Distritos se rigen por las <b>Juntas Municipales</b> y los Barrios Rurales por las <b>Juntas Vecinales</b> {{examen:2025}}.', a: 'art. 2'},
        {t: 'Núcleos separados y con identidad propia dentro de un Distrito o Barrio Rural pueden constituirse en <b>Concejos Locales</b>.', a: 'art. 2'},
        {t: 'Modificar la estructura de Distritos y Barrios Rurales o sus linderos: acuerdo del Pleno por <b>mayoría absoluta</b> y trámites de reglamentos y ordenanzas.', a: 'art. 2'},
        {t: 'El <b>Distrito Sur</b> se creó con la modificación publicada en el BOPZ nº 44, de 23-2-2018, que afecta al art. 2 y añade la DA 5.ª {{examen:2025}}.', a: 'ficha oficial y DA 5.ª'}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Juntas Municipales, Juntas Vecinales y Consejos de Distrito se rigen por los principios de <b>unidad de gobierno, eficacia, coordinación y solidaridad</b>.', a: 'arts. 3 y 4'},
        {t: 'Consejos de Distrito: los crea el Pleno, agrupando Juntas Municipales <b>completas y limítrofes</b>; pueden incluir barrios urbanos y rurales.', a: 'arts. 38-39'}
      ]}
    ]},

    {titulo: 'Juntas Municipales', a: 'arts. 14-28', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Órganos · arts. 14-17', reglas: [
          'Necesarios: el <b>Presidente</b> y el <b>Pleno</b>. Potestativos: el Consejo Rector y los grupos de trabajo.',
          'El <b>Alcalde</b> es Presidente nato de todas las Juntas Municipales y puede delegar la Presidencia efectiva en un Concejal.',
          'Pleno de la Junta: el Presidente, <b>10 vocales</b> nombrados por el Alcalde a propuesta de los grupos y los Presidentes de Concejos Locales. Con voz y sin voto: un representante de cada Asociación de Vecinos del territorio inscrita en el Censo y un representante por cada uno de estos grupos: padres de alumnos, juveniles, mayores, empresarios y comerciantes, y resto de entidades.',
          'El cargo de vocal es <b>honorífico</b> y dura lo que el mandato de la Corporación.'
        ]},
        {titulo: 'Funcionamiento · arts. 18-28', reglas: [
          'Sesión ordinaria, con carácter general, una vez al mes; como mínimo, <b>una al trimestre</b>.',
          'Quórum: <b>un tercio</b> del número legal con voto, nunca menos de tres. Si no lo hay, la sesión queda convocada <b>15 minutos</b> después.',
          'Sesiones públicas. Acuerdos por mayoría simple de los presentes con voto.',
          'Extraordinarias a petición de la cuarta parte; ningún vocal puede pedir más de <b>3 al año</b>.',
          'Si el Presidente suspende un acuerdo, da cuenta al Alcalde en <b>24 horas</b>; el Alcalde debe ratificar la suspensión en <b>72 horas</b>.',
          'Reprobación del Presidente o de los vocales: la pide un tercio y requiere <b>mayoría absoluta</b>.'
        ]}
      ]}
    ]},

    {titulo: 'Barrios rurales y Concejos Locales', a: 'arts. 29-36', bloques: [
      {tipo: 'lista', items: [
        {t: 'El Alcalde puede delegar en un concejal la presidencia efectiva del <b>Distrito Rural</b>. Ese Concejal Presidente debe conformar los acuerdos de las Juntas Vecinales antes de su ejecución.', a: 'art. 29'},
        {t: 'Órganos necesarios de cada Barrio Rural: el Presidente, con el nombre tradicional de <b>Alcalde del Barrio</b>, y el Pleno.', a: 'art. 31', examen: '2026'},
        {t: 'El <b>Alcalde de Barrio</b> es representante personal del Alcalde: vecino mayor de edad que obtiene más votos en un proceso de consulta a los vecinos. Cargo <b>retribuido</b>; dura el mandato de la Corporación.', a: 'art. 32'},
        {t: 'Vocales de la Junta Vecinal: <b>4</b> si tiene menos de 2.000 habitantes; <b>6</b> las demás.', a: 'art. 33'},
        {t: 'Consejo Territorial de Alcaldes de Barrio: coordinación, información y propuesta. Lo preside el Concejal Presidente del Distrito Rural; sesión ordinaria como mínimo una vez al trimestre.', a: 'art. 30'}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Concejos Locales: iniciativa del Ayuntamiento o de la <b>mayoría de los vecinos mayores de 16 años</b> del territorio; los acuerda el <b>Pleno</b> del Ayuntamiento. Un Presidente y <b>4 vocales</b>.', a: 'art. 36'},
        {t: 'Sus acuerdos y los de su Presidente se recurren ante el Alcalde de la Ciudad.', a: 'art. 36.2'}
      ]}
    ]},

    {titulo: 'Información y participación individual', a: 'arts. 7 y 44-56', bloques: [
      {tipo: 'lista', items: [
        {t: 'Todos los vecinos tienen derecho a la Iniciativa Ciudadana, la Audiencia Pública, la Consulta Popular, la Encuesta Ciudadana y a acudir a la Comisión Especial de Sugerencias y Reclamaciones.', a: 'art. 7'},
        {t: 'Oficina de Información en las áreas centrales y en las Juntas: copias, certificaciones y consulta de archivos. Las peticiones deben ser <b>razonadas</b>, salvo las certificaciones de acuerdos o resoluciones.', a: 'art. 44'},
        {t: 'Boletín municipal de edición <b>trimestral</b>.', a: 'art. 46'}
      ]},
      {tipo: 'tabla', cab: ['Instrumento', 'Qué es', 'Quién la pide y requisitos'], filas: [
        ['Iniciativa Ciudadana (51)', 'Los ciudadanos piden una actividad de interés municipal aportando medios, bienes, derechos o trabajo. Decide la JGL o el Pleno.', 'Para proponer reglamentos y ordenanzas: mayores de edad empadronados que sean el <b>10 % del padrón</b> {{examen:2025}}.'],
        ['Audiencia Pública (52)', 'Oral y en unidad de acto, para proponer acuerdos o recibir información. Ámbito de ciudad o de Junta.', 'De ciudad: Juntas, Consejo de la Ciudad, Comisión de Sugerencias, entidades o el <b>10 % del padrón</b>. De Junta: los mismos salvo las Juntas, con el 10 % del padrón de la Junta (nunca más de 300 firmas en las Vecinales ni de 3.000 en las Municipales). Se convoca en un mes como máximo, con 15 días de antelación.'],
        ['Consulta Popular (53)', 'Asuntos de competencia propia de especial importancia, <b>salvo los de Haciendas Locales</b>.', 'La somete el Alcalde, previo acuerdo del Pleno por <b>mayoría absoluta</b>. La autoriza el <b>Gobierno del Estado</b>. Se celebra entre 30 y 60 días después de publicar la convocatoria en el BOA.'],
        ['Encuesta ciudadana (54)', 'Opinión de vecinos y entidades. La recoge el Observatorio Urbano.', 'Mayores de 16 años empadronados: <b>3 %</b> del padrón para la ciudad; 10 % en un Distrito; 25 % en un Barrio Rural.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Tras el Pleno ordinario, el Alcalde puede abrir un turno de ruegos y preguntas del público. Se pide por escrito con <b>24 horas</b> de antelación; las preguntas se contestan por escrito en <b>30 días</b> como máximo.', a: 'art. 56'}
      ]}
    ]},

    {titulo: 'Entidades ciudadanas', a: 'arts. 58-81 y DA 3.ª', bloques: [
      {tipo: 'lista', items: [
        {t: 'Censo Municipal de Entidades Ciudadanas: asociaciones sin ánimo de lucro, democráticas, con sede o delegación estable en el municipio. La inscripción se acuerda en <b>30 días</b>.', a: 'arts. 60-62'},
        {t: 'Las modificaciones de datos se comunican dentro del <b>mes siguiente</b>.', a: 'art. 63'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Interés ciudadano · arts. 71-74', reglas: [
          'Para entidades inscritas en el Censo hace <b>más de 2 años</b>.',
          '<b>Preferencia</b> en subvenciones y en el uso de locales públicos y espacios de Centros Cívicos {{examen:2026}}.',
          'Resuelve el Pleno, de forma discrecional.',
          'Actualización anual antes del 1 de marzo; si falta, la declaración <b>podrá</b> perderse.'
        ]},
        {titulo: 'Interés público municipal · arts. 67-70', reglas: [
          'Inscritas en el Censo con Utilidad Pública supramunicipal o con Interés ciudadano durante <b>2 años consecutivos</b>.',
          'Resuelve el Pleno, de forma discrecional, por <b>mayoría absoluta</b>.',
          'Caduca a los <b>5 años</b>; la prórroga exige resolución expresa del Pleno.',
          'Actualización anual antes del 1 de marzo; si falta, pérdida <b>automática</b>.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Centros Cívicos: pueden acceder <b>todas las entidades inscritas</b> en el Censo, respetando la preferencia por Interés público municipal o ciudadano {{examen:2026}}. Locales cedidos: <b>máximo 5 años</b>, prorrogables otros 5 en casos excepcionales.', a: 'art. 78'},
        {t: 'Se reconoce a la <b>Unión Vecinal Cesaraugusta</b> y a la <b>Federación de Asociaciones de Barrios de Zaragoza</b> la declaración de Interés público municipal {{examen:2026}}.', a: 'DA 3.ª'},
        {t: 'Para que una entidad promueva una iniciativa de disposiciones generales, sus asociados mayores de edad deben superar el <b>10 % del padrón</b>.', a: 'art. 75'}
      ]}
    ]},

    {titulo: 'Consejo de la Ciudad y Comisión de Sugerencias', a: 'arts. 83-117', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Consejo de la Ciudad · arts. 83-101', reglas: [
          'Es el <b>Consejo Social de la Ciudad</b>: órgano municipal necesario, de carácter consultivo.',
          'Sus acuerdos son informe o petición y <b>no son vinculantes</b>.',
          'Presidente: el <b>Alcalde</b>. Vicepresidente: el Teniente de Alcalde de Participación Ciudadana.',
          'Pleno: 9 representantes de la Corporación, 9 de la sociedad civil y 9 de entidades sociales, económicas y profesionales, más la Universidad y la Agenda Local 21.',
          'Sesión ordinaria <b>4 veces al año</b>. Quórum: un tercio en primera convocatoria; en segunda, 30 minutos después, cualquier número.'
        ]},
        {titulo: 'Comisión Especial de Sugerencias y Reclamaciones · arts. 102-115', reglas: [
          'Concejales de todos los grupos en proporción; como máximo, tantos como la JGL. La preside el Alcalde o en quien delegue.',
          'No recibe instrucciones. Las quejas <b>no son recurso</b> ni interrumpen plazos; sus contestaciones <b>no son recurribles</b>. No admite quejas <b>anónimas</b>.',
          'Se reúne al menos <b>3 veces al año</b>. Sesiones <b>no públicas</b>.',
          'Plazos: 10 días para recabar información; 15 días para que los servicios respondan; 15 días para mostrar disconformidad.',
          'Si la queja la tramita el Justicia de Aragón, se abstiene. Informe anual al Pleno en sesión extraordinaria.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Consejos Sectoriales: consultivos, creados con carácter <b>excepcional</b> por el Pleno; dependen del Consejo de la Ciudad y sus acuerdos no son vinculantes.', a: 'art. 116'}
      ]}
    ]},

    {titulo: 'Manual: la calidad en la atención', a: 'Manual, págs. 8-13', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Factores de calidad · pág. 8', items: [
          'Aspectos tangibles', 'Capacidad de respuesta', 'La seguridad y fiabilidad', 'Empatía'
        ], reglas: ['El factor clave en el <b>momento de la verdad</b> es el trato del personal en contacto directo.']},
        {titulo: 'Los «siete errores» · pág. 12', items: [
          'Apatía', '«Quitárselos» de encima', 'Frialdad', 'Condescendencia', 'Robotización',
          'Excesiva reglamentación', 'Transferencias'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Causas de la baja calidad: la <b>falta de interés</b> y la <b>escasez de habilidades sociales</b>. En los estudios citados pesan la «actitud del personal» (44 %) y «trabaja demasiado lento» (40 %).', a: 'Manual, págs. 10-11'},
        {t: 'La <b>queja</b> es una oportunidad para descubrir nuestros déficits y demostrar nuestras competencias.', a: 'Manual, pág. 11'},
        {t: 'Cinco características de la calidad: responsabilidad de todos; hacer las cosas bien la primera vez; autocontrol emocional; pasar de una actitud pasiva a una activa (prevención); mejora continua. Su peor enemiga es la <b>rutina</b>.', a: 'Manual, pág. 13'}
      ]}
    ]},

    {titulo: 'Manual: comunicación, situaciones difíciles y principios', a: 'Manual, págs. 20-45', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Comunicar · págs. 20-31', reglas: [
          'Nos comunicamos con palabras (<b>mensajes verbales</b>) y con comportamientos (<b>no verbales</b>).',
          'La habilidad de escuchar es <b>previa</b> a la de hablar. Escuchar es activo: no basta poner oreja (oír); hay que poner cabeza (observación) y corazón (<b>empatía</b>).',
          'Al hablar: <b>brevedad, claridad y precisión</b>, sin jerga administrativa.',
          'Saludo: tomar la iniciativa, con contacto ocular. Trato de <b>usted</b>, salvo que nos indiquen lo contrario.',
          'Tres niveles de atención: <b>acogida</b>, <b>recogida</b> y <b>reconocimiento</b>. Hay que situarse en el tercero o, al menos, en la recogida.',
          'Escucha activa: evitar interrumpir, emitir juicios de valor, ofrecer soluciones prematuras y comentar su estado emocional.'
        ]},
        {titulo: 'Situaciones difíciles · págs. 33-39', reglas: [
          'Curva de la hostilidad (Allaire y McNeill): 1 racional, 2 disparo o salida, 3 enlentecimiento, 4 afrontamiento, 5 enfriamiento, 6 solución del problema.',
          'En el <b>disparo</b>, intentar que entre en razón suele fracasar: lo oportuno es <b>escuchar</b>.',
          'La <b>fase 4</b> es la que puede enfriar o calentar más a la persona: reconocer su estado emocional y la parte de razón que tenga.',
          'Qué no hacer: defender al Ayuntamiento antes de investigar, elevar la voz, seguir la confrontación en un área pública o decirle lo que «debería» hacer.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'El Manual cierra con <b>14 principios básicos</b> numerados. Entre ellos: el soporte físico y la persona de contacto <b>son el servicio</b> (1); cada persona atendida es <b>única</b> (3); dirigir la atención a la solución del problema (5); empezar por mejoras pequeñas (6).', a: 'Manual, págs. 40-42'},
        {t: 'Principio 9: hay que dar <b>información veraz y concreta</b>. Lo que más irrita es que lo que digamos no se cumpla o sea inexacto; es preferible reconocer nuestra ignorancia que dar información ambigua.', a: 'Manual, pág. 43', examen: '2026'},
        {t: 'Principios 12 y 13: dominar las propias reacciones emocionales y controlar los propios pensamientos; evitar etiquetas y profecías autocumplidas.', a: 'Manual, pág. 45'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'Zaragoza tiene 14 distritos y el Distrito Rural agrupa 16 barrios', ok: '16 distritos; el Distrito Rural comprende los 14 barrios rurales.', a: 'art. 2'},
    {x: 'Los Barrios Rurales se rigen por Juntas Municipales', ok: 'Por Juntas Vecinales. Los Distritos, por Juntas Municipales.', a: 'art. 2'},
    {x: 'La iniciativa para proponer reglamentos y ordenanzas exige el 5 % del padrón', ok: 'Exige el 10 % del padrón municipal.', a: 'art. 51'},
    {x: 'Puede someterse a Consulta Popular un asunto de Haciendas Locales', ok: 'Los asuntos de Haciendas Locales quedan excluidos.', a: 'art. 53'},
    {x: 'La Consulta Popular la autoriza el Pleno del Ayuntamiento', ok: 'El Pleno la acuerda por mayoría absoluta, pero la autoriza el Gobierno del Estado.', a: 'art. 53'},
    {x: 'Los acuerdos del Consejo de la Ciudad vinculan al gobierno municipal', ok: 'Tienen carácter de informe o petición y no son vinculantes.', a: 'art. 84'},
    {x: 'Una queja ante la Comisión de Sugerencias interrumpe el plazo para recurrir', ok: 'No es recurso y no paraliza ni interrumpe los plazos.', a: 'art. 103'},
    {x: 'Sin actualizar documentos antes del 1 de marzo, se pierde automáticamente el Interés ciudadano', ok: 'La pérdida automática es la del Interés público municipal; la del Interés ciudadano «podrá» producirse.', a: 'arts. 70 y 74'},
    {x: 'Basta con atender en el nivel de acogida', ok: 'Hay que situarse en el reconocimiento o, al menos, en la recogida, y evitar la simple acogida.', a: 'Manual, pág. 26'},
    {x: 'En la fase de disparo conviene razonar con la persona', ok: 'Cualquier intento de hacerle entrar en razón suele fracasar: lo oportuno es escuchar.', a: 'Manual, pág. 34'}
  ],

  examenes: [
    'Modificación del ROTPC publicada en 2018 (creación del Distrito Sur): examen oficial 1-jun-2025, pregunta 16.',
    'Art. 2 ROTPC (16 distritos; el Rural, con 14 barrios): examen oficial 1-jun-2025, pregunta 30.',
    'Art. 2 ROTPC (Juntas Municipales y Juntas Vecinales): examen oficial 1-jun-2025, pregunta 31.',
    'Art. 51 ROTPC (10 % del padrón para proponer reglamentos y ordenanzas): examen oficial 1-jun-2025, pregunta 32.',
    'Arts. 72 y 78 ROTPC (Censo e Interés ciudadano para usar Centros Cívicos): examen oficial 31-may-2026, pregunta 10.',
    'DA 3.ª ROTPC (la Unión Vecinal Cesaraugusta y la Federación de Asociaciones de Barrios tienen la declaración de Interés público municipal): examen oficial 31-may-2026, pregunta 13.',
    'Manual, principio 9 (información veraz y concreta): examen oficial 31-may-2026, pregunta 15. El enunciado dice que el Manual «concluye con quince principios básicos», pero el Manual numera 14 (págs. 40-45). La respuesta oficial, que da por buenas las dos afirmaciones, sí coincide con el texto del principio 9.',
    'Art. 31 ROTPC (el Presidente de cada Barrio Rural recibe el nombre tradicional de Alcalde del Barrio): examen oficial 31-may-2026, pregunta 29.'
  ]
});
