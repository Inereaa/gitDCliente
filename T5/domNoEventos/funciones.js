
// EJERCICIO 2
/*
 * A partir del siguiente array de objetos literales genera una página web utilizando DOM donde aparezcan bien formateados los datos:
*/
const personas = [
    { codigo: 1, dni: "4455544X", Nombre: "Juan López López", edad: 18 },
    { codigo: 2, dni: "7778888X", Nombre: "Luis Mateo López", edad: 25 },
    { codigo: 3, dni: "6654545M", Nombre: "Pedro Guitierrez López", edad: 41 },
    { codigo: 4, dni: "9998897X", Nombre: "María Guitierrez López", edad: 32 },
];

const tabla = document.querySelector('tbody');

personas.forEach(persona => {
    const fila = document.createElement('tr');

    // se crean las celdas para todos los campos
    const codigo = document.createElement('td');
    codigo.textContent = persona.codigo;
    fila.appendChild(codigo);

    const dni = document.createElement('td');
    dni.textContent = persona.dni;
    fila.appendChild(dni);

    const nombre = document.createElement('td');
    nombre.textContent = persona.Nombre;
    fila.appendChild(nombre);

    const edad = document.createElement('td');
    edad.textContent = persona.edad;
    fila.appendChild(edad);

    // y se agrega todo a la tabla
    tabla.appendChild(fila);
});

// EJERCICIO 3
// (hecho en el archivo 'main.js')
