
// EJERCICIO 1
/*
 * Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert.
*/
function onclick() {
    document.addEventListener("click", () => {
        alert("¡Has hecho clic!");
    });
}

// EJERCICIO 2
/*
 * Captura el movimiento del ratón, para que se muestre la posición en la que se encuentra en cada momento.
*/
function coords() {
    const cX = document.getElementById('cX');
    const cY = document.getElementById('cY');
    
    document.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;
    
        cX.textContent = "X: " + x;
        cY.textContent = "Y: " + y;
    });
}

// EJERCICIO 3
/*
 * Haciendo uso del evento onLoad, muestra el tiempo transcurrido desde la carga de la página.
*/
function iniciarTimer() {
    inicio = Date.now(); // se coge el momento de inicio
    actualizarTimer();
}

function actualizarTimer() {
    const actual = Date.now();
    const pasado = Math.floor((actual - inicio) / 1000); // se pasa a segundos
    document.getElementById("transcurrido").textContent = pasado + " segundos";

    setTimeout(actualizarTimer, 1000);
}

// EJERCICIO 4 y EJERCICIO 5
/*
 * Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón en dos colores diferentes. Para ello primero
 * simularemos que disponemos de un canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño (100x100). 
 * Tu programa creará ese canvas una vez cargada la página (onLoad). Lo siguiente será detectar el movimiento del ratón sobre
 * las celdas para pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la tecla Ctrl y
 * azul si se pulsa Shift. En otro caso no deberá pintarse nada.
 * 
 * Añade las siguientes funcionalidades al ejercicio anterior:
 * ◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú decidas)
 * ◦ Borrar por completo el canvas (con un botón).
*/
function canvas() {
    const tabla = document.getElementById("canvas");
    const filas = 100;
    const columnas = 100;

    for (let i=0; i<filas; i++) {
        const fila = document.createElement("tr");

        for (let j=0; j<columnas; j++) {
            const celda = document.createElement("td");
            celda.onmousemove = (event) => {
                if (event.ctrlKey) {
                    celda.style.backgroundColor = "red";
                } else if (event.shiftKey) {
                    celda.style.backgroundColor = "blue";
                } else if (event.buttons == 2) {
                    celda.style.backgroundColor = "white";
                }
            };
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}

function limpiar() {
    const tabla = document.getElementById("canvas");
    const celdas = tabla.getElementsByTagName("td");
    for (let celda of celdas) {
        celda.style.backgroundColor = "white";
    }
}

// EJERCICIO 6
/*
 * Eventos onMouseOver y onMouseOut. Vamos a crear una página en la que el usuario pueda averiguar el color representado por
 * una secuencia en hexadecimal. Para ello tu página debe mostrar un título (debe ser una imagen), un texto explicando el cometido
 * de tu página y una tabla en la que aparezcan las 12 codificaciones en hexadecimal de los principales colores
 * (por ejemplo el 0000FF es el color azul). Haciendo uso de los eventos anteriores debes proporcionar la siguiente funcionalidad:
 * 
 * ◦ Al colocar el puntero sobre el título el color de éste debe cambiar (a otra imagen que tú decidas). 
 * ◦ Al dejar de estar sobre el título, éste debe volver a su color original.
 * ◦ Si se coloca el puntero sobre cualquiera de los valores en hexadecimal se debe colorear la entrada con el color en HTML
 *   que está representando. Al dejar de estar sobre ese valor, se debe mostrar el nombre del color en lugar del código. 
 * 
 * (Por ejemplo, al colocarme sobre el #0000FF, ésta entrada se muestra en azul, y al salir se cambia ese valor por la cadena “azul”).
*/
function hoverTitulo() {
    let titulo = document.querySelector('img');
    const original = titulo.src;

    titulo.onmouseover = (event) => {
        titulo.src = 'cambio.jpg';
    }

    titulo.onmouseout = (event) => {
        titulo.src = original;
    }
}

function tablaColores() {
    const tablaColores = document.querySelector('table tbody');
    let contenidoOriginal = '';

    tablaColores.addEventListener('mouseover', (event) => {
        const target = event.target;

        if (target.tagName === 'TD') {
            if (target.textContent.startsWith('#')) {
                // cambio del contenido del código hexadecimal al nombre del color
                const fila = target.parentElement;
                const nombreColor = fila.cells[0].textContent;
                contenidoOriginal = target.textContent;
                target.textContent = nombreColor;
                target.style.backgroundColor = contenidoOriginal;

            } else {
                // si es el nombre del color, se muestra el código hexadecimal
                const fila = target.parentElement;
                const valorHex = fila.cells[1].textContent;
                contenidoOriginal = target.textContent;
                target.textContent = valorHex;
                target.style.backgroundColor = valorHex;

            }
        }
    });

    // para restaurar el valor original de la celda de la tabla
    tablaColores.addEventListener('mouseout', (event) => {
        const target = event.target;

        if (target.tagName === 'TD') {
            if (contenidoOriginal) {
                target.textContent = contenidoOriginal;
                contenidoOriginal = '';
            }
            target.style.backgroundColor = '';
            target.style.color = '';
        }
    });
}

// EJERCICIO 7
/*
 * Eventos onFocus y onBlur. Diseña un formulario de contacto. En él deben aparecer campos para introducir el nombre, 
 * correo y el comentario que se desee mandar, así como dos botones para enviar o resetear. Haciendo uso de los eventos anteriores
 * debes mostrar un mensaje de ayuda (o descriptivo) de la caja o botón en el que se encuentre el foco.
*/
function onFocusBlur() {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const comentario = document.getElementById("comentario");
    
    function mostrarAyuda(element) {
        const textoAyuda = document.getElementById("ayuda" + element);
        textoAyuda.style.display = "block";
    }
    
    function ocultarAyuda(element) {
        const textoAyuda = document.getElementById("ayuda" + element);
        textoAyuda.style.display = "none";
    }
    
    nombre.onfocus = () => mostrarAyuda("Nombre");
    nombre.onblur = () => ocultarAyuda("Nombre");
    
    email.onfocus = () => mostrarAyuda("Email");
    email.onblur = () => ocultarAyuda("Email");
    
    comentario.onfocus = () => mostrarAyuda("Com");
    comentario.onblur = () => ocultarAyuda("Com");
}

// EJERCICIO 8
/*
 * Imagina que tienes un script en el servidor que no es capaz de tratar el carácter ampersand (&) enviado por un formulario.
 * Escribe una función que convierta todos los ampersand que se escriban en un campo a “and” cuando el campo pierda el foco.
*/
const mensaje = document.getElementById("mensaje");

function convertirAmpersand() {
    let valor = mensaje.value;
    valor = valor.replace(/&/g, "and");
    mensaje.value = valor;
}

mensaje.onblur = convertirAmpersand;

// EJERCICIOS 9 y 10
/*
 * Crea una página web que haciendo uso de eventos permita arrastrar una imagen haciendo uso del ratón (al pulsar sobre la imagen
 * la voy arrastrando hasta que suelto el botón).
 * 
 * Mejora el ejercicio anterior para que se pueda hacer en una página con un número cualquiera de imágenes.
*/
function moverImagenes() {
    document.querySelectorAll('.draggable').forEach(img => {
        let offsetX, offsetY;

        img.addEventListener('mousedown', (e) => {
            e.preventDefault(); // elimina el error de seguir moviendo la imagen aún habiéndola soltado
            // se calcula la diferencia entre la posición del ratón y la de la imagen
            offsetX = e.clientX - img.getBoundingClientRect().left;
            offsetY = e.clientY - img.getBoundingClientRect().top;

            // añade los eventos de movimiento del ratón
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });

        function mouseMoveHandler(e) {
            // se actualiza la posición de la imagen
            img.style.left = (e.clientX - offsetX) + 'px';
            img.style.top = (e.clientY - offsetY) + 'px';
        }

        function mouseUpHandler() {
            // elimina los eventos de movimiento del ratón
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }
    });
}
