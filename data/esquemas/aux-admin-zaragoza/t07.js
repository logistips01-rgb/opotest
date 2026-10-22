/* Esquema · Auxiliar Administrativo · Tema 7
   Fuente única: Ley 39/2015, texto consolidado BOE-A-2015-10565, arts. 53-105.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 7, {
  titulo: 'LPAC (IV): procedimiento administrativo común',
  epigrafe: 'La Ley del Procedimiento Administrativo Común de las Administraciones Públicas (IV): disposiciones sobre el procedimiento administrativo común (iniciación, ordenación, instrucción, finalización y ejecución).',
  etiquetas: ['Ley 39/2015 · arts. 53 a 105', 'Título IV'],
  fuentes: ['Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. Texto consolidado BOE-A-2015-10565, arts. 53 a 105.'],

  esencial: [
    {t: 'El procedimiento se inicia <b>de oficio</b> o <b>a solicitud</b> del interesado. De oficio: por propia iniciativa, orden superior, petición razonada de otros órganos o denuncia.', a: 'arts. 54 y 58'},
    {t: 'Solicitud incompleta: <b>10 días</b> para subsanar o se le tiene por <b>desistido</b>. Ampliable hasta 5 días, salvo en procedimientos selectivos o de concurrencia competitiva.', a: 'art. 68'},
    {t: 'Alegaciones: en cualquier momento <b>anterior al trámite de audiencia</b>. Audiencia: <b>10 a 15 días</b>, inmediatamente antes de redactar la propuesta de resolución.', a: 'arts. 76 y 82'},
    {t: 'Ponen fin al procedimiento: <b>resolución, desistimiento, renuncia y caducidad</b>. También la imposibilidad material de continuarlo por causas sobrevenidas.', a: 'art. 84'},
    {t: 'Tramitación simplificada: resolver en <b>30 días</b>, salvo que reste menos para la ordinaria. Los actos son <b>inmediatamente ejecutivos</b>, salvo las excepciones del art. 98.1.', a: 'arts. 96 y 98'}
  ],

  mapa: [
    {titulo: 'Cap. I · Garantías del procedimiento', rango: 'art. 53', items: [
      ['53', 'Derechos del interesado']
    ]},
    {titulo: 'Cap. II · Iniciación', rango: 'arts. 54-69', items: [
      ['54', 'Clases de iniciación'], ['55', 'Información y actuaciones previas'], ['56', 'Medidas provisionales'],
      ['57', 'Acumulación'], ['58', 'Iniciación de oficio'], ['59', 'Propia iniciativa'], ['60', 'Orden superior'],
      ['61', 'Petición razonada'], ['62', 'Denuncia'], ['63', 'Sancionadores: especialidades'],
      ['64', 'Sancionadores: acuerdo de iniciación'], ['65', 'Responsabilidad patrimonial de oficio'],
      ['66', 'Solicitudes'], ['67', 'Solicitudes de responsabilidad patrimonial'], ['68', 'Subsanación y mejora'],
      ['69', 'Declaración responsable y comunicación']
    ]},
    {titulo: 'Cap. III · Ordenación', rango: 'arts. 70-74', items: [
      ['70', 'Expediente administrativo'], ['71', 'Impulso'], ['72', 'Concentración de trámites'],
      ['73', 'Cumplimiento de trámites'], ['74', 'Cuestiones incidentales']
    ]},
    {titulo: 'Cap. IV · Instrucción', rango: 'arts. 75-83', items: [
      ['75', 'Actos de instrucción'], ['76', 'Alegaciones'], ['77', 'Medios y período de prueba'],
      ['78', 'Práctica de prueba'], ['79', 'Petición de informes'], ['80', 'Emisión de informes'],
      ['81', 'Informes en responsabilidad patrimonial'], ['82', 'Trámite de audiencia'], ['83', 'Información pública']
    ]},
    {titulo: 'Cap. V · Finalización', rango: 'arts. 84-95', items: [
      ['84', 'Terminación'], ['85', 'Terminación en sancionadores'], ['86', 'Terminación convencional'],
      ['87', 'Actuaciones complementarias'], ['88', 'Contenido de la resolución'], ['89', 'Propuesta en sancionadores'],
      ['90', 'Resolución en sancionadores'], ['91', 'Resolución en responsabilidad patrimonial'],
      ['92', 'Competencia en responsabilidad patrimonial'], ['93', 'Desistimiento por la Administración'],
      ['94', 'Desistimiento y renuncia del interesado'], ['95', 'Caducidad']
    ]},
    {titulo: 'Cap. VI · Tramitación simplificada', rango: 'art. 96', items: [
      ['96', 'Tramitación simplificada']
    ]},
    {titulo: 'Cap. VII · Ejecución', rango: 'arts. 97-105', items: [
      ['97', 'Título'], ['98', 'Ejecutoriedad'], ['99', 'Ejecución forzosa'], ['100', 'Medios de ejecución forzosa'],
      ['101', 'Apremio sobre el patrimonio'], ['102', 'Ejecución subsidiaria'], ['103', 'Multa coercitiva'],
      ['104', 'Compulsión sobre las personas'], ['105', 'Prohibición de acciones posesorias']
    ]}
  ],

  cifras: [
    {v: '15 días', d: 'Para confirmar, modificar o levantar en el acuerdo de iniciación las medidas provisionales previas', a: 'art. 56.2'},
    {v: '10 días', d: 'Para subsanar la solicitud (ampliable hasta 5 días, salvo selectivos o concurrencia competitiva)', a: 'art. 68'},
    {v: '10 días', d: 'Plazo general de los trámites que deben cumplimentar los interesados', a: 'art. 73.1'},
    {v: '10 a 30 días', d: 'Período de prueba. El extraordinario, no más de 10 días', a: 'art. 77.2'},
    {v: '10 días', d: 'Para emitir informes, salvo otro plazo', a: 'art. 80.2'},
    {v: '10 a 15 días', d: 'Trámite de audiencia', a: 'art. 82.2'},
    {v: '20 días', d: 'Mínimo para alegar en información pública', a: 'art. 83.2'},
    {v: '20 %', d: 'Reducción mínima por reconocer la responsabilidad o pagar voluntariamente (sanción solo pecuniaria)', a: 'art. 85.3'},
    {v: '3 meses', d: 'Paralización por causa del interesado que lleva a la caducidad, previa advertencia', a: 'art. 95.1'},
    {v: '30 días', d: 'Para resolver en tramitación simplificada, salvo que reste menos para la ordinaria', a: 'art. 96.6'}
  ],

  secciones: [
    {titulo: 'Derechos del interesado', a: 'art. 53', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Todo interesado · 53.1', items: [
          'Conocer en cualquier momento el <b>estado de la tramitación</b>, el sentido del silencio, el órgano competente y los actos de trámite; acceder a los documentos y obtener <b>copia</b>.',
          'Identificar a las autoridades y al personal que tramita.',
          'No presentar <b>originales</b>, salvo excepción normativa (y entonces, derecho a copia autenticada).',
          'No presentar datos y documentos no exigidos o que <b>ya tenga la Administración</b>.',
          'Alegar y aportar documentos en cualquier fase <b>anterior al trámite de audiencia</b>.',
          'Información y orientación; actuar <b>asistido de asesor</b>; pagar por medios electrónicos.'
        ]},
        {titulo: 'Presunto responsable (sancionador) · 53.2', reglas: [
          'Ser <b>notificado</b> de los hechos, las infracciones y las posibles sanciones, y de la identidad del instructor, de la autoridad competente para sancionar y de la norma que le da la competencia.',
          '<b>Presunción de no existencia de responsabilidad</b> mientras no se demuestre lo contrario.'
        ]}
      ]}
    ]},

    {titulo: 'Iniciación de oficio y medidas provisionales', a: 'arts. 54-65', bloques: [
      {tipo: 'tabla', cab: ['De oficio por', 'Qué es'], filas: [
        ['Propia iniciativa (59)', 'Conocimiento directo o indirecto de los hechos por el órgano que tiene la competencia de iniciación.'],
        ['Orden superior (60)', 'La emite un órgano <b>superior jerárquico</b> del competente para iniciar.'],
        ['Petición razonada (61)', 'Propuesta de un órgano <b>sin competencia</b> para iniciar que conoce los hechos. <b>No vincula</b>, pero hay que comunicarle los motivos si no se inicia.'],
        ['Denuncia (62)', 'Cualquier persona, cumpla o no una obligación legal, comunica un hecho. <b>No da por sí sola la condición de interesado</b>.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Antes de iniciar, el órgano competente puede abrir un período de <b>información o actuaciones previas</b>.', a: '55.1'},
        {t: 'Sancionadores: <b>siempre de oficio</b>, con separación entre fase instructora y sancionadora, encomendadas a <b>órganos distintos</b>. Nunca sanción sin procedimiento.', a: '63.1-2'},
        {t: 'Si el inculpado no alega sobre el acuerdo de iniciación, este puede valer como <b>propuesta de resolución</b> cuando se pronuncia con precisión sobre la responsabilidad.', a: '64.2.f'},
        {t: 'Denunciante que participó en la infracción: <b>exención</b> si es el primero en aportar pruebas (con requisitos); si no, <b>reducción</b> cuando aporta un valor añadido significativo.', a: '62.4'},
        {t: 'Responsabilidad patrimonial de oficio: solo si no ha prescrito el derecho a reclamar; los lesionados tienen <b>10 días</b> para alegar.', a: '65'},
        {t: 'Acumulación: de oficio o a instancia de parte, con identidad sustancial o íntima conexión y mismo órgano para tramitar y resolver. <b>No cabe recurso</b>.', a: '57'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Medidas provisionales: ya iniciado · 56.1', reglas: [
          'Las adopta el órgano competente <b>para resolver</b>, de oficio o a instancia de parte, motivadamente.',
          'Principios de proporcionalidad, efectividad y menor onerosidad.'
        ]},
        {titulo: 'Medidas provisionales: antes de iniciar · 56.2', reglas: [
          'Solo en <b>urgencia inaplazable</b>. Las adopta el órgano competente para <b>iniciar o instruir</b>.',
          'Se confirman, modifican o levantan en el acuerdo de iniciación, que debe dictarse dentro de los <b>15 días</b> siguientes a su adopción. Si no, <b>quedan sin efecto</b>.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Prohibidas las que causen perjuicio de <b>difícil o imposible reparación</b> o violen derechos amparados por las leyes.', a: '56.4'},
        {t: 'Se extinguen cuando surte efectos la resolución que pone fin al procedimiento.', a: '56.5'}
      ]}
    ]},

    {titulo: 'Iniciación a solicitud del interesado', a: 'arts. 66-69', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Contenido de la solicitud · 66.1', items: [
          'Nombre y apellidos del interesado y, en su caso, del representante',
          'Medio electrónico o lugar para notificar',
          'Hechos, razones y petición',
          'Lugar y fecha',
          'Firma o acreditación de la voluntad',
          'Órgano, centro o unidad destinataria y su código de identificación'
        ], reglas: ['Pretensiones de varias personas con contenido y fundamento idéntico o sustancialmente similar: <b>pueden</b> formularse en <b>una única solicitud</b>, salvo norma en contrario.']},
        {titulo: 'Subsanación y mejora · 68', reglas: [
          '<b>10 días</b> para subsanar, avisando de que si no, se le tendrá por <b>desistido</b> (previa resolución).',
          'Ampliable <b>hasta 5 días</b>, salvo procedimientos <b>selectivos o de concurrencia competitiva</b>.',
          'Obligado a relacionarse electrónicamente que presenta en persona: se le requiere la subsanación electrónica; vale como fecha de presentación la de la <b>subsanación</b>.'
        ]}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Declaración responsable · 69.1', reglas: [
          'El interesado manifiesta, bajo su responsabilidad, que <b>cumple los requisitos</b>, que tiene la documentación que lo acredita, que la pondrá a disposición y que mantendrá el cumplimiento.'
        ]},
        {titulo: 'Comunicación · 69.2', reglas: [
          'El interesado pone en conocimiento sus <b>datos identificativos</b> u otros datos relevantes para iniciar una actividad o ejercer un derecho.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Ambas permiten el derecho o la actividad <b>desde el día de su presentación</b>, sin perjuicio de comprobación, control e inspección.', a: '69.3'},
        {t: 'Se exige una u otra, <b>nunca las dos</b> acumulativamente.', a: '69.6'},
        {t: 'Inexactitud, falsedad u omisión <b>esencial</b>: impide seguir con la actividad desde que se tiene constancia.', a: '69.4'},
        {t: 'Responsabilidad patrimonial: el derecho a reclamar prescribe al <b>año</b>; en daños físicos o psíquicos, desde la curación o la determinación del alcance de las secuelas.', a: '67.1'}
      ]}
    ]},

    {titulo: 'Ordenación', a: 'arts. 70-74', bloques: [
      {tipo: 'lista', items: [
        {t: 'Expediente: conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la resolución, y diligencias para ejecutarla. <b>Formato electrónico</b> e índice numerado.', a: '70.1-2'},
        {t: 'No forma parte la información auxiliar o de apoyo (entre otras: aplicaciones y bases de datos, notas, borradores, opiniones, resúmenes, comunicaciones e informes internos, juicios de valor), salvo informes preceptivos y facultativos solicitados antes de la resolución.', a: '70.4'},
        {t: 'Impulso <b>de oficio</b> en todos los trámites (principio de celeridad). <b>Orden riguroso de incoación</b> en asuntos homogéneos, salvo orden motivada del titular de la unidad.', a: '71.1-2'},
        {t: 'Incumplir ese orden: <b>responsabilidad disciplinaria</b> y, en su caso, remoción del puesto.', a: '71.2'},
        {t: 'Concentración: en un solo acto los trámites que admitan impulso simultáneo.', a: '72.1'},
        {t: 'Trámites de los interesados: <b>10 días</b> desde el siguiente a la notificación, salvo otro plazo. Acto del interesado defectuoso: 10 días para cumplimentarlo.', a: '73.1-2'},
        {t: 'Si no lo hace, puede ser declarado <b>decaído</b> en su derecho al trámite. Pero su actuación vale si llega antes o dentro del día en que se notifica la resolución que da por transcurrido el plazo.', a: '73.3'},
        {t: 'Las cuestiones incidentales <b>no suspenden</b> la tramitación, salvo la <b>recusación</b>.', a: '74'}
      ]}
    ]},

    {titulo: 'Instrucción', a: 'arts. 75-83', bloques: [
      {tipo: 'lista', items: [
        {t: 'Alegaciones y documentos: en cualquier momento del procedimiento <b>anterior al trámite de audiencia</b> {{examen:2026}}. Se tienen en cuenta al redactar la propuesta de resolución.', a: '76.1'},
        {t: 'Defectos de tramitación (paralización, plazos incumplidos, trámites omitidos): se pueden alegar <b>en todo momento</b>.', a: '76.2'}
      ]},
      {tipo: 'tabla', cab: ['Trámite', 'Plazo', 'Claves'], filas: [
        ['Prueba · 77', '<b>10 a 30 días</b>. Extraordinario (a petición de los interesados): no más de 10 días', 'La abre el instructor si no tiene por ciertos los hechos alegados o lo exige el procedimiento. Solo rechaza pruebas <b>manifiestamente improcedentes o innecesarias</b>, con resolución motivada.'],
        ['Informes · 79-80', '<b>10 días</b>', 'Salvo disposición expresa, <b>facultativos y no vinculantes</b>. Si no llegan, se sigue; si es preceptivo, se puede suspender el plazo para resolver.'],
        ['Audiencia · 82', '<b>10 a 15 días</b>', 'Instruido el procedimiento e inmediatamente <b>antes de redactar la propuesta</b>. Se puede prescindir si no figuran ni cuentan otros hechos, alegaciones o pruebas que los del interesado.'],
        ['Información pública · 83', '<b>Mínimo 20 días</b>', 'La puede acordar el órgano que resuelve. Anuncio en el diario oficial. Comparecer <b>no da, por sí mismo, la condición de interesado</b>; quien presenta alegaciones u observaciones tiene derecho a una respuesta razonada.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Discriminación: si el interesado la alega y aporta <b>indicios fundados</b>, corresponde a quien se imputa la situación discriminatoria aportar una justificación objetiva y razonable, suficientemente probada, de las medidas y de su proporcionalidad (apartado añadido por la Ley 15/2022).', a: '77.3 bis'},
        {t: 'Hechos declarados probados por <b>resoluciones judiciales penales firmes</b>: vinculan en el procedimiento sancionador.', a: '77.4'},
        {t: 'Documentos de funcionarios con condición de <b>autoridad</b>: prueban los hechos que constatan, salvo prueba en contrario.', a: '77.5'},
        {t: 'Prueba consistente en un informe de un órgano administrativo: se entiende <b>preceptivo</b>.', a: '77.6'},
        {t: 'La audiencia va <b>antes</b> del informe jurídico y del dictamen del Consejo de Estado u órgano consultivo autonómico.', a: '82.1'},
        {t: 'Responsabilidad patrimonial: informe del servicio causante en máx. 10 días; dictamen preceptivo si la cuantía es de <b>50.000 euros o más</b> (o la que fije la ley autonómica), emitido en 2 meses.', a: '81.1-2'}
      ]}
    ]},

    {titulo: 'Finalización', a: 'arts. 84-95', bloques: [
      {tipo: 'lista', items: [
        {t: 'Ponen fin: <b>resolución, desistimiento, renuncia</b> (si no está prohibida) y <b>caducidad</b>. También la <b>imposibilidad material</b> de continuar por causas sobrevenidas, con resolución motivada.', a: '84'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Sancionadores · 85', reglas: [
          'Si el infractor <b>reconoce</b> su responsabilidad, se puede resolver imponiendo la sanción.',
          'Sanción solo pecuniaria (o pecuniaria y no pecuniaria, justificada la improcedencia de la segunda): el <b>pago voluntario</b> antes de la resolución termina el procedimiento, salvo en la reposición de la situación alterada y la indemnización de daños.',
          'Sanción solo pecuniaria: reducciones de <b>al menos el 20 %</b>, acumulables, fijadas en la notificación de iniciación y condicionadas a desistir o renunciar a cualquier acción o recurso en vía administrativa. El porcentaje puede incrementarse reglamentariamente.'
        ]},
        {titulo: 'Terminación convencional · 86', reglas: [
          'Acuerdos, pactos, convenios o contratos no contrarios al ordenamiento ni sobre materias no susceptibles de transacción.',
          'Contenido mínimo: partes, ámbito personal, funcional y territorial, y plazo de vigencia.',
          'No alteran competencias ni responsabilidades.'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Actuaciones complementarias: acuerdo motivado; alegaciones en <b>7 días</b> tras su finalización; se practican en <b>15 días</b> como máximo; suspenden el plazo para resolver.', a: '87'},
        {t: 'La resolución decide todas las cuestiones planteadas. Cuestiones conexas no planteadas: antes se ponen de manifiesto al interesado (máx. 15 días).', a: '88.1'},
        {t: 'A solicitud del interesado: resolución <b>congruente</b>; nunca puede <b>agravar su situación inicial</b>.', a: '88.2'},
        {t: 'Expresa los <b>recursos</b>, el órgano ante el que se presentan y el plazo.', a: '88.3'},
        {t: 'Nunca puede abstenerse de resolver por silencio, oscuridad o insuficiencia de la ley; sí inadmitir solicitudes de derechos no previstos o sin fundamento.', a: '88.5'},
        {t: 'Sancionador: no se aceptan hechos distintos de los del procedimiento; si se aprecia mayor gravedad que en la propuesta, el inculpado alega en <b>15 días</b>.', a: '90.2'},
        {t: 'Responsabilidad patrimonial: <b>6 meses</b> desde el inicio sin resolución expresa notificada ni acuerdo formalizado: puede entenderse contraria a la indemnización.', a: '91.3'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Desistimiento y renuncia · 93-94', reglas: [
          'El interesado puede <b>desistir</b> de su solicitud o <b>renunciar</b> a sus derechos (si no está prohibido). Si son varios, solo afecta a quien lo formula.',
          'La Administración lo acepta de plano, salvo que terceros personados insten la continuación en <b>10 días</b>.',
          'La Administración solo desiste en procedimientos <b>de oficio</b>, motivadamente y en los casos previstos en las leyes.'
        ]},
        {titulo: 'Caducidad · 95', reglas: [
          'A solicitud del interesado y paralizado por su causa: se le advierte y, pasados <b>3 meses</b>, se archiva. Cabe recurso.',
          'No por inactividad en trámites <b>no indispensables</b>: solo pierde ese trámite.',
          'No produce por sí sola la <b>prescripción</b>, pero los procedimientos caducados <b>no interrumpen</b> el plazo de prescripción.',
          'Puede no aplicarse si la cuestión afecta al interés general.'
        ]}
      ]}
    ]},

    {titulo: 'Tramitación simplificada', a: 'art. 96', bloques: [
      {tipo: 'lista', items: [
        {t: 'Por <b>interés público</b> o <b>falta de complejidad</b>; de oficio o a solicitud. Antes de resolver, se puede volver a la ordinaria.', a: '96.1'},
        {t: 'Acordada de oficio: se notifica; si un interesado se <b>opone expresamente</b>, tramitación ordinaria.', a: '96.2'},
        {t: 'Pedida por el interesado: el órgano puede desestimarla en <b>5 días</b> desde su presentación, sin recurso. Pasados esos 5 días, se entiende <b>desestimada</b>.', a: '96.3'},
        {t: 'Sancionador: si la infracción puede calificarse de <b>leve</b>; el interesado <b>no puede oponerse</b>.', a: '96.5'},
        {t: 'Se resuelve en <b>30 días</b> desde el siguiente a la notificación del acuerdo, <b>salvo que reste menos para su tramitación ordinaria</b> {{examen:2025}}.', a: '96.6'},
        {t: 'Si hace falta un trámite no previsto, se tramita de forma ordinaria.', a: '96.7'}
      ]},
      {tipo: 'tabla', cab: ['Trámite (solo estos, 96.6)', 'Cuándo'], filas: [
        ['Inicio y subsanación', 'De oficio o a solicitud; subsanación si procede.'],
        ['Alegaciones', 'Al inicio, durante <b>5 días</b>.'],
        ['Audiencia', 'Solo si la resolución va a ser <b>desfavorable</b>.'],
        ['Informes', 'Servicio jurídico y Consejo General del Poder Judicial, si son preceptivos.'],
        ['Dictamen', 'Consejo de Estado u órgano consultivo autonómico, si es preceptivo. Suspende automáticamente el plazo; puede emitirse en 15 días si lo pide el órgano competente.'],
        ['Resolución', 'Dentro de los 30 días.']
      ]}
    ]},

    {titulo: 'Ejecución', a: 'arts. 97-105', bloques: [
      {tipo: 'lista', items: [
        {t: 'Ninguna actuación material de ejecución que limite derechos sin la <b>resolución</b> que le sirva de fundamento.', a: '97.1'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Inmediatamente ejecutivos, salvo · 98.1', items: [
          'Suspensión de la ejecución',
          'Resolución <b>sancionadora</b> contra la que quepa algún recurso en vía administrativa, <b>incluido el potestativo de reposición</b> {{examen:2025}}',
          'Disposición que establezca lo contrario',
          'Necesidad de aprobación o autorización superior'
        ]},
        {titulo: 'Pago electrónico preferente · 98.2', items: [
          'Tarjeta de crédito y débito',
          'Transferencia bancaria',
          'Domiciliación bancaria',
          'Otros que autorice el órgano competente en materia de Hacienda Pública'
        ]}
      ]},
      {tipo: 'tabla', cab: ['Medio (100.1)', 'Cuándo'], filas: [
        ['Apremio sobre el patrimonio · 101', 'Hay que pagar una <b>cantidad líquida</b>. Ninguna obligación pecuniaria sin norma de rango legal.'],
        ['Ejecución subsidiaria · 102', 'Actos <b>no personalísimos</b>: los hace la Administración o quien designe, <b>a costa del obligado</b>. El importe puede liquidarse provisionalmente antes.'],
        ['Multa coercitiva · 103', 'Si la autorizan las <b>leyes</b>, reiterada por lapsos de tiempo. Independiente de las sanciones y <b>compatible</b> con ellas.'],
        ['Compulsión sobre las personas · 104', 'Obligaciones personalísimas de <b>no hacer o soportar</b>, si la ley lo autoriza expresamente, respetando la dignidad.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Ejecución forzosa siempre <b>previo apercibimiento</b>.', a: '99'},
        {t: 'Proporcionalidad; entre varios medios, el <b>menos restrictivo de la libertad individual</b>.', a: '100.1-2'},
        {t: 'Entrar en un domicilio: <b>consentimiento</b> del titular o <b>autorización judicial</b>.', a: '100.3'},
        {t: 'No se admiten <b>acciones posesorias</b> contra actuaciones administrativas dentro de su competencia y con el procedimiento legal.', a: '105'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'Las alegaciones caben en cualquier momento del procedimiento', ok: 'Solo antes del trámite de audiencia. Lo que se alega «en todo momento» son los defectos de tramitación.', a: '76'},
    {x: 'Quien presenta una denuncia pasa a ser interesado', ok: 'La denuncia no da, por sí sola, la condición de interesado.', a: '62.5'},
    {x: 'La petición razonada de otro órgano obliga a iniciar', ok: 'No vincula; solo hay que comunicarle los motivos si no se inicia.', a: '61.2'},
    {x: 'En un proceso selectivo se puede ampliar el plazo de subsanación', ok: 'La ampliación (hasta 5 días) no cabe en procedimientos selectivos ni de concurrencia competitiva.', a: '68.2'},
    {x: 'Los informes son preceptivos y vinculantes salvo que se diga lo contrario', ok: 'Al revés: salvo disposición expresa, facultativos y no vinculantes.', a: '80.1'},
    {x: 'Alegar en información pública convierte en interesado', ok: 'No por sí mismo; da derecho a una respuesta razonada.', a: '83.3'},
    {x: 'Cualquier cuestión incidental suspende el procedimiento', ok: 'Ninguna lo suspende, salvo la recusación.', a: '74'},
    {x: 'Cualquier inactividad del interesado provoca la caducidad', ok: 'Solo la paralización por su causa en trámites indispensables, previa advertencia y pasados 3 meses.', a: '95.1-2'},
    {x: 'Una sanción recurrible en reposición ya es inmediatamente ejecutiva', ok: 'No lo es si cabe algún recurso en vía administrativa, incluido el potestativo de reposición.', a: '98.1.b'},
    {x: 'En un sancionador leve el interesado puede oponerse a la tramitación simplificada', ok: 'En ese caso no cabe la oposición expresa del art. 96.2.', a: '96.5'}
  ],

  examenes: [
    'Art. 76.1 (alegaciones en cualquier momento anterior al trámite de audiencia): examen oficial 31-may-2026, pregunta 50.',
    'Art. 96.6 (30 días, salvo que reste menos para la tramitación ordinaria): examen oficial 1-jun-2025, pregunta de reserva 3.',
    'Art. 98.1.b (sanción recurrible en vía administrativa, incluso en reposición, no es inmediatamente ejecutiva): examen oficial 1-jun-2025, pregunta de reserva 2.'
  ]
});
