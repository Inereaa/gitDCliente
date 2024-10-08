
// EJERCICIO 1
/*
 * Muestra, maquetada en una tabla HTML toda la información que puedas extraer mediante JavaScript del navegador cliente.
*/
function mostrarInfoNavegador() {
    let tbody = document.getElementById('tabla');

    let html = "";

    html += "<table><tr><th>Propiedad</th><th>Información</th></tr>";
    html += "<tr><td>Idioma</td><td>" + navigator.language + "</td></tr>";
    html += "<tr><td>User agent</td><td>" + navigator.userAgent + "</td></tr>";
    html += "<tr><td>Cookies activadas</td><td>" + navigator.cookieEnabled + "</td></tr>";
    html += "<tr><td>Online</td><td>" + navigator.onLine + "</td></tr>";
    html += "<tr><td>Resolución de pantalla</td><td>" + screen.width + " x " + screen.height + "</td></tr>";
    html += "<tr><td>Profundidad de color</td><td>" + screen.colorDepth + "</td></tr>";
    html += "<tr><td>Anchura interior ventana</td><td>" + window.innerWidth + "</td></tr>";
    html += "<tr><td>Altura interior ventana</td><td>" + window.innerHeight + "</td></tr></table>";

    tbody.innerHTML = html;
}

// EJERCICIO 2
/*
 * Realiza lo mismo para la información de la pantalla utilizada por el cliente.
*/
function mostrarInfoPantalla() {
    var tbody2 = document.getElementById('tabla2');

    var html = "";

    html += "<table><tr><th>Propiedad</th><th>Información</th></tr>";
    html += "<table><tr><td>Anchura Total </td><td>" + screen.width + " px</td></tr>";
    html += "<tr><td>Altura Total </td><td>" + screen.height + " px</td></tr>";
    html += "<tr><td>Anchura Disponible </td><td>" + screen.availWidth + " px</td></tr>";
    html += "<tr><td>Altura Disponible </td><td>" + screen.availHeight + " px</td></tr>";
    html += "<tr><td>Profundidad de Color </td><td>" + screen.colorDepth + " bits</td></tr>";
    html += "<tr><td>Profundidad del Pixel </td><td>" + screen.pixelDepth + " bits</td></tr></table>";

    tbody2.innerHTML = html;
}


// EJERCICIO 3
/*
 * 3a) Abre una ventana de confirmación, mostrando que opción ha pulsado el usuario.
*/
function ventanaConfirmacion() {
    vNueva = window.open("", "", "width=500, height=400");
    vNueva.document.write("Has pulsado el botón de 'confirmar'");
}

/*
 * 3b) Abre una ventana y después analiza si esta se ha cerrado o no.
*/
function seHaCerrado() {
    vNueva = window.open("", "", "width=500, height=400");

    let mensaje = document.getElementById("cerrada");
    mensaje.innerHTML = "Ventana abierta";

    // se verifica cada segundo si la ventana sigue abierta o se ha cerrado
    var checkClosed = setInterval(function () {
        if (vNueva.closed) {
            mensaje.innerHTML = "Ventana cerrada";
            clearInterval(checkClosed);
        }
    }, 100);
}

/*
 * 3c) Abre una ventana y pide al usuario un nuevo nombre para ella.
*/
function pedirTitulo() {
    titulo = prompt("Indique un título para su página: ");
    vNueva = window.open("", "", "width=500, height=400");
    vNueva.document.title = titulo;
}

/*
 * 3d) El primer enlace permite cerrar la ventana actual y el segundo cierra una ventana abierta
 * con el método open() en la variable ventanaNueva.
*/
function cerrarActualYPopUp() {
    vNueva = window.open("", "", "width=500, height=400");
    button = document.getElementById("boton");
    boton.innerHTML = "<input type='button' value='Cerrar pop-up' onclick='vNueva.close()'/>";
}

/*
 * 3f) Abre una ventana de un tamaño de 300x100 que puede ser cambiada de tamaño.
*/
function ventanaTamaño() {
    vNueva = window.open("", "", "width=300, height=100");
    vNueva.document.write("<input type='button' value='Cambiar tamaño' onclick='window.opener.cambiarTamaño()'/>");
}
function cambiarTamaño() {
    vNueva.document.write(`
        <script>
                let ancho = prompt("¿Ancho?: ");
                let alto = prompt("¿Alto?: ");
                window.resizeTo(ancho, alto);
        <\/script>
    `);
}

/*
 * 3g) Mejora el apartado f) para que escriba algún texto en la página padre.
*/
function mensajeMejorada() {
    butt = document.getElementById("desdeEmergente");
    butt.innerHTML = "Mensaje enviado desde una ventana emergente";
}
function ventanaTamañoMejorada() {
    vNueva = window.open("", "", "width=300, height=100");
    vNueva.document.write("<input type='button' value='Cambiar tamaño' onclick='window.opener.cambiarTamaño()'/>");
    vNueva.document.write("<input type='button' value='Mandar mensaje' onclick='window.opener.mensajeMejorada()'/>");
}

/*
 * 3h) Mueve la ventana 50 pixeles hacia abajo y hacia la derecha al activar el enlace.
*/
function crearVentana() {
    vNueva = window.open("", "", "width=300, height=100");
    button = document.getElementById("mover");
    mover.innerHTML = "<input type='button' value='Mover ventana' onclick='vNueva.moveBy(50, 50)'/>";
}

/*
 * 3i) Provoca que la ventana se sitúe en una posición concreta de la pantalla.
 * El punto de referencia es la esquina superior izquierda de la ventana del navegador y de la pantalla del ordenador.
*/
function ventanaArribaIzquierda() {
    vNueva = window.open("", "", "width=300, height=100");
    vNueva.moveTo(0, 0);
}


// EJERCICIO 4
/*
 * 4a) Define un enlace que se desplaza hasta una línea en la que existe un marcador. El marcador está en un enlace
 * que si se activa muestra el nombre de este.
*/
function nombreMarcador() {
    const nombreMarcador = document.getElementById("nombreMarcador");
    nombreMarcador.innerHTML = "El nombre del marcador es: 'marcador'";
}

/*
 * 4b) Indica el nombre del host en el que está publicada la página que estamos viendo.
*/
function miHost() {
    const host = document.getElementById("mostrarHost");
    host.innerHTML = "Host: " + window.location.hostname;
}

/*
 * 4c) Devuelve la URL completa de la página actual.
*/
function miURL() {
    const url = document.getElementById("mostrarURL");
    url.innerHTML = "URL: " + window.location.pathname;
}

/*
 * 4d) Pregunta por una dirección y la activas en el navegador actual.
*/
function moverDireccion() {
    window.location.href = prompt("¿A donde te gustaría ir? (escriba una dirección web): ");
}

/*
 * 4e) Indica el protocolo que se está utilizando en la página actual.
*/
function miProtocolo() {
    const protocolo = document.getElementById("mostrarProtocolo");
    protocolo.innerHTML = "Protocolo: " + window.location.protocol;
}


// EJERCICIO 5
/*
 * 5a) Escribe en el documento la fecha de la última actualización.
*/
function ultimaActualizacion() {
    const actualizacion = document.getElementById("ultimaActualizacion");
    actualizacion.innerHTML = "Última actualización: " + document.lastModified;
}

/*
 * 5b) Muestra la URL desde la cual se ha activado el enlace que ha llevado al usuario hasta el documento actual.
*/
function mostrarURLpadre() {
    const padre = document.getElementById("URLpadre");
    // document.referrer, coge la URL anterior a la actual
    padre.innerHTML = "Has llegado desde: " + document.referrer;
}

/*
 * 5c) Muestra el título del documento actual.
*/
function mostrarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.innerHTML = "Título de la pág. actual: " + document.title;
}

/*
 * 5d) Muestra la dirección URL completa.
*/
// Este ejercicio ya lo he realizado antes (4c)

/*
 * 5e) Un documento se abre automáticamente cuando empieza a cargarse y se cierra cuando
 * termina de hacerlo. Así pues, si deseamos escribir en un documento sin sobreescribir su
 * contenido, deberemos hacerlo antes de que éste termine de cargar. Si lo hacemos después,
 * sobreescribiremos su contenido. Implementa dos ejemplos que lo demuestren.
*/
// este ejemplo escribe en el documento antes de haber terminado de cargar
function ejemplo1() {
    let nuevoDocumento = window.open("", "", "width=400,height=200");
    nuevoDocumento.document.write("<h1>Contenido inicial</h1>");
    nuevoDocumento.document.write("<p>Este texto se muestra antes de que el documento termine de cargar.</p>");

    // se cierra el documento después de 2 segundos
    setTimeout(function () {
        nuevoDocumento.close();
    }, 3000);
}

// este ejemplo sobreescribe el documento después de haber cargado
function ejemplo2() {
    let nuevoDocumento = window.open("", "", "width=400,height=200");
    nuevoDocumento.document.write("<h1>Contenido original</h1>");
    nuevoDocumento.document.write("<p>Este texto será sobrescrito.</p>");

    // se espera a que la página cargue para sobrescribirla
    setTimeout(function () {
        nuevoDocumento.document.open();
        nuevoDocumento.document.write("<h1>Contenido Sobrescrito</h1>");
        nuevoDocumento.document.write("<p>Este texto ha reemplazado al original.</p>");
    }, 3000);
}


// EJERCICIO 6
/*
 * 6a) Muestra el número de anclas que tiene el documento.
*/
function contarAnclas() {
    const anclas = document.querySelectorAll('a[href="#"]'); // pilla todos los elementos <a> que lleven a esta misma página
    const numeroAnclas = anclas.length; // cuenta el número de elementos <a>
    document.getElementById('resultadoAnclas').innerHTML = "Número de anclas en el documento: " + numeroAnclas;
}

/*
 * 6b) Muestra el texto dentro del tag del primer ancla (innerHTML).
*/
function textoPrimerAncla() {
    const primerAncla = document.querySelectorAll('a[href="#"]')[0]; // obtiene el primer elemento ancla
    const texto = primerAncla.textContent;
    document.getElementById('primerAncla').innerHTML = "Texto del primer ancla: " + texto;
}

/*
 * 6c) Muestra el número de imágenes del documento.
*/
function numeroImagenes() {
    const numeroImagenes = document.getElementsByTagName('img').length; // pilla todas las etiquetas <img> del documento
    document.getElementById('imagenes').innerHTML = "Número de imágenes: " + numeroImagenes;
}

/*
 * 6d) Muestra el id de la primera imagen.
*/
function idPrimeraImagen() {
    const primeraImagen = document.getElementsByTagName('img')[0].id; // pilla la primera imagen
    document.getElementById('idIMG1').innerHTML = "ID de la primera imagen: " + primeraImagen;
}

/*
 * 6e) Muestra el número de enlaces del documento.
*/
function numeroEnlaces() {
    const numeroEnlaces = document.getElementsByTagName('a').length; // pilla todos los <a> del documento
    document.getElementById('enlaces').innerHTML = "Número de enlaces: " + numeroEnlaces;
}

/*
 * 6f) Cambia el título del documento.
*/
function cambiarTitulo() {
    titulo = prompt("Introduzca un nuevo título para la página actual: ");
    document.title = titulo;
}