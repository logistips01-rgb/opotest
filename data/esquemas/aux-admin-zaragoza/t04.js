/* Esquema · Auxiliar Administrativo · Tema 4
   Fuente única: Ley 39/2015, texto consolidado BOE-A-2015-10565, arts. 3-12 (Título I).
   Complemento: arts. 1-2 (Título preliminar), que el banco del tema 4 también pregunta.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 4, {
  titulo: 'LPAC (I): los interesados en el procedimiento',
  epigrafe: 'La Ley del Procedimiento Administrativo Común de las Administraciones Públicas (I): los interesados en el procedimiento.',
  etiquetas: ['Ley 39/2015 · arts. 3 a 12', 'Título I', 'Complemento: arts. 1-2'],
  fuentes: ['Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. Texto consolidado BOE-A-2015-10565, arts. 3 a 12 (y arts. 1-2 como complemento).'],

  esencial: [
    {t: 'Interesados son <b>tres</b>: quien promueve el procedimiento, quien tiene <b>derechos</b> que pueden verse afectados y quien tiene <b>intereses legítimos</b> afectados <b>y se persona</b> antes de la resolución definitiva.', a: 'art. 4.1'},
    {t: 'La representación <b>se acredita</b> para solicitar, presentar declaraciones responsables o comunicaciones, recurrir, desistir y renunciar. En los actos de <b>mero trámite se presume</b>.', a: 'art. 5.3'},
    {t: 'Si falta o es insuficiente, el acto vale si se subsana en <b>10 días</b> (o plazo superior) que debe conceder el órgano.', a: 'art. 5.6'},
    {t: 'Los poderes inscritos en el registro de apoderamientos valen <b>como máximo 5 años</b> desde la inscripción.', a: 'art. 6.6'},
    {t: 'Para actuar basta con <b>identificarse</b>. La <b>firma</b> solo es obligatoria en 5 casos: solicitudes, declaraciones responsables o comunicaciones, recursos, desistimiento y renuncia.', a: 'art. 11'}
  ],

  mapa: [
    {titulo: 'Cap. I · Capacidad de obrar y concepto de interesado', rango: 'arts. 3-8', items: [
      ['3', 'Capacidad de obrar'], ['4', 'Concepto de interesado'], ['5', 'Representación'],
      ['6', 'Registros electrónicos de apoderamientos'], ['7', 'Pluralidad de interesados'],
      ['8', 'Nuevos interesados en el procedimiento']
    ]},
    {titulo: 'Cap. II · Identificación y firma de los interesados', rango: 'arts. 9-12', items: [
      ['9', 'Sistemas de identificación'], ['10', 'Sistemas de firma'],
      ['11', 'Uso de medios de identificación y firma'], ['12', 'Asistencia en el uso de medios electrónicos']
    ]},
    {titulo: 'Complemento · Título preliminar', rango: 'arts. 1-2', items: [
      ['1', 'Objeto de la Ley'], ['2', 'Ámbito subjetivo de aplicación']
    ]}
  ],

  cifras: [
    {v: '3', d: 'Clases de interesados', a: 'art. 4.1'},
    {v: '10 días', d: 'Para aportar o subsanar la acreditación de la representación (o plazo superior si el caso lo requiere)', a: 'art. 5.6'},
    {v: '5', d: 'Datos mínimos de cada asiento del registro de apoderamientos', a: 'art. 6.3'},
    {v: '3', d: 'Tipos de poder inscribibles: general, ante una Administración u Organismo, para trámites concretos', a: 'art. 6.4'},
    {v: '5 años', d: 'Validez máxima de los poderes inscritos, desde la inscripción. Igual tope para las prórrogas', a: 'art. 6.6'},
    {v: '2 meses', d: 'Desde la comunicación a la Secretaría General de Administración Digital hasta la eficacia de un sistema de la letra c)', a: 'arts. 9.2.c y 10.2.c'},
    {v: '10 días', d: 'Para el informe vinculante de la Secretaría de Estado de Seguridad sobre esos sistemas', a: 'arts. 9.2.c y 10.2.c'},
    {v: '5', d: 'Actuaciones en que se puede exigir firma', a: 'art. 11.2'}
  ],

  secciones: [
    {titulo: 'Capacidad de obrar e interesados', a: 'arts. 3-4', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Capacidad de obrar · art. 3', items: [
          'Personas físicas o jurídicas con capacidad según las <b>normas civiles</b>.',
          '<b>Menores de edad</b>, para los derechos e intereses que el ordenamiento les deja ejercer sin la asistencia de quien ejerza la patria potestad, tutela o curatela. Excepción: menores incapacitados, si la incapacitación afecta a esos derechos.',
          'Grupos de afectados, uniones y entidades sin personalidad jurídica y patrimonios independientes o autónomos, <b>solo cuando la Ley lo declare expresamente</b>.'
        ]},
        {titulo: 'Interesados · art. 4.1', items: [
          'a) Quienes lo <b>promuevan</b> como titulares de derechos o intereses legítimos, individuales o colectivos.',
          'b) Quienes, sin haberlo iniciado, tengan <b>derechos</b> que puedan resultar afectados por la decisión.',
          'c) Quienes tengan <b>intereses legítimos</b> que puedan resultar afectados <b>y se personen</b> mientras no haya resolución definitiva.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Las asociaciones y organizaciones representativas de intereses económicos y sociales son titulares de <b>intereses legítimos colectivos</b> en los términos que la Ley reconozca.', a: '4.2'},
        {t: 'Si la condición de interesado viene de una relación jurídica transmisible, el derecho-habiente le <b>sucede</b> cualquiera que sea el estado del procedimiento.', a: '4.3'}
      ]}
    ]},

    {titulo: 'Representación', a: 'art. 5', bloques: [
      {tipo: 'lista', items: [
        {t: 'Los interesados con capacidad de obrar pueden actuar por representante. Las actuaciones se entienden con él, <b>salvo manifestación expresa en contra</b> del interesado.', a: '5.1'},
        {t: 'Pueden representar: personas físicas con capacidad de obrar y personas jurídicas <b>si lo prevén sus Estatutos</b>.', a: '5.2'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Hay que acreditarla · 5.3', items: [
          'Formular solicitudes',
          'Presentar declaraciones responsables o comunicaciones',
          'Interponer recursos',
          'Desistir de acciones',
          'Renunciar a derechos'
        ], reglas: ['Actos y gestiones de <b>mero trámite</b>: la representación <b>se presume</b>.']},
        {titulo: 'Cómo se acredita · 5.4-5.5', items: [
          'Cualquier medio válido en Derecho que deje <b>constancia fidedigna</b>',
          'Apoderamiento <b>apud acta</b>, por comparecencia personal o electrónica en la sede',
          'Inscripción en el <b>registro electrónico de apoderamientos</b> de la Administración competente'
        ], reglas: ['El órgano que tramita incorpora al expediente la acreditación de la condición de representante y de sus poderes.']}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Falta o insuficiente acreditación: <b>no impide</b> tener por realizado el acto si se aporta o se subsana en <b>10 días</b> que debe conceder el órgano, o en un plazo superior si el caso lo requiere.', a: '5.6'},
        {t: 'Las Administraciones pueden <b>habilitar</b> a personas físicas o jurídicas para transacciones electrónicas en representación de los interesados. Pueden pedir la acreditación en cualquier momento. El interesado <b>siempre puede comparecer por sí mismo</b>.', a: '5.7'}
      ]},
      {tipo: 'ejemplo', t: 'Una persona interpone un recurso en nombre de su hermano sin acreditar la representación. El recurso no se tiene por no presentado: el órgano le concede 10 días para aportarla o subsanar el defecto.'}
    ]},

    {titulo: 'Registros electrónicos de apoderamientos', a: 'art. 6', bloques: [
      {tipo: 'lista', items: [
        {t: '<b>AGE, Comunidades Autónomas y Entidades Locales</b> tienen un registro electrónico general de apoderamientos. Se inscriben, al menos, los poderes <b>de carácter general</b> otorgados apud acta. También consta el <b>bastanteo</b> del poder.', a: '6.1'},
        {t: 'En el Estado: Registro Electrónico de Apoderamientos de la AGE. Cada Organismo puede tener además su registro particular para trámites específicos.', a: '6.1'},
        {t: 'Generales y particulares deben ser <b>plenamente interoperables</b>; permiten consultar otros registros administrativos, el mercantil, el de la propiedad y los protocolos notariales.', a: '6.2'}
      ]},
      {tipo: 'tabla', cab: ['Contenido mínimo del asiento · 6.3', 'Tipos de poder · 6.4'], filas: [
        ['Datos identificativos del <b>poderdante</b>', 'a) <b>General</b>: cualquier actuación y ante cualquier Administración'],
        ['Datos identificativos del <b>apoderado</b>', 'b) Cualquier actuación ante una Administración u Organismo <b>concreto</b>'],
        ['Fecha de inscripción · Período del poder · Tipo de poder', 'c) Solo los <b>trámites especificados</b> en el poder']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Apud acta: comparecencia <b>electrónica</b> en la sede con firma electrónica, o comparecencia <b>personal</b> en las oficinas de asistencia en materia de registros.', a: '6.5'},
        {t: 'Validez <b>máxima de 5 años</b> desde la inscripción. Antes de que acabe, el poderdante puede <b>revocarlo o prorrogarlo</b>. Las prórrogas, también 5 años como máximo.', a: '6.6'},
        {t: 'Inscripción, revocación, prórroga o denuncia: se pueden pedir en <b>cualquier registro</b>. Surten efecto desde que se inscriben en el registro de la Administración u Organismo ante el que tenga efectos el poder.', a: '6.7'},
        {t: 'Cada Comunidad Autónoma aprueba los modelos de poderes inscribibles para actuar ante su Administración. El párrafo segundo del 6.4 fue anulado por la STC 55/2018.', a: '6.4'}
      ]}
    ]},

    {titulo: 'Varios interesados y nuevos interesados', a: 'arts. 7-8', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Pluralidad de interesados · art. 7', reglas: [
          'Si una solicitud, escrito o comunicación lleva varios interesados, se actúa con el <b>representante o interesado que hayan señalado expresamente</b>.',
          'En su defecto, con el que <b>figure en primer término</b>.'
        ]},
        {titulo: 'Nuevos interesados · art. 8', reglas: [
          'Procedimiento que <b>no haya tenido publicidad</b>.',
          'Se advierten titulares de derechos o intereses legítimos y directos, identificables por el expediente, que pueden verse afectados.',
          'Se les <b>comunica la tramitación</b> del procedimiento.'
        ]}
      ]}
    ]},

    {titulo: 'Identificación y firma', a: 'arts. 9-11', bloques: [
      {tipo: 'lista', items: [
        {t: 'Las Administraciones están <b>obligadas a verificar la identidad</b>: nombre y apellidos o denominación o razón social que consten en el DNI o documento equivalente.', a: '9.1'},
        {t: 'Firma: cualquier medio que acredite la <b>autenticidad</b> de la voluntad y el consentimiento y la <b>integridad e inalterabilidad</b> del documento.', a: '10.1'}
      ]},
      {tipo: 'tabla', cab: ['Letra', 'Identificación · 9.2', 'Firma · 10.2'], filas: [
        ['a)', 'Certificados electrónicos cualificados de <b>firma</b> electrónica', 'Firma electrónica cualificada y avanzada basada en certificados cualificados de firma'],
        ['b)', 'Certificados electrónicos cualificados de <b>sello</b> electrónico', 'Sello electrónico cualificado y avanzado basado en certificados cualificados de sello'],
        ['c)', 'Otro sistema que la Administración considere válido, con registro previo como usuario y comunicación previa a la Secretaría General de Administración Digital', 'Igual que en identificación']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Los certificados de a) y b) deben venir de prestadores incluidos en la «Lista de confianza de prestadores de servicios de certificación».', a: '9.2 y 10.2'},
        {t: 'Siempre debe poder usarse un sistema de las letras <b>a) o b)</b>, aunque se admita también uno de la c).', a: '9.2 y 10.2'},
        {t: 'Sistemas de la letra c): recursos técnicos en territorio de la <b>UE</b>; si hay categorías especiales de datos, en territorio <b>español</b>.', a: '9.3 y 10.3'},
        {t: 'Si la AGE acepta un sistema, sirve para acreditar la identificación electrónica frente a <b>todas</b> las Administraciones, salvo prueba en contrario.', a: '9.4'},
        {t: 'La identificación puede valer como firma si la normativa reguladora lo dispone expresamente. Quien firma ya queda <b>identificado</b> con la firma.', a: '10.4-10.5'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Regla general · 11.1', reglas: ['Para cualquier actuación basta con <b>acreditar la identidad</b> por cualquiera de los medios de la Ley.']},
        {titulo: 'Firma obligatoria solo para · 11.2', items: [
          'Formular solicitudes',
          'Presentar declaraciones responsables o comunicaciones',
          'Interponer recursos',
          'Desistir de acciones',
          'Renunciar a derechos'
        ]}
      ]}
    ]},

    {titulo: 'Asistencia en el uso de medios electrónicos', a: 'art. 12', bloques: [
      {tipo: 'lista', items: [
        {t: 'Las Administraciones deben garantizar que los interesados puedan relacionarse por medios electrónicos, con los canales, sistemas y aplicaciones necesarios.', a: '12.1'},
        {t: 'Asisten a los interesados <b>no obligados</b> (no incluidos en el art. 14.2 y 14.3) que lo soliciten: identificación y firma electrónica, presentación en el registro electrónico general y copias auténticas.', a: '12.2'},
        {t: 'Si no tienen medios, un <b>funcionario habilitado</b> puede identificarles o firmar por ellos con su propio sistema de firma. El interesado se identifica ante él y da su <b>consentimiento expreso</b>; queda constancia.', a: '12.2'},
        {t: 'AGE, CCAA y Entidades Locales mantienen un <b>registro de funcionarios habilitados</b>, interoperable. Constan al menos los de las oficinas de asistencia en materia de registros.', a: '12.3'}
      ]}
    ]},

    {titulo: 'Complemento: objeto y ámbito de la Ley', a: 'arts. 1-2', bloques: [
      {tipo: 'lista', items: [
        {t: 'Objeto: requisitos de validez y eficacia de los actos, procedimiento común (incluidos el <b>sancionador</b> y el de <b>responsabilidad</b> patrimonial) y principios de la iniciativa legislativa y la potestad reglamentaria.', a: '1.1'},
        {t: 'Trámites adicionales o distintos: <b>solo mediante ley</b>, de forma motivada y si es eficaz, proporcionado y necesario. Por <b>reglamento</b>, solo especialidades: órganos competentes, plazos por razón de la materia, formas de iniciación y terminación, publicación e informes.', a: '1.2'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Sector público · 2.1', items: [
          'Administración General del Estado',
          'Administraciones de las Comunidades Autónomas',
          'Entidades que integran la Administración Local',
          'Sector público institucional'
        ], reglas: ['Son <b>Administraciones Públicas</b> las tres primeras y los organismos públicos y entidades de derecho público del 2.2.a.']},
        {titulo: 'Sector público institucional · 2.2', items: [
          'Organismos públicos y entidades de derecho público vinculados o dependientes',
          'Entidades de derecho privado vinculadas o dependientes: las normas que se refieran a ellas y, en todo caso, cuando ejerzan <b>potestades administrativas</b>',
          'Universidades públicas: su normativa y <b>supletoriamente</b> esta Ley'
        ], reglas: ['Corporaciones de Derecho Público: su normativa en las funciones públicas atribuidas o delegadas, y supletoriamente esta Ley (2.4).']}
      ]}
    ]}
  ],

  trampas: [
    {x: 'Los menores de edad no tienen capacidad de obrar ante la Administración', ok: 'La tienen para los derechos e intereses que el ordenamiento les deja ejercer sin asistencia de quien ejerza la patria potestad, tutela o curatela.', a: '3.b'},
    {x: 'Los grupos de afectados y las entidades sin personalidad siempre tienen capacidad de obrar', ok: 'Solo cuando la Ley lo declare expresamente.', a: '3.c'},
    {x: 'Quien tiene un interés legítimo afectado es interesado aunque no se persone', ok: 'Debe personarse mientras no haya recaído resolución definitiva.', a: '4.1.c'},
    {x: 'Toda persona jurídica puede representar a otras', ok: 'Solo si lo prevén sus Estatutos.', a: '5.2'},
    {x: 'Hay que acreditar la representación en cualquier trámite', ok: 'Solo para solicitudes, declaraciones responsables o comunicaciones, recursos, desistimiento y renuncia. En el mero trámite se presume.', a: '5.3'},
    {x: 'Sin representación acreditada el acto se tiene por no realizado', ok: 'Vale si se aporta o subsana en 10 días (o plazo superior) que concede el órgano.', a: '5.6'},
    {x: 'Los poderes inscritos valen sin límite de tiempo', ok: 'Máximo 5 años desde la inscripción; se pueden revocar o prorrogar antes.', a: '6.6'},
    {x: 'Con varios interesados, la Administración actúa siempre con todos', ok: 'Con el representante o interesado señalado expresamente; si no, con el que figure en primer término.', a: '7'},
    {x: 'Hay que comunicar la tramitación a los nuevos interesados en cualquier procedimiento', ok: 'Solo en el procedimiento que no haya tenido publicidad.', a: '8'},
    {x: 'Para cualquier actuación se exige firma', ok: 'Basta identificarse. La firma solo para 5 actuaciones tasadas.', a: '11'}
  ],

  examenes: ['Ninguna pregunta de los exámenes oficiales de 1-jun-2025 y 31-may-2026 (tema 21 del banco) recae sobre los arts. 1 a 12 de la Ley 39/2015.']
});
