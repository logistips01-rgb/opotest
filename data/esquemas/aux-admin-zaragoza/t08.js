/* Esquema · Auxiliar Administrativo · Tema 8
   Fuente única: Ley 39/2015, texto consolidado BOE-A-2015-10565, arts. 106-126.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 8, {
  titulo: 'LPAC (V): revisión de los actos en vía administrativa',
  epigrafe: 'La Ley del Procedimiento Administrativo Común de las Administraciones Públicas (V): revisión de los actos en vía administrativa. Revisión de oficio y recursos administrativos.',
  etiquetas: ['Ley 39/2015 · arts. 106 a 126', 'Título V'],
  fuentes: ['Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. Texto consolidado BOE-A-2015-10565, arts. 106 a 126.'],

  esencial: [
    {t: 'Actos <b>nulos</b> (art. 47.1): la Administración declara la nulidad <b>en cualquier momento</b>, de oficio o a solicitud, con <b>dictamen favorable</b> del Consejo de Estado u órgano consultivo autonómico.', a: 'art. 106.1'},
    {t: 'Actos <b>favorables anulables</b>: la Administración los declara <b>lesivos</b> (no después de 4 años desde que se dictó el acto) y después los impugna ante lo contencioso-administrativo.', a: 'art. 107'},
    {t: '<b>Alzada</b>: contra actos que no ponen fin a la vía administrativa; resuelve el superior jerárquico. <b>Reposición</b>: potestativa, contra actos que sí la ponen; resuelve el mismo órgano.', a: 'arts. 121 y 123'},
    {t: 'Alzada y reposición: <b>1 mes</b> contra acto expreso. Resolver: alzada <b>3 meses</b>, reposición <b>1 mes</b>. Revisión extraordinaria: <b>4 años</b> o <b>3 meses</b> según la causa.', a: 'arts. 122, 124 y 125'},
    {t: 'Recurrir <b>no suspende</b> la ejecución, salvo disposición en contrario. La resolución del recurso <b>nunca puede agravar</b> la situación inicial del recurrente.', a: 'arts. 117.1 y 119.3'}
  ],

  mapa: [
    {titulo: 'Cap. I · Revisión de oficio', rango: 'arts. 106-111', items: [
      ['106', 'Revisión de disposiciones y actos nulos'], ['107', 'Declaración de lesividad de actos anulables'],
      ['108', 'Suspensión'], ['109', 'Revocación y rectificación de errores'], ['110', 'Límites de la revisión'],
      ['111', 'Competencia en la Administración General del Estado']
    ]},
    {titulo: 'Cap. II · Recursos: principios generales', rango: 'arts. 112-120', items: [
      ['112', 'Objeto y clases'], ['113', 'Recurso extraordinario de revisión'], ['114', 'Fin de la vía administrativa'],
      ['115', 'Interposición'], ['116', 'Causas de inadmisión'], ['117', 'Suspensión de la ejecución'],
      ['118', 'Audiencia de los interesados'], ['119', 'Resolución'], ['120', 'Pluralidad de recursos']
    ]},
    {titulo: 'Cap. II · Los tres recursos', rango: 'arts. 121-126', items: [
      ['121', 'Alzada: objeto'], ['122', 'Alzada: plazos'], ['123', 'Reposición: objeto y naturaleza'],
      ['124', 'Reposición: plazos'], ['125', 'Revisión extraordinaria: objeto y plazos'], ['126', 'Revisión extraordinaria: resolución']
    ]}
  ],

  cifras: [
    {v: '6 meses', d: 'Caducidad de la revisión de nulidad iniciada de oficio', a: 'art. 106.5'},
    {v: '4 años', d: 'Desde que se dictó el acto, límite para declararlo lesivo', a: 'art. 107.2'},
    {v: '6 meses', d: 'Caducidad del procedimiento de lesividad', a: 'art. 107.3'},
    {v: '1 mes', d: 'Sin resolver la petición de suspensión: la ejecución se entiende suspendida', a: 'art. 117.3'},
    {v: '10 a 15 días', d: 'Audiencia en el recurso cuando hay hechos o documentos nuevos', a: 'art. 118.1'},
    {v: '10 días', d: 'Para remitir la alzada presentada ante el órgano que dictó el acto', a: 'art. 121.2'},
    {v: '1 mes', d: 'Para interponer alzada o reposición contra un acto expreso', a: 'arts. 122.1 y 124.1'},
    {v: '3 meses', d: 'Para resolver y notificar la alzada', a: 'art. 122.2'},
    {v: '1 mes', d: 'Para resolver y notificar la reposición', a: 'art. 124.2'},
    {v: '4 años / 3 meses', d: 'Revisión extraordinaria: causa a) / demás causas', a: 'art. 125.2'}
  ],

  secciones: [
    {titulo: 'Nulidad y lesividad', a: 'arts. 106-108', bloques: [
      {tipo: 'tabla', cab: ['', 'Nulidad · 106', 'Lesividad · 107'], filas: [
        ['Qué actos', 'Nulos de pleno derecho (art. 47.1) que pusieron fin a la vía administrativa o no se recurrieron en plazo. También disposiciones nulas (art. 47.2), solo de oficio.', '<b>Favorables</b> para los interesados y <b>anulables</b> (art. 48).'],
        ['Cuándo', '<b>En cualquier momento</b>.', 'No después de <b>4 años</b> desde que se dictó el acto.'],
        ['Cómo', 'Por iniciativa propia o a solicitud de interesado. Previo <b>dictamen favorable</b> del Consejo de Estado u órgano consultivo autonómico, si lo hubiere.', 'Declaración de lesividad con <b>audiencia previa</b> de los interesados; después, impugnación ante lo <b>contencioso-administrativo</b>.'],
        ['Sin resolver', 'Iniciado de oficio: <b>caducidad a los 6 meses</b>. A solicitud: puede entenderse <b>desestimada</b> por silencio.', '<b>Caducidad</b> a los 6 meses desde la iniciación.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Se pueden <b>inadmitir</b> solicitudes de nulidad sin pedir dictamen si no se basan en el art. 47.1, carecen manifiestamente de fundamento o ya se desestimaron en cuanto al fondo otras sustancialmente iguales.', a: '106.3'},
        {t: 'Al declarar la nulidad se pueden fijar <b>indemnizaciones</b>. Anulada una disposición, subsisten los actos firmes dictados en su aplicación.', a: '106.4'},
        {t: 'La declaración de lesividad <b>no es recurrible</b>; puede notificarse a efectos informativos.', a: '107.2'},
        {t: 'Lesividad de actos de una <b>entidad local</b>: la declara el <b>Pleno</b> de la Corporación o, en su defecto, el órgano colegiado superior. AGE y CCAA: el órgano competente en la materia.', a: '107.4-5'},
        {t: 'Iniciada la revisión, el órgano competente puede <b>suspender</b> la ejecución si causaría perjuicios de imposible o difícil reparación.', a: '108'}
      ]}
    ]},

    {titulo: 'Revocación, rectificación y límites', a: 'arts. 109-111', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Revocación · 109.1', reglas: [
          'Solo actos <b>de gravamen o desfavorables</b>.',
          'Mientras no haya transcurrido el <b>plazo de prescripción</b>.',
          'Sin dispensa o exención no permitida por las leyes, ni contraria a la igualdad, al interés público o al ordenamiento.'
        ]},
        {titulo: 'Rectificación de errores · 109.2', reglas: [
          'Errores <b>materiales, de hecho o aritméticos</b>.',
          '<b>En cualquier momento</b>.',
          '<b>De oficio o a instancia de los interesados</b> {{examen:2025}}.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Límites: no se revisa cuando, por prescripción, tiempo transcurrido u otras circunstancias, sería contrario a la <b>equidad, la buena fe, el derecho de los particulares o las leyes</b>.', a: '110'},
        {t: 'El art. 111 fija la competencia solo en el <b>ámbito estatal</b> (Consejo de Ministros, Ministros, Secretarios de Estado y organismos públicos).', a: '111'}
      ]}
    ]},

    {titulo: 'Recursos: objeto, clases y fin de la vía administrativa', a: 'arts. 112-114', bloques: [
      {tipo: 'lista', items: [
        {t: 'Recurribles: <b>resoluciones</b> y actos de trámite <b>cualificados</b> (deciden el fondo, impiden continuar, producen indefensión o perjuicio irreparable). Motivos: nulidad o anulabilidad (arts. 47 y 48).', a: '112.1'},
        {t: 'Resto de actos de trámite: la oposición se alega para la resolución que pone fin al procedimiento.', a: '112.1'},
        {t: 'Contra <b>disposiciones de carácter general</b> no cabe recurso en vía administrativa.', a: '112.3'},
        {t: 'Las leyes pueden sustituir la alzada, y la reposición respetando su carácter potestativo, por impugnación, reclamación, conciliación, mediación o arbitraje ante órganos colegiados o comisiones no sometidos a instrucciones jerárquicas.', a: '112.2'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Ponen fin a la vía administrativa · 114.1', items: [
          'Resoluciones de los recursos de <b>alzada</b>',
          'Resoluciones de los procedimientos sustitutivos del art. 112.2',
          'Resoluciones de órganos <b>sin superior jerárquico</b>, salvo ley',
          'Acuerdos, pactos, convenios o contratos finalizadores',
          'Resoluciones de <b>responsabilidad patrimonial</b>',
          'Procedimientos complementarios sancionadores (art. 90.4)',
          'Las demás que establezca una disposición legal o reglamentaria'
        ]},
        {titulo: 'Qué recurso cabe', reglas: [
          'Acto que <b>no</b> pone fin a la vía administrativa: <b>alzada</b> (121.1).',
          'Acto que <b>sí</b> pone fin: <b>reposición</b> potestativa o directamente contencioso-administrativo (123.1).',
          'Acto <b>firme</b>: solo el extraordinario de <b>revisión</b>, por las causas del art. 125.1 (113).'
        ]}
      ]}
    ]},

    {titulo: 'Tramitación y resolución del recurso', a: 'arts. 115-120', bloques: [
      {tipo: 'lista', items: [
        {t: 'El escrito expresa: recurrente y su identificación, acto recurrido y razón de la impugnación, lugar, fecha, firma, medio (y lugar) de notificación, órgano destinatario y su código, y las demás particularidades que exijan disposiciones específicas.', a: '115.1'},
        {t: 'El <b>error o la falta de calificación</b> del recurso no impide tramitarlo si se deduce su verdadero carácter.', a: '115.2'},
        {t: 'Quien causó un vicio de anulabilidad no puede alegarlo.', a: '115.3'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Causas de inadmisión · 116', items: [
          'Órgano incompetente, si el competente es de <b>otra Administración</b> (se le remite el recurso)',
          'Falta de <b>legitimación</b> del recurrente {{examen:2025}}',
          'Acto no susceptible de recurso',
          'Plazo de interposición <b>transcurrido</b>',
          'Recurso <b>manifiestamente</b> carente de fundamento'
        ]},
        {titulo: 'Suspensión de la ejecución · 117', reglas: [
          'Regla: recurrir <b>no suspende</b>, excepto cuando una disposición establezca lo contrario {{examen:2026}}.',
          'El órgano que resuelve puede suspender, ponderando los perjuicios, si hay perjuicios de <b>imposible o difícil reparación</b> o se alega <b>nulidad de pleno derecho</b>.',
          'Pedida la suspensión, si en <b>1 mes</b> desde que la solicitud entra en el registro electrónico del competente para decidir no se ha dictado y notificado resolución expresa, se entiende <b>suspendida</b>.',
          'Si la suspensión puede causar perjuicios, solo surte efectos previa <b>caución o garantía</b> suficiente.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Audiencia: solo con <b>hechos o documentos nuevos</b>, en <b>10 a 15 días</b>. El recurso, los informes y las propuestas no son documentos nuevos. A los demás interesados se les da siempre traslado.', a: '118'},
        {t: 'Resolución: estima en todo o en parte, desestima o declara la <b>inadmisión</b>. Vicio de forma: <b>retroacción</b> al momento en que se cometió.', a: '119.1-2'},
        {t: 'Decide todas las cuestiones de forma y fondo, alegadas o no (si no se alegaron, se oye antes a los interesados). Pero es congruente con lo pedido: <b>en ningún caso puede agravar la situación inicial</b> del recurrente {{examen:2025}} {{examen:2026}}.', a: '119.3'},
        {t: 'Varios recursos contra un mismo acto y ya hay recurso judicial: se puede suspender el plazo para resolver hasta el pronunciamiento judicial (acuerdo recurrible).', a: '120'}
      ]}
    ]},

    {titulo: 'Alzada, reposición y revisión: comparativa', a: 'arts. 121-126', bloques: [
      {tipo: 'tabla', cab: ['', 'Alzada', 'Reposición', 'Revisión extraordinaria'], filas: [
        ['Contra', 'Actos que <b>no ponen fin</b> a la vía administrativa', 'Actos que <b>ponen fin</b> a la vía administrativa. Es <b>potestativo</b>', 'Actos <b>firmes</b> en vía administrativa, solo por las causas del art. 125.1'],
        ['Ante quién', 'Se presenta ante el órgano que dictó el acto o ante el <b>superior jerárquico</b>, que resuelve', 'El <b>mismo órgano</b> que dictó el acto', 'El <b>órgano que dictó</b> el acto, que también resuelve'],
        ['Plazo para recurrir', 'Acto expreso: <b>1 mes</b>; pasado, resolución <b>firme</b>. Si no es expreso: <b>en cualquier momento</b> desde el día siguiente a los efectos del silencio', 'Acto expreso: <b>1 mes</b>; pasado, solo contencioso (o revisión, si procede). Si no es expreso: <b>en cualquier momento</b> desde el día siguiente al acto presunto', 'Causa a): <b>4 años</b> desde la notificación {{examen:2026}}. Demás causas: <b>3 meses</b> desde que se conocen los documentos o queda firme la sentencia'],
        ['Plazo para resolver', '<b>3 meses</b>. Si no, puede entenderse desestimado, salvo el caso del art. 24.1, tercer párrafo', '<b>1 mes</b>', '<b>3 meses</b> desde la interposición. Si no, desestimado y queda abierta la vía contencioso-administrativa'],
        ['Después', 'Ningún recurso administrativo, salvo el extraordinario de revisión', 'No cabe otra reposición. Contencioso cuando se resuelva o se desestime presuntamente', 'Vía contencioso-administrativa']
      ]},
      {tipo: 'lista', items: [
        {t: 'Alzada presentada ante el órgano que dictó el acto: lo remite al competente en <b>10 días</b>, con su informe y copia completa y ordenada del expediente.', a: '121.2'},
        {t: 'Tribunales y órganos de selección de personal (y otros con autonomía funcional): a efectos de la <b>alzada</b>, se consideran dependientes del órgano al que estén adscritos o, en su defecto, del que nombró a su presidente.', a: '121.1'},
        {t: 'Interpuesta la reposición, <b>no</b> se puede ir al contencioso hasta que se resuelva expresamente o se produzca la desestimación presunta.', a: '123.2'}
      ]},
      {tipo: 'ejemplo', t: 'Un acto que pone fin a la vía administrativa se notifica al interesado. Puede elegir: reposición en 1 mes ante el mismo órgano, o ir directamente al contencioso. Si elige la reposición, espera a que se resuelva o a que pase 1 mes sin resolución para acudir al contencioso.'}
    ]},

    {titulo: 'Recurso extraordinario de revisión', a: 'arts. 125-126', bloques: [
      {tipo: 'lista', tinte: true, items: [
        {t: '<b>a)</b> <b>Error de hecho</b> que resulte de los propios documentos del expediente.', a: '125.1.a'},
        {t: '<b>b)</b> Aparecen <b>documentos de valor esencial</b>, aunque sean posteriores, que evidencian el error.', a: '125.1.b'},
        {t: '<b>c)</b> Influyeron esencialmente documentos o testimonios declarados <b>falsos por sentencia judicial firme</b>.', a: '125.1.c'},
        {t: '<b>d)</b> Resolución dictada por <b>prevaricación, cohecho, violencia, maquinación fraudulenta</b> u otra conducta punible declarada por sentencia judicial firme.', a: '125.1.d'}
      ]},
      {tipo: 'lista', items: [
        {t: 'Plazo: causa a), <b>4 años</b> desde la notificación de la resolución impugnada {{examen:2026}}; demás causas, <b>3 meses</b> desde el conocimiento de los documentos o desde la firmeza de la sentencia.', a: '125.2'},
        {t: 'No impide pedir la revisión de oficio de actos nulos (art. 106) ni la rectificación de errores (art. 109.2).', a: '125.3'},
        {t: 'Se puede <b>inadmitir</b> sin dictamen si no se funda en las causas del 125.1 o ya se desestimaron en cuanto al fondo recursos sustancialmente iguales.', a: '126.1'},
        {t: 'El órgano se pronuncia sobre la procedencia del recurso y, en su caso, sobre el <b>fondo</b>. Pasados <b>3 meses</b> desde la interposición sin resolución notificada, se entiende desestimado y queda expedita la vía contencioso-administrativa.', a: '126.2-3'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'Los errores materiales solo se rectifican mientras no haya prescrito', ok: 'Se rectifican en cualquier momento, de oficio o a instancia. El límite de la prescripción es para la revocación.', a: '109'},
    {x: 'La Administración puede revocar sus actos favorables', ok: 'Solo revoca actos de gravamen o desfavorables.', a: '109.1'},
    {x: 'En un ayuntamiento, la lesividad la declara el Alcalde', ok: 'La declara el Pleno de la Corporación.', a: '107.5'},
    {x: 'Contra un reglamento cabe recurso de alzada', ok: 'Contra disposiciones de carácter general no cabe recurso en vía administrativa.', a: '112.3'},
    {x: 'Recurrir suspende la ejecución del acto', ok: 'No la suspende, excepto cuando una disposición establezca lo contrario.', a: '117.1'},
    {x: 'La falta de legitimación lleva a desestimar el recurso', ok: 'Es causa de inadmisión.', a: '116.b'},
    {x: 'La reposición se presenta ante el superior jerárquico', ok: 'Ante el mismo órgano que dictó el acto. El superior jerárquico resuelve la alzada.', a: '121.1 y 123.1'},
    {x: 'Alzada y reposición se resuelven en 1 mes', ok: 'Alzada: 3 meses. Reposición: 1 mes.', a: '122.2 y 124.2'},
    {x: 'Contra la resolución de una alzada cabe reposición', ok: 'No cabe ningún otro recurso administrativo, salvo el extraordinario de revisión en los casos del art. 125.1.', a: '122.3'},
    {x: 'Revisión por error de hecho: 4 años desde que se conoce el error', ok: '4 años desde la notificación de la resolución impugnada.', a: '125.2'}
  ],

  examenes: [
    'Art. 109.2 (rectificación de errores de oficio o a instancia de los interesados): examen oficial 1-jun-2025, pregunta 39.',
    'Art. 116 (falta de legitimación: causa de inadmisión): examen oficial 1-jun-2025, pregunta 40.',
    'Art. 119.3 (la resolución no puede agravar en ningún caso la situación inicial del recurrente): examen oficial 1-jun-2025, pregunta 49.',
    'Art. 125.2 (error de hecho: 4 años desde la notificación de la resolución): examen oficial 31-may-2026, pregunta 16.',
    'Art. 119.3: examen oficial 31-may-2026, pregunta 26. Ojo: la plantilla oficial dio por buena la opción a), «si la propuesta de resolución de un recurso agrava la situación inicial del recurrente se le oirá previamente». El texto literal dice que sobre las cuestiones no alegadas por los interesados «se les oirá previamente» y que la resolución será congruente con las peticiones del recurrente, «sin que en ningún caso pueda agravarse su situación inicial» (opción b). El esquema sigue la ley.',
    'Art. 117.1 (el recurso no suspende la ejecución, excepto si una disposición establece lo contrario): examen oficial 31-may-2026, pregunta 34.'
  ]
});
