/* Esquema · Auxiliar Administrativo · Tema 10
   Fuentes: LBRL (BOE-A-1985-5392) arts. 79-83 y 47; Ley 7/1999 de Administración Local
   de Aragón (BOE-A-1999-10151); Decreto 347/2002 del Gobierno de Aragón, Reglamento de
   Bienes, Actividades, Servicios y Obras (BOA núm. 139, 25/11/2002); Reglamento de Bienes
   estatal, RD 1372/1986 (BOE-A-1986-17958), supletorio en Aragón; preceptos básicos de la
   Ley 33/2003 LPAP (BOE-A-2003-20254) arts. 8.1 y 93.
   Formato: ver data/esquemas/FORMATO.md */
registerEsquema('aux-admin-zaragoza', 10, {
  titulo: 'Bienes de las entidades locales',
  epigrafe: 'Los bienes de las entidades locales: bienes de dominio público y bienes patrimoniales.',
  etiquetas: ['LBRL · arts. 79 a 83', 'Aragón: Ley 7/1999 y Decreto 347/2002', 'RBEL (RD 1372/1986) · LPAP básica'],
  fuentes: [
    'Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local (LBRL). Texto consolidado BOE-A-1985-5392, arts. 79 a 83 y 47.',
    'Ley 7/1999, de 9 de abril, de Administración Local de Aragón. Texto consolidado BOE-A-1999-10151 (BOA núm. 45, de 17/04/1999), arts. 126.4 y 169 a 189.',
    'Decreto 347/2002, de 19 de noviembre, del Gobierno de Aragón, por el que se aprueba el Reglamento de Bienes, Actividades, Servicios y Obras de las Entidades Locales de Aragón (RBASO). BOA núm. 139, de 25/11/2002; corrección de errores en BOA núm. 9, de 24/01/2003. Arts. 1 a 121.',
    'Real Decreto 1372/1986, de 13 de junio, Reglamento de Bienes de las Entidades Locales (RBEL). Texto consolidado BOE-A-1986-17958. En Aragón, supletorio: el preámbulo del Decreto 347/2002 anuncia el «desplazamiento» de este reglamento.',
    'Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones Públicas (LPAP). Texto consolidado BOE-A-2003-20254, arts. 8.1 y 93.1-3 (básicos según su disposición final segunda).'
  ],

  esencial: [
    {t: 'Los bienes locales son de <b>dominio público</b> (uso o servicio público, y los <b>comunales</b>) o <b>patrimoniales</b>.', a: 'LBRL 79; Ley 7/1999 170.1'},
    {t: 'Dominio público y comunales: <b>inalienables, inembargables e imprescriptibles</b> y sin tributos. Patrimoniales: su legislación específica y, en su defecto, <b>Derecho privado</b>.', a: 'LBRL 80'},
    {t: 'Cambiar la calificación exige <b>expediente</b> de oportunidad y legalidad, salvo los casos <b>automáticos</b> del art. 81.2.', a: 'LBRL 81', examen: '2026'},
    {t: 'Recuperación de oficio: dominio público <b>en cualquier momento</b>; patrimoniales, en <b>un año</b>.', a: 'LBRL 82.a'},
    {t: 'En Aragón: uso común (general o especial) y uso privativo. El privativo con <b>instalaciones fijas y permanentes</b> es <b>uso privativo agravado</b> y exige <b>concesión</b>, de <b>50 años</b> como máximo.', a: 'RBASO 72, 75, 81 y 83.2', examen: '2025'}
  ],

  mapa: [
    {titulo: 'LBRL · Título VI, Cap. I «Bienes»', rango: 'arts. 79-83', items: [
      ['79', 'Patrimonio y clases de bienes'], ['80', 'Régimen jurídico'], ['81', 'Alteración de la calificación'],
      ['82', 'Prerrogativas: recuperación y deslinde'], ['83', 'Montes vecinales en mano común']
    ]},
    {titulo: 'Ley 7/1999 de Aragón · Título VI «Bienes»', rango: 'arts. 169-192', items: [
      ['169-176', 'Disposiciones generales: clases, régimen, prerrogativas, inventario'],
      ['177-181', 'Alteración de la calificación y desafectación de comunales'],
      ['182-185', 'Aprovechamiento de los bienes'], ['186-190', 'Tutela, cesiones, enajenación y permutas']
    ]},
    {titulo: 'Decreto 347/2002 (RBASO) · Título I «Los bienes»', rango: 'arts. 1-121', items: [
      ['1-6', 'Patrimonio, clases y régimen'], ['7-15', 'Calificación, alteración y mutaciones demaniales'],
      ['16-24', 'Adquisición'], ['25-42', 'Inventario y registro'], ['43-71', 'Defensa y prerrogativas'],
      ['72-106', 'Utilización: dominio público, comunales, patrimoniales'], ['107-121', 'Enajenación y gravamen']
    ]},
    {titulo: 'LPAP · preceptos básicos citados', rango: 'arts. 8 y 93', items: [
      ['8.1', 'Principios de gestión de los patrimoniales'], ['93', 'Concesiones demaniales']
    ]}
  ],

  cifras: [
    {v: '25 años', d: 'Adscripción de un patrimonial a uso o servicio público (en Aragón, también al aprovechamiento comunal) que lo convierte, sin expediente, en demanial {{examen:2026}}', a: 'LBRL 81.2.b; RBASO 11.1.b'},
    {v: '1 año', d: 'Plazo para recuperar de oficio la posesión de los patrimoniales', a: 'LBRL 82.a; RBASO 62.2'},
    {v: '1 mes', d: 'Información pública del procedimiento de alteración expresa de la calificación', a: 'RBASO 10; Ley 7/1999 177.2'},
    {v: '50 años', d: 'Plazo máximo de la concesión demanial en Aragón, salvo norma especial con plazo menor {{examen:2025}}', a: 'RBASO 83.2'},
    {v: '10 años', d: 'Sin disfrute comunal durante más de 10 años: el comunal puede pasar a patrimonial', a: 'Ley 7/1999 179.1; RBASO 12.1'},
    {v: '6 %', d: 'Del valor en venta: precio mínimo, como regla general, por arrendar o ceder el uso de un patrimonial {{examen:2026}}', a: 'RBASO 100.2'},
    {v: '25 %', d: 'De los recursos ordinarios: por encima, enajenar, gravar o permutar inmuebles exige aprobación previa de la Comunidad Autónoma', a: 'RBASO 121; Ley 7/1999 186.1'},
    {v: '20 %', d: 'De los recursos ordinarios: por encima, enajenar bienes exige mayoría absoluta (régimen común: en los municipios de gran población rige el art. 123.2 LBRL)', a: 'LBRL 47.2.m y 47.3; Ley 7/1999 126.4.ll'},
    {v: '50 %', d: 'Diferencia máxima de valor para permutar, con compensación económica', a: 'RBASO 115.2; Ley 7/1999 189.1'},
    {v: '5 + 30 años', d: 'Cesión gratuita sin plazo en el acuerdo: fines cumplidos en 5 años y destino mantenido 30', a: 'RBASO 118.3'}
  ],

  secciones: [
    {titulo: 'Clases de bienes y régimen', a: 'LBRL 79-80; Ley 7/1999 170-172; RBASO 3-6', bloques: [
      {tipo: 'tabla', cab: ['Clase', 'Qué son', 'Ejemplos'], filas: [
        ['<b>Uso público</b>', 'Destinados a ser utilizados <b>directamente por los particulares</b>.', 'Caminos y carreteras, <b>plazas</b> {{examen:2025}}, calles, paseos, parques, fuentes, canales, puentes.'],
        ['<b>Servicio público</b>', 'Destinados directamente al cumplimiento de fines públicos de competencia de la entidad.', 'Casas Consistoriales, mataderos, <b>mercados</b> {{examen:2026}}, lonjas, hospitales, escuelas, museos, instalaciones deportivas, cementerios.'],
        ['<b>Comunales</b>', 'Dominio público de la entidad cuya utilización, aprovechamiento y disfrute corresponde al <b>común de los vecinos</b>.', 'Ver sección de comunales.'],
        ['<b>Patrimoniales o de propios</b>', 'Propiedad de la entidad, no destinados directamente al uso público ni afectados a un servicio público ni comunales.', 'También las <b>parcelas sobrantes</b> y los <b>bienes no utilizables</b>. Si no consta la afectación, se <b>presume</b> patrimonial.']
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Dominio público y comunales · LBRL 80.1', reglas: [
          '<b>Inalienables</b>, <b>inembargables</b> e <b>imprescriptibles</b>.',
          'No están sujetos a <b>tributo alguno</b>.',
          'A los comunales se les aplica el régimen del dominio público, con sus normas propias de aprovechamiento (RBASO 6.2).'
        ]},
        {titulo: 'Patrimoniales · LBRL 80.2; RBASO 6.3', reglas: [
          'Se rigen por su <b>legislación específica</b> y, en su defecto, por el <b>Derecho privado</b>.',
          'Son <b>inembargables</b> los que se destinan materialmente a un servicio o función pública.',
          'Los particulares pueden adquirirlos por <b>prescripción</b> según las leyes comunes (RBEL 14.1).'
        ]}
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: '<b>Parcela sobrante</b>: terreno que por su reducida extensión, forma irregular o emplazamiento no admite uso adecuado. Se declara mediante procedimiento de calificación, salvo que resulte de planes o proyectos.', a: 'RBASO 5.1'},
        {t: '<b>Bienes no utilizables</b>: por deterioro, depreciación o mal estado carecen de utilidad. Lo declara el <b>Presidente</b>, con informe técnico, del Interventor y del Secretario.', a: 'RBASO 5.2'},
        {t: 'Orden de normas: básica estatal de régimen local, básica de bienes públicos, autonómica (en Aragón, Ley 7/1999 y RBASO) y, en su defecto, estatal no básica (RBEL).', a: 'RBEL 1.2'}
      ]}
    ]},

    {titulo: 'Alteración de la calificación jurídica', a: 'LBRL 81; Ley 7/1999 177-178; RBASO 10-14', bloques: [
      {tipo: 'lista', items: [
        {t: 'Regla: <b>expediente</b> que acredite su <b>oportunidad y legalidad</b>.', a: 'LBRL 81.1'},
        {t: 'Lo resuelve el <b>Pleno</b> tras <b>información pública de un mes</b>. Si se trata de bienes de <b>dominio público</b>, con <b>mayoría absoluta</b> del número legal de miembros.', a: 'RBASO 10; Ley 7/1999 177.2'},
        {t: 'La LBRL pide mayoría absoluta para alterar la calificación de los <b>demaniales o comunales</b> (régimen común).', a: 'LBRL 47.2.n'},
        {t: 'Mutación demanial (cambio de destino sin cambiar la calificación): Pleno por <b>mayoría simple</b>; si se cede la titularidad a otra Administración, <b>mayoría absoluta</b>.', a: 'RBASO 14.1-2'}
      ]},
      {tipo: 'columnas', cols: [
        {titulo: 'Alteración automática · LBRL 81.2', items: [
          'Aprobación definitiva de los <b>planes de ordenación urbana</b> y de los <b>proyectos de obras y servicios</b> {{examen:2026}}',
          'Adscripción de bienes patrimoniales <b>por más de veinticinco años</b> a un uso o servicio públicos'
        ]},
        {titulo: 'Añade la norma aragonesa · RBASO 11', items: [
          'Más de 25 años adscrito también al <b>aprovechamiento comunal</b>',
          'Adquisición por <b>cesión obligatoria</b> para uso público o un servicio público determinado',
          'Afectación sin acto formal si la entidad adquiere por <b>usucapión</b> bienes destinados a uso o servicio público o comunal'
        ]}
      ]},
      {tipo: 'ejemplo', t: 'Un local patrimonial lleva 26 años usado como centro cívico municipal: ya es dominio público sin necesidad de expediente. Con 20 años, haría falta expediente.'}
    ]},

    {titulo: 'Adquisición, inventario y registro', a: 'RBASO 16-44; Ley 7/1999 174-176', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Adquisición · RBASO 16.2', items: [
          'Por atribución legal',
          'A título oneroso: contrato, expropiación y derechos de <b>tanteo y retracto</b> {{examen:2025}}',
          'Por herencia, legado o donación',
          'Por <b>cesión de naturaleza urbanística</b> {{examen:2025}}',
          'Por prescripción y por ocupación',
          'Por <b>sucesión administrativa</b> (alteración de términos o transferencia de competencias) {{examen:2025}}',
          'Por cualquier otro modo legítimo'
        ], reglas: [
          'A título gratuito: <b>sin restricción</b>; si lleva una carga, solo si no supera el valor de lo adquirido. Herencias: <b>a beneficio de inventario</b> (RBASO 18).',
          'Inmuebles a título oneroso: <b>informe previo pericial</b> de su valor (RBASO 17.2).'
        ]},
        {titulo: 'Inventario · RBASO 25-41', reglas: [
          'Obligatorio y <b>valorado</b>, de todos los bienes y derechos. Separado para entes con personalidad propia dependientes.',
          '<b>8 epígrafes</b>: inmuebles; derechos reales; muebles histórico-artísticos o de considerable valor; valores mobiliarios, créditos y derechos personales; vehículos; semovientes; otros muebles; bienes y derechos revertibles.',
          'Lo autoriza el <b>Secretario</b> con el visto bueno del <b>Presidente</b>. Aprueban el inventario y sus rectificaciones: el <b>Pleno</b>.',
          'Rectificación <b>anual</b> (copia a la Comunidad Autónoma); comprobación cada vez que se <b>renueva la Corporación</b>.'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Inmuebles y derechos reales: deben inscribirse en el <b>Registro de la Propiedad</b>. Para inmatricular basta certificación del Secretario sobre el inventario aprobado, con visto bueno del Alcalde o Presidente.', a: 'RBASO 42; Ley 7/1999 176'},
        {t: 'Los honorarios registrales por inmatricular o inscribir se reducen <b>a la mitad</b>.', a: 'RBEL 36.5'},
        {t: 'Las entidades locales <b>deben</b> defender sus bienes; las acciones, previo dictamen del Secretario, de la Asesoría Jurídica o, en su defecto, de un Letrado. <b>Cualquier vecino</b> puede requerirlo.', a: 'RBASO 43-44; Ley 7/1999 173.2'}
      ]}
    ]},

    {titulo: 'Prerrogativas', a: 'LBRL 82; Ley 7/1999 173; RBASO 47-71', bloques: [
      {tipo: 'tabla', cab: ['Potestad', 'Qué permite', 'Datos (RBASO)'], filas: [
        ['<b>Investigación</b> (48-53)', 'Averiguar la titularidad de bienes que se presumen propios.', 'De oficio o por denuncia. Anuncio en el BOA y en el tablón, <b>15 días</b> para alegar. Resuelve el <b>Pleno</b>. Premio al promotor: <b>10 %</b>.'],
        ['<b>Deslinde</b> (54-61)', 'Delimitar fincas de límites imprecisos o con indicios de usurpación.', 'Anuncio con <b>60 días</b> de antelación. Documentos hasta <b>20 días</b> antes. Lo aprueba el <b>Pleno</b>.'],
        ['<b>Recuperación de oficio</b> (62-63)', 'Recobrar por sí la posesión.', 'Dominio público: <b>en cualquier momento</b>. Patrimoniales: <b>un año</b> desde el día siguiente a la usurpación; después, tribunales ordinarios.'],
        ['<b>Desahucio administrativo</b> (64-70)', 'Recuperar bienes de <b>dominio público</b> al extinguirse la autorización, concesión u otro título.', 'Acuerdo previo del <b>Pleno</b>. Sin indemnización, plazo para desalojar no inferior a <b>un mes</b>.'],
        ['<b>Sancionadora</b> (71)', 'Defender el patrimonio y asegurar su adecuada utilización.', 'Sanciones de la norma sectorial o, en su defecto, de la ordenanza, en los límites del art. 197 de la Ley 7/1999.']
      ]},
      {tipo: 'lista', tinte: true, items: [
        {t: 'En Aragón son <b>cinco</b>: investigación, deslinde, recuperación de oficio, desahucio administrativo y <b>sancionadora</b>. Quien ocupa sin título el dominio público se expone a la recuperación de oficio y a la sanción.', a: 'RBASO 47; Ley 7/1999 173.1', examen: '2025'},
        {t: 'Un <b>patrimonial</b> cedido que no se desaloja: la recuperación de oficio no es «en cualquier momento» (solo un año) y el desahucio administrativo es para el <b>dominio público</b>.', a: 'RBASO 62.2 y 64', examen: '2026'},
        {t: 'Las entidades locales <b>no pueden allanarse</b> a demandas judiciales sobre el dominio de su patrimonio.', a: 'RBASO 46.1; Ley 7/1999 173.3'}
      ]}
    ]},

    {titulo: 'Uso del dominio público', a: 'RBASO 72-94; Ley 7/1999 182; LPAP 93', bloques: [
      {tipo: 'tabla', cab: ['Uso', 'Definición', 'Título'], filas: [
        ['<b>Común general</b>', 'Lo ejerce libremente cualquier ciudadano según la naturaleza del bien.', '<b>Libre</b>.'],
        ['<b>Común especial</b>', 'Con circunstancias singulares de intensidad, peligrosidad u otras similares.', '<b>Licencia</b>.'],
        ['<b>Privativo normal</b>', 'Ocupa una porción y limita o excluye el uso de los demás, sin instalaciones fijas o permanentes.', '<b>Licencia</b>.'],
        ['<b>Privativo agravado</b> {{examen:2025}}', 'Privativo con <b>instalaciones fijas y permanentes</b> (no lo son las desmontables).', '<b>Concesión</b> administrativa {{examen:2025}}.'],
        ['<b>Anormal</b>', 'No conforme con el destino principal del bien.', '<b>Concesión</b> administrativa.']
      ]},
      {tipo: 'lista', items: [
        {t: 'Concesiones demaniales: en <b>régimen de concurrencia</b> (previa licitación); otorgamiento directo solo en los casos tasados.', a: 'LPAP 93.1; RBASO 83.1', examen: '2025'},
        {t: 'Plazo máximo de la concesión en Aragón: <b>50 años</b>, salvo plazo menor en disposiciones especiales. La LPAP básica pone el tope en 75 años salvo norma especial con plazo menor (el RBEL 79 decía 99).', a: 'RBASO 83.2; LPAP 93.3', examen: '2025'},
        {t: 'Licencias: las otorga el <b>Presidente</b>; directas, salvo número limitado (licitación o, si no es posible, sorteo); <b>máximo 10 años</b>; revocables en cualquier momento por interés público.', a: 'RBASO 79-80'},
        {t: 'Licencias transmisibles si la ordenanza no dice otra cosa; nunca las otorgadas por <b>cualidades personales</b> o de <b>número limitado</b>.', a: 'RBASO 80.2'},
        {t: 'Garantía provisional: <b>2 %</b> del valor del dominio ocupado y de las obras. Definitiva: <b>4 %</b> (también en el uso anormal). Información pública del proyecto y bases: no inferior a <b>20 días</b>.', a: 'RBASO 90, 91.1 y 94'},
        {t: 'Concesión de más de <b>5 años</b> y cuantía superior al <b>20 %</b> de los recursos ordinarios: <b>mayoría absoluta</b>.', a: 'RBASO 82.2; LBRL 47.2.j'}
      ]}
    ]},

    {titulo: 'Patrimoniales: utilización y enajenación', a: 'RBASO 99-121; Ley 7/1999 184-189; LBRL 47.2; LPAP 8.1', bloques: [
      {tipo: 'columnas', cols: [
        {titulo: 'Utilización · RBASO 99-101', reglas: [
          'Criterios de <b>rentabilidad económica o social</b> {{examen:2025}}',
          'La usa directamente la entidad o la cede a particulares <b>mediante contrato</b> (99.2). Arrendamiento y cesión de uso: normativa general de <b>contratación</b>, salvo regulación específica (100.1) {{examen:2026}}.',
          'Precio no inferior al <b>6 %</b> del valor en venta, salvo el art. 102 {{examen:2026}}',
          '<b>Subasta</b> si la cesión dura <b>más de 5 años</b> o el precio supera el <b>5 %</b> de los recursos ordinarios (101.1).'
        ]},
        {titulo: 'Cesión de uso por motivos sociales · RBASO 102', reglas: [
          'Puede primar la <b>rentabilidad social</b>: servicios sociales, empleo, cultura, deporte y análogos.',
          'Uso cedido directamente o por concurso, gratis o con contraprestación, a Administraciones y entidades públicas o <b>privadas sin ánimo de lucro</b>, para fines de <b>utilidad pública o interés social</b> {{examen:2026}}',
          'El acuerdo fija la finalidad concreta, el <b>plazo de duración, o su carácter de cesión en precario</b> {{examen:2026}}'
        ]}
      ]},
      {tipo: 'lista', items: [
        {t: 'Principios básicos de gestión de los patrimoniales: eficiencia y economía; eficacia y rentabilidad; <b>publicidad, transparencia, concurrencia y objetividad</b>; inventarios o registros; colaboración entre Administraciones.', a: 'LPAP 8.1', examen: '2025'},
        {t: 'Enajenación: como regla general, por <b>subasta pública</b>, salvo permuta u otros supuestos legales. Parcelas sobrantes y bienes no utilizables: <b>venta directa</b>; las parcelas, ofrecidas a los colindantes.', a: 'RBASO 109; Ley 7/1999 188', examen: '2026'},
        {t: 'Lo obtenido por enajenar patrimoniales <b>no puede financiar gastos corrientes</b>, salvo parcelas sobrantes o efectos no utilizables.', a: 'RBASO 110; Ley 7/1999 188.6', examen: '2026'},
        {t: 'Toda enajenación, gravamen o permuta de inmuebles se <b>comunica</b> a la Comunidad Autónoma; si supera el <b>25 %</b> de los recursos ordinarios, requiere su <b>aprobación previa</b>.', a: 'RBASO 121; Ley 7/1999 186.1'},
        {t: 'Antes de enajenar: depurar la situación física y jurídica y <b>valoración técnica</b> del justo precio.', a: 'RBASO 107-108'},
        {t: 'Permuta: equivalencia de valores, o diferencia no superior al <b>50 %</b> del de mayor valor con compensación económica.', a: 'RBASO 115; Ley 7/1999 189.1'},
        {t: 'Cesión gratuita de inmuebles: solo a <b>entidades o instituciones públicas</b> e <b>instituciones privadas de interés público sin ánimo de lucro</b>, para fines en beneficio de la población; finalidad concreta y plazo; si se incumple, <b>reversión automática</b>.', a: 'RBASO 118.1-2'},
        {t: 'Cesión gratuita: <b>Pleno</b> con <b>mayoría absoluta</b>, informe del Interventor, certificaciones de inventario y Registro e información pública de al menos <b>15 días</b>.', a: 'RBASO 119'}
      ]}
    ]},

    {titulo: 'Bienes comunales', a: 'Ley 7/1999 179-180 y 183; RBASO 12-13 y 96-98', bloques: [
      {tipo: 'lista', items: [
        {t: 'Forma preferente: <b>explotación colectiva o comunal</b>. Si es impracticable: costumbre u ordenanza local y, en su defecto, <b>lotes o suertes</b> a los vecinos.', a: 'RBASO 96.2-3; Ley 7/1999 183'},
        {t: 'Lotes: en proporción <b>directa</b> al número de familiares a cargo e <b>inversa</b> a la situación económica.', a: 'RBASO 96.3'},
        {t: 'Si tampoco caben lotes: el <b>Gobierno de Aragón</b> puede autorizar la <b>subasta</b> mediante precio, con preferencia de los vecinos; si queda desierta, procedimiento negociado.', a: 'RBASO 97'},
        {t: 'Las ordenanzas pueden exigir residencia; si excluyen a vecinos, las aprueba el Gobierno de Aragón, previo dictamen de la Comisión Jurídica Asesora.', a: 'RBASO 96.4-5'},
        {t: 'Más de <b>10 años</b> sin disfrute comunal: pueden pasar a patrimoniales (información pública de un mes, <b>mayoría absoluta</b> del Pleno y aprobación del Consejero del Gobierno de Aragón).', a: 'Ley 7/1999 179.1; RBASO 12'},
        {t: 'Desafectarlos para transmitirlos o permutarlos: aprobación provisional por <b>dos tercios</b> del número legal y aprobación del <b>Gobierno de Aragón</b>.', a: 'RBASO 13; Ley 7/1999 180'},
        {t: 'Ceder por cualquier título el aprovechamiento: <b>mayoría absoluta</b>.', a: 'LBRL 47.2.i; Ley 7/1999 126.4.g'}
      ]}
    ]}
  ],

  trampas: [
    {x: 'Los bienes comunales son patrimoniales', ok: 'Son dominio público: su aprovechamiento corresponde al común de los vecinos.', a: 'LBRL 79.3; Ley 7/1999 170.1'},
    {x: 'Basta adscribir un patrimonial 20 años a un servicio público para que sea demanial', ok: 'Hacen falta más de 25 años.', a: 'LBRL 81.2.b'},
    {x: 'Los patrimoniales se recuperan de oficio en cualquier momento', ok: 'Solo en el plazo de un año; el dominio público, en cualquier momento.', a: 'LBRL 82.a'},
    {x: 'Los patrimoniales se rigen solo por el Derecho privado', ok: 'Primero por su legislación específica; el Derecho privado, en su defecto.', a: 'LBRL 80.2'},
    {x: 'Los mercados son bienes de uso público', ok: 'Son bienes de servicio público, como las Casas Consistoriales o las lonjas {{examen:2026}}.', a: 'Ley 7/1999 170.3; RBASO 3.3'},
    {x: 'Todo uso privativo del dominio público requiere concesión', ok: 'Solo el agravado (instalaciones fijas y permanentes) y el anormal; el privativo sin instalaciones fijas, licencia.', a: 'RBASO 78 y 81'},
    {x: 'En Aragón una concesión demanial puede durar hasta 75 años', ok: 'Máximo 50 años (RBASO). Los 75 años son el tope básico de la LPAP, que admite plazos menores.', a: 'RBASO 83.2; LPAP 93.3'},
    {x: 'El desahucio administrativo sirve para recuperar cualquier bien local', ok: 'Solo bienes de dominio público, al extinguirse el título que permitía usarlos.', a: 'RBASO 64'},
    {x: 'El inventario lo aprueba el Alcalde', ok: 'Lo aprueba el Pleno, con sus rectificaciones anuales.', a: 'RBASO 27.1'},
    {x: 'Un inmueble patrimonial puede cederse gratis a una empresa privada', ok: 'Solo a entidades o instituciones públicas, o privadas de interés público sin ánimo de lucro.', a: 'RBASO 118.1'}
  ],

  examenes: [
    'LBRL art. 81.2 (alteración automática por la aprobación definitiva de planes y proyectos; la adscripción exige más de veinticinco años): examen oficial 31-may-2026, pregunta 48.',
    'LPAP art. 8.1.c (publicidad, transparencia, concurrencia y objetividad): examen oficial 1-jun-2025, segunda prueba, supuesto 2, pregunta 13.',
    'LPAP art. 93.1 (concesiones en régimen de concurrencia): examen oficial 1-jun-2025, segunda prueba, supuesto 2, pregunta 17.',
    'RBASO arts. 3.2 (la plaza es de uso público), 75 (uso privativo agravado), 81 (concesión), 83 (50 años), 47 y ss. (recuperación de oficio y sancionadora) y 16 (títulos de adquisición): examen oficial 1-jun-2025, segunda prueba, supuesto 2, preguntas 11, 12, 14, 15, 16 y 18.',
    'RBASO art. 99.1 (rentabilidad económica o social): examen oficial 1-jun-2025, pregunta 44.',
    'Ley 7/1999 art. 179.1 (desafectación de comunales): examen oficial 1-jun-2025, reserva 5. La respuesta tomada como oficial (la plantilla de ese examen no está publicada) es «Durante más de veinte años». El art. 179.1 de la Ley 7/1999 y el art. 12.1 del RBASO dicen «durante más de diez años». El esquema sigue la ley y no marca este punto.',
    'Ley 7/1999 art. 170.3 (los mercados son bienes de servicio público): examen oficial 31-may-2026, pregunta 24.',
    'RBASO arts. 109.1 (subasta), 100 (el arrendamiento se rige por la normativa general de la contratación; precio mínimo del 6 %), 110 (ingresos), 102 (cesión por motivos sociales: plazo de duración o cesión en precario) y 47 y ss. (prerrogativas): examen oficial 31-may-2026, segundo ejercicio, supuesto 1, preguntas 1 a 4 y 6 a 8.'
  ]
});
