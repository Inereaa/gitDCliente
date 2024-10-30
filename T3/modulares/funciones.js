
import {
    filterNumbersGreaterThan,
    toHackerSpeak,
    getFileExtension,
    flatArray,
    removeDuplicates,
    countLetter,
    removeWords
} from './modAuxiliar.js';

// 1ª FUNCIÓN
console.log(filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7));

// 2ª FUNCIÓN
console.log(toHackerSpeak("I'm a hacker now"));

// 3ª FUNCIÓN
console.log(getFileExtension("imagen.png"));

// 4ª FUNCIÓN
console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]));

// 5ª FUNCIÓN
console.log(removeDuplicates([4, 5, 10, 4, 10, 2]));

// 6ª FUNCIÓN
console.log(countLetter("a", "javascript"));

// 7ª FUNCIÓN
console.log(removeWords("This is a really bad test", ["really", "bad"]));
