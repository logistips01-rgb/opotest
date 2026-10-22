/* Esquema · Auxiliar Administrativo · Tema 10
   Fuentes: LBRL (BOE-A-1985-5392) arts. 79-83 y 47.2; Reglamento de Bienes de las
   Entidades Locales, RD 1372/1986 (BOE-A-1986-17958); preceptos básicos de la
   Ley 33/2003 LPAP (BOE-A-2003-20254) arts. 8.1 y 93.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 10, {
  titulo: 'Bienes de las entidades locales',
  epigrafe: 'Los bienes de las entidades locales: bienes de dominio público y bienes patrimoniales.',
  etiquetas: ['LBRL · arts. 79 a 83', 'RBEL (RD 1372/1986) · arts. 1 a 119', 'LPAP · arts. 8 y 93 (básicos)'],
  fuentes: [
    'Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LBRL). Texto consolidado BOE-A-1985-5392, arts. 79 a 83 y 47.2.',
    'Real Decreto 1372/1986, de 13 de junio, por el que se aprueba el Reglamento de Bienes de las Entidades Locales (RBEL). Texto consolidado BOE-A-1986-17958, arts. 1 a 119.',
    'Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones Públicas (LPAP). Texto consolidado BOE-A-2003-20254, arts. 8.1 y 93.1-3 (básicos según su disposición final segunda).'
  ],

  esencial: [
    {t: 'Los bienes locales son de <b>dominio público</b> (uso o servicio público) o <b>patrimoniales</b>. Los <b>comunales</b> son dominio público cuyo aprovechamiento corresponde al común de los vecinos.', a: 'LBRL 79'},
    {t: 'Dominio público y comunales: <b>inalienables, inembargables e imprescriptibles</b> y sin tributos. Patrimoniales: su legislación específica y, en su defecto, <b>Derecho privado</b>.', a: 'LBRL 80'},
    {t: 'Cambiar la calificación exige <b>expediente</b> de oportunidad y legalidad, salvo los casos <b>automáticos</b> del art. 81.2.', a: 'LBRL 81', examen: '2026'},
    {t: 'Recuperación de oficio: dominio público <b>en cualquier momento</b>; patrimoniales, en <b>un año</b>.', a: 'LBRL 82.a'},
    {t: 'Uso común general: libre. Uso común especial: <b>licencia</b>. Uso privativo o anormal: <b>concesión</b>, en régimen de concurrencia.', a: 'RBEL 76-78; LPAP 93.1'}
  ],

  mapa: [
    {titulo: 'LBRL · Título VI, Cap. I «Bienes»', rango: 'arts. 79-83', items: [
      ['79', 'Patrimonio y clases de bienes'], ['80', 'Régimen jurídico'], ['81', 'Alteración de la calificación'],
      ['82', 'Prerrogativas: recuperación y deslinde'], ['83', 'Montes vecinales en mano común']
    ]},
    {titulo: 'RBEL · Título I, Caps. I y II', rango: 'arts. 1-16', items: [
      ['1', 'Patrimonio y normas aplicables'], ['2-5', 'Dominio público: uso, servicio y comunales'],
      ['6-7', 'Patrimoniales, parcelas sobrantes y efectos no utilizables'], ['8', 'Alteración de la calificación'],
      ['9-16', 'Adquisición de bienes']
    ]},
    {titulo: 'RBEL · Cap. III «Conservación y tutela»', rango: 'arts. 17-73', items: [
      ['17-36', 'Inventario y registro'], ['37-43', 'Administración'],
      ['44-73', 'Prerrogativas: investigación, deslinde, recuperación, desahucio']
    ]},
    {titulo: 'RBEL · Caps. IV y V', rango: 'arts. 74-119', items: [
      ['74-91', 'Uso del dominio público'], ['92-93', 'Uso de los patrimoniales'],
      ['94-108', 'Aprovechamiento de los comunales'], ['109-119', 'Enajenación']
    ]},
    {titulo: 'LPAP · preceptos básicos citados', rango: 'arts. 8 y 93', items: [
      ['8.1', 'Principios de gestión de los patrimoniales'], ['93', 'Concesiones demaniales']
    ]}
  ],

  cifras: [
    {v: '25 años', d: 'Adscripción de un patrimonial a uso o servicio público que lo convierte, sin expediente, en demanial {{examen:2026}}', a: 'LBRL 81.2.b; RBEL 8.4.b'},
    {v: '1 año', d: 'Plazo para recuperar de oficio la posesión de los patrimoniales', a: 'LBRL 82.a; RBEL 70.2'},
    {v: '1 mes', d: 'Información pública del expediente de alteración de la calificación', a: 'RBEL 8.2'},
    {v: '30 años', d: 'Si un bien adquirido con destino permanente lo cumple 30 años, la condición se da por consumada', a: 'RBEL 13'},
    {v: '5 + 30 años', d: 'Cesión gratuita sin plazo en el acuerdo: fines cumplidos en 5 años y destino mantenido 30', a: 'RBEL 111.2'},
    {v: '25 %', d: 'De los recursos ordinarios: por encima, enajenar, gravar o permutar inmuebles patrimoniales exige autorización de la Comunidad Autónoma', a: 'RBEL 109.1'},
    {v: '20 %', d: 'De los recursos ordinarios: por encima, enajenar bienes exige mayoría absoluta', a: 'LBRL 47.2.m'},
    {v: '75 años', d: 'Duración máxima de una concesión demanial, prórrogas incluidas (norma básica)', a: 'LPAP 93.3'},
    {v: '10 años', d: 'Sin disfrute comunal durante más de 10 años: el bien puede perder el carácter comunal', a: 'RBEL 100.1'},
    {v: '6 %', d: 'Canon mínimo, sobre el valor en venta, por la cesión de uso de un patrimonial', a: 'RBEL 92.2'}
  ],

  secciones: [
    {titulo: 'Clases de bienes y régimen', a: 'LBRL 79-80; RBEL 1-7', bloques: [
      {tipo: 'tabla', cab: ['Clase', 'Qué son', 'Ejemplos'], filas: [
        ['<b>Uso público</b>', 'Obras públicas de aprovechamiento o utilización generales cuya conservación y policía son de la entidad local.', 'Caminos, plazas, calles, paseos, parques, aguas de fuentes y estanques, puentes.'],
        ['<b>Servicio público</b>', 'Destinados directamente al cumplimiento de fines públicos de la entidad.', 'Casas Consistoriales, mataderos, mercados, lonjas, museos, montes catalogados, escuelas, cementerios, piscinas.'],
        ['<b>Comunales</b>', 'Dominio público cuyo aprovechamiento corresponde al <b>común de los vecinos</b>. Solo de <b>municipios y entidades locales menores</b>.', 'Ver sección de comunales.'],
        ['<b>Patrimoniales o de propios</b>', 'Propiedad de la entidad, no destinados a uso público ni afectados a un servicio público; pueden dar ingresos.', 'También las <b>parcelas sobrantes</b> y los <b>efectos no utilizables</b>.']
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Dominio público y comunales · LBRL 80.1', reglas: [
          '<b>Inalienables</b>, <b>inembargables</b> e <b>imprescriptibles</b>.',
          'No están sujetos a <b>tributo alguno</b>.'
        ]},
        {titulo: 'Patrimoniales · LBRL 80.2; RBEL 6.2 y 14', reglas: [
          'Se rigen por su <b>legislación específica</b> y, en su defecto, por el <b>Derecho privado</b>.',
          'Los particulares pueden adquirirlos por <b>prescripción</b> según las leyes comunes.'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: '<b>Parcela sobrante</b>: terreno que por su reducida extensión, forma irregular o emplazamiento no admite uso adecuado. Se declara mediante expediente de calificación.', a: 'RBEL 7.2-3'},
        {t: '<b>Efectos no utilizables</b>: bienes que por deterioro, depreciación o mal estado ya no sirven, aunque sigan en el inventario.', a: 'RBEL 7.4'},
        {t: 'Orden de normas: básica estatal de régimen local, básica de bienes públicos, autonómica, estatal no básica, ordenanzas y, supletoriamente, el resto del ordenamiento.', a: 'RBEL 1.2'}
      ]}
    ]},

    {titulo: 'Alteración de la calificación jurídica', a: 'LBRL 81; RBEL 8', bloques: [
      {tipo: 'lista', items: [
        {t: 'Regla: <b>expediente</b> que acredite su <b>oportunidad y legalidad</b>.', a: 'LBRL 81.1'},
        {t: 'Lo resuelve la Corporación tras <b>información pública de un mes</b>, con <b>mayoría absoluta</b> del número legal de miembros.', a: 'RBEL 8.2'},
        {t: 'Es competencia del <b>Pleno</b> la de los bienes de dominio público. La LBRL pide mayoría absoluta para alterar la de los <b>demaniales o comunales</b>.', a: 'LBRL 22.2.l y 47.2.n'},
        {t: 'Un bien desafectado sigue siendo dominio público hasta su <b>recepción formal</b> por el órgano competente.', a: 'RBEL 8.3'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Alteración automática · LBRL 81.2', items: [
          'Aprobación definitiva de los <b>planes de ordenación urbana</b> y de los <b>proyectos de obras y servicios</b> {{examen:2026}}',
          'Adscripción de bienes patrimoniales <b>por más de veinticinco años</b> a un uso o servicio públicos'
        ]},
        {titulo: 'Añade el RBEL · 8.4.c', items: [
          'Adquisición por <b>usucapión</b>, según el Derecho civil, de una cosa destinada a un uso o servicio público o comunal'
        ]}
      ]},
      {tipo: 'ejemplo', t: 'Un local patrimonial lleva 26 años usado como centro cívico municipal: ya es dominio público sin necesidad de expediente. Con 20 años, haría falta expediente.'}
    ]},

    {titulo: 'Adquisición, inventario y registro', a: 'RBEL 9-36', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Adquisición · 10-14', items: [
          'Por atribución de la ley',
          'A título oneroso, con o sin expropiación',
          'Por herencia, legado o donación',
          'Por prescripción y por ocupación',
          'Por cualquier otro modo legítimo'
        ], reglas: [
          'A título gratuito: <b>sin restricción</b>; si lleva una carga, solo si no supera el valor de lo adquirido. Herencias: <b>a beneficio de inventario</b>.',
          'Inmuebles a título oneroso: <b>informe previo pericial</b>.'
        ]},
        {titulo: 'Inventario · 17-36', reglas: [
          'Obligatorio, de <b>todos</b> los bienes y derechos. Separado para entes con personalidad propia dependientes.',
          '<b>8 epígrafes</b>: inmuebles; derechos reales; muebles histórico-artísticos o de considerable valor; valores mobiliarios, créditos y derechos personales; vehículos; semovientes; otros muebles; bienes y derechos revertibles.',
          'Lo autoriza el <b>Secretario</b> con el visto bueno del <b>Presidente</b>. Lo aprueba, rectifica y comprueba el <b>Pleno</b>.',
          'Rectificación <b>anual</b>; comprobación cada vez que se <b>renueva la Corporación</b>.'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Inmuebles y derechos reales: deben inscribirse en el <b>Registro de la Propiedad</b>. Basta certificación del Secretario sobre el inventario aprobado, con visto bueno del Presidente.', a: 'RBEL 36.1-2'},
        {t: 'Los honorarios registrales por inmatricular o inscribir se reducen <b>a la mitad</b>.', a: 'RBEL 36.5'},
        {t: 'Las entidades locales <b>deben</b> ejercer las acciones para defender sus bienes, previo dictamen del Secretario, de la Asesoría Jurídica o, en su defecto, de un Letrado.', a: 'RBEL 9.2-3'}
      ]}
    ]},

    {titulo: 'Prerrogativas', a: 'LBRL 82; RBEL 44-73', bloques: [
      {tipo: 'tabla', cab: ['Potestad', 'Qué permite', 'Datos'], filas: [
        ['<b>Investigación</b> (45-55)', 'Averiguar la titularidad de bienes que se presumen propios.', 'De oficio o por denuncia. Anuncio en el tablón <b>15 días</b>; alegaciones <b>un mes</b>. Premio al denunciante: <b>10 %</b>.'],
        ['<b>Deslinde</b> (56-69)', 'Delimitar fincas de límites imprecisos o con indicios de usurpación.', 'Anuncio con <b>60 días</b> de antelación. Documentos hasta <b>20 días</b> antes. El acuerdo es ejecutivo; recurso contencioso-administrativo.'],
        ['<b>Recuperación de oficio</b> (70-71)', 'Recobrar por sí la tenencia de sus bienes.', 'Dominio público: <b>en cualquier tiempo</b>. Patrimoniales: <b>un año</b> desde el día siguiente a la usurpación; después, tribunales ordinarios.'],
        ['<b>Desahucio administrativo</b> (44.1.d)', 'La Corporación acuerda y ejecuta por sí misma el desahucio.', 'Ejemplo del RBEL: viviendas cedidas a su personal cuando termina la ocupación (93).']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'Las tienen <b>en todo caso</b> municipios, provincias e islas; las demás entidades territoriales, si lo prevén las leyes autonómicas.', a: 'RBEL 44.1'},
        {t: 'Iniciado el deslinde, no cabe procedimiento judicial con igual pretensión ni interdictos.', a: 'RBEL 66'},
        {t: 'Las entidades locales <b>no pueden allanarse</b> a demandas judiciales sobre el dominio de su patrimonio.', a: 'RBEL 73'}
      ]}
    ]},

    {titulo: 'Uso del dominio público', a: 'RBEL 74-91; LPAP 93', bloques: [
      {tipo: 'tabla', cab: ['Uso', 'Definición', 'Título'], filas: [
        ['<b>Común general</b>', 'De todos por igual, sin circunstancias singulares.', '<b>Libre</b>, según su naturaleza y las normas.'],
        ['<b>Común especial</b>', 'De todos, pero con peligrosidad, intensidad u otra circunstancia singular.', '<b>Licencia</b>: directa, salvo número limitado (licitación o, si no procede, sorteo).'],
        ['<b>Privativo</b>', 'Ocupa una porción y limita o excluye el uso de los demás.', '<b>Concesión</b> administrativa.'],
        ['<b>Anormal</b>', 'No conforme con el destino principal del bien.', '<b>Concesión</b> administrativa.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Concesiones demaniales: en <b>régimen de concurrencia</b>; otorgamiento directo solo en los casos tasados.', a: 'LPAP 93.1; RBEL 78.2', examen: '2025'},
        {t: 'Ninguna concesión o licencia por <b>tiempo indefinido</b>. Máximo de la concesión: <b>75 años</b> con prórrogas (LPAP 93.3, básica). El RBEL 79 decía 99 años.', a: 'RBEL 79; LPAP 93.3'},
        {t: 'Garantía provisional: <b>2 %</b> del valor del dominio ocupado y de las obras. Definitiva: <b>3 %</b> (uso anormal: <b>5 %</b>).', a: 'RBEL 87.3, 90.1 y 91.d'},
        {t: 'Información pública del proyecto y de las bases: <b>30 días</b>.', a: 'RBEL 87.4'},
        {t: 'El peticionario inicial tiene <b>derecho de tanteo</b> si su oferta no se aleja más de un <b>10 %</b> de la elegida.', a: 'RBEL 88.1'},
        {t: 'Las licencias ligadas a cualidades personales o de número limitado <b>no son transmisibles</b>.', a: 'RBEL 77.3'}
      ]}
    ]},

    {titulo: 'Patrimoniales: uso y enajenación', a: 'RBEL 92 y 109-119; LBRL 47.2; LPAP 8.1', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Uso · RBEL 92', reglas: [
          'Arrendamiento y cesión de uso: normas de <b>contratación</b> de las entidades locales.',
          '<b>Subasta</b> si la cesión dura <b>más de 5 años</b> o el precio supera el <b>5 %</b> de los recursos ordinarios.',
          'Canon no inferior al <b>6 %</b> del valor en venta.'
        ]},
        {titulo: 'Principios · LPAP 8.1 (básico)', items: [
          'Eficiencia y economía en la gestión',
          'Eficacia y rentabilidad en la explotación',
          '<b>Publicidad, transparencia, concurrencia y objetividad</b> en adquisición, explotación y enajenación {{examen:2025}}',
          'Identificación y control mediante inventarios o registros',
          'Colaboración y coordinación entre Administraciones'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Enajenar, gravar o permutar inmuebles patrimoniales: <b>autorización de la Comunidad Autónoma</b> si superan el <b>25 %</b> de los recursos ordinarios. De toda enajenación de inmuebles se <b>da cuenta</b> a la Comunidad Autónoma.', a: 'RBEL 109.1'},
        {t: 'Cesión gratuita de inmuebles: solo a <b>entidades o instituciones públicas</b> para fines en beneficio de los vecinos, o a <b>instituciones privadas de interés público sin ánimo de lucro</b>.', a: 'RBEL 109.2'},
        {t: 'Cesión gratuita: <b>mayoría absoluta</b>, expediente con informe del Interventor, certificaciones de Registro e inventario e información pública de al menos <b>15 días</b>.', a: 'RBEL 110.1'},
        {t: 'Si no se usa en plazo o deja de usarse para el fin: la cesión se resuelve y el bien <b>revierte</b>.', a: 'RBEL 111.1'},
        {t: 'Antes de vender o permutar: <b>valoración técnica</b> del justiprecio y depuración física y jurídica del inmueble.', a: 'RBEL 113 y 118'},
        {t: 'Sin subasta: <b>permuta</b> con otro inmueble si la diferencia de valor no pasa del <b>40 %</b>. Parcelas sobrantes: <b>venta directa a los colindantes</b> o permuta.', a: 'RBEL 112.2 y 115.1'},
        {t: 'Mayoría absoluta en la LBRL: enajenación por encima del <b>20 %</b> de los recursos ordinarios y cesión gratuita a otras Administraciones o instituciones públicas.', a: 'LBRL 47.2.m y ñ'}
      ]}
    ]},

    {titulo: 'Bienes comunales', a: 'RBEL 94-108; LBRL 47.2.i', bloques: [
      {tipo: 'lista', items: [
        {t: 'Forma preferente: <b>explotación común o cultivo colectivo</b>. Si es impracticable: aprovechamiento peculiar según costumbre, o <b>lotes o suertes</b>. Si tampoco: <b>adjudicación mediante precio</b>.', a: 'RBEL 94'},
        {t: 'Lotes: en proporción <b>directa</b> a las personas a cargo e <b>inversa</b> a la situación económica.', a: 'RBEL 97'},
        {t: 'Adjudicación por precio: autorización de la Comunidad Autónoma, <b>subasta</b> con preferencia de los vecinos; la Corporación no puede detraer más del <b>5 %</b> del producto.', a: 'RBEL 98'},
        {t: 'Derecho de todos los vecinos sin distinción de sexo, estado civil o edad; también los <b>extranjeros domiciliados</b>.', a: 'RBEL 103.1'},
        {t: 'Más de <b>10 años</b> sin disfrute comunal: pueden perder ese carácter (información pública, mayoría absoluta y aprobación de la Comunidad Autónoma).', a: 'RBEL 100.1'},
        {t: 'Ceder el aprovechamiento: <b>Pleno</b> con <b>mayoría absoluta</b>.', a: 'RBEL 102; LBRL 47.2.i'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'Los bienes comunales son patrimoniales', ok: 'Son dominio público: su aprovechamiento corresponde al común de los vecinos.', a: 'LBRL 79.3; RBEL 2.3'},
    {x: 'Basta adscribir un patrimonial 20 años a un servicio público para que sea demanial', ok: 'Hacen falta más de 25 años.', a: 'LBRL 81.2.b'},
    {x: 'Los patrimoniales se recuperan de oficio en cualquier momento', ok: 'Solo en el plazo de un año; el dominio público, en cualquier momento.', a: 'LBRL 82.a'},
    {x: 'Los patrimoniales se rigen solo por el Derecho privado', ok: 'Primero por su legislación específica; el Derecho privado, en su defecto.', a: 'LBRL 80.2'},
    {x: 'Una provincia puede tener bienes comunales', ok: 'Solo municipios y entidades locales menores.', a: 'RBEL 2.4'},
    {x: 'Ningún particular puede adquirir por prescripción un bien local', ok: 'Los patrimoniales sí; el dominio público es imprescriptible.', a: 'RBEL 14.1; LBRL 80.1'},
    {x: 'El inventario lo aprueba el Alcalde', ok: 'Lo aprueba, rectifica y comprueba el Pleno.', a: 'RBEL 34'},
    {x: 'El uso común especial requiere concesión', ok: 'Requiere licencia; la concesión es para el uso privativo y el anormal.', a: 'RBEL 77-78'},
    {x: 'Las concesiones demaniales se otorgan directamente al solicitante', ok: 'En régimen de concurrencia, salvo excepciones tasadas.', a: 'LPAP 93.1'},
    {x: 'Un inmueble patrimonial puede cederse gratis a una empresa privada', ok: 'Solo a entidades o instituciones públicas, o privadas de interés público sin ánimo de lucro.', a: 'RBEL 109.2'}
  ],

  examenes: [
    'LBRL art. 81.2 (supuestos de alteración automática de la calificación): examen oficial 31-may-2026, pregunta 48.',
    'LPAP art. 8.1.c (publicidad, transparencia, concurrencia y objetividad): examen oficial 1-jun-2025, segunda prueba, supuesto 2, pregunta 13.',
    'LPAP art. 93.1 (concesiones demaniales en régimen de concurrencia): examen oficial 1-jun-2025, segunda prueba, supuesto 2, pregunta 17.',
    'Las demás preguntas de bienes de esos exámenes citan el Reglamento aragonés (Decreto 347/2002) o la Ley 7/1999 de Administración Local de Aragón, que este esquema no recoge.'
  ]
});
