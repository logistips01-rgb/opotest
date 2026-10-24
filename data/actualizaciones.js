/* Registro de cambios que ve la usuaria en actualizaciones.html.
   Cada entrada: {id, fecha, tipo: "ley"|"correccion"|"aviso", titulo, texto,
   preguntas: [{tema, q, options, antes, ahora}]}. Lo más reciente, primero.
   Las preguntas ya están cambiadas en el banco; esto solo lo documenta y
   permite practicarlas (test.html?opo=<slug>&modo=cambios). */
window.ACTUALIZACIONES = window.ACTUALIZACIONES || {};
window.ACTUALIZACIONES["aux-admin-zaragoza"] = [
 {
  "id": "2026-10-24-correccion-10",
  "fecha": "2026-10-24",
  "tipo": "correccion",
  "titulo": "Correcciones de la quinta ronda de revisión",
  "texto": "Revisión independiente contra el texto consolidado del BOE: artículos de la LBRL mal citados o con contenido que no dicen (arts. 122, 123, 130, 133 y 134), nombres de órganos ya inexistentes, aviso sobre los préstamos locales (DA 14.ª RDL 20/2011) y retirada de preguntas duplicadas o sin base legal (se archivan, no se borran).",
  "preguntas": [
   {
    "tema": 14,
    "q": "Según el art. 133 de la LBRL, entre los criterios a los que se ajusta la gestión económico-financiera de los municipios de gran población figura la introducción de la exigencia de:",
    "options": [
     "La publicación mensual del estado de ejecución del gasto",
     "El seguimiento de los costes de los servicios",
     "La aprobación trimestral del presupuesto por el Pleno",
     "La gestión directa de todos los servicios municipales"
    ],
    "antes": "Programación, con proyección plurianual, y control de eficacia y de eficiencia en la gestión",
    "ahora": "El seguimiento de los costes de los servicios",
    "nota": "La clave atribuía al art. 133 LBRL una programación «con proyección plurianual» que no recoge; se pregunta ahora su letra e) (seguimiento de los costes de los servicios)."
   },
   {
    "tema": 14,
    "q": "Según el art. 134 de la LBRL, la gestión económico-financiera y presupuestaria de los municipios de gran población corresponde a órganos que dependan directamente de:",
    "options": [
     "El Pleno en exclusiva, sin intervención de la Junta de Gobierno",
     "El Tribunal de Cuentas directamente",
     "El Estado central, mediante delegación forzosa",
     "La Junta de Gobierno Local, sin perjuicio de las funciones que corresponden a la Intervención General"
    ],
    "antes": "La Junta de Gobierno Local, sin perjuicio de las funciones que corresponden a la Intervención General",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: el art. 134 LBRL no hace depender esos órganos de la Junta de Gobierno Local (remite al Reglamento orgánico); corregida repetiría la pregunta del art. 134.1 que ya está en el banco."
   },
   {
    "tema": 14,
    "q": "Según el art. 123.1 c) de la LBRL, entre los niveles esenciales de la organización municipal, cuya determinación tiene en todo caso naturaleza orgánica, figuran los coordinadores generales, que dependen directamente de:",
    "options": [
     "Los directores generales de su misma área",
     "El secretario general del Pleno municipal",
     "Los miembros de la Junta de Gobierno Local",
     "El titular de la asesoría jurídica municipal"
    ],
    "antes": "Áreas, dirigidas por un miembro de la Junta de Gobierno Local, y órganos directivos, dependientes de aquellas",
    "ahora": "Los miembros de la Junta de Gobierno Local",
    "nota": "El art. 130 LBRL no dice que las áreas las dirija un miembro de la Junta de Gobierno Local; se pregunta ahora el art. 123.1 c): los coordinadores generales dependen directamente de los miembros de la Junta (en Zaragoza, del Gobierno de Zaragoza)."
   },
   {
    "tema": 14,
    "q": "Según el art. 122.4 de la LBRL, además del estudio, informe o consulta de los asuntos que hayan de ser sometidos a la decisión del Pleno, corresponde a las comisiones del Pleno:",
    "options": [
     "El seguimiento de la gestión del Alcalde y de su equipo de gobierno",
     "La fiscalización previa de los gastos de la Junta de Gobierno Local",
     "La propuesta al Alcalde de los miembros de la Junta de Gobierno Local",
     "La coordinación de los órganos directivos de cada área de gobierno"
    ],
    "antes": "El seguimiento de la gestión del Alcalde, la Junta de Gobierno Local y los concejales que ostenten delegaciones",
    "ahora": "El seguimiento de la gestión del Alcalde y de su equipo de gobierno",
    "nota": "Clave literal del art. 122.4 b) LBRL («la gestión del Alcalde y de su equipo de gobierno»); la anterior copiaba la fórmula del art. 20.1 c). Distractores igualados."
   },
   {
    "tema": 14,
    "q": "Según el art. 130.1 B) de la LBRL, son órganos directivos los directores generales u órganos similares que culminen la organización administrativa dentro de cada una de:",
    "options": [
     "Las juntas municipales de distrito",
     "Las comisiones permanentes del Pleno",
     "Las sociedades mercantiles locales",
     "Las grandes áreas o concejalías"
    ],
    "antes": "Los coordinadores generales de cada área o concejalía y los directores generales u órganos similares que culminen la organización administrativa",
    "ahora": "Las grandes áreas o concejalías",
    "nota": "Citaba el art. 130.2 por el 130.1 B); se pregunta ahora el ámbito de los directores generales («dentro de cada una de las grandes áreas o concejalías») con distractores de la misma longitud."
   },
   {
    "tema": 14,
    "q": "Según el art. 17.4 de la LBRL, el Consejo de Empadronamiento está adscrito al Ministerio de Economía y Hacienda y es presidido por:",
    "options": [
     "El Presidente del Instituto Nacional de Estadística",
     "El Presidente de la Federación Española de Municipios y Provincias",
     "El Alcalde del municipio de mayor población",
     "El Ministro de Economía y Hacienda"
    ],
    "antes": "El Presidente del Instituto Nacional de Estadística",
    "ahora": "El Presidente del Instituto Nacional de Estadística",
    "nota": "La clave no cambia; la explicación avisa de que el RPDT vigente adscribe el Consejo de Empadronamiento al Ministerio de Economía, Comercio y Empresa."
   },
   {
    "tema": 14,
    "q": "Según el art. 130.3 de la LBRL, el nombramiento de los coordinadores generales y directores generales debe efectuarse entre:",
    "options": [
     "Cualquier ciudadano sin requisito de titulación",
     "Funcionarios de carrera del Estado, las Comunidades Autónomas, las Entidades Locales o funcionarios de administración local con habilitación de carácter nacional, salvo que el reglamento orgánico permita otra cosa en atención a las características específicas del puesto",
     "Familiares directos del Alcalde en ejercicio",
     "Únicamente personal laboral eventual, sin excepción"
    ],
    "antes": "Funcionarios de carrera del Estado, las Comunidades Autónomas, las Entidades Locales o funcionarios de administración local con habilitación de carácter nacional, salvo que el reglamento orgánico permita otra cosa en atención a las características específicas del puesto",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: repite la pregunta del art. 130.3 LBRL que ya está en el banco, y su clave y explicación usaban la redacción anterior a la Ley 27/2013 (sin el subgrupo A1)."
   },
   {
    "tema": 14,
    "q": "Según el art. 17 de la LBRL, la formación, mantenimiento, revisión y custodia del padrón municipal corresponde:",
    "options": [
     "Al Instituto Nacional de Estadística exclusivamente",
     "Al Ayuntamiento respectivo, de acuerdo con lo dispuesto en la propia ley y en las normas que dicte el Estado",
     "A la Diputación Provincial en todos los casos",
     "Al Ministerio del Interior sin intervención municipal"
    ],
    "antes": "Al Ayuntamiento respectivo, de acuerdo con lo dispuesto en la propia ley y en las normas que dicte el Estado",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: explicación con la redacción del art. 17.1 LBRL anterior al RDL 6/2023 y clave no literal; corregida repetiría otra pregunta del banco."
   },
   {
    "tema": 14,
    "q": "¿A quién le corresponde el mantenimiento del Padrón Municipal?",
    "options": [
     "A la Comunidad Autónoma en colaboración con el ayuntamiento respectivo.",
     "Al Ministerio de Administraciones Públicas en colaboración con el Ayuntamiento.",
     "Al Ministerio del Interior.",
     "Al Ayuntamiento respectivo."
    ],
    "antes": "Al Ayuntamiento respectivo.",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el banco ya pregunta a quién corresponde el padrón (art. 17.1 LBRL) con la misma clave y los mismos distractores."
   },
   {
    "tema": 14,
    "q": "¿A quién le corresponde realizar la revisión del Padrón Municipal?",
    "options": [
     "Al Ayuntamiento respectivo.",
     "A la Comunidad Autónoma en colaboración con el ayuntamiento respectivo.",
     "Al Ministerio de Administraciones Públicas en colaboración con el Ayuntamiento.",
     "Al Ministerio del Interior."
    ],
    "antes": "Al Ayuntamiento respectivo.",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el banco ya pregunta a quién corresponde el padrón (art. 17.1 LBRL) con la misma clave y los mismos distractores."
   },
   {
    "tema": 14,
    "q": "¿A quién le corresponde custodiar el Padrón Municipal?",
    "options": [
     "A la Comunidad Autónoma en colaboración con el ayuntamiento respectivo.",
     "Al Ayuntamiento respectivo.",
     "Al Ministerio del Interior.",
     "Al Ministerio de Administraciones Públicas en colaboración con el Ayuntamiento."
    ],
    "antes": "Al Ayuntamiento respectivo.",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el banco ya pregunta a quién corresponde el padrón (art. 17.1 LBRL) con la misma clave y los mismos distractores."
   },
   {
    "tema": 14,
    "q": "¿A quién le corresponde gestionar el Padrón Municipal?",
    "options": [
     "Al Ministerio del Interior.",
     "Al Ministerio de Administraciones Públicas en colaboración con el Ayuntamiento.",
     "Al Ayuntamiento respectivo.",
     "A la Comunidad Autónoma en colaboración con el ayuntamiento respectivo."
    ],
    "antes": "Al Ayuntamiento respectivo.",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el banco ya pregunta a quién corresponde el padrón (art. 17.1 LBRL) con la misma clave y los mismos distractores."
   },
   {
    "tema": 14,
    "q": "Según la Disposición transitoria tercera.1 de la Ley 10/2017, hasta la aprobación de la regulación de la participación de los entes locales en los ingresos de la Comunidad Autónoma de Aragón, el Ayuntamiento de Zaragoza recibirá anualmente:",
    "options": [
     "Cinco millones de euros",
     "Trece millones y medio de euros",
     "Ocho millones de euros",
     "Veinte millones de euros"
    ],
    "antes": "Ocho millones de euros",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: dato transitorio de financiación de la Ley 10/2017 (DT 3.ª), fuera del epígrafe del tema 14 (organización); el texto es correcto."
   },
   {
    "tema": 13,
    "q": "Si la reducción de gastos por remanente de tesorería negativo no resulta posible, el art. 193.2 TRLRHL permite acudir a...",
    "options": [
     "Una operación de crédito por su importe, si se dan las condiciones del art. 177.5 TRLRHL",
     "Una subida extraordinaria de los tipos impositivos aplicable ya en el ejercicio corriente",
     "La enajenación de terrenos del patrimonio municipal del suelo por el importe del déficit",
     "Una subvención extraordinaria del Estado o de la Comunidad Autónoma por el importe del déficit"
    ],
    "antes": "El concierto de una operación de crédito por su importe, en las condiciones del art. 177.5 TRLRHL",
    "ahora": "Una operación de crédito por su importe, si se dan las condiciones del art. 177.5 TRLRHL",
    "nota": "La clave (art. 193.2 TRLRHL) no cambia de sentido; la explicación avisa de la DA 14.ª RDL 20/2011 y se igualan las longitudes de las opciones."
   },
   {
    "tema": 18,
    "q": "Según el art. 4.k) del RD 365/1995, se declara la situación de servicios especiales cuando el funcionario...",
    "options": [
     "Cumpla el servicio militar o prestación social sustitutoria equivalente",
     "Presten servicio de voluntariado obligatorio en la Cruz Roja Española",
     "Solicite la excedencia voluntaria por interés particular",
     "Obtenga un puesto de trabajo en la misma provincia"
    ],
    "antes": "Cumpla el servicio militar o prestación social sustitutoria equivalente",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: el servicio militar obligatorio está suspendido y el art. 87.1 TREBEP no recoge ese supuesto de servicios especiales."
   },
   {
    "tema": 18,
    "q": "El art. 5 del RD 365/1995 atribuye el establecimiento de los criterios para calificar un cargo como de carácter político a...",
    "options": [
     "El Ministerio de Hacienda",
     "El Ministerio de Asuntos Exteriores",
     "El Consejo de Estado",
     "El Ministerio para las Administraciones Públicas"
    ],
    "antes": "El Ministerio para las Administraciones Públicas",
    "ahora": "El Ministerio para las Administraciones Públicas",
    "nota": "La clave (literal del art. 5 RD 365/1995) no cambia; se avisa de que el Ministerio para las Administraciones Públicas ya no existe."
   },
   {
    "tema": 18,
    "q": "Conforme al art. 6.2 del RD 365/1995, la autorización para realizar una misión de carácter internacional requiere que conste el interés de la Administración según los criterios que establezca...",
    "options": [
     "El Ministerio para las Administraciones Públicas",
     "El Ministerio de Asuntos Exteriores",
     "El Consejo de Ministros",
     "La Secretaría de Estado para la Administración Pública"
    ],
    "antes": "El Ministerio de Asuntos Exteriores",
    "ahora": "El Ministerio de Asuntos Exteriores",
    "nota": "La clave (literal del art. 6.2 RD 365/1995) no cambia; se avisa de la denominación actual del Ministerio de Asuntos Exteriores, Unión Europea y Cooperación."
   },
   {
    "tema": 18,
    "q": "Según el art. 12.1 del RD 365/1995, pasan a la situación de expectativa de destino los funcionarios afectados por un procedimiento de reasignación de efectivos que...",
    "options": [
     "Hayan sido sancionados con suspensión firme de funciones por una falta disciplinaria grave",
     "Hayan agotado el plazo máximo de un año sin obtener un nuevo puesto de trabajo",
     "No hayan obtenido puesto en las dos primeras fases del procedimiento de reasignación",
     "Hayan pedido la excedencia voluntaria incentivada en la primera fase de reasignación"
    ],
    "antes": "No hayan obtenido puesto en las dos primeras fases de reasignación, adscribiéndose al Ministerio para las Administraciones Públicas",
    "ahora": "No hayan obtenido puesto en las dos primeras fases del procedimiento de reasignación",
    "nota": "La clave mantiene su sentido (no haber obtenido puesto en las dos primeras fases de reasignación) sin la mención del ministerio extinto, que pasa a la explicación con aviso; distractores igualados."
   },
   {
    "tema": 18,
    "q": "Según el art. 12.4 del RD 365/1995, la declaración y cese en la situación de expectativa de destino corresponde a...",
    "options": [
     "La Secretaría de Estado para la Administración Pública",
     "El Ministerio para las Administraciones Públicas",
     "El Ministro del Departamento de origen del funcionario",
     "El Consejo de Ministros"
    ],
    "antes": "La Secretaría de Estado para la Administración Pública",
    "ahora": "La Secretaría de Estado para la Administración Pública",
    "nota": "La clave (literal del art. 12.4 RD 365/1995) no cambia; se avisa de que hoy existe la Secretaría de Estado de Función Pública."
   },
   {
    "tema": 18,
    "q": "Según el artículo 18.3 del RD 365/1995, ¿a qué órgano corresponde acordar la declaración de excedencia voluntaria incentivada?",
    "options": [
     "Al Ministro del Departamento de origen",
     "Al Registro Central de Personal",
     "A la Secretaría de Estado para la Administración Pública",
     "La Comisión Superior de Personal"
    ],
    "antes": "A la Secretaría de Estado para la Administración Pública",
    "ahora": "A la Secretaría de Estado para la Administración Pública",
    "nota": "La clave (literal del art. 18.3 RD 365/1995) no cambia; se avisa de que hoy existe la Secretaría de Estado de Función Pública."
   },
   {
    "tema": 18,
    "q": "Según la disposición adicional cuarta del RD 365/1995, la competencia en materia de situaciones administrativas de los funcionarios docentes universitarios y del personal de Administración y Servicios propio de las Universidades corresponde a:",
    "options": [
     "El Ministerio competente en materia de Universidades",
     "El Rector",
     "El Consejo Social de la Universidad",
     "El Consejo de Coordinación Universitaria"
    ],
    "antes": "El Rector",
    "ahora": "El Rector",
    "nota": "La clave (literal de la DA 4.ª RD 365/1995) no cambia; se avisa de la derogación de la LORU y de lo que dice hoy la LO 2/2023."
   },
   {
    "tema": 10,
    "q": "¿Qué relación guarda el Secretario de la Corporación con la conservación y tutela de los bienes de la Entidad Local, según la práctica administrativa?",
    "options": [
     "Sustituye al Pleno en la toma de decisiones sobre bienes",
     "No tiene ninguna función relacionada con los bienes municipales",
     "Es el único que puede vender un bien patrimonial sin intervención de ningún otro órgano",
     "Desempeña funciones de custodia documental, autorización del inventario y asesoramiento jurídico en los expedientes relativos a bienes, como funcionario de administración local con habilitación de carácter nacional"
    ],
    "antes": "Desempeña funciones de custodia documental, autorización del inventario y asesoramiento jurídico en los expedientes relativos a bienes, como funcionario de administración local con habilitación de carácter nacional",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: pregunta doctrinal (“según la práctica administrativa”) con la clave delatada por la longitud; sus funciones literales ya están en otras preguntas del tema."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2 c), durante el plazo de dos meses tras la comunicación de un nuevo sistema de identificación, ¿qué puede hacer el órgano estatal competente por motivos de seguridad pública?",
    "options": [
     "Prohibir el sistema directamente sin motivación",
     "Imponer una multa a la Administración que lo propone",
     "Nada, el plazo es meramente informativo",
     "Acudir a la vía jurisdiccional, previo informe vinculante de la Secretaría de Estado de Seguridad"
    ],
    "antes": "Acudir a la vía jurisdiccional, previo informe vinculante de la Secretaría de Estado de Seguridad",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: lo que pregunta del art. 9.2 c) LPAC ya está en otras dos preguntas del banco."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2, las Administraciones deben garantizar que la utilización de los sistemas de las letras a) y b) sea posible:",
    "options": [
     "Únicamente en procedimientos tributarios",
     "Para todo procedimiento, aunque también se admita algún sistema de la letra c)",
     "Solo si el interesado lo solicita expresamente por escrito",
     "Solo para personas jurídicas, no físicas"
    ],
    "antes": "Para todo procedimiento, aunque también se admita algún sistema de la letra c)",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el último párrafo del art. 9.2 LPAC ya se pregunta con un enunciado casi idéntico y la misma respuesta."
   },
   {
    "tema": 4,
    "q": "Si una Administración admite para un procedimiento el sistema de identificación de la letra c) del art. 9.2 de la LPAC, ¿queda liberada de ofrecer los sistemas de las letras a) y b) para ese mismo procedimiento?",
    "options": [
     "No, debe garantizar que también sea posible usar alguno de los sistemas de las letras a) y b)",
     "Solo si así lo decide el órgano competente en cada caso",
     "Sí, salvo que el interesado lo solicite expresamente por escrito",
     "Sí, la letra c) sustituye siempre a las letras a) y b)"
    ],
    "antes": "No, debe garantizar que también sea posible usar alguno de los sistemas de las letras a) y b)",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: pregunta la misma regla del último párrafo del art. 9.2 LPAC que otra del banco."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2 a), uno de los sistemas de identificación electrónica de los interesados son los sistemas basados en:",
    "options": [
     "Huellas dactilares exclusivamente",
     "Contraseñas de redes sociales",
     "Certificados electrónicos cualificados de firma electrónica de la Lista de confianza de prestadores",
     "Reconocimiento facial obligatorio"
    ],
    "antes": "Certificados electrónicos cualificados de firma electrónica de la Lista de confianza de prestadores",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: la letra a) del art. 9.2 LPAC ya se pregunta en otra pregunta del banco, corregida en esta tanda."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2 b), otro sistema de identificación electrónica admitido son los sistemas basados en:",
    "options": [
     "Grabaciones de voz",
     "Firmas manuscritas escaneadas",
     "Códigos QR generados por el interesado",
     "Certificados electrónicos cualificados de sello electrónico"
    ],
    "antes": "Certificados electrónicos cualificados de sello electrónico",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: la letra b) del art. 9.2 LPAC ya se pregunta en otra pregunta del banco."
   },
   {
    "tema": 4,
    "q": "¿Qué regula específicamente la letra b) del art. 9.2 de la LPAC?",
    "options": [
     "Los sistemas de firma electrónica avanzada no cualificada",
     "El uso de la Cl@ve permanente como sistema único",
     "La comparecencia personal ante funcionario habilitado",
     "Sistemas basados en certificados electrónicos cualificados de sello electrónico expedidos por prestadores incluidos en la Lista de confianza de prestadores de servicios de certificación"
    ],
    "antes": "Sistemas basados en certificados electrónicos cualificados de sello electrónico expedidos por prestadores incluidos en la Lista de confianza de prestadores de servicios de certificación",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: la letra b) del art. 9.2 LPAC ya se pregunta en otra pregunta del banco."
   },
   {
    "tema": 4,
    "q": "¿Qué sistema de identificación electrónica regula la letra a) del art. 9.2 de la LPAC?",
    "options": [
     "Sistemas basados en códigos de un solo uso enviados por SMS al teléfono del interesado",
     "Sistemas basados en certificados electrónicos cualificados de firma electrónica",
     "Sistemas de usuario y contraseña concertados previamente con la Administración",
     "Sistemas basados en certificados electrónicos cualificados de sello electrónico"
    ],
    "antes": "Sistemas basados en certificados electrónicos cualificados de firma electrónica expedidos por prestadores incluidos en la Lista de confianza de prestadores de servicios de certificación",
    "ahora": "Sistemas basados en certificados electrónicos cualificados de firma electrónica",
    "nota": "La clave (certificados cualificados de firma electrónica, art. 9.2 a LPAC) no cambia de sentido; se acorta y se igualan las longitudes."
   },
   {
    "tema": 6,
    "q": "Según el principio recogido en el art. 49, la anulación de unos actos administrativos NO implicará necesariamente la anulación de:",
    "options": [
     "Los actos sucesivos e independientes en el mismo procedimiento",
     "La resolución final del procedimiento en todo caso",
     "La totalidad del expediente sin excepción",
     "Ningún otro acto, aunque dependa directamente del anulado"
    ],
    "antes": "Los actos sucesivos e independientes en el mismo procedimiento",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el art. 49.1 LPAC ya se pregunta con la clave literal."
   },
   {
    "tema": 6,
    "q": "Según el art. 49, el efecto de la nulidad o anulabilidad sobre actos posteriores del procedimiento depende fundamentalmente de:",
    "options": [
     "Si esos actos posteriores son o no independientes del acto viciado",
     "El número de páginas del expediente",
     "El rango del funcionario que lo dictó",
     "La fecha exacta en que se dictó el acto viciado"
    ],
    "antes": "Si esos actos posteriores son o no independientes del acto viciado",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el art. 49.1 LPAC ya se pregunta con la clave literal."
   },
   {
    "tema": 6,
    "q": "Según el art. 48.3, la realización de actuaciones administrativas fuera del tiempo establecido para ellas solo implica la anulabilidad del acto cuando:",
    "options": [
     "Se trate de un procedimiento sancionador",
     "El interesado lo solicite expresamente",
     "Así lo imponga la naturaleza del término o plazo",
     "Se produzca cualquier retraso, sin excepción"
    ],
    "antes": "Así lo imponga la naturaleza del término o plazo",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el art. 48.3 LPAC ya se pregunta con un enunciado casi idéntico y la misma respuesta."
   },
   {
    "tema": 6,
    "q": "Las actuaciones administrativas realizadas fuera de plazo ¿invalidan el acto que se dicte?",
    "options": [
     "Sí, en cualquier caso.",
     "Sólo si provocan indefensión.",
     "Sólo si el término es esencial.",
     "No, en ningún caso."
    ],
    "antes": "Sólo si el término es esencial.",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: paráfrasis del art. 48.3 LPAC, que ya se pregunta con la clave literal."
   },
   {
    "tema": 6,
    "q": "Según el art. 52, la Administración podrá convalidar los actos anulables:",
    "options": [
     "Subsanando los vicios de que adolezcan",
     "Únicamente dentro de las primeras 48 horas",
     "Solo si lo autoriza un juez",
     "Nunca, la convalidación no existe en Derecho Administrativo"
    ],
    "antes": "Subsanando los vicios de que adolezcan",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el art. 52.1 LPAC ya se pregunta con la misma respuesta."
   },
   {
    "tema": 6,
    "q": "¿Puede la Administración convalidar un acto nulo de pleno derecho conforme al art. 52 de la Ley 39/2015?",
    "options": [
     "No, ningún acto administrativo puede convalidarse nunca",
     "Sí, cualquier acto puede convalidarse sin distinción",
     "Sí, pero solo si lo pide el interesado por escrito",
     "No, la convalidación del art. 52 se refiere exclusivamente a los actos anulables, no a los nulos de pleno derecho"
    ],
    "antes": "No, la convalidación del art. 52 se refiere exclusivamente a los actos anulables, no a los nulos de pleno derecho",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: la imposibilidad de convalidar actos nulos (art. 52.1 LPAC) ya se pregunta en otra pregunta del banco."
   },
   {
    "tema": 8,
    "q": "¿Qué tres pronunciamientos puede contener la resolución de un recurso según el art. 119.1 LPAC?",
    "options": [
     "Nulidad, anulabilidad o revocación",
     "Estimación total o parcial, desestimación, o declaración de inadmisión",
     "Solo estimación o desestimación, sin posibilidad de inadmisión",
     "Archivo, caducidad o suspensión"
    ],
    "antes": "Estimación total o parcial, desestimación, o declaración de inadmisión",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el art. 119.1 LPAC ya se pregunta en otra pregunta del banco."
   },
   {
    "tema": 8,
    "q": "Cuando exista un vicio de forma y no se estime procedente resolver sobre el fondo, ¿qué ordena el art. 119.2 LPAC?",
    "options": [
     "El traslado inmediato al orden jurisdiccional contencioso-administrativo",
     "La suspensión indefinida de la resolución",
     "La retroacción del procedimiento al momento en que se cometió el vicio, sin perjuicio de la convalidación de actuaciones conforme al art. 52 LPAC",
     "La anulación total del procedimiento y su archivo definitivo"
    ],
    "antes": "La retroacción del procedimiento al momento en que se cometió el vicio, sin perjuicio de la convalidación de actuaciones conforme al art. 52 LPAC",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el art. 119.2 LPAC ya se pregunta en otra pregunta del banco."
   },
   {
    "tema": 8,
    "q": "Según el art. 119.3, el órgano que resuelve el recurso puede decidir cuestiones no alegadas por los interesados cuando:",
    "options": [
     "El recurso sea el extraordinario de revisión exclusivamente",
     "El interesado lo autorice expresamente por escrito",
     "La Administración lo decida sin más trámite y sin audiencia alguna",
     "Se trate de cuestiones, tanto de forma como de fondo, que plantee el procedimiento, hayan sido o no alegadas, debiendo en tal caso oírse previamente a los interesados"
    ],
    "antes": "Se trate de cuestiones, tanto de forma como de fondo, que plantee el procedimiento, hayan sido o no alegadas, debiendo en tal caso oírse previamente a los interesados",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetida: el art. 119.3 LPAC (audiencia sobre cuestiones no alegadas) ya se pregunta en otra pregunta del banco."
   }
  ]
 },
 {
  "id": "2026-10-24-correccion-9",
  "fecha": "2026-10-24",
  "tipo": "correccion",
  "titulo": "Correcciones de la cuarta ronda de revisión",
  "texto": "Revisión independiente contra el texto consolidado del BOE: reglas del Reglamento de situaciones administrativas desplazadas por el TREBEP (excedencia por interés particular, suspensión provisional), permiso por adopción, órganos estatales suprimidos, límites de los préstamos locales (DA 14.ª del RDL 20/2011) y preguntas repetidas (se archivan, no se borran).",
  "preguntas": [
   {
    "tema": 18,
    "q": "Según el artículo 21.4 del RD 365/1995, el funcionario en suspensión provisional tendrá derecho a percibir:",
    "options": [
     "El 75 por 100 de su sueldo, trienios y pagas extraordinarias, además de la totalidad de la prestación económica por hijo a cargo",
     "La totalidad del sueldo, excepto el complemento específico",
     "El 50 por 100 del sueldo, sin trienios ni pagas extraordinarias",
     "El 100 por 100 del sueldo durante los tres primeros meses"
    ],
    "antes": "El 75 por 100 de su sueldo, trienios y pagas extraordinarias, además de la totalidad de la prestación económica por hijo a cargo",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: daba como vigente el 75 % del art. 21.4 RD 365/1995, desplazado por el art. 98.3 TREBEP (retribuciones básicas); corregida repetiría la 18-177."
   },
   {
    "tema": 18,
    "q": "Según el artículo 89.4 del TREBEP, el periodo de excedencia de duración no superior a tres años para atender al cuidado de cada hijo se cuenta desde:",
    "options": [
     "La fecha de reincorporación al servicio activo del otro progenitor, si es funcionario",
     "La fecha en que termine el permiso por nacimiento, adopción, guarda o acogimiento",
     "La fecha de la solicitud de la excedencia o, en su caso, de la resolución que la concede",
     "La fecha de nacimiento o, en su caso, de la resolución judicial o administrativa"
    ],
    "antes": "La fecha de nacimiento o de la resolución judicial de adopción",
    "ahora": "La fecha de nacimiento o, en su caso, de la resolución judicial o administrativa",
    "nota": "Clave literal del art. 89.4 TREBEP («resolución judicial o administrativa», no solo «judicial de adopción»); enunciado sin la fórmula del RD 365/1995 y distractores igualados en longitud."
   },
   {
    "tema": 18,
    "q": "Conforme al artículo 16.3 del RD 365/1995, cada período de excedencia voluntaria por interés particular no podrá superar, como máximo:",
    "options": [
     "Un mínimo de un año y un máximo de diez, cualquiera que sea el tiempo de servicios prestados",
     "Un número de años equivalente a los servicios acreditados en cualquier Administración pública, con un máximo de quince",
     "Diez años, cualquiera que sea el tiempo de servicios prestados",
     "Un número de años equivalente al doble de los servicios prestados"
    ],
    "antes": "Un número de años equivalente a los servicios acreditados en cualquier Administración pública, con un máximo de quince",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: daba como vigente el máximo de quince años de la excedencia voluntaria por interés particular (art. 16.3 RD 365/1995), suprimido por la Ley 13/1996; el art. 89.2 TREBEP no fija máximo."
   },
   {
    "tema": 18,
    "q": "Según el artículo 16.4 del RD 365/1995, si el funcionario no solicita el reingreso al servicio activo dentro del plazo máximo expresado en la resolución de concesión de la excedencia por interés particular, se produce:",
    "options": [
     "La apertura automática de expediente disciplinario",
     "La prórroga automática de la excedencia por un nuevo período igual",
     "La pérdida de la condición de funcionario",
     "La declaración de oficio en suspensión provisional"
    ],
    "antes": "La pérdida de la condición de funcionario",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: daba como vigente la pérdida de la condición de funcionario del art. 16.4 RD 365/1995, suprimida por la Ley 13/1996 y ausente del art. 63 TREBEP."
   },
   {
    "tema": 18,
    "q": "Según el Reglamento de Situaciones Administrativas (RD 365/1995), cada período de excedencia voluntaria por interés particular tendrá una duración no inferior a:",
    "options": [
     "Tres años continuados",
     "Un año",
     "Cinco años continuados",
     "Dos años continuados"
    ],
    "antes": "Dos años continuados",
    "ahora": "Dos años continuados",
    "nota": "La explicación ya no presenta como vigente el máximo de quince años: avisa de que lo suprimió la Ley 13/1996 y de que el TREBEP no fija máximo."
   },
   {
    "tema": 18,
    "q": "Según el art. 7.1.a) del RD 365/1995, cuando el puesto desempeñado antes de pasar a servicios especiales se hubiera obtenido por libre designación, al reingreso se adjudicará...",
    "options": [
     "Un puesto de nivel inmediatamente inferior, con carácter definitivo, en el mismo Ministerio y municipio en que prestaba servicios",
     "Un puesto de igual nivel y similares retribuciones, con carácter definitivo, en el mismo Ministerio, cualquiera que sea el municipio",
     "Un puesto de igual nivel y similares retribuciones en el mismo municipio, con carácter provisional hasta obtener otro definitivo",
     "El mismo puesto de libre designación que desempeñaba, con carácter definitivo, salvo que haya sido suprimido o amortizado"
    ],
    "antes": "Un puesto de igual nivel y similares retribuciones, con carácter provisional, en el mismo municipio, hasta obtener otro con carácter definitivo",
    "ahora": "Un puesto de igual nivel y similares retribuciones en el mismo municipio, con carácter provisional hasta obtener otro definitivo",
    "nota": "La clave no cambia de sentido; distractores igualados en longitud y explicación con la garantía mínima de reingreso del art. 87.3 TREBEP."
   },
   {
    "tema": 18,
    "q": "En los supuestos no correspondientes a libre designación, el art. 7.1.b) del RD 365/1995 dispone que se adjudicará al funcionario, con carácter definitivo...",
    "options": [
     "Un puesto de igual nivel y similares retribuciones en cualquier Ministerio de la misma provincia",
     "Un puesto de nivel superior en el mismo Ministerio, siempre que exista vacante en el municipio",
     "Cualquier puesto vacante de su Cuerpo o Escala en la Administración, sin garantía de nivel",
     "Un puesto de igual nivel y similares retribuciones en el mismo Ministerio y municipio"
    ],
    "antes": "Un puesto de igual nivel y similares retribuciones en el mismo Ministerio y municipio",
    "ahora": "Un puesto de igual nivel y similares retribuciones en el mismo Ministerio y municipio",
    "nota": "La clave no cambia; distractores coherentes con el enunciado y explicación con la garantía mínima de reingreso del art. 87.3 TREBEP."
   },
   {
    "tema": 18,
    "q": "Según el art. 10.1 del RD 365/1995, los funcionarios transferidos a las Comunidades Autónomas se integran plenamente en la organización de éstas, hallándose en situación de...",
    "options": [
     "Servicios especiales en la Comunidad Autónoma, con reserva del puesto que ocupaban en su Cuerpo o Escala de origen",
     "Servicio activo en la Comunidad Autónoma y excedencia forzosa en su Cuerpo o Escala de origen hasta su integración",
     "Servicio activo en la Comunidad Autónoma, permaneciendo en 'servicio en Comunidades Autónomas' en su Cuerpo o Escala de origen",
     "Servicio activo en la Comunidad Autónoma y excedencia voluntaria por servicios en el sector público en su Cuerpo o Escala de origen"
    ],
    "antes": "Servicio activo en la Comunidad Autónoma, permaneciendo en 'servicio en Comunidades Autónomas' en su Cuerpo o Escala de origen",
    "ahora": "Servicio activo en la Comunidad Autónoma, permaneciendo en 'servicio en Comunidades Autónomas' en su Cuerpo o Escala de origen",
    "nota": "Distractores igualados en longitud; la explicación avisa de que el TREBEP sustituyó la situación de «servicio en Comunidades Autónomas» por la de «servicio en otras Administraciones Públicas»."
   },
   {
    "tema": 18,
    "q": "Según el art. 11.1 del RD 365/1995, los funcionarios de la Administración del Estado que pasan a ocupar puestos en Comunidades Autónomas mediante concurso, libre designación o reasignación de efectivos...",
    "options": [
     "Conservan su condición de funcionarios de la Administración del Estado, en situación de servicio en Comunidades Autónomas",
     "Pasan a excedencia voluntaria por prestación de servicios en el sector público en la Administración del Estado",
     "Pasan a servicios especiales en la Administración del Estado mientras desempeñen el puesto autonómico",
     "Pierden su condición de funcionarios del Estado y se integran como funcionarios propios de la Comunidad Autónoma de destino"
    ],
    "antes": "Conservan su condición de funcionarios de la Administración del Estado, en situación de servicio en Comunidades Autónomas",
    "ahora": "Conservan su condición de funcionarios de la Administración del Estado, en situación de servicio en Comunidades Autónomas",
    "nota": "Distractores igualados en longitud; la explicación avisa de que el TREBEP llama hoy a esa situación «servicio en otras Administraciones Públicas» (art. 88)."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2 c), un sistema adicional de identificación 'cualquier otro que las Administraciones consideren válido' requiere, entre otros requisitos:",
    "options": [
     "Registro previo como usuario y comunicación a la Secretaría General de Administración Digital",
     "Autorización del Tribunal Constitucional",
     "Aprobación por el Congreso de los Diputados",
     "Publicación en el Diario Oficial de la Unión Europea"
    ],
    "antes": "Registro previo como usuario y comunicación a la Secretaría General de Administración Digital",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetir la 4-138 (art. 9.2 c) LPAC)."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2 c), tras la comunicación a la Secretaría General de Administración Digital, ¿cuánto tiempo debe transcurrir antes de la eficacia jurídica del nuevo sistema de identificación?",
    "options": [
     "Quince días",
     "Una semana",
     "Dos meses",
     "Un año"
    ],
    "antes": "Dos meses",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetir la 4-140 (dos meses, art. 9.2 c) LPAC)."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2 c), la comunicación a la Secretaría General de Administración Digital para un nuevo sistema de identificación debe acompañarse de:",
    "options": [
     "El visto bueno del Consejo General del Poder Judicial",
     "Una declaración responsable de que se cumple con todos los requisitos establecidos en la normativa vigente",
     "Un aval bancario",
     "Un informe de un auditor externo"
    ],
    "antes": "Una declaración responsable de que se cumple con todos los requisitos establecidos en la normativa vigente",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada por repetir la 4-139 (declaración responsable, art. 9.2 c) LPAC)."
   },
   {
    "tema": 4,
    "q": "De acuerdo con el art. 9.2.c) de la LPAC, la comunicación a la Secretaría General de Administración Digital para admitir un sistema distinto de los previstos en las letras a) y b) debe ir acompañada de:",
    "options": [
     "Un dictamen del Consejo de Estado sobre la adecuación del sistema a la normativa vigente",
     "Un aval bancario que garantice la seguridad del sistema frente a posibles usos fraudulentos durante su implantación",
     "Una declaración responsable de que se cumple con todos los requisitos establecidos en la normativa vigente",
     "Un informe preceptivo de la Abogacía del Estado sobre la validez jurídica del sistema"
    ],
    "antes": "Una declaración responsable de que se cumple con todos los requisitos establecidos en la normativa vigente",
    "ahora": "Una declaración responsable de que se cumple con todos los requisitos establecidos en la normativa vigente",
    "nota": "Explicación con el aviso de la supresión de la Secretaría General de Administración Digital; distractores alargados (regla 7 bis). La clave no cambia."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2.c) de la LPAC, ¿cuánto tiempo debe transcurrir desde la comunicación a la Secretaría General de Administración Digital antes de que un nuevo sistema de identificación tenga eficacia jurídica?",
    "options": [
     "Tres meses",
     "Un mes",
     "Quince días",
     "Dos meses"
    ],
    "antes": "Dos meses",
    "ahora": "Dos meses",
    "nota": "Explicación con el aviso de la supresión de la Secretaría General de Administración Digital."
   },
   {
    "tema": 4,
    "q": "La comunicación exigida por el art. 10.2.c) de la LPAC para admitir un nuevo sistema de firma debe acompañarse de:",
    "options": [
     "La autorización previa de todas las Comunidades Autónomas en cuyo territorio vaya a utilizarse el nuevo sistema de firma",
     "Una fianza equivalente al coste de implantación y mantenimiento del sistema de firma",
     "Un informe técnico del Instituto Nacional de Ciberseguridad sobre la seguridad del sistema",
     "Una declaración responsable de que se cumple con todos los requisitos establecidos en la normativa vigente"
    ],
    "antes": "Una declaración responsable de que se cumple con todos los requisitos establecidos en la normativa vigente",
    "ahora": "Una declaración responsable de que se cumple con todos los requisitos establecidos en la normativa vigente",
    "nota": "Cita literal corregida («vendrá acompañada») y distractores alargados (regla 7 bis). La clave no cambia."
   },
   {
    "tema": 4,
    "q": "Según el art. 10.2.c) de la LPAC, ¿cuánto tiempo debe transcurrir desde la comunicación a la Secretaría General de Administración Digital antes de que un nuevo sistema de firma tenga eficacia jurídica?",
    "options": [
     "Dos meses",
     "Sesenta días hábiles",
     "Un mes",
     "Treinta días naturales"
    ],
    "antes": "Dos meses",
    "ahora": "Dos meses",
    "nota": "Explicación con el aviso de la supresión de la Secretaría General de Administración Digital."
   },
   {
    "tema": 4,
    "q": "Durante el plazo previo a la eficacia jurídica de un nuevo sistema de firma del art. 10.2.c) de la LPAC, el órgano estatal competente por motivos de seguridad pública puede acudir a la vía jurisdiccional previo informe vinculante de:",
    "options": [
     "La Agencia Española de Protección de Datos, en el plazo de un mes",
     "La Secretaría de Estado de Seguridad, en el plazo de diez días desde su solicitud",
     "El Consejo de Estado, en el plazo de quince días",
     "La Secretaría General de Administración Digital, en el plazo de veinte días"
    ],
    "antes": "La Secretaría de Estado de Seguridad, en el plazo de diez días desde su solicitud",
    "ahora": "La Secretaría de Estado de Seguridad, en el plazo de diez días desde su solicitud",
    "nota": "La explicación dice por qué falla el distractor de la Secretaría General de Administración Digital y avisa de su supresión."
   },
   {
    "tema": 4,
    "q": "Según el art. 10.5 de la LPAC, cuando los interesados utilicen un sistema de firma de los previstos en dicho artículo, su identidad se entiende acreditada:",
    "options": [
     "Mediante el propio acto de la firma",
     "Cuando lo confirme expresamente la Secretaría General de Administración Digital",
     "Únicamente tras una comprobación adicional por el órgano instructor",
     "Solo si además presentan copia del DNI"
    ],
    "antes": "Mediante el propio acto de la firma",
    "ahora": "Mediante el propio acto de la firma",
    "nota": "La explicación dice por qué fallan los distractores y avisa de la supresión de la Secretaría General de Administración Digital."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2 c) de la Ley 39/2015, los sistemas de identificación de esa letra deben contar con un registro previo como usuario. ¿Qué debe permitir ese registro?",
    "options": [
     "Garantizar la identidad del interesado",
     "Acreditar la representación del interesado",
     "Comprobar la capacidad de obrar del interesado",
     "Fijar el domicilio para las notificaciones"
    ],
    "antes": "Garantizar la identidad del interesado",
    "ahora": "Garantizar la identidad del interesado",
    "nota": "Explicación con el aviso de la supresión de la Secretaría General de Administración Digital."
   },
   {
    "tema": 10,
    "q": "¿Quién debe emitir informe previo antes de que una entidad local ejerza una acción de defensa de un bien propio?",
    "options": [
     "El Pleno.",
     "El Secretario.",
     "La Comunidad Autónoma.",
     "El Alcalde."
    ],
    "antes": "El Secretario.",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: la clave «El Secretario» omitía la Asesoría Jurídica y el Letrado del art. 9.3 RBEL (y del art. 43.2 del Decreto 347/2002); corregida repetiría la 10-229."
   },
   {
    "tema": 10,
    "q": "Según el art. 9.3 RBEL, los acuerdos para el ejercicio de acciones necesarias para la defensa de los bienes y derechos de las Entidades locales deberán adoptarse previo dictamen de:",
    "options": [
     "El interventor, o, en su caso, la Intervención General y, en defecto de ambos, el Tesorero",
     "El secretario, o, en su caso, la Asesoría Jurídica y, en defecto de ambos, un Letrado",
     "El Alcalde, o, en su caso, la Junta de Gobierno Local y, en defecto de ambos, el Pleno",
     "El órgano autonómico de patrimonio o, en su defecto, la Diputación Provincial respectiva"
    ],
    "antes": "El secretario, o en su caso la Asesoría Jurídica y, en defecto de ambos, de un Letrado",
    "ahora": "El secretario, o, en su caso, la Asesoría Jurídica y, en defecto de ambos, un Letrado",
    "nota": "Distractores de la misma forma que la clave (regla 7 bis) y explicación con la norma aragonesa y el aviso de Zaragoza. La clave no cambia de sentido ni de posición."
   },
   {
    "tema": 13,
    "q": "Los acuerdos excepcionales previstos en el art. 177.5 TRLRHL para financiar gastos con operaciones de crédito exigen el quórum establecido en...",
    "options": [
     "el artículo 123 de la Ley 7/1985",
     "el artículo 47.3 de la Ley 7/1985",
     "el artículo 180 del propio TRLRHL",
     "el artículo 22.2 de la Ley 7/1985"
    ],
    "antes": "el artículo 47.3 de la Ley 7/1985",
    "ahora": "el artículo 47.3 de la Ley 7/1985",
    "nota": "La clave (literal) no cambia; la explicación avisa de la DA 14.ª del RDL 20/2011 y de que la remisión al art. 47.3 LBRL está desfasada."
   },
   {
    "tema": 13,
    "q": "Según el art. 177.5 TRLRHL, el importe total anual de las operaciones de crédito allí previstas no podrá superar...",
    "options": [
     "el 25 por ciento de los recursos por operaciones corrientes",
     "el 10 por ciento del presupuesto total",
     "el 5 por ciento de los recursos por operaciones corrientes",
     "el 50 por ciento de los recursos por operaciones corrientes"
    ],
    "antes": "el 5 por ciento de los recursos por operaciones corrientes",
    "ahora": "el 5 por ciento de los recursos por operaciones corrientes",
    "nota": "La clave no cambia; la explicación avisa de que la DA 14.ª del RDL 20/2011 limita los préstamos a largo plazo a la financiación de inversiones."
   },
   {
    "tema": 13,
    "q": "Según el art. 177.5 TRLRHL, la carga financiera total de la entidad, incluida la derivada de las operaciones proyectadas, no podrá superar...",
    "options": [
     "el 15 por ciento de los expresados recursos",
     "el 5 por ciento de los recursos por operaciones corrientes",
     "el 30 por ciento de los expresados recursos",
     "el 25 por ciento de los expresados recursos"
    ],
    "antes": "el 25 por ciento de los expresados recursos",
    "ahora": "el 25 por ciento de los expresados recursos",
    "nota": "La clave no cambia; la explicación avisa de que la DA 14.ª del RDL 20/2011 limita los préstamos a largo plazo a la financiación de inversiones."
   },
   {
    "tema": 13,
    "q": "Según el art. 86 del RD 500/1990, antes de autorizar gastos con imputación a ejercicios futuros, ¿quién debe certificar que no se superan los límites cuantitativos de los gastos plurianuales?",
    "options": [
     "El Tesorero",
     "El Secretario de la corporación",
     "La Comisión Especial de Cuentas",
     "El Interventor"
    ],
    "antes": "El Interventor",
    "ahora": "El Interventor",
    "nota": "La clave no cambia; la explicación avisa de que los porcentajes de los gastos plurianuales se calculan hoy según el art. 174.3 TRLRHL, no sobre el «crédito inicial» del art. 82 RD 500/1990."
   },
   {
    "tema": 13,
    "q": "Según el art. 88.1 del RD 500/1990, la autorización y disposición de los gastos plurianuales corresponde:",
    "options": [
     "al Pleno de la entidad.",
     "al Presidente de la entidad, en todo caso.",
     "al Interventor, previa certificación de los límites cuantitativos.",
     "al órgano competente en función de la cuantía del gasto imputable al ejercicio corriente."
    ],
    "antes": "al Pleno de la entidad.",
    "ahora": "al Pleno de la entidad.",
    "nota": "La clave (literal del art. 88.1 RD 500/1990) no cambia; la explicación avisa de que la DA 2.ª LCSP reparte hoy los contratos plurianuales entre Alcalde y Pleno y de lo que rige en Zaragoza."
   }
  ]
 },
 {
  "id": "2026-10-24-correccion-8",
  "fecha": "2026-10-24",
  "tipo": "correccion",
  "titulo": "Correcciones de la tercera ronda de revisión",
  "texto": "Revisión independiente contra el texto consolidado del BOE: órganos estatales suprimidos (Secretaría General de Administración Digital), «podrá suspenderse» en el art. 22.1 LPAC, nulidad que exige incompetencia manifiesta, explicaciones inexactas y preguntas repetidas o basadas en doctrina que choca con la ley (se archivan, no se borran).",
  "preguntas": [
   {
    "tema": 8,
    "q": "Según el art. 119.3, la resolución del recurso, ¿puede agravar la situación inicial del recurrente respecto a lo resuelto en primera instancia?",
    "options": [
     "No, sin perjuicio de la potestad de la Administración de incoar de oficio un nuevo procedimiento, si procede",
     "Sí, pero solo en el recurso extraordinario de revisión",
     "Sí, siempre y sin ninguna limitación",
     "Sí, únicamente cuando el recurrente sea persona jurídica"
    ],
    "antes": "No, sin perjuicio de la potestad de la Administración de incoar de oficio un nuevo procedimiento, si procede",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: atribuía al art. 119.3 LPAC una salvedad del art. 88.2 y, corregida, repetiría la pregunta de examen 21-48."
   },
   {
    "tema": 4,
    "q": "Según el art. 9.2.c) de la LPAC, para admitir \"cualquier otro sistema\" de identificación no previsto en las letras a) y b), es necesario, entre otros requisitos, un registro previo como usuario y la previa comunicación a:",
    "options": [
     "La Agencia Española de Protección de Datos",
     "La Secretaría General de Administración Digital",
     "El Consejo de Transparencia y Buen Gobierno",
     "La Secretaría de Estado de Seguridad"
    ],
    "antes": "La Secretaría General de Administración Digital del Ministerio de Asuntos Económicos y Transformación Digital",
    "ahora": "La Secretaría General de Administración Digital",
    "nota": "Clave acortada a «La Secretaría General de Administración Digital»; la explicación avisa de que el ministerio citado en la LPAC ya no existe y de que la Agencia Estatal de Administración Digital sustituye a esa Secretaría General desde 2025."
   },
   {
    "tema": 4,
    "q": "Según el art. 10.2.c) de la LPAC, para admitir \"cualquier otro sistema\" de firma no comprendido en las letras a) y b), se exige, entre otros requisitos, un registro previo como usuario y la previa comunicación a:",
    "options": [
     "El Consejo Superior de Administración Electrónica",
     "La Abogacía General del Estado",
     "La Secretaría General de Administración Digital",
     "La Secretaría de Estado de Seguridad"
    ],
    "antes": "La Secretaría General de Administración Digital del Ministerio de Asuntos Económicos y Transformación Digital",
    "ahora": "La Secretaría General de Administración Digital",
    "nota": "Clave acortada a «La Secretaría General de Administración Digital»; la explicación avisa del ministerio suprimido y de la Agencia Estatal de Administración Digital."
   },
   {
    "tema": 5,
    "q": "El art. 23.1 de la Ley 39/2015 permite al órgano competente para resolver ampliar el plazo máximo de resolución y notificación «a propuesta, en su caso, del órgano instructor o…». ¿Cómo continúa el texto?",
    "options": [
     "El titular de la unidad que tramite el expediente",
     "El interesado que haya promovido el procedimiento",
     "El superior jerárquico del órgano competente para resolver",
     "El órgano de control interno de la Administración actuante"
    ],
    "antes": "El órgano instructor o el superior jerárquico del órgano competente para resolver",
    "ahora": "El superior jerárquico del órgano competente para resolver",
    "nota": "Reformulada como pregunta de literalidad del art. 23.1: ya no da por hecho que el superior jerárquico solo propone."
   },
   {
    "tema": 6,
    "q": "¿Cuál de los siguientes actos se considera nulo de pleno derecho?",
    "options": [
     "El que contenga un defecto de forma que no cause indefensión ni le impida alcanzar su fin.",
     "El que restrinja intereses legítimos y se dicte con la motivación debida.",
     "El que tenga un contenido posible, aunque sea desfavorable para el interesado.",
     "El que se dicte por un órgano manifiestamente incompetente por razón del territorio."
    ],
    "antes": "El que se dicte por un órgano incompetente por razón del territorio.",
    "ahora": "El que se dicte por un órgano manifiestamente incompetente por razón del territorio.",
    "nota": "La clave añade «manifiestamente», como exige el art. 47.1 b) LPAC; se alargan los distractores y se reescribe la explicación."
   },
   {
    "tema": 7,
    "q": "Según el art. 88.3 LPAC, además de contener la decisión, las resoluciones que ponen fin al procedimiento expresarán:",
    "options": [
     "El nombre de los funcionarios que intervinieron en la instrucción del expediente",
     "La fecha prevista para la ejecución forzosa del acto si el interesado no lo cumple",
     "Los recursos que procedan, el órgano ante el que presentarlos y el plazo para interponerlos",
     "El coste económico íntegro de la tramitación del expediente y quién debe soportarlo"
    ],
    "antes": "Los recursos que contra la misma procedan, el órgano ante el que hubieran de presentarse y el plazo para interponerlos",
    "ahora": "Los recursos que procedan, el órgano ante el que presentarlos y el plazo para interponerlos",
    "nota": "Enunciado sin «decisión motivada» (el art. 88.3 solo exige motivar en los casos del art. 35); se igualan las longitudes de las opciones."
   },
   {
    "tema": 10,
    "q": "Según el art. 47.2 m) de la LBRL y el art. 126.4 ll) de la Ley 7/1999, de Administración Local de Aragón, el acuerdo de enajenación de bienes cuya cuantía exceda del 20 por 100 de los recursos ordinarios del presupuesto requiere:",
    "options": [
     "La mayoría simple de los miembros presentes, como cualquier otro acuerdo",
     "El voto favorable de la mayoría absoluta del número legal de miembros de la Corporación",
     "El voto favorable de las dos terceras partes del número de hecho de miembros",
     "La mayoría absoluta de los miembros presentes en la sesión en que se vote"
    ],
    "antes": "El Pleno de la Corporación, con el voto favorable de la mayoría absoluta del número legal de miembros",
    "ahora": "El voto favorable de la mayoría absoluta del número legal de miembros de la Corporación",
    "nota": "Enunciado ceñido al art. 47.2 m) LBRL y al art. 126.4 ll) de la Ley aragonesa 7/1999; se pregunta por la mayoría y se mantiene el aviso de Zaragoza."
   },
   {
    "tema": 10,
    "q": "¿Qué exige, con carácter general, la normativa patrimonial para poder ceder gratuitamente un bien inmueble patrimonial de una Entidad Local a una asociación cultural sin ánimo de lucro?",
    "options": [
     "Que se adjudique mediante subasta pública al mejor postor, como cualquier enajenación de bienes patrimoniales",
     "Que la asociación abone previamente a la Entidad local el valor de mercado del inmueble que se le va a ceder",
     "Que se acredite el interés público de la cesión y, en su caso, se dé cuenta a la autoridad competente de la Comunidad Autónoma",
     "Ninguna formalidad: basta un acuerdo verbal del Alcalde, sin expediente previo ni trámite de información pública"
    ],
    "antes": "Que se acredite el interés público de la cesión y, en su caso, se dé cuenta a la autoridad competente de la Comunidad Autónoma",
    "ahora": "Que se acredite el interés público de la cesión y, en su caso, se dé cuenta a la autoridad competente de la Comunidad Autónoma",
    "nota": "La explicación añade la norma aragonesa sobre cesiones gratuitas y el aviso de Zaragoza; se alargan los distractores; la clave no cambia."
   },
   {
    "tema": 5,
    "q": "Según el art. 22.1 a), cuando deba requerirse al interesado para subsanar deficiencias, el plazo máximo para resolver podrá suspenderse por el tiempo que medie entre:",
    "options": [
     "El inicio y el fin de la tramitación de urgencia acordada por el órgano competente",
     "La firma de la resolución y su notificación efectiva al interesado",
     "La notificación del requerimiento y su efectivo cumplimiento, o el plazo concedido",
     "La presentación de la solicitud y su anotación en el registro electrónico"
    ],
    "antes": "La notificación del requerimiento y su efectivo cumplimiento, o el plazo concedido",
    "ahora": "La notificación del requerimiento y su efectivo cumplimiento, o el plazo concedido",
    "nota": "El enunciado dice «podrá suspenderse», como el art. 22.1, en lugar de «se suspende»; se alargan los distractores para que la clave no se delate por la longitud."
   },
   {
    "tema": 5,
    "q": "Según el art. 22.1 e), cuando deban realizarse pruebas técnicas o análisis contradictorios propuestos por los interesados, el plazo máximo para resolver podrá suspenderse durante:",
    "options": [
     "El tiempo necesario para la incorporación de los resultados al expediente",
     "Un plazo fijo de treinta días naturales, contados desde que se acuerde su práctica",
     "Un máximo de tres meses, transcurrido el cual proseguirá el procedimiento",
     "El plazo que fije el interesado al proponer las pruebas, sin límite máximo"
    ],
    "antes": "El tiempo necesario para la incorporación de los resultados al expediente",
    "ahora": "El tiempo necesario para la incorporación de los resultados al expediente",
    "nota": "El enunciado dice «podrá suspenderse», como el art. 22.1; se cambian los distractores por plazos del mismo tipo."
   },
   {
    "tema": 5,
    "q": "Según el art. 22.1 c) de la Ley 39/2015, el plazo máximo para resolver podrá suspenderse cuando exista un procedimiento no finalizado en el ámbito de la Unión Europea que:",
    "options": [
     "Haya sido iniciado por la Comisión Europea hace más de un año",
     "Afecte a una empresa con domicilio social fuera del territorio español",
     "Condicione directamente el contenido de la resolución de que se trate",
     "Se tramite ante las autoridades de otro Estado miembro de la Unión Europea"
    ],
    "antes": "Condicione directamente el contenido de la resolución de que se trate",
    "ahora": "Condicione directamente el contenido de la resolución de que se trate",
    "nota": "El enunciado dice «podrá suspenderse», como el art. 22.1; se alargan los distractores."
   },
   {
    "tema": 5,
    "q": "Según el art. 22.1 f) de la Ley 39/2015, el plazo máximo para resolver podrá suspenderse cuando se inicien negociaciones con vistas a la conclusión de un pacto o convenio, en los términos del:",
    "options": [
     "Artículo 100 de la Ley 39/2015",
     "Artículo 39 de la Ley 39/2015",
     "Artículo 21 de la Ley 39/2015",
     "Artículo 86 de la Ley 39/2015"
    ],
    "antes": "Artículo 86 de la Ley 39/2015",
    "ahora": "Artículo 86 de la Ley 39/2015",
    "nota": "El enunciado dice «podrá suspenderse», como el art. 22.1."
   },
   {
    "tema": 5,
    "q": "Según el art. 22.1 g) de la Ley 39/2015, el plazo máximo para resolver podrá suspenderse cuando para resolver el procedimiento sea indispensable la obtención de un previo pronunciamiento de:",
    "options": [
     "Un órgano jurisdiccional",
     "El Defensor del Pueblo",
     "El Consejo de Ministros",
     "La Fiscalía General del Estado"
    ],
    "antes": "Un órgano jurisdiccional",
    "ahora": "Un órgano jurisdiccional",
    "nota": "El enunciado dice «podrá suspenderse», como el art. 22.1."
   },
   {
    "tema": 6,
    "q": "¿Cuál de las siguientes características es predicable de los actos anulables?",
    "options": [
     "Sólo afecta a los interesados.",
     "No producen efectos.",
     "Producen ineficacia por sí mismos.",
     "No puede ser convalidado."
    ],
    "antes": "Sólo afecta a los interesados.",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: clave doctrinal sin base en la LPAC y explicación inexacta; lo literal ya está en otras preguntas."
   },
   {
    "tema": 6,
    "q": "¿Cuál de las siguientes características no es predicable de los actos nulos?",
    "options": [
     "Producen ineficacia por sí mismos.",
     "Sólo afecta a los interesados.",
     "No puede ser convalidado.",
     "No producen efectos."
    ],
    "antes": "Sólo afecta a los interesados.",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: depende de caracterizaciones doctrinales que chocan con la letra del art. 39.1 LPAC; lo literal ya está en otras preguntas."
   },
   {
    "tema": 6,
    "q": "Según el art. 49.1 a), la nulidad o anulabilidad de un acto no implicará la de los sucesivos actos en el procedimiento que sean:",
    "options": [
     "Dictados por el mismo funcionario",
     "Independientes del primero",
     "Posteriores a la resolución final",
     "Idénticos al primero"
    ],
    "antes": "Independientes del primero",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: cita una letra inexistente del art. 49 y, corregida, repetiría la 6-203."
   },
   {
    "tema": 6,
    "q": "Según el art. 49.1 b), la nulidad o anulabilidad en parte del acto administrativo no implicará la de las partes del mismo independientes de aquella, salvo que:",
    "options": [
     "La Administración lo decida discrecionalmente",
     "El acto tenga más de tres páginas",
     "La parte viciada sea de tal importancia que sin ella el acto administrativo no hubiera sido dictado",
     "El interesado sea una persona jurídica"
    ],
    "antes": "La parte viciada sea de tal importancia que sin ella el acto administrativo no hubiera sido dictado",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: cita una letra inexistente (es el art. 49.2) y, corregida, repetiría la 6-206."
   },
   {
    "tema": 6,
    "q": "¿Qué principio recoge el art. 49 de la Ley 39/2015 en relación con la nulidad parcial de un acto?",
    "options": [
     "Cualquier defecto parcial anula la totalidad del acto sin excepción",
     "La nulidad de una parte del acto no afecta a las partes independientes, salvo que sea esencial para la existencia del acto",
     "Solo los tribunales pueden declarar nulidades parciales",
     "La nulidad parcial nunca es posible en Derecho Administrativo"
    ],
    "antes": "La nulidad de una parte del acto no afecta a las partes independientes, salvo que sea esencial para la existencia del acto",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: fuente con una letra inexistente, clave parafraseada y, corregida, repetida con la 6-205 y la 6-206."
   },
   {
    "tema": 6,
    "q": "Según el principio general del art. 52, el acto de convalidación produce efecto:",
    "options": [
     "Solo si lo aprueba el Consejo de Estado",
     "Nunca, la convalidación es meramente declarativa sin efectos",
     "Desde la fecha en que se produce, salvo que se disponga lo contrario mediante eficacia retroactiva favorable",
     "Siempre con efectos retroactivos absolutos"
    ],
    "antes": "Desde la fecha en que se produce, salvo que se disponga lo contrario mediante eficacia retroactiva favorable",
    "ahora": "(pregunta retirada)",
    "nota": "Retirada: fuente y explicación equivocadas (es el art. 52.2) y, corregida, repetiría la 6-221."
   }
  ]
 },
 {
  "id": "2026-10-23-correccion-7",
  "fecha": "2026-10-23",
  "tipo": "correccion",
  "titulo": "Correcciones de la segunda ronda de revisión",
  "texto": "Revisión independiente del banco contra el texto consolidado del BOE y del BOA: preguntas que citaban un artículo equivocado o un inciso anulado por el Tribunal Constitucional, explicaciones inexactas, opciones que delataban la respuesta por su longitud y preguntas repetidas (se archivan, no se borran).",
  "preguntas": [
   {
    "tema": 14,
    "q": "En la redacción vigente del art. 26 LBRL, dada por la Ley 27/2013, ¿se contempla que la Comunidad Autónoma dispense a un municipio de prestar los servicios mínimos obligatorios?",
    "options": [
     "Sí, cuando por sus características peculiares resulte de imposible o muy difícil cumplimiento prestarlos",
     "Sí, pero solo a los municipios de menos de 5.000 habitantes y previo informe de la Diputación",
     "No; esa dispensa la preveía el art. 26.2, y la Ley 27/2013 la suprimió al dar nueva redacción al artículo",
     "No; el art. 26 solo permite que la dispense el Estado, a propuesta de la Diputación provincial"
    ],
    "antes": "Sí, la Comunidad Autónoma puede dispensar de la obligación de prestar servicios mínimos cuando su cumplimiento resulte de muy difícil o imposible cumplimiento",
    "ahora": "No; esa dispensa la preveía el art. 26.2, y la Ley 27/2013 la suprimió al dar nueva redacción al artículo",
    "nota": "Se reconvierte: el art. 26 LBRL vigente ya no prevé la dispensa autonómica de los servicios mínimos, suprimida en 2013. Se avisa del art. 45 de la ley aragonesa."
   },
   {
    "tema": 14,
    "q": "Según el art. 26.2 de la LBRL, la forma de prestación que propone la Diputación para coordinar determinados servicios en los municipios de menos de 20.000 habitantes requiere la conformidad de:",
    "options": [
     "La Delegación del Gobierno en la Comunidad Autónoma",
     "La Comunidad Autónoma que ejerza la tutela financiera",
     "La mayoría de los municipios de la provincia",
     "Los municipios afectados por esa coordinación"
    ],
    "antes": "La forma de prestación de los servicios, consistente en la prestación directa por la Diputación o la implantación de fórmulas de gestión compartida",
    "ahora": "Los municipios afectados por esa coordinación",
    "nota": "Se corrige el artículo (26.2, no 26.3) y se quita la mención al Ministerio, anulada por la STC 111/2016; ahora pregunta de quién se necesita la conformidad."
   },
   {
    "tema": 14,
    "q": "Según el art. 26.2 de la LBRL, en los municipios con población inferior a 20.000 habitantes, es la Diputación Provincial o entidad equivalente la que coordina la prestación de determinados servicios mínimos, mediante:",
    "options": [
     "La cesión de la titularidad de los servicios a la Administración General del Estado",
     "La privatización obligatoria de todos los servicios afectados mediante contratos de concesión",
     "La prestación directa por la Diputación o fórmulas de gestión compartida, como consorcios o mancomunidades",
     "La supresión de dichos servicios en los municipios afectados, sin sustitución alguna"
    ],
    "antes": "Fórmulas de prestación unificada o supramunicipal, para reducir los costes efectivos de los servicios",
    "ahora": "La prestación directa por la Diputación o fórmulas de gestión compartida, como consorcios o mancomunidades",
    "nota": "La opción correcta pasa a recoger las formas de prestación que cita el art. 26.2 (prestación directa por la Diputación o gestión compartida)."
   },
   {
    "tema": 18,
    "q": "Según el art. 57.5 del TREBEP, se puede eximir del requisito de la nacionalidad, por razones de interés general, para el acceso a la condición de personal funcionario mediante:",
    "options": [
     "Ley de las Cortes Generales o de las Asambleas Legislativas de las Comunidades Autónomas",
     "Convenio internacional ratificado por España sin necesidad de ley",
     "Real decreto del Consejo de Ministros, previo informe del Consejo de Estado",
     "Resolución de la Secretaría de Estado de Función Pública, publicada en el BOE"
    ],
    "antes": "Ley de las Cortes Generales o de las Asambleas Legislativas de las Comunidades Autónomas",
    "ahora": "Ley de las Cortes Generales o de las Asambleas Legislativas de las Comunidades Autónomas",
    "nota": "Se corrige el artículo (57.5, no 57.4) y se quita del enunciado una excepción que no está en la ley."
   },
   {
    "tema": 18,
    "q": "Según el art. 61.6 del TREBEP, los sistemas selectivos de funcionarios de carrera serán los de oposición y:",
    "options": [
     "Concurso de valoración de méritos, como sistema general y ordinario",
     "Concurso-oposición; el concurso solo cabe por ley, con carácter excepcional",
     "Sorteo público entre los aspirantes que reúnan los requisitos exigidos",
     "Nombramiento directo por la autoridad competente, previa entrevista"
    ],
    "antes": "Concurso-oposición, con las fases que se establezcan reglamentariamente",
    "ahora": "Concurso-oposición; el concurso solo cabe por ley, con carácter excepcional",
    "nota": "Se corrige el artículo (61.6, no 61.2) y se quita de la opción correcta un inciso que no está en la ley."
   },
   {
    "tema": 18,
    "q": "Según el art. 55.2 del TREBEP, las Administraciones Públicas seleccionarán a su personal, entre otros principios, con arreglo a los de:",
    "options": [
     "Confidencialidad y reserva de las convocatorias",
     "Proporcionalidad retributiva y jerarquía funcional",
     "Antigüedad exclusiva del solicitante",
     "Publicidad, transparencia e imparcialidad"
    ],
    "antes": "Publicidad, transparencia y objetividad",
    "ahora": "Publicidad, transparencia e imparcialidad",
    "nota": "La opción correcta pasa a «Publicidad, transparencia e imparcialidad», que sí están en el art. 55.2, y se cambia un distractor en parte cierto."
   },
   {
    "tema": 18,
    "q": "Según el art. 62.1 del TREBEP, la condición de funcionario de carrera se adquiere por el cumplimiento sucesivo de los requisitos de superar el proceso selectivo, ser nombrado por el órgano competente, y además:",
    "options": [
     "Superar un período de prácticas tutorizado de seis meses tras la publicación del nombramiento",
     "Superar un examen médico adicional posterior al nombramiento, ante el servicio de prevención",
     "Realizar el acto de acatamiento de la Constitución y tomar posesión dentro del plazo establecido",
     "Obtener la aprobación expresa de una autoridad distinta a la que efectuó el nombramiento"
    ],
    "antes": "Prestar juramento o promesa y acatamiento a la Constitución y al resto del ordenamiento jurídico, y tomar posesión dentro del plazo establecido",
    "ahora": "Realizar el acto de acatamiento de la Constitución y tomar posesión dentro del plazo establecido",
    "nota": "La opción correcta pasa a recoger el «acto de acatamiento» del art. 62.1.c), sin el juramento o promesa que la ley no menciona."
   },
   {
    "tema": 18,
    "q": "Según el art. 59.1 del TREBEP, en las ofertas de empleo público se reservará un cupo no inferior al:",
    "options": [
     "Cinco por ciento de las vacantes",
     "Siete por ciento de las vacantes",
     "Quince por ciento de las vacantes",
     "Tres por ciento de las vacantes"
    ],
    "antes": "Siete por ciento de las vacantes para personas con discapacidad",
    "ahora": "Siete por ciento de las vacantes",
    "nota": "La explicación avisa de que en Aragón, también en Zaragoza, el cupo mínimo es del 8 % (art. 27.2 de la Ley 5/2019). La respuesta según el TREBEP sigue siendo el 7 %."
   },
   {
    "tema": 18,
    "q": "Según el art. 59.1 del TREBEP, de ese cupo del siete por ciento, al menos el dos por ciento de las plazas ofertadas debe reservarse para personas que acrediten discapacidad:",
    "options": [
     "Sensorial auditiva únicamente",
     "Visual exclusivamente",
     "Intelectual",
     "Física exclusivamente"
    ],
    "antes": "Intelectual",
    "ahora": "Intelectual",
    "nota": "La explicación avisa de que en Aragón el cupo mínimo es del 8 %, con un 2 % para discapacidad intelectual y un 1 % para enfermedad mental. La respuesta no cambia."
   },
   {
    "tema": 19,
    "q": "Según el art. 104.1 LBRL, el número, características y retribuciones del personal eventual de las entidades locales:",
    "options": [
     "Los determina el Pleno al comienzo del mandato, y solo pueden modificarse al aprobar los presupuestos anuales",
     "Los determina el Pleno cuando lo considere oportuno, sin más límite que el número máximo de puestos del art. 104 bis",
     "Los fija el Alcalde mediante decreto al comienzo del mandato, dando cuenta al Pleno en la sesión siguiente",
     "Los determina el Pleno en la sesión de aprobación de la liquidación del Presupuesto de cada ejercicio"
    ],
    "antes": "Los determina el Pleno de cada Corporación al comienzo de su mandato, y solo pueden modificarse con motivo de la aprobación de los Presupuestos anuales",
    "ahora": "Los determina el Pleno al comienzo del mandato, y solo pueden modificarse al aprobar los presupuestos anuales",
    "nota": "Se acota el enunciado al art. 104.1 LBRL, la explicación avisa de que en Zaragoza decide el Gobierno de Zaragoza y se cambia un distractor que era la regla de Zaragoza."
   },
   {
    "tema": 3,
    "q": "Según el art. 41.a) EAA, ¿qué corresponde a las Cortes de Aragón?",
    "options": [
     "La elección, de entre sus miembros, del Presidente de Aragón",
     "El nombramiento del Presidente del Tribunal Superior de Justicia",
     "La elección del Justicia de Aragón, sin intervención en su nombramiento ni cese",
     "El nombramiento y la separación de los Consejeros del Gobierno de Aragón"
    ],
    "antes": "La elección, de entre sus miembros, del Presidente de Aragón",
    "ahora": "La elección, de entre sus miembros, del Presidente de Aragón",
    "nota": "Se cambia un distractor que también era función de las Cortes (designación de Senadores, art. 41.c). La clave no cambia."
   },
   {
    "tema": 2,
    "q": "Según el apartado 2.3 (Normativa Nacional) del II Plan de Igualdad de Zaragoza, ¿qué norma introdujo apartados relativos al Registro de Planes de Igualdad y a la igualdad retributiva, desarrollados después por el RD 901/2020 y el RD 902/2020, ambos de 13 de octubre?",
    "options": [
     "El Real Decreto-ley 6/2019, de 1 de marzo",
     "La Ley 15/2022, de 12 de julio",
     "La Ley Orgánica 10/2022, de 6 de septiembre",
     "La Ley Orgánica 3/2007, de 22 de marzo"
    ],
    "antes": "La Ley 6/2019, de 1 de marzo",
    "ahora": "El Real Decreto-ley 6/2019, de 1 de marzo",
    "nota": "La opción correcta pasa a «Real Decreto-ley 6/2019», que es lo que dice el Plan; antes decía «Ley 6/2019»."
   },
   {
    "tema": 14,
    "q": "Según el art. 13.1 de la LBRL, la creación o supresión de municipios, así como la alteración de términos municipales, se regula por:",
    "options": [
     "Un decreto del Consejo de Ministros sin más intervención",
     "Exclusivamente el Código Civil",
     "El Reglamento de Población y Demarcación Territorial del Estado",
     "La legislación de las Comunidades Autónomas sobre régimen local"
    ],
    "antes": "La legislación de las Comunidades Autónomas sobre régimen local",
    "ahora": "La legislación de las Comunidades Autónomas sobre régimen local",
    "nota": "Se corrige el artículo citado (13.1, no 12.2)."
   },
   {
    "tema": 14,
    "q": "Según el art. 126.2 de la LBRL, la Junta de Gobierno Local de un municipio de gran población está integrada por el Alcalde y un número de concejales:",
    "options": [
     "No inferior a la mitad del Pleno, en todo caso",
     "No superior a un tercio del número legal de miembros del Pleno, además de los concejales",
     "Igual al número total de concejales de la oposición",
     "Fijado libremente sin ningún límite legal"
    ],
    "antes": "No superior a un tercio del número legal de miembros del Pleno, además de los concejales",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: la clave tenía un error («además de los concejales») y, corregida, repetiría la pregunta sobre el art. 126.2 que ya está en el banco."
   },
   {
    "tema": 14,
    "q": "Según el art. 127.1 de la LBRL, también corresponde a la Junta de Gobierno Local, entre otras, la competencia como órgano de contratación respecto de los contratos:",
    "options": [
     "De cualquier cuantía sin límite alguno, reservado únicamente a este órgano",
     "Exclusivamente de suministro de material de oficina",
     "Solo de importe inferior a mil euros",
     "De cuantía relevante fijada por la legislación de contratos del sector público para municipios de gran población"
    ],
    "antes": "De cuantía relevante fijada por la legislación de contratos del sector público para municipios de gran población",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: pregunta por el art. 127.1.f) LBRL, derogado en 2007; la competencia de contratación de la Junta de Gobierno Local ya está en otras preguntas."
   },
   {
    "tema": 14,
    "q": "Según el art. 14 de la LBRL, corresponde a los municipios interesados, además de otras Administraciones, la iniciativa para:",
    "options": [
     "La alteración de términos municipales, que en todo caso debe ser resuelta por la Comunidad Autónoma",
     "Aprobar tratados internacionales de límites fronterizos",
     "Disolver la Diputación Provincial",
     "Modificar el Estatuto de Autonomía de la Comunidad correspondiente"
    ],
    "antes": "La alteración de términos municipales, que en todo caso debe ser resuelta por la Comunidad Autónoma",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: atribuía al art. 14 LBRL una regla sobre la iniciativa que no está ni en el art. 14 ni en el 13."
   },
   {
    "tema": 14,
    "q": "Según el art. 27.1 de la LBRL, la delegación de competencias del Estado o de las Comunidades Autónomas en los municipios habrá de mejorar la eficiencia de la gestión pública, ser acorde con la legislación de estabilidad presupuestaria y sostenibilidad financiera y, además:",
    "options": [
     "Contribuir a eliminar duplicidades administrativas",
     "Alcanzar una mayor participación ciudadana en la gestión",
     "Suprimir la responsabilidad de la Administración delegante",
     "Eliminar cualquier control posterior sobre la competencia delegada"
    ],
    "antes": "Mejore la eficiencia de la gestión pública y se alcance una mayor participación ciudadana",
    "ahora": "Contribuir a eliminar duplicidades administrativas",
    "nota": "Se reconvierte sobre la redacción vigente del art. 27.1 LBRL; la pregunta usaba la de 1985."
   },
   {
    "tema": 14,
    "q": "Según el art. 27.6 de la LBRL, la delegación de competencias debe ir acompañada, en todo caso, de:",
    "options": [
     "La supresión simultánea de una competencia estatal equivalente",
     "La correspondiente financiación, con dotación presupuestaria adecuada y suficiente",
     "Una reducción proporcional de otras competencias propias del municipio",
     "Ninguna dotación adicional, entendiéndose que el municipio la asume gratuitamente"
    ],
    "antes": "La correspondiente financiación, para lo cual será necesaria la existencia de dotación presupuestaria adecuada y suficiente",
    "ahora": "La correspondiente financiación, con dotación presupuestaria adecuada y suficiente",
    "nota": "Se corrige el artículo citado (27.6, no 27.2)."
   },
   {
    "tema": 14,
    "q": "Según el art. 27.3 de la LBRL, la disposición o el acuerdo de delegación de competencias debe determinar, entre otros extremos, el alcance, contenido, condiciones y duración de esta, que no podrá ser inferior a:",
    "options": [
     "Un año",
     "Diez años",
     "Cinco años",
     "Seis meses"
    ],
    "antes": "Cinco años",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: citaba mal el artículo y, corregida, repetiría la pregunta sobre la duración mínima de la delegación que ya está en el banco."
   },
   {
    "tema": 14,
    "q": "Según el art. 122.5 de la LBRL, las funciones del secretario general del Pleno de un municipio de gran población quedan reservadas a:",
    "options": [
     "Funcionarios de Administración local con habilitación de carácter nacional",
     "Concejales que el Pleno elija de entre sus miembros por mayoría absoluta",
     "Personal eventual de confianza nombrado libremente por el Alcalde",
     "Funcionarios de carrera del propio Ayuntamiento que designe la Junta de Gobierno Local"
    ],
    "antes": "El reglamento orgánico municipal",
    "ahora": "Funcionarios de Administración local con habilitación de carácter nacional",
    "nota": "Se reconvierte: la premisa (el Pleno elige a los presidentes de las comisiones y al secretario) no está en el art. 122.5; ahora pregunta a quién están reservadas las funciones del secretario general del Pleno."
   },
   {
    "tema": 10,
    "q": "En el Ayuntamiento de Zaragoza, ¿a qué órgano corresponde la aprobación del inventario de bienes y de sus rectificaciones anuales?",
    "options": [
     "A la Comunidad Autónoma respectiva.",
     "Al Gobierno de Zaragoza.",
     "A la Comisión Especial de Cuentas.",
     "Al Pleno."
    ],
    "antes": "Al Pleno.",
    "ahora": "Al Gobierno de Zaragoza.",
    "nota": "Se reconvierte en una pregunta sobre Zaragoza: el inventario y sus rectificaciones anuales los aprueba el Gobierno de Zaragoza, no el Pleno."
   },
   {
    "tema": 10,
    "q": "¿A quién le corresponde realizar la rectificación del Inventario de bienes de una entidad local?",
    "options": [
     "Al Pleno.",
     "A la Comunidad Autónoma respectiva.",
     "Al Alcalde.",
     "A la Comisión de Gobierno."
    ],
    "antes": "Al Pleno.",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: repetía la regla general del inventario (ya en la 10-253) sin valer para Zaragoza."
   },
   {
    "tema": 10,
    "q": "¿A quién le corresponde realizar la comprobación del Inventario de bienes de una entidad local?",
    "options": [
     "Al Alcalde.",
     "Al Pleno.",
     "A la Comisión de Gobierno.",
     "A la Comunidad Autónoma respectiva."
    ],
    "antes": "Al Pleno.",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: repetía la regla general del inventario (ya en la 10-253) y el órgano de la comprobación en Zaragoza no está claro en la ley."
   },
   {
    "tema": 10,
    "q": "¿Qué órgano es, típicamente, el competente para aprobar la incorporación de un nuevo bien al inventario municipal tras su adquisición?",
    "options": [
     "Un notario, sin intervención administrativa alguna",
     "El Tribunal de Cuentas, en todos los casos sin excepción",
     "El Registro de la Propiedad, de forma automática",
     "El Pleno de la Corporación, al que corresponde acordar la aprobación del inventario ya formado, su rectificación y su comprobación"
    ],
    "antes": "El Pleno de la Corporación, al que corresponde acordar la aprobación del inventario ya formado, su rectificación y su comprobación",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: enunciado impreciso («típicamente») con una clave que no vale para Zaragoza ni es exacta en Aragón."
   },
   {
    "tema": 10,
    "q": "Según el art. 34 RBEL, ¿qué órgano es competente para acordar la aprobación del inventario, su rectificación y comprobación?",
    "options": [
     "El Pleno de la Corporación local",
     "La Comisión Especial de Cuentas",
     "El Secretario de la Corporación",
     "El Alcalde-Presidente, por delegación permanente"
    ],
    "antes": "El Pleno de la Corporación local",
    "ahora": "El Pleno de la Corporación local",
    "nota": "Se cambia un distractor que era la respuesta correcta en Zaragoza (la Junta de Gobierno Local) y la explicación avisa de que allí aprueba el inventario el Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "El acuerdo de cesión gratuita de bienes de una entidad local, según el art. 110.1 RBEL, requiere...",
    "options": [
     "Mayoría absoluta del número legal de miembros de la Corporación",
     "Mayoría simple de los miembros asistentes a la sesión",
     "Dos tercios del número de hecho de miembros de la Corporación",
     "Unanimidad de los miembros presentes de la Corporación"
    ],
    "antes": "Mayoría absoluta del número legal de miembros de la Corporación",
    "ahora": "Mayoría absoluta del número legal de miembros de la Corporación",
    "nota": "La explicación añade la norma aragonesa (art. 119.2 RBASO) y avisa de que en Zaragoza la cesión gratuita corresponde al Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "Las cesiones de parcelas a vecinos jornaleros a que se refiere el art. 116.2 RBEL deben ser acordadas por...",
    "options": [
     "La Diputación Provincial, a propuesta del Ayuntamiento interesado",
     "El Ayuntamiento Pleno, por mayoría absoluta del número legal de miembros de la Corporación",
     "El Ayuntamiento Pleno, por mayoría simple de los miembros presentes en la sesión",
     "El Alcalde mediante decreto, dando cuenta al Pleno en la sesión siguiente"
    ],
    "antes": "El Ayuntamiento Pleno, con el voto favorable de la mayoría absoluta del número legal de miembros de la Corporación",
    "ahora": "El Ayuntamiento Pleno, por mayoría absoluta del número legal de miembros de la Corporación",
    "nota": "Se cambia un distractor que era la regla de Zaragoza (la Junta de Gobierno Local) y la explicación avisa de que allí decide el Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "Según el art. 102 RBEL, la cesión por cualquier título del aprovechamiento de bienes comunales deberá ser acordada por:",
    "options": [
     "La Diputación Provincial, por delegación del municipio titular",
     "El Pleno de la Corporación, por mayoría absoluta del número legal de miembros",
     "El Pleno de la Corporación, por mayoría simple de los miembros presentes",
     "El Secretario de la Corporación, previo informe del Interventor"
    ],
    "antes": "El Pleno de la Corporación, con el voto favorable de la mayoría absoluta del número legal de miembros",
    "ahora": "El Pleno de la Corporación, por mayoría absoluta del número legal de miembros",
    "nota": "Se cambian dos distractores que se acercaban a la regla de Zaragoza y la explicación avisa de que allí decide el Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "¿Qué órgano municipal ostenta, con carácter general, las competencias reglamentarias de organización interna en materia de gestión y custodia del patrimonio local, sin perjuicio de las competencias del Pleno en materia de disposición?",
    "options": [
     "El Consejo de Estado",
     "El Juzgado de Primera Instancia del partido judicial",
     "El Defensor del Pueblo",
     "El Alcalde, en su función de dirección de la administración municipal"
    ],
    "antes": "El Alcalde, en su función de dirección de la administración municipal",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: atribuía al Alcalde, sin base literal, la gestión del patrimonio, que en Zaragoza es del Gobierno de Zaragoza."
   }
  ]
 },
 {
  "id": "2026-10-22-correccion-6",
  "fecha": "2026-10-22",
  "tipo": "correccion",
  "titulo": "Función pública local, competencias municipales y otros ajustes",
  "texto": "Preguntas de los temas 14, 15, 17 y 19 que daban por vigentes reglas superadas por el TREBEP (composición de los tribunales, concurso, aprobados por encima de las plazas), que no tenían en cuenta que en Zaragoza las bases de selección las aprueba el Gobierno de Zaragoza, o que usaban redacciones antiguas de la LBRL.",
  "preguntas": [
   {
    "tema": 19,
    "q": "Conforme al artículo 2 del RD 896/1991, el ingreso en la Función Pública Local se realizará, con carácter general, a través del sistema de:",
    "options": [
     "Concurso-oposición.",
     "Oposición.",
     "Concurso libre reservado a promoción interna.",
     "Concurso."
    ],
    "antes": "Oposición.",
    "ahora": "Oposición.",
    "nota": "Se completa la explicación: el TREBEP solo admite el concurso por ley y con carácter excepcional."
   },
   {
    "tema": 19,
    "q": "Según el artículo 2 del RD 896/1991 (desplazado en cuanto al concurso por el art. 61.6 TREBEP, que solo lo admite en virtud de ley y con carácter excepcional), la utilización del sistema de concurso-oposición o de concurso, en lugar de la oposición, procede cuando sea más adecuada por razón de:",
    "options": [
     "El grado de complejidad técnica de las pruebas selectivas previstas en las bases.",
     "La urgencia en la cobertura de las plazas apreciada por el Pleno.",
     "La naturaleza de las plazas o de las funciones a desempeñar.",
     "El número de plazas convocadas y la población del municipio."
    ],
    "antes": "La naturaleza de las plazas o de las funciones a desempeñar.",
    "ahora": "La naturaleza de las plazas o de las funciones a desempeñar.",
    "nota": "Se aclara en el enunciado que el TREBEP solo admite el concurso por ley y con carácter excepcional."
   },
   {
    "tema": 19,
    "q": "El artículo 4.f) del RD 896/1991 dispone que actuará como Presidente del Tribunal «el de la Corporación o miembro de la misma en quien delegue». Según el artículo 60.2 del TREBEP, ¿puede hoy el Alcalde o un concejal formar parte de un órgano de selección?",
    "options": [
     "No, porque el personal de elección o de designación política no puede formar parte de ellos.",
     "Sí, pero solo para ejercer la presidencia, con voz y sin voto, en nombre de la Corporación.",
     "Sí, siempre que las bases de la convocatoria lo prevean expresamente y lo motiven.",
     "Sí, siempre que los miembros electos no superen un tercio de los integrantes del Tribunal."
    ],
    "antes": "El de la Corporación o miembro de la misma en quien delegue.",
    "ahora": "No, porque el personal de elección o de designación política no puede formar parte de ellos.",
    "nota": "Se reconvierte: el TREBEP prohíbe que cargos electos formen parte de los tribunales, así que el Alcalde ya no puede presidirlos."
   },
   {
    "tema": 19,
    "q": "El artículo 4.f) del RD 896/1991 dispone que entre los Vocales del Tribunal «figurará un representante de la Comunidad Autónoma». Conforme al artículo 60.3 del TREBEP, ¿puede hoy un vocal formar parte del tribunal de selección de un ayuntamiento en representación de la Comunidad Autónoma?",
    "options": [
     "Sí, cuando lo prevean las bases y lo proponga el Instituto Aragonés de Administración Pública.",
     "Sí, aunque solo con voz y sin voto, para velar por la legalidad del proceso.",
     "No, porque la pertenencia a los órganos de selección es siempre a título individual.",
     "Sí, siempre que sea funcionario de carrera y tenga la titulación exigida."
    ],
    "antes": "Un representante de la Comunidad Autónoma.",
    "ahora": "No, porque la pertenencia a los órganos de selección es siempre a título individual.",
    "nota": "Se reconvierte: según el TREBEP, nadie forma parte de un tribunal en representación de otro, tampoco de la Comunidad Autónoma."
   },
   {
    "tema": 19,
    "q": "Conforme al artículo 7 del RD 896/1991, con la excepción que hoy añade el artículo 61.8 del TREBEP para cuando la propia convocatoria lo prevea, no podrá aprobarse ni declararse que ha superado las pruebas selectivas:",
    "options": [
     "Un número de aspirantes inferior al de las plazas convocadas.",
     "Un aspirante que no haya obtenido la máxima calificación en el ejercicio práctico.",
     "Un aspirante que hubiera obtenido igual puntuación que otro en el último ejercicio.",
     "Un número de aspirantes superior al de las plazas convocadas."
    ],
    "antes": "Un número de aspirantes superior al de las plazas convocadas.",
    "ahora": "Un número de aspirantes superior al de las plazas convocadas.",
    "nota": "Se aclara que el TREBEP permite aprobar más aspirantes que plazas si la convocatoria lo prevé."
   },
   {
    "tema": 19,
    "q": "En el Ayuntamiento de Zaragoza, ¿a qué órgano corresponde aprobar las bases de las convocatorias de selección de personal a las que se refiere el artículo 5 del RD 896/1991?",
    "options": [
     "El Presidente de la Corporación.",
     "El Tribunal calificador, una vez constituido.",
     "El Gobierno de Zaragoza, que es su Junta de Gobierno Local.",
     "El Pleno."
    ],
    "antes": "El Pleno.",
    "ahora": "El Gobierno de Zaragoza, que es su Junta de Gobierno Local.",
    "nota": "Se corrige: en Zaragoza las bases de selección las aprueba el Gobierno de Zaragoza (Junta de Gobierno Local), no el Pleno."
   },
   {
    "tema": 19,
    "q": "De acuerdo con la disposición adicional segunda del RD 896/1991, la selección del personal laboral fijo de nuevo ingreso de las Entidades Locales se hará por:",
    "options": [
     "Concurso, concurso-oposición u oposición libre, teniendo en cuenta las condiciones que requiera la naturaleza de los puestos de trabajo a desempeñar.",
     "Exclusivamente por concurso de traslados entre personal laboral de otras Administraciones.",
     "Oposición libre en todo caso, con bases aprobadas por el Presidente de la Corporación.",
     "Convocatoria pública resuelta por el Tribunal mediante libre designación."
    ],
    "antes": "Concurso, concurso-oposición u oposición libre, de conformidad con las bases aprobadas por el Pleno de la Corporación.",
    "ahora": "Concurso, concurso-oposición u oposición libre, teniendo en cuenta las condiciones que requiera la naturaleza de los puestos de trabajo a desempeñar.",
    "nota": "Se quita de la opción correcta que las bases las aprueba el Pleno, que ya no es así."
   },
   {
    "tema": 19,
    "q": "Según el artículo 102 de la LBRL, las bases de las pruebas de selección y de los concursos para la provisión de puestos de trabajo en las entidades locales se aprueban, y su convocatoria corresponde, a:",
    "options": [
     "La Junta de Gobierno Local, correspondiendo el nombramiento al Pleno",
     "El Presidente de la Corporación, a quien el tribunal elevará la relación de aprobados para efectuar el nombramiento",
     "El Pleno de la Corporación, que también efectúa los nombramientos",
     "El Secretario de la Corporación, por su condición de funcionario con habilitación de carácter nacional"
    ],
    "antes": "El Presidente de la Corporación, a quien el tribunal elevará la relación de aprobados para efectuar el nombramiento",
    "ahora": "El Presidente de la Corporación, a quien el tribunal elevará la relación de aprobados para efectuar el nombramiento",
    "nota": "Se acota la pregunta al art. 102 LBRL y se explica que en Zaragoza las bases las aprueba el Gobierno de Zaragoza."
   },
   {
    "tema": 14,
    "q": "Según el art. 25.2 de la LBRL, el municipio ejerce competencias propias en materia de protección de la salubridad pública y, entre otras, en:",
    "options": [
     "La regulación del sistema nacional de salud",
     "Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística",
     "La homologación de títulos universitarios de medicina",
     "La gestión de hospitales de titularidad estatal"
    ],
    "antes": "Ordenación, gestión, ejecución y disciplina urbanística",
    "ahora": "Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística",
    "nota": "Se actualiza la opción correcta a la redacción vigente del art. 25.2.a) LBRL: «Urbanismo: planeamiento, gestión, ejecución y disciplina urbanística»."
   },
   {
    "tema": 14,
    "q": "¿Qué relación existe entre una ordenanza reguladora del uso de las playas fluviales o zonas de baño municipales y las competencias en materia de protección civil?",
    "options": [
     "Puede desarrollar, entre otras, la competencia propia municipal de protección civil (art. 25.2 f LBRL), estableciendo normas de seguridad y uso",
     "Es competencia exclusiva de Costas, sin intervención municipal",
     "Solo puede aprobarse mediante decreto autonómico, nunca ordenanza",
     "No guarda relación alguna con la protección civil municipal"
    ],
    "antes": "Puede desarrollar, entre otras, la competencia propia municipal de protección civil y prevención de riesgos (art. 25.2 f LBRL), estableciendo normas de seguridad y uso",
    "ahora": "Puede desarrollar, entre otras, la competencia propia municipal de protección civil (art. 25.2 f LBRL), estableciendo normas de seguridad y uso",
    "nota": "Se quita de la respuesta la «prevención de riesgos», que el art. 25.2.f) LBRL no menciona."
   },
   {
    "tema": 15,
    "q": "Los artículos 69 a 72 de la LBRL, relativos a la información y participación ciudadanas, se ubican dentro de:",
    "options": [
     "El Capítulo IV del Título V, rubricado 'Información y participación ciudadanas'.",
     "El Título Preliminar de la Ley.",
     "El Capítulo I del Título II, rubricado 'Organización'.",
     "El Capítulo V del Título II, rubricado 'Estatuto de los miembros de las Corporaciones locales'."
    ],
    "antes": "El Capítulo IV del Título II, rubricado 'Información y participación ciudadanas'.",
    "ahora": "El Capítulo IV del Título V, rubricado 'Información y participación ciudadanas'.",
    "nota": "Se corrige la ubicación: los arts. 69 a 72 LBRL están en el Capítulo IV del Título V, no del Título II."
   },
   {
    "tema": 17,
    "q": "Según el art. 20.1 del TREBEP, las Administraciones Públicas establecerán sistemas de evaluación del desempeño, que es el procedimiento mediante el cual se mide y valora la conducta profesional y el rendimiento o el logro de:",
    "options": [
     "Titulación académica del funcionario",
     "Resultados",
     "Horas de presencia efectiva en el puesto de trabajo",
     "Antigüedad exclusivamente"
    ],
    "antes": "Resultados",
    "ahora": "Resultados",
    "nota": "Se corrige el enunciado: el TREBEP dice que las Administraciones «establecerán» la evaluación del desempeño, no que «pueden»."
   }
  ]
 },
 {
  "id": "2026-10-22-correccion-5",
  "fecha": "2026-10-22",
  "tipo": "correccion",
  "titulo": "Bienes y servicios locales: normativa aragonesa y Zaragoza",
  "texto": "En Zaragoza, la gestión de los bienes y los servicios locales se rige por la normativa aragonesa (Ley 7/1999 de Administración Local de Aragón y Decreto 347/2002), que desplaza al Reglamento de Bienes estatal de 1986, y por la Ley 10/2017 de capitalidad, que atribuye al Gobierno de Zaragoza buena parte de las decisiones que la norma general da al Pleno. Muchas preguntas de los temas 10 y 11 estaban escritas con la norma estatal: se han corregido explicaciones y respuestas, y se han retirado (archivadas) las que daban cifras estatales que en Aragón son otras, como la concesión máxima de 99 o 75 años (en Aragón, 50) o la permuta con diferencia del 40 % (en Aragón, 50 %).",
  "preguntas": [
   {
    "tema": 10,
    "q": "Según el art. 22.2 l) de la LBRL, corresponde al Pleno municipal:",
    "options": [
     "La gestión diaria del inventario municipal",
     "El nombramiento del personal eventual",
     "La alteración de la calificación jurídica de los bienes de dominio público",
     "La firma de contratos menores de escasa cuantía"
    ],
    "antes": "La alteración de la calificación jurídica de los bienes de dominio público",
    "ahora": "La alteración de la calificación jurídica de los bienes de dominio público",
    "nota": "Se mantiene la respuesta (Pleno, art. 22.2.l LBRL, régimen común) y la explicación añade que en Zaragoza esa competencia es del Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "Según el art. 4.1 del Decreto 347/2002 del Gobierno de Aragón (RBASO), tienen la consideración de bienes patrimoniales o de propios los que, siendo propiedad de la Entidad local:",
    "options": [
     "Formen parte del dominio público marítimo-terrestre",
     "No estén destinados directamente al uso público ni afectados a algún servicio público ni sean comunales",
     "Estén destinados exclusivamente a servicio público",
     "Sean bienes comunales de aprovechamiento vecinal"
    ],
    "antes": "No estén destinados a uso público ni afectados a algún servicio público",
    "ahora": "No estén destinados directamente al uso público ni afectados a algún servicio público ni sean comunales",
    "nota": "Se conserva la pregunta citando la norma aplicable (art. 4.1 del Decreto 347/2002) y la respuesta reproduce su definición literal."
   },
   {
    "tema": 10,
    "q": "El Capítulo III del Título Primero del RBEL, 'Conservación y tutela de bienes', incluye entre sus secciones:",
    "options": [
     "Solo el aprovechamiento de bienes comunales",
     "Únicamente la enajenación de bienes",
     "Del inventario y registro de los bienes",
     "La organización del Pleno municipal"
    ],
    "antes": "Del inventario y registro de los bienes",
    "ahora": "Del inventario y registro de los bienes",
    "nota": "Se corrige la fuente y la explicación: el capítulo III del RBEL tiene tres secciones; la respuesta no cambia."
   },
   {
    "tema": 10,
    "q": "Según el art. 109.1 del Decreto 347/2002 del Gobierno de Aragón (RBASO), las enajenaciones de bienes patrimoniales habrán de realizarse, como regla general, por:",
    "options": [
     "Sorteo público entre interesados",
     "Adjudicación directa al mejor postor sin publicidad",
     "Venta directa sin ningún requisito formal",
     "Subasta pública, salvo que se trate de una permuta o de otros supuestos previstos legalmente"
    ],
    "antes": "Subasta pública, salvo que se trate de una permuta o de otros supuestos previstos legalmente",
    "ahora": "Subasta pública, salvo que se trate de una permuta o de otros supuestos previstos legalmente",
    "nota": "Se conserva la pregunta citando el art. 109.1 del Decreto 347/2002, que es donde está literalmente esta regla."
   },
   {
    "tema": 10,
    "q": "Según el art. 109.2 del Decreto 347/2002 del Gobierno de Aragón (RBASO), las parcelas sobrantes y los bienes no utilizables pueden ser enajenados por:",
    "options": [
     "Venta directa, con arreglo a su valoración pericial",
     "Cesión al Estado sin contraprestación",
     "Donación gratuita automática a cualquier tercero",
     "Subasta obligatoria en todo caso, sin excepción"
    ],
    "antes": "Venta directa, con arreglo a su valoración pericial",
    "ahora": "Venta directa, con arreglo a su valoración pericial",
    "nota": "Se conserva la pregunta citando el art. 109.2 del Decreto 347/2002, que es donde está literalmente esta regla."
   },
   {
    "tema": 10,
    "q": "Según el art. 109.2 del Decreto 347/2002 del Gobierno de Aragón (RBASO), las parcelas sobrantes serán ofrecidas a:",
    "options": [
     "El primer postor en una subasta pública",
     "El propietario o propietarios colindantes",
     "Cualquier empresa constructora que lo solicite",
     "El Ministerio de Hacienda"
    ],
    "antes": "El propietario o propietarios colindantes",
    "ahora": "El propietario o propietarios colindantes",
    "nota": "Se conserva la pregunta citando el art. 109.2 del Decreto 347/2002 y se quita del enunciado un «preferentemente» que la norma no dice."
   },
   {
    "tema": 10,
    "q": "Según el art. 110 del Decreto 347/2002 del Gobierno de Aragón (RBASO), los ingresos obtenidos por la enajenación de bienes patrimoniales no podrán destinarse, con carácter general, a:",
    "options": [
     "Adquirir otros bienes inmuebles para el patrimonio municipal",
     "Invertirse en nuevas infraestructuras municipales",
     "Financiar gastos corrientes, salvo las excepciones previstas",
     "Amortizar deuda pública local"
    ],
    "antes": "Financiar gastos corrientes, salvo las excepciones previstas",
    "ahora": "Financiar gastos corrientes, salvo las excepciones previstas",
    "nota": "Se conserva la pregunta citando el art. 110 del Decreto 347/2002 y se cambia un distractor que también podía considerarse prohibido."
   },
   {
    "tema": 10,
    "q": "Según el art. 111 del Decreto 347/2002 del Gobierno de Aragón (RBASO), la enajenación de bienes del Patrimonio Municipal del Suelo se ajustará a:",
    "options": [
     "Las mismas reglas que cualquier otro bien patrimonial, sin especialidad alguna",
     "La normativa de contratos del Estado, con exclusión de la urbanística",
     "El Código Civil exclusivamente",
     "Su normativa específica prevista en la legislación urbanística"
    ],
    "antes": "Su normativa específica prevista en la legislación urbanística",
    "ahora": "Su normativa específica prevista en la legislación urbanística",
    "nota": "Se conserva la pregunta citando el art. 111 del Decreto 347/2002, que es donde está literalmente esta regla."
   },
   {
    "tema": 10,
    "q": "Según el art. 79.1 TRRL y el art. 109.1 RBEL, los bienes inmuebles patrimoniales no pueden enajenarse, gravarse ni permutarse sin autorización del órgano competente de la Comunidad Autónoma cuando su valor exceda del:",
    "options": [
     "25 por 100 de los recursos ordinarios del presupuesto anual de la corporación",
     "100 por 100 de la deuda viva del municipio",
     "50 por 100 del presupuesto total municipal",
     "10 por 100 de los recursos ordinarios del presupuesto"
    ],
    "antes": "25 por 100 de los recursos ordinarios del presupuesto anual de la corporación",
    "ahora": "25 por 100 de los recursos ordinarios del presupuesto anual de la corporación",
    "nota": "Se mantiene la respuesta (25 %); se precisa el enunciado y la explicación añade que en Aragón el control es una aprobación previa por Orden del Consejero."
   },
   {
    "tema": 10,
    "q": "Según el art. 79.1 TRRL y el art. 109.1 RBEL, aun sin superar el umbral del 25 % que exige autorización autonómica, ¿qué obligación de información subsiste respecto a toda enajenación de bienes inmuebles locales?",
    "options": [
     "Solo se comunica si lo solicita expresamente un vecino",
     "Se dará cuenta al órgano competente de la Comunidad Autónoma de toda enajenación que se produzca",
     "Se comunica únicamente al Tribunal de Cuentas europeo",
     "Ninguna, no existe obligación de comunicación en absoluto"
    ],
    "antes": "Se dará cuenta al órgano competente de la Comunidad Autónoma de toda enajenación que se produzca",
    "ahora": "Se dará cuenta al órgano competente de la Comunidad Autónoma de toda enajenación que se produzca",
    "nota": "Se mantiene la respuesta; el enunciado ya no remite a «la misma regulación» de otra pregunta y la explicación recoge la regla aragonesa."
   },
   {
    "tema": 10,
    "q": "Según el art. 2.3 del RBEL, en relación con el art. 79.3 LBRL, ¿qué característica adicional se atribuye a los bienes comunales, más allá de ser bienes de dominio público?",
    "options": [
     "Que son inalienables, inembargables e imprescriptibles y no sujetos a tributo alguno",
     "Que se transmiten por herencia a los descendientes de los vecinos",
     "Que pierden su carácter demanial tras diez años de desuso",
     "Que pueden ser libremente hipotecados por el Ayuntamiento"
    ],
    "antes": "Que son inalienables, inembargables e imprescriptibles y no sujetos a tributo alguno",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: atribuye la regla a un artículo equivocado y la misma pregunta, bien citada, ya existe (art. 80.1 LBRL)."
   },
   {
    "tema": 10,
    "q": "¿Qué órgano es competente para acordar la enajenación de un bien patrimonial de una Entidad local cuando su cuantía excede del 20 por 100 de los recursos ordinarios del presupuesto?",
    "options": [
     "La Diputación Provincial en sustitución del municipio",
     "El Pleno de la Corporación, con el voto favorable de la mayoría absoluta del número legal de miembros",
     "El Secretario municipal por delegación automática",
     "El Defensor del Pueblo"
    ],
    "antes": "El Pleno de la Corporación, con el voto favorable de la mayoría absoluta del número legal de miembros",
    "ahora": "El Pleno de la Corporación, con el voto favorable de la mayoría absoluta del número legal de miembros",
    "nota": "Se mantiene la respuesta (régimen común) y la explicación añade que en Zaragoza enajenar el patrimonio corresponde al Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "Según el art. 72 del Decreto 347/2002 del Gobierno de Aragón (RBASO), la utilización de los bienes de dominio y uso público puede adoptar las modalidades de:",
    "options": [
     "Exclusivamente gratuito para los vecinos",
     "Únicamente privativo, nunca común",
     "Solo de carácter oneroso, sin excepción",
     "Uso común, general o especial, y uso privativo"
    ],
    "antes": "Común o privativo, general o especial",
    "ahora": "Uso común, general o especial, y uso privativo",
    "nota": "Se conserva la pregunta citando el art. 72 del Decreto 347/2002, que es donde está la clasificación de usos aplicable en Zaragoza."
   },
   {
    "tema": 10,
    "q": "Según el art. 96 del RBEL, ¿qué implica la explotación común o cultivo colectivo de los bienes comunales?",
    "options": [
     "El disfrute general y simultáneo de los bienes por quienes ostenten en cada momento la cualidad de vecino",
     "La expropiación forzosa de los aprovechamientos a favor de la Diputación Provincial",
     "La venta directa de los aprovechamientos a terceros ajenos al municipio",
     "La cesión gratuita del disfrute a una sociedad mercantil designada por el Alcalde"
    ],
    "antes": "El disfrute general y simultáneo de los bienes por quienes ostenten en cada momento la cualidad de vecino",
    "ahora": "El disfrute general y simultáneo de los bienes por quienes ostenten en cada momento la cualidad de vecino",
    "nota": "Se mantiene la respuesta y la explicación advierte que en Aragón la explotación colectiva es «preferente», no obligatoria."
   },
   {
    "tema": 10,
    "q": "Según los principios generales del régimen de bienes comunales, ¿puede una Entidad Local desafectar un bien comunal para convertirlo en patrimonial?",
    "options": [
     "No, salvo que lo autorice directamente el Rey",
     "Sí, mediante el correspondiente expediente de alteración de la calificación jurídica, acreditando su oportunidad y legalidad",
     "Sí, pero solo mediante ley orgánica estatal",
     "No, los bienes comunales son inmodificables para siempre"
    ],
    "antes": "Sí, mediante el correspondiente expediente de alteración de la calificación jurídica, acreditando su oportunidad y legalidad",
    "ahora": "Sí, mediante el correspondiente expediente de alteración de la calificación jurídica, acreditando su oportunidad y legalidad",
    "nota": "Se mantiene la respuesta y la explicación describe los dos procedimientos aragoneses para desafectar comunales y quién decide en Zaragoza."
   },
   {
    "tema": 10,
    "q": "En relación con el patrimonio municipal del suelo, ¿qué característica especial tiene su enajenación respecto al régimen general de los bienes patrimoniales?",
    "options": [
     "Se ajusta a su normativa específica prevista en la legislación urbanística, en lugar de al régimen general de subasta",
     "Se rige exactamente por las mismas reglas que cualquier otro bien patrimonial, sin especialidad",
     "Solo puede realizarse mediante sorteo público entre los vecinos",
     "Está completamente prohibida en todo caso"
    ],
    "antes": "Se ajusta a su normativa específica prevista en la legislación urbanística, en lugar de al régimen general de subasta del RBEL",
    "ahora": "Se ajusta a su normativa específica prevista en la legislación urbanística, en lugar de al régimen general de subasta",
    "nota": "Se mantiene la respuesta, se quita de ella la mención al RBEL y se corrige la fuente (art. 111 del Decreto 347/2002)."
   },
   {
    "tema": 10,
    "q": "¿Qué excepciones al procedimiento general de subasta pública prevé el art. 109 del Decreto 347/2002 del Gobierno de Aragón (RBASO) para la enajenación de bienes patrimoniales?",
    "options": [
     "Exclusivamente cuando el bien tenga más de cien años de antigüedad",
     "Solo cuando el comprador sea un familiar del Alcalde",
     "La permuta y otros supuestos previstos legalmente, como la venta directa de parcelas sobrantes o efectos no utilizables",
     "Ninguna excepción, la subasta es obligatoria siempre sin excepción alguna"
    ],
    "antes": "La permuta y otros supuestos previstos legalmente, como la venta directa de parcelas sobrantes o efectos no utilizables",
    "ahora": "La permuta y otros supuestos previstos legalmente, como la venta directa de parcelas sobrantes o efectos no utilizables",
    "nota": "Se mantiene la respuesta pero la pregunta pasa a citar el art. 109 del Decreto 347/2002, porque la venta directa de bienes no utilizables no está en el RBEL."
   },
   {
    "tema": 10,
    "q": "¿Cómo se denomina el negocio jurídico por el cual una Entidad Local intercambia un bien patrimonial de su titularidad por otro de un particular, sin mediar subasta pública?",
    "options": [
     "Permuta",
     "Arrendamiento con opción de compra",
     "Comodato",
     "Expropiación forzosa"
    ],
    "antes": "Permuta",
    "ahora": "Permuta",
    "nota": "Se mantiene la respuesta (permuta) y se corrige la fuente: art. 115 del Decreto 347/2002 y art. 189 de la Ley 7/1999."
   },
   {
    "tema": 10,
    "q": "¿Qué papel desempeña la Comunidad Autónoma respecto a la enajenación de bienes patrimoniales de un municipio cuando el valor del bien supera el umbral legal establecido?",
    "options": [
     "Debe adquirir obligatoriamente el bien antes de cualquier subasta",
     "Debe expropiar directamente el bien en cuestión",
     "Ninguno, la Comunidad Autónoma nunca interviene en materia de bienes locales",
     "Debe autorizar previamente la enajenación, al tratarse de un acto de disposición patrimonial de especial relevancia"
    ],
    "antes": "Debe autorizar previamente la enajenación, al tratarse de un acto de disposición patrimonial de especial relevancia",
    "ahora": "Debe autorizar previamente la enajenación, al tratarse de un acto de disposición patrimonial de especial relevancia",
    "nota": "Se mantiene la respuesta y la explicación precisa que en Aragón el control es una aprobación previa por Orden del Consejero."
   },
   {
    "tema": 10,
    "q": "¿Qué tres grandes bloques normativos configuran, en conjunto, el régimen jurídico de los bienes de las Entidades Locales estudiado en este tema?",
    "options": [
     "Únicamente el Código Civil",
     "Solo la normativa urbanística estatal",
     "La legislación básica estatal (LBRL y preceptos básicos de la LPAP), la legislación aragonesa de régimen local (Ley 7/1999 y Decreto 347/2002) y, con carácter supletorio, el RBEL",
     "Exclusivamente las ordenanzas municipales, sin ley estatal alguna"
    ],
    "antes": "La LBRL (arts. 79-83), el RBEL (RD 1372/1986) y, con carácter supletorio, la LPAP (Ley 33/2003)",
    "ahora": "La legislación básica estatal (LBRL y preceptos básicos de la LPAP), la legislación aragonesa de régimen local (Ley 7/1999 y Decreto 347/2002) y, con carácter supletorio, el RBEL",
    "nota": "Cambia la respuesta: en Zaragoza los bienes locales se rigen por la legislación básica estatal, la ley y el reglamento aragoneses y, como supletorio, el RBEL."
   },
   {
    "tema": 10,
    "q": "¿Cuál debe ser el plazo de información pública de un expediente de alteración de la calificación jurídica?",
    "options": [
     "Un mes.",
     "Diez días.",
     "Dos meses.",
     "Quince días."
    ],
    "antes": "Un mes.",
    "ahora": "Un mes.",
    "nota": "Se mantiene la respuesta (un mes) y la explicación corrige la mayoría y quién decide en Zaragoza."
   },
   {
    "tema": 10,
    "q": "¿Cuál de las siguientes potestades no están asignadas a las corporaciones locales en relación con sus bienes?",
    "options": [
     "La potestad de autorecuperación.",
     "La potestad de recuperación.",
     "La potestad de investigación.",
     "La potestad de deslinde."
    ],
    "antes": "La potestad de autorecuperación.",
    "ahora": "La potestad de autorecuperación.",
    "nota": "Se mantiene la respuesta y la explicación añade la quinta potestad que reconoce Aragón: la sancionadora."
   },
   {
    "tema": 10,
    "q": "¿Se admiten interdictos contra actuaciones de agentes de la autoridad en materia de recuperación de bienes?",
    "options": [
     "No, siempre que la actuación se ajuste al procedimiento establecido.",
     "Sí, con aprobación previa del Pleno.",
     "Sí, siempre que la usurpación tenga menos de un año.",
     "Sí, en cualquier caso."
    ],
    "antes": "No, en ningún caso.",
    "ahora": "No, siempre que la actuación se ajuste al procedimiento establecido.",
    "nota": "Cambia la respuesta: no caben interdictos contra la recuperación posesoria siempre que la actuación se ajuste al procedimiento; la vía de hecho es recurrible."
   },
   {
    "tema": 10,
    "q": "El uso privativo de bienes de dominio público:",
    "options": [
     "Es libre de acuerdo con la naturaleza de los bienes.",
     "Está sujeto siempre a licencia, aunque requiera instalaciones fijas y permanentes.",
     "Se destina exclusivamente al Ayuntamiento.",
     "Está sujeto a concesión si requiere instalaciones fijas y permanentes; si no, a licencia."
    ],
    "antes": "está sujeto a concesión administrativa.",
    "ahora": "Está sujeto a concesión si requiere instalaciones fijas y permanentes; si no, a licencia.",
    "nota": "Cambia la respuesta: en Zaragoza el uso privativo va a concesión si requiere instalaciones fijas y permanentes y, si no, a licencia."
   },
   {
    "tema": 10,
    "q": "¿Cuándo se adjudicará el disfrute de un bien comunal por lotes?",
    "options": [
     "En cualquier caso.",
     "Cuando el disfrute sea impracticable en el modo común.",
     "En ningún caso.",
     "Cuando lo establezca el Pleno."
    ],
    "antes": "Cuando el disfrute sea impracticable en el modo común.",
    "ahora": "Cuando el disfrute sea impracticable en el modo común.",
    "nota": "Se mantiene la respuesta y la explicación añade el orden aragonés: explotación colectiva, costumbre u ordenanza y, en su defecto, lotes."
   },
   {
    "tema": 10,
    "q": "Según el art. 109.1 RBEL, los bienes inmuebles patrimoniales de las entidades locales no podrán enajenarse, gravarse ni permutarse sin autorización del órgano competente de la Comunidad Autónoma cuando su valor exceda de qué porcentaje de los recursos ordinarios del presupuesto anual de la Corporación.",
    "options": [
     "El 40 por 100",
     "El 25 por 100",
     "El 50 por 100",
     "El 10 por 100"
    ],
    "antes": "El 25 por 100",
    "ahora": "El 25 por 100",
    "nota": "Se mantiene la respuesta (25 %) y la explicación añade que en Aragón el control es una aprobación previa por Orden del Consejero."
   },
   {
    "tema": 10,
    "q": "Conforme al art. 109.1 RBEL, con independencia de que sea necesaria autorización autonómica por razón de la cuantía, ¿qué obligación existe respecto de toda enajenación de bienes inmuebles de la entidad local?",
    "options": [
     "Comunicarla al Ministerio de Hacienda",
     "Publicarla en el Boletín Oficial del Estado",
     "Dar cuenta al órgano competente de la Comunidad Autónoma",
     "Solicitar dictamen previo del Consejo de Estado"
    ],
    "antes": "Dar cuenta al órgano competente de la Comunidad Autónoma",
    "ahora": "Dar cuenta al órgano competente de la Comunidad Autónoma",
    "nota": "Se mantiene la respuesta y la explicación precisa cuándo y para qué se comunica en Aragón."
   },
   {
    "tema": 10,
    "q": "El dictamen técnico exigido en el art. 110.1.e RBEL para la cesión gratuita de bienes debe asevear que estos no son necesarios para la Entidad local ni es previsible que lo sean en los próximos...",
    "options": [
     "Veinte años",
     "Cinco años",
     "Treinta años",
     "Diez años"
    ],
    "antes": "Diez años",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: los diez años del RBEL no rigen en Aragón, donde el dictamen de la cesión gratuita no fija plazo."
   },
   {
    "tema": 10,
    "q": "Según el art. 112.2 RBEL, no será necesaria la subasta en la enajenación mediante permuta con otros bienes de carácter inmobiliario cuando, previo expediente que acredite la necesidad, la diferencia de valor entre los bienes a permutar no sea superior al...",
    "options": [
     "30 por 100 del que tenga mayor valor",
     "50 por 100 del que tenga mayor valor",
     "40 por 100 del que tenga mayor valor",
     "25 por 100 del que tenga mayor valor"
    ],
    "antes": "40 por 100 del que tenga mayor valor",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: el 40 % del RBEL no rige en Aragón (allí es el 50 %), y esa cifra ya se pregunta citando la Ley 7/1999."
   },
   {
    "tema": 10,
    "q": "Según el art. 114 RBEL, las enajenaciones de bienes cuyo valor exceda del ___ de los recursos ordinarios del presupuesto deberán ser acordadas con el voto favorable de la mayoría absoluta del número legal de miembros de la Corporación.",
    "options": [
     "10 por 100",
     "5 por 100",
     "20 por 100",
     "25 por 100"
    ],
    "antes": "10 por 100",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: el 10 % del RBEL no rige; además, en Zaragoza la enajenación corresponde al Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "Conforme al art. 153 LPAP, los bienes y derechos patrimoniales podrán permutarse, por razones de interés público debidamente justificadas, cuando la diferencia de valor entre los bienes, según tasación, no sea superior al...",
    "options": [
     "50 por ciento del que tenga mayor valor",
     "40 por ciento del que tenga mayor valor",
     "25 por ciento del que tenga mayor valor",
     "60 por ciento del que tenga mayor valor"
    ],
    "antes": "50 por ciento del que tenga mayor valor",
    "ahora": "50 por ciento del que tenga mayor valor",
    "nota": "Se mantiene la respuesta (50 %) y la explicación aclara que en Aragón también es el 50 %, no el 40 % del RBEL."
   },
   {
    "tema": 10,
    "q": "Según el art. 78.1 RBEL, estarán sujetos a concesión administrativa:",
    "options": [
     "Únicamente los bienes patrimoniales cedidos en arrendamiento",
     "El uso privativo de bienes de dominio público y el uso anormal de los mismos",
     "Los bienes comunales en régimen de explotación común",
     "El uso común general y el uso común especial normal"
    ],
    "antes": "El uso privativo de bienes de dominio público y el uso anormal de los mismos",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón no todo uso privativo va a concesión; el que no tiene instalaciones fijas va a licencia."
   },
   {
    "tema": 10,
    "q": "Según el art. 83.2 del Decreto 347/2002 del Gobierno de Aragón (RBASO), el plazo de duración máximo de las concesiones sobre bienes de dominio público será, con carácter general, de:",
    "options": [
     "Veinticinco años",
     "Cincuenta años",
     "Noventa y nueve años",
     "Setenta y cinco años"
    ],
    "antes": "Noventa y nueve años",
    "ahora": "Cincuenta años",
    "nota": "Se conserva la pregunta citando el Decreto 347/2002: en Aragón el plazo máximo de la concesión demanial es de cincuenta años, no noventa y nueve."
   },
   {
    "tema": 10,
    "q": "Según el art. 86.1 RBEL, en caso de discordia entre los peritos que tasaren el proyecto elegido en concurso, la discordia la resolverá:",
    "options": [
     "El Consejo de Estado",
     "El Jurado Provincial de Expropiación",
     "El Delegado del Gobierno",
     "El Tribunal Superior de Justicia"
    ],
    "antes": "El Jurado Provincial de Expropiación",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón la discordia de peritos no la resuelve el Jurado de Expropiación, sino la Corporación."
   },
   {
    "tema": 10,
    "q": "Según el art. 87.4 RBEL, el proyecto y las bases de la licitación de una concesión de dominio público se someterán a información pública durante:",
    "options": [
     "Treinta días",
     "Quince días",
     "Veinte días",
     "Cuarenta y cinco días"
    ],
    "antes": "Treinta días",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón el plazo es de veinte días como mínimo, y esa pregunta ya existe citando el Decreto 347/2002."
   },
   {
    "tema": 10,
    "q": "Según el art. 88.1 RBEL, el peticionario inicial de una concesión tendrá derecho de tanteo si participa en la licitación y la diferencia entre su propuesta económica y la elegida no es superior a:",
    "options": [
     "Un 5 por 100",
     "Un 10 por 100",
     "Un 25 por 100",
     "Un 50 por 100"
    ],
    "antes": "Un 10 por 100",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón el peticionario inicial no tiene derecho de tanteo."
   },
   {
    "tema": 10,
    "q": "Según el art. 88.3 RBEL, el derecho de tanteo podrá ejercerse en el acto de apertura de plicas, que se prolongará al efecto:",
    "options": [
     "Una hora después de la adjudicación provisional",
     "Quince minutos después de la adjudicación provisional",
     "Treinta minutos después de la adjudicación provisional",
     "Veinticuatro horas después de la adjudicación provisional"
    ],
    "antes": "Treinta minutos después de la adjudicación provisional",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón el tanteo no se ejerce «treinta minutos después de la adjudicación provisional»."
   },
   {
    "tema": 10,
    "q": "Según el art. 89 RBEL, será necesario el voto favorable de la mayoría absoluta del número legal de miembros de la Corporación para otorgar una concesión sobre bienes de dominio público cuando ésta dure más de cinco años y, además:",
    "options": [
     "Afecte a más de cien vecinos",
     "Su cuantía exceda del 25 por 100 de los recursos ordinarios del presupuesto",
     "Se trate de un bien inmueble urbano",
     "Su cuantía exceda del 10 por 100 de los recursos ordinarios del presupuesto"
    ],
    "antes": "Su cuantía exceda del 10 por 100 de los recursos ordinarios del presupuesto",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón el umbral es el 20 %, y en Zaragoza las concesiones las otorga el Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "Según el art. 90.1 RBEL, la garantía definitiva de la concesión, que debe constituirse dentro del plazo de los quince días siguientes a la notificación, consistirá en:",
    "options": [
     "El 3 por 100 del valor del dominio público ocupado, más el presupuesto de las obras en su caso",
     "El 2 por 100 del valor del dominio público ocupado",
     "El 5 por 100 del valor del dominio público ocupado",
     "El 10 por 100 del valor del dominio público ocupado"
    ],
    "antes": "El 3 por 100 del valor del dominio público ocupado, más el presupuesto de las obras en su caso",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón la garantía definitiva de la concesión es del 4 %, no del 3 %."
   },
   {
    "tema": 10,
    "q": "Según el art. 91.d) RBEL, en el supuesto de ocupación anormal de bienes de dominio público, la garantía definitiva será:",
    "options": [
     "El 3 por 100, igual que en la ocupación normal",
     "El 5 por 100 sobre las anteriores bases de valoración y presupuesto de obras",
     "El 2 por 100",
     "El 1 por 100"
    ],
    "antes": "El 5 por 100 sobre las anteriores bases de valoración y presupuesto de obras",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón la garantía definitiva del uso anormal es del 4 %, no del 5 %."
   },
   {
    "tema": 10,
    "q": "Según el art. 92.2 RBEL, en la cesión de uso de bienes patrimoniales, el usuario habrá de satisfacer un canon no inferior a:",
    "options": [
     "El 10 por 100 del valor en venta de los bienes",
     "El 4 por 100 del valor en venta de los bienes",
     "El 3 por 100 del valor en venta de los bienes",
     "El 6 por 100 del valor en venta de los bienes"
    ],
    "antes": "El 6 por 100 del valor en venta de los bienes",
    "ahora": "El 6 por 100 del valor en venta de los bienes",
    "nota": "Se mantiene la respuesta (6 %) y la explicación advierte que en Aragón hay una excepción para la cesión por motivos sociales."
   },
   {
    "tema": 10,
    "q": "Según el art. 93.2 RBEL, corresponderá a la Corporación:",
    "options": [
     "Esperar a que el funcionario abandone voluntariamente la vivienda",
     "Acordar y ejecutar por sí misma el desahucio",
     "Delegar el desahucio en la autoridad autonómica",
     "Solicitar el desahucio ante los tribunales ordinarios de forma obligatoria"
    ],
    "antes": "Acordar y ejecutar por sí misma el desahucio",
    "ahora": "Acordar y ejecutar por sí misma el desahucio",
    "nota": "Se mantiene la respuesta y la explicación aclara cómo es el desahucio administrativo en Aragón."
   },
   {
    "tema": 10,
    "q": "Según el art. 94.1 RBEL, el aprovechamiento y disfrute de los bienes comunales se efectuará precisamente en régimen de:",
    "options": [
     "Concesión administrativa",
     "Arrendamiento a terceros",
     "Explotación común o cultivo colectivo",
     "Subasta pública permanente"
    ],
    "antes": "Explotación común o cultivo colectivo",
    "ahora": "Explotación común o cultivo colectivo",
    "nota": "Se mantiene la respuesta y la explicación advierte que en Aragón la explotación colectiva es «preferente», no «precisa»."
   },
   {
    "tema": 10,
    "q": "Según el art. 8.2 RBEL, el expediente de alteración de la calificación jurídica de los bienes deberá resolverse, previa información pública durante un mes, por la Corporación local mediante acuerdo adoptado con:",
    "options": [
     "La unanimidad de todos los miembros de la Corporación",
     "El voto favorable de la mayoría absoluta del número legal de miembros de la Corporación",
     "El voto favorable de las dos terceras partes del número legal de miembros",
     "El voto favorable de la mayoría simple de los miembros presentes"
    ],
    "antes": "El voto favorable de la mayoría absoluta del número legal de miembros de la Corporación",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón la mayoría absoluta solo se exige si la alteración afecta a bienes de dominio público, y en Zaragoza decide el Gobierno de Zaragoza."
   },
   {
    "tema": 10,
    "q": "Conforme al art. 11.1 RBEL, se requerirá informe del órgano estatal o autonómico competente para adquirir onerosamente bienes de valor histórico o artístico cuando su importe exceda:",
    "options": [
     "Del 50 por 100 del valor catastral del bien",
     "De 100.000 euros, en todo caso",
     "Del 10 por 100 del Presupuesto total de la Corporación",
     "Del 1 por 100 de los recursos ordinarios del Presupuesto de la Corporación o del límite general de contratación directa en suministros"
    ],
    "antes": "Del 1 por 100 de los recursos ordinarios del Presupuesto de la Corporación o del límite general de contratación directa en suministros",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: el umbral del 1 % del RBEL no rige en Aragón."
   },
   {
    "tema": 10,
    "q": "Según el art. 16.2 RBEL, los bienes patrimoniales que resultaren calificados como suelo urbano o urbanizable programado en el planeamiento urbanístico quedarán:",
    "options": [
     "Afectos al Patrimonio Municipal del Suelo",
     "Sujetos a expropiación forzosa automática",
     "Convertidos en bienes de dominio público de forma automática",
     "Excluidos del Inventario de bienes de la Entidad"
    ],
    "antes": "Afectos al Patrimonio Municipal del Suelo",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón los bienes del patrimonio municipal del suelo los determina la legislación urbanística aragonesa, y el «urbanizable programado» ya no existe."
   },
   {
    "tema": 10,
    "q": "Según el art. 31 RBEL, de los inventarios separados previstos en el art. 17, párrafo segundo, deben conservarse ejemplares en:",
    "options": [
     "Exclusivamente en el Boletín Oficial del Estado",
     "La Entidad respectiva, las oficinas de la Corporación, y en poder de la Administración del Estado y de la Comunidad Autónoma",
     "Únicamente en el Registro de la Propiedad",
     "Solo en las oficinas de la Corporación"
    ],
    "antes": "La Entidad respectiva, las oficinas de la Corporación, y en poder de la Administración del Estado y de la Comunidad Autónoma",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón el inventario separado no se envía al Estado."
   },
   {
    "tema": 10,
    "q": "Según el art. 44.1 RBEL, ¿cuáles son las potestades que corresponden a los Municipios, Provincias e Islas en relación con sus bienes?",
    "options": [
     "Investigación, deslinde, recuperación de oficio y desahucio administrativo",
     "Recuperación de oficio, deslinde, sanción y confiscación",
     "Desahucio administrativo, expropiación, sanción e investigación",
     "Investigación, deslinde, expropiación forzosa y ejecución subsidiaria"
    ],
    "antes": "Investigación, deslinde, recuperación de oficio y desahucio administrativo",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón las potestades sobre los bienes son cinco (se añade la sancionadora), no cuatro."
   },
   {
    "tema": 10,
    "q": "Según el art. 47 RBEL, para que se admita la denuncia presentada por un particular en un expediente de investigación, este debe anticipar el importe de los gastos en una cuantía que:",
    "options": [
     "Se fijará libremente por el denunciante sin límite alguno",
     "No podrá superar las 10.000 pesetas",
     "Deberá ser exactamente 50.000 pesetas",
     "No será menor de 10.000 pesetas ni excederá de 100.000"
    ],
    "antes": "No será menor de 10.000 pesetas ni excederá de 100.000",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: las cuantías en pesetas del RBEL no rigen en Aragón."
   },
   {
    "tema": 10,
    "q": "Según el art. 49.1 RBEL, el acuerdo de iniciación del expediente de investigación se publicará en el Boletín Oficial de la provincia y del municipio, exponiéndose además en el tablón de anuncios de la Corporación durante:",
    "options": [
     "Quince días",
     "Diez días",
     "Un mes",
     "Sesenta días"
    ],
    "antes": "Quince días",
    "ahora": "Quince días",
    "nota": "Se mantiene la respuesta (quince días) y la explicación aclara que en Aragón se publica en el BOA y esos quince días son ya el plazo de alegaciones."
   },
   {
    "tema": 10,
    "q": "Según el art. 50 RBEL, ¿de qué plazo disponen las personas afectadas por el expediente de investigación para alegar por escrito ante la Corporación, contado desde que termine la publicación de anuncios en el tablón?",
    "options": [
     "Quince días",
     "Un mes",
     "Veinte días",
     "Dos meses"
    ],
    "antes": "Un mes",
    "ahora": "(pregunta retirada)",
    "nota": "Se retira: en Aragón no hay un mes de alegaciones, y el plazo aragonés de quince días ya se pregunta citando el Decreto 347/2002."
   },
   {
    "tema": 10,
    "q": "Según el art. 61.1 RBEL, el deslinde se anunciará en el Boletín Oficial de la provincia, del municipio y en el tablón de anuncios del Ayuntamiento, con qué antelación a la fecha fijada para iniciar las operaciones:",
    "options": [
     "Quince días",
     "Un mes",
     "Noventa días",
     "Sesenta días"
    ],
    "antes": "Sesenta días",
    "ahora": "Sesenta días",
    "nota": "Se mantiene la respuesta (sesenta días) y la explicación advierte que en Aragón el anuncio va al BOA."
   },
   {
    "tema": 11,
    "q": "¿Qué principio general y ampliamente reconocido rige en cuanto a la posibilidad de gestión indirecta de los servicios públicos locales que impliquen ejercicio de autoridad?",
    "options": [
     "Deben prestarse exclusivamente por una sociedad mercantil mixta",
     "Solo pueden prestarse por gestión indirecta, nunca directa",
     "No pueden prestarse por gestión indirecta, debiendo prestarse siempre mediante gestión directa",
     "Pueden prestarse indistintamente por gestión directa o indirecta, sin ninguna limitación"
    ],
    "antes": "No pueden prestarse por gestión indirecta, debiendo prestarse siempre mediante gestión directa",
    "ahora": "No pueden prestarse por gestión indirecta, debiendo prestarse siempre mediante gestión directa",
    "nota": "Se mantiene la respuesta y la explicación añade la regla aragonesa: estos servicios los presta la propia entidad, sin órgano especial."
   },
   {
    "tema": 11,
    "q": "Según el art. 86.2 de la LBRL, la efectiva ejecución de actividades reservadas en régimen de monopolio requiere, además del acuerdo del Pleno de la Corporación local:",
    "options": [
     "La aprobación por el órgano competente de la Comunidad Autónoma",
     "Ningún trámite adicional, basta el acuerdo plenario",
     "Un referéndum estatal vinculante",
     "La autorización de las Cortes Generales mediante ley orgánica"
    ],
    "antes": "La aprobación por el órgano competente de la Comunidad Autónoma",
    "ahora": "La aprobación por el órgano competente de la Comunidad Autónoma",
    "nota": "Se mantiene la respuesta y la explicación concreta que en Aragón aprueba el Gobierno de Aragón, en tres meses y con silencio positivo."
   },
   {
    "tema": 11,
    "q": "¿Qué quórum exige, con carácter general, la aprobación por el Pleno de la municipalización de actividades en régimen de monopolio?",
    "options": [
     "Unanimidad de todos los concejales",
     "Mayoría absoluta del número legal de miembros de la Corporación",
     "Mayoría simple de los presentes en la sesión",
     "Un tercio de los miembros de la Corporación"
    ],
    "antes": "Mayoría absoluta del número legal de miembros de la Corporación",
    "ahora": "Mayoría absoluta del número legal de miembros de la Corporación",
    "nota": "Se mantiene la respuesta (mayoría absoluta, regla general) y la explicación advierte del régimen distinto de los municipios de gran población como Zaragoza."
   },
   {
    "tema": 11,
    "q": "¿Qué órgano tiene competencia, dentro de la Entidad Local, para adoptar el acuerdo inicial de reserva de una actividad o servicio esencial en régimen de monopolio?",
    "options": [
     "Un juzgado de lo contencioso-administrativo",
     "El Alcalde en solitario, sin intervención del Pleno",
     "El Secretario municipal",
     "El Pleno de la Corporación local"
    ],
    "antes": "El Pleno de la Corporación local",
    "ahora": "El Pleno de la Corporación local",
    "nota": "Se mantiene la respuesta (Pleno) y la explicación recoge la regulación aragonesa y la de Zaragoza."
   },
   {
    "tema": 11,
    "q": "¿Qué es un 'bando' del Alcalde, como medio de intervención mencionado en el art. 84.1 a) LBRL?",
    "options": [
     "Una disposición de carácter general dictada por el Alcalde, generalmente para asuntos puntuales, urgentes o de escasa entidad normativa",
     "Un tipo de licencia urbanística especial",
     "Un contrato administrativo típico de obras",
     "Un recurso administrativo específico contra actos del Pleno"
    ],
    "antes": "Una disposición de carácter general dictada por el Alcalde, generalmente para asuntos puntuales, urgentes o de escasa entidad normativa",
    "ahora": "Una disposición de carácter general dictada por el Alcalde, generalmente para asuntos puntuales, urgentes o de escasa entidad normativa",
    "nota": "Se mantiene la respuesta y la explicación concreta, con el Decreto 347/2002, para qué sirven los bandos y quién los dicta en Zaragoza."
   },
   {
    "tema": 11,
    "q": "La letra d) del art. 85.2.A) LBRL prevé como forma de gestión directa la sociedad mercantil local cuyo capital social sea:",
    "options": [
     "De titularidad pública",
     "Íntegramente privado",
     "Mayoritariamente público",
     "Mixto, público y privado"
    ],
    "antes": "De titularidad pública",
    "ahora": "De titularidad pública",
    "nota": "Se mantiene la respuesta y la explicación advierte que la Ley 7/1999 admite también la sociedad «mayoritariamente» de la entidad."
   },
   {
    "tema": 11,
    "q": "Según el art. 84.1.a) LBRL, uno de los medios mediante los que las Entidades locales pueden intervenir la actividad de los ciudadanos es:",
    "options": [
     "Las circulares internas de servicio",
     "Las instrucciones técnicas municipales",
     "Los decretos de necesidad del Alcalde",
     "Ordenanzas y bandos"
    ],
    "antes": "Ordenanzas y bandos",
    "ahora": "Ordenanzas y bandos",
    "nota": "Se mantiene la respuesta y la explicación advierte que la ley aragonesa dice «Ordenanzas y Decretos normativos de emergencia»."
   },
   {
    "tema": 11,
    "q": "Según el art. 84.2 LBRL, ¿a qué principios debe ajustarse en todo caso la actividad de intervención de las entidades locales?",
    "options": [
     "Publicidad, concurrencia y transparencia",
     "Buena fe, confianza legítima y non bis in idem",
     "Igualdad de trato, necesidad y proporcionalidad con el objetivo que se persigue",
     "Eficacia, jerarquía y descentralización"
    ],
    "antes": "Igualdad de trato, necesidad y proporcionalidad con el objetivo que se persigue",
    "ahora": "Igualdad de trato, necesidad y proporcionalidad con el objetivo que se persigue",
    "nota": "Se mantiene la respuesta y la explicación añade los principios que enumera la ley aragonesa."
   }
  ]
 },
 {
  "id": "2026-10-22-ley-4",
  "fecha": "2026-10-22",
  "tipo": "ley",
  "titulo": "Cambios de ley de octubre de 2026",
  "texto": "Reformas publicadas en el BOE en octubre de 2026: competencias municipales y derecho a la información (arts. 25.2 y 69 LBRL, en vigor desde el 23-oct-2026), recargo del IBI sobre viviendas desocupadas (art. 72.4 bis TRLRHL) y coeficientes de la plusvalía (art. 107.4 TRLRHL, desde el 1-dic-2026). Estos dos últimos vienen del Real Decreto-ley 29/2026, que el Congreso aún tiene que convalidar: si no lo hace, se deshará el cambio y lo verás aquí. Al revisar el art. 25.2 se corrigieron también preguntas que arrastraban la redacción anterior a 2013.",
  "preguntas": [
   {
    "tema": 15,
    "q": "Según el art. 69.1 de la LBRL, las Corporaciones locales facilitarán:",
    "options": [
     "La más amplia información sobre su actividad y la participación de toda la ciudadanía en la vida local.",
     "Información únicamente a los vecinos empadronados con más de cinco años de antigüedad.",
     "La participación exclusivamente de las asociaciones inscritas en el registro municipal.",
     "Información solo sobre los acuerdos del Pleno, no sobre el resto de su actividad."
    ],
    "antes": "La más amplia información sobre su actividad y la participación de todos los ciudadanos en la vida local.",
    "ahora": "La más amplia información sobre su actividad y la participación de toda la ciudadanía en la vida local.",
    "nota": "Desde el 23 de octubre de 2026, el art. 69.1 LBRL dice «toda la ciudadanía» en lugar de «todos los ciudadanos» y obliga a ofrecer la información en formatos accesibles y con diseño universal."
   },
   {
    "tema": 14,
    "q": "¿Qué relación existe entre las ordenanzas de accesibilidad y supresión de barreras arquitectónicas y las competencias municipales en materia de urbanismo?",
    "options": [
     "Son competencia exclusiva de las asociaciones de personas con discapacidad, sin intervención municipal",
     "Solo pueden aprobarse mediante ley orgánica estatal",
     "No tienen ninguna relación con el urbanismo municipal",
     "Se enmarcan dentro de la competencia propia municipal de urbanismo: planeamiento, gestión, ejecución y disciplina urbanística (art. 25.2 a LBRL), desarrollando exigencias de accesibilidad universal"
    ],
    "antes": "Se enmarcan dentro de la competencia propia municipal de ordenación, gestión, ejecución y disciplina urbanística (art. 25.2 a LBRL), desarrollando exigencias de accesibilidad universal",
    "ahora": "Se enmarcan dentro de la competencia propia municipal de urbanismo: planeamiento, gestión, ejecución y disciplina urbanística (art. 25.2 a LBRL), desarrollando exigencias de accesibilidad universal",
    "nota": "Desde el 23 de octubre de 2026, el art. 25.2 LBRL tiene una nueva letra q): la promoción de la igualdad de oportunidades, la no discriminación y la accesibilidad universal de las personas con discapacidad es competencia propia municipal."
   },
   {
    "tema": 12,
    "q": "El recargo que los ayuntamientos pueden exigir sobre la cuota líquida del IBI a inmuebles de uso residencial desocupados con carácter permanente por un plazo superior a dos años, en municipios que no estén en una zona de mercado residencial tensionado, puede alcanzar, según el art. 72.4 bis TRLRHL, hasta el 50 por ciento, pudiendo llegar hasta:",
    "options": [
     "El 100 por ciento desde el primer año de desocupación",
     "El 100 por ciento si la desocupación supera los tres años",
     "El 60 por ciento como máximo absoluto",
     "El 75 por ciento en todo caso"
    ],
    "antes": "El 100 por ciento si la desocupación supera los tres años",
    "ahora": "El 100 por ciento si la desocupación supera los tres años",
    "nota": "El RDL 29/2026 traslada el recargo del IBI por vivienda vacía al nuevo art. 72.4 bis: fuera de zonas tensionadas sigue igual (hasta el 50 %, o el 100 % si la vivienda lleva más de tres años vacía). Añade un régimen propio para las zonas tensionadas y un recargo para los pisos turísticos (art. 72.4 ter). Se aplica desde el IBI de 2027."
   },
   {
    "tema": 12,
    "q": "Según la tabla del art. 107.4 TRLRHL, el coeficiente máximo aplicable cuando el periodo de generación del incremento de valor sea igual o superior a 20 años es...",
    "options": [
     "0,20",
     "0,30",
     "0,23",
     "0,15"
    ],
    "antes": "0,40",
    "ahora": "0,30",
    "nota": "Desde el 1 de diciembre de 2026, el coeficiente máximo de la plusvalía municipal (IIVTNU) para 20 años o más baja de 0,40 a 0,30. El RDL 29/2026 cambia toda la tabla."
   },
   {
    "tema": 14,
    "q": "Según el art. 25.2 de la LBRL, también es competencia propia municipal, entre otras:",
    "options": [
     "Cementerios y actividades funerarias",
     "El sistema penitenciario",
     "La gestión de aeropuertos internacionales",
     "La política monetaria nacional"
    ],
    "antes": "Alumbrado público, cementerios y actividades funerarias",
    "ahora": "Cementerios y actividades funerarias",
    "nota": "Error antiguo, no viene de la reforma de 2026: desde la Ley 27/2013, el alumbrado público no está en la lista de competencias propias del art. 25.2, sino entre los servicios obligatorios del art. 26.1 a). Además, los cementerios son la letra k), no la j)."
   },
   {
    "tema": 14,
    "q": "¿Qué relación existe entre una ordenanza reguladora de cementerios y servicios funerarios y las competencias propias municipales?",
    "options": [
     "Los cementerios son competencia exclusiva de la Iglesia Católica, sin intervención municipal",
     "Es una materia reservada al Estado, sin posibilidad de ordenanza municipal",
     "Desarrolla la competencia propia municipal en materia de cementerios y actividades funerarias, reconocida en el art. 25.2 k) LBRL",
     "Solo puede regularse mediante convenio con una empresa privada, nunca mediante ordenanza"
    ],
    "antes": "Desarrolla la competencia propia municipal en materia de cementerios y actividades funerarias, reconocida en el art. 25.2 j) LBRL",
    "ahora": "Desarrolla la competencia propia municipal en materia de cementerios y actividades funerarias, reconocida en el art. 25.2 k) LBRL",
    "nota": "Error antiguo, no viene de la reforma de 2026: la respuesta citaba la letra j) del art. 25.2 para los cementerios, pero desde la Ley 27/2013 están en la k). La j) es la protección de la salubridad pública."
   },
   {
    "tema": 14,
    "q": "Según el art. 25.2 de la LBRL, el municipio ejerce competencias propias en materia de policía local, ordenación del tráfico de vehículos y personas en:",
    "options": [
     "Las vías urbanas",
     "Exclusivamente las autopistas de peaje",
     "Los aeropuertos de interés general",
     "Todas las carreteras nacionales sin excepción"
    ],
    "antes": "Las vías urbanas",
    "ahora": "(pregunta retirada)",
    "nota": "Error antiguo, no viene de la reforma de 2026: el enunciado mezcla la «policía local» de la letra f) vigente con la antigua letra b) anterior a la Ley 27/2013 («Ordenación del tráfico de vehículos y personas en las vías urbanas»). Hoy la f) es «Policía local, protección civil, prevención y extinción de incendios» y la g) es «Tráfico, estacionamiento de vehículos y movilidad. Transporte colectivo urbano»: ninguna menciona las vías urbanas, así que la opción correcta («Las vías urbanas») no está en el art. 25.2 y ninguna otra opción puede serlo. No tiene arreglo sin cambiar el enunciado y la respuesta, es decir, sin hacer otra pregunta. La f) ya la pregunta la 14.167; la g) no tiene pregunta directa en el tema 14 (solo la cita la explicación de la 16.36)."
   },
   {
    "tema": 14,
    "q": "Según el art. 25.2 de la LBRL, ¿cuál de las siguientes es una competencia propia municipal expresamente enumerada?",
    "options": [
     "La emisión de moneda",
     "La política exterior del Estado",
     "La declaración de un estado de sitio",
     "Medio ambiente urbano: gestión de residuos sólidos urbanos y protección contra la contaminación"
    ],
    "antes": "Medio ambiente urbano: gestión de residuos sólidos urbanos y protección contra la contaminación",
    "ahora": "Medio ambiente urbano: gestión de residuos sólidos urbanos y protección contra la contaminación",
    "nota": "Error antiguo, no viene de la reforma de 2026: la explicación cortaba la cita de la letra b) en «contaminación acústica», pero el texto vigente desde 2013 sigue con «lumínica y atmosférica en las zonas urbanas»."
   },
   {
    "tema": 11,
    "q": "¿Qué relación existe entre el art. 25.2 LBRL (competencias propias municipales) y el art. 85 LBRL (servicios públicos locales)?",
    "options": [
     "No existe ninguna relación entre ambos preceptos",
     "El art. 85 deroga tácitamente al art. 25.2",
     "Muchas de las materias listadas como competencias propias en el art. 25.2 se traducen, en la práctica, en servicios públicos que el municipio debe organizar y gestionar conforme al art. 85",
     "Las competencias del art. 25.2 nunca pueden prestarse como servicio público"
    ],
    "antes": "Muchas de las materias listadas como competencias propias en el art. 25.2 se traducen, en la práctica, en servicios públicos que el municipio debe organizar y gestionar conforme al art. 85",
    "ahora": "Muchas de las materias listadas como competencias propias en el art. 25.2 se traducen, en la práctica, en servicios públicos que el municipio debe organizar y gestionar conforme al art. 85",
    "nota": "Error antiguo, no viene de la reforma de 2026: la explicación ponía el alumbrado público como ejemplo del art. 25.2. Desde la Ley 27/2013 no está en esa lista, sino entre los servicios obligatorios del art. 26.1 a)."
   }
  ]
 },
 {
  "id": "2026-10-22-examen-2026",
  "fecha": "2026-10-22",
  "tipo": "correccion",
  "titulo": "Examen oficial de 31-may-2026: 16 respuestas corregidas",
  "texto": "Al cotejar el banco con la plantilla definitiva publicada por el Ayuntamiento en zaragoza.es, 16 respuestas estaban mal copiadas. Ahora las 67 preguntas de ese examen coinciden con la plantilla oficial, que además coincide con la ley. Si practicaste estas preguntas antes de hoy, repásalas.",
  "preguntas": [
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P6] De acuerdo con el artículo 12.1 de Ley 10/2017, de 30 de noviembre, de régimen especial del municipio de Zaragoza como capital de Aragón, es una atribución del Alcalde:",
    "options": [
     "Representar al municipio de Zaragoza.",
     "Responder de su gestión política ante el Pleno.",
     "Las dos respuestas anteriores son correctas."
    ],
    "antes": "Las dos respuestas anteriores son correctas.",
    "ahora": "Representar al municipio de Zaragoza."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P11] De acuerdo con la disposición adicional tercera. 8. de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, la emisión de los informes que dicho apartado atribuye al Secretario de la entidad local corresponderá tratándose de municipios de gran población:",
    "options": [
     "Al titular del Órgano de Apoyo a la Junta de Gobierno.",
     "Al titular de la asesoría jurídica.",
     "Al titular del Órgano de Apoyo a la Junta de Gobierno o al titular de la asesoría jurídica según cual sea el importe del contrato o la duración del mismo."
    ],
    "antes": "Al titular del Órgano de Apoyo a la Junta de Gobierno o al titular de la asesoría jurídica según cual sea el importe del contrato o la duración del mismo.",
    "ahora": "Al titular de la asesoría jurídica."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P13] El Reglamento de Órganos Territoriales y Participación Ciudadana, en su Disposición Adicional Tercera, reconoce a la Unión Vecinal Cesaraugusta y a la Federación de Asociaciones de Barrios de Zaragoza:",
    "options": [
     "La declaración de entidad ciudadana.",
     "La declaración de interés público municipal.",
     "Las respuestas a) y b) son correctas."
    ],
    "antes": "Las respuestas a) y b) son correctas.",
    "ahora": "La declaración de interés público municipal."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P23] De acuerdo con el artículo 30.6 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, se considerará inhábil en todo caso un día:",
    "options": [
     "Cuando fuese hábil en el municipio o Comunidad Autónoma en que residiese el interesado, e inhábil en la sede del órgano administrativo.",
     "Cuando fuese inhábil en el municipio o Comunidad Autónoma en que residiese el interesado y hábil en la sede del órgano administrativo.",
     "Las respuestas a) y b) son correctas."
    ],
    "antes": "Cuando fuese inhábil en el municipio o Comunidad Autónoma en que residiese el interesado y hábil en la sede del órgano administrativo.",
    "ahora": "Las respuestas a) y b) son correctas."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P24] Según el artículo 170 de la Ley 7/1999, de 9 de abril de Administración Local de Aragón, los mercados:",
    "options": [
     "No son bienes de servicio público.",
     "Son bienes de uso público.",
     "Ninguna de las respuestas anteriores es correcta."
    ],
    "antes": "Son bienes de uso público.",
    "ahora": "Ninguna de las respuestas anteriores es correcta."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P26] El artículo 119.3 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
    "options": [
     "Dice que si la propuesta de resolución de un recurso agrava la situación inicial del recurrente se le oirá previamente.",
     "Dice que la resolución de un recurso no puede agravar la situación inicial del recurrente.",
     "Dice que la resolución de un recurso puede agravar la situación inicial del recurrente."
    ],
    "antes": "Dice que si la propuesta de resolución de un recurso agrava la situación inicial del recurrente se le oirá previamente.",
    "ahora": "Dice que la resolución de un recurso no puede agravar la situación inicial del recurrente."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P28] De acuerdo con el artículo 85.2 A) de la Ley 7/1985, de 2 de abril, reguladora de las Bases del Régimen Local, entre otros supuestos, debe quedar acreditado mediante memoria justificativa elaborada al efecto que resulta más sostenible y eficiente la forma de gestión directa de un servicio público local elegida de entre las enumeradas en dicho artículo:",
    "options": [
     "Cuando para la gestión de un servicio público local va a hacerse uso de una entidad pública empresarial local y no de un organismo autónomo local.",
     "Cuando para la gestión de un servicio público local va a hacerse uso de una sociedad mercantil local cuyo capital social sea de titularidad pública y no de una entidad pública empresarial local.",
     "Las dos respuestas anteriores son correctas."
    ],
    "antes": "Las dos respuestas anteriores son correctas.",
    "ahora": "Cuando para la gestión de un servicio público local va a hacerse uso de una entidad pública empresarial local y no de un organismo autónomo local."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P29] Según el artículo 31 del Reglamento de Órganos Territoriales y Participación Ciudadana el Presidente de cada Barrio Rural recibe la denominación tradicional de:",
    "options": [
     "Alcalde pedáneo.",
     "Alcalde del Barrio.",
     "Representante vecinal."
    ],
    "antes": "Alcalde pedáneo.",
    "ahora": "Alcalde del Barrio."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P48] De acuerdo con el artículo 81.2 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local, la alteración de la calificación jurídica de los bienes de las entidades locales se produce automáticamente en el supuesto de:",
    "options": [
     "Aprobación definitiva de los planes de ordenación urbana y de los proyectos de obras y servicios.",
     "Adscripción de bienes patrimoniales por más de veinte años a un uso o servicios públicos.",
     "Las dos respuestas anteriores son correctas."
    ],
    "antes": "Las dos respuestas anteriores son correctas.",
    "ahora": "Aprobación definitiva de los planes de ordenación urbana y de los proyectos de obras y servicios."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, P50] De acuerdo con el artículo 76.1 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, los interesados podrán aducir alegaciones y aportar documentos u otros elementos de juicio:",
    "options": [
     "En cualquier momento del procedimiento anterior al trámite de audiencia.",
     "En cualquier momento del procedimiento anterior a la propuesta de resolución.",
     "En cualquier momento del procedimiento."
    ],
    "antes": "En cualquier momento del procedimiento anterior a la propuesta de resolución.",
    "ahora": "En cualquier momento del procedimiento anterior al trámite de audiencia."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, SEGUNDO EJERCICIO, Supuesto 1, P2] El Ayuntamiento de Zaragoza es propietario de tres inmuebles patrimoniales (1, 2 y 3) no afectados a un uso o servicio público, y su plan es arrendar el inmueble núm. 2. De conformidad con el artículo 100 del Decreto 347/2002, de 19 de noviembre, del Gobierno de Aragón, por el que se aprueba el Reglamento de Bienes, Actividades, Servicios y Obras de las Entidades Locales de Aragón, el arrendamiento que el Ayuntamiento quiere realizar del inmueble núm. 2:",
    "options": [
     "Se regirá por la normativa general de la contratación.",
     "Es un caso de utilización directa por parte del Ayuntamiento.",
     "Es una forma de utilización de acuerdo con criterios de rentabilidad social.",
     "Ninguna de las respuestas anteriores es correcta."
    ],
    "antes": "Es un caso de utilización directa por parte del Ayuntamiento.",
    "ahora": "Se regirá por la normativa general de la contratación."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, SEGUNDO EJERCICIO, Supuesto 1, P5] El Ayuntamiento de Zaragoza es propietario de tres inmuebles patrimoniales (1, 2 y 3) no afectados a un uso o servicio público; su plan es vender el inmueble núm. 1 y arrendar el inmueble núm. 2. Del artículo 4 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, se desprende que la efectividad de los derechos de la hacienda del Ayuntamiento de Zaragoza derivados de la enajenación del inmueble núm. 1 y del arrendamiento del inmueble núm. 2 se llevará a cabo con sujeción a las normas y procedimientos:",
    "options": [
     "Del derecho administrativo.",
     "Del derecho privado.",
     "Del derecho tributario.",
     "Del derecho público."
    ],
    "antes": "Del derecho administrativo.",
    "ahora": "Del derecho privado."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, SEGUNDO EJERCICIO, Supuesto 1, P7] El Ayuntamiento de Zaragoza es propietario de tres inmuebles patrimoniales (1, 2 y 3) no afectados a un uso o servicio público. Una entidad privada solicita la cesión gratuita del inmueble núm. 3. De acuerdo con el artículo 102 del Decreto 347/2002, de 19 de noviembre, del Gobierno de Aragón, por el que se aprueba el Reglamento de Bienes, Actividades, Servicios y Obras de las Entidades Locales de Aragón, el acuerdo de cesión gratuita del inmueble núm. 3 a la entidad privada que lo solicita:",
    "options": [
     "Deberá determinar el plazo de duración, que no podrá ser superior a cuatro años.",
     "Deberá determinar el plazo de duración o su carácter de cesión en precario.",
     "Deberá determinar el plazo de duración.",
     "Deberá determinar el plazo de duración y, caso de no hacerlo, se entenderá realizada en precario."
    ],
    "antes": "Deberá determinar el plazo de duración y, caso de no hacerlo, se entenderá realizada en precario.",
    "ahora": "Deberá determinar el plazo de duración o su carácter de cesión en precario."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, SEGUNDO EJERCICIO, Supuesto 1, P9] El Ayuntamiento de Zaragoza es propietario de tres inmuebles patrimoniales (1, 2 y 3) no afectados a un uso o servicio público: el inmueble núm. 1 se quiere vender, el inmueble núm. 2 se quiere arrendar y una entidad privada solicita la cesión gratuita del inmueble núm. 3. Se sigue un procedimiento contra el Ayuntamiento de Zaragoza. Según se desprende del artículo 173.2 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, contra los tres inmuebles citados en el enunciado:",
    "options": [
     "Se podrá despachar mandamientos de ejecución.",
     "Se podrá dictar providencias de embargo.",
     "Las respuestas a) y b) son correctas.",
     "No se podrá despachar mandamientos de ejecución ni dictar providencias de embargo."
    ],
    "antes": "No se podrá despachar mandamientos de ejecución ni dictar providencias de embargo.",
    "ahora": "Las respuestas a) y b) son correctas."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, SEGUNDO EJERCICIO, Supuesto 1, P10] ¿A qué órgano corresponden, según el artículo 14 de la Ley 10/2017, de 30 de noviembre, de régimen especial del municipio de Zaragoza como capital de Aragón, las competencias ejecutivas y de gestión, en todos sus aspectos, relativas a la adquisición, gestión, administración, aprovechamiento y enajenación del patrimonio municipal (...)?",
    "options": [
     "Al Pleno.",
     "Al Alcalde.",
     "Al Alcalde, que puede delegar o desconcentrar esas funciones.",
     "Al Gobierno de Zaragoza."
    ],
    "antes": "Al Alcalde, que puede delegar o desconcentrar esas funciones.",
    "ahora": "Al Gobierno de Zaragoza."
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL 31-may-2026, SEGUNDO EJERCICIO, Supuesto 2, P15] Un inmueble es de carácter residencial y se encuentra desocupado con carácter permanente. De acuerdo con el artículo 72.4, párrafos tercero y cuarto, del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, en esos casos los ayuntamientos podrán exigir un recargo:",
    "options": [
     "Ese recargo será de hasta el 50 por ciento de la cuota líquida del impuesto.",
     "Tendrá la consideración de inmueble desocupado con carácter permanente aquel que permanezca desocupado, de forma continuada y sin causa justificada, por un plazo superior a cinco años.",
     "Las respuestas a) y b) son correctas.",
     "Ninguna de las respuestas anteriores es correcta."
    ],
    "antes": "Ninguna de las respuestas anteriores es correcta.",
    "ahora": "Ese recargo será de hasta el 50 por ciento de la cuota líquida del impuesto."
   }
  ]
 },
 {
  "id": "2026-10-22-examen-2025-p9",
  "fecha": "2026-10-22",
  "tipo": "correccion",
  "titulo": "Examen de 1-jun-2025, pregunta 9: excedencia por interés particular",
  "texto": "La app daba por buena «Un año». El art. 89.2 TREBEP exige cinco años de servicios efectivos inmediatamente anteriores.",
  "preguntas": [
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, P9] Según el artículo 89.2 del Real Decreto Legislativo 5/2015, de 30 de octubre, que aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público, para obtener la excedencia voluntaria por interés particular es necesario haber prestado servicios efectivos en cualquiera de las Administraciones Públicas durante un período mínimo inmediatamente anterior. Ese período mínimo es de:",
    "options": [
     "Un año",
     "Cinco años",
     "Tres años"
    ],
    "antes": "Un año",
    "ahora": "Cinco años"
   }
  ]
 },
 {
  "id": "2026-10-22-avisos-2025",
  "fecha": "2026-10-22",
  "tipo": "aviso",
  "titulo": "Examen de 1-jun-2025: respuestas oficiales que no coinciden con la ley vigente",
  "texto": "No hemos encontrado publicada la plantilla de este examen, así que se mantiene la respuesta que figura como oficial. En estas preguntas esa respuesta no coincide con la ley vigente: la explicación de cada una lo detalla. Para estudiar, quédate con la ley.",
  "preguntas": [
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, P6] De acuerdo con los artículos 21.1 y 42 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, por el servicio de limpieza de la vía pública:",
    "options": [
     "Las entidades locales no podrán exigir tasas",
     "Las entidades locales podrán exigir precios públicos",
     "Las respuestas a) y b) son correctas"
    ],
    "antes": "Las respuestas a) y b) son correctas",
    "ahora": "Solo es cierta la primera: no cabe tasa ni precio público.",
    "norma": "TRLRHL 21.1.e y 42"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, P13] De acuerdo con el artículo 35.1.c) de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas, serán motivados, con sucinta referencia de hechos y fundamentos de derecho:",
    "options": [
     "Los actos que se separen del criterio seguido en actuaciones precedentes",
     "Los actos que se separen del dictamen preceptivo de órganos consultivos",
     "Las respuestas a) y b) son correctas"
    ],
    "antes": "Los actos que se separen del criterio seguido en actuaciones precedentes",
    "ahora": "También los que se separen del dictamen de órganos consultivos, sea preceptivo o no: por la ley serían ciertas las dos afirmaciones.",
    "norma": "LPAC 35.1.c"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, P48] De acuerdo con el artículo 40.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas:",
    "options": [
     "Toda notificación deberá ser cursada dentro del plazo de quince días a partir de la fecha en que el acto haya sido dictado",
     "Toda notificación deberá contener el texto íntegro de la resolución",
     "Las respuestas a) y b) son correctas"
    ],
    "antes": "Las respuestas a) y b) son correctas",
    "ahora": "Diez días, no quince: solo es cierta la del texto íntegro.",
    "norma": "LPAC 40.2"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, P50] De acuerdo con el artículo 76.3 del Estatuto de Autonomía de Aragón corresponde a la Comunidad Autónoma:",
    "options": [
     "La coordinación de la actuación de las Policías locales aragonesas",
     "La coordinación de la actuación de la Policía autonómica con la de las Policías locales aragonesas",
     "Las respuestas a) y b) son correctas"
    ],
    "antes": "Las respuestas a) y b) son correctas",
    "ahora": "El 76.3 solo recoge la coordinación de las Policías locales.",
    "norma": "EAAr 76.3"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, Reserva 1] De acuerdo con el artículo 30 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, en las contribuciones especiales por el establecimiento o ampliación de los servicios de extinción de incendios se considerarán personas especialmente beneficiadas y, en consecuencia, son sujetos pasivos:",
    "options": [
     "Los titulares de derechos sobre los bienes afectados",
     "Las compañías de seguros que desarrollen su actividad en el ramo, en el término municipal correspondiente",
     "Las respuestas a) y b) son correctas"
    ],
    "antes": "Las respuestas a) y b) son correctas",
    "ahora": "La ley dice «propietarios de los bienes afectados», no «titulares de derechos»; matiz de redacción.",
    "norma": "TRLRHL 30.2.c"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, Reserva 4] De acuerdo con el artículo 100.1 del Real Decreto Legislativo 2/2004, de 5 de marzo, por el que se aprueba el texto refundido de la Ley Reguladora de las Haciendas Locales, el Impuesto sobre Construcciones, Instalaciones y Obras es un tributo indirecto cuyo hecho imponible está constituido:",
    "options": [
     "Por la realización, dentro del término municipal, de cualquier construcción, instalación u obra para la que se exija obtención de la correspondiente licencia de obras o urbanística, solo cuando se haya obtenido dicha licencia",
     "Por la realización, dentro del término municipal, de cualquier construcción, instalación u obra para la que se exija obtención de la correspondiente licencia de obras o urbanística, se haya obtenido o no dicha licencia, independientemente de que la expedición de la licencia corresponda al ayuntamiento de la imposición",
     "Ninguna de las respuestas anteriores es correcta"
    ],
    "antes": "Por la realización, dentro del término municipal, de cualquier construcción, instalación u obra para la que se exija obtención de la correspondiente licencia de obras o urbanística, se haya obtenido o no dicha licencia, independientemente de que la expedición de la licencia corresponda al ayuntamiento de la imposición",
    "ahora": "«siempre que» corresponda a ese ayuntamiento: ninguna de las dos definiciones es correcta.",
    "norma": "TRLRHL 100.1"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, Reserva 5] De acuerdo con el artículo 179.1 de la Ley 7/1999, de 9 de abril, de Administración Local de Aragón, los bienes comunales podrán ser desprovistos de su carácter comunal y calificados como patrimoniales mediante acuerdo de la entidad local respectiva cuando por su naturaleza intrínseca o por otras causas no hubieren sido objeto de disfrute de esta índole durante más de un número de años, aunque en alguno de ellos se haya producido acto aislado de aprovechamiento. ¿Cuál es ese número de años?",
    "options": [
     "Durante más de diez años, aunque en alguno de ellos se haya producido acto aislado de aprovechamiento",
     "Durante más de veinte años, aunque en alguno de ellos se haya producido acto aislado de aprovechamiento",
     "Durante más de veinticinco años, aunque en alguno de ellos se haya producido acto aislado de aprovechamiento"
    ],
    "antes": "Durante más de veinte años, aunque en alguno de ellos se haya producido acto aislado de aprovechamiento",
    "ahora": "Más de diez años.",
    "norma": "Ley 7/1999 Aragón 179.1"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, SEGUNDA PRUEBA, caso 1, P4] El Real Decreto Legislativo 2/2004, de 5 de marzo, regula en sus artículos 169 y 170 las reclamaciones administrativas de los interesados durante el período de exposición al público contra el presupuesto general inicialmente aprobado. En dichos artículos se establece que:",
    "options": [
     "Solo tendrán la condición de interesados los habitantes en el territorio de la respectiva entidad local y los que resulten directamente afectados, aunque no habiten en el territorio de la entidad local",
     "Deberán entablarse reclamaciones contra el presupuesto por no haberse ajustado su elaboración y aprobación a los trámites establecidos en la ley",
     "El plazo de exposición al público será de 15 días",
     "Las tres respuestas anteriores son correctas"
    ],
    "antes": "Las tres respuestas anteriores son correctas",
    "ahora": "La de interesados («Solo… habitantes y directamente afectados») es incompleta: omite colegios, cámaras, sindicatos y asociaciones.",
    "norma": "TRLRHL 169.1 y 170"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, SEGUNDA PRUEBA, caso 1, P6] De acuerdo con el artículo 171 del Real Decreto Legislativo 2/2004, de 5 de marzo, contra la aprobación definitiva del presupuesto podrá interponerse directamente recurso contencioso-administrativo, debiendo el Tribunal de Cuentas informar previamente a la resolución del recurso cuando la impugnación afecte o se refiera:",
    "options": [
     "A la sostenibilidad financiera",
     "A cualquiera de los principios establecidos en la legislación sobre estabilidad presupuestaria y sostenibilidad financiera",
     "A la nivelación presupuestaria",
     "Al principio de estabilidad presupuestaria o al principio de sostenibilidad financiera"
    ],
    "antes": "Al principio de estabilidad presupuestaria o al principio de sostenibilidad financiera",
    "ahora": "«A la nivelación presupuestaria».",
    "norma": "TRLRHL 171.2"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, SEGUNDA PRUEBA, caso 1, P7] Como después de la entrada en vigor del presupuesto el Ayuntamiento quiere reparar el centro cultural y dicha reparación supone la realización de un gasto que no puede demorarse hasta el ejercicio siguiente y no existe crédito en el presupuesto, el presidente, de conformidad con el artículo 177.1 del Real Decreto Legislativo 2/2004, de 5 de marzo, ordenará la incoación de expediente de:",
    "options": [
     "Ampliación de crédito",
     "Suplemento de crédito",
     "Transferencia de crédito",
     "Ninguna de las respuestas anteriores es correcta"
    ],
    "antes": "Suplemento de crédito",
    "ahora": "Si no existe crédito, crédito extraordinario (no ofrecido): «Ninguna de las respuestas anteriores es correcta».",
    "norma": "TRLRHL 177.1"
   },
   {
    "tema": 21,
    "q": "[EXAMEN OFICIAL, SEGUNDA PRUEBA, caso 2, P19] De conformidad con el artículo 126.2 del Real Decreto Legislativo 781/1986, de 18 de abril, la plantilla podrá ser ampliada:",
    "options": [
     "Cuando el incremento del gasto quede compensado mediante reducción de otras unidades o capítulos de gastos corrientes no ampliables",
     "Siempre que el incremento de las dotaciones sea consecuencia del establecimiento o reducción de servicios de carácter obligatorio que resulten impuestos por disposiciones legales o reglamentarias",
     "Siempre que se precise para cubrir las necesidades de urgencia y necesidad expresamente justificadas",
     "Todas las respuestas anteriores son correctas"
    ],
    "antes": "Todas las respuestas anteriores son correctas",
    "ahora": "Solo la compensación con otros gastos corrientes es literal; la ley dice «establecimiento o ampliación» (no «reducción») y «disposiciones legales»; la urgencia y necesidad no figura.",
    "norma": "TRRL 126.2"
   }
  ]
 }
];
