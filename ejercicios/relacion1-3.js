
function ageCalculator (birth) {
    const a = new Date();
    let year = a.getFullYear();
    anio=parseInt(year);
    return anio-birth;
}


function supplyCalculator (actual, max, comida) {
    dias=(max-actual)*365
    return comida*dias;
}


function theGeometrizerCircumference (radio) {
    return 2 * Math.PI * radio;
}

function theGeometrizerArea (radio) {
    return Math.Pi * radio^2;
}


function convertTemperatureF (celsius) {
    return celsius * 9/5 + 32;
}

function convertTemperatureC (far) {
    return (far - 32) * 5/9;
}