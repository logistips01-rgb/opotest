/* Esquema · Auxiliar Administrativo · Tema 3
   Fuentes: Estatuto de Autonomía de Aragón (LO 5/2007), texto consolidado BOE-A-2007-8444,
   arts. 1-10, 32-62 y 70-80; LO 15/2022 (BOE-A-2022-22677) para la redacción de los arts. 36, 38.2
   y 55. Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 3, {
  titulo: 'Estatuto de Autonomía de Aragón: título preliminar, instituciones y competencias',
  epigrafe: 'El Estatuto de Autonomía de Aragón: título preliminar, aspectos básicos de la organización institucional de la Comunidad Autónoma y clases de competencias.',
  etiquetas: ['LO 5/2007 · arts. 1-10, 32-62 y 70-80', 'Títulos preliminar, II, III y V'],
  fuentes: [
    'Ley Orgánica 5/2007, de 20 de abril, de reforma del Estatuto de Autonomía de Aragón. Texto consolidado BOE-A-2007-8444 (última actualización publicada el 28/12/2022), arts. 1 a 10, 32 a 62 y 70 a 80.',
    'Ley Orgánica 15/2022, de 27 de diciembre, de reforma del Estatuto (BOE-A-2022-22677): nueva redacción de los arts. 36, 38.2 y 55.'
  ],

  esencial: [
    {t: 'Aragón es <b>nacionalidad histórica</b>. Sus poderes emanan del <b>pueblo aragonés y de la Constitución</b>.', a: 'art. 1'},
    {t: 'Instituciones: <b>las Cortes, el Presidente, el Gobierno o Diputación General y el Justicia</b>. No hay más.', a: 'art. 32', examen: '2026'},
    {t: 'Cortes <b>unicamerales</b>, elegidas por <b>4 años</b>, con <b>65 a 80</b> escaños y un mínimo de <b>14 por provincia</b>.', a: 'arts. 36-37'},
    {t: 'El Presidente lo eligen las Cortes <b>de entre sus diputados</b> y lo nombra el Rey. Responde políticamente ante las Cortes.', a: 'art. 46'},
    {t: 'Tres clases de competencias: <b>exclusivas</b>, <b>compartidas</b> y <b>ejecutivas</b>. Aragón legisla en las dos primeras; en las ejecutivas aplica la legislación del Estado.', a: 'arts. 70, 71, 75 y 77', examen: '2026'}
  ],

  mapa: [
    {titulo: 'Estructura del Estatuto', rango: '115 artículos', items: [
      ['TP', 'Título preliminar (1-10)'], ['I', 'Derechos y principios rectores (11-31)'],
      ['II', 'Organización institucional (32-60)'], ['III', 'La Administración Pública en Aragón (61-62)'],
      ['IV', 'La Justicia (63-69)'], ['V', 'Competencias de la Comunidad Autónoma (70-80)'],
      ['VI', 'Organización territorial y gobierno local (81-87)'], ['VII', 'Cooperación institucional y acción exterior (88-98)'],
      ['VIII', 'Economía y Hacienda (99-114)'], ['IX', 'Reforma del Estatuto (115)'],
      ['DA-DF', '6 adicionales, 5 transitorias, 1 derogatoria, 1 final']
    ]},
    {titulo: 'Título preliminar', rango: 'arts. 1-10', items: [
      ['1', 'El autogobierno de Aragón'], ['2', 'Territorio'], ['3', 'Símbolos y capitalidad'],
      ['4', 'Condición política de aragonés'], ['5', 'Organización territorial'], ['6', 'Derechos y libertades'],
      ['7', 'Lenguas y modalidades lingüísticas propias'], ['8', 'Comunidades aragonesas en el exterior'],
      ['9', 'Eficacia de las normas'], ['10', 'Incorporación de otros territorios o municipios']
    ]},
    {titulo: 'Título II · Art. 32 y Cap. I · Las Cortes de Aragón', rango: 'arts. 32-45', items: [
      ['32', 'Instituciones'], ['33', 'Disposiciones generales'], ['34', 'Autonomía parlamentaria'], ['35', 'Sede'],
      ['36', 'Composición'], ['37', 'Régimen electoral'], ['38', 'Estatuto de los diputados'], ['39', 'Organización'],
      ['40', 'Funcionamiento'], ['41', 'Funciones'], ['42', 'Potestad legislativa'], ['43', 'Delegación legislativa'],
      ['44', 'Decretos-leyes'], ['45', 'Promulgación y publicación de las leyes']
    ]},
    {titulo: 'Título II · Caps. II a IV · Presidente, Gobierno y Justicia', rango: 'arts. 46-60', items: [
      ['46', 'Presidente: disposiciones generales'], ['47', 'Estatuto personal'], ['48', 'Investidura'],
      ['49', 'Cuestión de confianza'], ['50', 'Moción de censura'], ['51', 'Cese'], ['52', 'Disolución de las Cortes'],
      ['53', 'Gobierno: disposiciones generales'], ['54', 'Sede'], ['55', 'Estatuto de las personas miembros del Gobierno'],
      ['56', 'Cese'], ['57', 'Procedimientos ante el Tribunal Constitucional'], ['58', 'Consejo Consultivo'],
      ['59', 'Justicia de Aragón'], ['60', 'Ley del Justicia']
    ]},
    {titulo: 'Títulos III y V · Administración y competencias', rango: 'arts. 61-62 y 70-80', items: [
      ['61', 'Administración: disposiciones generales'], ['62', 'Principios'],
      ['70', 'Competencias: disposiciones generales'], ['71', 'Exclusivas'], ['72', 'Aguas'], ['73', 'Enseñanza'],
      ['74', 'Medios de comunicación social'], ['75', 'Compartidas'], ['76', 'Policía autonómica'], ['77', 'Ejecutivas'],
      ['78', 'Notarios y registradores'], ['79', 'Actividad de fomento'], ['80', 'Cláusula de cierre']
    ]}
  ],

  cifras: [
    {v: '65 a 80', d: 'Escaños de las Cortes de Aragón, según la ley electoral', a: 'art. 36.1'},
    {v: '14', d: 'Escaños mínimos por provincia {{examen:2026}}', a: 'art. 36.2'},
    {v: '3 veces', d: 'Tope de diferencia de habitantes por escaño entre la circunscripción más poblada y la menos', a: 'art. 36.3'},
    {v: '4 años', d: 'Mandato de las Cortes de Aragón', a: 'art. 37.2'},
    {v: '30 días', d: 'Plazo improrrogable para convalidar un decreto-ley', a: 'art. 44.2'},
    {v: '15 días', d: 'Máximo para publicar las leyes en el BOA y en el BOE desde su aprobación', a: 'art. 45'},
    {v: '24 horas', d: 'Segunda votación de investidura, por mayoría simple', a: 'art. 48.2'},
    {v: '2 meses', d: 'Desde la constitución de las Cortes sin investidura: quedan disueltas', a: 'art. 48.3'},
    {v: '15 %', d: 'De los diputados, como mínimo, para proponer la moción de censura', a: 'art. 50.2'},
    {v: '1 año', d: 'Sin nueva moción de los mismos firmantes si fracasa; sin nueva disolución tras otra', a: 'arts. 50.5 y 52.4'}
  ],

  secciones: [
    {titulo: 'Título preliminar', a: 'arts. 1-10', bloques: [
      {tipo: 'tabla', cab: ['Art.', 'Contenido'], filas: [
        ['1', 'Aragón, <b>nacionalidad histórica</b>, ejerce su autogobierno según el Estatuto. Poderes: emanan del <b>pueblo aragonés y de la Constitución</b>. Identidad propia por sus instituciones tradicionales, el Derecho foral y su cultura.'],
        ['2', 'Territorio: el histórico de Aragón. Municipios, comarcas y provincias de <b>Huesca, Teruel y Zaragoza</b>.'],
        ['3', 'Bandera: <b>cuatro barras rojas horizontales</b> sobre fondo amarillo. Escudo de cuatro cuarteles en el centro. Capital: <b>Zaragoza</b>. Día de Aragón: <b>23 de abril</b>.'],
        ['4', 'Condición política de aragonés: los españoles con <b>vecindad administrativa</b> en un municipio de Aragón. También los residentes en el extranjero cuya última vecindad administrativa fue Aragón, y sus descendientes si lo solicitan.'],
        ['5', 'Organización territorial: <b>municipios, comarcas y provincias</b>.'],
        ['6', 'Derechos: los de la Constitución, la Declaración Universal y los tratados ratificados por España, y los del Estatuto. El Título I <b>no altera</b> el reparto de competencias.'],
        ['7', 'Lenguas y modalidades propias: una <b>ley de Cortes</b> fija las zonas de uso predominante. Nadie puede ser discriminado por razón de la lengua.'],
        ['8', 'Comunidades aragonesas del exterior: los poderes públicos fomentan los vínculos; una ley de Cortes regula su participación.'],
        ['9', 'Normas aragonesas: <b>eficacia territorial</b>. Derecho foral: <b>eficacia personal</b> (vecindad civil aragonesa, resida donde resida).'],
        ['10', 'Incorporación de territorios o municipios limítrofes o enclavados {{examen:2025}}.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Requisitos de la incorporación: solicitud del Ayuntamiento o de la mayoría de los Ayuntamientos, oyendo a la Comunidad o provincia de origen; consulta a los habitantes; aprobación de las <b>Cortes de Aragón</b> y después de las <b>Cortes Generales mediante ley orgánica</b>.', a: 'art. 10', examen: '2025'},
        {t: 'Extranjero que adquiere la nacionalidad con vecindad administrativa en Aragón: queda sujeto a la vecindad civil aragonesa, salvo que manifieste lo contrario.', a: 'art. 9.3'}
      ]}
    ]},

    {titulo: 'Las Cortes de Aragón', a: 'arts. 33-45', bloques: [
      {tipo: 'lista', items: [
        {t: 'Representan al pueblo aragonés, ejercen la <b>potestad legislativa</b>, aprueban los presupuestos e impulsan y controlan al Gobierno. Son <b>inviolables</b>.', a: 'art. 33'},
        {t: 'Reglamento propio, aprobado por <b>mayoría absoluta</b>. La ley electoral también exige mayoría absoluta.', a: 'arts. 34 y 37.6'},
        {t: 'Sede: Zaragoza, <b>Palacio de la Aljafería</b>. Pueden reunirse en otros lugares de Aragón.', a: 'art. 35'},
        {t: 'Unicamerales. Representación proporcional que asegure la de las diversas zonas del territorio. Circunscripción: la <b>provincia</b>.', a: 'art. 37'},
        {t: 'Diputados: sin mandato imperativo e inviolables, aun después de cesar, por sus votos y opiniones. Durante su mandato no pueden ser detenidos ni retenidos <b>salvo flagrante delito</b>.', a: 'art. 38'},
        {t: 'Eligen Presidente, Mesa y Diputación Permanente. Funcionan en Pleno y en Comisiones.', a: 'art. 39'},
        {t: 'Periodos ordinarios: <b>septiembre-diciembre</b> y <b>febrero-junio</b>. Sesiones extraordinarias: las convoca el Presidente de las Cortes a petición de la Diputación Permanente, de <b>una quinta parte</b> de los diputados, de los grupos que fije el Reglamento o del Gobierno.', a: 'art. 40'},
        {t: 'Funciones destacadas: elegir al Presidente de Aragón, elegir y cesar al Justicia, designar los senadores autonómicos (art. 69.5 CE), aprobar el programa del Gobierno, interponer recurso de inconstitucionalidad y convalidar decretos-leyes.', a: 'art. 41'},
        {t: 'Iniciativa legislativa: los miembros de las Cortes y el Gobierno. La iniciativa popular, por ley de Cortes.', a: 'art. 42.2'},
        {t: 'Las leyes las promulga el Presidente <b>en nombre del Rey</b> y se publican en el BOA y en el BOE en <b>15 días</b> como máximo. Vigencia: manda la fecha del <b>BOA</b>.', a: 'art. 45'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Delegación legislativa · art. 43', reglas: [
          'Las Cortes delegan en el Gobierno; el resultado son <b>Decretos Legislativos</b>.',
          'Expresa, <b>mediante ley</b>, para materia concreta y con plazo cierto.',
          'Excluidas: Presupuesto, regulación esencial de los derechos del Estatuto, desarrollo básico de las Instituciones y régimen electoral.',
          'No se usa con el Gobierno en funciones por disolución de las Cortes.'
        ]},
        {titulo: 'Decretos-leyes · art. 44', reglas: [
          'Por <b>necesidad urgente y extraordinaria</b>.',
          'Excluidos: desarrollo de derechos, deberes y libertades de los aragoneses, instituciones del Título II, régimen electoral, <b>tributos</b> y Presupuesto.',
          'Derogados si no se convalidan en <b>30 días improrrogables</b>, tras debate y votación de totalidad. Pueden tramitarse además como proyectos de ley.'
        ]}
      ]}
    ]},

    {titulo: 'El Presidente', a: 'arts. 46-52', bloques: [
      {tipo: 'lista', items: [
        {t: 'Elegido por las Cortes de entre sus diputados y <b>nombrado por el Rey</b>. Tiene la <b>suprema representación de Aragón</b> y la ordinaria del Estado en Aragón. Preside y dirige el Gobierno.', a: 'art. 46'},
        {t: 'No puede ejercer otras funciones representativas que las del mandato parlamentario, otra función pública ni actividad profesional o mercantil.', a: 'art. 47'}
      ]},
      {tipo: 'tabla', cab: ['', 'Iniciativa', 'Mayoría', 'Efecto'], filas: [
        ['Investidura · 48', 'Propone candidato el <b>Presidente de las Cortes</b>, tras consultar a las fuerzas políticas y oída la Mesa.', '1.ª votación: <b>absoluta</b>. 24 horas después: <b>simple</b>.', 'Propuestas sucesivas con no más de <b>10 días</b> entre ellas. A los 2 meses de constituidas las Cortes sin investidura: disolución y elecciones.'],
        ['Cuestión de confianza · 49', 'El Presidente, previa deliberación del Gobierno, sobre su programa o una declaración de política general.', '<b>Simple</b> de los votos emitidos.', 'Si se niega, cesan Presidente y Gobierno y se elige nuevo Presidente.'],
        ['Moción de censura · 50', 'Al menos el <b>15 %</b> de los diputados. Debe incluir <b>candidato</b>.', '<b>Absoluta</b>.', 'Cesan Presidente y Gobierno; el candidato queda investido. Si fracasa, sus firmantes esperan <b>1 año</b>.']
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Cese · art. 51', items: [
          'Elecciones a Cortes de Aragón',
          'Moción de censura aprobada o cuestión de confianza perdida',
          'Dimisión',
          'Incapacidad permanente reconocida por las Cortes por mayoría absoluta',
          'Sentencia firme de inhabilitación',
          'Pérdida de la condición de diputado o incompatibilidad no subsanada'
        ]},
        {titulo: 'Disolución anticipada · art. 52', reglas: [
          'La acuerda el Presidente, previa deliberación del Gobierno y bajo su <b>exclusiva responsabilidad</b>, por decreto que convoca elecciones.',
          'No cabe con una <b>moción de censura en trámite</b>.',
          'No cabe otra antes de <b>1 año</b>, salvo la disolución automática del art. 48.3.'
        ]}
      ]}
    ]},

    {titulo: 'Gobierno, Consejo Consultivo y Justicia', a: 'arts. 53-60', bloques: [
      {tipo: 'lista', items: [
        {t: 'El Gobierno ejerce la <b>función ejecutiva y la potestad reglamentaria</b>.', a: 'art. 53.1'},
        {t: 'Lo forman el Presidente, los Vicepresidentes (en su caso) y los <b>Consejeros</b>, que el Presidente nombra y separa libremente.', a: 'art. 53.2'},
        {t: 'Responde ante las Cortes de forma <b>solidaria</b>, sin perjuicio de la responsabilidad directa de cada Consejero.', a: 'art. 53.3'},
        {t: 'Sede: Zaragoza. Puede cambiarse <b>por ley de Cortes</b>.', a: 'art. 54'},
        {t: 'Sus miembros no pueden ser detenidos ni retenidos durante su mandato salvo flagrante delito.', a: 'art. 55.1'},
        {t: 'Cesa cuando cesa su Presidente y sigue <b>en funciones</b> hasta que toma posesión el nuevo.', a: 'art. 56'},
        {t: 'Puede interponer recursos de inconstitucionalidad y plantear conflictos de competencias ante el Tribunal Constitucional.', a: 'art. 57'},
        {t: 'Consejo Consultivo: <b>supremo órgano consultivo</b> del Gobierno y la Administración de Aragón, con autonomía orgánica y funcional. No es institución del art. 32.', a: 'arts. 32 y 58'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Justicia de Aragón · misiones (59.1)', items: [
          'Proteger y defender los derechos individuales y colectivos del Estatuto',
          'Tutelar el ordenamiento jurídico aragonés',
          'Defender el Estatuto'
        ], reglas: ['Lo eligen, nombran y cesan <b>las Cortes</b>, ante las que rinde cuentas.']},
        {titulo: 'Puede supervisar (59.2)', items: [
          'La Administración de la Comunidad Autónoma y sus entes dependientes',
          'Los entes locales aragoneses, las comarcas y sus entes dependientes',
          'Los servicios públicos gestionados en concesión bajo control de una institución aragonesa'
        ], reglas: ['Una <b>ley de Cortes</b> concreta sus funciones, su elección e incompatibilidades (art. 60).']}
      ]}
    ]},

    {titulo: 'La Administración Pública en Aragón', a: 'arts. 61-62', bloques: [
      {tipo: 'lista', items: [
        {t: 'Aragón crea y organiza su Administración conforme a la ley. Es <b>Administración ordinaria</b> en el ejercicio de sus competencias.', a: 'art. 61'},
        {t: 'Sirve con objetividad los intereses generales, con sometimiento pleno a la Ley y al Derecho.', a: 'art. 62.1'},
        {t: 'Respeta la <b>buena fe</b> y la <b>confianza legítima</b>; con otras Administraciones, <b>lealtad institucional</b>.', a: 'art. 62.2'},
        {t: 'Principios de actividad: <b>eficacia, eficiencia, racionalización, transparencia y servicio efectivo</b> a los ciudadanos.', a: 'art. 62.3'},
        {t: 'Tiene las mismas potestades y prerrogativas que la Administración del Estado.', a: 'art. 62.5'}
      ]}
    ]},

    {titulo: 'Clases de competencias', a: 'arts. 70-80', bloques: [
      {tipo: 'tabla', cab: ['Clase', 'Qué hace Aragón', 'Ejemplos'], filas: [
        ['<b>Exclusivas</b> · 71', 'Potestad legislativa, potestad reglamentaria, función ejecutiva y políticas propias, respetando los arts. 140 y 149.1 CE.', 'Instituciones de autogobierno, Derecho foral, lenguas propias, <b>urbanismo</b> {{examen:2025}}, vivienda, sanidad y salud pública. Aguas que discurren íntegramente por Aragón (72).'],
        ['<b>Compartidas</b> · 75', '<b>Desarrollo legislativo</b> y ejecución de la legislación básica del Estado, con políticas propias.', 'Seguridad Social (salvo su régimen económico), medio ambiente, energía, régimen jurídico y procedimiento de su Administración, funcionarios autonómicos y locales. Enseñanza (73) y medios de comunicación (74).'],
        ['<b>Ejecutivas</b> · 77', 'Aplica la legislación estatal: reglamentos de organización de sus servicios y funciones de Administración Pública.', 'Gestión de la asistencia sanitaria de la Seguridad Social, trabajo y relaciones laborales, propiedad intelectual e industrial, sistema penitenciario, Parques Nacionales, registro civil.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Función legislativa: solo en competencias <b>exclusivas y compartidas</b>, nunca en las ejecutivas.', a: 'arts. 71, 75 y 77', examen: '2026'},
        {t: 'Las competencias se ejercen con eficacia en el <b>territorio de Aragón</b>, salvo excepciones expresas.', a: 'art. 70.2'},
        {t: 'Policía autonómica: Aragón <b>podrá crearla</b> (76.1). Le corresponde la coordinación de la actuación de las <b>Policías locales aragonesas</b> (76.3). Se creará, en su caso, una Junta de Seguridad paritaria Estado-Comunidad que coordina la Policía autonómica y los Cuerpos y Fuerzas de Seguridad del Estado (76.4).', a: 'art. 76'},
        {t: 'Fomento: subvenciones con fondos propios. Las territorializables del Estado y la UE: en exclusivas fija objetivos, regula el otorgamiento y las gestiona; en compartidas precisa objetivos, completa las condiciones y asume toda la gestión; en ejecutivas, las gestiona.', a: 'art. 79'},
        {t: 'Cláusula de cierre: en competencias exclusivas, el Derecho propio de Aragón se aplica <b>con preferencia</b> a cualquier otro.', a: 'art. 80.2'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'El Tribunal Superior de Justicia o el Consejo Consultivo son instituciones del art. 32', ok: 'Solo lo son las Cortes, el Presidente, el Gobierno o Diputación General y el Justicia {{examen:2026}}.', a: 'art. 32'},
    {x: 'La bandera de Aragón tiene barras verticales', ok: 'Cuatro barras rojas horizontales sobre fondo amarillo.', a: 'art. 3.1'},
    {x: 'El Derecho foral aragonés tiene eficacia territorial', ok: 'Eficacia personal: se aplica a quien tenga vecindad civil aragonesa, resida donde resida.', a: 'art. 9.2'},
    {x: 'Para incorporar un municipio basta que lo aprueben las Cortes de Aragón y las Cortes Generales', ok: 'Las Cortes Generales lo aprueban mediante ley orgánica, y antes hay solicitud municipal y consulta a los habitantes {{examen:2025}}.', a: 'art. 10'},
    {x: 'En la investidura del Presidente de Aragón la segunda votación es 48 horas después', ok: '24 horas después, por mayoría simple.', a: 'art. 48.2'},
    {x: 'La cuestión de confianza exige mayoría absoluta', ok: 'Basta la mayoría simple de los votos emitidos.', a: 'art. 49.2'},
    {x: 'Cualquier diputado puede presentar una moción de censura', ok: 'Al menos el 15 % de los diputados, con candidato. Se aprueba por mayoría absoluta.', a: 'art. 50'},
    {x: 'Urbanismo es competencia compartida', ok: 'Es competencia exclusiva {{examen:2025}}.', a: 'art. 71.9.ª'},
    {x: 'En las competencias ejecutivas Aragón también legisla', ok: 'Solo dicta reglamentos de organización y aplica la legislación estatal {{examen:2026}}.', a: 'art. 77'},
    {x: 'Los diputados y miembros del Gobierno de Aragón están aforados ante el Tribunal Superior de Justicia', ok: 'La LO 15/2022 suprimió el aforamiento. Durante su mandato no pueden ser detenidos ni retenidos salvo en caso de flagrante delito.', a: 'arts. 38.2 y 55.1'}
  ],

  examenes: [
    'Art. 10 (incorporación de territorios: ley orgánica de las Cortes Generales): examen oficial 1-jun-2025, pregunta 5.',
    'Art. 71.9.ª (urbanismo, competencia exclusiva): examen oficial 1-jun-2025, pregunta 3.',
    'Art. 76.3 (coordinación de la actuación de las Policías locales aragonesas): examen oficial 1-jun-2025, pregunta 50. La respuesta tomada como oficial (la plantilla de ese examen no está publicada) da por buenas las dos opciones, también «La coordinación de la actuación de la Policía autonómica con la de las Policías locales aragonesas». El art. 76.3 solo dice: «Corresponde a la Comunidad Autónoma la coordinación de la actuación de las Policías locales aragonesas». El esquema sigue el texto del Estatuto y no marca este punto.',
    'Título V (función legislativa solo en exclusivas y compartidas): examen oficial 31-may-2026, pregunta 5.',
    'Art. 32 (instituciones; no lo son el TSJ ni el Consejo Consultivo): examen oficial 31-may-2026, pregunta 31.',
    'Art. 36.2 (mínimo de 14 escaños por provincia): examen oficial 31-may-2026, reserva 4.'
  ]
});
