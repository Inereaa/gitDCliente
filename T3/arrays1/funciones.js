
// EJERCICIO 1
/*
 * Realiza un script que solicite 5 números al usuario, almacenaremos estos números en un array y
 * posteriormente ofreceremos la siguiente información:
 * - Valor mínimo, valor máximo y valor medio.
*/
function valores5numeros() {
    const array = [];
    let contador = 0, total = 0;
    for (let i = 1; i <= 5; i++) {
        numero = parseInt(prompt("Introduzca el nº " + i));
        array[contador] = numero;
        contador++;
        total = total + numero;
    }
    maximo = Math.max(...array);
    minimo = Math.min(...array);
    medio = total / (contador);

    document.write("Valor máximo: " + maximo + "<br>Valor mínimo: " + minimo + "<br>Valor medio: " + medio);
}

// EJERCICIO 2
/*
 * Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un
 * color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/
function colorArray(color) {
    const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
    if (colores.includes(color)) {
        document.write("El color " + color + " SÍ está en el array inicial")
    } else {
        document.write("El color '" + color + "' NO está en el array inicial")
    }
}

// EJERCICIO 3
/*
 * Crear un array vacío, luego generar N números al azar (utiliza random del objeto Math) y
 * guardarlos en un array, N es introducido por el usuario.
*/
function arrayNAzar(cantidad) {
    const array = [];
    for (let i = 0; i < cantidad; i++) {
        numero = parseInt(Math.random() * 999);
        array[i] = numero;
    }
    document.write(array);
}

// EJERCICIO 4
/*
 * Existen dos arrays, cada uno con 5 palabras, generar los siguientes array:
 * - Intersección, Unión y Diferencia.
*/
function opConjuntos() {
    const primerA = ["azul", "rojo", "verde", "marrón", "morado"], segundoA = ["rosa", "azul", "blanco", "negro", "verde"];
    const int = [], dif = [];
    const union = primerA.concat(segundoA);

    for (let i = 0; i < primerA.length; i++) {
        if (segundoA.includes(primerA[i])) {
            int.push(primerA[i]);
        } else {
            dif.push(primerA[i]);
        }
    }

    document.write("Unión (los 2 arrays juntos): " + union + "<br>Intersección (comunes de los 2 arrays): " + int + "<br>Diferencia(elementos del array 1 SIN los comunes del array 2): " + dif);
}

// EJERCICIO 5
/*
 * Utilizando el método random del objeto Math carga con valores aleatorios un array de 20
 * elementos con valores enteros entre el 0 y el 100. Ten en cuenta que random devuelve un
 * número flotante entre 0 y 1. Una vez cargado muestra los datos del array por pantalla.
 * Tras ello muestra la información del ejercicio anterior sobre los valores de dicho array, es decir:
 * - Valor mínimo, valor máximo y valor medio.
*/
function array20mmm() {
    const array = [];
    let contador = 0, total = 0;
    for (let i=0 ; i<20 ; i++) {
        numero = parseInt(Math.random()*99);
        array[i] = numero;
        contador++;
        total = total + numero;
    }
    maximo = Math.max(...array);
    minimo = Math.min(...array);
    medio = total / (contador);
    document.getElementById('valores').innerHTML = "Valor máximo: " + maximo + "<br>Valor mínimo: " + minimo + "<br>Valor medio: " + medio;
}

// EJERCICIO 6
/*
 * Crea una página web que contenga varios párrafos con texto de ejemplo. La página contendrá
 * un botón que al pulsarlo solicitará al usuario una palabra o cadena de texto e indicará si existe
 * o no dicha palabra dentro del documento.
*/
function parrafoExistente() {
    teclado = prompt("Introduzca algo: ");
    for (let i=0 ; i<4 ; i++) {
        cadena = document.getElementsByTagName("p")[i].textContent;
        if (teclado==cadena) {
            document.getElementById('existe').innerHTML = "SÍ existe '" + cadena + "' en el documento";
        } else {
            document.getElementById('existe').innerHTML = "NO existe '" + teclado + "' en el documento";
        }
    }
}

// EJERCICIO 7
/*
 * Utilizando el método random del objeto Math carga con valores aleatorios un array de 20
 * elementos con valores enteros entre el 0 y el 100. Muestra los valores sin ordenar y ordenados
 * (eliminando duplicados), para ello deberás implementar alguno de los algoritmos de ordenación,
 * se recomienda el burbuja por su fácil implementación.
*/
function ordenarNrandom() {
    const array = [];
    for (let i = 0; i < 20; i++) {
        numero = parseInt(Math.random() * 99);
        array[i] = numero;
    }
    document.write("SIN ORDENAR: " + array);

    const comparar = (a, b) => a - b;
    const unicos = new Set(array);
    let numeros = [...unicos].sort(comparar);
    document.write("<br>SIN DUPLICADOS Y ORDENADOS: " + numeros);
}

// EJERCICIO 8
/*
 * Solicita al usuario el nombre de varias personas y luego muestra los nombres ordenados. Los
 * nombres serán introducidos en una sola cadena separado cada nombre por coma. Utiliza el método split.
*/
function ordenarNombres(cadena) {
    const nombres = cadena.split(", ");
    document.write(nombres.sort());
}

// EJERCICIO 9
/*
 * Leer una cadena de texto introducida por el usuario y posteriormente, mostrar la siguiente
 * información en una nueva ventana:
 * • Número de palabras.
 * • Primera palabra.
 * • Última palabra.
 * • Las palabras colocadas en orden inverso.
 * • Las palabras ordenadas de la a la z y las palabras ordenadas de la z a la a.
*/
function informacionCadena(cadena) {
    const array = cadena.split(" ");
    let nPalabras = array.length;
    let pPalabra = array[0];
    let uPalabra = array[nPalabras-1];

    const inversa = [];
    for (let i=nPalabras-1 ; i>=0 ; i--) {
        inversa.push(array[i]);
    }

    const az = [...array].sort(); // de la A-Z
    const za = [...az].reverse(); // de la Z-A

    document.write("La cadena introducida es: " + cadena + "<br>Nº de palabras: " + nPalabras + "<br>1ª palabra: " +
                    pPalabra + "<br>Última palabra: " + uPalabra + "<br>Palabras inversas: " + inversa + "<br>A-Z: " +
                    az + "<br>Z-A: " + za );
}