/* Esquema · Auxiliar Administrativo · Tema 5
   Fuente única: Ley 39/2015, texto consolidado BOE-A-2015-10565, arts. 13-33.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 5, {
  titulo: 'LPAC (II): actividad de las Administraciones, términos y plazos',
  epigrafe: 'La Ley del Procedimiento Administrativo Común de las Administraciones Públicas (II): la actividad de las Administraciones Públicas. Normas generales de actuación. Términos y plazos.',
  etiquetas: ['Ley 39/2015 · arts. 13 a 33', 'Título II'],
  fuentes: ['Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas. Texto consolidado BOE-A-2015-10565, arts. 13 a 33.'],

  esencial: [
    {t: 'Los plazos en <b>días son hábiles</b>: fuera sábados, domingos y festivos.', a: 'art. 30.2'},
    {t: 'Meses y años se cuentan <b>fecha a fecha</b> desde el día siguiente.', a: 'art. 30.4'},
    {t: 'La Administración debe resolver y notificar <b>en todos los procedimientos</b>, salvo las excepciones del 21.1. Si nada dice la norma: <b>3 meses</b>. Máximo general: <b>6 meses</b>.', a: 'art. 21'},
    {t: 'A solicitud del interesado, el silencio es <b>positivo por regla general</b>. Es negativo si así lo dice una ley o el Derecho UE o internacional, y en los casos que enumera el 24.1.', a: 'art. 24'},
    {t: 'Ampliación de plazos: <b>no más de la mitad</b>. Urgencia: plazos <b>a la mitad</b>, salvo los de solicitudes y recursos. Contra el acuerdo de ampliación o de urgencia no cabe recurso.', a: 'arts. 32-33'}
  ],

  mapa: [
    {titulo: 'Cap. I · Normas generales de actuación', rango: 'arts. 13-28', items: [
      ['13', 'Derechos de las personas'], ['14', 'Relación electrónica'], ['15', 'Lengua'],
      ['16', 'Registros'], ['17', 'Archivo'], ['18', 'Colaboración'], ['19', 'Comparecencia'],
      ['20', 'Responsabilidad de la tramitación'], ['21', 'Obligación de resolver'],
      ['22', 'Suspensión del plazo'], ['23', 'Ampliación del plazo de resolver'],
      ['24', 'Silencio (a solicitud)'], ['25', 'Falta de resolución (de oficio)'],
      ['26', 'Emisión de documentos'], ['27', 'Copias'], ['28', 'Documentos aportados']
    ]},
    {titulo: 'Cap. II · Términos y plazos', rango: 'arts. 29-33', items: [
      ['29', 'Obligatoriedad'], ['30', 'Cómputo'], ['31', 'Cómputo en registros'],
      ['32', 'Ampliación'], ['33', 'Urgencia']
    ]}
  ],

  cifras: [
    {v: '3 meses', d: 'Plazo para resolver si la norma no fija otro', a: 'art. 21.3'},
    {v: '6 meses', d: 'Tope del plazo para resolver, salvo ley o Derecho UE', a: 'art. 21.2'},
    {v: '3 meses', d: 'Máximo de suspensión por informe preceptivo', a: 'art. 22.1.d'},
    {v: '10 días', d: 'Para comunicar al interesado plazo y efectos del silencio, desde que se recibe su solicitud', a: 'art. 21.4'},
    {v: '10 días', d: 'Para remitir informes preceptivos ya elaborados', a: 'art. 28.2'},
    {v: '15 días', d: 'Certificado de silencio, de oficio, desde que expira el plazo', a: 'art. 24.4'},
    {v: '15 días', d: 'Para expedir copias auténticas solicitadas', a: 'art. 27.4'},
    {v: '24 horas', d: 'Máximo de un plazo por horas; si es más, se expresa en días', a: 'art. 30.1'}
  ],

  secciones: [
    {titulo: 'Cómputo de plazos', a: 'art. 30', bloques: [
      {tipo: 'tabla', cab: ['Se fija en', 'Cómo se cuenta'], filas: [
        ['Horas', 'Hábiles. De hora en hora y de minuto en minuto desde la notificación o publicación. Máximo 24 h.'],
        ['Días', 'Hábiles: se excluyen <b>sábados, domingos y festivos</b> {{examen:2025}}. Desde el día siguiente a la notificación, publicación o silencio. Si una ley o el Derecho UE fija días naturales, se dice en la notificación.'],
        ['Meses / años', 'Desde el día siguiente. Vence el <b>mismo día</b> en que se notificó, publicó o se produjo el silencio, en el mes o año de vencimiento. Si no existe ese día, el <b>último del mes</b>.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Último día inhábil: se <b>prorroga al primer hábil siguiente</b>.', a: '30.5'},
        {t: 'Hábil donde vive el interesado e inhábil en la sede del órgano (o al revés): <b>inhábil en todo caso</b>.', a: '30.6', examen: '2026'},
        {t: 'Calendario de inhábiles: lo fijan AGE y CCAA; el de la CA incluye los de sus entidades locales. Se publica <b>antes de empezar el año</b>.', a: '30.7'}
      ]},
      {tipo: 'ejemplo', t: 'Notificado el 31 de enero, plazo de un mes: vence el 28 de febrero (29 si es bisiesto), porque febrero no tiene día 31. Si ese día es inhábil, pasa al primer día hábil siguiente.'}
    ]},

    {titulo: 'Registro electrónico', a: 'art. 31', bloques: [
      {tipo: 'lista', items: [
        'Abierto <b>todos los días del año, 24 horas</b>.',
        'Presentado en día inhábil: cuenta como hecho en la <b>primera hora del primer día hábil siguiente</b>, salvo que una norma permita expresamente recibir en día inhábil.',
        'Manda la <b>fecha y hora oficial de la sede electrónica</b>.',
        'Solo vale el calendario de la sede; aquí <b>no se aplica el art. 30.6</b>.'
      ]}
    ]},

    {titulo: 'Obligación de resolver', a: 'arts. 21-23', bloques: [
      {tipo: 'lista', items: [
        'Hay que dictar resolución expresa y notificarla <b>en todos los procedimientos</b>, se inicien como se inicien.',
        'Excepciones: terminación por <b>pacto o convenio</b> y derechos sujetos solo a <b>declaración responsable o comunicación</b>.',
        'El plazo empieza: <b>de oficio</b>, en la fecha del acuerdo de iniciación; <b>a solicitud</b>, cuando la solicitud entra en el registro electrónico del órgano competente.',
        'Incumplir la obligación da lugar a <b>responsabilidad disciplinaria</b>.'
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Suspensión del plazo · art. 22', reglas: [
          '<b>Puede</b> suspenderse (22.1, 7 casos): subsanar o aportar documentos, pronunciamiento previo de un órgano de la UE, procedimiento de la UE no finalizado, informes preceptivos (máx. 3 meses), pruebas técnicas, negociación de pacto o convenio, pronunciamiento judicial.',
          '<b>Se suspende</b> siempre (22.2, 3 casos): requerimiento a otra Administración para anular o revisar un acto, actuaciones complementarias, recusación.'
        ]},
        {titulo: 'Ampliación del plazo · art. 23', reglas: [
          'Excepcional, cuando se hayan agotado los medios personales y materiales.',
          'Acuerdo motivado. La ampliación <b>no puede superar</b> el plazo establecido para tramitar el procedimiento.',
          'Se notifica a los interesados. <b>No cabe recurso.</b>'
        ]}
      ]}
    ]},

    {titulo: 'Silencio administrativo', a: 'arts. 24-25', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Iniciado a solicitud · art. 24', reglas: [
          'Regla general: <b>estimatorio</b>, salvo ley, Derecho UE o internacional.',
          '<b>Desestimatorio</b> en: derecho de petición (art. 29 CE), transferencia de facultades sobre dominio o servicio público, actividades que puedan dañar el medio ambiente, responsabilidad patrimonial, impugnación de actos y disposiciones y revisión de oficio a solicitud.',
          'Excepción: recurso de <b>alzada</b> contra una desestimación por silencio que tampoco se resuelve: se entiende <b>estimado</b>, salvo en las cuatro primeras materias (petición, dominio o servicio público, medio ambiente, responsabilidad patrimonial).'
        ]},
        {titulo: 'Iniciado de oficio · art. 25', reglas: [
          'Si podía reconocer derechos o situaciones favorables: <b>desestimación</b> por silencio para quienes comparecieron.',
          'Si es sancionador o de gravamen: <b>caducidad</b> y archivo de las actuaciones.',
          'Si se paraliza por culpa del interesado, se <b>interrumpe</b> el cómputo.'
        ]}
      ]},
      {tipo: 'tabla', cab: ['', 'Estimación', 'Desestimación'], filas: [
        ['Qué es', 'Acto administrativo que finaliza el procedimiento', 'Solo abre la vía del recurso'],
        ['Resolución tardía', 'Solo puede ser <b>confirmatoria</b>', '<b>Sin vinculación</b> al sentido del silencio']
      ]}
    ]},

    {titulo: 'Personas y Administración', a: 'arts. 13-20', bloques: [
      {tipo: 'lista', items: [
        {t: '<b>Derechos de las personas</b> (quienes tienen capacidad de obrar ante las AAPP): comunicarse por el <b>Punto de Acceso General electrónico</b>; ser asistidos en el uso de medios electrónicos; usar las lenguas oficiales de su Comunidad Autónoma; acceder a la información pública, archivos y registros (Ley 19/2013); ser tratados con <b>respeto y deferencia</b>; exigir responsabilidades; obtener y usar medios de identificación y firma electrónica; protección de datos personales; y los demás que reconozcan la Constitución y las leyes.', a: 'art. 13'},
        {t: 'Son sin perjuicio de los derechos de los <b>interesados</b> en el procedimiento, que están en el art. 53.', a: 'art. 13'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Obligados a relación electrónica · 14.2', items: [
          'Personas jurídicas',
          'Entidades sin personalidad jurídica',
          'Profesionales con colegiación obligatoria, en trámites de esa actividad (incluye notarios y registradores)',
          'Quien represente a un obligado',
          'Empleados públicos, en trámites por su condición de empleado'
        ], reglas: ['Las <b>personas físicas eligen</b> y pueden cambiar de medio en cualquier momento, salvo que estén obligadas. Un <b>reglamento</b> puede obligar a ciertos colectivos de personas físicas (14.3).']},
        {titulo: 'Dónde presentar documentos · 16.4', items: [
          'Registro electrónico del destinatario o de cualquier Administración',
          'Oficinas de Correos',
          'Representaciones diplomáticas y oficinas consulares',
          'Oficinas de asistencia en materia de registros',
          'Cualquier otro que fijen las normas'
        ], reglas: ['Lo presentado de forma presencial se <b>digitaliza</b> y se devuelven los originales, salvo que la norma obligue a custodiarlos o no se puedan digitalizar.']}
      ]},
      {tipo: 'lista', tinte: true, items: [
        '<b>Lengua (15):</b> en la AGE, castellano; se puede usar la cooficial ante sus órganos en esa CA. Si varios interesados discrepan, castellano. En CCAA y entidades locales, lo que diga la ley autonómica.',
        '<b>Comparecencia (19):</b> solo obligatoria si lo prevé una <b>norma con rango de ley</b>.',
        '<b>Responsabilidad (20):</b> los titulares de las unidades y el personal que tramita son <b>responsables directos</b>.'
      ]}
    ]},

    {titulo: 'Documentos y copias', a: 'arts. 26-28', bloques: [
      {tipo: 'lista', items: [
        {t: 'Los documentos se emiten <b>por escrito y por medios electrónicos</b>, salvo que su naturaleza exija otra forma.', a: '26.1'},
        {t: 'No llevan firma electrónica los meramente informativos ni los que no forman parte de un expediente.', a: '26.3'},
        {t: 'Copia auténtica: <b>misma validez y eficacia</b> que el original. Las de documentos privados solo tienen efectos administrativos.', a: '27'},
        {t: 'Derecho a <b>no aportar</b> documentos que ya tenga la Administración actuante o que haya elaborado otra. La Administración los consulta, salvo que el interesado se oponga. No cabe oponerse en <b>potestades sancionadoras o de inspección</b>.', a: '28.2'},
        {t: 'No se exigen <b>originales</b> salvo que la normativa lo establezca de forma excepcional.', a: '28.3'}
      ]}
    ]},

    {titulo: 'Ampliación y urgencia', a: 'arts. 32-33', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Ampliación · art. 32', reglas: [
          'De oficio o a petición. <b>No más de la mitad</b> del plazo. Sin perjudicar a terceros. Se notifica.',
          'Petición y decisión <b>antes de que venza</b> el plazo. Un plazo vencido nunca se amplía.',
          'Siempre por el máximo en procedimientos tramitados por misiones diplomáticas u oficinas consulares, con algún trámite en el extranjero o con interesados que residen fuera de España.',
          '<b>No cabe recurso</b> contra el acuerdo ni contra su denegación.',
          'Incidencia técnica (32.4): puede ampliar los plazos <b>no vencidos</b> y lo publica en la sede. Ciberincidente grave (32.5): puede acordar una <b>ampliación general</b> de plazos.'
        ]},
        {titulo: 'Urgencia · art. 33', reglas: [
          'Por razones de interés público, de oficio o a petición.',
          'Los plazos se reducen <b>a la mitad</b>, salvo los de <b>presentación de solicitudes y recursos</b>.',
          '<b>No cabe recurso</b> contra el acuerdo que la declara.'
        ]}
      ]}
    ]}
  ],

  trampas: [
    {x: 'El sábado cuenta como día hábil', ok: 'Sábados, domingos y festivos quedan fuera.', a: '30.2'},
    {x: 'Los plazos en meses se cuentan en días hábiles', ok: 'Se cuentan fecha a fecha.', a: '30.4'},
    {x: 'La comparecencia puede imponerla un reglamento', ok: 'Solo una norma con rango de ley.', a: '19.1'},
    {x: 'La urgencia reduce también el plazo para recurrir', ok: 'Solicitudes y recursos mantienen su plazo.', a: '33.1'},
    {x: 'Se puede ampliar un plazo ya vencido', ok: 'Nunca. Hay que pedirlo y decidirlo antes.', a: '32.3'},
    {x: 'El silencio en responsabilidad patrimonial es positivo', ok: 'Es desestimatorio.', a: '24.1'},
    {x: 'Un procedimiento sancionador sin resolver termina por silencio', ok: 'Termina por caducidad.', a: '25.1.b'},
    {x: 'El art. 30.6 se aplica al registro electrónico', ok: 'El registro solo usa el calendario de su sede.', a: '31.3'}
  ],

  examenes: ['Art. 30.2 (sábados, domingos y festivos): examen oficial 1-jun-2025, pregunta 38.', 'Art. 30.6 (día hábil en un sitio e inhábil en otro): examen oficial 31-may-2026, pregunta 23.']
});
