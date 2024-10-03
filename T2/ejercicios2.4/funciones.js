
// EJERCICIO 1a
/*
 * Devuelve invertida una cadena dada por el usuario.
*/
function invierteCadena(cad_arg) {
    cadenaReves="";
    for(let i=cad_arg.length-1 ; i>=0 ; i--) {
          cadenaReves += cad_arg.charAt(i);
        }
    return cadenaReves;
}

// EJERCICIO 1b
/*
 * Devuelve invertidas las palabras contenidas en la cadena.
*/
function inviertePalabras(cad_arg) {
    let resultado = "", palabra = "";

    for (let i=0; i<=cad_arg.length; i++) {
        // se comprueba si encontramos un espacio o si llegamos al final de la cadena
        if (cad_arg.charAt(i)==" " || i==cad_arg.length) {
            // aquí se invierte la palabra
            for (let j = palabra.length - 1; j >= 0; j--) {
                resultado += palabra.charAt(j);
            }
            resultado += " ";
            palabra = "";
        } else {
            // se agrega el caracter a la palabra
            palabra += cad_arg.charAt(i);
        }
    }

    return resultado;
}

// EJERCICIO 1c
/*
 * Para una cadena de caracteres dada, devuelve la longitud de la palabra más larga en ella contenida.
*/
function encuentraPalabraMasLarga(cad_arg) {
    let masLarga="", cadena="";
    for(let i=0 ; i<=cad_arg.length ; i++) {
        if (i<cad_arg.length && cad_arg.charAt(i)!=" ") {
            cadena += cad_arg.charAt(i);
        } else {
            if (cadena.length > masLarga.length) {
                masLarga = cadena;
            }
            cadena="";
        }
    }
    return masLarga;
}

// EJERCICIO 1d
/*
 * Para una cadena de caracteres y un valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.
*/
function filtraPalabrasMasLargas(cad_arg, i) {
    let contador=0, cadena="";
    for(let e=0 ; e<=cad_arg.length ; e++) {
        if (e<cad_arg.length && cad_arg.charAt(e)!=" ") {
            cadena += cad_arg.charAt(e);
        } else {
            if (cadena.length > i) {
                contador++;;
            }
            cadena="";
        }
    }
    return contador;
}

// EJERCICIO 1e
/*
 * Formatea correctamente la cadena pasada, de tal modo que sólo aparece en mayúscula la primera letra y
 * el resto en minúscula.
*/
function cadenaBienFormada(cad_arg) {
    const primeraLetra = cad_arg.charAt(0).toUpperCase();
    const restoDeLaCadena = cad_arg.slice(1).toLowerCase();

    return primeraLetra + restoDeLaCadena;
}

// EJERCICIO 2
/*
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 * A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
 * sólo por minúsculas o por una mezcla de ambas.
*/
function infoCadena(cad_arg) {
    const maysc = cad_arg.toUpperCase();
    const minsc = cad_arg.toLowerCase();
    if (maysc==cad_arg) {
        return " todo mayúsculas"
    } else if (minsc==cad_arg) {
        return " todo minúsculas"
    } else {
        return " mezcla de minúsculas y mayúsculas"
    }
}

// EJERCICIO 3
/*
 * Realizar un función que permita localizar todas las apariciones de una subcadena dentro de otra.
*/
function aparicionesSubcadena(cad_arg, subcad) {
    let apariciones=0, indice=0;

    while ((indice = cad_arg.indexOf(subcad, indice)) !== -1) {
        apariciones++;
        indice++;
    }
    return apariciones;
}

// EJERCICIO 4
/*
 * Crea una función que tomando una cadena de texto como entrada coloque todas sus consonantes al principio y
 * todas sus vocales al final de la misma, eliminando los blancos.
*/
function vocalesFinal(cad_arg) {
    let consonantes="", vocales="";
    for (let i=0; i<cad_arg.length; i++) {
        const caracter = cad_arg.charAt(i);
        if ("aeiouAEIOU".includes(caracter)) {
            vocales += caracter;
        } else {
            consonantes += caracter;
        }
    }
    return consonantes + vocales;
}

// EJERCICIO 5
/*
 * Desarrolla una función que elimine los caracteres repetidos de una cadena de texto, incluidos los blancos.
*/
function sinRepetidos(cad_arg) {
    let resultado = "";

    // primer bucle: se recorre cada carácter de la cadena
    for (let i=0; i<cad_arg.length; i++) {
        const caracter = cad_arg.charAt(i);
        let repetido = false;
        
        // segundo bucle: se comprueba si el carácter ya está en el resultado
        for (let j=0; j<resultado.length; j++) {
            if (caracter === resultado.charAt(j)) {
                repetido = true;
                break;
            }
        }
        // se comprueba si es repetido o no para añadirlo a la frase sin repetidos o no
        if (!repetido) {
            resultado += caracter;
        }
    }
    return resultado;
}

// EJERCICIO 6
/*
 * Implementa una función que tomando dos cadenas como entrada nos diga si la segunda es una subcadena de la primera y
 * cuál es la primera posición a partir de la que esto ocurre.
*/
function segundaEsSubcadena(cad_arg, subcad) {
    const posicion = cad_arg.indexOf(subcad);

    // se comprueba si se ha encontrado la subcadena en la cadena principal
    if (posicion !== -1) {
        return "La subcadena '" + subcad + "' se encuentra en la posición " + posicion + " de la cadena principal.";
    } else {
        return "La subcadena '" + subcad + "' NO se encuentra en la cadena principal.";
    }
}

// EJERCICIO 7
/*
 * Desarrolla una función que tomando como entrada una cadena de texto nos devuelva si es o no un palíndromo.
*/
function palindromo(cad_arg) {
    if (invierteCadena(cad_arg)==cad_arg) {
        return "SÍ";
    } else {
        return "NO";
    }
}

// EJERCICIO 8
/*
 * Implementa una función que tomando como entrada una cadena de texto sea capaz de contabilizar el número de palabras.
 * Ten en cuenta que entre dos palabras puede haber más de 1 blanco, e incluso pueden aparecer al principio o final de esta.
*/
function contarPalabras(cad_arg) {
    // se eliminan los espacios en blanco al principio y al final de la frase primero
    cad_arg = cad_arg.trim();

    // '\s+' divide la cadena por uno o más espacios en blanco
    const palabras = cad_arg.split(/\s+/);

    return palabras.length;
}

// EJERCICIO 9
/*
 * You're starting your own credit card business. You need to come up with a new way to validate credit cards with
 * a simple function called validateCreditCard that returns true or false.
 * Here are the rules for a valid number:
 * • Number must be 16 digits, all of them must be numbers
 * • You must have at least two different digits represented (all of the digits cannot be the same)
 * • The final digit must be even
 * • The sum of all the digits must be greater than 16

 * The following credit card numbers are valid:
 * • 9999777788880000
 * • 6666666666661666

 * The following credit card numbers are invalid:
 * • a92332119c011112 (invalid characters)
 * • 4444444444444444 (only one type of number)
 * • 1111111111111110 (sum less than 16)
 * • 6666666666666661 (odd final number)
*/

function validateCreditCard(num_tarjeta) {
    let numeroRepetir = num_tarjeta.charAt(0), cadena="", total=0;
    for (let i=0 ; i<16 ; i++) {
        cadena += numeroRepetir;
        numeroInt = parseInt(num_tarjeta.charAt(i));
        total += numeroInt;
    }
    if (num_tarjeta.length==16 && !isNaN(num_tarjeta) && (num_tarjeta.charAt(15)%2)==0 && cadena!=num_tarjeta && total>=16) {
        return "Nº de tarjeta '" + num_tarjeta + "' válido.";
    } else {
        return "ERROR. Nº de tarjeta '" + num_tarjeta + "' inválido.";
    }
}

// EJERCICIO 10
/*
 * Mejora la función anterior creando validateCreditCard2 y añade los siguientes elementos:
 * A valid credit card number may also contain dashes, to make a card number easier to read.
 * For example, the following credit card numbers are now also valid:
 * • 9999-7777-8888-0000
 * • 6666-6666-6666-1666
 * 
 * Update your program to allow such numbers.
 * (Hint: Remove the dashes from the input string before checking if the input credit card number is valid)
*/
function validateCreditCard2(num_tarjeta) {
    const numeroLimpio = num_tarjeta.replace(/-/g, "");
    return validateCreditCard(numeroLimpio);
}