
// EJERCICIO 1
/* 
 * Define una función máximo que dados 4 valores devuelva el máximo de ellos.
 * Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/
function maximo(v1, v2, v3, v4) {
    return Math.max(v1, v2, v3, v4);
}

// EJERCICIO 2
/*
 * Crea una web desde la que se simule el lanzamiento de un dado de 6 caras. Para ello
 * define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.
*/
function tirarDado() {
    let aleatorio = parseInt(Math.random() * (7 - 1) + 1);
    document.getElementById('numero').innerHTML = "Te ha salido un: " + aleatorio;
}

// EJERCICIO 3
/*
* Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
 * modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
 * de ocurrencias de cada uno de los valores.
*/
function dado6000() {
    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
    for (let i = 0; i <= 6000; i++) {
        let aleatorio = parseInt(Math.random() * (7 - 1) + 1);
        switch (aleatorio) {
            case 1:
                c1++;
                break;
            case 2:
                c2++;
                break;
            case 3:
                c3++;
                break;
            case 4:
                c4++;
                break;
            case 5:
                c5++;
                break;
            case 6:
                c6++;
                break;
        }
    }
    document.getElementById('numero').innerHTML = "Nº1: " + c1 + " ; Nº2: " + c2 + " ; Nº3: " + c3 + " ; Nº4: " + c4 + " ; Nº5: " + c5 + " ; Nº6: " + c6;
}

// EJERCICIO 4
/*
 * Crea una web para calcular el volumen de una esfera. Para ello diseña una función
 * que dado el radio de ésta devuelva el volumen.
*/
function volumenEsfera(radio) {
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
}

// EJERCICIO 5
/*
 * Mejora el ejercicio anterior permitiendo calcular también el área de un circulo.
*/
function areaCirculo(radio) {
    document.write("El volumen de la esfera es: " + volumenEsfera(radio));
    area = Math.PI * Math.pow(radio, 2);
    document.write("<br>El área del círculo es: " + area);
}

// EJERCICIO 6
/*
 * Crea una función para calcular potencias de un modo recursivo.
*/
function potenciasRecursivas(base, exp) {
    // porque cualquier número elevado a 0 es 1
    if (exp == 0) {
        return 1;
    }
    // base * base^(exponente - 1)
    return base * potenciasRecursivas(base, exp - 1);
}

// EJERCICIO 7
/*
 * Crea una función que calcule el factorial de un número dado. Para comprobarlo,
 * diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.
*/
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function tablaFactoriales() {
    const tbody = document.getElementById("factoriales");
    for (let i = 1; i <= 10; i++) {
        const fila = document.createElement("tr");
        const colNum = document.createElement("td");
        const colFac = document.createElement("td");

        colNum.textContent = i;
        colFac.textContent = factorial(i);

        fila.appendChild(colNum);
        fila.appendChild(colFac);
        tbody.appendChild(fila);
    }
}