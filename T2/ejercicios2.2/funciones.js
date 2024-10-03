
// EJERCICIO 1
/*
 * Utilizando setTimeout(), setInterval() creo un contador hacia atrás de 60 segundos
*/
function contador60Seg() {
    let tiempoRestante = 60;
    const contadorElemento = document.getElementById('contador');
    const intervalo = setInterval(function () {
        tiempoRestante--;
        contadorElemento.textContent = tiempoRestante;
    }, 1000);
}


// EJERCICIO 2
/* 
 * Usando el objeto Date, sus métodos getHours, getMinutes y GetSeconds y el método setTimeout(), setInterval()
 * crea un reloj que se actualice cada segundo
*/
function reloj() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // así los minutos y los segundos siempre tendrán 2 dígitos
    if (minutos<10) {
        minutos = '0' + minutos;
    }
    if (segundos<10) {
        segundos = '0' + segundos;
    }

    // así se actualiza el HTML
    let horaActual = horas + ':' + minutos + ':' + segundos;
    document.getElementById('reloj').textContent = horaActual;

    setInterval(reloj, 1000);

    relojGoogle(horas, minutos, segundos);
}


// EJERCICIO 3
/*
 * Utilizando el programa anterior haz que al llegar a 0 se cargue la página de google,
 * para ello puedes utilizar el objeto location.
*/
function relojGoogle(horas, minutos, segundos) {
    if (horas==0 && minutos==0 && segundos==0) {
        location.href = 'https://www.google.com';
    }
}
