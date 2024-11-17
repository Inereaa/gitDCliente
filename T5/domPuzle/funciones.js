
// EJERCICIO 1
/*
 * Introduce en una página XHML un div que muestre un número que trataremos como un contador,
 * de tal forma queal pulsar un botón ese contador se incremente en uno cada vez.
*/
let contador = 0;
const aumentar=() => {
    let num = document.getElementById('num');
    contador++;
    num.textContent = contador;
}

// EJERCICIO 2
/*
 * Diseña una web para jugar al juego del 15 (Puzle). En él se dispone de un tablero de 4x4 para un total de 16 casillas.
 * Una de las casillas esta vacía, mientras las otras se ocupan con números del 1 al 15 (colocados aleatoriamente). Cualquier casilla
 * adyacente al hueco se puede mover (intercambiar con éste) con tan sólo clicar sobre ella. Tu web debe crear el tablero (desordenado)
 * y haciendo uso sólo del DOM yeventos debes permitir jugar al usuario., detectando correctamente cuando se halla resuelto el juego.
*/


// EJERCICIO 3
/*
 * Mejora el juego anterior para hacerlo con una imagen (partida previamente en 15 trozos) como si de un puzle tradicional se tratara.
*/

