
// EJERCICIO 1
function randomTres (n1, n2) {
    document.write("Entre 0-1: " + Math.random());
    document.write("<br>Entre 100-200: " + (Math.random()*(200-100)+100));
    let min = Math.min(n1, n2);
    let max = Math.max(n1, n2);
    document.write("<br>Entre " + min + "-" + max + ": " + (Math.random()*(max-min)+min));
}

// EJERCICIO 2
function senCosTang (angulo) {
    document.write("Seno: " + Math.sin(angulo) + "<br>Coseno: " + Math.cos(angulo) + "<br>Tangente: " + Math.tan(angulo));
}

// EJERCICIO 3
function hipotenusaTRec (v1, v2) {
    return Math.sqrt(v1*v1 + v2*v2);
}

// EJERCICIO 4
function hipotenusaTRec () {
    do {
        siono = parseInt(prompt("¿Quiere calcular alguna hipotenusa?\n1. SÍ\n2. NO"));
        if (siono==2) break;
        v1 = prompt("Introduce un cateto: ");
        v2 = prompt("Introduce el otro cateto: ");
        alert("La hipotenusa es: " + Math.sqrt(v1*v1 + v2*v2));
    } while (siono!=2);
    document.write("¡Adiós!");
}

// EJERCICIO 5
function ecuacionesSegundoGrado(a, b, c) {
    // se calcula el discriminante (b² - 4ac)
    let discriminante = b*b-4*a*c;

    if (discriminante>0) {
        // hay 2 soluciones reales
        let x1 = (-b + Math.sqrt(discriminante)) / (2*a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2*a);
        alert("Las soluciones son: x1 = " + x1 + " y x2 = " + x2);
    } else if (discriminante === 0) {
        // hay 1 solución real
        let x = -b / (2*a);
        alert("La solución única es: x = " + x);
    } else {
        // soluciones complejas
        let parteReal = (-b / (2*a)).toFixed(2);
        let parteImaginaria = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2);
        alert("Las soluciones complejas son: x1 = " + parteReal + " + " + parteImaginaria + "i y x2 = " + parteReal + " - " + parteImaginaria + "i");
    }
}

// EJERCICIO 6
function calcularPotencia() {
    let base = document.getElementById('base').value;
    let exponente = document.getElementById('exponente').value;

    let resultado = Math.pow(base, exponente);

    document.getElementById('resultado').innerHTML = "El resultado de " + base + " elevado a " + exponente + " es: " + resultado;
}

// EJERCICIO 7
function generarTablaSeno() {
    let numero = parseInt(document.getElementById('numero').value);
    let tbody = document.getElementById('tablaSeno').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ""; // se limpia la tabla anterior

    for (let i=1; i<=numero; i++) {
        let fila = tbody.insertRow();
        let celdaNumero = fila.insertCell(0);
        let celdaSeno = fila.insertCell(1);

        celdaNumero.textContent = i;
        celdaSeno.textContent = Math.sin(i).toFixed(2);
    }
}

// EJERCICIO 8
function imagenAleatoria () {
    const numeroAleatorio = Math.floor(Math.random()*3)+1;
    switch (numeroAleatorio) {
        case 1:
            document.getElementById('imagenAleatoria').src = 'pajaro.webp';
            break;
        case 2:
            document.getElementById('imagenAleatoria').src = 'gato.png';
            break;
        case 3:
            document.getElementById('imagenAleatoria').src = 'perro.webp';
            break;
    }
}