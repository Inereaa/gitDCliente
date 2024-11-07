
// EJERCICIO 1: PERSONAS
/*
 * • Crear un objeto literal persona con nombre y edad y una método que determine si es mayor de edad o no.
 * • Crear una función constructora que permita crear objetos del tipo personas pasándole solo un nombre y edad, agregar el método.
 * • Crear un array que contenga varios objetos persona.
 * • Crear una función que reciba el array y devuelva la edad promedio del grupo de personas.
*/
// punto 1
const persona = {
    nombre: "Juan",
    edad: 20,
    esMayorDeEdad: function() {
        return this.edad >= 18;
    }
};

// punto 2
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.esMayorDeEdad = function() {
        return this.edad >= 18;
    };
}

// punto 3
const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Luis", 15);
const personas = [persona1, persona2];

// punto 4
function edadPromedio(arrayPersonas) {
    let suma = 0;  
    arrayPersonas.forEach(function(persona) {
        suma += persona.edad;
    });
    return suma / arrayPersonas.length;
}


// EJERCICIO 2: TELÉFONO
/*
 * Crear una función constructora que devuelva objetos del tipo teléfono, como argumento debe recibir un número de teléfono,
 * el objeto creado tiene el número de llamadas que debe ser inicializado en cero y un método llamar que debe aumentar
 * el número de llamados en uno.
*/
function Telefono(numero) {
    this.numero = numero;
    this.llamadas = 0;
    this.llamar = function() {
        this.llamadas += 1;
    }
}

// EJERCICIO 3: PUNTOS Y LÍNEAS
/*
 * • Crear la función constructura punto que recibe un par de coordenadas (x,y) y devuelve un objeto punto en esa posición.
 * • Crear la función constructora recta que recibe como argumento 2 puntos.
*/
function Punto(x, y) {
    this.x = x;
    this.y = y;
    return "("+x+", "+y+")";
}
function Recta(punto1, punto2) {
    this.punto1 = punto1;
    this.punto2 = punto2;
    return "Recta formada por: " + punto1 + " y " + punto2;
}

// EJERCICIO 4: VIVIENDAS
/*
 * Queremos hacer una aplicación en JavaScript para gestionar las viviendas (casas) de una serie de clientes
 * de una empresa dedicada a la seguridad y protección de las mismas.
 * Para ello queremos almacenar la siguiente información de cada vivienda:
 * • calle, nº y código postal.
 * 
 * Se pide:
 * - Crear un objeto que nos permita instanciar casas. Cada vez que instanciemos una casa le pasaremos la calle,
 *   nº y código postal como parámetros. Se pide además crear los siguientes métodos para el objeto Casa:
 * • setNumero(numero) // Se le pasa el nuevo número de la casa para que lo actualice.
 * • setCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.
 * • setCodigoPostal(codigo) // Se le pasa el nuevo número de código postal de la casa.
 * • imprimeCalle // Devuelve el nombre de la calle de la casa.
 * • imprimeNumero // Devuelve el número de la casa.
 * • imprimeCodigoPostal // Devuelve el código postal de la casa.
 * - Cada vez que se da de alta una nueva casa, que muestre automáticamente un mensaje del estilo:
 *   'Nueva casa en calle: xxxxxx, nº: xx, CP: xxxxx'
*/
function Casa(calle, num, postal) {
    this.calle = calle;
    this.num = num;
    this.postal = postal;
    this.setNumero = function(nuevoNum) {
        this.num = nuevoNum;
    }
    this.setCalle = function(nuevaCalle) {
        this.calle = nuevaCalle;
    }
    this.setCodigoPostal = function(nuevoPostal) {
        this.postal = nuevoPostal;
    }
    this.imprimeCalle = function() {
        return this.calle;
    }
    this.imprimeNumero = function() {
        return this.numero;
    }
    this.imprimeCodigoPostal = function() {
        return this.postal;
    }
    console.log("Nueva casa en calle: "+ this.calle +", nº: "+ this.num +", CP: "+ this.postal);
}

// EJERCICIO 5: CENTRO EDUCATIVO
/*
 * Queremos gestionar los colegios/centros educativos de una determinada compañía de enseñanzas concertadas.
 * ✓ Crea el objeto Alumno, con las siguientes propiedades:
 * Identificador del alumno (número)
 * Nombre del alumno
 * Nota media
 * ✓ Crea el objeto Colegio con las siguientes propiedades:
 * Nombre del colegio
 * Número de aulas
 * Número de alumnos
 * Array con los datos de los alumnos
 * Y los métodos del objeto Colegio:
 * • Un constructor que permita instanciar colegios pasando como parámetros el nombre, número de aulas y número de alumnos,
 * y que inicialice el array de alumnos: la nota media por defecto será de 5.00 y el nombre de cada alumno
 * será alumno1, alumno2, alumno3, … El identificador para cada alumno será 0, 1, 2…
 * • consultarNotaMedia: se le pasa como parámetro el identificador de un alumno, y debe mostrar su nota media.
 * • modificarNotaMedia: se le pasa como parámetros el identificador de un alumno y la nueva nota media.
 * Añade los métodos que consideres necesarios a los objetos/clases anteriores, y crea instancias para probar el funcionamiento.
*/
function Alumno(id, nombre, media) {
    this.id = id;
    this.nombre = nombre;
    this.media = media;
}

function Colegio(nombre, aulas, als, alumnos) {
    this.nombre = nombre;
    this.aulas = aulas;
    this.als = als;
    this.alumnos = [];

    for (let i=0; i<als; i++) {
        const nombreAlumno = "alumno" + (i+1);
        this.alumnos.push(new Alumno(i, nombreAlumno, 5.00));
    }

    this.consultarNotaMedia = function(id) {
        const alumno = this.alumnos.find(alumno => alumno.id == id);
        if (alumno) {
            return "La nota media de "+ alumno.nombre + " es: "+ alumno.media;
        } else {
            return "El alumno con id '"+id+ "' no existe";
        }
    }
    this.modificarNotaMedia = function(id, nuevaMedia) {
        const alumno = this.alumnos.find(alumno => alumno.id == id);
        if (alumno) {
            alumno.media = nuevaMedia;
            return "La nueva nota media de "+ alumno.nombre + " es: "+ alumno.media;
        } else {
            return "El alumno con id '"+id+ "' no existe";
        }
    }
}
