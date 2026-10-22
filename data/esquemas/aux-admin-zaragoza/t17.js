/* Esquema · Auxiliar Administrativo · Tema 17
   Fuente única: TREBEP (RDLeg 5/2015), texto consolidado BOE-A-2015-11719, arts. 8-54.
   Redacción vigente a 22-oct-2026 (última modificación en vigor: RDL 9/2025, en vigor 31-jul-2025).
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 17, {
  titulo: 'Empleados públicos (I): clases, derechos y deberes',
  epigrafe: 'Los empleados públicos (I): clases. Derechos y deberes.',
  etiquetas: ['TREBEP · arts. 8 a 54', 'Títulos II y III'],
  fuentes: ['Real Decreto Legislativo 5/2015, de 30 de octubre, texto refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP). Texto consolidado BOE-A-2015-11719, arts. 8 a 54.'],

  esencial: [
    {t: 'Cuatro clases de empleados públicos: <b>funcionarios de carrera, interinos, personal laboral</b> (fijo, por tiempo indefinido o temporal) y <b>personal eventual</b>.', a: 'art. 8.2'},
    {t: 'Las funciones que implican <b>potestades públicas</b> o la salvaguardia de los intereses generales corresponden <b>exclusivamente a los funcionarios</b>.', a: 'art. 9.2'},
    {t: 'Interinos: cuatro supuestos. Vacante, <b>máximo 3 años</b>; exceso o acumulación de tareas, <b>9 meses dentro de 18</b>.', a: 'art. 10.1'},
    {t: 'Retribuciones <b>básicas</b>: solo sueldo y trienios. <b>Complementarias</b>: puesto, carrera, desempeño y servicios extraordinarios. <b>Dos pagas extraordinarias</b> al año.', a: 'arts. 22-24'},
    {t: 'Vacaciones: <b>22 días hábiles</b> (el sábado no es hábil). Asuntos particulares: <b>6 días</b>. Nacimiento: <b>19 semanas</b>.', a: 'arts. 48-50'}
  ],

  mapa: [
    {titulo: 'Título II · Personal al servicio de las AAPP', rango: 'arts. 8-13', items: [
      ['8', 'Concepto y clases'], ['9', 'Funcionarios de carrera'], ['10', 'Funcionarios interinos'],
      ['11', 'Personal laboral'], ['12', 'Personal eventual'], ['13', 'Personal directivo profesional']
    ]},
    {titulo: 'Título III · Caps. I a III', rango: 'arts. 14-30', items: [
      ['14', 'Derechos individuales'], ['15', 'Derechos individuales ejercidos colectivamente'],
      ['16-18', 'Carrera profesional y promoción interna'], ['19', 'Carrera del personal laboral'],
      ['20', 'Evaluación del desempeño'], ['21-30', 'Derechos retributivos']
    ]},
    {titulo: 'Título III · Caps. IV a VI', rango: 'arts. 31-54', items: [
      ['31-46', 'Negociación colectiva, representación y reunión'], ['47', 'Jornada'], ['47 bis', 'Teletrabajo'],
      ['48', 'Permisos'], ['49', 'Permisos de conciliación, violencia de género o sexual y terrorismo'],
      ['50', 'Vacaciones'], ['51', 'Personal laboral'], ['52', 'Deberes. Código de Conducta'],
      ['53', 'Principios éticos'], ['54', 'Principios de conducta']
    ]}
  ],

  cifras: [
    {v: '9 meses en 18', d: 'Interinidad por exceso o acumulación de tareas {{examen:2025}}', a: 'art. 10.1.d'},
    {v: '3 años', d: 'Tope del interino en plaza vacante, salvo convocatoria publicada en ese plazo', a: 'art. 10.4'},
    {v: '3 años + 12 meses', d: 'Programas temporales (la ampliación, por ley de función pública)', a: 'art. 10.1.c'},
    {v: '2 años', d: 'Servicio activo en el subgrupo inferior para la promoción interna', a: 'art. 18.2'},
    {v: '3 años', d: 'Cada trienio', a: 'art. 23.b'},
    {v: '2', d: 'Pagas extraordinarias al año', a: 'art. 22.4'},
    {v: '22 días hábiles', d: 'Vacaciones anuales retribuidas', a: 'art. 50.1'},
    {v: '6 días', d: 'Permiso por asuntos particulares, al año', a: 'art. 48.k'},
    {v: '15 días', d: 'Permiso por matrimonio o pareja de hecho', a: 'art. 48.l'},
    {v: '19 semanas', d: 'Permiso por nacimiento de la madre biológica (32 en monoparentalidad)', a: 'art. 49.a'}
  ],

  secciones: [
    {titulo: 'Clases de personal', a: 'arts. 8-13', bloques: [
      {tipo: 'tabla', cab: ['Clase', 'Vínculo', 'Claves'], filas: [
        ['Funcionario de carrera', 'Nombramiento legal. Relación <b>estatutaria</b> regulada por el Derecho Administrativo.', 'Servicios profesionales retribuidos de carácter <b>permanente</b>. Exclusiva: potestades públicas (9.2).'],
        ['Funcionario interino', 'Nombramiento temporal por razones expresamente justificadas de <b>necesidad y urgencia</b>.', 'Funciones propias de funcionarios de carrera. Nunca da la condición de funcionario de carrera (10.2).'],
        ['Personal laboral', 'Contrato de trabajo <b>formalizado por escrito</b>.', 'Fijo, por tiempo indefinido o temporal (11.1).'],
        ['Personal eventual', 'Nombramiento, con carácter <b>no permanente</b>.', 'Solo funciones de <b>confianza o asesoramiento especial</b> (12.1).']
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Personal eventual · art. 12', items: [
          'El número máximo lo fijan los órganos de gobierno; número y retribuciones son públicos.',
          'Nombramiento y cese <b>libres</b>.',
          'Cesa siempre cuando cesa la autoridad a la que asesora.',
          'Ser eventual <b>no es mérito</b> para el acceso ni para la promoción interna.'
        ]},
        {titulo: 'Personal directivo · art. 13', items: [
          'Designación por <b>mérito y capacidad</b> e idoneidad, con publicidad y concurrencia.',
          'Evaluación por eficacia, eficiencia, responsabilidad y control de resultados.',
          'Sus condiciones de empleo <b>no se negocian</b> colectivamente.',
          'Si es laboral: relación especial de <b>alta dirección</b>.'
        ]}
      ]}
    ]},

    {titulo: 'Funcionarios interinos', a: 'art. 10', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Cuándo se nombran · 10.1', items: [
          'Plazas <b>vacantes</b> sin funcionario de carrera posible: máximo <b>3 años</b>.',
          '<b>Sustitución</b> transitoria de los titulares, el tiempo estrictamente necesario.',
          '<b>Programas</b> temporales: máximo 3 años, ampliable 12 meses por ley de función pública.',
          {t: '<b>Exceso o acumulación de tareas</b>: máximo 9 meses dentro de un periodo de 18.', examen: '2025'}
        ]},
        {titulo: 'Fin de la interinidad · 10.3', items: [
          {t: '<b>Cobertura reglada</b> del puesto por funcionario de carrera.', examen: '2025'},
          'Supresión o amortización del puesto por razones organizativas.',
          'Fin del plazo autorizado en el nombramiento.',
          'Fin de la causa que motivó el nombramiento.'
        ], reglas: ['Además, las causas del art. 63. La Administración lo formaliza <b>de oficio</b> y <b>sin compensación</b>.']}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Selección pública: igualdad, mérito, capacidad, publicidad y <b>celeridad</b>. Finalidad: cobertura inmediata del puesto.', a: '10.2'},
        {t: 'Vacante: a los 3 años termina la interinidad. Excepción: si la convocatoria se publicó en esos 3 años, sigue hasta que se resuelva, sin compensación.', a: '10.4'},
        {t: 'Se le aplica el régimen general de los funcionarios de carrera en lo adecuado, salvo los derechos inherentes a la condición de funcionario de carrera.', a: '10.5'}
      ]}
    ]},

    {titulo: 'Derechos', a: 'arts. 14-15 y 39-46', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Individuales · art. 14 (selección)', items: [
          {t: 'Inamovilidad <b>en la condición de funcionario de carrera</b>.', examen: '2025'},
          'Desempeño efectivo de sus funciones y progresión en la carrera.',
          'Retribuciones e indemnizaciones por razón del servicio.',
          'Defensa jurídica y protección de la Administración por el ejercicio legítimo de sus funciones.',
          'Formación continua, <b>preferentemente en horario laboral</b>.',
          'Intimidad en dispositivos digitales y <b>desconexión digital</b>.',
          'Vacaciones, descansos, permisos y licencias. Jubilación. Libre asociación profesional.'
        ]},
        {titulo: 'Ejercidos colectivamente · art. 15', items: [
          'Libertad sindical.',
          'Negociación colectiva y participación en las condiciones de trabajo.',
          'Huelga, con mantenimiento de los <b>servicios esenciales</b>.',
          'Planteamiento de conflictos colectivos.',
          'Reunión (art. 46).'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Representación: <b>Delegados de Personal</b> de 6 a 49 funcionarios (hasta 30, uno; de 31 a 49, tres). <b>Juntas de Personal</b> desde un censo de <b>50</b> funcionarios.', a: '39.2-3', examen: '2025'},
        {t: 'Miembros de la Junta: 50-100, 5; 101-250, 9; 251-500, 13; 501-750, 17; 751-1.000, 21; desde 1.001, dos por cada 1.000 o fracción, máximo 75.', a: '39.5', examen: '2026'},
        {t: 'Mandato de Delegados y Juntas: <b>4 años</b>, reelegibles. Se prorroga si no hay nuevas elecciones.', a: '42'},
        {t: 'Pueden convocar una reunión, además de los sindicatos: Delegados, Juntas, Comités de Empresa y al menos el <b>40 %</b> del colectivo convocado. Fuera de las horas de trabajo, salvo acuerdo.', a: '46'}
      ]}
    ]},

    {titulo: 'Carrera profesional y evaluación', a: 'arts. 16-20', bloques: [
      {tipo: 'tabla', cab: ['Modalidad', 'En qué consiste'], filas: [
        ['Carrera horizontal', 'Progresión de grado, categoría o escalón <b>sin cambiar de puesto</b>.'],
        ['Carrera vertical', 'Ascenso en la estructura de puestos por los procedimientos de provisión.'],
        ['Promoción interna vertical', 'Ascenso de un cuerpo o escala de un subgrupo a otro <b>superior</b>.'],
        ['Promoción interna horizontal', 'Acceso a cuerpos o escalas del <b>mismo subgrupo</b>.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Se puede progresar a la vez en carrera horizontal y vertical si la Administración las implanta en el mismo ámbito.', a: '16.4'},
        {t: 'Promoción interna: requisitos de ingreso, <b>2 años de servicio activo</b> en el subgrupo inferior y superar las pruebas.', a: '18.2'},
        {t: 'Personal laboral: carrera y promoción por el Estatuto de los Trabajadores o los convenios.', a: '19.2'},
        {t: 'Evaluación del desempeño: mide y valora la <b>conducta profesional</b> y el rendimiento o logro de resultados.', a: '20.1'},
        {t: 'Criterios: transparencia, objetividad, imparcialidad y no discriminación. La continuidad en un puesto obtenido por <b>concurso</b> queda vinculada a la evaluación.', a: '20.2 y 20.4'}
      ]}
    ]},

    {titulo: 'Retribuciones', a: 'arts. 21-30', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Básicas · art. 23', items: [
          'Se fijan en la <b>Ley de Presupuestos Generales del Estado</b>.',
          '<b>Sueldo</b> de cada subgrupo o grupo.',
          '<b>Trienios</b>: cantidad igual para cada subgrupo por cada tres años de servicio.'
        ]},
        {titulo: 'Complementarias · art. 24 (factores)', items: [
          'a) Progresión en la carrera.',
          'b) Dificultad técnica, responsabilidad, dedicación, incompatibilidad o condiciones del puesto.',
          'c) Interés, iniciativa o esfuerzo y rendimiento o resultados.',
          'd) Servicios extraordinarios fuera de la jornada normal.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Pagas extraordinarias: <b>dos al año</b>, cada una de una mensualidad de básicas y de todas las complementarias, salvo las de las letras c) y d) del art. 24.', a: '22.4'},
        {t: 'Prohibido cobrar participación en tributos o premios en multas.', a: '22.5'},
        {t: 'Interinos: básicas, pagas extraordinarias y complementarias b), c) y d), y las de la categoría de entrada.', a: '25.1'},
        {t: 'Funcionarios en prácticas: como mínimo, el <b>sueldo</b> del subgrupo al que aspiran.', a: '26'},
        {t: 'Jornada no realizada: <b>deducción proporcional</b> de haberes, sin carácter sancionador. En huelga no se devenga retribución.', a: '30'},
        {t: 'Los capítulos de carrera y retribuciones (caps. II y III del Título III), salvo el art. 25.2, producen efectos cuando entren en vigor las leyes de función pública de desarrollo.', a: 'DF 4.ª.1'}
      ]}
    ]},

    {titulo: 'Permisos', a: 'art. 48', bloques: [
      {tipo: 'tabla', cab: ['Motivo', 'Duración'], filas: [
        ['Accidente o enfermedad graves, hospitalización o intervención con reposo domiciliario: cónyuge, pareja de hecho, primer grado o conviviente que necesite cuidado', '<b>5 días hábiles</b>'],
        ['Lo mismo, familiar de <b>segundo grado</b>', '<b>4 días hábiles</b>'],
        ['Fallecimiento de cónyuge, pareja de hecho o primer grado', '<b>3 días hábiles</b> en la misma localidad; <b>5</b> en otra'],
        ['Fallecimiento de familiar de segundo grado', '<b>2 días hábiles</b> en la misma localidad; <b>4</b> en otra'],
        ['Traslado de domicilio sin cambio de residencia', '1 día'],
        ['Exámenes finales y pruebas definitivas de aptitud', 'Los días de su celebración'],
        ['Lactancia de hijo menor de 12 meses', '1 hora de ausencia (en dos fracciones) o reducción equivalente. Se puede acumular en jornadas completas.'],
        ['Hijo prematuro u hospitalizado tras el parto', 'Hasta 2 horas diarias retribuidas, más reducción de hasta 2 horas con descuento'],
        ['Familiar de primer grado con enfermedad muy grave', 'Reducción de hasta el <b>50 %</b>, <b>retribuida</b>, máximo <b>1 mes</b>'],
        ['Asuntos particulares', '<b>6 días</b> al año'],
        ['Matrimonio o pareja de hecho', '<b>15 días</b>']
      ]},
      {tipo: 'lista', items: [
        {t: 'Guarda legal de menor de <b>12 años</b>, mayor que requiera especial dedicación o persona con discapacidad sin actividad retribuida: reducción de jornada <b>con</b> disminución de retribuciones.', a: '48.h'},
        {t: 'También por tiempo indispensable: deber inexcusable, exámenes prenatales y preparación al parto, actos preparatorios de la donación de órganos.', a: '48.e, j y m'}
      ]}
    ]},

    {titulo: 'Conciliación, jornada y vacaciones', a: 'arts. 47, 47 bis, 49 y 50', bloques: [
      {tipo: 'tabla', cab: ['Permiso (art. 49)', 'Regla'], filas: [
        ['a) Nacimiento, madre biológica', '<b>19 semanas</b> (32 si monoparental). <b>6 semanas</b> obligatorias e ininterrumpidas tras el parto. Prematuro u hospitalizado: + hasta 13 semanas.'],
        ['b) Adopción, guarda o acogimiento', '19 semanas por adoptante (32 si monoparental). Internacional: además hasta <b>2 meses</b> solo con básicas; puede empezar hasta 4 semanas antes.'],
        ['c) Progenitor distinto de la madre biológica', '<b>19 semanas</b> (32 si monoparental).'],
        ['d) Violencia de género o sexual', 'Faltas justificadas. Reducción o reordenación de jornada; retribución íntegra si reduce <b>un tercio o menos</b>.'],
        ['e) Hijo con cáncer o enfermedad grave', 'Reducción de <b>al menos la mitad</b> con retribución íntegra, hasta los <b>23 años</b> (26 con discapacidad de al menos el 65 % acreditada antes de los 23).'],
        ['g) Permiso parental', '<b>No retribuido</b>, hasta <b>8 semanas</b>, hasta que el menor cumpla 8 años. Preaviso de 15 días.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Discapacidad del hijo: <b>+2 semanas</b> para ambos progenitores. Parto o adopción múltiple: +1 semana por hijo a partir del segundo, para cada uno.', a: '49.a-c'},
        {t: 'Jornada general y especiales: la fija cada Administración, a tiempo completo o parcial. Flexibilidad horaria para quien tenga hijos <b>menores de 12 años</b>.', a: '47'},
        {t: 'Teletrabajo: autorizado expresamente, compatible con la modalidad presencial, <b>voluntario y reversible</b> salvo excepción justificada. La Administración da los medios.', a: '47 bis'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Vacaciones · art. 50', reglas: [
          '<b>22 días hábiles</b> por año natural, o la parte proporcional. Los <b>sábados no son hábiles</b>.',
          'Si la incapacidad temporal, el permiso de maternidad o el riesgo durante el embarazo o la lactancia impiden disfrutarlas en el año: hasta <b>18 meses</b> desde el final del año en que se originaron.',
          '<b>No se cambian por dinero</b>, salvo fin de la relación por causas ajenas a la voluntad del funcionario.'
        ]},
        {titulo: 'Personal laboral · art. 51', reglas: [
          'Jornada, permisos y vacaciones: este capítulo <b>y</b> la legislación laboral.'
        ]}
      ]}
    ]},

    {titulo: 'Deberes y Código de Conducta', a: 'arts. 52-54', bloques: [
      {tipo: 'lista', items: [
        {t: 'Deber general: desempeñar con <b>diligencia</b> las tareas y velar por los intereses generales, con sujeción a la Constitución y al ordenamiento.', a: '52'},
        {t: 'Principios del art. 52: objetividad, integridad, neutralidad, responsabilidad, imparcialidad, confidencialidad, dedicación al servicio público, transparencia, ejemplaridad, austeridad, accesibilidad, eficacia, honradez, promoción del entorno cultural y medioambiental, igualdad entre mujeres y hombres.', a: '52'},
        {t: 'El Código de Conducta <b>informa</b> la interpretación y aplicación del régimen disciplinario.', a: '52'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Principios éticos · art. 53 (selección)', items: [
          'Lealtad y buena fe con la Administración, superiores, compañeros, subordinados y ciudadanos.',
          'Abstenerse en asuntos con interés personal.',
          'No aceptar trato de favor ni privilegio injustificado.',
          'No agilizar trámites sin justa causa.',
          'Resolver dentro de plazo.',
          'Secreto de materias clasificadas y discreción.'
        ]},
        {titulo: 'Principios de conducta · art. 54 (selección)', items: [
          'Cumplir la jornada y el horario.',
          '<b>Obedecer</b> las órdenes, salvo infracción manifiesta del ordenamiento: entonces, comunicarlo a la inspección.',
          'Rechazar regalos que vayan más allá de los usos habituales, sociales y de cortesía.',
          'Mantener actualizada la formación.',
          'Atender al ciudadano en la <b>lengua oficial</b> que pida.'
        ]}
      ]}
    ]}
  ],

  trampas: [
    {x: 'El personal laboral solo puede ser fijo o temporal', ok: 'Fijo, por tiempo indefinido o temporal.', a: '8.2.c y 11.1'},
    {x: 'Interino por acumulación de tareas: máximo 6 meses en 12', ok: '9 meses dentro de un periodo de 18.', a: '10.1.d'},
    {x: 'Haber sido eventual puntúa como mérito para acceder', ok: 'Nunca es mérito para el acceso ni para la promoción interna.', a: '12.4'},
    {x: 'Todo empleado público tiene derecho a la inamovilidad', ok: 'Es la inamovilidad en la condición de funcionario de carrera.', a: '14.a'},
    {x: 'Las retribuciones básicas incluyen complementos', ok: 'Solo sueldo y trienios.', a: '23'},
    {x: 'Fallecimiento de un familiar de segundo grado en la misma localidad: 3 días', ok: '2 días hábiles (4 en otra localidad). Los 3 y 5 días son para cónyuge, pareja o primer grado.', a: '48.a'},
    {x: 'Enfermedad muy grave de familiar de primer grado: reducción sin sueldo durante 3 meses', ok: 'Hasta el 50 %, retribuida, máximo 1 mes.', a: '48.i'},
    {x: 'Las vacaciones son 22 días naturales', ok: '22 días hábiles; el sábado no cuenta como hábil.', a: '50.1'},
    {x: 'Descontar la jornada no trabajada es una sanción', ok: 'Es una deducción proporcional sin carácter sancionador.', a: '30.1'},
    {x: 'Hay que obedecer siempre al superior', ok: 'Salvo infracción manifiesta del ordenamiento, que se comunica a la inspección.', a: '54.3'}
  ],

  examenes: [
    'Art. 14.a (inamovilidad en la condición de funcionario de carrera): examen oficial 1-jun-2025, pregunta 8.',
    'Art. 10.1.d (exceso o acumulación de tareas: 9 meses en 18): examen oficial 1-jun-2025, pregunta 19.',
    'Art. 10.3.a (fin de la interinidad por cobertura reglada del puesto): examen oficial 1-jun-2025, segunda prueba, supuesto 2, pregunta 20.',
    'Art. 39.3 (Junta de Personal desde 50 funcionarios): examen oficial 1-jun-2025, pregunta 10.',
    'Art. 39.5 (escala de miembros de la Junta de Personal): examen oficial 31-may-2026, pregunta de reserva 2.'
  ]
});
