
// EJERCICIO 1
function hoyHastaNavidad () {
    const fechaAct = new Date();
    const fechaDic = new Date('2024-12-19');
    var tiempo = Math.round((fechaDic - fechaAct)/(1000 * 60 * 60 * 24));
    return tiempo;
}

// EJERCICIO 2
function cumpleDomingo (cumple) {
    const nacimiento = new Date(cumple);
    while (nacimiento.getFullYear()<2101) {
        nacimiento.setFullYear(nacimiento.getFullYear()+1);
        if (nacimiento.getDay()==0) {
            console.log(nacimiento.getFullYear());
        }
    }
}

// EJERCICIO 3
function hora2Formatos () {
    const fecha = new Date();
    hora = fecha.getHours();
    mins = fecha.getMinutes();
    segs = fecha.getSeconds();
    document.write(hora + ":" + mins + ":" + segs + "<br>")
    document.write("Son las " + hora + "h y " + mins + "m")
}

// EJERCICIO 4
function tiempoDatos () {
    const comienzo = Date.now();

    const nombre = prompt("Introduce tu nombre: ");
    const apellido1 = prompt("Introduce tu primer apellido: ");
    const apellido2 = prompt("Introduce tu segundo apellido: ");

    const final = Date.now();
    const total = Math.round((final - comienzo) / 1000); // así se pasa a segundos

    document.write("En introducir '" + nombre + " " + apellido1 + " " + apellido2 + "' has tardado " + total + " segundos");
}

// EJERCICIO 5
function opcionesMates (opcion) {
    switch (opcion) {
        case 1:
            base = prompt("Introduce una base: ");
            expo = prompt("Introduce un exponente: ");
            resultado = Math.pow(base, expo);
            document.write("La potencia de " + base + " elevado a "+ expo + " es " + resultado);
            break;
        case 2:
            num = prompt("Introduce un nº (NO negativo): ");
            resultado = Math.sqrt(num);
            document.write("La raíz de " + num + " es " + resultado);
            break;
        case 3:
            num = parseFloat(prompt("Introduce un nº DECIMAL: "));
            document.write("Redondeo más próximo: " + Math.round(num) + "<br>Redondeo bajo: "+ Math.floor(num) + "<br>Redondeo alto: " + Math.ceil(num));
            break;
        case 4:
            num = prompt("Introduce un ángulo (entre 0º-360º): ");
            document.write("Seno: " + Math.sin(num) + "<br>Coseno: " + Math.cos(num) + "<br>Tangente: " + Math.tan(num));
            break;
    }

}

// EJERCICIO 6
function nombreYApellidos (cadena) {
    sinEspacios = cadena.replace(" ", "");
    console.log("El tamaño de tu nombre y tus apellidos es de " + sinEspacios.length + " caracteres en total.");
    console.log("Mayúsculas: " + cadena.toUpperCase() + "\nMinúsculas: " + cadena.toLowerCase());
    let partes = cadena.split(" ");
    let nombre = partes[0];
    let apellido1 = partes[1];
    let apellido2 = partes[2];
    console.log("Nombre: " + nombre);
    console.log("Apellido 1: " + apellido1);
    console.log("Apellido 2: " + apellido2);
}

// EJERCICIO 7
function numero3Mayor (n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

// EJERCICIO 8
function letraAFrase (cadena) {
    let contador=0;
    for (let i=0 ; i<cadena.length ; i++) {
        if (cadena.charAt(i)=="a") {
            contador++;
        }
    }
    return contador;
}

// EJERCICIO 9
function cuantasVocales (cadena) {
    let contador=0;
    cadena=cadena.toLowerCase();
    for (let i=0 ; i<cadena.length ; i++) {
        if (cadena.charAt(i)=="a" || cadena.charAt(i)=="e" || cadena.charAt(i)=="i" || cadena.charAt(i)=="o" || cadena.charAt(i)=="u") {
            contador++;
        }
    }
    return contador;
}

// EJERCICIO 10
function cadaVocal (cadena) {
    let cA=0, cE=0, cI=0, cO=0, cU=0;
    cadena=cadena.toLowerCase();
    for (let i=0 ; i<cadena.length ; i++) {
        if (cadena.charAt(i)=="a") {
            cA++;
        } else if (cadena.charAt(i)=="e") {
            cE++;
        } else if (cadena.charAt(i)=="i") {
            cI++;
        } else if (cadena.charAt(i)=="o") {
            cO++;
        } else if (cadena.charAt(i)=="u") {
            cU++;
        }
    }
    document.write("A: " + cA + "<br>E: " + cE + "<br>I: " + cI + "<br>O: " + cO + "<br>U: " + cU);
}

// EJERCICIO 11
function fraseAlReves (cadena) {
    cadenaReves="";
    for(let i=cadena.length-1 ; i>=0 ; i--) {
          cadenaReves += cadena.charAt(i);
        }
    return cadenaReves;
}