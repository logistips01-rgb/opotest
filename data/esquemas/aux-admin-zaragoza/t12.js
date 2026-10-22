/* Esquema · Auxiliar Administrativo · Tema 12
   Fuente única: Real Decreto Legislativo 2/2004 (TRLRHL), texto consolidado BOE-A-2004-4214
   (última actualización publicada el 07/10/2026), Títulos I y II, arts. 2-130.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 12, {
  titulo: 'Haciendas Locales (I): recursos de las haciendas locales y de los municipios',
  epigrafe: 'La Ley reguladora de las Haciendas Locales (I). Recursos de las haciendas locales. Recursos de los municipios.',
  etiquetas: ['TRLRHL · arts. 2 a 130', 'Títulos I y II'],
  fuentes: ['Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales. Texto consolidado BOE-A-2004-4214 (última actualización publicada el 07/10/2026), Título I (arts. 2 a 55) y Título II (arts. 56 a 130).'],

  esencial: [
    {t: 'La hacienda local tiene <b>8 clases de recursos</b>: patrimonio, tributos propios y recargos, participaciones en tributos, subvenciones, precios públicos, crédito, multas y demás prestaciones de derecho público.', a: 'art. 2.1'},
    {t: 'Tributos propios: <b>tasas</b>, <b>contribuciones especiales</b> e <b>impuestos</b>. Si el servicio es voluntario y lo presta también el sector privado, no hay tasa: cabe <b>precio público</b>.', a: 'arts. 2.1.b, 20.1 y 41'},
    {t: 'Impuestos <b>obligatorios</b>: IBI, IAE e IVTM. <b>Potestativos</b>: ICIO e IIVTNU.', a: 'art. 59'},
    {t: 'Ordenanza fiscal: exposición pública <b>30 días</b> como mínimo. Si nadie reclama, el acuerdo provisional queda definitivo <b>sin acuerdo plenario</b>.', a: 'art. 17'},
    {t: 'Contra los actos de aplicación de tributos locales <b>solo cabe recurso de reposición</b>: un mes para interponerlo, un mes para resolverlo.', a: 'art. 14.2'}
  ],

  mapa: [
    {titulo: 'Título I · Recursos de las haciendas locales', rango: 'arts. 2-55', items: [
      ['2', 'Enumeración'], ['3-5', 'Ingresos de derecho privado'], ['6-14', 'Tributos: normas generales'],
      ['15-19', 'Ordenanzas fiscales'], ['20-27', 'Tasas'], ['28-37', 'Contribuciones especiales'],
      ['38', 'Impuestos y recargos'], ['39', 'Participaciones en tributos'], ['40', 'Subvenciones'],
      ['41-47', 'Precios públicos'], ['48-55', 'Operaciones de crédito']
    ]},
    {titulo: 'Título II · Recursos de los municipios', rango: 'arts. 56-130', items: [
      ['56', 'Enumeración'], ['57-58', 'Tasas y contribuciones especiales'], ['59', 'Enumeración de impuestos'],
      ['60-77', 'IBI'], ['78-91', 'IAE'], ['92-99', 'IVTM'], ['100-103', 'ICIO'], ['104-110', 'IIVTNU'],
      ['111-117', 'Cesión de impuestos del Estado'], ['118-126', 'Participación en tributos del Estado'],
      ['127', 'Precios públicos'], ['128-130', 'Prestación personal y de transporte']
    ]}
  ],

  cifras: [
    {v: '90 %', d: 'Máximo del coste que puede ser base imponible de las contribuciones especiales {{examen:2025}}', a: 'art. 31.1'},
    {v: '30 días', d: 'Exposición mínima, en el tablón, de los acuerdos provisionales sobre ordenanzas fiscales', a: 'art. 17.1'},
    {v: '1 mes', d: 'Para interponer el recurso de reposición, y también para resolverlo', a: 'art. 14.2.c y l'},
    {v: '1,5 %', d: 'Tasa de empresas de suministros por ocupar vías públicas: ingresos brutos de facturación', a: 'art. 24.1.c'},
    {v: '0,4 % y 1,10 %', d: 'IBI urbano: tipo mínimo y supletorio, y tipo máximo {{examen:2025}} {{examen:2026}}', a: 'art. 72.1'},
    {v: '4 %', d: 'Tipo máximo del ICIO', a: 'art. 102.3'},
    {v: '30 %', d: 'Tipo máximo del IIVTNU', a: 'art. 108.1'},
    {v: '20 años', d: 'Periodo máximo de generación del incremento en el IIVTNU {{examen:2026}}', a: 'art. 107.1'},
    {v: '2', d: 'Coeficiente máximo con el que el ayuntamiento puede subir las cuotas del IVTM', a: 'art. 95.4'},
    {v: '15 días', d: 'Prestación personal: máximo al año, y no más de 3 consecutivos {{examen:2025}}', a: 'art. 129.3'}
  ],

  secciones: [
    {titulo: 'Recursos y normas comunes', a: 'arts. 2-14', bloques: [
      {tipo: 'lista', items: [
        {t: 'Recursos: ingresos de <b>patrimonio</b> y demás de derecho privado; <b>tributos propios</b> y recargos sobre impuestos de la CA o de otras entidades locales; <b>participaciones</b> en tributos del Estado y de las CCAA; <b>subvenciones</b>; <b>precios públicos</b>; operaciones de <b>crédito</b>; <b>multas</b> y sanciones; demás prestaciones de derecho público.', a: '2.1'},
        {t: 'Para cobrar tributos y demás ingresos de derecho público, la hacienda local tiene las <b>prerrogativas de la hacienda del Estado</b>.', a: '2.2'},
        {t: 'Ingresos de derecho privado: rendimientos del <b>patrimonio</b> y adquisiciones por herencia, legado o donación. Nunca los que procedan de bienes de <b>dominio público</b>. Se hacen efectivos con normas y procedimientos del <b>derecho privado</b>.', a: '3 y 4', examen: '2026'},
        {t: 'Lo obtenido al vender o gravar bienes patrimoniales <b>no puede financiar gasto corriente</b>, salvo parcelas sobrantes de vías públicas no edificables o efectos no utilizables.', a: '5'},
        {t: 'Delegación de gestión, liquidación, inspección y recaudación en la CA o en otras entidades locales: acuerdo del <b>Pleno</b>.', a: '7'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Principios y beneficios fiscales · arts. 6 y 9', reglas: [
          'No gravar bienes, actividades, rendimientos ni gastos de <b>fuera del territorio</b> de la entidad.',
          'No obstaculizar la libre circulación de personas, mercancías, servicios y capitales.',
          'Beneficios fiscales: solo los de <b>normas con rango de ley</b> o tratados, y los de las ordenanzas en los supuestos que prevea la ley. En particular, la ordenanza puede bonificar <b>hasta el 5 %</b> de la cuota por domiciliar, anticipar pagos o colaborar en la recaudación.'
        ]},
        {titulo: 'Recurso de reposición · art. 14.2', reglas: [
          '<b>Único recurso</b> contra los actos de aplicación de tributos e ingresos de derecho público locales; si la ley prevé reclamación económico-administrativa, va antes. Lo resuelve el órgano que dictó el acto.',
          'Plazo: <b>un mes</b> desde la notificación o desde el fin de la exposición de padrones o matrículas. Sin abogado ni procurador obligatorios.',
          '<b>No suspende</b> la ejecución. Puede suspenderse; decide el órgano que dictó el acto {{examen:2026}}. Las sanciones tributarias se suspenden automáticamente.',
          'Se resuelve en <b>un mes</b>; si no, se entiende <b>desestimado</b>. Después, contencioso-administrativo directamente.'
        ]}
      ]}
    ]},

    {titulo: 'Ordenanzas fiscales', a: 'arts. 15-19', bloques: [
      {tipo: 'lista', items: [
        {t: 'Salvo IBI, IAE e IVTM, hay que acordar la <b>imposición</b> del tributo y aprobar su ordenanza fiscal. En esos tres, la ordenanza solo hace falta si el ayuntamiento fija elementos de la cuota.', a: '15'},
        {t: 'Contenido mínimo: hecho imponible, sujeto pasivo, responsables, exenciones, reducciones y bonificaciones, base imponible y liquidable, tipo o cuota, período impositivo y devengo; regímenes de declaración e ingreso; fechas de aprobación y de aplicación.', a: '16.1'}
      ]},
      {tipo: 'tabla', cab: ['Paso', 'Regla'], filas: [
        ['Acuerdo provisional', 'Tablón de anuncios <b>30 días</b> como mínimo para examinar el expediente y reclamar (17.1).'],
        ['Anuncio', '<b>Boletín oficial de la provincia</b>. Más de <b>10.000 habitantes</b>: además, un diario de los de mayor difusión (17.2).'],
        ['Acuerdo definitivo', 'Resuelve las reclamaciones. <b>Sin reclamaciones</b>, el provisional queda definitivo <b>sin acuerdo plenario</b> (17.3).'],
        ['Entrada en vigor', 'Cuando se publican el acuerdo definitivo y el <b>texto íntegro</b> en el boletín oficial de la provincia (17.4).'],
        ['Impugnación', 'Solo <b>recurso contencioso-administrativo</b>, desde su publicación (19.1).']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Pueden reclamar los interesados directos o afectados y los colegios, cámaras y asociaciones que defiendan sus intereses.', a: '18'},
        {t: 'Más de <b>20.000 habitantes</b>: editan el texto íntegro de las ordenanzas fiscales en el <b>primer cuatrimestre</b>.', a: '17.5'}
      ]}
    ]},

    {titulo: 'Tasas y precios públicos', a: 'arts. 20-27 y 41-47', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Tasas · arts. 20-27', reglas: [
          'Por <b>utilización privativa o aprovechamiento especial</b> del dominio público local.',
          'Por servicios o actividades de derecho público que afecten o beneficien de modo particular, si <b>no son de solicitud o recepción voluntaria</b> o <b>no los presta el sector privado</b>.',
          'Importe por servicio: <b>no puede exceder</b> del coste real o previsible.',
          'Ayuntamientos: tasa por la celebración de <b>matrimonios civiles</b> {{examen:2026}}.'
        ]},
        {titulo: 'Precios públicos · arts. 41-47', reglas: [
          'Por servicios o actividades de competencia local cuando <b>no concurre</b> ninguna circunstancia del art. 20.1.B.',
          'Importe: cubre <b>como mínimo</b> el coste. Puede bajar por razones sociales, benéficas, culturales o de interés público, consignando la diferencia en el presupuesto.',
          'Se debe desde que empieza el servicio; cabe depósito previo. Puede exigirse por <b>vía de apremio</b>.',
          'Los fija el <b>Pleno</b> (delegable). Puede atribuirse a organismos autónomos y consorcios, salvo si no cubren el coste.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Sin tasa (21.1) ni precio público (42): agua en <b>fuentes públicas</b>, <b>alumbrado</b> de vías públicas, vigilancia pública general, <b>protección civil</b>, <b>limpieza de la vía pública</b> y enseñanza obligatoria.', a: '21.1 y 42'},
        {t: 'Alcantarillado y recogida de residuos <b>sí</b> pueden tener tasa: están en la lista del art. 20.4 {{examen:2026}}.', a: '20.4.r y s'},
        {t: 'Tasa de empresas de suministros por el suelo, subsuelo o vuelo de vías municipales: <b>1,5 %</b> de los ingresos brutos de facturación. No incluye telefonía móvil.', a: '24.1.c'},
        {t: 'Devengo: al iniciarse el uso o el servicio, o al presentar la solicitud. Si es periódica: <b>1 de enero</b> y año natural, con prorrateo en altas y bajas.', a: '26'},
        {t: 'Sustitutos del contribuyente: propietarios de viviendas o locales; constructores y contratistas en licencias urbanísticas; aseguradoras en servicios de incendios; propietarios en entradas de vehículos.', a: '23.2'}
      ]}
    ]},

    {titulo: 'Contribuciones especiales', a: 'arts. 28-37', bloques: [
      {tipo: 'lista', items: [
        {t: 'Hecho imponible: obtener un <b>beneficio o aumento de valor</b> de los bienes por obras públicas o por establecer o ampliar servicios públicos locales.', a: '28'},
        {t: 'Lo recaudado solo puede pagar la obra o servicio que lo motivó.', a: '29.3'},
        {t: 'Base imponible: <b>como máximo el 90 %</b> del coste que soporta la entidad (coste total menos subvenciones recibidas).', a: '31.1 y 31.5', examen: '2025'},
        {t: 'Sujetos pasivos: los especialmente beneficiados. En extinción de incendios, además de los propietarios, las <b>compañías de seguros</b> del ramo en el municipio.', a: '30.2.c'},
        {t: 'Aplazamiento o fraccionamiento a solicitud: <b>máximo 5 años</b>.', a: '32.3'},
        {t: 'Devengo: al ejecutarse la obra o empezar el servicio. Cabe exigir <b>anticipo</b> del coste previsto para el año siguiente.', a: '33.1-2'},
        {t: 'Acuerdo de <b>imposición</b> en cada caso y acuerdo de <b>ordenación</b> de inexcusable adopción.', a: '34'},
        {t: 'Asociación administrativa de contribuyentes: <b>mayoría absoluta</b> de los afectados que representen al menos <b>dos tercios</b> de las cuotas.', a: '37'},
        {t: 'Las tasas por servicios <b>no excluyen</b> contribuciones especiales por establecer o ampliar esos servicios.', a: '22'}
      ]}
    ]},

    {titulo: 'Impuestos municipales: cuadro comparativo', a: 'arts. 59-110', bloques: [
      {tipo: 'tabla', cab: ['Impuesto', 'Exigencia y naturaleza', 'Hecho imponible', 'Tipo o cuota (límites legales)'], filas: [
        ['<b>IBI</b> (60-77)', '<b>Obligatorio</b>. Directo, real.', 'Titularidad sobre inmuebles rústicos, urbanos y de características especiales de: concesión administrativa, derecho de superficie, usufructo o propiedad, por este orden.', 'Urbanos: mínimo y supletorio <b>0,4 %</b>, máximo <b>1,10 %</b> (72.1; el 72.3 permite sumar algunos puntos). Rústicos: 0,3 % y 0,90 %. Características especiales: supletorio 0,6 %, entre 0,4 % y 1,3 %.'],
        ['<b>IAE</b> (78-91)', '<b>Obligatorio</b>. Directo, real.', 'Mero ejercicio en territorio nacional de actividades empresariales, profesionales o artísticas, con o sin local y estén o no en las tarifas.', 'Sin tipo: cuotas de las tarifas, con coeficiente de ponderación (86) y, si lo fija el ayuntamiento, de situación entre <b>0,4 y 3,8</b> (87).'],
        ['<b>IVTM</b> (92-99)', '<b>Obligatorio</b>. Directo.', 'Titularidad de vehículos de tracción mecánica aptos para circular por las vías públicas.', 'Cuadro de tarifas legal. El ayuntamiento puede aplicar un coeficiente de hasta <b>2</b>.'],
        ['<b>ICIO</b> (100-103)', '<b>Potestativo</b>. <b>Indirecto</b>.', 'Realizar en el término una construcción, instalación u obra que exija licencia (obtenida o no), declaración responsable o comunicación previa, si la licencia o el control corresponde al ayuntamiento de la imposición.', 'Máximo <b>4 %</b> sobre el coste de ejecución material.'],
        ['<b>IIVTNU</b> (104-110)', '<b>Potestativo</b>. Directo.', 'Incremento de valor de terrenos urbanos que se pone de manifiesto al transmitir su propiedad o al constituir o transmitir un derecho real de goce limitativo del dominio.', 'Máximo <b>30 %</b>.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Los impuestos se exigen <b>sin acuerdo de imposición</b>, salvo que la ley lo pida. ICIO e IIVTNU se establecen con su ordenanza fiscal.', a: '38.1 y 59.2'}
      ]}
    ]},

    {titulo: 'Impuestos municipales: datos clave', a: 'arts. 61-110', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'IBI e IAE', reglas: [
          'IBI: el primer derecho del orden excluye los siguientes. Si hay usufructo, tributa el <b>usufructuario</b> {{examen:2026}}.',
          'IBI: base imponible = <b>valor catastral</b> {{examen:2026}}. Se devenga el primer día del período impositivo, que es el <b>año natural</b>.',
          'IBI: exención de inmuebles con cuota líquida pequeña: <b>potestativa</b>; la cuantía la fija la ordenanza {{examen:2026}}.',
          'IBI: viviendas de protección oficial, bonificación del <b>50 %</b> durante 3 períodos tras la calificación definitiva, a petición.',
          'IAE: exentos, entre otros, las <b>personas físicas</b>, las entidades con cifra de negocios <b>inferior a 1.000.000 €</b> y quien inicia actividad, en los <b>dos primeros</b> períodos.',
          'IAE: matrícula y gestión censal, Administración del Estado. Liquidación y recaudación, ayuntamientos.'
        ]},
        {titulo: 'IVTM, ICIO e IIVTNU', reglas: [
          'IVTM: paga el titular que figura en el <b>permiso de circulación</b>; lo gestiona el ayuntamiento de ese domicilio. Bonificaciones potestativas: hasta 75 % por carburante, hasta <b>75 %</b> por motor {{examen:2026}}, hasta 100 % históricos o de 25 años o más.',
          'ICIO: contribuyente, el <b>dueño</b> de la obra (quien soporta su coste). Base: <b>coste de ejecución material</b>, sin IVA, tasas, honorarios ni beneficio del contratista. Se devenga al <b>iniciar</b> la obra, aunque no haya licencia.',
          'IIVTNU: no sujetos, entre otros, los terrenos <b>rústicos</b> ni las transmisiones en que se acredite que <b>no hay incremento</b> de valor.',
          'IIVTNU: base = valor del terreno al devengo × coeficiente según los años de generación (máximo <b>20 años</b>). Si el incremento real es menor, se toma este.',
          'IIVTNU: contribuyente a título lucrativo, el <b>adquirente</b>; a título oneroso, el <b>transmitente</b>. Declaración: <b>30 días hábiles</b> inter vivos; <b>6 meses</b>, prorrogables a un año, por causa de muerte.'
        ]}
      ]}
    ]},

    {titulo: 'Operaciones de crédito', a: 'arts. 48-55', bloques: [
      {tipo: 'lista', items: [
        {t: 'Todas las operaciones financieras están sujetas al principio de <b>prudencia financiera</b>.', a: '48 bis.1', examen: '2026'},
        {t: 'Largo plazo: para financiar <b>inversiones</b> o sustituir operaciones anteriores.', a: '49.1'},
        {t: 'Corto plazo, para necesidades transitorias de tesorería: <b>no más de un año</b> y, en conjunto, <b>no más del 30 %</b> de los ingresos corrientes liquidados del ejercicio anterior.', a: '51'},
        {t: 'Hace falta <b>presupuesto aprobado</b>. Con presupuesto prorrogado solo caben operaciones de tesorería y ciertas operaciones a largo plazo para inversiones.', a: '50'},
        {t: 'Con informe previo de la Intervención, concierta el <b>Presidente</b>: largo plazo previsto en el presupuesto hasta el <b>10 %</b> de los recursos ordinarios; corto plazo hasta el <b>15 %</b> de los recursos corrientes liquidados. Por encima, el <b>Pleno</b>.', a: '52.2'},
        {t: 'Necesitan autorización del Ministerio de Hacienda o de la CA competente: ahorro neto negativo, o capital vivo por encima del <b>110 %</b> de los ingresos corrientes liquidados o devengados.', a: '53.1-2'}
      ]}
    ]},

    {titulo: 'Participación en tributos y prestación personal', a: 'arts. 111-130', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Cesión y participación · arts. 111-126', reglas: [
          'Cesión de recaudación de IRPF, IVA e impuestos especiales a municipios <b>capital de provincia o de CA</b> o de <b>75.000 habitantes</b> o más.',
          'Esos municipios participan además mediante el <b>Fondo Complementario de Financiación</b>.',
          'Resto de municipios: 75 % según población ponderada, 12,5 % según esfuerzo fiscal y 12,5 % según el inverso de la capacidad tributaria.',
          'Municipio turístico: más de 20.000 habitantes y más viviendas de segunda residencia que principales.'
        ]},
        {titulo: 'Prestación personal y de transporte · arts. 128-130', reglas: [
          'Solo municipios de <b>hasta 5.000 habitantes</b>, para obras municipales.',
          'Personal: residentes, salvo menores de 18 y mayores de 55, personas con discapacidad, reclusos y mozos en filas.',
          'Personal: máximo <b>15 días al año</b> y <b>3 consecutivos</b> {{examen:2025}}. Redimible por el doble del salario mínimo.',
          'Transporte con vehículos de tracción mecánica: máximo <b>5 días al año</b>, ninguno consecutivo. Redimible por el triple del salario mínimo.'
        ]}
      ]}
    ]}
  ],

  trampas: [
    {x: 'Se puede cobrar tasa por el alumbrado público o la limpieza de la vía pública', ok: 'Prohibido: están en la lista del art. 21.1.', a: '21.1'},
    {x: 'No se puede cobrar tasa por el alcantarillado', ok: 'Sí se puede: está en el art. 20.4, no en el 21.1.', a: '20.4.r'},
    {x: 'El ICIO y el IIVTNU son obligatorios', ok: 'Son potestativos. Obligatorios: IBI, IAE e IVTM.', a: '59'},
    {x: 'El ICIO es un impuesto directo', ok: 'Es indirecto. IBI, IAE, IVTM e IIVTNU son directos.', a: '100.1'},
    {x: 'La base de las contribuciones especiales puede ser el 100 % del coste', ok: 'Como máximo, el 90 %.', a: '31.1'},
    {x: 'Si nadie reclama, el Pleno debe volver a aprobar la ordenanza fiscal', ok: 'El acuerdo provisional queda definitivo sin acuerdo plenario.', a: '17.3'},
    {x: 'El precio público no puede superar el coste del servicio', ok: 'Al revés: cubre como mínimo el coste. Es la tasa por servicio la que no puede excederlo.', a: '44.1 y 24.2'},
    {x: 'El recurso de reposición suspende la liquidación', ok: 'No suspende, salvo que se acuerde la suspensión. Las sanciones sí se suspenden solas.', a: '14.2.i'},
    {x: 'Con usufructo, el IBI lo paga el propietario', ok: 'Lo paga el usufructuario: el usufructo va antes que la propiedad.', a: '61.1-2'},
    {x: 'En una compraventa, el IIVTNU lo paga el comprador', ok: 'A título oneroso, el contribuyente es el transmitente.', a: '106.1.b'}
  ],

  examenes: [
    'Arts. 21.1 y 42 (limpieza de la vía pública: ni tasa ni precio público): examen oficial 1-jun-2025, pregunta 6. La respuesta tomada como oficial (la plantilla de ese examen no está publicada) da por buenas las dos opciones, también «Las entidades locales podrán exigir precios públicos». El art. 42 dice: «No podrán exigirse precios públicos por los servicios y actividades enumerados en el artículo 21 de esta ley». El esquema sigue la ley y no marca este punto.',
    'Art. 31.1 (90 % del coste en contribuciones especiales): examen oficial 1-jun-2025, pregunta 7.',
    'Art. 72.1 (IBI urbano, 0,4 %): examen oficial 1-jun-2025, pregunta 12, y 31-may-2026, segundo ejercicio, supuesto 2, pregunta 14.',
    'Art. 129.3 (15 días al año y 3 consecutivos): examen oficial 1-jun-2025, pregunta 28.',
    'Art. 30.2.c (sujetos pasivos de las contribuciones especiales por extinción de incendios): examen oficial 1-jun-2025, reserva 1. La respuesta tomada como oficial (la plantilla de ese examen no está publicada) da por buenas las dos opciones: «Los titulares de derechos sobre los bienes afectados» y «Las compañías de seguros que desarrollen su actividad en el ramo, en el término municipal correspondiente». El art. 30.2.c dice «los propietarios de los bienes afectados», no los titulares de derechos; lo de las compañías de seguros sí es literal. El esquema sigue la ley y no marca este punto.',
    'Art. 100.1 (hecho imponible del ICIO): examen oficial 1-jun-2025, reserva 4. La respuesta tomada como oficial (la plantilla de ese examen no está publicada) dice «independientemente de que la expedición de la licencia corresponda al ayuntamiento de la imposición». El art. 100.1 dice «siempre que la expedición de la licencia o la actividad de control corresponda al ayuntamiento de la imposición». El esquema sigue la ley y no marca este punto.',
    'Art. 48 bis.1 (prudencia financiera): examen oficial 31-may-2026, pregunta 14.',
    'Art. 107.1 (20 años en el IIVTNU): examen oficial 31-may-2026, pregunta 33.',
    'Arts. 20.4 y 21.1 (alcantarillado: cabe tasa): examen oficial 31-may-2026, pregunta 43.',
    'Art. 20.5 (tasa por matrimonio civil): examen oficial 31-may-2026, pregunta 44.',
    'Art. 95.6 (IVTM, bonificación de hasta el 75 % por motor): examen oficial 31-may-2026, reserva 1.',
    'Art. 4 (los ingresos de derecho privado se hacen efectivos con normas y procedimientos del derecho privado): examen oficial 31-may-2026, segundo ejercicio, supuesto 1, pregunta 5.',
    'Arts. 61, 62.4 y 65 (IBI: usufructuario, exención potestativa, valor catastral): examen oficial 31-may-2026, segundo ejercicio, supuesto 2, preguntas 11, 12 y 13.',
    'Art. 14.2.i (la reposición no suspende por sí sola): examen oficial 31-may-2026, segundo ejercicio, supuesto 2, pregunta 16.',
    'Art. 72.4, párrafos tercero y cuarto (recargo de hasta el 50 % de la cuota líquida en inmuebles de uso residencial desocupados con carácter permanente): examen oficial 31-may-2026, segundo ejercicio, supuesto 2, pregunta 15. Desde el 08/10/2026 el recargo está en el art. 72.4 bis (Real Decreto-ley 29/2026), con efectos para los períodos impositivos que empiecen desde esa fecha: en el IBI, desde 2027.'
  ]
});
