/* Esquema · Auxiliar Administrativo · Tema 2
   Fuentes: LO 3/2007 (BOE-A-2007-6115), Título I, arts. 3-13;
   Ley 4/2007 de Aragón (BOE-A-2007-11593), caps. I (arts. 1-4) y IV (arts. 18-31);
   II Plan de Igualdad para empleadas y empleados del Ayuntamiento de Zaragoza (BOPZ n.º 16, 20-ene-2024).
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 2, {
  titulo: 'Igualdad y violencia de género: LO 3/2007, Ley 4/2007 de Aragón y Plan de Igualdad municipal',
  epigrafe: 'La Ley para la igualdad efectiva de mujeres y hombres: el principio de igualdad y la tutela contra la discriminación. La Ley de Prevención y Protección Integral a las Mujeres Víctimas de Violencia en Aragón: disposiciones generales y medidas de protección y apoyo a las víctimas. El Plan de Igualdad para empleadas y empleados del Ayuntamiento de Zaragoza.',
  etiquetas: ['LO 3/2007 · Título I (arts. 3-13)', 'Ley 4/2007 Aragón · caps. I y IV (arts. 1-4 y 18-31)', 'II Plan de Igualdad del Ayuntamiento'],
  fuentes: [
    'Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres. Texto consolidado BOE-A-2007-6115, Título I, arts. 3 a 13.',
    'Ley 4/2007, de 22 de marzo, de Prevención y Protección Integral a las Mujeres Víctimas de Violencia en Aragón. Texto consolidado BOE-A-2007-11593, cap. I (arts. 1 a 4) y cap. IV (arts. 18 a 31).',
    'II Plan de Igualdad para empleadas y empleados del Ayuntamiento de Zaragoza, aprobado por acuerdo del Gobierno de Zaragoza y publicado en el BOPZ n.º 16, de 20 de enero de 2024 (incluye en su Anexo II el Protocolo de actuación frente al acoso).'
  ],

  esencial: [
    {t: 'Igualdad de trato: <b>ausencia de toda discriminación</b>, directa o indirecta, por razón de sexo, en especial por <b>maternidad, obligaciones familiares y estado civil</b>. Es principio informador del ordenamiento.', a: 'LO 3/2007, arts. 3-4'},
    {t: 'Son discriminación por razón de sexo: la orden de discriminar, el <b>acoso sexual</b> y el <b>acoso por razón de sexo</b>, el trato desfavorable por <b>embarazo o maternidad</b> (discriminación <b>directa</b>) y las represalias por reclamar. Los actos discriminatorios son <b>nulos</b>.', a: 'LO 3/2007, arts. 6-10'},
    {t: 'En juicio, la <b>persona demandada</b> prueba que no discriminó (salvo en el proceso penal). En acoso, solo está legitimada la <b>persona acosada</b>.', a: 'LO 3/2007, arts. 12.3 y 13'},
    {t: 'La Ley 4/2007 protege a las mujeres que, <b>dentro de Aragón</b>, sufran cualquiera de las formas de violencia del art. 2. Hay al menos <b>un centro de emergencia y una casa de acogida por provincia</b>.', a: 'Ley 4/2007, arts. 4, 18.3 y 19.4'},
    {t: 'El II Plan de Igualdad municipal dura <b>4 años</b> desde su aprobación y registro, se organiza en <b>4 ejes</b> (A-D), lo sigue y evalúa la <b>Comisión de Igualdad</b> e incluye el Protocolo frente al acoso.', a: 'Plan, apdos. 5.3, 8 y 10; Anexo II'}
  ],

  mapa: [
    {titulo: 'LO 3/2007 · Título I · Igualdad y tutela contra la discriminación', rango: 'arts. 3-13', items: [
      ['3', 'Principio de igualdad de trato'], ['4', 'Integración en la interpretación de las normas'],
      ['5', 'Empleo, formación, promoción y condiciones de trabajo'], ['6', 'Discriminación directa e indirecta'],
      ['7', 'Acoso sexual y por razón de sexo'], ['8', 'Embarazo o maternidad'],
      ['9', 'Indemnidad frente a represalias'], ['10', 'Consecuencias jurídicas'],
      ['11', 'Acciones positivas'], ['12', 'Tutela judicial efectiva'], ['13', 'Prueba']
    ]},
    {titulo: 'Ley 4/2007 Aragón · Cap. I · Disposiciones generales', rango: 'arts. 1-4', items: [
      ['1', 'Objeto'], ['2', 'Formas de violencia'], ['3', 'Situaciones de violencia'], ['4', 'Ámbito de aplicación']
    ]},
    {titulo: 'Ley 4/2007 · Cap. IV, Sección 1.ª · Centros de protección y apoyo', rango: 'arts. 18-23', items: [
      ['18', 'Centros de emergencia'], ['19', 'Casas de acogida'], ['20', 'Pisos tutelados'],
      ['21', 'Alojamientos alternativos específicos'], ['22', 'Puntos de encuentro'], ['23', 'Regulación de los centros']
    ]},
    {titulo: 'Ley 4/2007 · Cap. IV, Sección 2.ª · Servicios de protección y apoyo', rango: 'arts. 24-31', items: [
      ['24', 'Dispositivo de alarma'], ['25', 'Mediación familiar'], ['26', 'Atención psicológica a hombres con problemas de control y violencia en el hogar'],
      ['27', 'Atención psicológica'], ['28', 'Atención sanitaria'], ['29', 'Acceso a la vivienda'],
      ['30', 'Formación e inserción sociolaboral'], ['31', 'Acción popular']
    ]},
    {titulo: 'II Plan de Igualdad del Ayuntamiento de Zaragoza', rango: '12 apartados y 4 anexos', items: [
      ['1-4', 'Introducción, marco normativo, marco conceptual, partes suscriptoras'],
      ['5', 'Ámbito personal, territorial y temporal'], ['6', 'Metodología'], ['7', 'Diagnóstico de la plantilla'],
      ['8', 'Objetivos: 4 ejes'], ['9', 'Acciones de igualdad'],
      ['10', 'Implementación, seguimiento y evaluación. Comisión de Igualdad'], ['11', 'Calendario de actuaciones'],
      ['12', 'Protocolo frente al acoso'], ['An. I', 'Medidas permanentes del I PIEEM'],
      ['An. II', 'Protocolo frente al acoso (texto)'], ['An. III', 'Ficha de recogida de datos'], ['An. IV', 'Diagnóstico']
    ]}
  ],

  cifras: [
    {v: '4 años', d: 'Vigencia del Plan, desde su aprobación y registro {{examen:2025}}', a: 'Plan, apdo. 5.3'},
    {v: '4 ejes', d: 'Del Plan, con 12 líneas, 21 objetivos específicos y 44 acciones', a: 'Plan, apdo. 8'},
    {v: '5.019', d: 'Personas en plantilla a 30-6-2019 (63,3 % hombres, 36,7 % mujeres)', a: 'Plan, apdo. 7'},
    {v: '1 por provincia', d: 'Centros de emergencia, como mínimo', a: 'Ley 4/2007, art. 18.3'},
    {v: '1 por provincia', d: 'Casas de acogida, como mínimo {{examen:2026}}', a: 'Ley 4/2007, art. 19.4'},
    {v: '10 letras', d: 'Formas de violencia del art. 2 (a-j); la j) es cláusula abierta', a: 'Ley 4/2007, art. 2'},
    {v: '3 situaciones', d: 'De violencia: doméstica, laboral o docente, y social', a: 'Ley 4/2007, art. 3'},
    {v: '10 personas', d: 'Máximo de la Asesoría Confidencial', a: 'Plan, Anexo II.VII.1'},
    {v: '7 personas', d: 'Comité de Asesoramiento: 2 de Prevención, 1 de la Asesoría Confidencial, 1 abogado/a, 1 psicólogo/a, 2 sindicales', a: 'Plan, Anexo II.VII.2'},
    {v: '5 días laborables', d: 'Plazo máximo para alegar contra la resolución del Comité', a: 'Plan, Anexo II.VIII.E'}
  ],

  secciones: [
    {titulo: 'Igualdad de trato y discriminación', a: 'LO 3/2007, arts. 3-6', bloques: [
      {tipo: 'tabla', cab: ['Concepto', 'Qué dice la ley'], filas: [
        ['Igualdad de trato (3)', 'Ausencia de toda discriminación, directa o indirecta, por razón de sexo. En especial, las derivadas de la <b>maternidad</b>, la <b>asunción de obligaciones familiares</b> y el <b>estado civil</b>.'],
        ['Principio informador (4)', 'La igualdad de trato y de oportunidades informa el ordenamiento y se observa al <b>interpretar y aplicar</b> las normas.'],
        ['Discriminación directa (6.1)', 'Una persona es, ha sido o pudiera ser tratada, en atención a su sexo, de manera <b>menos favorable que otra en situación comparable</b>.'],
        ['Discriminación indirecta (6.2)', 'Una disposición, criterio o práctica <b>aparentemente neutros</b> pone a personas de un sexo en desventaja particular. No lo es si se justifica objetivamente por una <b>finalidad legítima</b> con medios necesarios y adecuados.'],
        ['Orden de discriminar (6.3)', 'Se considera discriminatoria <b>en cualquier caso</b>.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Empleo (5): se aplica al <b>empleo privado y al público</b>: acceso (incluido el trabajo por cuenta propia), formación, promoción, condiciones de trabajo (también retributivas y de despido) y afiliación a sindicatos, organizaciones empresariales o profesionales.', a: '5'},
        {t: 'No es discriminación en el acceso al empleo exigir una característica ligada al sexo si es un <b>requisito profesional esencial y determinante</b>, con objetivo legítimo y requisito proporcionado.', a: '5'}
      ]}
    ]},

    {titulo: 'Acoso, embarazo y represalias', a: 'LO 3/2007, arts. 7-9', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Acoso sexual · 7.1', reglas: [
          'Comportamiento <b>verbal o físico</b>, de <b>naturaleza sexual</b>.',
          'Con el propósito o el efecto de atentar contra la dignidad, <b>en particular</b> cuando crea un entorno intimidatorio, degradante u ofensivo.'
        ]},
        {titulo: 'Acoso por razón de sexo · 7.2', reglas: [
          'Comportamiento realizado <b>en función del sexo</b> de una persona.',
          'Con el propósito o el efecto de atentar contra su dignidad <b>y</b> de crear un entorno intimidatorio, degradante u ofensivo.'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Ambos acosos se consideran <b>en todo caso discriminatorios</b>. Todo ello sin perjuicio del Código Penal.', a: '7.1 y 7.3'},
        {t: 'Condicionar un derecho o una expectativa de derecho a aceptar el acoso también es discriminación por razón de sexo.', a: '7.4'},
        {t: 'Todo trato desfavorable a las mujeres por <b>embarazo o maternidad</b> es discriminación <b>directa</b> por razón de sexo.', a: '8', examen: '2026'},
        {t: '<b>Indemnidad</b>: es discriminación cualquier trato adverso por presentar queja, reclamación, denuncia, demanda o recurso contra la discriminación.', a: '9'}
      ]}
    ]},

    {titulo: 'Consecuencias, acciones positivas y tutela', a: 'LO 3/2007, arts. 10-13', bloques: [
      {tipo: 'lista', items: [
        {t: 'Actos y cláusulas discriminatorios: <b>nulos y sin efecto</b>. Generan reparaciones o indemnizaciones reales, efectivas y proporcionadas y, en su caso, sanciones eficaces y disuasorias.', a: '10'},
        {t: 'Acciones positivas: los Poderes Públicos <b>adoptarán</b> medidas específicas a favor de las mujeres ante situaciones patentes de desigualdad de hecho. Se aplican <b>mientras subsistan</b> esas situaciones y deben ser <b>razonables y proporcionadas</b>.', a: '11.1'},
        {t: 'Las personas físicas y jurídicas privadas <b>podrán</b> adoptarlas en los términos de la ley.', a: '11.2'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Tutela judicial · art. 12', reglas: [
          'Cualquier persona puede pedirla a los tribunales (art. 53.2 CE), <b>incluso tras terminar la relación</b> en que se discriminó.',
          'Procesos civiles, sociales y contencioso-administrativos: personas físicas y jurídicas con <b>interés legítimo</b>.',
          'Litigios sobre acoso: la <b>persona acosada es la única legitimada</b>.'
        ]},
        {titulo: 'Prueba · art. 13', reglas: [
          'Si se alega discriminación por razón de sexo, la <b>persona demandada</b> prueba la ausencia de discriminación y la proporcionalidad de sus medidas.',
          'El juez, a instancia de parte, <b>podrá</b> pedir informe a organismos públicos competentes.',
          '<b>No se aplica a los procesos penales.</b>'
        ]}
      ]}
    ]},

    {titulo: 'Ley 4/2007: objeto, formas y situaciones de violencia', a: 'Ley 4/2007, arts. 1-4', bloques: [
      {tipo: 'lista', items: [
        {t: 'Objeto: medidas integrales de <b>sensibilización, prevención y erradicación</b> de la violencia sobre las mujeres, y de protección, asistencia y seguimiento a las víctimas.', a: '1.1'},
        {t: 'Violencia contra las mujeres: acto o agresión <b>motivado por su sexo</b> que cause o pueda causar daño físico o psicológico, o agresión a su libertad e indemnidad sexuales, incluidas la amenaza, la coacción o la privación arbitraria de libertad, al amparo de una situación de debilidad, dependencia o proximidad.', a: '1.2'},
        {t: 'Ámbito: mujeres que, <b>dentro de Aragón</b>, sean víctimas de cualquiera de las formas del art. 2.', a: '4'}
      ]},
      {tipo: 'tabla', cab: ['Art. 2 · Forma', 'Rasgo clave'], filas: [
        ['a) Malos tratos físicos', 'Acto intencional de fuerza contra el cuerpo de la mujer.'],
        ['b) Malos tratos psicológicos', 'Falta de autoestima o sufrimiento: amenazas, humillaciones, insultos, aislamiento, culpabilización…'],
        ['c) Malos tratos sexuales', 'Acto sexual forzado o sin consentimiento libre, sea cual sea la relación con el agresor.'],
        ['d) Agresiones y abusos sexuales a niñas o adolescentes', 'Los realiza un <b>mayor de edad</b> para su propia satisfacción sexual.'],
        ['e) Acoso sexual', 'Comportamiento verbal, <b>no verbal</b> o físico no deseado de índole sexual.'],
        ['f) Tráfico o explotación sexual', 'Con independencia de la relación con el agresor y de la <b>edad</b> de la víctima.'],
        ['g) Mutilación genital femenina', 'Aunque haya <b>consentimiento</b>, expreso o tácito, de la víctima.'],
        ['h) Contra los derechos sexuales y reproductivos', 'Impide o restringe su salud reproductiva, maternidad o decisión de procrear.'],
        ['i) Maltrato económico', 'Privación intencionada e injustificada de recursos; discriminación en los recursos compartidos.'],
        ['j) Otras formas análogas', 'Que lesionen o puedan lesionar la dignidad de la mujer.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Las formas del art. 2 cuentan <b>estén o no tipificadas</b> como delito, falta o infracción administrativa.', a: '2'},
        {t: '<b>Doméstica (3.a)</b>: vínculo afectivo, conyugal, de pareja, paterno-filial o semejante, actual o pasado, <b>aun sin convivencia</b>; también descendientes, ascendientes o hermanas, y menores o incapaces que convivan con él o estén bajo potestad, tutela o guarda del cónyuge o conviviente.', a: '3.a'},
        {t: '<b>Laboral o docente (3.b)</b>: vínculo laboral, docente o de prestación de servicios, por dependencia o por proximidad.', a: '3.b'},
        {t: '<b>Social (3.c)</b>: sin ninguno de los vínculos anteriores; incluye a las personas bajo custodia o guarda en centros públicos o privados.', a: '3.c'}
      ]},
      {tipo: 'ejemplo', t: 'Un compañero de trabajo acosa a una empleada aprovechando la proximidad del puesto: violencia laboral o docente (3.b). Si quien la agrede es su expareja, aunque nunca hayan convivido: violencia doméstica (3.a).'}
    ]},

    {titulo: 'Centros de protección y apoyo', a: 'Ley 4/2007, arts. 18-23', bloques: [
      {tipo: 'tabla', cab: ['Recurso', 'Qué es', 'Dato clave'], filas: [
        ['Centro de emergencia (18)', 'Asistencia <b>permanente e inmediata</b>: alojamiento y protección a víctimas o mujeres en riesgo inminente, y a sus hijas e hijos acompañantes.', 'Equipo social especializado. <b>Al menos uno por provincia.</b>'],
        ['Casa de acogida (19)', 'Servicio social especializado: acoge <b>por un tiempo determinado</b> a mujeres solas o con menores, víctimas de violencia doméstica, que han dejado el domicilio y carecen de medios.', 'Equipos multidisciplinares. <b>Al menos una por provincia</b> {{examen:2026}}.'],
        ['Piso tutelado (20)', 'Hogar funcional y temporal para unidades familiares que ya no necesitan del todo el tratamiento de la casa de acogida.', 'Alojamiento transitorio para lograr su autonomía personal.'],
        ['Alojamiento alternativo específico (21)', 'Alojamiento <b>inmediato</b> en centros específicos, propios o concertados.', 'Para mujeres <b>mayores o discapacitadas</b>. Lo arbitra el Departamento de servicios sociales.'],
        ['Punto de encuentro (22)', 'Lugar para las visitas de madres y/o padres a sus hijos tras nulidad, separación, divorcio o ruptura, con antecedentes de violencia.', 'Departamento de <b>familia</b>. Su personal informa a la autoridad judicial.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Si la mujer que entra en una casa de acogida tiene a su cargo ascendientes o descendientes incapacitados o dependientes, el Departamento de servicios sociales le dará <b>de forma inmediata</b> el recurso más conveniente.', a: '19.5'},
        {t: 'Autorización, registro y acreditación de los centros: <b>reglamento del Gobierno de Aragón</b>.', a: '23'}
      ]}
    ]},

    {titulo: 'Servicios de protección y apoyo', a: 'Ley 4/2007, arts. 24-31', bloques: [
      {tipo: 'tabla', cab: ['Servicio', 'Quién', 'Clave'], filas: [
        ['Dispositivo de alarma (24)', '<b>Instituto Aragonés de la Mujer</b> (IAM), solo o con otras Administraciones y entidades privadas.', '<b>Podrá</b> facilitarlo a mujeres en <b>alto riesgo</b>. Teleasistencia dentro y fuera del domicilio. La idoneidad la valora el equipo técnico del programa.'],
        ['Mediación familiar (25)', 'Departamento de <b>familia</b>.', 'Mediador cualificado, neutral e imparcial. Conflictos de separación, divorcio, nulidad o ruptura de la unión de hecho.'],
        ['Atención psicológica a hombres (26)', '<b>IAM</b>.', 'Hombres residentes en Aragón que, de forma reciente o no, hayan ejercido violencia contra las mujeres en relaciones familiares o asimiladas. Tratamiento específico.'],
        ['Atención psicológica (27)', 'Desde el ámbito social.', '<b>Gratuita</b> para las víctimas y sus hijas e hijos, hasta acabar el proceso terapéutico. Sigue tras salir de la casa de acogida.'],
        ['Atención sanitaria (28)', 'Departamento de <b>salud</b>.', 'Protocolo de pautas uniformes para sanitarios, revisado periódicamente. Se fomenta también en la sanidad privada.'],
        ['Vivienda (29)', 'Administración de la Comunidad Autónoma.', 'Reserva de <b>viviendas protegidas</b> en arrendamiento o precario para víctimas de violencia doméstica.'],
        ['Inserción sociolaboral (30)', 'Administración de la Comunidad Autónoma.', 'Convenios y subvenciones a quien las contrate o a ellas como autónomas. Preferencia en programas de formación, inscritas como <b>demandantes de empleo</b> en el Instituto Aragonés de Empleo.'],
        ['Acción popular (31)', '<b>Gobierno de Aragón</b>.', 'En los casos más graves, <b>si la víctima lo solicita</b>, o cuando el delito cause su <b>muerte</b>.']
      ]}
    ]},

    {titulo: 'II Plan de Igualdad: ámbito, ejes y Comisión de Igualdad', a: 'Plan, apdos. 4-11', bloques: [
      {tipo: 'lista', items: [
        {t: 'Ámbito personal: <b>todo el personal funcionario y laboral</b> del Ayuntamiento y sus organismos autónomos que no tengan plan propio y se adhieran al acuerdo de condiciones de trabajo comunes.', a: '5.1'},
        {t: 'Vigencia: <b>cuatro años</b> desde su aprobación y registro. Entra en vigor al aprobarlo el Gobierno de Zaragoza y publicarse en el Boletín Oficial de la Provincia.', a: '5.3', examen: '2025'},
        {t: 'Elaborado en la Comisión de Igualdad y negociado en una Comisión Negociadora <b>paritaria</b> (Ayuntamiento y sindicatos).', a: '4'},
        {t: 'Objetivo general: igualdad <b>real y efectiva</b> de oportunidades y evitar cualquier discriminación por razón de sexo en el Ayuntamiento.', a: '8'}
      ]},
      {tipo: 'tabla', cab: ['Eje', 'Objetivo', 'Líneas'], filas: [
        ['A · Cultura de la organización', 'La igualdad como valor fundamental de la organización municipal.', 'A.1 Comunicación y sensibilización · A.2 Participación y negociación · A.3 Formación · A.4 Estructura y órganos de seguimiento'],
        ['B · Gestión de Recursos Humanos', 'Perspectiva de género en la gestión de personal.', 'B.1 Acceso · B.2 Plantilla, RPT y promoción profesional · B.3 Retribuciones'],
        ['C · Conciliación y corresponsabilidad', 'Derecho a conciliar para toda la plantilla y corresponsabilidad en el ámbito familiar y doméstico.', 'C.1 Conciliación · C.2 Corresponsabilidad'],
        ['D · Prevención, salud laboral y protección frente al acoso', 'Entorno laboral adecuado para mejorar la calidad de vida.', 'D.1 Prevención y salud laboral · D.2 Clima laboral · D.3 Protección frente al acoso sexual, por razón de sexo y por orientación sexual']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: '<b>Comisión de Igualdad</b>: equipo de Gobierno, servicios municipales implicados, todos los sindicatos con derecho a negociación colectiva y agentes de igualdad. <b>Paritaria</b> entre corporación y secciones sindicales. Sus acuerdos son <b>públicos</b>.', a: '10'},
        {t: 'Hace una <b>memoria anual pública</b>. El informe de seguimiento anual lo elabora la <b>Unidad Municipal de Igualdad</b> y se incluye en esa memoria. La <b>evaluación final</b> la hace la Comisión y es la base del siguiente Plan.', a: '10'},
        {t: 'En el <b>último año</b> de vigencia se hace el diagnóstico de la plantilla, que aprueba la Comisión de Igualdad.', a: '11'}
      ]}
    ]},

    {titulo: 'Protocolo frente al acoso (Anexo II del Plan)', a: 'Plan, Anexo II', bloques: [
      {tipo: 'tabla', cab: ['Tipo', 'Definición del Protocolo'], filas: [
        ['Acoso sexual', 'Conducta de naturaleza sexual en el ámbito laboral. Dos tipos: <b>chantaje sexual</b> (de intercambio: lo hace quien puede decidir sobre el empleo o las condiciones de trabajo) y <b>acoso ambiental</b> (entorno intimidatorio, hostil o humillante) {{examen:2025}}.'],
        ['Acoso por razón de sexo', 'Comportamiento causado por <b>estereotipos de género</b>, desarrollado de forma sistemática, que atenta contra la dignidad e integridad.'],
        ['Acoso por orientación sexual', 'Basado en la orientación sexual, identidad de género y/o expresión de género de una persona.']
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Asesoría Confidencial · VII.1', reglas: [
          'Recibe las denuncias e inicia el procedimiento. <b>Máximo diez personas</b>.',
          'Inicialmente: agentes de igualdad y delegados/as de prevención formados voluntariamente.',
          'Lleva el procedimiento <b>informal</b> y puede mediar entre las partes.'
        ]},
        {titulo: 'Comité de Asesoramiento · VII.2', reglas: [
          'Órgano colegiado que desarrolla el procedimiento <b>formal</b>.',
          'Dos técnicos/as de Prevención, una persona de la Asesoría Confidencial (que no haya intervenido en el informal), un abogado/a, un psicólogo/a y dos representantes sindicales.',
          'A ambos órganos los nombra la <b>Presidencia de la Comisión de Igualdad</b>.'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Denuncia ante la Asesoría Confidencial o el Servicio de Prevención y Salud Laboral. Verbal o escrita; la verbal se <b>ratifica por escrito</b>. <b>No se admiten denuncias anónimas.</b>', a: 'VIII.A'},
        {t: 'Pueden denunciar: la persona presuntamente acosada o su representante legal; la representación sindical, con su autorización; cualquier empleado público de forma motivada (la víctima debe ratificarlo).', a: 'VIII.A'},
        {t: 'Tras el análisis inicial, la Asesoría puede: no admitir a trámite, iniciar el procedimiento informal o iniciar el formal.', a: 'VIII.B'},
        {t: 'Contra la resolución del Comité: alegaciones en <b>cinco días laborables</b> como máximo.', a: 'VIII.E'},
        {t: 'Garantías: confidencialidad (código numérico), respeto, diligencia y celeridad, imparcialidad y <b>prohibición de represalias</b>. La denuncia de buena fe no es falsa aunque no se pruebe.', a: 'VI'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'El trato desfavorable por embarazo es discriminación indirecta', ok: 'Es discriminación directa por razón de sexo.', a: 'LO 3/2007, art. 8'},
    {x: 'Una disposición neutra que perjudica a un sexo es siempre discriminatoria', ok: 'No lo es si se justifica objetivamente por una finalidad legítima, con medios necesarios y adecuados.', a: 'LO 3/2007, art. 6.2'},
    {x: 'En un litigio por acoso sexual puede demandar cualquiera con interés legítimo', ok: 'La persona acosada es la única legitimada.', a: 'LO 3/2007, art. 12.3'},
    {x: 'La carga de la prueba se invierte también en el proceso penal', ok: 'El art. 13.1 no se aplica a los procesos penales.', a: 'LO 3/2007, art. 13.2'},
    {x: 'La Ley 4/2007 define el acoso sexual solo como comportamiento verbal o físico', ok: 'Incluye también el no verbal. El «verbal o físico» es la definición de la LO 3/2007.', a: 'Ley 4/2007, art. 2.e; LO 3/2007, art. 7.1'},
    {x: 'Debe haber al menos una casa de acogida en cada comarca', ok: 'En cada provincia (igual que los centros de emergencia).', a: 'Ley 4/2007, arts. 18.3 y 19.4'},
    {x: 'El dispositivo de alarma se da a toda víctima y lo presta el Departamento de servicios sociales', ok: 'El IAM podrá facilitarlo a mujeres en situación de alto riesgo.', a: 'Ley 4/2007, art. 24.1'},
    {x: 'La acción popular la ejerce el Instituto Aragonés de la Mujer en todos los casos', ok: 'La ejerce el Gobierno de Aragón en los casos más graves si la víctima lo pide, o si el delito causa su muerte.', a: 'Ley 4/2007, art. 31'},
    {x: 'El chantaje sexual es un tipo de acoso por razón de sexo', ok: 'Es un tipo de acoso sexual, junto con el acoso ambiental.', a: 'Plan, Anexo II.IV'},
    {x: 'Se admiten denuncias anónimas de acoso', ok: 'No se admiten. La denuncia verbal debe ratificarse por escrito.', a: 'Plan, Anexo II.VIII.A'}
  ],

  examenes: [
    'Plan de Igualdad, apdo. 5.3 (vigencia de cuatro años desde su aprobación y registro): examen oficial 1-jun-2025, pregunta 1.',
    'Plan de Igualdad, Anexo II.IV (el chantaje sexual es un tipo de acoso sexual): examen oficial 1-jun-2025, pregunta 11.',
    'Ley 4/2007 de Aragón, art. 19.4 (al menos una casa de acogida por provincia): examen oficial 31-may-2026, pregunta 4.',
    'LO 3/2007, art. 8 (embarazo o maternidad: discriminación directa): examen oficial 31-may-2026, pregunta 17.'
  ]
});
