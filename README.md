# OpoTest

Tests de oposiciones, sin registro y sin servidor. Es una web estática: se puede
abrir directamente desde el disco (doble clic en `index.html`) o publicarla en
GitHub Pages y usarla desde el móvil.

## Oposiciones incluidas

| Oposición | Organismo | Preguntas | Estado |
|---|---|---|---|
| Auxiliar Administrativo | Ayuntamiento de Zaragoza | 2.581 | Banco completo (incluye el examen oficial de 1-jun-2025) |
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

No hay que tocar nada más. Las preguntas admiten 3 o 4 opciones (los exámenes
oficiales de Zaragoza son de 3), y las opciones se muestran siempre en orden
aleatorio.

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
