
// empezar el juego
function juegoRGB() {
    // esta función genera los colores aleatorios RGB
    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return "rgb("+r+", "+g+", "+b+")";
    }

    vidas = 3;
    document.getElementById('vidas').textContent = "vidas restantes:" +vidas;
    document.getElementById('mensaje').textContent = "";
    document.getElementById('reiniciar').style.display = "none";  // se oculta el botón de 'reintentar'
    juegoTerminado = false;

    // se genera el color para adivinar
    correcto = randomColor();

    // se pone por pantalla el color correcto que hay que adivinar
    document.getElementById('rgb').textContent = "Selecciona el "+correcto;

    // se crean el resto de colores
    const opciones = [];
    for (let i=0; i<6; i++) {
        const color = randomColor();
        opciones.push(color);
    }

    // el color correcto se pone en una posición aleatoria
    const posicionRandom = Math.floor(Math.random() * 6);
    opciones[posicionRandom] = correcto;

    // mostrar los colores por pantalla
    const contenedorOpciones = document.getElementById('opciones');
    contenedorOpciones.innerHTML = "";
    opciones.forEach(color => {
        const recuadro = document.createElement('div');
        recuadro.classList.add('colorRecuadro');
        recuadro.style.backgroundColor = color;
        recuadro.addEventListener('click', () => checkAnswer(color));
        contenedorOpciones.appendChild(recuadro);
    });

    // función que comprueba si se ha seleccionado el color correcto o no
    function checkAnswer(seleccionado) {
        // este IF se implementa para que si se acierta el color, no te deje seguir jugando
        if (juegoTerminado) {
            return;
        }
        if (seleccionado == correcto) {
            document.getElementById('mensaje').textContent = "¡Correcto, ganaste!";
            document.getElementById('reiniciar').style.display = "block"; // mostrar el botón 'reintentar'
            juegoTerminado = true;
        } else {
            vidas--;
            document.getElementById('vidas').textContent = "vidas restantes:" +vidas;
            if (vidas > 0) {
                document.getElementById('mensaje').textContent = "¡Incorrecto! Inténtalo de nuevo.";
            } else {
                document.getElementById('mensaje').textContent = "¡Oh no!, Te has quedado sin vidas, juega de nuevo para continuar.";
                document.getElementById('reiniciar').style.display = "block"; // mostrar el botón 'reintentar'
                juegoTerminado = true;
            }
        }
    }
}
