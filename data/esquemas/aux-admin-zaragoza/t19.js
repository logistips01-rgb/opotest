/* Esquema · Auxiliar Administrativo · Tema 19
   Fuentes: LBRL (Ley 7/1985) BOE-A-1985-5392, Título VII (arts. 89-104 bis; 92 bis.6 en la redacción
   del RDL 13/2026, en vigor desde el 04/06/2026) y art. 127.1.h;
   TRRL (RDLeg 781/1986) BOE-A-1986-9865, Título VII (arts. 126-177);
   TREBEP (RDLeg 5/2015) BOE-A-2015-11719, art. 3, DA 2.ª, DD única y DF 4.ª.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 19, {
  titulo: 'Empleados públicos (III): función pública local',
  epigrafe: 'Los empleados públicos (III): la función pública local.',
  etiquetas: ['LBRL · arts. 89 a 104 bis', 'TRRL · arts. 126 a 177', 'TREBEP · art. 3'],
  fuentes: [
    'Ley 7/1985, de 2 de abril, reguladora de las Bases del Régimen Local (LBRL). Texto consolidado BOE-A-1985-5392, Título VII, arts. 89 a 104 bis, y art. 127.1.h (municipios de gran población).',
    'Real Decreto Legislativo 781/1986, de 18 de abril, texto refundido de las disposiciones legales vigentes en materia de Régimen Local (TRRL). Texto consolidado BOE-A-1986-9865, Título VII, arts. 126 a 177.',
    'Real Decreto Legislativo 5/2015, de 30 de octubre, texto refundido de la Ley del Estatuto Básico del Empleado Público (TREBEP). Texto consolidado BOE-A-2015-11719, art. 3, disposición adicional segunda, disposición derogatoria única y disposición final cuarta.'
  ],

  esencial: [
    {t: 'Los funcionarios locales se rigen por la <b>LBRL</b> y, en lo no dispuesto en ella, por el <b>Estatuto Básico</b>, el resto de la legislación estatal y la autonómica.', a: 'LBRL art. 92.1', examen: '2026'},
    {t: 'Las funciones con <b>potestades públicas</b> o de salvaguardia de los intereses generales son <b>exclusivas de funcionarios de carrera</b>. Con carácter general, los puestos son de funcionarios.', a: 'LBRL art. 92.2-3', examen: '2026'},
    {t: 'Habilitación de carácter nacional: <b>Secretaría</b> (fe pública y asesoramiento legal) y <b>control interno, contabilidad, tesorería y recaudación</b>. Tres subescalas.', a: 'LBRL art. 92 bis'},
    {t: 'Los demás funcionarios se integran en la Escala de <b>Administración General</b> (5 subescalas) o de <b>Administración Especial</b> (Técnica y Servicios Especiales).', a: 'TRRL art. 167'},
    {t: 'Personal eventual: número, características y retribuciones los fija el <b>Pleno</b> al comienzo del mandato (en municipios de gran población, como Zaragoza, el número y régimen los aprueba la <b>Junta de Gobierno Local</b>: art. 127.1.h); nombra y cesa libremente el <b>Alcalde</b>. Topes por población.', a: 'LBRL arts. 104, 104 bis y 127.1.h'}
  ],

  mapa: [
    {titulo: 'LBRL · Título VII · Personal', rango: 'arts. 89-104 bis', items: [
      ['89', 'Clases de personal'], ['90', 'Plantilla, RPT y Registro de personal'], ['91', 'Oferta de empleo y selección'],
      ['92', 'Régimen y funciones reservadas'], ['92 bis', 'Habilitación de carácter nacional'], ['93', 'Retribuciones'],
      ['94', 'Jornada'], ['95', 'Participación sindical'], ['96', 'Formación'], ['97', 'Publicación de convocatorias'],
      ['98-99', 'Cap. III: derogado'], ['100', 'Selección'], ['101', 'Provisión de puestos'], ['102', 'Bases y nombramiento'],
      ['103', 'Personal laboral'], ['103 bis', 'Masa salarial laboral'], ['104', 'Personal eventual'], ['104 bis', 'Topes de eventuales']
    ]},
    {titulo: 'TRRL · Título VII · Personal', rango: 'arts. 126-177', items: [
      ['126-129', 'Plantillas, RPT, oferta y competencias'], ['130-140', 'Concepto, selección, ingreso, pérdida, jubilación y situaciones'],
      ['141-145', 'Derechos, deberes e incompatibilidades'], ['146-152', 'Régimen disciplinario'], ['153-157', 'Retribuciones'],
      ['158-166', 'Cap. III: derogado'], ['167-175 bis', 'Escalas y subescalas'], ['176-177', 'Eventual y laboral']
    ]},
    {titulo: 'TREBEP · Aplicación local', rango: 'art. 3 y disposiciones', items: [
      ['3', 'Personal funcionario de las entidades locales'], ['DA 2.ª', 'Instituciones forales'],
      ['DD única', 'Derogaciones'], ['DF 4.ª', 'Entrada en vigor y normas que siguen vigentes']
    ]}
  ],

  cifras: [
    {v: '30 días', d: 'Para remitir al Estado y a la comunidad autónoma la plantilla y la RPT aprobadas', a: 'TRRL art. 127'},
    {v: '1 mes', d: 'Desde la aprobación del Presupuesto, para aprobar y publicar la oferta de empleo', a: 'TRRL art. 128.1'},
    {v: '50 %', d: 'Máximo de plazas convocadas reservables a promoción interna', a: 'TRRL art. 134.1'},
    {v: '80 % · 15 % · 5 %', d: 'Habilitados: peso de los méritos generales (mínimo), autonómicos y locales (hasta)', a: 'LBRL art. 92 bis.6'},
    {v: '2 años', d: 'Permanencia mínima del habilitado en un puesto obtenido por concurso', a: 'LBRL art. 92 bis.8'},
    {v: '6 años · 3 años', d: 'Habilitados: tope de la suspensión de funciones y de la prohibición de destino tras la destitución (falta muy grave · grave)', a: 'LBRL art. 92 bis.11'},
    {v: '20 días', d: 'Para publicar la masa salarial del personal laboral', a: 'LBRL art. 103 bis.3'},
    {v: '0,7 %', d: 'Tope de eventuales en municipios de más de 500.000 habitantes, sobre los puestos de la plantilla {{examen:2026}}', a: 'LBRL art. 104 bis.1.g'},
    {v: 'Semestral', d: 'Publicación del número de puestos de personal eventual', a: 'LBRL art. 104 bis.5'},
    {v: 'Trimestral', d: 'Informe del Presidente al Pleno sobre los topes de eventuales', a: 'LBRL art. 104 bis.6'}
  ],

  secciones: [
    {titulo: 'Régimen jurídico y clases de personal', a: 'LBRL 89 y 92; TREBEP 3', bloques: [
      {tipo: 'lista', items: [
        {t: 'Personal de las entidades locales: <b>funcionarios de carrera</b>, <b>laborales</b> y <b>eventuales</b> de confianza o asesoramiento especial.', a: 'LBRL 89'},
        {t: 'Orden de fuentes: LBRL; en lo no dispuesto, Estatuto Básico, resto de legislación estatal de función pública y legislación autonómica.', a: 'LBRL 92.1', examen: '2026'},
        {t: 'El art. 92.1 cita aún la Ley 7/2007; las remisiones a ella se entienden hechas al texto refundido de 2015.', a: 'RDLeg 5/2015, DA única'},
        {t: 'El TREBEP: el funcionario local se rige por la legislación estatal (de la que forma parte el Estatuto) y la autonómica, con respeto a la <b>autonomía local</b>.', a: 'TREBEP 3.1'},
        {t: 'Policía Local: también TREBEP y legislación autonómica, salvo lo que establece la LO 2/1986 de Fuerzas y Cuerpos de Seguridad.', a: 'TREBEP 3.2'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Funciones reservadas · LBRL 92.2-3', reglas: [
          'Con carácter general, los puestos de la Administración local y sus organismos autónomos los desempeñan <b>funcionarios</b>.',
          {t: '<b>Exclusivas de funcionarios de carrera</b>: participación directa o indirecta en potestades públicas o en la salvaguardia de los intereses generales, y las que impliquen ejercicio de autoridad.', examen: '2026'}
        ]},
        {titulo: 'Qué está derogado', reglas: [
          'LBRL, Título VII, cap. III (arts. 98-99): derogado por el TREBEP, DD única.d.',
          'TRRL, Título VII, cap. III (arts. 158-166): derogado por el TREBEP, DD única.e.',
          'Esa derogación tiene el alcance de la DF 4.ª.2: hasta que se dicten las leyes de función pública y sus reglamentos, siguen en vigor las normas sobre ordenación, planificación y gestión de recursos humanos <b>en tanto no se opongan</b> al Estatuto.',
          'LBRL art. 104 bis, apartados 3 y 4: <b>anulados</b> por la STC 54/2017.'
        ]}
      ]}
    ]},

    {titulo: 'Plantilla, RPT y oferta de empleo', a: 'LBRL 90-91; TRRL 126-128', bloques: [
      {tipo: 'lista', items: [
        {t: '<b>Plantilla</b>: se aprueba <b>cada año con el Presupuesto</b> e incluye todos los puestos de funcionarios, laborales y eventuales. Principios: racionalidad, economía y eficiencia.', a: 'LBRL 90.1; TRRL 126.1'},
        {t: '<b>RPT</b>: la forma cada Corporación; las normas para hacerla las fija el Estado.', a: 'LBRL 90.2; TRRL 126.4'},
        {t: '<b>Registro de personal</b>: sus datos determinan las nóminas.', a: 'LBRL 90.3'},
        {t: 'Aprobadas plantilla y RPT: copia al Estado y a la comunidad autónoma en <b>30 días</b> y publicación íntegra en el BOP con el resumen del Presupuesto.', a: 'TRRL 127'},
        {t: 'Modificar la plantilla durante el Presupuesto exige los trámites de modificación del Presupuesto.', a: 'TRRL 126.3'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Ampliar la plantilla · TRRL 126.2', reglas: [
          {t: 'a) Si el mayor gasto se <b>compensa</b> reduciendo otras unidades o capítulos de gastos corrientes no ampliables.'},
          {t: 'b) Si deriva de servicios <b>obligatorios</b> impuestos por disposiciones legales.'}
        ]},
        {titulo: 'Oferta de empleo e interinos · LBRL 91 y TRRL 128', reglas: [
          'Oferta pública, según la normativa básica estatal. Se aprueba y publica en <b>1 mes</b> desde el Presupuesto.',
          'No se nombran interinos para plazas fuera de la oferta, salvo vacantes posteriores a su aprobación.',
          'El interino cesa <b>automáticamente</b> cuando toma posesión el funcionario de carrera aprobado.'
        ]}
      ]}
    ]},

    {titulo: 'Selección y provisión', a: 'LBRL 91, 97, 100-102; TRRL 133-137', bloques: [
      {tipo: 'lista', items: [
        {t: 'Selección de todo el personal: de acuerdo con la oferta, convocatoria pública y <b>concurso, oposición o concurso-oposición libre</b>, con igualdad, mérito, capacidad y publicidad.', a: 'LBRL 91.2'},
        {t: 'Cada Corporación selecciona a sus funcionarios, salvo a los de habilitación nacional. El Estado fija las reglas básicas, los programas mínimos y las titulaciones.', a: 'LBRL 100'},
        {t: 'Convocatorias siempre libres; hasta el <b>50 %</b> de las plazas puede reservarse a promoción interna.', a: 'TRRL 134.1'},
        {t: 'Publicación: <b>anuncios</b> de convocatorias en el <b>BOE</b>; <b>bases</b> en el <b>BOP</b> (las de habilitación nacional, en el BOE).', a: 'LBRL 97'},
        {t: 'El <b>Presidente</b> aprueba las bases y convoca; el tribunal le eleva la relación de aprobados y él nombra. También resuelve los concursos de provisión.', a: 'LBRL 102'},
        {t: 'Municipios de gran población, como Zaragoza: la <b>Junta de Gobierno Local</b> aprueba la RPT, la oferta de empleo público, las bases de las convocatorias de selección y provisión y el número y régimen del personal eventual.', a: 'LBRL 127.1.h'},
        {t: 'Provisión de puestos: convocatoria pública por <b>concurso de méritos</b> o <b>libre designación</b>. Pueden participar funcionarios de otras Administraciones si lo prevé la RPT.', a: 'LBRL 101'}
      ]}
    ]},

    {titulo: 'Funcionarios con habilitación de carácter nacional', a: 'LBRL 92 bis', bloques: [
      {tipo: 'tabla', cab: ['Subescala', 'Funciones'], filas: [
        ['Secretaría', 'Fe pública y asesoramiento legal preceptivo'],
        ['Intervención-tesorería', 'Control y fiscalización interna económico-financiera y presupuestaria, contabilidad, tesorería y recaudación'],
        ['Secretaría-intervención', 'Las dos anteriores {{examen:2026}}']
      ]},
      {tipo: 'lista', items: [
        {t: 'Secretaría e Intervención-tesorería tienen dos categorías: <b>entrada</b> o <b>superior</b>.', a: '92 bis.3'},
        {t: 'Oferta, selección, formación y habilitación: el <b>Estado</b>, a través del Ministerio.', a: '92 bis.5'},
        {t: 'Provisión: el <b>concurso</b> es el sistema normal, de ámbito <b>estatal</b>. Dos concursos al año: <b>ordinario</b> y <b>unitario</b> (supletorio, lo convoca el Estado).', a: '92 bis.6'},
        {t: 'Libre designación, solo excepcionalmente y en las entidades que cita el 92 bis.6 (entre ellas, Diputaciones, Áreas Metropolitanas y Cabildos y Consejos Insulares). Al cesado se le asigna un puesto de su mismo grupo.', a: '92 bis.6'},
        {t: 'Las comunidades autónomas hacen los nombramientos provisionales, comisiones de servicios, acumulaciones, interinos y accidentales.', a: '92 bis.7'},
        {t: 'País Vasco: las facultades del art. 92 bis las ejercen sus instituciones forales o comunes.', a: 'TREBEP DA 2.ª.2'}
      ]},
      {tipo: 'tabla', cab: ['Falta', 'Incoa el expediente', 'Sanciona'], filas: [
        ['Leve', 'Órgano de la Corporación donde ocurrieron los hechos', 'Órgano local'],
        ['Grave', 'Comunidad autónoma', 'Comunidad autónoma (suspensión y destitución)'],
        ['Muy grave', 'Ministerio', 'Ministro']
      ]}
    ]},

    {titulo: 'Escalas y subescalas', a: 'TRRL 167-175 bis', bloques: [
      {tipo: 'tabla', cab: ['Escala', 'Subescala', 'Qué hace o qué incluye'], filas: [
        ['Administración General', 'Técnica', 'Gestión, estudio y propuesta administrativa de nivel superior'],
        ['Administración General', 'De Gestión', 'Apoyo a las funciones de nivel superior'],
        ['Administración General', 'Administrativa', 'Tareas administrativas, normalmente de trámite y colaboración'],
        ['Administración General', '<b>Auxiliar</b>', 'Mecanografía, taquigrafía, despacho de correspondencia, cálculo sencillo, manejo de máquinas, archivo de documentos y similares'],
        ['Administración General', 'Subalterna', 'Vigilancia y custodia interior de oficinas; conserje, ujier, portero'],
        ['Administración Especial', 'Técnica', 'Carrera con título exigido por ley. Clases: <b>Técnicos Superiores, Medios y Auxiliares</b> {{examen:2026}}'],
        ['Administración Especial', 'Servicios Especiales', 'Aptitud específica sin título determinado. Clases: Policía Local y auxiliares, Extinción de Incendios, Cometidos Especiales, <b>Personal de Oficios</b> {{examen:2025}}, Agentes forestales y medioambientales']
      ]},
      {tipo: 'lista', items: [
        {t: 'Escala de Administración General: funciones comunes al ejercicio de la actividad administrativa. Los puestos predominantemente <b>burocráticos</b> son suyos.', a: '169.1'},
        {t: 'Administración Especial: funciones que son objeto peculiar de una carrera, profesión, arte u oficio.', a: '170.1'},
        {t: 'Cometidos especiales: tareas predominantemente <b>no manuales</b> (por ejemplo, Bandas de Música). Personal de oficios: tareas predominantemente <b>manuales</b>; categorías: Encargado, Maestro, Oficial, Ayudante y Operario.', a: '174 y 175'},
        {t: 'Cada Corporación crea sus escalas, subescalas y clases y clasifica a los funcionarios.', a: '167.4'}
      ]}
    ]},

    {titulo: 'Retribuciones y otros derechos', a: 'LBRL 93-96; TRRL 141-145 y 153-157', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Retribuciones', items: [
          {t: 'Básicas: <b>misma estructura e idéntica cuantía</b> que en toda la función pública.', a: 'LBRL 93.1'},
          {t: 'Complementarias: estructura y criterios del resto de funcionarios; su <b>cuantía global la fija el Pleno</b> dentro de los límites del Estado.', a: 'LBRL 93.2'},
          {t: 'Solo cobran de su Corporación: nada por fondos, proyectos, dirección de obras o dictámenes.', a: 'TRRL 153'},
          {t: 'Las complementarias no crean derechos adquiridos, salvo el grado consolidado.', a: 'TRRL 156'},
          {t: 'Nunca indemnización por casa-habitación.', a: 'TRRL 157'}
        ]},
        {titulo: 'Jornada y otros derechos', items: [
          {t: 'Jornada anual: la misma que la de los funcionarios de la <b>Administración Civil del Estado</b>.', a: 'LBRL 94'},
          {t: 'Participación sindical: la del Estatuto básico para todas las Administraciones.', a: 'LBRL 95'},
          {t: 'Formación: el Instituto de Estudios de Administración Local, con los institutos autonómicos.', a: 'LBRL 96'},
          {t: 'Derecho al cargo. Inamovilidad en la residencia: los habilitados; los demás, si el servicio lo permite.', a: 'TRRL 141.1'},
          {t: 'Incompatibilidades: Ley 53/1984.', a: 'TRRL 145'}
        ]}
      ]}
    ]},

    {titulo: 'Personal eventual y laboral', a: 'LBRL 103-104 bis; TRRL 176-177', bloques: [
      {tipo: 'tabla', cab: ['Población del municipio', 'Máximo de eventuales (104 bis.1)'], filas: [
        ['De 2.000 a 5.000', 'Excepcionalmente 1, si no hay concejales con dedicación exclusiva'],
        ['Más de 5.000 hasta 10.000', '1'],
        ['Más de 10.000 hasta 20.000', '2'],
        ['Más de 20.000 hasta 50.000', '7'],
        ['Más de 50.000 hasta 75.000', 'La <b>mitad</b> de los concejales'],
        ['Más de 75.000 hasta 500.000', 'El <b>número</b> de concejales'],
        ['Más de 500.000', '<b>0,7 %</b> de los puestos de la plantilla {{examen:2026}}. Si es el mayor de un Área Metropolitana, hasta 6, 12 o 18 más según población']
      ]},
      {tipo: 'lista', items: [
        {t: 'Número, características y retribuciones: el <b>Pleno</b>, al comienzo del mandato; solo se cambian al aprobar los presupuestos anuales.', a: 'LBRL 104.1'},
        {t: 'Nombramiento y cese libres, por el <b>Alcalde o Presidente</b>. Cesan automáticamente al cesar o expirar el mandato de la autoridad a la que sirven.', a: 'LBRL 104.2'},
        {t: 'Diputaciones: el mismo tope que el municipio más poblado de la provincia.', a: 'LBRL 104 bis.2'},
        {t: 'Los puestos de eventuales figuran en la plantilla; nunca son mérito para el acceso ni la promoción interna.', a: 'TRRL 176.2 y 176.4'},
        {t: 'Laborales: los selecciona la Corporación según el art. 91 y la igualdad de oportunidades. Su régimen es <b>íntegramente laboral</b>.', a: 'LBRL 103; TRRL 177'},
        {t: 'Masa salarial laboral: la aprueba la Corporación cada año y se publica en sede electrónica y BOP en <b>20 días</b>.', a: 'LBRL 103 bis'}
      ]}
    ]},

    {titulo: 'Cuidado: TRRL frente al TREBEP', a: 'TREBEP DD única.f y DF 4.ª.2', bloques: [
      {tipo: 'tabla', cab: ['Materia', 'Texto del TRRL (1986)', 'TREBEP (básico)'], filas: [
        ['Edad mínima de acceso', '18 años (135.b)', '<b>16 años</b> (56.1.c)'],
        ['Cuarto requisito de ingreso', 'Juramento o promesa (137.c)', 'Acatamiento de la Constitución (62.1.c)'],
        ['Situaciones', 'Incluye servicio en CCAA y excedencia forzosa (140.1)', 'Cinco situaciones del art. 85.1; las leyes de función pública pueden regular otras (85.2). El servicio en otras AAPP es el art. 88'],
        ['Prescripción de faltas', 'Leves 1 mes, graves 2 años, muy graves 6 años (146.2)', 'Leves <b>6 meses</b>, graves 2 años, muy graves <b>3 años</b> (97.1)'],
        ['Sanciones', 'Incluye deducción de retribuciones y destitución (148.1)', 'Lista del art. 96.1, más «cualquier otra que se establezca por ley» (96.1.g). La destitución sigue prevista para los habilitados nacionales (LBRL 92 bis.11)']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Estos artículos del TRRL figuran en el BOE sin nota de derogación. El TREBEP deroga las normas de igual o inferior rango que se le opongan (DD única.f) y solo mantiene las anteriores <b>en tanto no se opongan</b> (DF 4.ª.2). La oposición es clara en la edad (56.1.c) y en la prescripción (97.1).', a: 'TREBEP DD única.f y DF 4.ª.2'},
        {t: 'En el test: si la pregunta cita el artículo del TRRL, responde con su texto; si cita el TREBEP, con el TREBEP.'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'El funcionario local se rige primero por el TREBEP y, en lo no previsto, por la LBRL', ok: 'Primero la LBRL; en lo no dispuesto en ella, el Estatuto Básico y el resto.', a: 'LBRL 92.1'},
    {x: 'Las potestades públicas pueden ejercerlas los empleados públicos en general', ok: 'Exclusivamente los funcionarios de carrera.', a: 'LBRL 92.3'},
    {x: 'Las subescalas de habilitación nacional son Secretaría, Intervención y Tesorería', ok: 'Secretaría, Intervención-tesorería y Secretaría-intervención.', a: 'LBRL 92 bis.2'},
    {x: 'El Personal de Oficios es de la Subescala Subalterna de Administración General', ok: 'Es una clase de la Subescala de Servicios Especiales (Administración Especial).', a: 'TRRL 172.2.d'},
    {x: 'Técnicos Superiores, Medios y Auxiliares forman la Subescala Técnica de Administración General', ok: 'Son de la Subescala Técnica de Administración Especial.', a: 'TRRL 171.1'},
    {x: 'El número de eventuales lo decide el Alcalde', ok: 'Lo fija el Pleno al comienzo del mandato (en gran población, la Junta de Gobierno Local: 127.1.h); el Alcalde nombra y cesa.', a: 'LBRL 104.1-2'},
    {x: 'La cuantía global de las complementarias la fija el Alcalde', ok: 'La fija el Pleno, dentro de los límites del Estado.', a: 'LBRL 93.2'},
    {x: 'Las bases de las convocatorias locales se publican en el BOE', ok: 'En el BOE van los anuncios; las bases, en el BOP (salvo habilitación nacional).', a: 'LBRL 97'},
    {x: 'La plantilla puede ampliarse por urgencia', ok: 'El art. 126.2 solo prevé dos supuestos: gasto compensado o servicios obligatorios impuestos por disposiciones legales. Ver la nota de 2025, segunda prueba, P19.', a: 'TRRL 126.2'},
    {x: 'Según el TREBEP, para opositar en un ayuntamiento hay que tener 18 años', ok: 'El TREBEP (56.1.c), básico, exige 16 años. Los 18 años son el texto del art. 135.b TRRL, que se opone al Estatuto.', a: 'TREBEP 56.1.c y DD única.f'}
  ],

  examenes: [
    'Art. 92.1 LBRL (orden de fuentes: LBRL y, en lo no dispuesto, Estatuto Básico): examen oficial 31-may-2026, pregunta 39.',
    'Art. 92.3 LBRL (potestades públicas, exclusivas de funcionarios de carrera): examen oficial 31-may-2026, pregunta 40.',
    'Art. 92 bis.2 LBRL (subescalas de habilitación nacional): examen oficial 31-may-2026, pregunta 22.',
    'Art. 104 bis.1.g LBRL (0,7 % de eventuales en municipios de más de 500.000 habitantes): examen oficial 31-may-2026, pregunta 25.',
    'Art. 171 TRRL (Técnicos Superiores, Medios y Auxiliares de la Subescala Técnica de Administración Especial): examen oficial 31-may-2026, pregunta 30.',
    'Arts. 167 y ss. TRRL (Personal de Oficios, en Servicios Especiales de Administración Especial): examen oficial 1-jun-2025, pregunta 41.',
    'Art. 126.2 TRRL (ampliación de la plantilla): examen oficial 1-jun-2025, segunda prueba, supuesto 2, pregunta 19. La respuesta tomada como oficial (la plantilla de ese examen no está publicada) es «Todas las respuestas anteriores son correctas». El art. 126.2 solo recoge dos supuestos: que el incremento del gasto quede compensado mediante la reducción de otras unidades o capítulos de gastos corrientes no ampliables, y que sea consecuencia del establecimiento o ampliación de servicios de carácter obligatorio impuestos por disposiciones legales. La urgencia y necesidad no figura, y la opción sobre servicios obligatorios dice «establecimiento o reducción» y «disposiciones legales o reglamentarias». El esquema sigue la ley y no marca este punto.'
  ]
});
