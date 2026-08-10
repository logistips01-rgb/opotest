/* =======================================================
   Banco de preguntas: Policía Nacional · Escala Básica
   -------------------------------------------------------
   Banco inicial, organizado según los tres bloques del
   temario oficial (Ciencias Jurídicas, Ciencias Sociales y
   Materias Técnico-Científicas).
   Formato: {q, options:[4], correct:<índice 0-3>, exp}
   ======================================================= */
(function(){

const TEMAS = [
  {id:1,  title:"CE: Título Preliminar y derechos"},
  {id:2,  title:"La Corona y las Cortes Generales"},
  {id:3,  title:"El Gobierno y la Administración"},
  {id:4,  title:"Poder Judicial y Tribunal Constitucional"},
  {id:5,  title:"Organización territorial y Unión Europea"},
  {id:6,  title:"Fuerzas y Cuerpos de Seguridad (LO 2/1986)"},
  {id:7,  title:"Policía Nacional: estructura y funciones"},
  {id:8,  title:"Seguridad ciudadana (LO 4/2015)"},
  {id:9,  title:"Extranjería (LO 4/2000)"},
  {id:10, title:"Derecho Penal y Procesal: nociones"},
  {id:11, title:"Igualdad, violencia de género y datos"},
  {id:12, title:"Ciencias Sociales: DDHH y drogas"},
  {id:13, title:"Técnico-científicas: informática y ortografía"}
];

const QUESTIONS = {
1:[
  {q:"Según el art. 1.1 CE, España se constituye en un Estado:",options:["Social y democrático de Derecho","Liberal de Derecho","Federal de Derecho","Confederal y democrático"],correct:0,exp:"Art. 1.1 CE, que además proclama como valores superiores la libertad, la justicia, la igualdad y el pluralismo político."},
  {q:"Según el art. 1.3 CE, la forma política del Estado español es:",options:["La República parlamentaria","La Monarquía parlamentaria","La Monarquía constitucional pura","El Estado autonómico"],correct:1,exp:"Art. 1.3 CE: 'La forma política del Estado español es la Monarquía parlamentaria.'"},
  {q:"Los derechos fundamentales y libertades públicas de la Sección 1.ª del Capítulo Segundo del Título I se recogen en los artículos:",options:["10 a 14","30 a 38","15 a 29","39 a 52"],correct:2,exp:"Los arts. 15 a 29 CE integran la Sección 1.ª, con la protección reforzada del art. 53.2 (amparo)."},
  {q:"Según el art. 55.1 CE, ¿qué derecho NO puede suspenderse cuando se declara el estado de excepción o de sitio?",options:["El derecho a la libertad y seguridad del art. 17","La inviolabilidad del domicilio del art. 18.2","El secreto de las comunicaciones del art. 18.3","El derecho a la vida del art. 15"],correct:3,exp:"El art. 55.1 enumera los derechos suspendibles; el derecho a la vida no figura entre ellos."},
  {q:"El art. 14 CE proclama que los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por razón de:",options:["Nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social","Únicamente sexo y religión","Únicamente raza y opinión","Nacimiento y patrimonio exclusivamente"],correct:0,exp:"Enumeración literal del art. 14 CE."},
  {q:"Conforme al art. 10.1 CE, la dignidad de la persona, los derechos inviolables que le son inherentes y el libre desarrollo de la personalidad son:",options:["Meros principios programáticos","Fundamento del orden político y de la paz social","Competencia exclusiva de las CCAA","Derechos suspendibles por ley orgánica"],correct:1,exp:"Art. 10.1 CE."}
],
2:[
  {q:"Según el art. 56.1 CE, el Rey es:",options:["El titular del poder legislativo","El Presidente del Consejo de Ministros","El Jefe del Estado, símbolo de su unidad y permanencia","El jefe del Poder Judicial"],correct:2,exp:"Art. 56.1 CE: Jefe del Estado, símbolo de su unidad y permanencia, arbitra y modera el funcionamiento regular de las instituciones."},
  {q:"Según el art. 57.1 CE, en la sucesión al trono se sigue el orden regular de:",options:["Libre designación por el Rey","Elección por las Cortes Generales","Antigüedad en el matrimonio","Primogenitura y representación"],correct:3,exp:"Art. 57.1 CE: primogenitura y representación, con preferencia de la línea anterior a las posteriores."},
  {q:"Las Cortes Generales están formadas por:",options:["El Congreso de los Diputados y el Senado","Únicamente el Congreso de los Diputados","El Congreso, el Senado y el Consejo de Estado","El Congreso y las Asambleas autonómicas"],correct:0,exp:"Art. 66.1 CE: las Cortes Generales representan al pueblo español y están formadas por el Congreso de los Diputados y el Senado."},
  {q:"Según el art. 68.1 CE, el Congreso se compone de un mínimo de 300 y un máximo de:",options:["350 Diputados","400 Diputados","450 Diputados","500 Diputados"],correct:1,exp:"Art. 68.1 CE fija la horquilla de 300 a 400; la ley electoral vigente establece 350."},
  {q:"Según el art. 69.2 CE, en cada provincia se eligen:",options:["Dos Senadores","Tres Senadores","Cuatro Senadores","Un Senador por cada 100.000 habitantes"],correct:2,exp:"Cuatro Senadores por provincia por sufragio universal, libre, igual, directo y secreto, con reglas específicas para las islas."},
  {q:"El Senado es la Cámara de:",options:["Representación sindical","Control exclusivo del gasto","Representación de las corporaciones locales","Representación territorial"],correct:3,exp:"Art. 69.1 CE: 'El Senado es la Cámara de representación territorial.'"}
],
3:[
  {q:"Según el art. 97 CE, ¿quién dirige la política interior y exterior, la Administración civil y militar y la defensa del Estado?",options:["El Gobierno","El Rey","Las Cortes Generales","El Consejo de Estado"],correct:0,exp:"Art. 97 CE: el Gobierno ejerce además la función ejecutiva y la potestad reglamentaria de acuerdo con la Constitución y las leyes."},
  {q:"Según el art. 98.1 CE, el Gobierno se compone de:",options:["Únicamente el Presidente y los Ministros","El Presidente, los Vicepresidentes en su caso, los Ministros y los demás miembros que establezca la ley","El Presidente, los Ministros y los Secretarios de Estado","El Presidente y el Consejo de Estado"],correct:1,exp:"Art. 98.1 CE."},
  {q:"La moción de censura, conforme al art. 113 CE, debe ser propuesta al menos por:",options:["Un quinto de los Diputados, sin candidato alternativo","La mayoría absoluta del Congreso","La décima parte de los Diputados y incluir un candidato a la Presidencia del Gobierno","Cincuenta Senadores"],correct:2,exp:"Art. 113 CE: moción de censura constructiva, con candidato alternativo, aprobada por mayoría absoluta."},
  {q:"La cuestión de confianza del art. 112 CE se entiende otorgada cuando vota a favor:",options:["La mayoría absoluta del Congreso","Dos tercios del Congreso","La mayoría del Congreso y del Senado","La mayoría simple de los Diputados"],correct:3,exp:"Art. 112 CE: basta la mayoría simple de los Diputados."},
  {q:"El control de la potestad reglamentaria y la legalidad de la actuación administrativa corresponde, según el art. 106.1 CE, a:",options:["Los Tribunales","El Tribunal de Cuentas","El Defensor del Pueblo","El Consejo de Ministros"],correct:0,exp:"Art. 106.1 CE: los Tribunales controlan la potestad reglamentaria y la legalidad de la actuación administrativa."}
],
4:[
  {q:"Según el art. 117.1 CE, la justicia emana del pueblo y se administra en nombre del Rey por:",options:["El Ministerio Fiscal","Jueces y Magistrados integrantes del poder judicial, independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley","El Consejo General del Poder Judicial","Los Tribunales y el Gobierno conjuntamente"],correct:1,exp:"Art. 117.1 CE."},
  {q:"El Consejo General del Poder Judicial está integrado por el Presidente del Tribunal Supremo y:",options:["12 miembros","15 miembros por un periodo de nueve años","20 miembros por un periodo de cinco años","10 miembros por un periodo de cuatro años"],correct:2,exp:"Art. 122.3 CE: veinte miembros nombrados por el Rey por un periodo de cinco años."},
  {q:"El Tribunal Constitucional se compone de:",options:["20 miembros nombrados por las Cortes, por cinco años","15 miembros, por seis años","9 miembros, por doce años","12 miembros nombrados por el Rey, por nueve años"],correct:3,exp:"Art. 159 CE: 12 miembros por nueve años, renovándose por terceras partes cada tres."},
  {q:"El recurso de amparo ante el Tribunal Constitucional protege frente a violaciones de:",options:["Los derechos y libertades del art. 14, la Sección 1.ª del Capítulo II y la objeción de conciencia del art. 30","Cualquier precepto constitucional","Únicamente los derechos sociales del Capítulo III","Los Estatutos de Autonomía"],correct:0,exp:"Art. 53.2 y art. 161.1.b) CE, desarrollados por la LOTC."},
  {q:"El Ministerio Fiscal ejerce sus funciones, conforme al art. 124.2 CE, por medio de órganos propios con sujeción a los principios de:",options:["Independencia absoluta e inamovilidad","Unidad de actuación y dependencia jerárquica, con sujeción a legalidad e imparcialidad","Jerarquía militar y disciplina","Descentralización y autonomía territorial"],correct:1,exp:"Art. 124.2 CE."}
],
5:[
  {q:"La seguridad pública es competencia exclusiva del Estado conforme al artículo:",options:["148.1.22 CE","150.2 CE","149.1.29 CE","104.2 CE"],correct:2,exp:"Art. 149.1.29 CE, sin perjuicio de la creación de policías por las CCAA en la forma que establezcan sus Estatutos y en el marco de la LO 2/1986."},
  {q:"Según el art. 145.1 CE, entre Comunidades Autónomas:",options:["Se admite la federación en cualquier caso","Se admite la federación con autorización del Rey","La federación requiere referéndum","En ningún caso se admite la federación de Comunidades Autónomas"],correct:3,exp:"Art. 145.1 CE prohíbe expresamente la federación de Comunidades Autónomas."},
  {q:"España se incorporó a las entonces Comunidades Europeas el:",options:["1 de enero de 1986","1 de enero de 1993","1 de enero de 1999","12 de junio de 1985"],correct:0,exp:"El Tratado de Adhesión se firmó el 12 de junio de 1985 y la incorporación fue efectiva el 1 de enero de 1986."},
  {q:"¿Cuál de estas instituciones NO forma parte de la Unión Europea?",options:["La Comisión Europea","El Tribunal Europeo de Derechos Humanos","El Consejo Europeo","El Tribunal de Justicia de la Unión Europea"],correct:1,exp:"El TEDH pertenece al Consejo de Europa, organización distinta de la Unión Europea."},
  {q:"El acuerdo que suprimió los controles en las fronteras interiores entre los Estados participantes se conoce como:",options:["Tratado de Niza","Acta Única Europea","Acuerdo de Schengen","Tratado de Lisboa"],correct:2,exp:"El Acuerdo de Schengen (1985) y su Convenio de aplicación (1990) crearon el espacio de libre circulación."}
],
6:[
  {q:"La Ley Orgánica de Fuerzas y Cuerpos de Seguridad es:",options:["La LO 4/2015, de 30 de marzo","La LO 9/2015, de 28 de julio","La LO 1/1992, de 21 de febrero","La LO 2/1986, de 13 de marzo"],correct:3,exp:"Ley Orgánica 2/1986, de 13 de marzo, de Fuerzas y Cuerpos de Seguridad."},
  {q:"La Policía Nacional es:",options:["Un instituto armado de naturaleza civil, dependiente del Ministerio del Interior","Un instituto armado de naturaleza militar","Un cuerpo dependiente del Ministerio de Defensa","Un organismo autónomo"],correct:0,exp:"Instituto armado de naturaleza civil, con estructura jerarquizada, dependiente del Ministerio del Interior."},
  {q:"La Guardia Civil es un instituto armado de naturaleza:",options:["Civil","Militar","Mixta","Estatutaria"],correct:1,exp:"La Guardia Civil es un instituto armado de naturaleza militar, dependiente del Ministerio del Interior y, en los términos legalmente previstos, del de Defensa."},
  {q:"¿Cuál de las siguientes es función exclusiva de la Policía Nacional según el art. 12 LO 2/1986?",options:["La custodia de vías de comunicación interurbanas","El resguardo fiscal del Estado","La expedición del DNI y de los pasaportes","La vigilancia de armas y explosivos"],correct:2,exp:"Las otras tres son funciones exclusivas de la Guardia Civil."},
  {q:"¿Cuál de las siguientes es función exclusiva de la Guardia Civil?",options:["El control de entidades y servicios de seguridad privada","El régimen de extranjería, refugio y asilo","La colaboración con las policías de otros países por vía de Interpol","La vigilancia del tráfico en vías interurbanas"],correct:3,exp:"Las otras tres corresponden en exclusiva a la Policía Nacional (art. 12.A LO 2/1986)."},
  {q:"El ámbito territorial de actuación de la Policía Nacional es:",options:["Las capitales de provincia y los términos municipales y núcleos urbanos que el Gobierno determine","Todo el territorio nacional sin excepción","Únicamente los municipios de más de 20.000 habitantes","El territorio de las Comunidades Autónomas sin policía propia"],correct:0,exp:"Art. 11.2 LO 2/1986; la Guardia Civil actúa en el resto del territorio y su mar territorial."},
  {q:"Entre los principios básicos de actuación del art. 5 LO 2/1986 se incluye:",options:["La discrecionalidad absoluta en el uso de la fuerza","El secreto profesional respecto de las informaciones que conozcan por razón de su cargo","La obediencia debida sin límite alguno","La reserva de identidad frente a la autoridad judicial"],correct:1,exp:"El art. 5.5 impone guardar riguroso secreto respecto de las informaciones conocidas por razón del cargo."}
],
7:[
  {q:"Las Escalas de la Policía Nacional son:",options:["Superior, Técnica, Ejecutiva y Básica","Superior, Ejecutiva y Básica","Superior, Ejecutiva, de Subinspección y Básica","Directiva, Ejecutiva, Media y Básica"],correct:2,exp:"Cuatro escalas: Superior, Ejecutiva, de Subinspección y Básica."},
  {q:"La Escala Básica de la Policía Nacional comprende las categorías de:",options:["Policía y Subinspector","Oficial y Subinspector","Policía únicamente","Policía y Oficial de Policía"],correct:3,exp:"La Escala Básica está integrada por las categorías de Policía y de Oficial de Policía."},
  {q:"La Escala Ejecutiva comprende las categorías de:",options:["Inspector Jefe e Inspector","Comisario Principal y Comisario","Subinspector y Oficial","Inspector y Subinspector"],correct:0,exp:"Escala Superior: Comisario Principal y Comisario. Escala Ejecutiva: Inspector Jefe e Inspector. Escala de Subinspección: Subinspector."},
  {q:"La Escala Superior de la Policía Nacional comprende las categorías de:",options:["Inspector Jefe e Inspector","Comisario Principal y Comisario","Comisario General y Comisario","Director General y Comisario"],correct:1,exp:"Comisario Principal y Comisario integran la Escala Superior."},
  {q:"El órgano de participación de los miembros de la Policía Nacional en el que están representados el personal y la Administración es:",options:["La Junta de Gobierno","El Consejo Superior de Seguridad","El Consejo de Policía","La Comisión de Régimen Disciplinario"],correct:2,exp:"El Consejo de Policía es un órgano paritario de participación previsto en la LO 2/1986."},
  {q:"La investigación y persecución de los delitos relacionados con la droga es función exclusiva de:",options:["La Guardia Civil","Las policías autonómicas","Las policías locales","La Policía Nacional"],correct:3,exp:"Art. 12.A LO 2/1986, entre las funciones exclusivas del Cuerpo Nacional de Policía."}
],
8:[
  {q:"La protección de la seguridad ciudadana se regula actualmente en:",options:["La LO 4/2015, de 30 de marzo","La LO 1/1992, de 21 de febrero","La LO 2/1986, de 13 de marzo","La Ley 39/2015"],correct:0,exp:"La LO 4/2015 derogó la anterior LO 1/1992 de protección de la seguridad ciudadana."},
  {q:"Las sanciones por infracciones graves de la LO 4/2015 consisten en multa de:",options:["100 a 600 euros","601 a 30.000 euros","30.001 a 600.000 euros","Hasta 60.000 euros"],correct:1,exp:"Art. 39.1 LO 4/2015."},
  {q:"El plazo de prescripción de las infracciones muy graves de la LO 4/2015 es de:",options:["Seis meses","Un año","Dos años","Tres años"],correct:2,exp:"Art. 38 LO 4/2015: las muy graves prescriben a los dos años, las graves al año y las leves a los seis meses."},
  {q:"La práctica de un registro corporal externo, según la LO 4/2015, exige:",options:["Autorización judicial en todo caso","La presencia de dos testigos ajenos","Comunicación previa al Ministerio Fiscal","Que se realice por un agente del mismo sexo que la persona sobre la que se practique, salvo urgencia justificada"],correct:3,exp:"Art. 20 LO 4/2015: además debe respetarse el pudor y realizarse en lugar reservado cuando implique exhibición parcial."},
  {q:"Los españoles mayores de catorce años residentes en España tienen el derecho y la obligación de obtener:",options:["El Documento Nacional de Identidad","El pasaporte","El certificado de antecedentes penales","El número de identidad de extranjero"],correct:0,exp:"Art. 9.2 LO 4/2015."}
],
9:[
  {q:"Los derechos y libertades de los extranjeros en España y su integración social se regulan en:",options:["La LO 2/2009, de 11 de diciembre, exclusivamente","La LO 4/2000, de 11 de enero","La LO 4/2015, de 30 de marzo","La Ley 12/2009, de 30 de octubre"],correct:1,exp:"Ley Orgánica 4/2000, de 11 de enero, modificada en varias ocasiones, entre otras por la LO 2/2009."},
  {q:"El internamiento de un extranjero en un Centro de Internamiento de Extranjeros no podrá exceder de:",options:["30 días","40 días","60 días","72 horas"],correct:2,exp:"El internamiento, acordado por el juez, no puede superar los 60 días."},
  {q:"El internamiento preventivo de un extranjero en un CIE debe ser autorizado por:",options:["El Delegado del Gobierno","El Comisario Jefe","El Ministerio del Interior","El Juez de Instrucción competente"],correct:3,exp:"Es una medida cautelar de naturaleza judicial, solicitada en el marco del expediente de expulsión o devolución."},
  {q:"Las infracciones en materia de extranjería se clasifican en:",options:["Muy graves, graves y leves","Graves y leves","Muy graves y leves","Gravísimas y graves"],correct:0,exp:"Art. 51 LO 4/2000: muy graves, graves y leves."}
],
10:[
  {q:"Los derechos del detenido y preso se enumeran principalmente en el:",options:["Art. 17 de la LECrim","Art. 520 de la LECrim","Art. 118 del Código Penal","Art. 55 de la Constitución"],correct:1,exp:"Art. 520 LECrim: información de los hechos, derecho a guardar silencio, a no declarar contra sí mismo, a designar abogado, intérprete, examen médico, etc."},
  {q:"El procedimiento de habeas corpus tiene por objeto:",options:["Revisar una sentencia firme","Recurrir una sanción administrativa","Obtener la inmediata puesta a disposición judicial de toda persona detenida ilegalmente","Obtener asistencia jurídica gratuita"],correct:2,exp:"Regulado en la LO 6/1984, en desarrollo del art. 17.4 CE."},
  {q:"Según el Código Penal, son delitos las acciones y omisiones:",options:["Solo las dolosas","Solo las que causan un resultado material","Cualquier conducta antisocial","Dolosas o imprudentes penadas por la ley"],correct:3,exp:"Art. 10 CP: 'Son delitos las acciones y omisiones dolosas o imprudentes penadas por la ley.'"},
  {q:"La tentativa de delito se produce cuando el sujeto:",options:["Da principio a la ejecución del delito directamente por hechos exteriores sin llegar a producirse el resultado por causas ajenas a su voluntad","Solo ha ideado el delito","Ha consumado el delito pero no obtiene beneficio","Desiste voluntariamente antes de comenzar"],correct:0,exp:"Art. 16.1 CP."},
  {q:"Son responsables criminalmente de los delitos, según el art. 27 CP:",options:["Únicamente los autores","Los autores y los cómplices","Los autores, los cómplices y los encubridores","Los autores y los testigos"],correct:1,exp:"Art. 27 CP: los autores y los cómplices. El encubrimiento es hoy un delito autónomo."}
],
11:[
  {q:"La normativa vigente de protección de datos personales en España es:",options:["La LO 15/1999, de 13 de diciembre","La Ley 19/2013, de 9 de diciembre","La LO 3/2018, de 5 de diciembre, junto con el RGPD (UE) 2016/679","El RD 1720/2007 exclusivamente"],correct:2,exp:"La LO 3/2018 de Protección de Datos Personales y garantía de los derechos digitales adapta el Reglamento General de Protección de Datos."},
  {q:"La igualdad efectiva de mujeres y hombres se regula en:",options:["La LO 1/2004, de 28 de diciembre","La Ley 39/2015","La LO 3/2018","La LO 3/2007, de 22 de marzo"],correct:3,exp:"Ley Orgánica 3/2007, de 22 de marzo."},
  {q:"La LO 1/2004 crea, como órgano judicial especializado, los:",options:["Juzgados de Violencia sobre la Mujer","Juzgados de lo Social","Tribunales del Jurado","Juzgados de Vigilancia Penitenciaria"],correct:0,exp:"La LO 1/2004 de Medidas de Protección Integral contra la Violencia de Género creó los Juzgados de Violencia sobre la Mujer."},
  {q:"La autoridad independiente de control en materia de protección de datos en España es:",options:["El Defensor del Pueblo","La Agencia Española de Protección de Datos","El Consejo de Transparencia y Buen Gobierno","La Comisión Nacional de los Mercados y la Competencia"],correct:1,exp:"La AEPD, cuyo estatuto refuerza la LO 3/2018."}
],
12:[
  {q:"La Declaración Universal de los Derechos Humanos fue aprobada por la Asamblea General de la ONU el:",options:["26 de junio de 1945","4 de noviembre de 1950","10 de diciembre de 1948","10 de diciembre de 1966"],correct:2,exp:"Aprobada en París el 10 de diciembre de 1948 mediante la Resolución 217 A (III)."},
  {q:"El Convenio Europeo de Derechos Humanos se firmó en Roma en:",options:["1948","1957","1961","1950"],correct:3,exp:"Firmado el 4 de noviembre de 1950 en el seno del Consejo de Europa; crea el Tribunal Europeo de Derechos Humanos."},
  {q:"Según sus efectos sobre el sistema nervioso central, la cocaína se clasifica como:",options:["Estimulante","Depresor","Perturbador o alucinógeno","Inhalante depresor"],correct:0,exp:"Las drogas se clasifican en depresoras (alcohol, opiáceos), estimulantes (cocaína, anfetaminas) y perturbadoras (LSD, cannabis en parte)."},
  {q:"El alcohol etílico, farmacológicamente, es una sustancia:",options:["Estimulante del sistema nervioso central","Depresora del sistema nervioso central","Alucinógena","Neutra sobre el sistema nervioso"],correct:1,exp:"Aunque en dosis bajas produce desinhibición aparente, el alcohol es un depresor del SNC."},
  {q:"La ONU fue fundada en el año:",options:["1919","1948","1945","1950"],correct:2,exp:"La Carta de las Naciones Unidas se firmó en San Francisco el 26 de junio de 1945 y entró en vigor el 24 de octubre."}
],
13:[
  {q:"La memoria RAM de un ordenador se caracteriza por ser:",options:["Permanente y de solo lectura","Un dispositivo de almacenamiento masivo","Parte del disco duro","Volátil: pierde su contenido al apagar el equipo"],correct:3,exp:"La RAM es memoria de trabajo volátil; la ROM es de solo lectura y no volátil."},
  {q:"En una dirección de correo electrónico, el carácter que separa el usuario del dominio es:",options:["La arroba","El punto","La barra","El guion"],correct:0,exp:"El formato es usuario@dominio."},
  {q:"El protocolo utilizado para la navegación web segura es:",options:["FTP","HTTPS","SMTP","POP3"],correct:1,exp:"HTTPS es HTTP sobre una capa de cifrado TLS; SMTP y POP3 son de correo y FTP de transferencia de archivos."},
  {q:"¿Cuál de las siguientes palabras está correctamente acentuada?",options:["Éxamen","Exámen","Examen","Examén"],correct:2,exp:"'Examen' es palabra llana terminada en -n, por lo que no lleva tilde; su plural, 'exámenes', sí la lleva."},
  {q:"La tilde en 'sólo/solo', 'él/el' o 'sí/si' cuando distingue significados se denomina:",options:["Tilde enfática","Diéresis","Acento prosódico","Tilde diacrítica"],correct:3,exp:"La tilde diacrítica diferencia palabras de idéntica forma pero distinta función o significado."}
]
};

window.registerOposicion({
  slug: 'policia-nacional',
  temas: TEMAS,
  questions: QUESTIONS
});
})();
