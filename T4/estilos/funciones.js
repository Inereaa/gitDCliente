
// EJERCICIO 1
/*
 * Se trata de la misma página con 2 estilos diferentes (tema normal y tema minimalista). 
 * Haciendo sólo uso de JavaScript consigue que se pueda cambiar el estilo (pulsando los
 * enlaces de la parte superior) para que quede tal cual puedes ver. 
 * Deberás hacerlo con dos versiones:
 * 
 * a) Modificando el estilo desde JavaScript (las hojas de estilo no estan creadas, sino 
 *    que se establece mediante atributos del objeto style).
 * b) Creando dos hojas de estilo diferentes que se carguen dinámicamente según la opción pulsada.
*/
// A)
function AtemaNormal() {
    // header con enlaces
    document.querySelector('header').style.fontWeight = 'bold';
    document.querySelector('header').style.border = '1px solid black';
    document.querySelector('header').style.padding = '5px';
    document.querySelector('header').style.backgroundColor = 'lightblue';
    document.querySelector('header').style.width = '400px';
    document.querySelector('header').style.fontSize = '15px';
    document.getElementsByTagName('a')[0].style.textDecoration = 'none';
    document.getElementsByTagName('a')[1].style.textDecoration = 'none';

    // h2 y fondo
    document.querySelector('*').style.fontFamily = 'Arial';
    document.querySelector('h2').style.fontWeight = 'bold';
    document.querySelector('*').style.backgroundColor = 'rgb(255, 255, 161)';

    // aside
    document.querySelector('header').style.position = 'relative';
    document.querySelector('header').style.marginLeft = '150px';
    document.querySelector('section').style.position = 'relative';
    document.querySelector('section').style.marginLeft = '150px';
    document.querySelector('aside').style.position = 'absolute';
    document.querySelector('aside').style.top = '0';
    document.querySelector('aside').style.left = '0';
    document.querySelector('aside').style.height = '100%';
    document.querySelector('aside').style.padding = '4em';
    document.querySelector('aside').style.backgroundColor = 'rgb(141, 212, 253)';

    // 'p' con marco
    document.getElementById('marco').style.border = '1px solid black';
    document.getElementById('marco').style.padding = '5px';
    document.getElementById('marco').style.backgroundColor = 'yellow';
    document.getElementById('marco').style.width = '400px';

    // párrafo invisible en MINIMALISTA
    document.getElementsByClassName('oculto')[1].style.fontWeight = 'bold';
    document.getElementsByClassName('oculto')[0].style.visibility = 'visible';
    document.getElementsByClassName('oculto')[1].style.visibility = 'visible';
    document.getElementById('marco').style.marginTop = '0px';
}

function AtemaMinimal() {
    // header con enlaces
    document.querySelector('header').style.fontWeight = 'normal';
    document.getElementsByTagName('a')[0].style.textDecoration = 'underline';
    document.getElementsByTagName('a')[1].style.textDecoration = 'underline';
    document.querySelector('header').style.border = 'none';
    document.querySelector('header').style.padding = '0px';
    document.querySelector('header').style.backgroundColor = 'white';

    // h2 y fondo
    document.querySelector('*').style.fontFamily = 'sans serif';
    document.querySelector('*').style.backgroundColor = 'white';

    // aside
    document.querySelector('header').style.position = 'inherit';
    document.querySelector('header').style.marginLeft = '0px';
    document.querySelector('section').style.position = 'inherit';
    document.querySelector('section').style.marginLeft = '0px';
    document.querySelector('aside').style.zIndex = '-1';
    document.querySelector('aside').style.backgroundColor = 'white';

    // 'p' con marco
    document.getElementById('marco').style.border = 'none';
    document.getElementById('marco').style.padding = '0px';
    document.getElementById('marco').style.backgroundColor = 'white';

    // párrafo invisible en MINIMALISTA
    document.getElementsByClassName('oculto')[0].style.visibility = 'hidden';
    document.getElementsByClassName('oculto')[1].style.visibility = 'hidden';
    document.getElementById('marco').style.marginTop = '-70px';
}

// B)
function BtemaNormal() {
    let link = document.querySelector('link');
    link.href = 'temaNormal.css';
}

function BtemaMinimal() {
    let link = document.querySelector('link');
    link.href = 'temaMinimal.css';
}

// EJERCICIO 2
/*
 * Diseña una página web que debe contener texto (mínimo 4 párrafos). Deberás añadir la siguiente funcionalidad mediante JavaScript:
 * • Tamaño de fuente. Debe ser posible incrementar o decrementar la fuente usada, así como volver al tamaño por defecto.
 * • Alineación del texto: Debe ser posible cambiar la alineación a Justificada o a Izquierda.
*/
// aumentar el tamaño de la letra
function masFontSize() {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(p => {
        let fontSize = window.getComputedStyle(p).fontSize;
        fontSize = parseFloat(fontSize);
        p.style.fontSize = (fontSize + 2) + 'px';
    });
}

// reducir el tamaño de la letra
function menosFontSize() {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(p => {
        let fontSize = window.getComputedStyle(p).fontSize;
        fontSize = parseFloat(fontSize);
        p.style.fontSize = (fontSize - 2) + 'px';
    });
}

// resetear el tamaño de la letra
function tamReset() {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(p => {
        p.style.fontSize = '16px';
    });
}

// alinear texto a la izquiera
function alinearIzq() {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(p => {
        p.style.textAlign = 'left';
    });
}

// justificar el texto
function justTexto() {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach(p => {
        p.style.textAlign = 'justify';
    });
}