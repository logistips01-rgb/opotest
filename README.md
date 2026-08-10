# OpoTest

Tests de oposiciones, sin registro y sin servidor. Es una web estática: se puede
abrir directamente desde el disco (doble clic en `index.html`) o publicarla en
GitHub Pages y usarla desde el móvil.

## Oposiciones incluidas

| Oposición | Organismo | Preguntas | Estado |
|---|---|---|---|
| Auxiliar Administrativo | Ayuntamiento de Zaragoza | 2.641 | Banco completo, en formato de **3 opciones** como el examen oficial. Incluye el examen real de 1-jun-2025 y 59 preguntas con cita de artículo |
| Policía Local | Ayuntamiento de Zaragoza | 64 | Banco inicial, pendiente de ampliar |
| Policía Nacional · Escala Básica | Ministerio del Interior | 68 | Banco inicial, pendiente de ampliar |
| Auxiliar Administrativo | Gobierno de Aragón (DGA) | 58 | Banco inicial, pendiente de ampliar |

## Cómo funciona

```
index.html                  Pantalla de inicio: elige oposición, progreso global,
                            exportar/importar progreso
test.html?opo=<slug>        Motor de test de una oposición
assets/css/base.css         Estilos compartidos
assets/js/catalog.js        Catálogo de oposiciones + carga perezosa de bancos
assets/js/storage.js        Capa de persistencia (única puerta al almacenamiento)
assets/js/hub.js            Lógica de la pantalla de inicio
assets/js/quiz.js           Motor de test (temas, examen mezclado, repaso de fallos)
data/<slug>.js              Banco base de una oposición
data/<slug>.ampliacion.js   Lotes de preguntas añadidos después (opcional)
tools/generar.md            Cómo ampliar un banco con agentes, sin colar errores
tools/fuentes.json          Norma legal de referencia de cada tema
tools/validar.js            Valida formato, duplicados y recuentos
tools/fusionar.js           Integra un lote revisado en el banco
tools/corregir-duplicados.js  Arregla preguntas con opciones repetidas
tools/normalizar-opciones.js  Reduce de 4 a 3 opciones y reparte la posición
                              de la respuesta correcta
```

Cada banco se carga **solo cuando se abre esa oposición**, inyectando su
`<script>`. Por eso la pantalla de inicio es instantánea aunque el banco de
Zaragoza pese más de 1 MB, y por eso todo funciona también abriendo los archivos
en local (`file://`), donde `fetch()` de datos está bloqueado.

## Añadir una oposición nueva

1. Crea `data/mi-oposicion.js` con esta forma:

```js
(function(){
const TEMAS = [
  {id:1, title:"Nombre del tema"},
  {id:2, title:"Otro tema"}
];
const QUESTIONS = {
1:[
  {q:"Enunciado de la pregunta",
   options:["Opción A","Opción B","Opción C","Opción D"],
   correct:0,                       // índice (base 0) de la opción correcta
   exp:"Explicación que se muestra al responder."}
],
2:[]
};
window.registerOposicion({slug:'mi-oposicion', temas:TEMAS, questions:QUESTIONS});
})();
```

2. Añade la entrada al array `OPOSICIONES` de `assets/js/catalog.js`:

```js
{
  slug:'mi-oposicion',
  title:'Nombre de la oposición',
  org:'Organismo',
  emoji:'📗',
  color:'#c8102e',
  files:['data/mi-oposicion.js'],   // el primero es el banco base
  preguntas:0            // orientativo; se corrige solo al abrir la oposición
}
```

No hay que tocar nada más. Las preguntas admiten 3 o 4 opciones y se muestran
siempre en orden aleatorio.

Cada oposición debe usar el formato de **su** examen: el de Auxiliar
Administrativo de Zaragoza es de 3 opciones y el de Policía Nacional escala
básica es de 4. Para pasar un banco de 4 a 3, y de paso repartir la posición
de la respuesta correcta entre todas las posiciones:

```bash
node tools/normalizar-opciones.js data/mi-oposicion.js --reducir --muestra 5   # simular
node tools/normalizar-opciones.js data/mi-oposicion.js --reducir --aplicar
```

No elimina la última opción, sino el distractor menos confundible con la
respuesta correcta, para no dejar la pregunta con dos alternativas absurdas.
Omite `--reducir` para solo repartir posiciones. Y **no lo pases sobre
preguntas que reproduzcan un examen real**: esas deben conservarse tal cual.

3. Comprueba que todo está bien:

```bash
node tools/validar.js
```

## Ampliar los bancos con agentes

Está documentado en **[tools/generar.md](tools/generar.md)**. En resumen: un
agente redacta preguntas consultando el articulado, otro las verifica por
separado contra la misma norma, y solo las confirmadas se integran:

```bash
node tools/fusionar.js lotes/aux-admin-zaragoza-t18.json --simular
node tools/fusionar.js lotes/aux-admin-zaragoza-t18.json
node tools/validar.js
```

Cada pregunta generada lleva un campo `fuente` con el artículo concreto, que la
app muestra debajo de la explicación. Las que no superan la revisión quedan en
`data/pendientes/` para decidirlas a mano: el script nunca aprueba una pregunta
dudosa por su cuenta.

## Estado actual y siguiente paso

Los cuatro bancos suman 2.831 preguntas. Zaragoza está en formato de 3
opciones, con la posición de la respuesta correcta repartida y con sus 60
preguntas generadas verificadas contra el texto literal del BOE; los otros tres
siguen en 4 opciones, que es el formato de sus exámenes.

Pendiente, por orden de valor:

1. **Ampliar los tres bancos nuevos.** Policía Local Zaragoza, Policía Nacional
   y Auxiliar Administrativo DGA suman 190 preguntas en 36 temas. Las fuentes
   legales de cada tema están en [tools/fuentes.json](tools/fuentes.json), con
   avisos en las materias que cambian a menudo. Conviene ir por tandas de 3-4
   temas para poder revisar los lotes por el camino. Ahora que `boe.es` es
   accesible por `curl`, los redactores deben trabajar sobre el consolidado:
   ver [tools/generar.md](tools/generar.md).

2. **Dos enunciados repetidos** en Zaragoza (temas 8 y 14) que `validar.js`
   marca como aviso. La app los distingue por su solución, así que no rompen
   nada; queda decidir si sobra uno de cada par.

3. **Citar la fuente en el banco base.** Solo 60 de las 2.641 preguntas de
   Zaragoza llevan el artículo citado, las generadas. El resto viene del banco
   original y no lo tiene. No es urgente, pero es lo que permite comprobar una
   pregunta que chirríe.

## Progreso y copia de seguridad

El progreso (aciertos por tema y preguntas falladas) se guarda **en el
navegador del dispositivo**, separado por oposición. No hay cuentas ni servidor,
así que no se sincroniza entre móvil y ordenador de forma automática: para eso
están los botones **Exportar / Importar** de la pantalla de inicio, que
descargan y restauran un `opotest-progreso.json`.

Todo el acceso al almacenamiento pasa por `assets/js/storage.js`. Si algún día
se quieren cuentas de usuario y sincronización real (Firebase, Supabase, backend
propio), basta con reimplementar los métodos de `adapter` en ese archivo: el
resto de la aplicación no cambia.

El progreso guardado por la versión anterior de un solo archivo
(`trivial_oposicion.html`) se migra automáticamente a la oposición de Auxiliar
Administrativo de Zaragoza la primera vez que se abre.

## Publicar en GitHub Pages

En **Settings → Pages**, elige la rama y la carpeta raíz (`/`). La web queda
disponible en `https://<usuario>.github.io/opotest/`, y desde el móvil se puede
añadir a la pantalla de inicio para usarla como si fuera una app.

## Aviso sobre el contenido

Las preguntas de los tres bancos nuevos son un punto de partida redactado sobre
normativa vigente y de referencia habitual en estos temarios, pero **no
sustituyen al temario oficial de la convocatoria**. Antes de usarlas de forma
intensiva conviene contrastar los datos con la convocatoria y con el texto legal
vigente, sobre todo en materias que se modifican con frecuencia (tráfico,
función pública y desarrollo autonómico).
