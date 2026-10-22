/* Esquema · Auxiliar Administrativo · Tema 1
   Fuentes: Constitución Española, texto consolidado BOE-A-1978-31229 (preámbulo, arts. 1-9,
   97-107 y 137-142, parte final); RD 2560/1978 (BOE-A-1978-27525) y RD 679/1977 (BOE-A-1977-9545)
   para la elaboración y aprobación. Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 1, {
  titulo: 'La Constitución Española: título preliminar, Gobierno y Administración, organización territorial',
  epigrafe: 'La Constitución española: elaboración y aprobación. Estructura y título preliminar. La Administración pública en la Constitución. Organización territorial del Estado en la Constitución: principios generales y Administración local.',
  etiquetas: ['CE · arts. 1-9, 97-107 y 137-142', 'Título preliminar, Título IV y Título VIII (caps. I y II)'],
  fuentes: [
    'Constitución Española de 27 de diciembre de 1978. Texto consolidado BOE-A-1978-31229 (última actualización publicada el 20/05/2026): preámbulo, arts. 1 a 9, 97 a 107 y 137 a 142, disposiciones y fórmula final.',
    'Real Decreto 2560/1978, de 3 de noviembre, por el que se somete a Referéndum de la Nación el proyecto de Constitución (BOE-A-1978-27525).',
    'Real Decreto 679/1977, de 15 de abril, por el que se convocan elecciones generales a las Cortes Españolas (BOE-A-1977-9545).'
  ],

  esencial: [
    {t: 'Aprobada por las Cortes el <b>31-oct-1978</b>, ratificada en referéndum el <b>6-dic-1978</b>, sancionada el <b>27-dic-1978</b> y en vigor desde su publicación en el BOE el <b>29-dic-1978</b>.', a: 'RD 2560/1978; fórmula final; disp. final'},
    {t: 'Estructura: preámbulo, <b>título preliminar y diez títulos</b>, <b>169 artículos</b>, 4 disposiciones adicionales, 9 transitorias, 1 derogatoria y 1 final.', a: 'CE'},
    {t: 'España es un <b>Estado social y democrático de Derecho</b>. La soberanía nacional reside en el <b>pueblo español</b>. Forma política: <b>Monarquía parlamentaria</b>.', a: 'art. 1'},
    {t: 'La Administración sirve con <b>objetividad</b> los intereses generales, con <b>sometimiento pleno a la ley y al Derecho</b>.', a: 'art. 103.1'},
    {t: 'El Estado se organiza en <b>municipios, provincias y Comunidades Autónomas</b>. Todas gozan de autonomía para gestionar sus intereses.', a: 'art. 137'}
  ],

  mapa: [
    {titulo: 'Estructura de la Constitución', rango: '169 artículos', items: [
      ['Pre.', 'Preámbulo'], ['TP', 'Título preliminar (1-9)'],
      ['I', 'De los derechos y deberes fundamentales (10-55)'], ['II', 'De la Corona (56-65)'],
      ['III', 'De las Cortes Generales (66-96)'], ['IV', 'Del Gobierno y de la Administración (97-107)'],
      ['V', 'De las relaciones entre el Gobierno y las Cortes Generales (108-116)'], ['VI', 'Del Poder Judicial (117-127)'],
      ['VII', 'Economía y Hacienda (128-136)'], ['VIII', 'De la Organización Territorial del Estado (137-158)'],
      ['IX', 'Del Tribunal Constitucional (159-165)'], ['X', 'De la reforma constitucional (166-169)'],
      ['DA-DF', '4 adicionales, 9 transitorias, 1 derogatoria, 1 final']
    ]},
    {titulo: 'Título preliminar', rango: 'arts. 1-9', items: [
      ['1', 'Estado social y democrático, soberanía, Monarquía parlamentaria'], ['2', 'Unidad, autonomía y solidaridad'],
      ['3', 'Lenguas'], ['4', 'Bandera'], ['5', 'Capital'], ['6', 'Partidos políticos'],
      ['7', 'Sindicatos y asociaciones empresariales'], ['8', 'Fuerzas Armadas'], ['9', 'Sujeción a la Constitución y principios']
    ]},
    {titulo: 'Título IV · Del Gobierno y de la Administración', rango: 'arts. 97-107', items: [
      ['97', 'Funciones del Gobierno'], ['98', 'Composición'], ['99', 'Investidura'], ['100', 'Nombramiento de los miembros'],
      ['101', 'Cese y Gobierno en funciones'], ['102', 'Responsabilidad criminal'], ['103', 'Principios de la Administración'],
      ['104', 'Fuerzas y Cuerpos de seguridad'], ['105', 'Audiencia, archivos y procedimiento'],
      ['106', 'Control judicial e indemnización'], ['107', 'Consejo de Estado']
    ]},
    {titulo: 'Título VIII · Caps. I y II', rango: 'arts. 137-142', items: [
      ['137', 'Municipios, provincias y CCAA'], ['138', 'Solidaridad'], ['139', 'Igualdad de derechos y libre circulación'],
      ['140', 'Municipio'], ['141', 'Provincia, agrupaciones e islas'], ['142', 'Haciendas locales']
    ]}
  ],

  cifras: [
    {v: '15-jun-1977', d: 'Elecciones al Congreso y al Senado: esas Cámaras aprobaron la Constitución {{examen:2026}}', a: 'RD 679/1977; disp. trans. 8.ª.1'},
    {v: '31-oct-1978', d: 'Aprobación del proyecto en sesiones plenarias del Congreso y del Senado', a: 'RD 2560/1978'},
    {v: '6-dic-1978', d: 'Referéndum de la Nación sobre el proyecto', a: 'RD 2560/1978, art. 2'},
    {v: '27-dic-1978', d: 'Sanción y promulgación por el Rey {{examen:2026}}', a: 'fórmula final'},
    {v: '29-dic-1978', d: 'Publicación en el BOE núm. 311 y entrada en vigor', a: 'disp. final'},
    {v: '169', d: 'Artículos de la Constitución', a: 'CE, último art.: 169'},
    {v: '48 horas', d: 'Segunda votación de investidura, por mayoría simple', a: 'art. 99.3'},
    {v: '2 meses', d: 'Desde la primera votación sin investidura: disolución de ambas Cámaras', a: 'art. 99.5'},
    {v: '1/4', d: 'Del Congreso, para acusar al Gobierno por traición o delito contra la seguridad del Estado', a: 'art. 102.2'},
    {v: '4', d: 'Reformas: arts. 13.2 (1992), 135 (2011), 49 (2024) y 69.3 (2026)', a: 'ficha BOE'}
  ],

  secciones: [
    {titulo: 'Elaboración y aprobación', a: 'RD 679/1977, RD 2560/1978, preámbulo y parte final', bloques: [
      {tipo: 'tabla', cab: ['Fecha', 'Hito'], filas: [
        ['15-jun-1977', 'Elecciones generales al Congreso y al Senado. Esas Cámaras son las que aprueban la Constitución {{examen:2026}}.'],
        ['31-oct-1978', 'El proyecto se aprueba en <b>sesiones plenarias del Congreso y del Senado</b>.'],
        ['6-dic-1978', '<b>Referéndum</b> de la Nación. Pregunta: «¿Aprueba el proyecto de Constitución?».'],
        ['27-dic-1978', '<b>Sanción y promulgación</b> por el Rey en el Palacio de las Cortes {{examen:2026}}.'],
        ['29-dic-1978', 'Publicación en el «BOE» núm. 311. <b>Entra en vigor ese mismo día</b>.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Fórmula del preámbulo: «las Cortes <b>aprueban</b> y el pueblo español <b>ratifica</b> la siguiente Constitución».', a: 'preámbulo'},
        {t: 'Se publica también en las <b>demás lenguas de España</b>.', a: 'disp. final'},
        {t: 'Deroga la <b>Ley 1/1977, para la Reforma Política</b>, la Ley Orgánica del Estado de 1967 y las demás leyes que enumera.', a: 'disp. derogatoria'},
        {t: '<b>4 reformas</b>: art. 13.2 (1992), art. 135 (2011), art. 49 (2024) y art. 69.3 (2026). Ninguna toca los artículos de este tema.', a: 'ficha BOE'}
      ]}
    ]},

    {titulo: 'Estructura', a: 'CE', bloques: [
      {tipo: 'lista', items: [
        'Preámbulo, <b>título preliminar y diez títulos</b> (I a X). En total, <b>169 artículos</b>.',
        'Solo tres títulos se dividen en capítulos: <b>I (5)</b>, <b>III (3)</b> y <b>VIII (3)</b>. El capítulo segundo del Título I tiene dos secciones.',
        'Parte final: <b>4 adicionales, 9 transitorias, 1 derogatoria y 1 final</b>.',
        'Rúbricas que se confunden: Título VII, «<b>Economía y Hacienda</b>» {{examen:2026}}; Título V, relaciones entre Gobierno y Cortes; Título VIII, organización territorial.'
      ]}
    ]},

    {titulo: 'Título preliminar', a: 'arts. 1-9', bloques: [
      {tipo: 'tabla', cab: ['Art.', 'Contenido'], filas: [
        ['1', '<b>Estado social y democrático de Derecho</b>. Valores superiores: <b>libertad, justicia, igualdad y pluralismo político</b>.<br>La soberanía nacional reside en el <b>pueblo español</b>, del que emanan los poderes del Estado.<br>Forma política: <b>Monarquía parlamentaria</b>.'],
        ['2', 'Indisoluble <b>unidad</b> de la Nación española. Reconoce y garantiza el derecho a la <b>autonomía</b> de nacionalidades y regiones y la <b>solidaridad</b> entre ellas.'],
        ['3', 'Castellano: lengua oficial del Estado. Todos tienen el <b>deber de conocerla</b> y el derecho a usarla. Las demás lenguas son oficiales en sus CCAA según sus Estatutos.'],
        ['4', 'Bandera: roja, amarilla y roja; la amarilla, de <b>doble anchura</b> que cada roja. Las banderas autonómicas se usan junto a la de España.'],
        ['5', 'Capital: la <b>villa de Madrid</b>.'],
        ['6', 'Partidos: expresan el pluralismo político y son <b>instrumento fundamental</b> para la participación política.'],
        ['7', 'Sindicatos y asociaciones empresariales: defienden los intereses económicos y sociales que les son propios.'],
        ['8', 'Fuerzas Armadas: <b>Ejército de Tierra, Armada y Ejército del Aire</b>. Misión: garantizar la soberanía e independencia de España y defender su integridad territorial y el ordenamiento constitucional. Bases de la organización militar: <b>ley orgánica</b>.'],
        ['9', 'Ciudadanos y poderes públicos, sujetos a la Constitución <b>y al resto del ordenamiento jurídico</b>. Los poderes públicos deben promover las condiciones para que la libertad y la igualdad sean reales y efectivas y <b>remover los obstáculos</b> que impidan o dificulten su plenitud.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Partidos, sindicatos y asociaciones empresariales: creación y actividad <b>libres</b> dentro de la Constitución y la ley; estructura y funcionamiento <b>democráticos</b>.', a: 'arts. 6-7'},
        {t: 'Principios garantizados: legalidad, jerarquía normativa, publicidad de las normas, irretroactividad de las disposiciones sancionadoras no favorables o restrictivas de derechos individuales, seguridad jurídica, responsabilidad e <b>interdicción de la arbitrariedad</b> de los poderes públicos.', a: 'art. 9.3'}
      ]}
    ]},

    {titulo: 'El Gobierno', a: 'arts. 97-102', bloques: [
      {tipo: 'lista', items: [
        {t: 'Dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado. Ejerce la <b>función ejecutiva y la potestad reglamentaria</b>.', a: 'art. 97'},
        {t: 'Lo forman el <b>Presidente, los Vicepresidentes (en su caso), los Ministros</b> y los demás miembros que establezca la ley.', a: 'art. 98.1'},
        {t: 'Sus miembros no pueden ejercer otras funciones representativas que las del mandato parlamentario, otra función pública ni actividad profesional o mercantil.', a: 'art. 98.3'},
        {t: 'Los demás miembros los nombra y separa el <b>Rey, a propuesta del Presidente</b>.', a: 'art. 100'},
        {t: 'Cesa tras elecciones generales, por pérdida de la confianza parlamentaria o por dimisión o fallecimiento del Presidente. Sigue <b>en funciones</b> hasta que toma posesión el nuevo.', a: 'art. 101'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Investidura · art. 99', reglas: [
          'El Rey consulta a los representantes de los grupos con representación parlamentaria y propone candidato <b>a través del Presidente del Congreso</b>.',
          '1.ª votación: <b>mayoría absoluta</b>. Si no la logra, otra <b>48 horas</b> después: basta <b>mayoría simple</b>.',
          'A los <b>2 meses</b> de la primera votación sin investidura, el Rey disuelve ambas Cámaras y convoca elecciones, con refrendo del Presidente del Congreso.'
        ]},
        {titulo: 'Responsabilidad criminal · art. 102', reglas: [
          'Se exige ante la <b>Sala de lo Penal del Tribunal Supremo</b>.',
          'Por traición o delito contra la seguridad del Estado: iniciativa de <b>la cuarta parte</b> del Congreso y aprobación por su <b>mayoría absoluta</b>.',
          'No se aplica la <b>prerrogativa real de gracia</b>.'
        ]}
      ]}
    ]},

    {titulo: 'La Administración en la Constitución', a: 'arts. 103-107', bloques: [
      {tipo: 'lista', items: [
        {t: 'Principios: <b>eficacia, jerarquía, descentralización, desconcentración y coordinación</b>, con sometimiento pleno a la ley y al Derecho.', a: 'art. 103.1'},
        {t: 'Los órganos de la Administración del Estado se crean, rigen y coordinan de acuerdo con la ley.', a: 'art. 103.2'},
        {t: 'La ley regula el estatuto de los funcionarios, el acceso según <b>mérito y capacidad</b>, la sindicación, las incompatibilidades y la imparcialidad.', a: 'art. 103.3'},
        {t: 'Fuerzas y Cuerpos de seguridad: <b>dependen del Gobierno</b>; protegen los derechos y libertades y garantizan la seguridad ciudadana. Ley orgánica.', a: 'art. 104'},
        {t: 'Consejo de Estado: <b>supremo órgano consultivo del Gobierno</b>. Composición y competencia por ley orgánica.', a: 'art. 107'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'La ley regulará · art. 105', items: [
          'La audiencia de los ciudadanos en la elaboración de disposiciones administrativas que les afecten',
          'El acceso a archivos y registros, salvo seguridad y defensa del Estado, averiguación de delitos e intimidad',
          'El procedimiento de los actos administrativos, con audiencia del interesado cuando proceda'
        ]},
        {titulo: 'Control y responsabilidad · art. 106', reglas: [
          'Los Tribunales controlan la potestad reglamentaria, la legalidad de la actuación administrativa y su sometimiento a los fines que la justifican.',
          'Derecho a indemnización por toda lesión causada por el funcionamiento de los servicios públicos, <b>salvo fuerza mayor</b>.'
        ]}
      ]}
    ]},

    {titulo: 'Organización territorial: principios generales', a: 'arts. 137-139', bloques: [
      {tipo: 'lista', items: [
        {t: 'Municipios, provincias y Comunidades Autónomas: <b>autonomía para la gestión de sus respectivos intereses</b>.', a: 'art. 137'},
        {t: 'El Estado garantiza la <b>solidaridad</b> del art. 2, con atención particular al <b>hecho insular</b>.', a: 'art. 138.1'},
        {t: 'Las diferencias entre Estatutos no pueden implicar <b>privilegios económicos o sociales</b>.', a: 'art. 138.2'},
        {t: 'Todos los españoles tienen los <b>mismos derechos y obligaciones</b> en cualquier parte del territorio.', a: 'art. 139.1'},
        {t: 'Ninguna autoridad puede obstaculizar la libre circulación y establecimiento de personas ni la libre circulación de bienes.', a: 'art. 139.2'}
      ]}
    ]},

    {titulo: 'Administración local', a: 'arts. 140-142', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Municipio · art. 140', reglas: [
          'Autonomía garantizada y <b>personalidad jurídica plena</b>.',
          'Gobierno y administración: el <b>Ayuntamiento</b> (Alcalde y Concejales).',
          'Concejales: elegidos por los vecinos por sufragio universal, igual, libre, directo y secreto. Alcalde: <b>por los Concejales o por los vecinos</b>.',
          'La ley regula el <b>concejo abierto</b>.'
        ]},
        {titulo: 'Provincia · art. 141', reglas: [
          'Entidad local con <b>personalidad jurídica propia</b>: agrupación de municipios y división territorial para las actividades del Estado.',
          'Alterar sus límites: las Cortes Generales, por <b>ley orgánica</b>.',
          'Gobierno: <b>Diputaciones</b> u otras Corporaciones representativas.',
          'Pueden crearse agrupaciones de municipios distintas de la provincia. Islas: <b>Cabildos o Consejos</b>.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Haciendas locales: deben tener <b>medios suficientes</b> para sus funciones {{examen:2025}} {{examen:2026}}. Se nutren sobre todo de <b>tributos propios</b> y de participación en los del Estado y las CCAA.', a: 'art. 142'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'La soberanía nacional reside en las Cortes Generales', ok: 'Reside en el pueblo español, del que emanan los poderes del Estado.', a: 'art. 1.2'},
    {x: 'La seguridad jurídica es un valor superior del ordenamiento', ok: 'Los valores superiores son libertad, justicia, igualdad y pluralismo político. La seguridad jurídica es un principio del art. 9.3.', a: 'arts. 1.1 y 9.3'},
    {x: 'Las tres franjas de la bandera tienen la misma anchura', ok: 'La amarilla es de doble anchura que cada una de las rojas.', a: 'art. 4.1'},
    {x: 'Las Fuerzas y Cuerpos de seguridad se regulan en el título preliminar', ok: 'El título preliminar regula las Fuerzas Armadas (art. 8). Las Fuerzas y Cuerpos de seguridad están en el art. 104, bajo dependencia del Gobierno.', a: 'arts. 8 y 104'},
    {x: 'Los Ministros los nombra el Presidente del Gobierno', ok: 'Los nombra y separa el Rey, a propuesta del Presidente.', a: 'art. 100'},
    {x: 'La segunda votación de investidura se hace 24 horas después', ok: '48 horas después, y basta mayoría simple.', a: 'art. 99.3'},
    {x: 'La eficiencia es uno de los principios del art. 103.1', ok: 'Son eficacia, jerarquía, descentralización, desconcentración y coordinación.', a: 'art. 103.1'},
    {x: 'Los miembros del Gobierno responden penalmente ante un Tribunal Superior de Justicia', ok: 'Ante la Sala de lo Penal del Tribunal Supremo.', a: 'art. 102.1'},
    {x: 'La provincia tiene personalidad jurídica plena', ok: 'Plena, el municipio. La provincia tiene personalidad jurídica propia.', a: 'arts. 140 y 141.1'},
    {x: 'Las Haciendas locales deben disponer de los medios necesarios', ok: 'De los medios suficientes {{examen:2026}}.', a: 'art. 142'}
  ],

  examenes: [
    'Cortes elegidas el 15-jun-1977 y sanción el 27-dic-1978: examen oficial 31-may-2026, pregunta 7.',
    'Rúbrica del Título VII («Economía y Hacienda»): examen oficial 31-may-2026, pregunta 3.',
    'Art. 142 (suficiencia de las Haciendas locales): examen oficial 1-jun-2025, pregunta 23, y examen oficial 31-may-2026, reserva 5.'
  ]
});
