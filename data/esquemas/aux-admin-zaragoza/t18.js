/* Esquema · Auxiliar Administrativo · Tema 18
   Fuente única: TREBEP (RDLeg 5/2015), texto consolidado BOE-A-2015-11719,
   arts. 55-68 (Título IV), 85-92 (Título VI) y 93-98 (Título VII).
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 18, {
  titulo: 'Empleados públicos (II): acceso, pérdida, situaciones y régimen disciplinario',
  epigrafe: 'Los empleados públicos (II): adquisición y pérdida de la relación de servicio, situaciones administrativas y régimen disciplinario.',
  etiquetas: ['TREBEP · arts. 55 a 68', 'TREBEP · arts. 85 a 98', 'Títulos IV, VI y VII'],
  fuentes: ['Real Decreto Legislativo 5/2015, de 30 de octubre, texto refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP). Texto consolidado BOE-A-2015-11719, arts. 55 a 68 y 85 a 98.'],

  esencial: [
    {t: 'La condición de funcionario de carrera se adquiere por <b>cuatro pasos sucesivos</b>: superar el proceso, nombramiento publicado, acatamiento de la Constitución y toma de posesión.', a: 'art. 62.1'},
    {t: 'Se pierde por <b>renuncia, pérdida de nacionalidad, jubilación total, separación firme</b> e <b>inhabilitación firme</b>.', a: 'art. 63'},
    {t: 'Cinco situaciones: <b>servicio activo, servicios especiales, servicio en otras AAPP, excedencia</b> y <b>suspensión de funciones</b>.', a: 'art. 85.1'},
    {t: 'Faltas <b>muy graves</b>: las del art. 95.2 y las que fije una ley. <b>Graves</b>: por ley. <b>Leves</b>: por las leyes de función pública. La separación del servicio solo para las muy graves.', a: 'arts. 95-96'},
    {t: 'Prescripción: faltas a los <b>3 años, 2 años y 6 meses</b>; sanciones a los <b>3 años, 2 años y 1 año</b>.', a: 'art. 97.1'}
  ],

  mapa: [
    {titulo: 'Título IV · Cap. I · Acceso', rango: 'arts. 55-62', items: [
      ['55', 'Principios rectores'], ['56', 'Requisitos generales'], ['57', 'Nacionales de otros Estados'],
      ['58', 'Funcionarios de organismos internacionales'], ['59', 'Personas con discapacidad'],
      ['60', 'Órganos de selección'], ['61', 'Sistemas selectivos'], ['62', 'Adquisición de la condición']
    ]},
    {titulo: 'Título IV · Cap. II · Pérdida', rango: 'arts. 63-68', items: [
      ['63', 'Causas de pérdida'], ['64', 'Renuncia'], ['65', 'Pérdida de la nacionalidad'],
      ['66', 'Inhabilitación'], ['67', 'Jubilación'], ['68', 'Rehabilitación']
    ]},
    {titulo: 'Título VI · Situaciones administrativas', rango: 'arts. 85-92', items: [
      ['85', 'Situaciones'], ['86', 'Servicio activo'], ['87', 'Servicios especiales'],
      ['88', 'Servicio en otras AAPP'], ['89', 'Excedencia'], ['90', 'Suspensión de funciones'],
      ['91', 'Reingreso'], ['92', 'Personal laboral']
    ]},
    {titulo: 'Título VII · Régimen disciplinario', rango: 'arts. 93-98', items: [
      ['93', 'Responsabilidad disciplinaria'], ['94', 'Potestad disciplinaria'], ['95', 'Faltas'],
      ['96', 'Sanciones'], ['97', 'Prescripción'], ['98', 'Procedimiento y medidas provisionales']
    ]}
  ],

  cifras: [
    {v: '16 años', d: 'Edad mínima para participar en procesos selectivos', a: 'art. 56.1.c'},
    {v: '7 %', d: 'Cupo mínimo de vacantes para personas con discapacidad (al menos un 2 % para discapacidad intelectual) {{examen:2025}}', a: 'art. 59.1'},
    {v: '65 años', d: 'Jubilación forzosa; prolongación posible hasta los 70', a: 'art. 67.3'},
    {v: '5 años', d: 'Servicios previos para la excedencia voluntaria por interés particular {{examen:2025}}', a: 'art. 89.2'},
    {v: '3 años', d: 'Máximo de excedencia por cuidado de cada hijo o de un familiar', a: 'art. 89.4'},
    {v: '2 años', d: 'Reserva del puesto en la excedencia por cuidado de familiares (como mínimo)', a: 'art. 89.4'},
    {v: '6 meses', d: 'Reserva del puesto en la excedencia por violencia de género o sexual (prórrogas de 3 meses, máximo 18)', a: 'art. 89.5'},
    {v: '6 meses', d: 'Si la suspensión los supera, se pierde el puesto', a: 'art. 90.1'},
    {v: '6 años', d: 'Máximo de la suspensión firme por sanción', a: 'arts. 90.2 y 96.1.c'},
    {v: '6 meses', d: 'Máximo de la suspensión provisional en un expediente, salvo paralización por el interesado', a: 'art. 98.3'}
  ],

  secciones: [
    {titulo: 'Acceso al empleo público', a: 'arts. 55-61', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Principios de la selección · 55.2', items: [
          'Igualdad, mérito y capacidad.',
          'Publicidad de las convocatorias y sus bases.',
          'Transparencia.',
          'Imparcialidad y profesionalidad del órgano de selección.',
          'Independencia y discrecionalidad técnica.',
          'Adecuación de las pruebas a las funciones.',
          'Agilidad, sin perjuicio de la objetividad.'
        ]},
        {titulo: 'Requisitos generales · 56.1', items: [
          'Nacionalidad española (salvo art. 57).',
          'Capacidad funcional.',
          '<b>16 años</b> cumplidos y no superar la edad de jubilación forzosa. Otra edad máxima, <b>solo por ley</b>.',
          'No haber sido separado por expediente disciplinario ni estar inhabilitado.',
          'Titulación exigida.'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Nacionales de la UE: acceso como <b>funcionarios</b>, salvo empleos con participación en el poder público o salvaguardia de los intereses del Estado.', a: '57.1'},
        {t: 'También su cónyuge no separado de derecho y los descendientes <b>menores de 21 años</b> o mayores dependientes.', a: '57.2'},
        {t: 'Extranjeros con residencia legal: solo como <b>personal laboral</b>. Eximir de la nacionalidad para ser funcionario: <b>solo por ley</b> de las Cortes o de un parlamento autonómico.', a: '57.4-5'},
        {t: 'Discapacidad: cupo <b>no inferior al 7 %</b> de las vacantes; de él, al menos el <b>2 %</b> de las plazas para discapacidad intelectual y el resto para otras discapacidades.', a: '59.1', examen: '2025'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Órganos de selección · art. 60', reglas: [
          'Colegiados. Imparcialidad y profesionalidad; se tiende a la paridad entre mujer y hombre.',
          '<b>No pueden formar parte</b>: personal de elección o designación política, funcionarios interinos y personal eventual.',
          'Se pertenece siempre <b>a título individual</b>.'
        ]},
        {titulo: 'Sistemas selectivos · art. 61', reglas: [
          'Funcionarios de carrera: <b>oposición</b> y <b>concurso-oposición</b>. El concurso, solo por ley y de forma excepcional.',
          'Laboral fijo: oposición, concurso-oposición o concurso de valoración de méritos.',
          'La valoración de méritos nunca decide por sí sola el resultado.',
          'No más aprobados que plazas, salvo que lo prevea la convocatoria. Si hay renuncias, cabe pedir una <b>relación complementaria</b>.'
        ]}
      ]}
    ]},

    {titulo: 'Adquisición y pérdida de la condición', a: 'arts. 62-68', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Se adquiere (sucesivamente) · 62.1', items: [
          'a) Superar el proceso selectivo.',
          'b) Nombramiento, <b>publicado</b> en el diario oficial.',
          'c) Acatamiento de la Constitución, del Estatuto de Autonomía y del ordenamiento.',
          'd) Toma de posesión en plazo.'
        ], reglas: ['Si no acredita los requisitos de la convocatoria, no puede ser nombrado.']},
        {titulo: 'Se pierde · art. 63', items: [
          'a) Renuncia.',
          'b) Pérdida de la nacionalidad.',
          'c) Jubilación <b>total</b>.',
          'd) Separación del servicio <b>firme</b>.',
          'e) Inhabilitación absoluta o especial <b>firme</b>, como pena principal o accesoria.'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: '<b>Renuncia</b>: por escrito y aceptada expresamente. No se acepta si hay expediente disciplinario o auto de procesamiento o de apertura de juicio oral. No impide volver a ingresar por un nuevo proceso.', a: '64'},
        {t: '<b>Nacionalidad</b>: no se pierde la condición si a la vez se adquiere la de otro Estado de los que dan acceso.', a: '65'},
        {t: '<b>Inhabilitación</b>: la absoluta afecta a todos los empleos o cargos; la especial, solo a los que diga la sentencia.', a: '66'},
        {t: '<b>Jubilación</b>: voluntaria, forzosa (65 años, de oficio; prolongación hasta 70 según las leyes de desarrollo) o por incapacidad permanente.', a: '67'},
        {t: '<b>Rehabilitación</b>: por nacionalidad o incapacidad, desaparecida la causa, <b>se concede</b>. Por inhabilitación, es excepcional; sin resolución expresa en plazo, se entiende <b>desestimada</b>.', a: '68'}
      ]}
    ]},

    {titulo: 'Situaciones administrativas: efectos', a: 'arts. 85-90', bloques: [
      {tipo: 'tabla', cab: ['Situación', 'Retribuciones', 'Cómputo del tiempo', 'Puesto'], filas: [
        ['Servicio activo (86)', 'Todos los derechos de su condición', 'Todos los derechos de su condición', 'Presta servicios donde esté destinado'],
        ['Servicios especiales (87)', 'Las del cargo, más los <b>trienios</b>', 'Ascensos, trienios, promoción interna y Seguridad Social', 'Reingreso al menos en la <b>misma localidad</b>'],
        ['Servicio en otras AAPP (88)', 'Se rige por la legislación de la Administración de destino', 'Como servicio activo en su cuerpo de origen', 'Destino en la otra Administración'],
        ['Excedencia por interés particular o por agrupación familiar (89.2-3)', '<b>No</b> devenga', '<b>No</b> computa para ascensos, trienios ni Seguridad Social', 'El art. 89 no prevé reserva'],
        ['Excedencia por cuidado de familiares (89.4)', 'El art. 89 no lo dice', '<b>Sí</b>: trienios, carrera y Seguridad Social', 'Reserva <b>al menos 2 años</b>; después, puesto en la misma localidad e igual retribución'],
        ['Excedencia por violencia de género o sexual (89.5)', 'Íntegras los <b>2 primeros meses</b>', 'Sí, durante la reserva: antigüedad, carrera y Seguridad Social', 'Reserva <b>6 meses</b>, prorrogable de 3 en 3 hasta <b>18</b>'],
        ['Excedencia por violencia terrorista (89.6)', 'Como la de violencia de género', 'Como la de violencia de género', 'Como la de violencia de género'],
        ['Suspensión de funciones (90)', 'Privado de funciones y de todos los derechos de su condición', '—', 'Lo pierde si supera <b>6 meses</b>']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Las leyes de función pública pueden crear otras situaciones (por ejemplo, por reestructuración o exceso de personal).', a: '85.2'},
        {t: 'El reingreso al servicio activo se regula por reglamento, respetando la reserva de puesto cuando proceda.', a: '91'},
        {t: 'Personal laboral: Estatuto de los Trabajadores y convenios colectivos.', a: '92'}
      ]}
    ]},

    {titulo: 'Servicios especiales y otras Administraciones', a: 'arts. 87-88', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Servicios especiales · 87.1 (selección)', items: [
          'Miembros del Gobierno o de gobiernos autonómicos, de instituciones de la UE u organizaciones internacionales; altos cargos.',
          'Misión de <b>más de 6 meses</b> en organismos internacionales, gobiernos extranjeros o cooperación.',
          'Diputados, senadores o parlamentarios autonómicos, si cobran retribuciones periódicas.',
          'Cargos electivos <b>retribuidos y de dedicación exclusiva</b> en entidades locales; órganos superiores y directivos municipales; órganos económico-administrativos locales.',
          'Personal eventual de confianza o asesoramiento político, si no opta por seguir en activo.',
          'Tribunal Constitucional, Defensor del Pueblo, Tribunal de Cuentas, CGPJ.',
          'Reservistas voluntarios activados.'
        ]},
        {titulo: 'Servicio en otras AAPP · art. 88', items: [
          'Destino en otra Administración por <b>transferencia</b> o por <b>provisión de puestos</b>.',
          'Los transferidos a una comunidad autónoma quedan en <b>servicio activo</b> en ella.',
          'Por provisión: se rigen por la legislación de destino y conservan su condición en la de origen, con derecho a concursar allí.'
        ]}
      ]}
    ]},

    {titulo: 'Excedencias', a: 'art. 89', bloques: [
      {tipo: 'tabla', cab: ['Modalidad', 'Requisitos'], filas: [
        ['Interés particular', '<b>5 años</b> de servicios efectivos inmediatamente anteriores (las leyes de desarrollo pueden reducirlo) {{examen:2025}}. Depende de las necesidades del servicio. <b>No</b> si hay expediente disciplinario.'],
        ['Agrupación familiar', 'Sin periodo previo de servicios. El cónyuge reside en otra localidad por ocupar un puesto definitivo como funcionario de carrera o laboral fijo en cualquier Administración, órgano constitucional, la UE u organizaciones internacionales.'],
        ['Cuidado de familiares', 'Hasta <b>3 años</b> por cada hijo (desde el nacimiento o la resolución) o por un familiar hasta el <b>segundo grado</b> que no pueda valerse y no trabaje.'],
        ['Violencia de género o sexual', 'Sin tiempo mínimo de servicios ni plazo de permanencia.'],
        ['Violencia terrorista', 'Mismas condiciones que la anterior, previo reconocimiento del Ministerio del Interior o sentencia firme.']
      ]},
      {tipo: 'lista', items: [
        {t: 'De oficio pasa a <b>interés particular</b> quien no pide el reingreso en plazo tras acabar otra situación.', a: '89.2'},
        {t: 'Cuidado de familiares: periodo <b>único</b> por sujeto causante; uno nuevo pone fin al anterior. Si dos funcionarios lo piden por el mismo sujeto, la Administración puede limitar el ejercicio simultáneo.', a: '89.4'}
      ]}
    ]},

    {titulo: 'Suspensión de funciones', a: 'arts. 90 y 98.3-4', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Suspensión firme · art. 90', reglas: [
          'Por <b>sentencia</b> en causa criminal o por <b>sanción disciplinaria</b> (máximo 6 años).',
          'No puede prestar servicios en <b>ninguna</b> Administración ni en sus entes mientras la cumple.'
        ]},
        {titulo: 'Suspensión provisional · art. 98.3', reglas: [
          'Expediente disciplinario: máximo <b>6 meses</b>, salvo paralización imputable al interesado.',
          'Procedimiento judicial: mientras dure la prisión provisional u otra medida; aunque supere 6 meses, <b>no</b> pierde el puesto.',
          'Cobra las <b>retribuciones básicas</b> y, en su caso, las prestaciones por hijo a cargo.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Si la provisional pasa a definitiva, devuelve lo cobrado. Si no, la Administración le paga la diferencia y el tiempo cuenta como <b>servicio activo</b>.', a: '98.4'},
        {t: 'El tiempo de suspensión provisional se abona para cumplir la firme.', a: '98.4'}
      ]}
    ]},

    {titulo: 'Responsabilidad y faltas', a: 'arts. 93-95', bloques: [
      {tipo: 'lista', items: [
        {t: 'Sujetos: funcionarios y personal laboral (este, en lo no previsto, por la legislación laboral).', a: '93.1 y 93.4'},
        {t: 'Quien <b>induce</b> a cometer una falta responde igual que el autor. Quien <b>encubre</b> faltas muy graves o graves responde si de ello se deriva daño grave.', a: '93.2-3'},
        {t: 'Principios: legalidad y tipicidad, irretroactividad de lo desfavorable y retroactividad de lo favorable, proporcionalidad, culpabilidad y presunción de inocencia.', a: '94.2'},
        {t: 'Indicios de delito: se suspende el expediente y se comunica al <b>Ministerio Fiscal</b>. Los hechos probados por sentencia firme vinculan a la Administración.', a: '94.3'}
      ]},
      {tipo: 'tabla', cab: ['Falta', 'Quién la tipifica', 'Prescribe la falta', 'Prescribe la sanción'], filas: [
        ['Muy grave', 'Art. 95.2 (lista) y ley de las Cortes o autonómica; convenios para laborales', '<b>3 años</b>', '<b>3 años</b>'],
        ['Grave', 'Ley de las Cortes o autonómica; convenios para laborales', '<b>2 años</b>', '<b>2 años</b>'],
        ['Leve', 'Leyes de función pública de desarrollo', '<b>6 meses</b>', '<b>1 año</b>']
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Faltas muy graves · 95.2 (selección)', items: [
          'Incumplir el deber de respeto a la Constitución y a los Estatutos de Autonomía.',
          'Discriminación y acoso; acoso moral, sexual y laboral.',
          'Abandono del servicio.',
          'Acuerdos manifiestamente ilegales con perjuicio grave.',
          'Notorio incumplimiento de las funciones esenciales.',
          {t: 'Desobediencia <b>abierta</b>, salvo que la orden sea infracción manifiesta del ordenamiento jurídico.', examen: '2025'},
          'No atender los servicios esenciales en huelga o coartar el derecho de huelga.',
          'Incumplir las incompatibilidades cuando cree una situación de incompatibilidad.'
        ]},
        {titulo: 'Criterios para las graves · 95.3', reglas: [
          'Grado de vulneración de la legalidad.',
          'Gravedad de los daños al interés público, al patrimonio o a los ciudadanos.',
          'Descrédito para la imagen de la Administración.'
        ]}
      ]}
    ]},

    {titulo: 'Sanciones, prescripción y procedimiento', a: 'arts. 96-98', bloques: [
      {tipo: 'tabla', cab: ['Sanción (96.1)', 'Lo que dice el texto'], filas: [
        ['a) Separación del servicio', 'Solo por faltas <b>muy graves</b>. En interinos supone la revocación del nombramiento.'],
        ['b) Despido disciplinario (laborales)', 'Solo por faltas <b>muy graves</b>. Inhabilita para un nuevo contrato con funciones similares.'],
        ['c) Suspensión firme de funciones', 'Máximo <b>6 años</b> (en laborales, de empleo y sueldo).'],
        ['d) Traslado forzoso', 'Con o sin cambio de localidad, por el periodo que se fije.'],
        ['e) Demérito', 'Penalización a efectos de carrera, promoción o movilidad voluntaria.'],
        ['f) Apercibimiento', '—'],
        ['g) Cualquier otra', 'Si la establece una ley.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Laboral fijo con despido declarado <b>improcedente</b> por falta muy grave: procede la <b>readmisión</b>.', a: '96.2'},
        {t: 'Graduación: intencionalidad, descuido o negligencia, daño al interés público, reiteración o reincidencia y grado de participación.', a: '96.3'},
        {t: 'Prescripción de las faltas: desde su comisión (continuadas: desde que cesan). De las sanciones: desde la <b>firmeza</b> de la resolución.', a: '97.2'},
        {t: 'Faltas muy graves o graves: solo mediante el <b>procedimiento</b> previamente establecido. Leves: procedimiento <b>sumario</b> con audiencia.', a: '98.1'},
        {t: 'Fase instructora y sancionadora separadas, en <b>órganos distintos</b>.', a: '98.2'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'Para la excedencia por interés particular basta un año de servicios', ok: 'Cinco años inmediatamente anteriores (las leyes de desarrollo pueden reducirlo).', a: '89.2'},
    {x: 'La toma de posesión va antes que el nombramiento', ok: 'Orden: proceso selectivo, nombramiento, acatamiento y toma de posesión.', a: '62.1'},
    {x: 'Cualquier jubilación hace perder la condición de funcionario', ok: 'La causa de pérdida es la jubilación total.', a: '63.c'},
    {x: 'Quien renuncia ya no puede volver a ser funcionario', ok: 'La renuncia no inhabilita para un nuevo ingreso por proceso selectivo.', a: '64.3'},
    {x: 'Un funcionario interino puede ser vocal de un tribunal', ok: 'No pueden: interinos, eventuales y personal de elección o designación política.', a: '60.2'},
    {x: 'El concurso es un sistema ordinario para funcionarios de carrera', ok: 'Oposición y concurso-oposición; el concurso, solo por ley y excepcional.', a: '61.6'},
    {x: 'Desobedecer cualquier orden es falta muy grave', ok: 'Solo la desobediencia abierta, y no si la orden es infracción manifiesta del ordenamiento.', a: '95.2.i'},
    {x: 'Las faltas leves prescriben al año', ok: 'A los 6 meses. Es la sanción por falta leve la que prescribe al año.', a: '97.1'},
    {x: 'En excedencia por cuidado de familiares no corren los trienios', ok: 'Computa para trienios, carrera y Seguridad Social, con reserva de al menos 2 años.', a: '89.4'},
    {x: 'La suspensión provisional puede durar un año', ok: 'Máximo 6 meses en expediente disciplinario, salvo paralización imputable al interesado.', a: '98.3'}
  ],

  examenes: [
    'Art. 59.1 (cupo del 7 % con al menos el 2 % para discapacidad intelectual): examen oficial 1-jun-2025, pregunta 20.',
    'Art. 89.2 (cinco años para la excedencia por interés particular): examen oficial 1-jun-2025, pregunta 9.',
    'Art. 95.2.i (desobediencia abierta, salvo infracción manifiesta del ordenamiento jurídico): examen oficial 1-jun-2025, pregunta 18.'
  ]
});
