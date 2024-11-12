
// EJERCICIO 1
/*
 * Crea una página web con al menos tres párrafos de texto y dentro de ellos un número indeterminado de enlaces
 * (al menos uno debe enlazar a google). Haciendo tan sólo uso del DOM muestra los siguientes datos:
 * • Número de enlaces de la página
 * • Dirección a la que enlaza el penúltimo enlace
 * • Numero de enlaces que enlazan a google
 * • Número de enlaces del tercer párrafo
*/
// todos los enlaces de la página
const enlaces = document.getElementsByTagName("a");

// nº total de enlaces
const numeroEnlaces = enlaces.length;

// dirección del penúltimo enlace
const penultimoEnlace = enlaces[numeroEnlaces - 2].href;

// nº de enlaces que apuntan a Google
let enlacesGoogle = 0;
for (let i=0; i<enlaces.length; i++) {
    if (enlaces[i].href.includes("google.com")) {
    enlacesGoogle++;
    }
}

// nº de enlaces en el tercer párrafo
const tercerParrafo = document.getElementsByTagName("p")[2];
const enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a").length;

// mostrar los resultados
const resultados = document.getElementById("resultados");

const totalEnlacesP = document.createElement("p");
totalEnlacesP.textContent = "Número total de enlaces en la página: " + numeroEnlaces;
resultados.appendChild(totalEnlacesP);

const penultimoEnlaceP = document.createElement("p");
penultimoEnlaceP.textContent = "Dirección del penúltimo enlace: " + penultimoEnlace;
resultados.appendChild(penultimoEnlaceP);

const enlacesGoogleP = document.createElement("p");
enlacesGoogleP.textContent = "Número de enlaces que enlazan a Google: " + enlacesGoogle;
resultados.appendChild(enlacesGoogleP);

const enlacesTercerParrafoP = document.createElement("p");
enlacesTercerParrafoP.textContent = "Número de enlaces en el tercer párrafo: " + enlacesTercerParrafo;
resultados.appendChild(enlacesTercerParrafoP);


// EJERCICIO 2
/*
 * Imagina que para una web que estás diseñando se te pide que en un apartado sólo se muestre una parte de un texto,
 * y al pulsar un enlace “Ver Articulo Completo” se muestre el resto del texto. Implementa esta funcionalidad en una nueva página.
*/
function articuloCompleto() {
    document.getElementById('articulo').style.visibility = "visible";
}

// EJERCICIO 3
/*
 * Mejora el ejercicio anterior cambiando “Ver Articulo Completo” por “Ocultar Articulo” que lo devuelve a su forma original.
*/
function articuloOculto() {
    document.getElementById('articulo').style.visibility = "hidden";
}

// EJERCICIO 4
/*
 * Crea una web con una lista de elementos y un botón que cada vez que pulsemos introduzca una entrada nueva en la lista.
*/
function entradaNueva() {
    ul = document.getElementById('entrada');
    li = document.createElement('li');
    li.appendChild(document.createTextNode("Elemento nuevo"));
    ul.appendChild(li);
}

// EJERCICIO 5
/*
 * Estás diseñando una aplicación web para subir ficheros al servidor. Haciendo uso de DOM, consigue que el usuario
 * pueda adjuntar tantos ficheros como desee. Por tanto inicialmente será necesario un input de tipo fichero,
 * un botón “Adjuntar otro fichero” y un segundo botón “Enviar”, de modo que al pulsar el primero de los botones automáticamente
 * aparezca otro input para elegir fichero.
*/
function ponerInput() {
    const adjuntar = document.getElementById("adjuntar");
    const input = document.createElement("input");
    input.type = "file";
    input.name = "archivos[]";
    adjuntar.appendChild(input);
}

// EJERCICIO 6
/*
 * Se desea realizar mediante DOM un visor de imágenes. Para ello en tu página se mostrará una imagen,
 * junto a dos botones “Siguiente” y “Anterior”. Impleméntala la funcionalidad para poder navegar entre un
 * conjunto de imágenes que tendrás previamente preparadas.
*/
const imagenes = [
    "imagen1.jpeg",
    "imagen2.jpg",
    "imagen3.jpg",
    "imagen4.jfif"
];

let actual = 0;
function mostrarImagen(indice) {
    const imagenActual = document.getElementById("imagenActual");
    imagenActual.src = imagenes[indice];
}

function imagenAnterior() {
    // este cálculo asegura que si 'actual' baja de 0 o supera el máximo del array, se sume la longitud del array de nuevo y
    // encuentre una posición válida para mostrar esa imagen por pantalla.
    actual = (actual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(actual);
}

function imagenSiguiente() {
    // este cálculo asegura que si 'actual' baja de 0 o supera el máximo del array, se sume la longitud del array de nuevo y
    // encuentre una posición válida para mostrar esa imagen por pantalla.
    actual = (actual + 1) % imagenes.length;
    mostrarImagen(actual);
}
