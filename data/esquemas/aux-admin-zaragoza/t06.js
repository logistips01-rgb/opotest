/* Esquema · Auxiliar Administrativo · Tema 6
   Fuente única: Ley 39/2015, texto consolidado BOE-A-2015-10565, arts. 34-52 (Título III).
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 6, {
  titulo: 'LPAC (III): actos administrativos. Requisitos, eficacia, nulidad y anulabilidad',
  epigrafe: 'La Ley del Procedimiento Administrativo Común de las Administraciones Públicas (III): los actos administrativos. Requisitos. Eficacia. Nulidad y anulabilidad.',
  etiquetas: ['Ley 39/2015 · arts. 34 a 52', 'Título III'],
  fuentes: ['Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. Texto consolidado BOE-A-2015-10565, arts. 34 a 52.'],

  esencial: [
    {t: 'Los actos se <b>presumen válidos</b> y producen efectos <b>desde la fecha en que se dictan</b>, salvo que dispongan otra cosa. La retroactividad es excepcional.', a: 'art. 39'},
    {t: 'La notificación se cursa en <b>10 días</b> desde que se dicta el acto, con el <b>texto íntegro</b>, si pone fin o no a la vía administrativa, los recursos, el órgano y el plazo.', a: 'art. 40.2'},
    {t: 'Se notifica <b>preferentemente por medios electrónicos</b>. La electrónica se practica al <b>acceder</b> al contenido; obligatoria o elegida, se entiende <b>rechazada a los 10 días naturales</b> sin acceso.', a: 'arts. 41 y 43'},
    {t: 'En papel, si nadie se hace cargo en el domicilio: <b>un segundo intento</b> en los 3 días siguientes, en la otra franja horaria (antes o después de las 15 h). Si falla, <b>anuncio en el BOE</b>.', a: 'arts. 42.2 y 44'},
    {t: 'Nulidad de pleno derecho: solo los <b>7 casos</b> del art. 47.1. Cualquier otra infracción, <b>incluida la desviación de poder</b>, da anulabilidad, que se puede convalidar.', a: 'arts. 47, 48 y 52'}
  ],

  mapa: [
    {titulo: 'Cap. I · Requisitos de los actos', rango: 'arts. 34-36', items: [
      ['34', 'Producción y contenido'], ['35', 'Motivación'], ['36', 'Forma']
    ]},
    {titulo: 'Cap. II · Eficacia de los actos', rango: 'arts. 37-46', items: [
      ['37', 'Inderogabilidad singular'], ['38', 'Ejecutividad'], ['39', 'Efectos'],
      ['40', 'Notificación'], ['41', 'Condiciones generales de las notificaciones'],
      ['42', 'Notificaciones en papel'], ['43', 'Notificaciones electrónicas'],
      ['44', 'Notificación infructuosa'], ['45', 'Publicación'],
      ['46', 'Indicación de notificaciones y publicaciones']
    ]},
    {titulo: 'Cap. III · Nulidad y anulabilidad', rango: 'arts. 47-52', items: [
      ['47', 'Nulidad de pleno derecho'], ['48', 'Anulabilidad'],
      ['49', 'Límites a la extensión de la nulidad o anulabilidad'], ['50', 'Conversión de actos viciados'],
      ['51', 'Conservación de actos y trámites'], ['52', 'Convalidación']
    ]}
  ],

  cifras: [
    {v: '9', d: 'Supuestos de actos que deben motivarse (letras a a i)', a: 'art. 35.1'},
    {v: '10 días', d: 'Para cursar la notificación desde que se dicta el acto {{examen:2025}}', a: 'art. 40.2'},
    {v: '14 años', d: 'Edad mínima de quien recoge en el domicilio una notificación en papel', a: 'art. 42.2'},
    {v: '3 días', d: 'Plazo para el segundo y único intento de notificación en papel', a: 'art. 42.2'},
    {v: '15 horas', d: 'Si el primer intento fue antes, el segundo va después, y viceversa', a: 'art. 42.2'},
    {v: '3 horas', d: 'Margen mínimo entre los dos intentos', a: 'art. 42.2'},
    {v: '10 días naturales', d: 'Sin acceder a la notificación electrónica obligatoria o elegida: se entiende rechazada', a: 'art. 43.2'},
    {v: '7', d: 'Causas de nulidad de pleno derecho de los actos (letras a a g)', a: 'art. 47.1'}
  ],

  secciones: [
    {titulo: 'Requisitos: producción, motivación y forma', a: 'arts. 34-36', bloques: [
      {tipo: 'lista', items: [
        {t: 'Se dictan de oficio o a instancia del interesado, por el <b>órgano competente</b>, con los requisitos y el procedimiento establecidos. Contenido conforme al ordenamiento, <b>determinado y adecuado</b> a sus fines.', a: '34'}
      ]},
      {tipo: 'tabla', cab: ['35.1', 'Se motivan, con sucinta referencia de hechos y fundamentos de derecho'], filas: [
        ['a)', 'Los que <b>limiten</b> derechos subjetivos o intereses legítimos'],
        ['b)', 'Los que resuelvan revisión de oficio, <b>recursos</b> administrativos y arbitraje, y los que declaren su inadmisión'],
        ['c)', 'Los que se separen del <b>criterio seguido en actuaciones precedentes</b> o del dictamen de órganos consultivos {{examen:2025}}'],
        ['d)', 'Suspensión de actos, cualquiera que sea el motivo, y medidas provisionales del art. 56'],
        ['e)', 'Tramitación de urgencia, ampliación de plazos y actuaciones complementarias'],
        ['f)', 'Los que <b>rechacen pruebas</b> propuestas por los interesados'],
        ['g)', 'Terminación por imposibilidad material sobrevenida y desistimiento de la Administración en procedimientos de oficio'],
        ['h)', 'Propuestas de resolución sancionadoras y resoluciones sancionadoras o de responsabilidad patrimonial'],
        ['i)', 'Los dictados en ejercicio de <b>potestades discrecionales</b> y los que lo exija una disposición legal o reglamentaria expresa']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Procedimientos <b>selectivos y de concurrencia competitiva</b>: se motiva según las normas de la convocatoria, y deben quedar acreditados los fundamentos.', a: '35.2'},
        {t: 'Forma: <b>por escrito a través de medios electrónicos</b>, salvo que su naturaleza exija otra forma más adecuada.', a: '36.1'},
        {t: 'Acto verbal: la constancia escrita, si hace falta, la hace y firma el titular del órgano inferior o el funcionario que lo recibe. Si son resoluciones, el titular de la competencia autoriza una relación de las dictadas verbalmente.', a: '36.2'},
        {t: 'Serie de actos de la misma naturaleza (nombramientos, concesiones, licencias): pueden <b>refundirse en un único acto</b>.', a: '36.3'}
      ]}
    ]},

    {titulo: 'Eficacia: inderogabilidad, ejecutividad y efectos', a: 'arts. 37-39', bloques: [
      {tipo: 'lista', items: [
        {t: 'Una resolución particular <b>no puede vulnerar</b> una disposición general, <b>aunque</b> proceda de un órgano de igual o superior jerarquía al que la dictó.', a: '37.1', examen: '2025'},
        {t: 'Son <b>nulas</b> las resoluciones que vulneren una disposición reglamentaria y las que incurran en las causas del art. 47.', a: '37.2'},
        {t: 'Los actos sujetos al Derecho Administrativo son <b>ejecutivos</b> conforme a esta Ley.', a: '38'},
        {t: 'Se presumen <b>válidos</b> y producen efectos <b>desde que se dictan</b>, salvo que dispongan otra cosa.', a: '39.1'},
        {t: 'Eficacia <b>demorada</b>: cuando lo exija el contenido del acto o dependa de su notificación, publicación o aprobación superior.', a: '39.2'},
        {t: 'Normas y actos de un órgano en su competencia obligan a los demás, aunque no dependan jerárquicamente o sean de otra Administración.', a: '39.4'},
        {t: 'Si un acto se basa en otro de otra Administración que se considera ilegal: <b>puede requerirla</b> previamente (art. 44 LJCA) y, si rechaza el requerimiento, puede interponer recurso contencioso-administrativo. En estos casos queda <b>suspendido</b> el procedimiento para dictar resolución.', a: '39.5'}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Retroactividad <b>excepcional</b>: cuando el acto sustituye a otro <b>anulado</b> o produce <b>efectos favorables</b> al interesado, si los hechos ya existían en la fecha a la que se retrotrae y no se lesionan derechos o intereses legítimos de otras personas.', a: '39.3'}
      ]}
    ]},

    {titulo: 'Notificación: plazo y contenido', a: 'art. 40', bloques: [
      {tipo: 'lista', items: [
        {t: 'Notifica el <b>órgano que dicta</b> el acto, a los interesados cuyos derechos e intereses resulten afectados.', a: '40.1'},
        {t: 'Se cursa en <b>10 días</b> desde que el acto se dicta. Contiene: <b>texto íntegro</b>, si pone fin o no a la vía administrativa, recursos que procedan en vía administrativa y judicial, órgano ante el que presentarlos y plazo.', a: '40.2', examen: '2025'},
        {t: 'Con texto íntegro pero sin algún otro requisito: surte efecto desde que el interesado realiza actuaciones que suponen <b>conocer</b> el contenido y alcance del acto, <b>o</b> interpone cualquier recurso que proceda.', a: '40.3', examen: '2026'},
        {t: 'A los solos efectos de cumplir la obligación de notificar dentro del plazo máximo de duración del procedimiento, basta la notificación con el <b>texto íntegro</b> y el <b>intento</b> debidamente acreditado.', a: '40.4'},
        {t: 'Con más de un interesado, se pueden adoptar medidas para proteger los datos personales.', a: '40.5'}
      ]}
    ]},

    {titulo: 'Cómo se notifica: reglas generales', a: 'art. 41', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Electrónica · 41.1', items: [
          '<b>Preferente</b>, y en todo caso si el interesado está obligado a recibirla así.'
        ], reglas: [
          'Las Administraciones <b>podrán</b> notificar por medios no electrónicos: si el interesado comparece espontáneamente en la oficina de asistencia en materia de registro y lo pide, o si hace falta la <b>entrega directa</b> de un empleado público.',
          'Quien no está obligado puede decidir en cualquier momento que se le notifique o se le deje de notificar electrónicamente.',
          'Un reglamento puede imponerla a colectivos de personas físicas con acceso acreditado a medios electrónicos.'
        ]},
        {titulo: 'Nunca electrónica · 41.2', items: [
          'Acto acompañado de elementos no convertibles a formato electrónico.',
          'Las que contienen <b>medios de pago</b> a favor de los obligados, como cheques.'
        ], reglas: [
          'Cualquier medio vale si deja constancia del envío o puesta a disposición, la recepción o acceso, fechas y horas, contenido íntegro e identidad de remitente y destinatario (41.1).'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'A solicitud del interesado: por el <b>medio que él señale</b> (electrónico si está obligado). Si no es posible, en cualquier lugar adecuado y por cualquier medio que deje constancia.', a: '41.3'},
        {t: 'De oficio: <b>solo para iniciar</b>, se puede consultar en el INE el domicilio del Padrón.', a: '41.4'},
        {t: 'Si se <b>rechaza</b>, se hace constar y se da por efectuado el trámite.', a: '41.5'},
        {t: 'El <b>aviso</b> al dispositivo o correo electrónico informa de la puesta a disposición; ese correo no sirve para practicar la notificación. Si falta el aviso, la notificación sigue siendo <b>válida</b>.', a: '41.1 y 41.6'},
        {t: 'Notificado por varios cauces: vale la fecha de la <b>primera</b>.', a: '41.7'}
      ]}
    ]},

    {titulo: 'Notificación en papel y electrónica', a: 'arts. 42-43', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Papel · art. 42', reglas: [
          'Toda notificación en papel se pone también a disposición en la <b>sede electrónica</b>.',
          'Si el interesado no está, puede recogerla cualquier persona <b>mayor de 14 años</b> que esté en el domicilio y haga constar su identidad.',
          'Si nadie la recoge: constancia de día y hora y <b>un solo intento más</b>, a hora distinta, en los <b>3 días siguientes</b>. Antes de las 15 h el primero, después el segundo (y viceversa), con <b>3 horas</b> de margen mínimo.',
          'Si el segundo intento falla: notificación infructuosa (art. 44).'
        ]},
        {titulo: 'Electrónica · art. 43', reglas: [
          'Por <b>comparecencia en la sede electrónica</b>, por la <b>dirección electrónica habilitada única</b> o por ambas.',
          'Comparecer es que el interesado o su representante, identificado, <b>accede</b> al contenido.',
          'Se entiende practicada en el <b>momento del acceso</b>.',
          'Obligatoria o elegida: <b>rechazada</b> a los <b>10 días naturales</b> desde la puesta a disposición sin acceso.',
          'La puesta a disposición en la sede o en la dirección electrónica habilitada única cumple la obligación del 40.4 (notificar dentro del plazo máximo).'
        ]}
      ]},
      {tipo: 'ejemplo', t: 'Primer intento en papel el lunes a las 10:00 y no hay nadie en casa. El segundo intento se hace dentro de los tres días siguientes y después de las 15:00, por ejemplo el martes a las 17:00. Si también falla, se publica un anuncio en el BOE.'}
    ]},

    {titulo: 'Notificación infructuosa y publicación', a: 'arts. 44-46', bloques: [
      {tipo: 'lista', items: [
        {t: 'Interesados desconocidos, lugar ignorado o intento fallido: anuncio en el <b>«Boletín Oficial del Estado»</b>.', a: '44'},
        {t: 'Antes, y de forma <b>facultativa</b>: boletín de la Comunidad Autónoma o de la Provincia, tablón de edictos del Ayuntamiento del último domicilio, o Consulado o Sección Consular.', a: '44'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Publicación obligatoria · 45.1', items: [
          'Acto dirigido a una <b>pluralidad indeterminada</b> de personas, o notificación a uno solo insuficiente (aquí, además de la individual).',
          'Actos de procedimientos <b>selectivos o de concurrencia competitiva</b>: la convocatoria fija el medio; las publicaciones en otro lugar no son válidas.'
        ], reglas: ['En estos casos la publicación <b>surte los efectos de la notificación</b>. Lleva los mismos elementos que exige el 40.2 (45.2).']},
        {titulo: 'Dónde y cómo · 45.3-46', items: [
          'En el <b>diario oficial</b> que corresponda a la Administración que dicta el acto.',
          'Lo que deba ir al tablón de anuncios o edictos se cumple con la publicación en el Diario oficial.',
          'Actos con elementos comunes: los aspectos coincidentes <b>pueden</b> publicarse juntos (45.2).'
        ], reglas: ['Si publicar lesiona derechos o intereses legítimos: solo una <b>somera indicación</b> del contenido y del lugar para comparecer (46).']}
      ]}
    ]},

    {titulo: 'Nulidad y anulabilidad', a: 'arts. 47-48', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Nulos de pleno derecho · 47.1', items: [
          'a) Lesionan derechos y libertades susceptibles de <b>amparo constitucional</b>.',
          'b) Órgano <b>manifiestamente incompetente</b> por razón de la <b>materia o del territorio</b>.',
          'c) Contenido <b>imposible</b>.',
          'd) Constitutivos de <b>infracción penal</b> o dictados como consecuencia de ella.',
          'e) Prescindiendo <b>total y absolutamente</b> del procedimiento, o de las reglas esenciales para formar la voluntad de los órganos colegiados.',
          'f) Actos expresos o presuntos por los que se adquieren facultades o derechos sin los <b>requisitos esenciales</b>.',
          'g) Cualquier otro que fije una disposición <b>con rango de Ley</b>.'
        ]},
        {titulo: 'Anulables · 48', items: [
          'Cualquier <b>infracción del ordenamiento</b>, incluso la <b>desviación de poder</b> {{examen:2025}}.',
          '<b>Defecto de forma</b>: solo si el acto carece de los requisitos formales indispensables para su fin <b>o</b> da lugar a <b>indefensión</b> {{examen:2026}}.',
          '<b>Fuera de plazo</b>: solo si lo impone la naturaleza del término o plazo.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Disposiciones nulas: las que vulneren la Constitución, las leyes u otras disposiciones de rango superior, regulen materias reservadas a la Ley o establezcan la retroactividad de disposiciones sancionadoras no favorables o restrictivas de derechos individuales.', a: '47.2'}
      ]}
    ]},

    {titulo: 'Cómo se limitan y salvan los actos viciados', a: 'arts. 49-52', bloques: [
      {tipo: 'tabla', cab: ['Figura', 'Regla'], filas: [
        ['Límites · 49', 'El vicio de un acto no alcanza a los sucesivos <b>independientes</b>. El vicio de una parte no alcanza a las partes independientes, salvo que sin ella el acto no se hubiera dictado.'],
        ['Conversión · 50', 'El acto nulo o anulable que contenga los elementos de <b>otro distinto</b> produce los efectos de este.'],
        ['Conservación · 51', 'Quien declara la nulidad o anula dispone <b>siempre</b> la conservación de actos y trámites cuyo contenido no habría cambiado sin la infracción.'],
        ['Convalidación · 52', 'La Administración puede convalidar los actos <b>anulables</b>, subsanando sus vicios. Efecto desde su fecha, salvo el 39.3.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Incompetencia no determinante de nulidad: convalida el órgano competente si es <b>superior jerárquico</b> del que dictó el acto.', a: '52.3'},
        {t: 'Falta de una autorización: se convalida otorgándola el órgano competente.', a: '52.4'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'El art. 35.1.c habla del dictamen <i>preceptivo</i> de órganos consultivos', ok: 'Dice solo «del dictamen de órganos consultivos», sin «preceptivo». En la P13 de 2025, la opción que reproducía el texto era la del criterio seguido en actuaciones precedentes. {{examen:2025}}', a: '35.1.c'},
    {x: 'Un órgano superior puede dictar una resolución particular que se aparte de un reglamento', ok: 'No, aunque sea de igual o superior jerarquía al que dictó la disposición general.', a: '37.1'},
    {x: 'La notificación se cursa en 15 días', ok: 'En 10 días desde que se dicta el acto.', a: '40.2'},
    {x: 'Sin indicación de recursos, la notificación nunca produce efectos', ok: 'Si contiene el texto íntegro, los produce desde que el interesado actúa conociendo el acto o recurre.', a: '40.3'},
    {x: 'En papel puede recoger la notificación cualquier persona del domicilio', ok: 'Mayor de 14 años y que haga constar su identidad.', a: '42.2'},
    {x: 'La notificación electrónica se entiende rechazada a los 10 días hábiles', ok: 'A los 10 días naturales desde la puesta a disposición.', a: '43.2'},
    {x: 'Si la notificación es infructuosa basta el anuncio en el boletín de la provincia', ok: 'El anuncio en el BOE es obligatorio; el de la provincia es previo y facultativo.', a: '44'},
    {x: 'La desviación de poder es causa de nulidad de pleno derecho', ok: 'Es anulabilidad. {{examen:2025}}', a: '48.1'},
    {x: 'El defecto de forma solo anula cuando faltan requisitos formales indispensables', ok: 'También cuando produce indefensión. Y da anulabilidad, no nulidad. {{examen:2026}}', a: '48.2'},
    {x: 'Todo acto de un órgano incompetente es nulo de pleno derecho', ok: 'Solo si es manifiestamente incompetente por materia o territorio. Si no, es anulable y puede convalidarlo el órgano competente cuando sea superior jerárquico del que lo dictó.', a: '47.1.b y 52.3'}
  ],

  examenes: [
    'Art. 35.1.c (separarse del criterio de actuaciones precedentes): examen oficial 1-jun-2025, pregunta 13.',
    'Arts. 47 y 48 (la infracción del ordenamiento y la desviación de poder no son nulidad): examen oficial 1-jun-2025, pregunta 21.',
    'Art. 37.1 (inderogabilidad singular, «aunque» proceda de órgano de igual o superior jerarquía): examen oficial 1-jun-2025, pregunta 47.',
    'Art. 40.2 (plazo y contenido de la notificación): examen oficial 1-jun-2025, pregunta 48. La opción a) del cuestionario decía «quince días»; el art. 40.2 vigente dice <b>diez días</b>.',
    'Art. 40.3 (notificación con texto íntegro a la que faltan otros requisitos): examen oficial 31-may-2026, pregunta 35.',
    'Art. 48.2 (defecto de forma): examen oficial 31-may-2026, pregunta 38.'
  ]
});
