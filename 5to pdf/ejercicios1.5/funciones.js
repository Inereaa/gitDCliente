
// EJERCICIO 1
function onlyUniques (...args) {
    const array = [];
    for (let dato of args) {
        if (!array.includes(dato)) {
            array.push(dato);
        }
    }
    return array;
}

// EJERCICIO 2
function squareAndSum (...args) {
    let suma=0;
    for (let num of args) {
        num=num*num;
        suma+=num;
    }
    return suma;
}