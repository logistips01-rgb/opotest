/* Esquema · Auxiliar Administrativo · Tema 14
   Fuentes: Ley 7/1985 (LBRL), texto consolidado BOE-A-1985-5392, arts. 11-18, 25-28 y 121-138;
   Ley 10/2017 de capitalidad de Zaragoza, texto consolidado BOE-A-2018-1683, caps. I y II (arts. 1-18) y DA 2.ª.
   Alcance: la Provincia, las entidades inferiores al municipio y el funcionamiento de los órganos quedan fuera.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 14, {
  titulo: 'El municipio, gran población y régimen especial de Zaragoza',
  epigrafe: 'El municipio: territorio y población. Competencias de los municipios. Servicios mínimos obligatorios. Régimen de organización de los municipios de gran población. La Ley de régimen especial del municipio de Zaragoza como capital de Aragón: disposiciones generales y especialidades en materia de organización.',
  etiquetas: ['LBRL · arts. 11-18 y 25-28', 'LBRL Título X · arts. 121-138', 'Ley 10/2017 · arts. 1-18'],
  fuentes: [
    'Ley 7/1985, de 2 de abril, reguladora de las Bases del Régimen Local. Texto consolidado BOE-A-1985-5392 (última actualización publicada el 03/10/2026), arts. 11 a 18, 25 a 28 y 121 a 138.',
    'Ley 10/2017, de 30 de noviembre, de régimen especial del municipio de Zaragoza como capital de Aragón. Texto consolidado BOE-A-2018-1683 (última actualización publicada el 15/01/2019), capítulos I y II (arts. 1 a 18) y disposición adicional segunda.'
  ],

  esencial: [
    {t: 'Elementos del municipio: <b>territorio, población y organización</b>. Los inscritos en el Padrón son los <b>vecinos</b>.', a: 'arts. 11 y 15'},
    {t: 'Servicios mínimos por tramos que se suman: todos los municipios, <b>más de 5.000</b>, <b>más de 20.000</b> y <b>más de 50.000</b> habitantes.', a: 'art. 26.1'},
    {t: 'El Estado y las CCAA pueden delegar competencias en los municipios por un plazo <b>no inferior a 5 años</b>. Hace falta aceptación del municipio y financiación.', a: 'art. 27', examen: '2025'},
    {t: 'Gran población: más de <b>250.000</b> habitantes o capital de provincia de más de <b>175.000</b>. Capitales de provincia, capitales autonómicas o sedes de instituciones autonómicas, y municipios de más de 75.000 con circunstancias especiales: solo si lo decide la <b>Asamblea Legislativa</b>, a iniciativa del ayuntamiento.', a: 'art. 121.1'},
    {t: 'Zaragoza tiene régimen especial: su Junta de Gobierno Local se llama <b>Gobierno de Zaragoza</b> y el Alcalde no puede delegar la facultad de <b>dictar bandos</b>.', a: 'DA 2.ª y art. 12.2 Ley 10/2017'}
  ],

  mapa: [
    {titulo: 'LBRL · Título II (art. 11) y cap. I · Territorio y población', rango: 'arts. 11-18', items: [
      ['11', 'El municipio y sus elementos'], ['12', 'Término municipal'], ['13', 'Creación, supresión y fusión'],
      ['14', 'Denominación'], ['15', 'Empadronamiento y vecindad'], ['16', 'El Padrón'],
      ['17', 'Gestión del Padrón'], ['18', 'Derechos y deberes de los vecinos']
    ]},
    {titulo: 'LBRL · Título II, cap. III · Competencias', rango: 'arts. 25-28', items: [
      ['25', 'Competencias propias'], ['26', 'Servicios mínimos obligatorios'],
      ['27', 'Delegación de competencias'], ['28', 'Gestión colaborativa (menos de 20.000)']
    ]},
    {titulo: 'LBRL · Título X · Municipios de gran población', rango: 'arts. 121-138', items: [
      ['121', 'Ámbito de aplicación'], ['122', 'Organización del Pleno'], ['123', 'Atribuciones del Pleno'],
      ['124', 'El Alcalde'], ['125', 'Tenientes de Alcalde'], ['126', 'Junta de Gobierno Local'],
      ['127', 'Atribuciones de la JGL'], ['128', 'Distritos'], ['129', 'Asesoría jurídica'],
      ['130', 'Órganos superiores y directivos'], ['131', 'Consejo Social de la Ciudad'],
      ['132', 'Comisión de Sugerencias y Reclamaciones'], ['133-136', 'Gestión económico-financiera'],
      ['137', 'Reclamaciones económico-administrativas'], ['138', 'Conferencia de Ciudades']
    ]},
    {titulo: 'Ley 10/2017 · caps. I y II', rango: 'arts. 1-18', items: [
      ['1-6', 'Disposiciones generales'], ['7', 'Autoorganización'], ['8', 'Órganos de gobierno'],
      ['9', 'Competencias'], ['10-11', 'El Pleno'], ['12', 'El Alcalde'], ['13-14', 'El Gobierno de Zaragoza'],
      ['15-16', 'Grupos y Junta de Portavoces'], ['17-18', 'Consejo Jurídico y comisiones de asesoramiento']
    ]}
  ],

  cifras: [
    {v: '4.000 hab.', d: 'Núcleo mínimo para crear un municipio nuevo', a: 'art. 13.2'},
    {v: '10 años', d: 'Sin poder segregarse el municipio resultante de una fusión', a: 'art. 13.4'},
    {v: '2 años', d: 'Renovación del padrón de extranjeros de fuera de la UE y del EEE sin residencia de larga duración', a: 'art. 16.1'},
    {v: '5 años', d: 'Duración mínima de la delegación de competencias en un municipio', a: 'art. 27.1'},
    {v: '250.000', d: 'Habitantes para aplicar el régimen de gran población', a: 'art. 121.1.a'},
    {v: '175.000', d: 'Habitantes de una capital de provincia para ser gran población', a: 'art. 121.1.b'},
    {v: '6 meses', d: 'Para adaptar la organización al Título X desde la constitución de la nueva corporación', a: 'art. 121.2'},
    {v: '1/3', d: 'Tope de miembros de la JGL (y del Gobierno de Zaragoza) sobre el número legal del Pleno, además del Alcalde', a: 'art. 126.2 LBRL y 13.2 Ley 10/2017'},
    {v: '3', d: 'Mínimo de miembros (número impar) del órgano de reclamaciones económico-administrativas', a: 'art. 137.4'}
  ],

  secciones: [
    {titulo: 'Territorio y población', a: 'arts. 11-18 LBRL', bloques: [
      {tipo: 'lista', items: [
        {t: 'El municipio es la <b>entidad local básica</b>, con personalidad jurídica y plena capacidad.', a: '11.1'},
        {t: 'Término municipal: territorio en que el ayuntamiento ejerce sus competencias. Cada municipio pertenece a <b>una sola provincia</b>.', a: '12'},
        {t: 'Creación, supresión y alteración de términos: legislación autonómica. Nunca puede modificar los <b>límites provinciales</b>. Exige audiencia de los municipios, dictamen del Consejo de Estado (u órgano consultivo autonómico) e informe de quien ejerza la tutela financiera.', a: '13.1'},
        {t: 'Municipio nuevo: sobre núcleos territorialmente diferenciados de <b>al menos 4.000 habitantes</b> y financieramente sostenibles.', a: '13.2'},
        {t: 'Fusión: municipios <b>colindantes dentro de la misma provincia</b>, con independencia de su población {{examen:2026}}. Convenio aprobado por mayoría simple de cada pleno. No puede segregarse hasta pasados <b>10 años</b>.', a: '13.4 y 13.6'},
        {t: 'El municipio fusionado queda <b>dispensado</b> de prestar nuevos servicios mínimos por su aumento de población. El artículo no fija plazo a esa dispensa {{examen:2025}}.', a: '13.4.f'},
        {t: 'Cambio de denominación: oficial cuando se anota en el Registro estatal y se publica en el <b>BOE</b>. Puede ser en castellano, en la otra lengua oficial o en ambas.', a: '14'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Padrón · arts. 15-17', reglas: [
          'Toda persona que viva en España se inscribe en el municipio donde resida habitualmente; si vive en varios, en el que habite <b>más tiempo al año</b>.',
          'El conjunto de inscritos es la <b>población</b> del municipio y los inscritos son los <b>vecinos</b>. La vecindad se adquiere en el momento de la inscripción.',
          'Sus datos prueban la <b>residencia</b> en el municipio y el <b>domicilio habitual</b> {{examen:2026}}. Sus certificaciones son documento público y fehaciente.',
          'Extranjeros de fuera de la UE y del Espacio Económico Europeo sin autorización de residencia de larga duración: renovación <b>cada 2 años</b>; si no se renueva, caducidad sin audiencia previa.',
          'Formación, mantenimiento, revisión y custodia: el <b>Ayuntamiento</b>, con medios informáticos. Si un municipio no puede mantenerlo informatizado, asume esa gestión la <b>Diputación</b> (o Cabildo o Consejo insular).'
        ]},
        {titulo: 'Derechos y deberes de los vecinos · art. 18', items: [
          'Ser elector y elegible',
          'Participar en la gestión municipal',
          'Utilizar los servicios públicos y acceder a los aprovechamientos comunales',
          'Contribuir con prestaciones económicas y personales',
          'Ser informado, previa petición razonada, y dirigir solicitudes',
          'Pedir la consulta popular',
          'Exigir el servicio si es competencia propia obligatoria',
          'Ejercer la iniciativa popular (art. 70 bis)',
          'Los demás establecidos en las leyes'
        ], reglas: ['La inscripción de extranjeros en el padrón <b>no prueba su residencia legal</b> en España.']}
      ]}
    ]},

    {titulo: 'Competencias municipales', a: 'arts. 25, 27 y 28 LBRL', bloques: [
      {tipo: 'lista', items: [
        {t: 'Competencias <b>propias</b> «en todo caso», en los términos de la legislación estatal y autonómica: urbanismo y vivienda protegida; medio ambiente urbano; agua y aguas residuales; infraestructura viaria; evaluación e información de situaciones de necesidad social y atención inmediata a personas en situación o riesgo de exclusión social; policía local, protección civil e incendios; tráfico y transporte colectivo urbano; turismo; ferias, abastos, mercados; salubridad pública; cementerios; deporte; cultura; escolaridad obligatoria y edificios escolares; TIC; igualdad y violencia de género; comunidades de energía. Letra q (igualdad de oportunidades, no discriminación y accesibilidad universal de las personas con discapacidad): la añade la Ley 4/2026 y <b>entra en vigor el 23-10-2026</b>; hasta entonces la lista acaba en la p.', a: '25.2'},
        {t: 'Las competencias propias se determinan <b>por ley</b>, con memoria económica, y sin atribuir la misma competencia a la vez a otra Administración.', a: '25.3-25.5'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Delegación · art. 27', reglas: [
          'El Estado y las CCAA <b>podrán</b> delegar en los municipios el ejercicio de sus competencias.',
          'Fija alcance, contenido, condiciones y duración, que <b>no puede ser inferior a 5 años</b> {{examen:2025}}.',
          'Solo es efectiva si el municipio la <b>acepta</b>. Sin dotación presupuestaria suficiente es <b>nula</b>.',
          'La renuncia la acuerda el <b>Pleno</b>. Los actos del municipio se recurren ante la Administración delegante.'
        ]},
        {titulo: 'Gestión colaborativa · art. 28', reglas: [
          'En municipios determinados de <b>menos de 20.000</b> habitantes.',
          'Busca garantizar los servicios públicos mínimos obligatorios. La decide la Comunidad Autónoma, con conformidad previa del municipio.'
        ]}
      ]}
    ]},

    {titulo: 'Servicios mínimos obligatorios', a: 'art. 26 LBRL', bloques: [
      {tipo: 'tabla', cab: ['Población', 'Servicios que deben prestarse'], filas: [
        ['Todos los municipios', 'Alumbrado público, cementerio, recogida de residuos, limpieza viaria, abastecimiento domiciliario de agua potable, <b>alcantarillado</b> {{examen:2026}}, acceso a los núcleos de población y pavimentación de las vías públicas.'],
        ['Más de 5.000', 'Además: parque público, <b>biblioteca pública</b> {{examen:2025}} y tratamiento de residuos.'],
        ['Más de 20.000', 'Además: <b>protección civil</b>, evaluación e información de situaciones de necesidad social y atención inmediata a personas en situación o riesgo de exclusión social, <b>prevención y extinción de incendios</b> e instalaciones deportivas de uso público.'],
        ['Más de 50.000', 'Además: <b>transporte colectivo urbano</b> de viajeros y <b>medio ambiente urbano</b>.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'En municipios de <b>menos de 20.000</b> habitantes, la Diputación coordina la recogida y tratamiento de residuos, el agua y las aguas residuales, la limpieza viaria, el acceso a los núcleos, la pavimentación y el alumbrado.', a: '26.2'}
      ]},
      {tipo: 'ejemplo', t: 'Un municipio de 12.000 habitantes debe tener parque y biblioteca públicos (más de 5.000), pero no está obligado a prestar transporte colectivo urbano, que solo se exige con más de 50.000.'}
    ]},

    {titulo: 'Gran población: ámbito y Pleno', a: 'arts. 121-123 LBRL', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'A quién se aplica · art. 121', items: [
          'a) Municipios de <b>más de 250.000</b> habitantes.',
          'b) Capitales de provincia de <b>más de 175.000</b> {{examen:2026}}.',
          'c) Capitales de provincia, capitales autonómicas o sedes de las instituciones autonómicas.',
          'd) Municipios de más de 75.000 con circunstancias económicas, sociales, históricas o culturales especiales.'
        ], reglas: [
          'En c) y d) lo deciden las <b>Asambleas Legislativas</b> a iniciativa del ayuntamiento {{examen:2025}}.',
          'Al alcanzar la población, la nueva corporación tiene <b>6 meses</b> desde su constitución para adaptarse. Si después baja la población, sigue en este régimen.'
        ]},
        {titulo: 'El Pleno · arts. 122-123', reglas: [
          'Alcalde y Concejales: órgano de <b>máxima representación política</b> de los ciudadanos {{examen:2025}}.',
          'Lo convoca y preside el Alcalde, con voto de calidad. Solo puede delegar la convocatoria y la presidencia, en un concejal.',
          'Tiene <b>secretario general</b> (habilitación nacional) y <b>Comisiones</b> formadas en proporción a los grupos.',
          '<b>Mayoría absoluta</b>: reglamentos orgánicos, término municipal y denominación, organizaciones supramunicipales, transferencia de funciones, iniciativa del art. 121.1 y planeamiento general. Lo demás, mayoría simple.',
          'Solo delegables, y solo en sus Comisiones: ordenanzas y reglamentos, formas de gestión, acciones judiciales y conflictos de competencia.'
        ]}
      ]}
    ]},

    {titulo: 'Alcalde y Junta de Gobierno Local', a: 'arts. 124-127 LBRL', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Alcalde y Tenientes · arts. 124-125', reglas: [
          'El Alcalde ostenta la <b>máxima representación del municipio</b> y responde de su gestión política ante el Pleno. Tratamiento de <b>Excelencia</b>.',
          'Indelegables: dirigir la política, nombrar y cesar Tenientes de Alcalde y Presidentes de Distritos, medidas de extraordinaria y urgente necesidad, Jefatura de la Policía Municipal, convocar y presidir la JGL, voto de calidad y <b>dictar bandos</b>.',
          'Directrices generales y organización de la Administración ejecutiva: delegables <b>solo en la JGL</b>.',
          'Tenientes de Alcalde: los nombra el Alcalde entre los concejales de la JGL; le sustituyen por orden de nombramiento. Tratamiento de <b>Ilustrísima</b>.'
        ]},
        {titulo: 'Junta de Gobierno Local · arts. 126-127', reglas: [
          'Miembros: no más de <b>un tercio</b> del número legal del Pleno, <b>además del Alcalde</b> {{examen:2025}}. El Alcalde los nombra y separa libremente.',
          'El inciso que permitía nombrar miembros no concejales fue declarado <b>inconstitucional y nulo</b> (STC 103/2013).',
          'Responde ante el Pleno de forma <b>solidaria</b>. Sus deliberaciones son <b>secretas</b>.',
          'Secretario: un concejal miembro, designado por el Alcalde. Hay un órgano de apoyo cuyo titular es funcionario con habilitación nacional.',
          'Aprueba los <b>proyectos</b> de ordenanzas, reglamentos y presupuesto {{examen:2025}}, concede licencias, nombra y cesa a los órganos directivos y ejerce la potestad sancionadora.'
        ]}
      ]}
    ]},

    {titulo: 'Otros órganos de la gran población', a: 'arts. 128-138 LBRL', bloques: [
      {tipo: 'tabla', cab: ['Órgano', 'Claves'], filas: [
        ['Distritos (128)', '<b>Obligatorios</b>: divisiones territoriales con órganos de gestión desconcentrada para la participación ciudadana. Los crea el Pleno. Presidencia: siempre un <b>concejal</b>.'],
        ['Asesoría jurídica (129)', 'Titular nombrado y separado por la JGL. Requisitos: licenciado en Derecho <b>y</b> funcionario (con habilitación nacional, o de carrera con título de doctor, licenciado, ingeniero, arquitecto o equivalente) {{examen:2026}}.'],
        ['Órganos directivos (130)', 'Coordinadores generales, directores generales, titular del órgano de apoyo a la JGL, titular de la asesoría jurídica, secretario general del Pleno, interventor general y, en su caso, titular del órgano de gestión tributaria. No figura el presidente del órgano de reclamaciones económico-administrativas {{examen:2026}}.'],
        ['Consejo Social de la Ciudad (131)', 'Organizaciones económicas, sociales, profesionales y de vecinos más representativas. Informes sobre desarrollo económico local, planificación estratégica y grandes proyectos urbanos.'],
        ['Comisión de Sugerencias y Reclamaciones (132)', 'La crea el Pleno, con todos los grupos en proporción. Da cuenta al Pleno en un <b>informe anual</b>.'],
        ['Gestión económico-financiera (133-136)', 'Titulares de habilitación nacional, salvo el de presupuestación. El Pleno puede crear un órgano de gestión tributaria. <b>Intervención general municipal</b> con plena autonomía.'],
        ['Reclamaciones económico-administrativas (137)', 'Resuelve reclamaciones sobre tributos e ingresos de derecho público y dictamina los proyectos de ordenanzas fiscales. Su resolución pone fin a la vía administrativa: <b>solo cabe contencioso-administrativo</b> {{examen:2025}}. Reposición previa potestativa. Número impar, mínimo 3, nombrados por el Pleno por mayoría absoluta.'],
        ['Conferencia de Ciudades (138)', 'En la Conferencia sectorial para asuntos locales: AGE, comunidades autónomas y alcaldes de gran población.']
      ]}
    ]},

    {titulo: 'Ley de capitalidad: disposiciones generales', a: 'arts. 1-9 y DA 2.ª Ley 10/2017', bloques: [
      {tipo: 'lista', items: [
        {t: 'Zaragoza, capital de Aragón, goza del <b>régimen especial</b> de esta Ley. Personalidad jurídica propia y plena capacidad de obrar.', a: 'arts. 1-2'},
        {t: 'Ejerce sus competencias en su término municipal, cuya alteración corresponde al <b>Gobierno de Aragón</b>.', a: 'art. 3'},
        {t: 'Puede plantear conflictos en defensa de la autonomía local contra leyes del Estado y de Aragón, y defenderla ante instituciones europeas e internacionales.', a: 'art. 4'},
        {t: 'Títulos: Muy Noble, Muy Leal, Muy Heroica, <b>Siempre Heroica</b>, Muy Benéfica e <b>Inmortal</b> {{examen:2026}}, más «Sitio Emblemático de la Cultura de Paz» (UNESCO). Habitualmente se usa <b>Inmortal</b>; en los documentos solemnes, todos.', a: 'art. 6'}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'La organización se desarrolla en <b>Reglamentos de naturaleza orgánica</b>. Gobierno y administración: el Ayuntamiento (Alcalde y Concejales).', a: 'art. 7'},
        {t: 'Órganos: el <b>Pleno</b> (máxima representación política); los ejecutivos: Alcalde, Gobierno de Zaragoza, Vicealcalde, Tenientes de Alcalde, Concejales con responsabilidades de gobierno; y los directivos.', a: 'art. 8.1'},
        {t: 'La Junta de Gobierno Local de Zaragoza se denomina <b>Gobierno de Zaragoza</b>.', a: 'DA 2.ª'}
      ]}
    ]},

    {titulo: 'Ley de capitalidad: Pleno, Alcalde y Gobierno', a: 'arts. 10-18 Ley 10/2017', bloques: [
      {tipo: 'tabla', cab: ['Órgano', 'Lo que hay que saber'], filas: [
        ['Pleno (10-11)', 'Lo preside el Alcalde, salvo legislación electoral o delegación en un concejal. Sus Comisiones dictaminan las <b>ordenanzas y Reglamentos</b> antes del Pleno. Aprueba presupuestos {{examen:2026}}, ordenanzas, Reglamentos orgánicos y el código ético. Regla general: mayoría simple.'],
        ['Alcalde (12)', 'Dirige el Gobierno de Zaragoza, ostenta la máxima representación del municipio y <b>responde ante el Pleno</b> {{examen:2026}}. Nombra a los miembros del Gobierno, Tenientes de Alcalde y Presidentes de distritos. Jefatura de la Policía Local.'],
        ['Gobierno de Zaragoza (13-14)', 'Órgano colegiado ejecutivo. Máximo <b>un tercio</b> del número legal del Pleno, además del Alcalde. Deliberaciones <b>secretas, salvo</b> en atribuciones delegadas por el Pleno {{examen:2026}}. Aprueba los proyectos de ordenanzas, Reglamentos y presupuesto {{examen:2026}}; licencias, contratación, patrimonio, RPT y oferta de empleo.'],
        ['Otros (15-18)', 'Grupos municipales con portavoz; <b>Junta de Portavoces</b>, presidida por el Alcalde o el Teniente en quien delegue. El Gobierno de Zaragoza puede crear un Consejo Jurídico Municipal (informes y dictámenes no vinculantes). Puede haber comisiones específicas de asesoramiento para dictaminar recursos administrativos; sus funciones, composición y funcionamiento los fija el Gobierno de Zaragoza en el acuerdo de creación.']
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Delegaciones del Alcalde · 12.2-12.3', reglas: [
          'Puede delegar o desconcentrar por decreto en el Gobierno, sus miembros, concejales, órganos directivos, gerencias y órganos de los distritos.',
          'Indelegables: dirigir la política, los nombramientos del 12.1.e, medidas de extraordinaria y urgente necesidad, Jefatura de la Policía Local, convocar y presidir el Gobierno, voto de calidad y <b>dictar bandos</b> {{examen:2026}}.',
          'Directrices generales y organización: solo en el <b>Gobierno de Zaragoza</b>. La dirección de la Policía Local, salvo la superior Jefatura, puede delegarse en un Concejal.'
        ]},
        {titulo: 'Delegaciones del Pleno · 11.3', reglas: [
          'No delegables, entre otras: control, moción de censura, Reglamentos orgánicos, término municipal, tributos, presupuestos, planeamiento, revisión de oficio y retribuciones.',
          'Ordenanzas y Reglamentos, formas de gestión, consorcios, acciones judiciales, código ético y conflictos: <b>solo en Comisiones</b> del Pleno.',
          'Proponer al Gobierno de Aragón la reforma de la Ley: delegable en el Alcalde y en el Gobierno, salvo mayoría especial.'
        ]}
      ]}
    ]}
  ],

  trampas: [
    {x: 'La alteración de términos municipales puede cambiar los límites provinciales', ok: 'Nunca puede suponer modificación de los límites provinciales.', a: '13.1'},
    {x: 'Pueden fusionarse municipios colindantes de provincias distintas', ok: 'Deben ser colindantes dentro de la misma provincia.', a: '13.4'},
    {x: 'La biblioteca pública es obligatoria desde 20.000 habitantes', ok: 'Desde más de 5.000.', a: '26.1.b'},
    {x: 'Protección civil e incendios son obligatorios desde 50.000 habitantes', ok: 'Desde más de 20.000. Con más de 50.000 se añaden transporte colectivo urbano y medio ambiente urbano.', a: '26.1.c-d'},
    {x: 'La delegación de competencias dura como mínimo 10 años', ok: 'No puede ser inferior a 5 años.', a: '27.1'},
    {x: 'La JGL de gran población tiene como máximo un tercio del Pleno, Alcalde incluido', ok: 'Un tercio del número legal del Pleno, además del Alcalde.', a: '126.2'},
    {x: 'En gran población el Pleno aprueba el proyecto de presupuesto', ok: 'El proyecto lo aprueba la JGL; el Pleno aprueba los presupuestos.', a: '127.1.b y 123.1.h'},
    {x: 'Contra la resolución del órgano económico-administrativo cabe recurso de reposición', ok: 'Pone fin a la vía administrativa: solo cabe recurso contencioso-administrativo.', a: '137.2'},
    {x: 'Basta ser licenciado en Derecho para ser titular de la asesoría jurídica', ok: 'Además hay que ser funcionario (habilitación nacional o de carrera con título superior).', a: '129.2'},
    {x: 'Las deliberaciones del Gobierno de Zaragoza son siempre secretas', ok: 'Son secretas, excepto en las decisiones sobre atribuciones delegadas por el Pleno.', a: '13.5 Ley 10/2017'}
  ],

  examenes: [
    'Art. 13.4.f LBRL (dispensa de nuevos servicios mínimos tras una fusión, sin plazo): examen oficial 1-jun-2025, pregunta 4.',
    'Art. 26.1.b LBRL (biblioteca pública, más de 5.000 habitantes): examen oficial 1-jun-2025, pregunta 15.',
    'Art. 121.1 LBRL (capital de provincia: decide la Asamblea Legislativa): examen oficial 1-jun-2025, pregunta 17.',
    'Art. 137.2 LBRL (solo recurso contencioso-administrativo): examen oficial 1-jun-2025, pregunta 22.',
    'Art. 126.2 LBRL (un tercio del Pleno, además del Alcalde): examen oficial 1-jun-2025, pregunta 36.',
    'Arts. 122.1 y 124.1 LBRL (el Pleno, máxima representación política): examen oficial 1-jun-2025, pregunta 37.',
    'Art. 127.1.b LBRL (la JGL aprueba el proyecto de presupuesto): examen oficial 1-jun-2025, pregunta 43.',
    'Art. 27.1 LBRL (delegación no inferior a cinco años): examen oficial 1-jun-2025, pregunta 46.',
    'Art. 6 Ley 10/2017 (títulos de la ciudad): examen oficial 31-may-2026, pregunta 1.',
    'Art. 12.2-12.3 Ley 10/2017 (bandos indelegables): examen oficial 31-may-2026, pregunta 2.',
    'Art. 12.1 Ley 10/2017 (el Alcalde representa al municipio y responde ante el Pleno): examen oficial 31-may-2026, pregunta 6.',
    'Art. 129.2 LBRL (asesoría jurídica: hay que ser funcionario): examen oficial 31-may-2026, pregunta 8.',
    'Art. 121.1 LBRL (por qué Zaragoza es gran población): examen oficial 31-may-2026, pregunta 9.',
    'Arts. 11 y 14 Ley 10/2017 (presupuesto: proyecto del Gobierno, aprobación del Pleno): examen oficial 31-may-2026, pregunta 12.',
    'Art. 130.1.B LBRL (órganos directivos): examen oficial 31-may-2026, pregunta 32.',
    'Art. 13.5 Ley 10/2017 (deliberaciones del Gobierno de Zaragoza): examen oficial 31-may-2026, pregunta 36.',
    'Art. 26.1.a LBRL (alcantarillado en todos los municipios): examen oficial 31-may-2026, pregunta 43.',
    'Art. 13.4 LBRL (fusión de municipios colindantes de la misma provincia): examen oficial 31-may-2026, pregunta 46.',
    'Art. 16.1 LBRL (el padrón prueba residencia y domicilio habitual): examen oficial 31-may-2026, pregunta 47.'
  ]
});
