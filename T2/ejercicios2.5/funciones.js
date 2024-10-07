
// EJERCICIO 12
/*
 * Escribe un programa en el que se solicite al usuario que escriba un título para una
 * página. A continuación se abrirá una nueva ventana de 400 píxeles de alto por 500
 * píxeles de ancho, en la que se podrá leer el título ingresado por el usuario.
 * - La nueva ventana ha de visualizarse arriba y a la derecha de la pantalla del usuario.
 * - La ventana principal ha de contener un botón cerrar ventana, que permita cerrar la ventana secundaria.
*/
function nuevaVentana45(titulo) {
    vNueva = window.open("", "", "width=500, height=400, left=1000");
    vNueva.document.title = titulo;
}

function cerrarVentana() {
    vNueva.close();
}

// EJERCICIO 13
/*
 * Escribe un programa que tenga un botón abrir ventana. Al pulsar sobre el botón ha de aparecer
 * una nueva ventana secundaria.
 * - La ventana secundaria ha de contener un botón cerrar ventana, que permita cerrarse a sí misma.
 * - La ventana principal también tendrá un botón cerrar ventana secundaria, para poder cerrar la ventana secundaria.
*/
function abrirVentana() {
    vNueva = window.open("", "", "width=500, height=400, left=1000");
    vNueva.document.write("<input type='button' value='Cerrar pop-up' onclick='self.close()'/>");
}


// EJERCICIO 14
/*
 * Crea una nueva página que contenga el texto Haz clic aquí.
 * - Cuando el usuario haga clic sobre alguna parte del texto se han de generar cinco ventanas emergentes de Google,
 * de tamaño 350x350px.
 * - En cada ventana aparecerá el texto ventana 1, ventana 2… ventana 5.
 * - Cada ventana tendrá un botón Cerrar que permita cerrarla.
*/
function emergentesGoogle() {
    for (let i=1 ; i<=5 ; i++) {
        let ventanas = []; // en este array guardaremos las ventanas emergentes creadas
        vNueva = window.open("https://www.google.es", "", "width=350, height=350");
        vNueva.document.title = "Ventana " + i;
        ventanas.push(vNueva);

        numero = "Cerrar pop-up "+i;
        document.write("<input type='button' value='" + numero +"' onclick='cerrarEmergentesGoogle(" + (i - 1) + ")'/>");        
    }
}

function cerrarEmergentesGoogle(cual) {
    ventanas[cual].close();
}


// EJERCICIO 15
/*
 * Crea una página web que muestre el mensaje 'Hemos cambiado de ubicación esta página'.
 * En breves momentos será redireccionado... junto a una cuenta atrás que muestre 5, 4, 3, 2, 1
 * (correspondiente a 5 segundos). Tras transcurrir los 5 segundos y mostrarse la cuenta atrás,
 * el usuario debe ser redireccionado a la url http://www.pccomponentes.com.
*/
function redireccion() {
    let tiempoRestante = 5;
    const countdown = document.getElementById('countdown');

    const intervalo = setInterval(function () {
        countdown.textContent = tiempoRestante;
        tiempoRestante--;
        if (tiempoRestante < 0) {
            clearInterval(intervalo); // esto detendrá el intervalo
            window.location.href = "http://www.pccomponentes.com";
        }
    }, 1000);
}


// EJERCICIO 16
/*
 * Sobre el ejercicio T3_ej13, añade el código en el documento ventanaSecundaria.html.
 * Añade el código necesario para que aparezca un tercer botón en la ventana principal y
 * que cuando se pulse sobre él se envíe un mensaje a la ventana secundaria.
*/
function recibeMensaje(texto) {
    var objeto = document.getElementById("parrafo");
    objeto.innerHTML = texto;
}

function cerrrarse() {
    window.close();
}

function mandarMensaje() {
    vNueva.document.write("<br>Mensaje desde la ventana principal")
}