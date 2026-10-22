# Tema 11 · Revisión independiente

Revisor independiente. Esquema: `data/esquemas/aux-admin-zaragoza/t11.js`. Validador: «Todo correcto».

## Fuentes consultadas (descargadas por el revisor)

| Norma | Identificador | Última actualización / estado |
|---|---|---|
| LBRL, Ley 7/1985 | BOE-A-1985-5392 | «Última actualización, publicada el 03/10/2026». Art. 84 en la redacción de la Ley 25/2009; 84 bis, 85 y 86 en la de la Ley 27/2013; 84 ter de la Ley 2/2011; art. 87 derogado con efectos de 2/10/2016. |
| LRJSP, Ley 40/2015 | BOE-A-2015-10566 | «Última actualización, publicada el 02/08/2024». |
| RSCL, Decreto de 17/06/1955 | BOE-A-1955-10057 | «Última actualización, publicada el 02/10/2015». Arts. 1, 6, 12, 13, 16, 23, 26 y 27 sin derogación expresa (solo correcciones de errores de 1955 en los arts. 1, 13 y 16). |
| LGS, Ley 38/2003 | BOE-A-2003-20977 | «Última actualización, publicada el 03/10/2026». DF 1.ª (carácter básico) consultada. |
| LCSP, Ley 9/2017 | BOE-A-2017-12902 | «Última actualización, publicada el 09/04/2026». |
| Ley 7/1999, de Administración Local de Aragón | BOE-A-1999-10151 | «Última actualización publicada el 25/10/2022»; `"vigencia_agotada": "N"`. Arts. 193 y 194 modificados y 194 bis añadido por el Decreto-ley 1/2010; arts. 195-228 sin notas de modificación. |
| Decreto 347/2002 (RBASO) | BOA núm. 139, de 25/11/2002 (DOCN 000074688) | Sin modificaciones expresas en el BOA (detalle en `t10-revision.md`). Corrección de errores en BOA núm. 9, de 24/01/2003 (no afecta a los artículos usados aquí). |
| TR de la Ley de Subvenciones de Aragón, DLeg 2/2023 | BOE-A-2023-12919 | «Última actualización, publicada el 15/05/2023»; vigente. |

URL para `tools/fuentes.json` (no lo he editado):
- Ley 7/1999: `https://www.boe.es/buscar/act.php?id=BOE-A-1999-10151`
- Decreto 347/2002: `https://www.boa.aragon.es/eli/es-ar/d/2002/11/19/347/dof/spa/html`
- DLeg 2/2023: `https://www.boe.es/buscar/act.php?id=BOE-A-2023-12919`

## Comprobaciones hechas

- 92 citas literales de `t11-citas.md` cotejadas con los consolidados: todas existen. Hay un falso negativo de mi script: la cita de la LCSP 15.2 está en una línea que menciona la LBRL; la cita está en la LCSP.
- 64 referencias de artículo y unos 100 datos del esquema final cotejados.
- 147 preguntas del tema 21 revisadas; 5 son de este tema.
- En total, unas 260 comprobaciones.

## Punto 4 del encargo: Reglamento de Servicios de 1955

Ninguno de los artículos usados (1, 6, 12, 13, 16, 23.1, 26.1 y 27.1) está **derogado** expresamente. Pero en Aragón están **desplazados**, y algunos chocan con normas posteriores:

- El preámbulo del Decreto 347/2002 lo dice expresamente: «Esa regulación propia va a suponer el desplazamiento de los Reglamentos estatales correspondientes: el de Bienes del año 1986 y el de Servicios, aprobado en 1955 y que no ha sido actualizado».
- RSCL 16.2-3 (anular licencias «otorgadas erróneamente», con indemnización) choca con RBASO 153.1: «Las licencias serán anulables en los supuestos y con arreglo al procedimiento establecido en la legislación del procedimiento administrativo común […] No procederá la indemnización cuando el otorgamiento […] sea debida a dolo, culpa o negligencia grave imputable al interesado».
- RSCL 13 (transmisibles solo las de obra, instalación o servicio, comunicándolo) no coincide con RBASO 151 (transmisibles en general, salvo cualidades personales o número limitado; eficacia al mes).
- RSCL 23.1 remite al «artículo 180 del Reglamento de Haciendas locales», derogado. La regla equivalente vigente es la Ley 7/1999 224 / RBASO 176.1.
- RSCL 26.1 (máximo del 50 % del coste, regla 4.ª, no usada en el esquema) choca con RBASO 179.3 (límite: el coste de la actividad).

Por eso he sustituido las citas del RSCL por las aragonesas. Solo quedan RSCL 6 (junto a RBASO 123, que dice lo mismo) y RSCL 16.3 (junto a RBASO 153.3, que dice lo mismo).

## Correcciones

| # | Texto anterior | Texto nuevo | Motivo | Cita literal oficial |
|---|---|---|---|---|
| 1 | «La función de policía (RSCL 1.1.º): intervenir cuando hay perturbación o peligro de perturbación grave de la tranquilidad, seguridad, salubridad o moralidad ciudadanas» | Ley 7/1999 193, «De la función de policía»: mismos medios, pero la letra a) dice «Ordenanzas y Decretos normativos de emergencia»; principios aragoneses | RSCL desplazado; la ley aragonesa regula la función de policía | Ley 7/1999 193.1.a: «Ordenanzas y Decretos normativos de emergencia.» 193.2: «La actividad de intervención se ajustará a los principios de igualdad de trato, congruencia con los motivos y fines justificativos, respeto a la libertad individual y proporcionalidad.» |
| 2 | «… el menos restrictivo de la libertad individual (RSCL 6)» | «(RBASO 123; RSCL 6)» | Norma aplicable | RBASO 123.3: «Cuando existan varios medios de tutelar los intereses públicos locales, se elegirá el menos restrictivo de la libertad individual y cuyo cumplimiento resulte menos gravoso para los ciudadanos.» |
| 3 | «Se otorgan salvo el derecho de propiedad…» (RSCL 12) | Igual, citado en RBASO 140 | Norma aplicable | RBASO 140.1: «Las autorizaciones y licencias se entenderán otorgadas salvo el derecho de propiedad y sin perjuicio de tercero.» 140.2: «no podrá ser invocado para excluir o disminuir la responsabilidad civil o penal». |
| 4 | «Las relativas a una obra, instalación o servicio son transmisibles… No son transmisibles si el número es limitado» (RSCL 13) | «Son transmisibles, salvo cualidades personales o número limitado. Se comunica por escrito; si en un mes no se notifica que no procede, es eficaz» (RBASO 151) | Regla aragonesa distinta | RBASO 151.1: «Las licencias o autorizaciones serán transmisibles, salvo que se hubieren concedido atendiendo a las cualidades personales del solicitante o cuando el número de las otorgables fuere limitado.» 151.2: «Transcurrido el plazo de un mes desde la comunicación sin haberse notificado la no procedencia de la transmisión, ésta se considerará plenamente eficaz.» |
| 5 | Tabla RSCL 16: «Se incumplen las condiciones → sin efecto»; «… deben revocarse»; «nuevos criterios → pueden revocarse, sí indemnización»; «Otorgadas erróneamente → pueden anularse, sí indemnización» | Tabla RBASO 153: incumplimiento imputable → resueltas y sin efecto; cambio de circunstancias → procede la revocación; nuevos criterios recogidos en la normativa → pueden revocarse con indemnización; anulabilidad del procedimiento común → sin indemnización si hubo dolo, culpa o negligencia grave del interesado | La fila «otorgadas erróneamente / sí indemnización» no responde a la norma aplicable en Aragón | RBASO 153.2: «quedarán resueltas y sin efecto cuando su titular incumpla las condiciones impuestas por causas que le sean imputables»; 153.3: «Procederá la revocación de las licencias por cambio o desaparición de las circunstancias […] También podrán revocarse las licencias cuando la Corporación adoptase nuevos criterios de apreciación recogidos en la normativa aplicable. La revocación fundada en la adopción de nuevos criterios de apreciación comportará el resarcimiento de los daños y perjuicios»; 153.1 (cita en el punto 4). |
| 6 | Tres notas «RSCL: …» (23.1, 26.1, 27.1) | Ley 7/1999 224 / RBASO 176.1 {{examen:2025}}; RBASO 180 (directas e indirectas) {{examen:2026}}; RBASO 183 y 179.1 | Preguntas de 2025 (P45) y 2026 (P21); RSCL desplazado | Ley 7/1999 224: «Las entidades locales podrán otorgar auxilios económicos a entidades públicas o privadas y a los particulares que realicen actividades de interés público que complementen o suplan las de la entidad local.» RBASO 180.3: «Serán indirectas o impropias cuando no supongan desplazamiento o transmisión dineraria o patrimonial, ya se trate de incentivos fiscales, exenciones o bonificaciones, avales en operaciones de crédito, anticipos reintegrables, créditos subvencionados u otros análogos.» RBASO 183: «carácter voluntario y eventual»; «no podrá exigir el aumento o revisión»; 179.1: «En ningún caso las subvenciones podrán responder a criterios de mera liberalidad, siendo nulos los acuerdos que las otorguen.» |
| 7 | «Bases reguladoras… (LGS 17.2)» | «(LGS 17.2; en Aragón, TRLSA 11.2)» | LGS 17.2 no es básico (DF 1.ª.1 LGS exceptúa «los apartados 1, 2 […] del artículo 17»), y donde la CA tiene competencia en régimen local la LGS solo se aplica a los entes locales en lo básico (DF 1.ª.2). La regla, idéntica, está en la ley aragonesa, aplicable a las entidades locales (art. 2.3) | TRLSA 11.2: «Las bases reguladoras de las subvenciones de las entidades locales se deberán aprobar en el marco de las bases de ejecución del presupuesto, a través de una ordenanza general de subvenciones o mediante una ordenanza específica para las distintas modalidades de subvenciones.» TRLSA 2.3: «Las disposiciones contenidas en esta Ley serán de aplicación a las entidades locales de la Comunidad Autónoma de Aragón». |
| 8 | Marca {{examen:2025}} en «a) Por la propia entidad local» | Marca movida a «La concesión es gestión indirecta» | La pregunta 2 de 2025 era «no es una forma de gestión directa → concesión»; la «propia entidad» ni siquiera era opción | Banco, 1-jun-2025, P2: opciones «Organismo autónomo local / Concesión / Entidad pública empresarial local», correcta «Concesión». |
| 9 | (No existía) | Esencial 6 y nota tintada: formas de gestión de la Ley 7/1999 206 {{examen:2026}} y 206.1 (autoridad) | Pregunta 49 de 2026 | Ley 7/1999 206.2: «c) Sociedad mercantil cuyo capital social pertenezca íntegramente o mayoritariamente a la entidad.» 206.3: «a) Concesión. b) Gestión interesada. c) Arrendamiento. d) Concierto. e) Sociedad mercantil o cooperativa, en la que la participación de la entidad local sea minoritaria.» 206.1: «En ningún caso podrán prestarse por gestión indirecta los servicios públicos que impliquen ejercicio de autoridad.» |
| 10 | Trampa «La sociedad mercantil local de gestión directa puede tener capital privado → Su capital social debe ser de titularidad pública» | «Según la LBRL…», y aviso de que la Ley 7/1999 206 admite capital mayoritariamente local | La trampa, tal cual, hacía fallar la pregunta 49 de 2026, que cita la ley aragonesa | LBRL 85.2.A.d: «Sociedad mercantil local, cuyo capital social sea de titularidad pública.» Ley 7/1999 206.2.c (fila 9). |
| 11 | Trampa «La licencia de otra Administración exime de la municipal» | Trampa «Una exención fiscal no es una subvención → es indirecta o impropia» | Máximo de 10 trampas. La de la licencia sigue en la sección (LBRL 84.3); la nueva corresponde a la P21 de 2026 | RBASO 180.3 (fila 6). |
| 12 | Trampa de revocación citada en «RSCL 16.3» | «RBASO 153.3; RSCL 16.3» | Norma aplicable | RBASO 153.3 (fila 5). |
| 13 | «La municipalización en monopolio… mayoría absoluta (47.2.k)» | Añadido «(régimen común)» y una nota sobre la Ley 7/1999 205.4: mayoría absoluta, aprobación del Gobierno de Aragón en 3 meses, silencio positivo | La LBRL 47.3 remite a los municipios de gran población al art. 123.2, que no incluye la letra k); la ley aragonesa sí regula el monopolio | Ley 7/1999 205.4: «el acuerdo del Pleno deberá adoptarse por mayoría absoluta del número legal de miembros de la Corporación, y requerirá la aprobación del Gobierno de Aragón […] La resolución del Gobierno de Aragón deberá adoptarse en el plazo de tres meses desde la recepción del expediente completo, entendiéndose aprobada si no hay resolución expresa en dicho plazo.» |
| 14 | Mapa «Reglamento de Servicios (1955) · Títulos I y II» | Mapas de la Ley 7/1999 (Título VII) y del Decreto 347/2002 (Títulos II a VI, arts. 122-328) | Norma aplicable | Estructura comprobada en los textos (títulos y artículos). |
| 15 | Fuentes, etiquetas y lista `examenes` | Añadidas Ley 7/1999, Decreto 347/2002 y DLeg 2/2023; RSCL reducido al art. 6 y marcado como supletorio; `examenes` con 2025 P45 y 2026 P21 y P49 | Puntos 1 y 5 del encargo | Ver citas anteriores. |

## Marcas de examen (contra el tema 21)

- 2025 P2 (LBRL 85.2, concesión): esencial 4, cifra «4» y la regla de la concesión. Correctas.
- 2026 P28 (LBRL 85.2.A, memoria justificativa): regla c) y d). Correcta.
- 2025 P45 (Ley 7/1999 224), 2026 P21 (RBASO 180) y 2026 P49 (Ley 7/1999 206): nuevas. Las respuestas del banco coinciden con la letra de la norma.
- 2026 P20 (LCSP 15, concesión de servicios) es del tema 9 (tipos contractuales); no la marco aquí.

## Lo que añadiría o quitaría pero no he tocado

- La LBRL no tiene un precepto que declare su carácter básico; el esquema no afirma que el 85.2 sea básico. Solo contrasta su texto con el de la ley aragonesa, que sigue en la redacción de 1999.
- Ley 7/1999 210.3 (gestión indirecta, máximo 75 años con prórrogas) y 214.2 (arrendamiento, 50 años): no las añado. Su encaje con los plazos de la LCSP (art. 29.6) es dudoso y no se han preguntado.
- Ley 7/1999 194.3.5.ª (silencio positivo a los tres meses en licencias, nunca para el dominio público): no la añado, para no entrar en conflicto con la LPACAP sin contrastarla.
- Propuesta para `tools/fuentes.json` (tema 11): «Ley 7/1999 de Administración Local de Aragón, BOE-A-1999-10151, Título VII (arts. 193-228)», «Decreto 347/2002 (RBASO), BOA núm. 139 de 25/11/2002, Títulos II a VI (arts. 122-328)» y «DLeg 2/2023, TR Ley de Subvenciones de Aragón, BOE-A-2023-12919».
- Nota de proceso: el commit 294bb94 lo hizo otra sesión con una versión intermedia de estos cambios. Yo no he hecho ningún commit.

## Veredicto

**APTO**. Todo lo que contiene el esquema está contrastado con el texto oficial vigente.
