
// EJERCICIO 1
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}


// EJERCICIO 2
function addOnlyNums() {
    let total = 0;
    for (let i = 0 ; i <arguments.length ; i++) {
        if (arguments[i]===parseInt(arguments[i])) {
            total += arguments[i];
        }
    }
    return total;
}


// EJERCICIO 3
function countTheArgs() {
    return arguments.length;
}


// EJERCICIO 4
function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}


// EJERCICIO 5
function sumEveryOther() {
    let total = 0;
    // la única diferencia de este ejercicio y el de sumarlo todo, es que aquí sumo 2 en el for de la i
    for (let i = 0; i < arguments.length; i += 2) {
        total += arguments[i];
    }

    return total;
}


// EJERCICIO 6
function divisible(num) {
    if (num%3==0) {
        return "sí";
    } else {
        return "no";
    }
}


// EJERCICIO 7
function divisibleEntre(nume, deno) {
    if (nume%deno==0) {
        return "sí";
    } else {
        return "no";
    }
}


// EJERCICIO 8
function rango(valor, rangoInf, rangoSup) {
    if (valor>rangoSup || valor<rangoInf) {
        return "fuera";
    } else {
        return "dentro";
    }
}


// EJERCICIO 9
function tieneTresDigitos(num) {
    if (num>99 && num<1000) {
        return "sí";
    } else {
        return "no";
    }
}


// EJERCICIO 10
function areaRectangulo(base, altura) {
    return base*altura;
}


// EJERCICIO 11
function imc(peso, altura) {
    altura=altura/100;
    return parseInt(peso/(altura*altura));
}


// EJERCICIO 12
function precioFinal(original, descuento) {
    descuento=(descuento*original)/100;
    return original-descuento;
}


// EJERCICIO 13
function factorial(num) {
    if (num<0) {
        return "ERROR. Los números negativos son inválidos.";
    }
    if (num===0) {
        return 1; // para el nº0 el factorial es 1
    }
    return num*factorial(num-1);
}


// EJERCICIO 14
function divisible2(nume, deno) {
    if (deno===0) {
        return "ERROR. No se puede dividir entre 0.";
    } else if (nume%deno==0) {
        return nume + "/" + deno + "=" + (nume/deno);
    } else {
        return "El nº" + nume + " y el nº" + deno +" no son divisibles.";
    }
}