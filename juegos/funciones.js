
// STOPWATCH
/*
 * Coding a JavaScript stopwatch is an easy little project you can build in one day even as a beginner.
 * Your stopwatch needs three buttons for user interaction: Start - Stop - Reset
*/
let contador = 0;
let intervalo = null;

// función para iniciar el contador desde el '00:00' (si está parado con la función stop(), continuará por donde estaba)
function start() {
    if (intervalo === null) {
        intervalo = setInterval(function () {
            contador++;
            let minutes = Math.floor(contador / 60);
            let seconds = contador % 60;
            let formattedTime = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
            document.getElementById('reloj').innerHTML = formattedTime;
        }, 1000);
    }
}

// función para parar el contador
function stop() {
    clearInterval(intervalo);
    intervalo = null;
}

// función para resetear el contador al '00:00'
function reset() {
    stop();
    contador = 0;
    document.getElementById('reloj').innerHTML = "00:00";
}


// HANGMAN
/*
 * Building a Hangman game is one of the best JavaScript project ideas for beginners who want a bit of a challenge.
 * If you’re not familiar, the hangman game is about guessing a random word by guessing letters one by one.
 * If the player runs out of guesses, the game is over.
*/
const palabras = ['elefante', 'puma', 'gato', 'marmota', 'cebra'];  // mi lista de palabras (he elegido animales)
let palabraSecreta = '';
let palabraMostrada = [];
let vidas = 10;

// se selecciona una palabra aleatoria de mi lista 'palabras'
function seleccionarPalabra() {
    const huecos = Math.floor(Math.random() * palabras.length);
    palabraSecreta = palabras[huecos];
    palabraMostrada = Array(palabraSecreta.length).fill('_');
    document.getElementById('espacios').innerText = palabraMostrada.join(' ');
    document.getElementById('vidas').innerText = "You have " + vidas + " lives";
}

// función para que funcionen las letras
function letra() {
    const letraSeleccionada = event.target.id;
    let letraCorrecta = false;
    console.log(letraSeleccionada)

    // aquí se comprueba si la letra seleccionada está en la palabra elegida para la partida actual
    for (let i=0; i<palabraSecreta.length; i++) {
        console.log(palabraSecreta[i]);
        if (palabraSecreta[i] === letraSeleccionada) {
            palabraMostrada[i] = letraSeleccionada;
            letraCorrecta = true;
        }
    }

    if (!letraCorrecta) {
        vidas--;
        document.getElementById('vidas').innerText = "You have " + vidas + " lives";
    }

    // se actualiza la palabra
    document.getElementById('espacios').innerText = palabraMostrada.join(' ');

    // Verificamos si el jugador ha ganado o ha perdido
    if (palabraMostrada.join('') === palabraSecreta) {
        alert(" ¡Has ganado! ");
    } else if (vidas <= 0) {
        alert("Oh no... Te has quedado sin vidas.");
    }
    
    // después de pulsar cada letra se desactiva esta misma
    event.target.disabled = true;
}

// con esto se llama a la función cada vez que se recargue la página, simplemente
window.onload = function() {
    seleccionarPalabra();
};

// MEMORY
/*
 * Coding a JavaScript memory matching game or pairs game is another fun project you can build for fun (and for your portfolio!).
 * The logic of the game is simple:
 * There are a given number of cards on the table facing down. The player needs to find all the pairs.
 * However, you may want to add more difficulty by limiting the number of guesses or by setting a time limit for the game to be finished.
*/
const imagenes = [
    "memory_cartas/img1.png", "memory_cartas/img1.png", 
    "memory_cartas/img2.png", "memory_cartas/img2.png", 
    "memory_cartas/img3.png", "memory_cartas/img3.png", 
    "memory_cartas/img4.png", "memory_cartas/img4.png", 
    "memory_cartas/img5.png", "memory_cartas/img5.png"
];

// aquí mezclo las imágenes
imagenes = imagenes.sort(() => 0.5 - Math.random());

let seleccionadas = [];
let paresEncontrados = 0;
let tiempo = 0;
let interv = null;

function girarCarta(indice) {
    const carta = document.getElementById(`carta${indice}`);

    if (carta.getAttribute("data-descubierta") === "true") return;

    // para mostrar la imagen de la carta
    carta.src = imagenes[indice];

    seleccionadas.push({ carta, indice });

    // inicio el cronómetro
    if (interv === null) {
        interv = setInterval(() => {
            tiempo++;
            actualizarTimer();
        }, 1000);
    }

    if (seleccionadas.length === 2) {
        verificarPareja();
    }
}

function verificarPareja() {
    const [carta1, carta2] = seleccionadas;

    if (imagenes[carta1.indice] === imagenes[carta2.indice]) {
        carta1.carta.setAttribute("data-descubierta", "true");
        carta2.carta.setAttribute("data-descubierta", "true");
        paresEncontrados++;

        if (paresEncontrados === imagenes.length / 2) {
            clearInterval(interv);
            alert("¡Felicidades! Terminaste en " + tiempo + " segundos.");
        }
    } else {
        setTimeout(() => {
            carta1.carta.src = "reverso.png";
            carta2.carta.src = "reverso.png";
        }, 1000);
    }

    seleccionadas = [];
}

function actualizarTimer() {
    let tm = document.getElementById('timer');
    const minutos = String(Math.floor(tiempo / 60)).padStart(2, "0");
    const segundos = String(tiempo % 60).padStart(2, "0");
    tm.textContent = minutos + ":" + segundos;
}

// GROCERY LIST
/*
 * Una lista de la compra con un botón 'Submit' para añadir elementos a la lista
 * y otro al final que sea 'Clear items' para borrar todos los elementos de la lista.
*/
function submitItems() {
    let lista = document.getElementById('lista');
    let item = document.getElementById('item');
    let elemento = document.createElement('p');
    elemento.textContent = item.value;
    lista.appendChild(elemento);
    item.value = "";
}

function clearItems() {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
}
