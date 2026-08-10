/* =======================================================
   Banco de preguntas: Auxiliar Administrativo · Gobierno de Aragón (DGA)
   -------------------------------------------------------
   Banco inicial. Subgrupo C2.
   Formato: {q, options:[4], correct:<índice 0-3>, exp}
   ======================================================= */
(function(){

const TEMAS = [
  {id:1,  title:"La Constitución Española"},
  {id:2,  title:"El Estatuto de Autonomía de Aragón"},
  {id:3,  title:"Instituciones de la Comunidad Autónoma"},
  {id:4,  title:"La Administración de la Comunidad Autónoma"},
  {id:5,  title:"LPAC (Ley 39/2015): el procedimiento"},
  {id:6,  title:"Régimen jurídico del sector público (Ley 40/2015)"},
  {id:7,  title:"El personal al servicio de las AAPP"},
  {id:8,  title:"Transparencia y protección de datos"},
  {id:9,  title:"Igualdad y prevención de riesgos laborales"},
  {id:10, title:"Atención al ciudadano, registro y archivo"},
  {id:11, title:"Ofimática: Windows, Word, Excel e Internet"}
];

const QUESTIONS = {
1:[
  {q:"Según el art. 1.1 CE, los valores superiores del ordenamiento jurídico español son:",options:["La libertad, la justicia, la igualdad y el pluralismo político","La libertad, la solidaridad y la igualdad","La justicia, la seguridad y el bienestar","La igualdad, la solidaridad y la dignidad"],correct:0,exp:"Art. 1.1 CE."},
  {q:"Según el art. 103.1 CE, la Administración Pública sirve con objetividad a los intereses generales y actúa de acuerdo con los principios de:",options:["Eficiencia, transparencia y publicidad","Eficacia, jerarquía, descentralización, desconcentración y coordinación","Legalidad, oportunidad y economía","Autonomía, suficiencia y solidaridad"],correct:1,exp:"Art. 103.1 CE, con sometimiento pleno a la ley y al Derecho."},
  {q:"Según el art. 103.3 CE, el acceso a la función pública se realiza de acuerdo con los principios de:",options:["Antigüedad y méritos","Libre designación","Mérito y capacidad","Concurrencia y publicidad exclusivamente"],correct:2,exp:"Art. 103.3 CE, en relación con el principio de igualdad del art. 23.2."},
  {q:"El derecho de los ciudadanos al acceso a los archivos y registros administrativos se recoge en el:",options:["Art. 103.1 CE","Art. 106.1 CE","Art. 149.1 CE","Art. 105.b) CE"],correct:3,exp:"Art. 105.b) CE, con las limitaciones relativas a la seguridad y defensa del Estado, la averiguación de los delitos y la intimidad de las personas."},
  {q:"Según el art. 137 CE, el Estado se organiza territorialmente en:",options:["Municipios, provincias y Comunidades Autónomas","Provincias y comarcas","Municipios y regiones","Comunidades Autónomas exclusivamente"],correct:0,exp:"Art. 137 CE."}
],
2:[
  {q:"El Estatuto de Autonomía de Aragón vigente se aprobó por:",options:["La Ley Orgánica 8/1982, de 10 de agosto","La Ley Orgánica 5/2007, de 20 de abril","La Ley Orgánica 5/1996, de 30 de diciembre","La Ley 10/2017, de 30 de noviembre"],correct:1,exp:"Ley Orgánica 5/2007, de 20 de abril, de reforma del Estatuto de Autonomía de Aragón."},
  {q:"Según el Estatuto de Autonomía, la capital de Aragón es:",options:["Huesca","Teruel","Zaragoza","Rotatoria entre las tres capitales de provincia"],correct:2,exp:"El Estatuto fija la capital de Aragón en la ciudad de Zaragoza, sede de sus instituciones."},
  {q:"Aragón está integrada por las provincias de:",options:["Huesca, Zaragoza y Lérida","Zaragoza, Teruel y Soria","Huesca, Teruel, Zaragoza y Navarra","Huesca, Teruel y Zaragoza"],correct:3,exp:"El territorio de Aragón comprende las tres provincias de Huesca, Teruel y Zaragoza."},
  {q:"Además de municipios y provincias, el Estatuto de Autonomía de Aragón contempla como entidad local propia:",options:["La comarca","La mancomunidad forzosa","El distrito","La veguería"],correct:0,exp:"La comarca es una entidad local territorial propia de la organización territorial aragonesa."},
  {q:"La lengua propia de Aragón, según el Estatuto, es objeto de:",options:["Cooficialidad plena en todo el territorio","Protección, uso y enseñanza en las zonas de utilización predominante, en los términos que fije una ley de Cortes de Aragón","Prohibición en el ámbito administrativo","Regulación exclusiva del Estado"],correct:1,exp:"El Estatuto remite a una ley de Cortes de Aragón la regulación de las lenguas y modalidades lingüísticas propias."}
],
3:[
  {q:"Las instituciones básicas de la Comunidad Autónoma de Aragón son:",options:["Las Cortes de Aragón y las Diputaciones Provinciales","El Presidente, el Justicia y la Cámara de Cuentas","Las Cortes de Aragón, el Presidente y el Gobierno de Aragón","Las Cortes de Aragón exclusivamente"],correct:2,exp:"El Estatuto añade además instituciones propias como el Justicia de Aragón y la Cámara de Cuentas."},
  {q:"El Presidente de Aragón es elegido por:",options:["Directamente por los ciudadanos en las urnas","El Gobierno de la Nación","El Justicia de Aragón","Las Cortes de Aragón de entre sus diputados y nombrado por el Rey"],correct:3,exp:"Elegido por las Cortes de Aragón entre sus diputados y nombrado por el Rey."},
  {q:"La institución encargada de la protección y defensa de los derechos individuales y colectivos reconocidos en el Estatuto y de la tutela del ordenamiento jurídico aragonés es:",options:["El Justicia de Aragón","La Cámara de Cuentas de Aragón","El Consejo Económico y Social de Aragón","El Consejo Consultivo"],correct:0,exp:"El Justicia de Aragón, elegido por las Cortes de Aragón."},
  {q:"El órgano de fiscalización externa de la gestión económico-financiera del sector público de Aragón es:",options:["La Intervención General","La Cámara de Cuentas de Aragón","El Tribunal de Cuentas exclusivamente","El Consejo Consultivo de Aragón"],correct:1,exp:"La Cámara de Cuentas de Aragón, sin perjuicio de las competencias del Tribunal de Cuentas."},
  {q:"La sede de las Cortes de Aragón se encuentra en:",options:["El Edificio Pignatelli","La Casa Consistorial de Zaragoza","El Palacio de la Aljafería","El Palacio de Sástago"],correct:2,exp:"Las Cortes de Aragón tienen su sede en el Palacio de la Aljafería, en Zaragoza."},
  {q:"El Edificio Pignatelli de Zaragoza es sede de:",options:["Las Cortes de Aragón","La Diputación Provincial de Zaragoza","El Tribunal Superior de Justicia de Aragón","La Presidencia y varios Departamentos del Gobierno de Aragón"],correct:3,exp:"El Edificio Pignatelli es la sede principal de la Administración de la Comunidad Autónoma de Aragón."}
],
4:[
  {q:"Las unidades en que se estructura la Administración de la Comunidad Autónoma de Aragón para el ejercicio de sus competencias se denominan:",options:["Departamentos","Ministerios","Consejerías Delegadas","Áreas de Gobierno"],correct:0,exp:"La Administración autonómica aragonesa se organiza en Departamentos, al frente de los cuales figura un Consejero."},
  {q:"Al frente de cada Departamento del Gobierno de Aragón se encuentra:",options:["Un Ministro","Un Consejero","Un Director General","Un Secretario de Estado"],correct:1,exp:"El Consejero es el titular del Departamento y miembro del Gobierno de Aragón."},
  {q:"El órgano que, bajo la dirección del Consejero, asume la gestión de los servicios comunes del Departamento es:",options:["La Dirección General","La Intervención Delegada","La Secretaría General Técnica","El Servicio Provincial"],correct:2,exp:"La Secretaría General Técnica gestiona los servicios comunes: personal, régimen interior, asuntos jurídicos y económicos del Departamento."},
  {q:"Los órganos de la Administración autonómica con competencia en el ámbito de una provincia se denominan habitualmente:",options:["Delegaciones del Gobierno","Subdelegaciones","Direcciones Comarcales","Servicios Provinciales"],correct:3,exp:"Los Servicios Provinciales son la estructura periférica de los Departamentos en Huesca, Teruel y Zaragoza."}
],
5:[
  {q:"La Ley 39/2015, de 1 de octubre, regula:",options:["El Procedimiento Administrativo Común de las Administraciones Públicas","El Régimen Jurídico del Sector Público","El Estatuto Básico del Empleado Público","Los Contratos del Sector Público"],correct:0,exp:"La Ley 40/2015 es la de Régimen Jurídico del Sector Público."},
  {q:"En los plazos señalados por días se entiende, salvo indicación en contrario, que son:",options:["Días naturales","Días hábiles, excluyendo sábados, domingos y festivos","Días laborables del interesado","Días de oficina abierta"],correct:1,exp:"Art. 30.2 Ley 39/2015."},
  {q:"Los plazos expresados en meses o años se computan:",options:["Por días hábiles","Por semanas completas","De fecha a fecha","Desde el primer día del mes siguiente"],correct:2,exp:"Art. 30.4 Ley 39/2015: de fecha a fecha desde el día siguiente a la notificación o publicación."},
  {q:"En los procedimientos iniciados a solicitud del interesado, el vencimiento del plazo máximo sin resolución expresa produce, como regla general:",options:["La desestimación automática","La caducidad del procedimiento","La nulidad de pleno derecho","La estimación de la solicitud por silencio administrativo, salvo las excepciones legalmente previstas"],correct:3,exp:"Art. 24.1 Ley 39/2015: el silencio es estimatorio con las excepciones que la propia norma establece."},
  {q:"El plazo para resolver, cuando las normas del procedimiento no fijen uno, es de:",options:["Tres meses","Un mes","Seis meses","Un año"],correct:0,exp:"Art. 21.3 Ley 39/2015."},
  {q:"Los interesados podrán presentar solicitudes, escritos y comunicaciones en:",options:["Únicamente en el registro del órgano competente","El registro electrónico de cualquier Administración, oficinas de asistencia en materia de registros, oficinas de Correos y representaciones diplomáticas u oficinas consulares","Solo en las oficinas de Correos","Solo por vía electrónica"],correct:1,exp:"Art. 16.4 Ley 39/2015."},
  {q:"La notificación deberá cursarse dentro del plazo de ______ días a partir de la fecha en que el acto haya sido dictado.",options:["Cinco","Quince","Diez","Tres"],correct:2,exp:"Art. 40.2 Ley 39/2015: dentro del plazo de diez días."}
],
6:[
  {q:"La Ley 40/2015, de 1 de octubre, regula:",options:["El Procedimiento Administrativo Común","La Transparencia y el Buen Gobierno","El Estatuto Básico del Empleado Público","El Régimen Jurídico del Sector Público"],correct:3,exp:"Ley 40/2015, de Régimen Jurídico del Sector Público: organización, funcionamiento y relaciones interadministrativas."},
  {q:"Los órganos administrativos que tengan atribuida una competencia podrán delegar su ejercicio en otros órganos:",options:["De la misma o de otra Administración, cuando existan relaciones de dependencia o vinculación, con los límites legales","Solo en órganos superiores","Nunca, la competencia es indelegable","Solo con autorización judicial"],correct:0,exp:"Art. 9 Ley 40/2015, que además enumera las materias no delegables."},
  {q:"La suplencia de los titulares de los órganos administrativos:",options:["Traslada la competencia al suplente de forma definitiva","No implica alteración de la competencia","Requiere aprobación del Consejo de Ministros","Equivale a una delegación"],correct:1,exp:"Art. 13 Ley 40/2015: la suplencia no implica alteración de la competencia."},
  {q:"Entre los principios de actuación de las Administraciones Públicas del art. 3 de la Ley 40/2015 figura:",options:["La discrecionalidad técnica sin límites","La reserva de la información como regla general","Servicio efectivo a los ciudadanos, simplicidad, claridad y proximidad","El silencio como técnica de gestión"],correct:2,exp:"Art. 3 Ley 40/2015, junto con eficacia, eficiencia, transparencia y buena fe."}
],
7:[
  {q:"El texto refundido de la Ley del Estatuto Básico del Empleado Público fue aprobado por:",options:["La Ley 7/2007, de 12 de abril, vigente sin refundir","El Real Decreto Legislativo 2/2015","La Ley 30/1984, de 2 de agosto","El Real Decreto Legislativo 5/2015, de 30 de octubre"],correct:3,exp:"Real Decreto Legislativo 5/2015, de 30 de octubre (TREBEP)."},
  {q:"El cuerpo o escala de Auxiliar Administrativo se clasifica en el:",options:["Subgrupo C2","Subgrupo C1","Grupo B","Subgrupo A2"],correct:0,exp:"El subgrupo C2 exige estar en posesión del título de Graduado en Educación Secundaria Obligatoria."},
  {q:"La titulación exigida para el acceso al subgrupo C2 es:",options:["Título de Bachiller o Técnico","Título de Graduado en Educación Secundaria Obligatoria","Título de Grado","Certificado de escolaridad"],correct:1,exp:"Art. 76 TREBEP en relación con la clasificación profesional."},
  {q:"Según el TREBEP, son clases de empleados públicos:",options:["Únicamente funcionarios y personal laboral","Funcionarios, laborales y autónomos","Funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual","Funcionarios de carrera y personal directivo"],correct:2,exp:"Art. 8.2 TREBEP."},
  {q:"El personal eventual se caracteriza por:",options:["Ocupar plaza de funcionario de carrera vacante","Ser contratado por obra o servicio determinado","Superar un proceso selectivo de concurrencia competitiva","Desempeñar funciones expresamente calificadas como de confianza o asesoramiento especial"],correct:3,exp:"Art. 12 TREBEP: su nombramiento y cese son libres y cesan en todo caso al hacerlo la autoridad a la que presten la función."},
  {q:"¿Cuál de los siguientes es un deber del empleado público conforme al Código de Conducta del TREBEP?",options:["Guardar secreto de las materias clasificadas y no utilizar información en beneficio propio","Aceptar regalos de los administrados","Anteponer el interés particular al general","Prescindir del principio de jerarquía"],correct:0,exp:"Arts. 52 a 54 TREBEP recogen los principios éticos y de conducta."}
],
8:[
  {q:"La transparencia, el acceso a la información pública y el buen gobierno se regulan en:",options:["La Ley 39/2015, de 1 de octubre","La Ley 19/2013, de 9 de diciembre","La LO 3/2018, de 5 de diciembre","La Ley 40/2015, de 1 de octubre"],correct:1,exp:"Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno."},
  {q:"La normativa española vigente de protección de datos personales es:",options:["La LO 15/1999, de 13 de diciembre","La Ley 19/2013","La LO 3/2018, de 5 de diciembre, que adapta el RGPD","El RD 1720/2007"],correct:2,exp:"LO 3/2018 de Protección de Datos Personales y garantía de los derechos digitales, junto al Reglamento (UE) 2016/679."},
  {q:"¿Cuál de los siguientes NO es un derecho reconocido al interesado por la normativa de protección de datos?",options:["Acceso","Rectificación","Supresión","Reventa de los datos a terceros"],correct:3,exp:"Los derechos son acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición."},
  {q:"El plazo general para resolver una solicitud de acceso a la información pública conforme a la Ley 19/2013 es de:",options:["Un mes desde la recepción de la solicitud","Diez días","Tres meses","Quince días hábiles"],correct:0,exp:"Art. 20.1 Ley 19/2013, ampliable por otro mes en caso de volumen o complejidad."}
],
9:[
  {q:"La Ley de Prevención de Riesgos Laborales es:",options:["La Ley 54/2003, de 12 de diciembre, exclusivamente","La Ley 31/1995, de 8 de noviembre","El RD 39/1997","La Ley 39/2015"],correct:1,exp:"Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales."},
  {q:"Según la Ley 31/1995, el coste de las medidas de seguridad y salud en el trabajo:",options:["Se reparte al 50% entre empresa y trabajador","Corresponde al trabajador si usa equipos propios","No debe recaer en modo alguno sobre los trabajadores","Lo asume la mutua íntegramente"],correct:2,exp:"Art. 14.5 Ley 31/1995."},
  {q:"La igualdad efectiva de mujeres y hombres se regula en:",options:["La LO 1/2004, de 28 de diciembre","La Ley 19/2013","La LO 3/2018","La LO 3/2007, de 22 de marzo"],correct:3,exp:"Ley Orgánica 3/2007, de 22 de marzo."},
  {q:"El acoso sexual y el acoso por razón de sexo, según la LO 3/2007, se consideran:",options:["Actos discriminatorios","Faltas leves de disciplina","Conductas atípicas sin consecuencias","Conflictos privados ajenos a la empresa"],correct:0,exp:"Art. 7.3 LO 3/2007: se consideran en todo caso discriminatorios."},
  {q:"Los planes de igualdad en la Administración se conciben como:",options:["Una recomendación sin contenido obligatorio","Un conjunto ordenado de medidas para alcanzar la igualdad de trato y de oportunidades y eliminar la discriminación por razón de sexo","Un trámite exclusivamente estadístico","Una competencia estatal indelegable"],correct:1,exp:"Arts. 45 y ss. LO 3/2007, y art. 64 para la Administración General del Estado."}
],
10:[
  {q:"Las funciones de recepción de solicitudes, escritos y comunicaciones dirigidos a la Administración corresponden a:",options:["El archivo definitivo","La Intervención General","El registro electrónico general y las oficinas de asistencia en materia de registros","El servicio de contratación"],correct:2,exp:"Art. 16 Ley 39/2015: cada Administración dispondrá de un registro electrónico general."},
  {q:"El archivo en el que se custodian los documentos de uso frecuente en la tramitación diaria, en la propia unidad, es el archivo:",options:["Intermedio","Histórico","Central","De oficina o de gestión"],correct:3,exp:"El ciclo vital documental va del archivo de oficina al central, después al intermedio y finalmente al histórico."},
  {q:"En la atención al ciudadano, ante una reclamación presentada de forma airada, la conducta más adecuada es:",options:["Escuchar activamente, mantener la calma y reconducir la conversación a los hechos","Responder en el mismo tono para marcar límites","Dar la razón siempre aunque no proceda","Derivar la llamada sin explicación"],correct:0,exp:"La escucha activa y la despersonalización del conflicto son técnicas básicas de atención al público."},
  {q:"Los documentos aportados por los interesados en un procedimiento administrativo electrónico:",options:["Se retienen siempre en papel","Se digitalizan y se devuelven los originales cuando no deban obrar en el expediente","Deben remitirse al archivo histórico de inmediato","No pueden presentarse en formato papel en ningún caso"],correct:1,exp:"Art. 16.5 Ley 39/2015 prevé la digitalización y devolución del original al interesado."}
],
11:[
  {q:"En Microsoft Word en español, la combinación Ctrl+G se utiliza para:",options:["Buscar texto","Aplicar negrita","Guardar el documento","Imprimir"],correct:2,exp:"En la versión española, Ctrl+G guarda; Ctrl+N aplica negrita, Ctrl+K cursiva y Ctrl+S subrayado."},
  {q:"En Microsoft Word en español, Ctrl+N aplica el formato:",options:["Nuevo documento","Numeración","Nota al pie","Negrita"],correct:3,exp:"Ctrl+N = negrita; para un documento nuevo se usa Ctrl+U."},
  {q:"En Microsoft Excel, toda fórmula debe comenzar por el signo:",options:["=","+","#","@"],correct:0,exp:"El signo igual indica a Excel que el contenido de la celda es una fórmula."},
  {q:"En Excel, la referencia $A$1 es una referencia:",options:["Relativa","Absoluta","Mixta de fila","Circular"],correct:1,exp:"El símbolo $ fija columna y fila; A$1 o $A1 serían referencias mixtas."},
  {q:"En Excel, la función que suma un rango de celdas es:",options:["TOTAL","AGREGAR","SUMA","CONTAR"],correct:2,exp:"=SUMA(A1:A10) suma el rango indicado. CONTAR cuenta celdas con números."},
  {q:"La extensión propia de un documento de Microsoft Word a partir de la versión 2007 es:",options:[".doc",".rtf",".txt",".docx"],correct:3,exp:"El formato Office Open XML introdujo .docx para Word y .xlsx para Excel."},
  {q:"En el explorador de archivos de Windows, la carpeta que almacena temporalmente los archivos eliminados es:",options:["La Papelera de reciclaje","La carpeta Temp","La carpeta Descargas","El Portapapeles"],correct:0,exp:"Desde la Papelera de reciclaje pueden restaurarse los archivos borrados mientras no se vacíe."},
  {q:"Una dirección URL como https://www.aragon.es identifica:",options:["Una dirección de correo electrónico","La localización de un recurso en la web","La dirección física de un equipo","Un protocolo de correo"],correct:1,exp:"URL significa Uniform Resource Locator: localizador uniforme de recursos."}
]
};

window.registerOposicion({
  slug: 'aux-admin-dga',
  temas: TEMAS,
  questions: QUESTIONS
});
})();
