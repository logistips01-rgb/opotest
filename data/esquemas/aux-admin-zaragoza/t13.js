/* Esquema · Auxiliar Administrativo · Tema 13
   Fuentes: TRLRHL (RDLeg 2/2004), consolidado BOE-A-2004-4214, Título VI (arts. 162-193 bis y 208-212);
   RD 500/1990, BOE-A-1990-9664 (sin modificaciones); Ley 10/2017 de capitalidad, consolidado
   BOE-A-2018-1683, arts. 11.1.h, 14.1.b y 48-50.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 13, {
  titulo: 'Haciendas Locales (II): el presupuesto de las entidades locales',
  epigrafe: 'La Ley reguladora de las Haciendas Locales (II): el presupuesto de las entidades locales: (contenido, estructura, aprobación y ejecución. Documentos contables). La aprobación del presupuesto municipal en la ley de capitalidad de Zaragoza.',
  etiquetas: ['TRLRHL · arts. 162 a 193 bis', 'RD 500/1990 · arts. 2 a 105', 'Ley 10/2017 · arts. 48 a 50'],
  fuentes: [
    'Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales. Texto consolidado BOE-A-2004-4214 (última actualización publicada el 07/10/2026), Título VI, arts. 162 a 193 bis y 208 a 212.',
    'Real Decreto 500/1990, de 20 de abril, por el que se desarrolla el capítulo primero del título sexto de la Ley 39/1988, Reguladora de las Haciendas Locales, en materia de presupuestos. BOE-A-1990-9664 (sin modificaciones desde su publicación).',
    'Ley 10/2017, de 30 de noviembre, de régimen especial del municipio de Zaragoza como capital de Aragón. BOA núm. 231, de 01/12/2017; texto consolidado BOE-A-2018-1683, arts. 11.1.h, 14.1.b y 48 a 50.'
  ],

  esencial: [
    {t: 'El presupuesto general expresa las obligaciones que <b>como máximo</b> se pueden reconocer y los derechos que se prevé liquidar. El ejercicio es el <b>año natural</b>.', a: 'arts. 162-163'},
    {t: 'Lo forma el <b>Presidente</b> y lo remite al Pleno antes del <b>15 de octubre</b>. Aprobado inicialmente, se expone <b>15 días</b>; sin reclamaciones queda aprobado. Aprobación definitiva antes del <b>31 de diciembre</b>.', a: 'arts. 168-169'},
    {t: 'Si al empezar el ejercicio no ha entrado en vigor, se <b>prorroga automáticamente</b> el anterior con sus <b>créditos iniciales</b>.', a: 'art. 169.6', examen: '2025'},
    {t: 'El gasto pasa por 4 fases: <b>autorización, disposición, reconocimiento de la obligación y ordenación del pago</b>. Un acto puede acumular autorización-disposición o autorización-disposición-reconocimiento.', a: 'art. 184; RD 500/1990, art. 67', examen: '2025'},
    {t: 'En Zaragoza, el <b>Gobierno de Zaragoza</b> aprueba el proyecto, se expone el <b>proyecto</b> 15 días y el <b>Pleno</b> aprueba en acto único. No hay aprobación tácita.', a: 'Ley 10/2017, arts. 14.1.b, 48.3 y 50', examen: '2026'}
  ],

  mapa: [
    {titulo: 'TRLRHL · Tít. VI, Cap. I, Sec. 1.ª Contenido y aprobación', rango: 'arts. 162-171', items: [
      ['162', 'Definición'], ['163', 'Ámbito temporal'], ['164', 'Contenido del presupuesto general'],
      ['165', 'Contenido de cada presupuesto'], ['166', 'Anexos'], ['167', 'Estructura'],
      ['168', 'Elaboración y aprobación inicial'], ['169', 'Publicidad, aprobación definitiva y vigor'],
      ['170', 'Reclamaciones'], ['171', 'Recurso contencioso-administrativo']
    ]},
    {titulo: 'Sec. 2.ª Créditos y sus modificaciones', rango: 'arts. 172-182', items: [
      ['172', 'Especialidad y limitación'], ['173', 'Exigibilidad y límite de compromisos'], ['174', 'Gastos plurianuales'],
      ['175', 'Bajas por anulación'], ['176', 'Temporalidad'], ['177', 'Créditos extraordinarios y suplementos'],
      ['178', 'Créditos ampliables'], ['179-180', 'Transferencias'], ['181', 'Generaciones'], ['182', 'Incorporaciones']
    ]},
    {titulo: 'Sec. 3.ª Ejecución y liquidación', rango: 'arts. 183-193 bis', items: [
      ['183', 'Régimen jurídico'], ['184', 'Fases del gasto'], ['185', 'Competencias'], ['186', 'Ordenación de pagos'],
      ['187', 'Plan de disposición de fondos'], ['188', 'Responsabilidad personal'], ['189', 'Requisitos de las órdenes de pago'],
      ['190', 'Pagos a justificar y anticipos de caja fija'], ['191-192', 'Cierre y liquidación'],
      ['193', 'Remanente negativo y remisión'], ['193 bis', 'Derechos de difícil cobro']
    ]},
    {titulo: 'RD 500/1990', rango: 'arts. 1-118', items: [
      ['2-17', 'Contenido'], ['18-23', 'Elaboración y aprobación'], ['24-33', 'Situación de los créditos'],
      ['34-51', 'Modificaciones'], ['52-78', 'Ejecución del gasto'], ['79-88', 'Gastos plurianuales'],
      ['89-105', 'Liquidación'], ['106-118', 'Normas específicas']
    ]},
    {titulo: 'Ley 10/2017 · Cap. V Especialidades procedimentales', rango: 'arts. 48-50', items: [
      ['48', 'Ordenanzas y Reglamentos'], ['49', 'Ordenanzas fiscales'], ['50', 'Presupuesto municipal']
    ]}
  ],

  cifras: [
    {v: '15 de septiembre', d: 'Organismos autónomos y sociedades remiten a la entidad sus presupuestos y previsiones', a: 'art. 168.2-3'},
    {v: '15 de octubre', d: 'El presupuesto general llega al Pleno (igual en Zaragoza, art. 50.c Ley 10/2017)', a: 'art. 168.4'},
    {v: '15 días', d: 'Exposición al público tras la aprobación inicial (hábiles, según el RD 500/1990) {{examen:2025}}', a: 'art. 169.1; RD 20.1'},
    {v: '1 mes', d: 'Para que el Pleno resuelva las reclamaciones', a: 'art. 169.1'},
    {v: '31 de diciembre', d: 'Límite para la aprobación definitiva (del año anterior al ejercicio)', a: 'art. 169.2'},
    {v: '4 años', d: 'Plazo de los planes y programas de inversión y financiación anexos {{examen:2025}}', a: 'art. 166.1.a'},
    {v: '70, 60 y 50 %', d: 'Topes de gasto plurianual en los ejercicios 1.º, 2.º y 3.º-4.º (inversiones, transferencias de capital y convenios)', a: 'art. 174.3'},
    {v: '3 meses', d: 'Plazo máximo para justificar los pagos a justificar', a: 'art. 190.2'},
    {v: '1 de marzo', d: 'La liquidación se confecciona antes de esta fecha', a: 'art. 191.3'},
    {v: 'Marzo', d: 'Copia de la liquidación al Estado y a la CA antes de que acabe el mes', a: 'art. 193.5'}
  ],

  secciones: [
    {titulo: 'Contenido y estructura', a: 'arts. 162-167; RD 500/1990, arts. 2-17', bloques: [
      {tipo: 'lista', items: [
        {t: 'Presupuesto general = presupuesto de la <b>entidad</b> + presupuestos de sus <b>organismos autónomos</b> + <b>estados de previsión</b> de gastos e ingresos de las sociedades mercantiles de capital <b>íntegramente</b> local.', a: '164.1', examen: '2025'},
        {t: 'Organismos autónomos: de carácter <b>administrativo</b> o <b>comercial, industrial, financiero o análogo</b>. Su norma de creación lo dice expresamente.', a: '164.2'},
        {t: 'Cada presupuesto tiene estado de <b>gastos</b> (créditos) y de <b>ingresos</b> (estimaciones). Se añaden las <b>bases de ejecución</b>, que adaptan las normas presupuestarias a la entidad sin modificar lo legislado.', a: '165.1'},
        {t: 'Cada presupuesto se aprueba <b>sin déficit inicial</b>, y no puede tener déficit durante el ejercicio.', a: '165.4; RD 16'},
        {t: 'Derechos y obligaciones se aplican por su <b>importe íntegro</b>: no se pagan obligaciones minorando derechos, salvo devoluciones de ingresos indebidos.', a: '165.3'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Anexos al presupuesto general · art. 166', items: [
          'Planes y programas de inversión y financiación para <b>cuatro años</b> {{examen:2025}}',
          'Programas anuales de las sociedades mercantiles de capital único o mayoritario de la entidad',
          'Estado de consolidación',
          'Estado de previsión de movimientos y situación de la deuda'
        ]},
        {titulo: 'Estructura · art. 167', reglas: [
          'La fija con carácter general el <b>Ministerio de Hacienda</b>.',
          'Gastos: clasificación <b>por programas</b> (área de gasto, política de gasto, grupo de programas, programa) y <b>económica</b> (capítulo, artículo, concepto). La <b>orgánica</b> es opcional.',
          'Corrientes: funcionamiento de los servicios {{examen:2025}}, intereses y transferencias corrientes. De capital: inversiones reales, transferencias de capital y activos y pasivos financieros.',
          'Aplicación presupuestaria: al menos grupo de programas o programa + concepto o subconcepto.'
        ]}
      ]}
    ]},

    {titulo: 'Elaboración y aprobación', a: 'arts. 168-171; RD 500/1990, arts. 18-23', bloques: [
      {tipo: 'tabla', cab: ['Paso', 'Quién', 'Cuándo y cómo'], filas: [
        ['Presupuestos de organismos autónomos y previsiones de sociedades', 'Sus órganos, a la entidad', 'Antes del <b>15 de septiembre</b> (168.2-3)'],
        ['Formación del presupuesto general', '<b>Presidente</b>, con informe de la Intervención', 'Al Pleno antes del <b>15 de octubre</b>, para aprobarlo, enmendarlo o devolverlo (168.4). La Intervención informa antes del 10 de octubre (RD 18.4)'],
        ['Aprobación inicial', '<b>Pleno</b>', 'Acuerdo <b>único</b>: ningún presupuesto del general se aprueba por separado (168.5)'],
        ['Exposición pública', 'Anuncio en el boletín oficial de la provincia', '<b>15 días</b> para examinar y reclamar ante el Pleno (169.1). El RD los fija como <b>hábiles</b> (RD 20.1)'],
        ['Aprobación definitiva', '<b>Pleno</b>', 'Sin reclamaciones, <b>queda aprobado</b>. Con reclamaciones, el Pleno tiene <b>un mes</b>. Antes del <b>31 de diciembre</b> (169.1-2)'],
        ['Publicación y vigor', 'Boletín de la corporación, si lo hay, y de la provincia, resumido por capítulos', 'Entra en vigor <b>publicado</b>. Copia al Estado y a la CA (169.3-5)']
      ]},
      {tipo: 'lista', items: [
        {t: 'Documentación: memoria, liquidación del año anterior y avance del corriente (al menos <b>seis meses</b>), anexos de personal, inversiones, beneficios fiscales y convenios de gasto social con la CA, e informe económico-financiero.', a: '168.1'},
        {t: 'Reclamaciones no resueltas en el acto de aprobación definitiva: se consideran <b>denegadas</b>.', a: 'RD 20.1'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Reclamaciones · art. 170', items: [
          'Habitantes de la entidad',
          'Directamente afectados, aunque no habiten en ella',
          'Colegios, cámaras, sindicatos y asociaciones, en defensa de sus intereses'
        ], reglas: ['Solo por: <b>no seguir los trámites</b>; <b>omitir crédito</b> para obligaciones exigibles; <b>manifiesta insuficiencia</b> de ingresos o de gastos.']},
        {titulo: 'Recurso · art. 171', reglas: [
          'Contra la aprobación definitiva: <b>contencioso-administrativo directo</b>.',
          'El <b>Tribunal de Cuentas</b> informa antes si se impugna la <b>nivelación presupuestaria</b>.',
          'El recurso <b>no suspende</b> por sí solo la aplicación del presupuesto.'
        ]}
      ]}
    ]},

    {titulo: 'Prórroga del presupuesto', a: 'art. 169.6; RD 500/1990, art. 21', bloques: [
      {tipo: 'lista', items: [
        {t: 'Si al iniciarse el ejercicio el presupuesto <b>no ha entrado en vigor</b>, se prorroga <b>automáticamente</b> el anterior con sus <b>créditos iniciales</b>. Entra en vigor cuando se publica: aprobarlo no basta.', a: '169.5-6', examen: '2025'},
        {t: 'No se prorrogan los créditos de servicios o programas que acaban en el ejercicio anterior ni los financiados con crédito u otros ingresos afectados.', a: '169.6'},
        {t: 'Límite: el global de los créditos iniciales, como máximo. Las <b>modificaciones de crédito</b> no se prorrogan.', a: 'RD 21.1-2'},
        {t: 'El prorrogado admite modificaciones. El definitivo se aprueba con efectos de <b>1 de enero</b>.', a: '169.6; RD 21.5-6'}
      ]}
    ]},

    {titulo: 'Créditos y modificaciones', a: 'arts. 172-182; RD 500/1990, arts. 24-51', bloques: [
      {tipo: 'lista', items: [
        {t: 'Los créditos son <b>limitativos y vinculantes</b> y solo sirven para su finalidad. Comprometer por encima del crédito es <b>nulo de pleno derecho</b>.', a: '172 y 173.5'},
        {t: 'No cabe <b>embargo</b> ni mandamiento de ejecución contra los bienes y fondos de la hacienda local, salvo bienes patrimoniales no afectados a un uso o servicio público.', a: '173.2', examen: '2026'},
        {t: 'Situación de los créditos: disponibles, retenidos pendientes de utilización y no disponibles. La no disponibilidad la declara el <b>Pleno</b>.', a: 'RD 30 y 33.3'},
        {t: 'Créditos no afectados a obligaciones reconocidas el último día del ejercicio: quedan <b>anulados</b>, salvo incorporación.', a: '175'}
      ]},
      {tipo: 'tabla', cab: ['Modificación', 'Cuándo', 'Quién o cómo'], filas: [
        ['Crédito extraordinario', 'Gasto que no puede esperar al año siguiente y <b>no hay crédito</b>', '<b>Pleno</b>, con los trámites del presupuesto (177.1-2)'],
        ['Suplemento de crédito', 'Gasto que no puede esperar y el crédito es <b>insuficiente</b> y no ampliable', '<b>Pleno</b>, igual (177.1-2)'],
        ['Ampliación', 'Créditos que las bases declaran ampliables, según los recursos afectados', 'Tramitación en las bases de ejecución (178; RD 39)'],
        ['Transferencia', 'Pasa crédito a otra partida sin cambiar el total', 'Órgano que fijen las bases. <b>Pleno</b> si es entre distintos grupos de función, salvo créditos de personal (179)'],
        ['Generación', 'Ingresos <b>no tributarios</b>: aportaciones, enajenaciones, prestación de servicios, reembolso de préstamos, reintegros (181)', 'Tramitación en las bases (RD 43.2)'],
        ['Incorporación de remanentes', 'Créditos del año anterior: extraordinarios, suplementos y transferencias del último trimestre; compromisos; operaciones de capital; recursos afectados (182)', 'Si hay recursos financieros suficientes (182.1)'],
        ['Baja por anulación', 'Reduce un crédito sin perturbar el servicio', '<b>Pleno</b> (RD 49)']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Extraordinarios y suplementos se financian con remanente líquido de tesorería, nuevos o mayores ingresos, o bajas de otras partidas no comprometidas.', a: '177.4'},
        {t: 'Calamidad pública: acuerdos <b>inmediatamente ejecutivos</b>; reclamaciones en <b>8 días</b>, desestimadas si no se notifica resolución.', a: '177.6'},
        {t: 'Gasto plurianual: debe empezar en el propio ejercicio; inversiones y transferencias de capital, contratos y transferencias corrientes de convenios, <b>máximo 4 ejercicios</b>. El Pleno puede ampliarlo en casos excepcionales.', a: '174.2, 3 y 5'}
      ]}
    ]},

    {titulo: 'Ejecución del gasto y documentos contables', a: 'arts. 183-190; RD 500/1990, arts. 31-32 y 52-78', bloques: [
      {tipo: 'tabla', cab: ['Fase', 'Qué es', 'Competencia'], filas: [
        ['Autorización', 'Acuerda un gasto por cuantía <b>cierta o aproximada</b> y reserva crédito. Inicia el procedimiento, <b>sin relación con terceros</b> (RD 54)', 'Presidente o Pleno (185.1)'],
        ['Disposición o compromiso', 'Acuerda el gasto por importe <b>exactamente determinado</b>. Acto con <b>relevancia jurídica para con terceros</b> {{examen:2025}} (RD 56)', 'Presidente o Pleno (185.1)'],
        ['Reconocimiento y liquidación de la obligación', 'Declara un <b>crédito exigible</b> contra la entidad (RD 58). Antes se acredita documentalmente la prestación (189.1)', '<b>Presidente</b> (185.2). Reconocimiento extrajudicial de créditos, sin dotación presupuestaria: Pleno (RD 60.2)'],
        ['Ordenación del pago', 'Expide la <b>orden de pago</b> contra la Tesorería (RD 61)', '<b>Presidente</b> (186.1)']
      ]},
      {tipo: 'lista', items: [
        {t: 'Un solo acto puede abarcar <b>autorización-disposición</b> o <b>autorización-disposición-reconocimiento</b> de la obligación. Produce los mismos efectos que actos separados.', a: 'RD 67', examen: '2025'},
        {t: '<b>Retención de crédito</b>: certificación de que hay saldo suficiente para un gasto o una transferencia, que reserva ese importe. Las certificaciones las expide el <b>Interventor</b>.', a: 'RD 31.1 y 32.2'},
        {t: 'La ordenación se materializa en <b>relaciones de órdenes de pago</b>: importe bruto y líquido, acreedor y aplicación presupuestaria. También cabe orden individual.', a: 'RD 66.1-2'},
        {t: 'Las <b>bases de ejecución</b> fijan los documentos y requisitos que justifican el reconocimiento de la obligación.', a: 'RD 59.2'},
        {t: 'Las órdenes de pago siguen el <b>plan de disposición de fondos</b> del Presidente, con prioridad para <b>personal</b> y obligaciones de ejercicios anteriores.', a: '187'},
        {t: 'Gasto sin crédito: responden los ordenadores de gastos y pagos <b>en todo caso</b>, y los interventores si no advierten <b>por escrito</b> su improcedencia.', a: '188', examen: '2025'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Pagos a justificar · art. 190.1-2', reglas: [
          'Cuando los documentos no pueden acompañarse al expedir la orden.',
          'Justificación en <b>3 meses</b> como máximo.',
          'No se dan nuevas órdenes por los mismos conceptos a quien tenga fondos sin justificar.'
        ]},
        {titulo: 'Anticipos de caja fija · art. 190.3', reglas: [
          'Para gastos <b>periódicos o repetitivos</b>: dietas, locomoción, material no inventariable, conservación.',
          'Se justifican dentro del ejercicio; al menos en <b>diciembre</b> se rinden cuentas (RD 74.4).',
          'La cuantía global máxima la fija el <b>Pleno</b> (RD 73.4).'
        ]}
      ]}
    ]},

    {titulo: 'Liquidación y cuenta general', a: 'arts. 191-193 bis y 208-212; RD 500/1990, arts. 89-105', bloques: [
      {tipo: 'lista', items: [
        {t: 'Se liquida a <b>31 de diciembre</b>; cobros y pagos pendientes quedan a cargo de la Tesorería.', a: '191.1'},
        {t: 'Se confecciona antes del <b>1 de marzo</b>. La aprueba el <b>Presidente</b>, previo informe de la Intervención, y se da cuenta al Pleno en la primera sesión.', a: '191.3 y 193.4'},
        {t: 'La liquidación determina: pendientes de cobro y de pago, <b>resultado presupuestario</b>, <b>remanentes de crédito</b> y <b>remanente de tesorería</b>.', a: 'RD 93.2'},
        {t: 'Remanente de tesorería: pendientes de cobro, pendientes de pago y fondos líquidos a 31 de diciembre, descontando los derechos de difícil o imposible recaudación. Si es positivo, financia modificaciones, <b>nunca</b> las previsiones iniciales.', a: '191.2; RD 101, 103 y 104'},
        {t: 'Remanente negativo: el Pleno reduce gastos del nuevo presupuesto en la primera sesión; si no puede, operación de crédito; si no, el siguiente presupuesto se aprueba con <b>superávit</b> igual al déficit.', a: '193.1-3'},
        {t: 'Difícil cobro, mínimos de minoración: 25 % (dos ejercicios anteriores), 50 % (tercero), 75 % (cuarto y quinto), 100 % (resto).', a: '193 bis'}
      ]},
      {tipo: 'tabla', cab: ['Cuenta general', 'Plazo'], filas: [
        ['La rinde el Presidente', 'Antes del <b>15 de mayo</b> del año siguiente (212.1)'],
        ['Informe de la Comisión Especial de Cuentas', 'Antes del <b>1 de junio</b> (212.2)'],
        ['Exposición al público', '<b>15 días</b> (212.3)'],
        ['Aprobación por el Pleno', 'Antes del <b>1 de octubre</b> (212.4)'],
        ['Rendición al Tribunal de Cuentas', 'La hace el Presidente cuando el Pleno se ha pronunciado (212.5)']
      ]}
    ]},

    {titulo: 'Zaragoza: aprobación del presupuesto', a: 'Ley 10/2017, arts. 11.1.h, 14.1.b, 48 y 50', bloques: [
      {tipo: 'tabla', cab: ['', 'Régimen general (TRLRHL)', 'Zaragoza (Ley 10/2017)'], filas: [
        ['Iniciativa', 'El <b>Presidente</b> forma el presupuesto (168.1 y 4)', 'El <b>Gobierno de Zaragoza</b> aprueba el proyecto (50.a y 14.1.b)'],
        ['Llegada al Pleno', 'Antes del <b>15 de octubre</b> (168.4)', 'Antes del <b>15 de octubre</b> (50.c): igual'],
        ['Exposición pública', 'Del presupuesto <b>aprobado inicialmente</b>: 15 días, anuncio en el boletín de la provincia (169.1)', 'Del <b>proyecto</b>: 15 días, anuncio en el boletín oficial correspondiente (50.b)'],
        ['Aprobación', 'Inicial y definitiva por el Pleno. <b>Definitiva automática</b> si no hay reclamaciones (169.1)', '<b>Pleno</b>, en <b>acto único</b>, resolviendo las reclamaciones (48.3.d y 11.1.h) {{examen:2026}}. Sin aprobación tácita'],
        ['Fecha límite', 'Antes del <b>31 de diciembre</b> (169.2)', 'El art. 50 no fija fecha'],
        ['Enmiendas', 'El Pleno puede enmendar (168.4)', 'Si cambian ingresos: conformidad del Gobierno de Zaragoza. Si afectan a gastos: compensadas en la misma área de gobierno y naturaleza del gasto (50.d-e)'],
        ['Vigor y prórroga', 'Vigor al publicarse; prórroga automática con créditos iniciales (169.5-6)', 'Vigor tras su publicación oficial; prórroga automática del anterior (50.f)']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'No confundir: el <b>acuerdo único</b> del art. 168.5 TRLRHL impide aprobar por separado los presupuestos del general. El <b>acto único</b> del art. 48.3.d Ley 10/2017 es un trámite: el Pleno aprueba una sola vez y resuelve a la vez las reclamaciones.', a: '168.5; Ley 10/2017, 48.3.d'},
        {t: 'Ordenanzas fiscales en Zaragoza: proyecto del Gobierno de Zaragoza, <b>aprobación inicial por la Comisión plenaria</b>, exposición mínima de 30 días y aprobación por el Pleno; sin reclamaciones se entienden aprobadas {{examen:2026}}. El presupuesto no tiene esa regla.', a: 'Ley 10/2017, 49'},
        {t: 'Toda proposición o enmienda que aumente créditos o reduzca ingresos del ejercicio en curso necesita la conformidad del Gobierno de Zaragoza.', a: 'Ley 10/2017, 48.6'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'El presupuesto general incluye los presupuestos de todas las sociedades mercantiles locales', ok: 'Solo los estados de previsión de las de capital íntegramente local.', a: '164.1.c'},
    {x: 'Si el 1 de enero el presupuesto está aprobado pero sin publicar, ya rige', ok: 'Entra en vigor publicado; mientras tanto se prorroga el anterior.', a: '169.5-6'},
    {x: 'La prórroga se hace con los créditos definitivos del año anterior', ok: 'Con sus créditos iniciales.', a: '169.6'},
    {x: 'Sin reclamaciones, el Pleno debe aprobar de nuevo el presupuesto', ok: 'Se considera definitivamente aprobado.', a: '169.1'},
    {x: 'Si no hay crédito para un gasto urgente, se tramita un suplemento', ok: 'Sin crédito: crédito extraordinario. Crédito insuficiente: suplemento.', a: '177.1'},
    {x: 'La autorización del gasto vincula a la entidad frente a terceros', ok: 'La autorización no; la disposición sí.', a: 'RD 500/1990, arts. 54 y 56'},
    {x: 'Se pueden acumular el reconocimiento de la obligación y la ordenación del pago', ok: 'Solo autorización-disposición o autorización-disposición-reconocimiento.', a: 'RD 500/1990, art. 67'},
    {x: 'El interventor responde siempre del gasto sin crédito', ok: 'Solo si no advierte por escrito su improcedencia. Los ordenadores, en todo caso.', a: '188'},
    {x: 'La liquidación del presupuesto la aprueba el Pleno', ok: 'El Presidente, previo informe de la Intervención. Al Pleno se le da cuenta.', a: '191.3 y 193.4'},
    {x: 'En Zaragoza, sin reclamaciones, el presupuesto queda aprobado automáticamente', ok: 'No: aprueba el Pleno en acto único. No hay aprobación tácita.', a: 'Ley 10/2017, arts. 48.3.d y 50'}
  ],

  examenes: [
    'Art. 164.1 (qué integra el presupuesto general): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 1.',
    'Art. 166.1.a (planes de inversión para cuatro años): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 2.',
    'Art. 167.3.b (gastos corrientes): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 3.',
    'Art. 169.1 (exposición de 15 días): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 4.',
    'Art. 169.6 (prórroga con créditos iniciales): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 5.',
    'RD 500/1990, art. 56 (disposición con relevancia para con terceros): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 8.',
    'RD 500/1990, art. 67.1 (acumulación de fases): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 9.',
    'Art. 188 (responsabilidad personal): examen oficial 1-jun-2025, segunda prueba, caso 1, pregunta 10.',
    'Ley 10/2017, arts. 11, 14 y 50 (quién aprueba el presupuesto en Zaragoza): examen oficial 31-may-2026, pregunta 12.',
    'Ley 10/2017, art. 49 (ordenanzas fiscales en Zaragoza): examen oficial 31-may-2026, pregunta 37.',
    'Art. 173.2 (inembargabilidad): examen oficial 31-may-2026, segundo ejercicio, supuesto 1, pregunta 9.'
  ]
});
