# Correcciones pendientes, ronda 5 (temas 4, 6, 8, 10, 13, 14 y 18)

Banco: `aux-admin-zaragoza`. Fecha: 24-oct-2026. No se ha modificado ningún archivo de `data/` ni se ha hecho commit.

- Propuestas: `lotes/auditoria/pendientes-ronda5.json`, 38 entradas en el formato de `tools/aplicar-cambios.js` (mismo formato que `pendientes-ronda4.json`).
- `node tools/aplicar-cambios.js lotes/auditoria/pendientes-ronda5.json --tipo correccion --titulo prueba --simular` localiza y aplica las 38 sin error (banco de HEAD 058c763, ya con la ronda 4 aplicada).
- Índice = posición en `data.questions[tema]`, base 0, en el banco de hoy, **antes** de aplicar esta tanda (las retiradas desplazan los índices posteriores). Cada `q` es el enunciado exacto actual y es único en su tema (comprobado por script). En los `motivo`, las referencias a otras preguntas usan esos mismos índices, y lo que se cita del propio banco va entre comillas inglesas.

## Alcance

Entradas de `pendientes-siguiente-ronda.md` no resueltas en `pendientes-varias`, `ronda2`, `ronda3` ni `ronda4` (`.revisado.json`):

1. **Redactor de t14-2:** t14.75 (art. 133), t14.76 (art. 134), t14.26 (art. 130, «Áreas»), t14.80 (art. 122.4 b), t14.73 (art. 130.2 por 130.1 B) y t14.250 (Ministerio de Economía y Hacienda).
2. **Revisor de la ronda 4:** 13-232 (art. 193.2 TRLRHL), aviso de la DA 14.ª RDL 20/2011.
3. **Hallazgos sin tocar del `.md` de la ronda 4:** 18-195 (servicio militar), denominaciones orgánicas del RD 365/1995 (18-198, 18-200, 18-213, 18-215, 18-239 —antes 18-241— y 18-257 —antes 18-260—) y 10-58.
4. **Hallazgos abiertos de `pendientes-ronda3.md`:** duplicados del art. 9.2 c) LPAC en el tema 4, y duplicados de los temas 6 (arts. 48.3, 49.1 y 52.1) y 8 (art. 119).
5. **Encargos de la coordinación durante el trabajo:**
   - transitorias agotadas (DT 2.ª de la Ley 10/2017 y otras de los temas 14-16);
   - avisos del revisor de t11-2 (subvenciones por mera liberalidad, cláusulas de revisión de tarifas, «básico» el art. 39 LGS);
   - avisos del revisor 2 de t11-2 (tarifas de transporte del art. 14.1 p) Ley 10/2017, art. 194.3 Ley 7/1999, DA 1.ª Ley 10/2017 en bases de subvenciones).
6. **`tools/fuentes.json`:** solo anotación, al final. El archivo no se toca.

Lo demás de la lista ya estaba resuelto en rondas anteriores (lo comprobaron las rondas 3 y 4). Al revisar los preceptos aparecieron además cuatro duplicados del padrón (14-111 a 14-114), dos del tema 14 (14-55, 14-74) y los del art. 9.2 a) y b) del tema 4: entran como hallazgos de paso.

## Resumen

| Tema-índice | Acción | Problema | Solución |
|---|---|---|---|
| 14-75 | enunciado (+opciones, exp) | Clave «programación con proyección plurianual» que no está en el art. 133 LBRL; distractores absurdos | Pregunta la letra e) del art. 133 (seguimiento de costes); no repite la 14-143 (b) ni la 14-346 (f) |
| 14-76 | **retirar** | El art. 134 no hace depender esos órganos de la Junta de Gobierno; remite al Reglamento orgánico | Corregida sería la 14-347 (134.1); el 134.2 está en la 14-144 |
| 14-26 | enunciado (+opciones, exp) | Atribuía al art. 130 «Áreas, dirigidas por un miembro de la Junta de Gobierno Local» con cita inventada; clave delatada | Pregunta el art. 123.1 c): los coordinadores generales dependen directamente de los miembros de la Junta (Zaragoza: art. 11.1 c) 6.ª Ley 10/2017) |
| 14-80 | enunciado (+opciones, exp) | Clave con la fórmula del art. 20.1 c) («Alcalde, Junta de Gobierno Local y concejales que ostenten delegaciones») | Clave literal del 122.4 b) («Alcalde y su equipo de gobierno»); aviso del art. 10.4 Ley 10/2017 |
| 14-73 | enunciado (+opciones, exp) | Citaba el 130.2 por el 130.1 B); clave de 144 frente a 35-61 | Pregunta el ámbito de la letra b) del 130.1 B) («grandes áreas o concejalías»); no repite la 14-141 ni la 21-106 |
| 14-250 | explicación | «Ministerio de Economía y Hacienda» (literal del 17.4) sin aviso | Aviso: art. 84 RPDT (RD 141/2024), Ministerio de Economía, Comercio y Empresa; presidente, art. 86.2 |
| 14-74 | **retirar** | Repite la 14-314 (130.3); clave sin el subgrupo A1 y explicación con la redacción anterior a la Ley 27/2013 | Corregida sería la 14-314 |
| 14-55 | **retirar** | Explicación con el art. 17.1 anterior al RDL 6/2023 («Ministerio de Economía y Hacienda y el de Administraciones Públicas»); clave no literal | Corregida sería la 14-110 |
| 14-111 a 14-114 | **retirar** (4) | Las cinco 14-110 a 14-114 son la misma pregunta (art. 17.1, «Al Ayuntamiento respectivo», mismos distractores) | Se conserva la 14-110 |
| 14-236 | **retirar** | DT 3.ª Ley 10/2017 (8 millones anuales): régimen transitorio de financiación, fuera del epígrafe del tema 14 | Mismo criterio que la reserva de financiación de la capitalidad (21-ago) |
| 13-232 | respuesta (distractores, exp) | Art. 193.2 sin el aviso de la DA 14.ª RDL 20/2011; clave de 97 frente a 45-57 | Aviso del revisor de la ronda 4 (con las condiciones de la 13-108); clave abreviada sin cambiar su sentido |
| 18-195 | **retirar** | Servicio militar como supuesto de servicios especiales (art. 4.k RD 365/1995) | Servicio militar suspendido (Ley 17/1999), LO 13/1991 derogada (LO 5/2005), no está en el art. 87.1 TREBEP |
| 18-198, 18-200, 18-215, 18-239 | explicación | Ministerio para las Administraciones Públicas, Ministerio de Asuntos Exteriores y Secretaría de Estado para la Administración Pública sin aviso | Aviso con la denominación actual (RD 829/2023, arts. 2, 22.2 y 22.3 c) |
| 18-213 | respuesta (distractores, exp) | Clave con el ministerio extinto y de 131 caracteres frente a 46-77 | La adscripción pasa a la explicación con aviso; distractores igualados |
| 18-257 | explicación | Remitía a la LORU sin avisar de su derogación | Aviso: LORU derogada por la LO 6/2001, derogada por la LO 2/2023; art. 50.1 LOSU |
| 10-58 | **retirar** | «Según la práctica administrativa»; clave de 214 frente a 56-87 | Lo literal ya está en la 10-228, 10-246, 10-260, 10-115 y 10-249 |
| 4-77 | **retirar** | Repite la 4-138 y la 4-139 (art. 9.2 c) | Último duplicado del 9.2 c) señalado en la ronda 3 |
| 4-52, 4-142 | **retirar** | Repiten la 4-141 (último párrafo del 9.2) | Se conserva la 4-141 |
| 4-50 | **retirar** | Repite la 4-131 (letra a) del 9.2) con distractores absurdos | Se conserva y se corrige la 4-131 |
| 4-51, 4-133 | **retirar** | Repiten la 4-134 (letra b) del 9.2) | Se conserva la 4-134 |
| 4-131 | respuesta (distractores, exp) | Clave de 185 frente a 53-79 | Clave abreviada (la «Lista de confianza» la pregunta la 4-132); distractores igualados |
| 6-69, 6-87 | **retirar** | Repiten la 6-197 y la 6-198 (art. 49.1) | Ronda 3: 6-71 y 6-91 |
| 6-65, 6-107 | **retirar** | Repiten la 6-193 (art. 48.3); la 6-107 parafrasea la clave | Ronda 3: 6-65 y 6-113 |
| 6-76, 6-78 | **retirar** | Repiten la 6-213 y la 6-214 (art. 52.1) | Ronda 3: 6-79 y 6-82 |
| 8-169, 8-170, 8-89 | **retirar** | Repiten la 8-37, la 8-38 y la 8-172 (art. 119) | Se conserva en cada pareja la de mejor forma |

En total: **25 retiradas y 13 correcciones**. Las correcciones son 4 de enunciado (14-75, 14-26, 14-80, 14-73), 3 de respuesta (13-232, 18-213, 4-131) y 6 solo de explicación (14-250, 18-198, 18-200, 18-215, 18-239, 18-257). De las 25 retiradas, 22 son repeticiones: entre ellas la 14-76, la 14-55 y la 14-74, que además tenían errores. Las otras 3 no tienen arreglo: 18-195, 14-236 y 10-58. Ninguna pregunta del examen oficial (tema 21) se toca.

**Longitudes (regla 7 bis).** En las siete entradas que cambian opciones, la clave no es la más larga en ninguna; queda entre 0,80 y 0,97 veces el distractor más largo. Posición de la correcta: 0 (14-80, 13-232), 1 (14-75, 4-131), 2 (14-26, 18-213), 3 (14-73).

## Razonamiento por bloque

### Tema 14 (redactor de t14-2)

**14-75 (art. 133).** El art. 133 LBRL enumera ocho criterios, letras a) a h). Ninguno habla de «programación con proyección plurianual» ni de «eficacia, eficiencia, economía y celeridad», que la explicación daba como texto. El banco ya pregunta la letra b) (14-143) y la f) (14-346). Se reformula sobre la e), «Introducción de la exigencia del seguimiento de los costes de los servicios». Los distractores son falsos según el art. 133: publicación mensual de la ejecución, aprobación trimestral del presupuesto y gestión directa de todos los servicios. Descarté como distractor la «programación plurianual de inversiones», porque existe en otras normas (anexos del presupuesto del TRLRHL) y podía confundir.

**14-76 (art. 134).** El art. 134.1 dice «serán ejercidas por el órgano u órganos que se determinen en el Reglamento orgánico municipal». No hay dependencia legal de la Junta de Gobierno. Corregida, sería la 14-347, literal. Se retira.

**14-26 (art. 130).** El art. 130 tiene cuatro apartados: órganos superiores y directivos, organismos autónomos, nombramiento e incompatibilidades. Ninguno dice que las áreas las dirija un miembro de la Junta. La relación entre áreas y miembros de la Junta solo aparece en el art. 123.1 c), y en Zaragoza en el art. 11.1 c) 6.ª Ley 10/2017, con la misma fórmula y «Gobierno de Zaragoza». Se reformula sobre ese inciso, que ninguna pregunta del banco usa. El Alcalde no es distractor, porque forma parte de la Junta de Gobierno (art. 126.2) y sería discutible.

**14-80 (art. 122.4).** La clave copiaba el art. 20.1 c), que regula los municipios de régimen común. El 122.4 b) dice «la gestión del Alcalde y de su equipo de gobierno». En Zaragoza, el art. 10.4 c) Ley 10/2017 dice lo mismo, y su letra b) añade el dictamen de ordenanzas y Reglamentos. Por eso no se usa ese dictamen como distractor. Tampoco se usan materias que el Pleno puede delegar en las comisiones (art. 123.3: letras d, k, m y ñ). Los distractores son:
- la fiscalización previa (Intervención, art. 136.1);
- la propuesta de los miembros de la Junta (los nombra libremente el Alcalde, art. 126.2);
- la coordinación de las Direcciones Generales (coordinadores generales, art. 123.1 c).

**14-73 (art. 130.1 B).** La 14-141 ya pregunta qué órgano es directivo (interventor) y la 21-106, de examen, cuál no figura en la lista. Para no repetirlas, se pregunta el ámbito de la letra b): «dentro de cada una de las grandes áreas o concejalías». Los distractores son falsos: distritos, comisiones del Pleno, sociedades mercantiles. Se evita «organismos autónomos», porque el 130.2 sí convierte en directivos a los titulares de sus máximos órganos.

**14-250 (art. 17.4).** El art. 84 RPDT, en la redacción del RD 141/2024 (consolidado de 07/02/2024), adscribe el Consejo al «Ministerio de Economía, Comercio y Empresa». El presidente es el del INE: art. 86.2 RPDT (no 85.2) y art. 17.4 LBRL. La clave no cambia.

**Padrón (14-55 y 14-110 a 14-114).** Hallazgo de paso al revisar el art. 17. Había seis preguntas con la misma respuesta, «Al Ayuntamiento». Cinco tienen idénticos distractores y solo cambian el verbo (formación, mantenimiento, revisión, custodia, gestión). La 14-55 además explicaba el art. 17.1 con su redacción anterior al RDL 6/2023 (modificado por su art. 128.3; consolidado de 20/12/2023). Se conserva la 14-110, que ya cita el texto vigente entero.

**14-74 (art. 130.3).** Hallazgo de paso. Repite la 14-314, su clave omite el subgrupo A1 (Ley 27/2013) y su explicación da la redacción de 2003 («titulación superior»).

### Transitorias agotadas (encargo de la coordinación, temas 14-16)

- **DT 2.ª Ley 10/2017** (seis meses para adaptar los Reglamentos orgánicos; procedimientos iniciados antes de la entrada en vigor). Ninguna pregunta del banco la usa. Las dos que la preguntaban estaban en el lote t16-2 y ya se rechazaron por agotadas (`lotes/nuevas/t16-2.revisado.json`, revisor 2). No hay nada que corregir.
- **DT 3.ª Ley 10/2017 (14-236).** Pregunta la cantidad transitoria de financiación (ocho millones). Es correcta según el texto, pero está fuera del epígrafe del tema 14, que solo cubre «disposiciones generales y especialidades en materia de organización». Además es un régimen transitorio. Se retira con el criterio de la reserva del 21-ago (`data/reserva/tema13-financiacion-capitalidad-fuera-alcance.json`). No afirmo si esa financiación se sigue pagando hoy.
- **Otras transitorias de los temas 14-16.** Busqué por «transitori», plazos vencidos y fechas en enunciado, explicación y `fuente`. No hay ninguna más:
  - la 14-13 y la 14-308 (art. 121.2) son reglas permanentes;
  - la 14-31 solo cuenta las disposiciones de la ley;
  - las 14-283, 14-322 y 15-150 citan redacciones dadas por la Ley 4/2026, no transitorias (no he revisado su contenido en esta ronda).
- **Fuera de 14-16, sin tocar:** la 19-139 (DT 6.ª.3 RD 128/2018, tesorería en secretarías de clase 3.ª) es una transitoria sin plazo. Queda para quien revise el tema 19.

### Avisos del revisor de t11-2 (temas 10, 11 y 21)

Busqué por «liberalidad», «art. 179», «nul…» junto a subvención, «revisión de tarifas», «no revisión», «art. 267», «desindexación», «art. 39» junto a LGS y «básico». **No hay ninguna pregunta en el banco que afirme nada de eso.**
- Las de subvenciones del Decreto 347/2002 (11-255: art. 179.3; 11-256: art. 181; 11-257: art. 187.2) y la 21-95 (examen, art. 180) no tratan ni la nulidad ni la liberalidad.
- La 10-293 solo usa «revisión de las tarifas» como distractor falso de extinción de concesiones.
- Comprobado en el consolidado de la LGS (03/10/2026): la DF 1.ª declara básicos, del título II, «los artículos 36, 37 y el apartado 1 del artículo 40». El art. 39 no lo es. El art. 36.1 fija las causas de nulidad.

### Avisos del revisor 2 de t11-2 (temas 10, 11, 14 y 21)

- **Tarifas de transporte (art. 14.1 p Ley 10/2017).** Ninguna pregunta da al Gobierno de Zaragoza la aprobación de tarifas. El art. 20.6 TRLRHL vigente califica de prestaciones patrimoniales de carácter público no tributario las contraprestaciones de los servicios gestionados mediante personificación privada o gestión indirecta. Nada que corregir.
- **Art. 194.3 Ley 7/1999.** La única pregunta es la 11-277 (regla 5.ª: no se entienden otorgadas por silencio las facultades sobre el dominio público). Coincide con el art. 24.1 LPAC. No toca la regla 3.ª (autorización única) ni la 4.ª (informe autonómico «favorable» por silencio), que son las que chocan con los arts. 80.3-80.4 LPAC y 84.3 LBRL. Ninguna pregunta del banco las usa.
- **Bases de subvenciones en Zaragoza.** No hay ninguna explicación del banco sobre quién aprueba las bases de subvenciones en Zaragoza.

### Tema 13: 13-232 (art. 193.2 TRLRHL)

La DA 14.ª del RDL 20/2011 está en la redacción de la DF 31.ª de la Ley 17/2012: «Con efectos de la entrada en vigor de esta Ley y vigencia indefinida». La comprobé en el texto de la Ley 17/2012 y en el consolidado del RDL (28/12/2012). La frase del revisor de la ronda 4 se usa tal cual, con las condiciones (ahorro neto positivo, 75 %, art. 53) que ya llevan la 13-107 a la 13-109. La clave es literal del 193.2 y solo se abrevia: «Una operación de crédito por su importe, si se dan las condiciones del art. 177.5 TRLRHL». La explicación añade el 193.3 (superávit inicial). Los distractores son falsos según el 193: subida de tipos, enajenación de patrimonio municipal del suelo, subvención extraordinaria.

### Tema 18: RD 365/1995

**18-195 (servicio militar).** Se retira por estas razones:
- el preámbulo de la Ley 39/2007 dice que la Ley 17/1999 «supuso la suspensión del servicio militar obligatorio»;
- la LO 5/2005 deroga la LO 13/1991 del Servicio Militar (disposición derogatoria única 1.b);
- el art. 87.1 TREBEP no recoge el supuesto.

No uso fechas de la suspensión que no he podido comprobar en un consolidado: el RD 247/2001 no tiene consolidado accesible por identificador.

**Denominaciones.** Las claves son literales y no cambian. La explicación avisa de lo siguiente:
- **Ministerio para las Administraciones Públicas.** Hoy, la política «en materia de administración pública, función pública, y gobernanza pública» corresponde al Ministerio para la Transformación Digital y de la Función Pública (art. 22.2 RD 829/2023).
- **Secretaría de Estado para la Administración Pública.** Hoy existe la Secretaría de Estado de Función Pública (art. 22.3 c).
- **Ministerio de Asuntos Exteriores.** Hoy es el «Ministerio de Asuntos Exteriores, Unión Europea y Cooperación» (art. 2).

No afirmo que esos órganos sean hoy los competentes para cada trámite. La DF 2.ª del RD 829/2023, la de las referencias a órganos suprimidos, solo alcanza a los suprimidos por ese real decreto.

**18-213.** La adscripción al ministerio sale de la clave, que se delataba por la longitud, y va a la explicación. Los distractores nuevos son falsos según los arts. 12.2 y 18.1 RD 365/1995 y el art. 90 TREBEP.

**18-257.** La disposición derogatoria única de la LOU (LO 6/2001) deroga la LORU, y la de la LO 2/2023 deroga la LOU. El art. 50.1 LOSU deja al Rector las competencias residuales.

### Tema 10: 10-58

Es doctrinal («según la práctica administrativa») y se acierta por la longitud. Cada función literal del Secretario que menciona ya tiene su pregunta: 9.3, 32.1 (texto: «Los inventarios serán autorizados…»), 36.2 y 53 RBEL.

### Temas 4, 6 y 8: duplicados

- **Tema 4, art. 9.2 c).** Tras la ronda 4 quedaba la 4-77: su clave reúne lo que preguntan la 4-138 (quién acude a la vía jurisdiccional) y la 4-139 (de quién es el informe vinculante).
- **Tema 4, resto del art. 9.2.** Al recorrerlo aparecieron tres grupos:
  - último párrafo: 4-52, 4-141 y 4-142;
  - letra a): 4-50 y 4-131;
  - letra b): 4-51, 4-133 y 4-134.

  Se conserva una por grupo: la 4-141, la 4-131 (corregida) y la 4-134. La 4-132 (Lista de confianza) y la 4-130 (enunciado general) no se tocan.
- **Tema 6 y tema 8.** Son las parejas de la ronda 3, con los índices actuales:

| Ronda 3 | Hoy | Se conserva |
|---|---|---|
| 6-71, 6-91 | 6-69, 6-87 | 6-197, 6-198 |
| 6-65, 6-113 | 6-65, 6-107 | 6-193 (más 6-194 y 6-280) |
| 6-79, 6-82 | 6-76, 6-78 | 6-213, 6-214 |
| 8-170, 8-171, 8-173 | 8-169, 8-170, 8-172 | 8-37, 8-38, 8-172 |

En el tema 8 se conserva en cada pareja la que no se delata por la longitud. Por eso se retira la 8-89 y no la 8-172.

## Verificación

**Script `…/scratchpad/pend5/bin/validar.py`.** Comprueba en las 38 entradas:
- que el `q` existe y es único en su tema;
- que hay 4 opciones distintas y que ninguna remite a otras;
- que ningún enunciado nuevo repite otro del banco ni de `lotes/nuevas/*.json`;
- que ninguna entrada está ya en un `.revisado.json` anterior;
- que todo fragmento entre «» del enunciado, de la explicación, de la `cita` y del `motivo` aparece literalmente en los textos descargados o en el epígrafe oficial (normalizando espacios y comillas);
- que las referencias entre comillas inglesas a enunciados del banco son exactas.

Pasan todas. Quedan tres avisos de «letra», y los tres son falsos positivos: son letras de preceptos (art. 133 e, art. 130.1 B b, art. 9.2 b), no de opciones.

**Construcción.** El JSON lo genera `…/scratchpad/pend5/bin/construir.js`. Toma cada `q` del banco por su índice y comprueba su comienzo.

## Fuentes descargadas

En `/tmp/claude-0/-home-user-opotest/b89be96f-03bf-5e1f-ba88-44c94e136a9e/scratchpad/pend5/dl/` (HTML) y `…/pend5/txt/` (texto). Las bajé con `curl` y reintentos (`bin/bajar.sh`). Los identificadores dudosos los resolví con la API de datos abiertos del BOE.

| Norma | ID | Última actualización |
|---|---|---|
| LBRL | BOE-A-1985-5392 | 03/10/2026 (art. 17: 20/12/2023) |
| RPDT, RD 1690/1986 | BOE-A-1986-21944 | 07/02/2024 |
| Ley 10/2017, capitalidad | BOE-A-2018-1683 | 15/01/2019 |
| TRLRHL | BOE-A-2004-4214 | 07/10/2026 |
| RDL 20/2011 (DA 14.ª) | BOE-A-2011-20638 | 28/12/2012 |
| Ley 17/2012 (DF 31.ª) | BOE-A-2012-15651 | texto de publicación |
| RD 365/1995 | BOE-A-1995-8730 | 04/03/2006 |
| TREBEP | BOE-A-2015-11719 | 03/10/2026 |
| RD 829/2023 | BOE-A-2023-23537 | 29/12/2023 |
| RD 1009/2023 | BOE-A-2023-24842 | 29/07/2026 |
| RD 1184/2024 (estructura del MAEUEC) | BOE-A-2024-24852 | 28/05/2025 |
| Ley 39/2007, carrera militar | BOE-A-2007-19880 | 09/11/2024 |
| LO 5/2005, Defensa Nacional | BOE-A-2005-18933 | 18/11/2005 |
| Ley 22/1998, objeción de conciencia | BOE-A-1998-16132 | 07/07/1998 |
| LO 2/2023, del Sistema Universitario | BOE-A-2023-7500 | 02/08/2024 |
| LO 6/2001, de Universidades | BOE-A-2001-24515 | 23/03/2023 |
| LPAC | BOE-A-2015-10565 | 06/11/2024 |
| RBEL | BOE-A-1986-17958 | 07/07/1986 |
| Ley 7/1999 de Administración Local de Aragón | BOE-A-1999-10151 | 25/10/2022 |
| LGS, Ley 38/2003 | BOE-A-2003-20977 | 03/10/2026 |
| Orden EHA/3565/2008 | BOE-A-2008-19916 | 19/03/2014 |
| Orden HAP/1781/2013 | BOE-A-2013-10268 | 03/08/2021 |

## `tools/fuentes.json` (sin tocar): lo que falta

- **Tema 10.** Solo lista la LBRL, el RBEL y la LPAP. Faltan tres normas, aunque el tema tiene 33 preguntas con `fuente` de la Ley 7/1999, unas 60 del Decreto 347/2002 y 10 de la Ley 10/2017:
  - la **Ley 7/1999 de Administración Local de Aragón** (BOE-A-1999-10151);
  - el **Decreto 347/2002** (RBASO, BOA n.º 139, 25-nov-2002, ELI `es-ar/d/2002/11/19/347`), que según `INSTRUCCIONES-PREGUNTAS.md` mandan en Aragón;
  - la **Ley 10/2017** (BOE-A-2018-1683; art. 14.1 g y DA 1.ª), para la regla de Zaragoza.

  Además, presenta la LPAP como supletoria «del RBEL/LBRL», cuando en Aragón el orden es Ley 7/1999 y RBASO, y parte de la LPAP es básica (DF 2.ª). Esto último no lo he contrastado aquí.
- **Tema 13.** Falta la **Orden EHA/3565/2008**, de estructura de los presupuestos (BOE-A-2008-19916, consolidado de 19/03/2014), con 17 preguntas en el banco. Falta también la **Orden HAP/1781/2013**, ICAL modelo normal (BOE-A-2013-10268, consolidado de 03/08/2021), con 12 preguntas; ya lo señalaba la lista. Las dos cubren la parte «Documentos contables» y estructura del epígrafe.
- **Tema 14.** El **RPDT** (RD 1690/1986, BOE-A-1986-21944) está en `_identificadores_boe` y en el «AVISO DE ALCANCE», pero no en la lista `normas` del tema, que tiene 15 preguntas con esa fuente. Conviene añadirlo, con la advertencia de que su redacción vigente es la del RD 141/2024 (arts. 60.1 y 84 con los ministerios actuales).
- **Tema 4** (sugerencia de la ronda 3, sigue abierta): el RD 829/2023 y el RD 1118/2024, para los avisos de los arts. 9.2 c) y 10.2 c).
- **Tema 18.** El RD 365/1995 figura sin advertencia. Convendría avisar de que conserva denominaciones de 1995 y supuestos desplazados (servicio militar; arts. 16.3, 16.4 y 21.4, ya retirados en la ronda 4).

## Hallazgos no incluidos en el JSON (para una ronda de forma)

Claves que se delatan por la longitud, sin error de fondo:
- 14-16 (86 frente a 43-59);
- 14-17 (115 frente a 36-41);
- 14-25 (190);
- 14-27 (131);
- 14-107 (67 frente a 22-27);
- 4-130 (93; además, la clave no concuerda gramaticalmente con el enunciado: «la identificación… : Podrán identificarse»);
- 6-191, 6-199, 6-218, 6-226 y 6-228 (125-180).

**18-235 y 18-238.** Coincido con las rondas 4 y su revisión: el máximo de quince años de la agrupación familiar sigue en el art. 29.3 d) de la Ley 30/1984 y no está desplazado.
