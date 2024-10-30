
// EJERCICIO 1
/*
 * Diseña una web que cree un Array llamado clase que contenga información de una clase.
 * Cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer
 * trimestre, nota segundo trimestre y nota tercer trimestre (todos separados por comas).
 * Por ejemplo: clase[0] = “Angel Garcia, 20, 6, 7, 10”
*/
const clase = [
    "María, 12, 9, 6, 7",
    "Julia, 9, 6, 7, 9",
    "Pedro, 11, 10, 9, 10",
    "Hugo, 10, 7, 8, 8",
]

// EJERCICIO 2
/*
 * Escribe una función que dado un número de estudiante y un trimestre, devuelva su nota.
 * Sobreescribe esa función de tal modo que si no se indica el trimestre se devuelva la nota media.
*/
function nota(estudiante, trim) {
    // separo todos los datos de cada alumno
    const datos = clase[estudiante].split(", ");
    // creo un array nuevo para solo guardar las notas de los trimestres
    const notas = [];
    for (let i=1 ; i<datos.length ; i++) {
        notas.push(datos[i]);
    }

    if (trim == undefined) {
        let suma = 0;
        for (let i=0; i<notas.length; i++) {
            suma += parseInt(notas[i]);
        }
        const notaMedia = suma / notas.length;
        return notaMedia;
    }

    return notas[trim];
}

// EJERCICIO 3
/*
 * Escribe una función que devuelva la edad media de los alumnos de la clase.
*/
function edadMedia() {
    let edades = 0;
        for (let i=0; i<clase.length; i++) {
            const datos = clase[i].split(", ");
            const edad = parseInt(datos[1]);
            edades += edad;
        }
        const edadMedia = edades / clase.length;
    return edadMedia;
}

// EJERCICIO 4
/*
 * A veces para elegir un estudiante al que preguntar en clase necesitamos hacerlo al azar.
 * Escribe una función que aleatoriamente vaya devolviendo el nombre de un estudiante cada vez.
*/
function alumRandom() {
    const datos = clase[Math.floor(Math.random()*clase.length)].split(", ");
    const alumno = datos[0];
    return alumno;
}

// EJERCICIO 5
/*
 * Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1 al 1000.
 * Una vez creado, mostrar el contenido y después organizarlo de forma que estén
 * juntos los elementos pares y los impares. Después, volver a mostrar el array.
*/
function paresImpares() {
    // se crea un array de 100 números aleatorios hasta 1000
    let numeros = [];
    for (let i = 0; i < 100; i++) {
        numeros.push(Math.floor(Math.random()*1000)+1);
    }
    
    // mostramos el array original
    document.write("Números SIN ordenar:" + numeros);

    // aquí se separan los números en PARES e IMPARES
    let pares = [];
    let impares = [];
    for (let i=0; i<numeros.length; i++) {
        if (numeros[i]%2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }
    // se combinan los pares y los impares y se devuelve el valor final
    return pares.concat(impares);
}

// EJERCICIO 6
/*
 * Utiliza Arrays para resolver el siguiente problema: Una empresa paga a sus vendedores en
 * base a comisiones. Los vendedores reciben $200 por semana, más el 9% de sus ventas
 * brutas de esa semana. Por ejemplo, un vendedor que gana en total $5000 en ventas en una
 * semana recibe $200 más el 9% de $5000, o sea un total de $650. Diseña una web que permita
 * dar de alta a vendedores, introducir sus ventas e indique cual sería su sueldo final.
*/
const vendedores = [];
function agregarVendedor() {
    let nombre = document.getElementById('nombre').value;
    let ventas = parseInt(document.getElementById('ventas').value);
    let sueldo = 200 + (ventas * 0.09);

    vendedores.push({ nombre: nombre, ventas: ventas, sueldo: sueldo });
    mostrarVendedores();
}
function mostrarVendedores() {
    let total = document.getElementById('total');
    total.innerHTML = ""; // se limpian los datos anteriores

    vendedores.forEach(vendedor => {
        let info = document.createElement('p');
        info.textContent = "Nombre: " + vendedor.nombre + " || Ventas: " + vendedor.ventas.toFixed(2) + " || Sueldo: $" + vendedor.sueldo.toFixed(2);
        total.appendChild(info);
    });
}

// EJERCICIO 7
/*
 * Escribe las funciones para realizar las siguientes operaciones para un array de una dimensión:
 * a) Establecer los 10 elementos del array a cero.
 * b) Añadir 1 a cada uno de los elementos del array.
 * c) Muestra los valores del array separados por espacios.
*/
const aCero=(array) => {
    cero = [];
    array.forEach(element => { cero.push(0) });
    return cero;
}

const sumarUno=(array) => {
    sumados = [];
    array.forEach(element => { sumados.push(element+1) });
    return sumados;
}

const espacios=(array) => array.join(" ");

// EJERCICIO 8
/*
 * Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
 * dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
 * dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
 * valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
 * lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
*/
const dados=() => {
    const total = new Array(13).fill(0);

    for (let i=0; i<36000; i++) {
        const dado1 = Math.floor(Math.random()*6)+1;;
        const dado2 = Math.floor(Math.random()*6)+1;;
        const suma = dado1 + dado2;
    
        total[suma]++;
    }
    
    for (let i=2; i<=12; i++) {
        document.write("Combinación " + i + " = " + total[i] + " veces<br>");
    }
}

// EJERCICIO 9
/*
 * Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
 * combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays bidimensionales).
*/
const dadosMejorados=() => {
    const combinaciones = Array.from({ length:7 }, () => Array(7).fill(0));

    for (let i=0; i<36000; i++) {
        const dado1 = Math.floor(Math.random()*6)+1;
        const dado2 = Math.floor(Math.random()*6)+1;
        
        combinaciones[dado1][dado2]++;
    }

    document.write("<table border='1'>");
    document.write("<tr><th> DADOS </th>");
    for (let i=1; i<=6; i++) {
        document.write("<th>" + i + "</th>");
    }
    document.write("</tr>");

    for (let i=1; i<=6; i++) {
        document.write("<tr><td>" + i + "</td>");
        for (let j=1; j<=6; j++) {
            document.write("<td>" + combinaciones[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

// EJERCICIO 10
/*
 * Una pequeña aerolínea acaba de comprar un programa para su nuevo sistema de reservas.
 * Diseña la web encargada de asignar asientos en cada vuelo de avión de la aerolínea
 * (capacidad: 10 plazas). Se debe pedir en primer lugar el tipo de asiento: "First” (asientos 1 al 5)
 * o/y "Turista" (resto). Una vez escogido un asiento libre, se debe poder imprimir una
 * tarjeta de embarque que indique la persona, el número de asiento y clase de éste (en una
 * nueva ventana). Deben utilizarse arrays para solucionar el problema.
*/


// EJERCICIO 11
/*
 * Utiliza una matriz de dos dimensiones para resolver el siguiente problema: Una empresa
 * tiene cuatro vendedores (1 a 4) que venden cinco productos diferentes (1 a 5). Una vez al
 * día, cada vendedor pasa en un estadillo con las ventas realizadas por producto. Cada hoja contiene:
 * a) el número de vendedor,
 * b) el número de producto, y
 * c) el valor total de los productos vendidos ese día.
 * Así, cada vendedor pasa entre cero y cinco hojas de ventas por día. Supón que disponemos
 * de la información de todos los estadillos del último mes. Escribir un script que lee toda esta
 * información de las ventas del mes pasado y resumir el total de ventas por vendedor por
 * producto. Todos los totales deben estar almacenan en las ventas de matriz de dos dimensiones.
 * Después de procesar toda la información para el mes pasado, mostrar los resultados en
 * un formato de tabla XHTML, con cada una de las columnas que representan un vendedor y
 * cada una de las filas que representan un producto diferente. Además se mostrará una última fila
 * con las ventas acumuladas por vendedor, y una última columna con las ventas acumuladas por producto.
*/

