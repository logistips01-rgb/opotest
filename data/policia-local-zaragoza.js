/* =======================================================
   Banco de preguntas: Policía Local · Ayuntamiento de Zaragoza
   -------------------------------------------------------
   Temario oficial: bases específicas CONV 7.1/2025 (OEP-2025,
   FUN-C/C1-OPO, turno libre), Anexo I, 50 temas.
   Formato de cada pregunta:
     {q, options:[4], correct:<índice 0-3>, exp}
   Para ampliar: añade objetos al array del tema que toque.
   ======================================================= */
(function(){

const TEMAS = [
  {id:1,  title:"La Constitución: estructura y contenido. Derechos y deberes"},
  {id:2,  title:"La Corona, las Cortes Generales, el Poder Judicial y el Gobierno"},
  {id:3,  title:"Organización territorial del Estado. Estatuto de Aragón"},
  {id:4,  title:"La Administración Pública en la CE. Ley 39/2015 y Ley 40/2015"},
  {id:5,  title:"El municipio: población, territorio, organización y competencias"},
  {id:6,  title:"Bienes de las entidades locales. Reglamentos y ordenanzas"},
  {id:7,  title:"Presupuesto. Régimen de ingresos y gastos locales"},
  {id:8,  title:"El empleo público local: estructura y clases"},
  {id:9,  title:"Derechos y deberes del funcionario. Régimen disciplinario"},
  {id:10, title:"Adquisición/pérdida de la condición de funcionario. SS. PRL"},
  {id:11, title:"La Policía y la seguridad. Teorías de la delincuencia"},
  {id:12, title:"La marginación social y las migraciones"},
  {id:13, title:"Consumo de droga y alcohol: repercusión en la seguridad"},
  {id:14, title:"Código Penal: título preliminar y de los delitos"},
  {id:15, title:"Circunstancias modificativas de la responsabilidad criminal"},
  {id:16, title:"Personas criminalmente responsables de los delitos"},
  {id:17, title:"De las penas y de las medidas de seguridad"},
  {id:18, title:"Del homicidio y sus formas. De las lesiones"},
  {id:19, title:"Delitos contra la libertad"},
  {id:20, title:"Torturas, trata de seres humanos y delitos sexuales"},
  {id:21, title:"Omisión del deber de socorro. Intimidad y domicilio"},
  {id:22, title:"Delitos contra el patrimonio"},
  {id:23, title:"Delitos contra la salud pública"},
  {id:24, title:"Delitos contra la seguridad vial"},
  {id:25, title:"Delitos contra la Administración Pública"},
  {id:26, title:"Delitos de funcionarios contra garantías constitucionales"},
  {id:27, title:"Delitos contra el orden público: atentado y desobediencia"},
  {id:28, title:"Ley de Responsabilidad Penal del Menor"},
  {id:29, title:"Ley de Enjuiciamiento Criminal (I): denuncia, querella, detención"},
  {id:30, title:"Enjuiciamiento rápido y juicio de delitos leves"},
  {id:31, title:"Igualdad de género y violencia de género"},
  {id:32, title:"Ley Orgánica de Fuerzas y Cuerpos de Seguridad"},
  {id:33, title:"Ley Orgánica de Protección de la Seguridad Ciudadana"},
  {id:34, title:"Reglamento de Armas"},
  {id:35, title:"Reglamento del Cuerpo de la Policía Local"},
  {id:36, title:"Coordinación de Policías Locales de Aragón"},
  {id:37, title:"Ley sobre Tráfico, Circulación y Seguridad Vial"},
  {id:38, title:"Reglamento General de Circulación"},
  {id:39, title:"Reglamento General de Conductores"},
  {id:40, title:"Reglamento General de Vehículos"},
  {id:41, title:"Ordenanza General de Tráfico"},
  {id:42, title:"Ordenanzas de peatones, ciclistas y vehículos de movilidad personal"},
  {id:43, title:"Zaragoza: distritos, callejero y edificios públicos"},
  {id:44, title:"Socorrismo, primeros auxilios e informática básica"},
  {id:45, title:"Transmisiones. Ordenanza de Transparencia"},
  {id:46, title:"Procedimiento de la potestad sancionadora"},
  {id:47, title:"Actividades comerciales e industriales en vía pública"},
  {id:48, title:"Ruidos, limpieza, residuos y consumo de alcohol en vía pública"},
  {id:49, title:"Espectáculos públicos y actividades recreativas de Aragón"},
  {id:50, title:"Disciplina urbanística"}
];

const QUESTIONS = {
1:[
  {q:"Según el art. 17.2 CE, la detención preventiva no podrá durar más del tiempo estrictamente necesario y, en todo caso, en el plazo máximo de ______ horas el detenido deberá ser puesto en libertad o a disposición de la autoridad judicial.",options:["24 horas","48 horas","72 horas","96 horas"],correct:2,exp:"Art. 17.2 CE: plazo máximo de setenta y dos horas."},
  {q:"Según el art. 18.2 CE, ¿en qué caso puede entrarse en un domicilio sin consentimiento del titular ni resolución judicial?",options:["Cuando lo ordene el Alcalde","Cuando lo autorice el Delegado del Gobierno","Nunca, sin excepción alguna","En caso de flagrante delito"],correct:3,exp:"Art. 18.2 CE: 'Ninguna entrada o registro podrá hacerse en él sin consentimiento del titular o resolución judicial, salvo en caso de flagrante delito.'"},
  {q:"Según el art. 25.2 CE, las penas privativas de libertad estarán orientadas a:",options:["La reeducación y reinserción social","La retribución del daño causado","La prevención general exclusivamente","El resarcimiento de la víctima"],correct:0,exp:"Art. 25.2 CE: las penas privativas de libertad y las medidas de seguridad estarán orientadas a la reeducación y reinserción social."},
  {q:"El derecho a la vida y a la integridad física y moral se recoge en el:",options:["Art. 14 CE","Art. 15 CE","Art. 16 CE","Art. 17 CE"],correct:1,exp:"Art. 15 CE: 'Todos tienen derecho a la vida y a la integridad física y moral...'"}
],
2:[
  {q:"Según el art. 104.1 CE, las Fuerzas y Cuerpos de Seguridad dependen de:",options:["El Gobierno","Las Cortes Generales","El Poder Judicial","El Ministerio Fiscal"],correct:0,exp:"Art. 104.1 CE: 'Las Fuerzas y Cuerpos de Seguridad, bajo la dependencia del Gobierno, tendrán como misión proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana.' Este artículo se ubica en el Título IV, dedicado al Gobierno y la Administración."},
  {q:"Según el art. 104.1 CE, ¿cuál es la misión de las Fuerzas y Cuerpos de Seguridad?",options:["Garantizar la unidad de mercado","Proteger el libre ejercicio de los derechos y libertades y garantizar la seguridad ciudadana","La defensa territorial frente a agresiones exteriores","La instrucción de los procesos penales"],correct:1,exp:"La defensa frente a agresiones exteriores corresponde a las Fuerzas Armadas (art. 8 CE); la instrucción penal, al Poder Judicial."}
],
3:[
  {q:"Según el art. 137 CE, el Estado se organiza territorialmente en:",options:["Municipios, comarcas y regiones","Provincias y Comunidades Autónomas únicamente","Municipios, provincias y Comunidades Autónomas","Municipios y provincias únicamente"],correct:2,exp:"Art. 137 CE: 'El Estado se organiza territorialmente en municipios, en provincias y en las Comunidades Autónomas que se constituyan.'"},
  {q:"Según el art. 140 CE, los Concejales serán elegidos:",options:["Por el Alcalde","Por la Diputación Provincial","Por el Pleno de la Comunidad Autónoma","Por sufragio universal, igual, libre, directo y secreto de los vecinos"],correct:3,exp:"Art. 140 CE: los Concejales serán elegidos por los vecinos del municipio mediante sufragio universal, igual, libre, directo y secreto."},
  {q:"Según el art. 141.1 CE, la provincia es:",options:["Una entidad local con personalidad jurídica propia, determinada por la agrupación de municipios y división territorial para el cumplimiento de las actividades del Estado","Una simple demarcación electoral","Un órgano desconcentrado de la Comunidad Autónoma","Una mancomunidad voluntaria de municipios"],correct:0,exp:"Definición literal del art. 141.1 CE."},
  {q:"La seguridad pública, conforme al art. 149.1.29 CE, es competencia:",options:["Exclusiva de las Comunidades Autónomas","Exclusiva del Estado, sin perjuicio de la posibilidad de creación de policías por las CCAA en la forma que establezcan sus Estatutos","Compartida a partes iguales entre Estado y municipios","Exclusiva de las entidades locales"],correct:1,exp:"Art. 149.1.29 CE reserva al Estado la seguridad pública, sin perjuicio de las policías autonómicas en el marco de la Ley Orgánica correspondiente."},
  {q:"Según el art. 143.1 CE, para acceder al autogobierno pueden constituirse en Comunidad Autónoma:",options:["Solo las provincias de más de un millón de habitantes","Únicamente los territorios que lo soliciten al Rey","Las provincias limítrofes con características históricas, culturales y económicas comunes, los territorios insulares y las provincias con entidad regional histórica","Cualquier agrupación de municipios"],correct:2,exp:"Art. 143.1 CE, en ejercicio del derecho a la autonomía del art. 2."},
  {q:"El régimen especial del municipio de Zaragoza como capital de Aragón se regula en:",options:["La Ley 7/1985, de 2 de abril","El Decreto 347/2002, de 19 de noviembre","La Ley 10/2017, de 30 de marzo","La Ley 10/2017, de 30 de noviembre"],correct:3,exp:"Ley 10/2017, de 30 de noviembre, de régimen especial del municipio de Zaragoza como capital de Aragón."},
  {q:"Según el Estatuto de Autonomía de Aragón, la capital de Aragón es:",options:["Zaragoza","Huesca","Teruel","Se fija cada legislatura por las Cortes"],correct:0,exp:"El Estatuto de Autonomía de Aragón fija la capital de la Comunidad Autónoma en la ciudad de Zaragoza."}
],
4:[
  {q:"El procedimiento administrativo común de las Administraciones Públicas se regula en:",options:["La Ley 39/2015, de 1 de octubre","La Ley 40/2015, de 1 de octubre","La Ley 30/1992, de 26 de noviembre","El Real Decreto Legislativo 5/2015"],correct:0,exp:"Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas."},
  {q:"El plazo para interponer recurso de alzada, cuando el acto es expreso, es de:",options:["Diez días","Un mes","Quince días","Tres meses"],correct:1,exp:"Art. 122.1 Ley 39/2015: un mes si el acto es expreso."},
  {q:"El plazo para interponer recurso potestativo de reposición contra un acto que ponga fin a la vía administrativa, cuando es expreso, es de:",options:["Dos meses","Tres meses","Un mes","Quince días"],correct:2,exp:"Art. 124.1 Ley 39/2015: un mes si el acto es expreso."},
  {q:"Cuando las normas reguladoras no fijen plazo máximo para resolver, éste será de:",options:["Un mes","Seis meses","Un año","Tres meses"],correct:3,exp:"Art. 21.3 Ley 39/2015: el plazo será de tres meses."},
  {q:"En los plazos señalados por días, salvo que se indique otra cosa, se entiende que son:",options:["Días hábiles, excluyéndose sábados, domingos y festivos","Días naturales","Días hábiles incluyendo los sábados","Días laborables del interesado"],correct:0,exp:"Art. 30.2 Ley 39/2015: se excluyen del cómputo los sábados, los domingos y los declarados festivos."}
],
5:[
  {q:"Por su población, al Ayuntamiento de Zaragoza le resulta aplicable:",options:["El régimen de concejo abierto","El régimen de organización de los municipios de gran población de la Ley de Bases de Régimen Local","El régimen especial de las entidades locales menores","Únicamente el régimen común, sin especialidades"],correct:1,exp:"Zaragoza se rige por el título de municipios de gran población de la LBRL, además de su ley de régimen especial como capital de Aragón."},
  {q:"El territorio del municipio de Zaragoza se organiza, entre otras entidades de participación, en:",options:["Únicamente en Juntas Municipales","Únicamente en Juntas Vecinales","Juntas Municipales de distrito y Juntas Vecinales de barrios rurales","Comarcas urbanas"],correct:2,exp:"Zaragoza cuenta con Juntas Municipales en los distritos urbanos y Juntas Vecinales en los barrios rurales."}
],
15:[
  {q:"La legítima defensa está regulada, como causa que exime de responsabilidad criminal, en el:",options:["Art. 21 CP","Art. 22 CP","Art. 20 CP","Art. 23 CP"],correct:2,exp:"Art. 20.4 CP recoge la legítima defensa entre las causas que eximen de responsabilidad criminal, dentro del Capítulo II del Título I del Libro I."}
],
21:[
  {q:"El delito de omisión del deber de socorro se recoge en el:",options:["Art. 195 CP","Art. 172 CP","Art. 550 CP","Art. 263 CP"],correct:0,exp:"Art. 195 CP: no socorrer a una persona desamparada y en peligro manifiesto y grave, pudiendo hacerlo sin riesgo propio ni de tercero. Se ubica en el Libro II, Título IX."}
],
22:[
  {q:"La diferencia esencial entre hurto y robo está en:",options:["El valor de lo sustraído","El lugar de comisión","La condición del autor","El empleo de fuerza en las cosas o de violencia o intimidación en las personas"],correct:3,exp:"El robo exige fuerza en las cosas para acceder o abandonar el lugar, o violencia o intimidación en las personas (arts. 237 y ss. CP, Libro II, Título XIII)."}
],
24:[
  {q:"Conducir un vehículo de motor con una tasa de alcohol en aire espirado superior a ______ constituye delito del art. 379.2 del Código Penal.",options:["0,25 mg/l","0,60 mg/l","0,50 mg/l","0,15 mg/l"],correct:1,exp:"Art. 379.2 CP: tasa superior a 0,60 miligramos por litro en aire espirado o 1,2 gramos por litro en sangre."},
  {q:"Según el art. 379.1 CP, conducir a velocidad superior en ______ km/h a la permitida en vía urbana es delito.",options:["40 km/h","50 km/h","60 km/h","80 km/h"],correct:2,exp:"Art. 379.1 CP: 60 km/h en vía urbana y 80 km/h en vía interurbana por encima del límite permitido."}
],
27:[
  {q:"Agredir o intimidar gravemente a un agente de la autoridad en el ejercicio de sus funciones constituye delito de:",options:["Desobediencia leve","Atentado contra la autoridad","Coacciones","Desórdenes públicos"],correct:1,exp:"Art. 550 CP: atentado contra la autoridad, sus agentes y funcionarios públicos (Libro II, Título XXII)."}
],
31:[
  {q:"Las medidas de protección integral contra la violencia de género se regulan en:",options:["La Ley Orgánica 3/2007, de 22 de marzo","La Ley 39/2015, de 1 de octubre","La Ley Orgánica 1/2004, de 28 de diciembre","La Ley Orgánica 4/2015, de 30 de marzo"],correct:2,exp:"Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de Protección Integral contra la Violencia de Género."},
  {q:"La igualdad efectiva de mujeres y hombres se regula en:",options:["La Ley Orgánica 1/2004","La Ley 30/2003","La Ley Orgánica 3/2018","La Ley Orgánica 3/2007, de 22 de marzo"],correct:3,exp:"Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres."},
  {q:"El sistema de seguimiento integral de los casos de violencia de género del Ministerio del Interior se denomina:",options:["Sistema VioGén","Sistema SIRAJ","Sistema ATENPRO","Sistema SIGO"],correct:0,exp:"El Sistema VioGén valora el nivel de riesgo y coordina el seguimiento de los casos entre las instituciones implicadas."},
  {q:"La orden de protección a las víctimas de violencia doméstica es acordada por:",options:["El Alcalde","El Juez","El Delegado del Gobierno","El Jefe de la Policía Local"],correct:1,exp:"Es una resolución judicial que concentra medidas cautelares penales y civiles a favor de la víctima."},
  {q:"Según la LO 1/2004, la violencia de género comprende actos de violencia física y psicológica ejercidos sobre la mujer por:",options:["Cualquier persona de su entorno laboral","Únicamente el cónyuge con convivencia actual","Quien sea o haya sido su cónyuge o esté o haya estado ligado a ella por relaciones similares de afectividad, aun sin convivencia","Cualquier persona, sin relación previa"],correct:2,exp:"Art. 1.1 LO 1/2004."}
],
32:[
  {q:"Las Fuerzas y Cuerpos de Seguridad, según la LO 2/1986, están integradas por:",options:["Solo la Policía Nacional y la Guardia Civil","Las Fuerzas y Cuerpos de Seguridad del Estado, los Cuerpos de Policía de las Comunidades Autónomas y los Cuerpos de Policía de las Corporaciones Locales","Las Fuerzas Armadas y la Guardia Civil","La Policía Nacional, la Guardia Civil y la seguridad privada"],correct:1,exp:"Art. 2 LO 2/1986, de 13 de marzo, de Fuerzas y Cuerpos de Seguridad."},
  {q:"Según el art. 52 LO 2/1986, los Cuerpos de Policía Local son:",options:["Institutos armados de naturaleza militar","Servicios administrativos sin carácter armado","Institutos armados de naturaleza civil, con estructura y organización jerarquizada","Cuerpos de naturaleza mixta"],correct:2,exp:"Art. 52.1 LO 2/1986: institutos armados de naturaleza civil, con estructura y organización jerarquizada."},
  {q:"Los Cuerpos de Policía Local, con carácter general, solo podrán actuar:",options:["En todo el territorio de la Comunidad Autónoma","En cualquier municipio limítrofe","En todo el territorio nacional","En el ámbito territorial de su municipio, salvo situaciones de emergencia y previo requerimiento de las autoridades competentes"],correct:3,exp:"Art. 51.3 LO 2/1986."},
  {q:"¿Cuál de las siguientes NO es una función de los Cuerpos de Policía Local según el art. 53 LO 2/1986?",options:["El control de entrada y salida de extranjeros del territorio nacional","Ordenar, señalizar y dirigir el tráfico en el casco urbano","Instruir atestados por accidentes de circulación dentro del casco urbano","Proteger a las autoridades de las Corporaciones locales"],correct:0,exp:"El control de entrada y salida de extranjeros es función exclusiva del Cuerpo Nacional de Policía (art. 12 LO 2/1986)."},
  {q:"Entre los principios básicos de actuación del art. 5 LO 2/1986 NO figura:",options:["La adecuación al ordenamiento jurídico","La obediencia debida a órdenes que constituyan delito","El secreto profesional","La dedicación profesional"],correct:1,exp:"El art. 5.1.d) precisa que en ningún caso la obediencia debida podrá amparar órdenes que entrañen la ejecución de actos que constituyan delito."},
  {q:"Según el art. 5 LO 2/1986, en la utilización de armas de fuego los miembros de las FCS deben regirse por los principios de:",options:["Eficacia y celeridad","Jerarquía y disciplina","Oportunidad, congruencia y proporcionalidad","Libre apreciación del agente"],correct:2,exp:"El uso de armas se rige por los principios de congruencia, oportunidad y proporcionalidad."}
],
33:[
  {q:"La protección de la seguridad ciudadana se regula en:",options:["La Ley Orgánica 1/1992, de 21 de febrero","La Ley Orgánica 2/1986, de 13 de marzo","La Ley 39/2015, de 1 de octubre","La Ley Orgánica 4/2015, de 30 de marzo"],correct:3,exp:"Ley Orgánica 4/2015, de 30 de marzo, de protección de la seguridad ciudadana."},
  {q:"Las infracciones tipificadas en la LO 4/2015 se clasifican en:",options:["Muy graves, graves y leves","Graves y leves","Muy graves y graves","Gravísimas, graves, leves y levísimas"],correct:0,exp:"Art. 33 LO 4/2015: las infracciones se clasifican en muy graves, graves y leves."},
  {q:"Según la LO 4/2015, las infracciones leves se sancionan con multa de:",options:["601 a 30.000 euros","100 a 600 euros","30.001 a 600.000 euros","Hasta 100 euros"],correct:1,exp:"Art. 39.1: leves, de 100 a 600 €; graves, de 601 a 30.000 €; muy graves, de 30.001 a 600.000 €."},
  {q:"Las infracciones muy graves de la LO 4/2015 se sancionan con multa de:",options:["601 a 30.000 euros","6.001 a 60.000 euros","30.001 a 600.000 euros","Hasta 1.000.000 de euros"],correct:2,exp:"Art. 39.1 LO 4/2015: de 30.001 a 600.000 euros."},
  {q:"Si no se logra la identificación de una persona por ningún medio, el traslado a dependencias policiales para su identificación no podrá superar:",options:["Dos horas","Doce horas","Veinticuatro horas","Seis horas"],correct:3,exp:"Art. 16.2 LO 4/2015: el tiempo estrictamente necesario, que en ningún caso podrá superar las seis horas."},
  {q:"La obligación de obtener el Documento Nacional de Identidad alcanza a los españoles mayores de:",options:["14 años","12 años","16 años","18 años"],correct:0,exp:"Art. 9.2 LO 4/2015: los españoles mayores de catorce años residentes en España tienen el derecho y la obligación de obtener el DNI."}
],
36:[
  {q:"La coordinación de las Policías Locales de Aragón corresponde a:",options:["El Ministerio del Interior","Cada Diputación Provincial","La Federación Española de Municipios","La Comunidad Autónoma de Aragón"],correct:3,exp:"La coordinación de las policías locales es competencia de la Comunidad Autónoma, conforme a la CE, al Estatuto de Autonomía y a la LO 2/1986."},
  {q:"Las funciones de coordinación autonómica de las Policías Locales incluyen, entre otras:",options:["La homogeneización de medios técnicos, uniformidad y retribuciones básicas","El nombramiento directo de los agentes municipales","La sustitución del Alcalde en la jefatura del Cuerpo","La instrucción de los procedimientos penales"],correct:0,exp:"La coordinación se orienta a homogeneizar medios, uniformes, formación y criterios de actuación, respetando la autonomía municipal."},
  {q:"La jefatura superior de la Policía Local corresponde a:",options:["El Delegado del Gobierno","El Alcalde","El Consejero de Interior de la Comunidad Autónoma","El Subdelegado del Gobierno"],correct:1,exp:"El Alcalde ostenta la jefatura superior de la Policía Local, sin perjuicio de la estructura jerárquica interna del Cuerpo."},
  {q:"La formación de los miembros de las Policías Locales de Aragón se imparte principalmente a través de:",options:["Cada Ayuntamiento por separado, sin coordinación","La Academia de la Guardia Civil","La academia o escuela de formación de la propia Comunidad Autónoma","Centros privados acreditados por el Ministerio"],correct:2,exp:"Uno de los instrumentos clave de la coordinación autonómica es la formación centralizada en la escuela autonómica correspondiente."}
],
37:[
  {q:"El texto refundido de la Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial se aprobó por:",options:["Real Decreto 1428/2003, de 21 de noviembre","Ley 18/2009, de 23 de noviembre","Real Decreto Legislativo 339/1990","Real Decreto Legislativo 6/2015, de 30 de octubre"],correct:3,exp:"Real Decreto Legislativo 6/2015, de 30 de octubre."},
  {q:"Un conductor que obtiene por primera vez el permiso de conducción parte de un saldo inicial de:",options:["8 puntos","6 puntos","12 puntos","15 puntos"],correct:0,exp:"Parte de 8 puntos y pasa a 12 transcurridos tres años sin haber sido sancionado con pérdida de puntos. Régimen regulado en la propia Ley de Tráfico."}
],
38:[
  {q:"En vías urbanas de un único carril por sentido de circulación, la velocidad máxima genérica es de:",options:["30 km/h","20 km/h","40 km/h","50 km/h"],correct:0,exp:"Desde la reforma en vigor en mayo de 2021: 20 km/h en vías de plataforma única, 30 km/h con un solo carril por sentido y 50 km/h con dos o más carriles por sentido (Reglamento General de Circulación)."},
  {q:"En vías urbanas que dispongan de dos o más carriles por sentido de circulación, la velocidad máxima genérica es de:",options:["30 km/h","50 km/h","40 km/h","60 km/h"],correct:1,exp:"50 km/h, salvo señalización específica."},
  {q:"La tasa máxima de alcohol en aire espirado para un conductor general (no novel ni profesional) es de:",options:["0,15 mg/l","0,30 mg/l","0,25 mg/l","0,50 mg/l"],correct:2,exp:"0,25 mg/l en aire espirado (0,5 g/l en sangre). Para noveles y profesionales, 0,15 mg/l (0,3 g/l en sangre)."},
  {q:"La tasa máxima de alcohol en aire espirado para conductores noveles y profesionales es de:",options:["0,25 mg/l","0,10 mg/l","0,20 mg/l","0,15 mg/l"],correct:3,exp:"0,15 mg/l en aire espirado, equivalente a 0,3 g/l en sangre."},
  {q:"En un paso para peatones debidamente señalizado y sin semáforo, la prioridad de paso corresponde:",options:["Al vehículo, salvo que el peatón haya iniciado el cruce","Al peatón","Al vehículo en todo caso","Se establece por cortesía, sin regla"],correct:1,exp:"El conductor debe ceder el paso a los peatones en los pasos para peatones señalizados."}
],
43:[
  {q:"¿Qué ríos atraviesan el término municipal de Zaragoza?",options:["Ebro y Jalón","Ebro, Cinca y Segre","Únicamente el Ebro","Ebro, Huerva y Gállego"],correct:3,exp:"El Ebro, el Huerva y el Gállego, además del Canal Imperial de Aragón."},
  {q:"La Basílica-Catedral de Nuestra Señora del Pilar se sitúa junto al:",options:["Río Ebro","Río Huerva","Río Gállego","Canal Imperial de Aragón"],correct:0,exp:"La Basílica del Pilar se alza en la ribera derecha del Ebro, en el centro histórico de Zaragoza."},
  {q:"El Palacio de la Aljafería de Zaragoza es actualmente sede de:",options:["El Ayuntamiento de Zaragoza","Las Cortes de Aragón","La Delegación del Gobierno","El Justicia de Aragón"],correct:1,exp:"El palacio de origen hudí alberga desde 1987 la sede de las Cortes de Aragón."},
  {q:"La Exposición Internacional celebrada en Zaragoza tuvo lugar en el año:",options:["2004","2010","2008","2012"],correct:2,exp:"La Expo 2008 de Zaragoza tuvo como lema 'Agua y desarrollo sostenible'."},
  {q:"La catedral de San Salvador de Zaragoza es conocida popularmente como:",options:["El Pilar","La Lonja","San Pablo","La Seo"],correct:3,exp:"La Seo del Salvador es la otra catedral de Zaragoza, junto a la Basílica del Pilar."}
],
44:[
  {q:"El acrónimo PAS aplicado a la conducta ante un accidente significa:",options:["Prevenir, Auxiliar, Sanar","Parar, Analizar, Solicitar","Priorizar, Atender, Salvar","Proteger, Avisar, Socorrer"],correct:3,exp:"Proteger el lugar, Avisar a los servicios de emergencia y Socorrer a las víctimas, en ese orden."},
  {q:"El teléfono único europeo de emergencias es el:",options:["112","091","092","061"],correct:0,exp:"El 112 es el número único de emergencias en toda la Unión Europea."},
  {q:"En la reanimación cardiopulmonar de un adulto, la relación entre compresiones y ventilaciones es de:",options:["15 compresiones y 2 ventilaciones","30 compresiones y 2 ventilaciones","5 compresiones y 1 ventilación","10 compresiones y 2 ventilaciones"],correct:1,exp:"30 compresiones por cada 2 ventilaciones, con un ritmo de 100-120 compresiones por minuto."},
  {q:"Ante una persona inconsciente que respira con normalidad y sin sospecha de lesión medular, la actuación indicada es:",options:["Sentarla y darle agua","Iniciar compresiones torácicas","Colocarla en posición lateral de seguridad y vigilar la respiración","Elevarle las piernas 90 grados"],correct:2,exp:"La posición lateral de seguridad mantiene la vía aérea permeable y evita la broncoaspiración."},
  {q:"Como norma general, a una víctima de accidente de tráfico:",options:["Se la debe mover cuanto antes al arcén","Se le debe retirar siempre el casco","Se la debe incorporar para que respire mejor","No se la debe mover salvo peligro inminente para su vida"],correct:3,exp:"Cualquier movilización innecesaria puede agravar lesiones, especialmente de columna vertebral."}
]
};

window.registerOposicion({
  slug: 'policia-local-zaragoza',
  temas: TEMAS,
  questions: QUESTIONS
});
})();
