
// EJERCICIO 1
/* Crea un fichero FuncionesArrow.js en el que transformes las siguientes funciones utilizando
 * la sintaxis de las funciones arrow. Crea una página html donde demuestres el uso de las funciones:
*/

/*
 * function sum(num1, num2){
 * return num1 + num2
 * }
 * sum(40,2)
 * sum(42,0)
*/
const sum=(num1, num2) => num1 + num2;

/*
 * function stringLength(str){
 * console.log("the length of " + str + " is " + str.length)
 * }
 * let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
 * stringLength(longestCityNameInTheWorld)
*/
const stringLength=(str) => {
    document.write("The length of " + str + " is " + str.length + "<br>");
}

/*
 * function stringLength(str){
 * let length = str.length
 * console.log("the length of " + str " + is: " + length)
 * return str.length
 * }
 * stringLength("willynilly")
*/
const stringLeng=(str) => {
    let length = str.length;
    document.write("the length of " + str + " is: " + length + "<br>");
    return str.length;
}

/*
 * let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are",
 * "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
 * function showAlert(name){
 * alert(alerts[(Math.floor(Math.random()*alerts.length))] + name)
 * }
 * showAlert("you ball of fluff")
*/
let alerts=["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely",
              "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];
const showAlert=(name) => alert(alerts[Math.floor(Math.random()*alerts.length)] + ", " + name);

// EJERCICIO 2
/* Write an arrow function that returns the string, Hello, I am " + name + ", and I am " + age + " years old. */
const nameAge=(name, age) => "Hello, I am " + name + ", and I am " + age + " years old";

// EJERCICIO 3
/*
 * Write an arrow function that takes an array of integers, and returns the sum of
 * the elements in the array. Google and use the built-in reduce array method for this.
*/
const sumaElementos=(array) => array.reduce((suma, actual) => suma + actual);

// EJERCICIO 4
/*
 * The syntax of this function is wonky. Can you fix it to use the shortest arrow function possible?
 *
 * let eye = "eye";
 * const fire =
 * (
 * ) =
 * >
 * {
 * return "bulls";
 * }
*/
let eye = "eye";
const fire=() => "bulls";

// EJERCICIO 5
/*
 * Refactor the following ES5 function to use an arrow function:
 *
 * const fibonacci = function(n) {
 * if (n<3) return 1;
 * return fibonacci(n
 * -
 * 1)
 * + fibonacci(n
 * -
 * 2
 * )
 * ;
 * }
*/
const fibonacci=(n) => n<3 ? 1 : fibonacci(n-1) + fibonacci(n-2);
