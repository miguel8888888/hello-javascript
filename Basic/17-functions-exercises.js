/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a, b) {
    return a + b
}

console.log(sum(5, 10))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const numbers = [1, 2, 3, 4, 5]

function maxNumber(numbers) {
    return Math.max(...numbers)
}

console.log(maxNumber(numbers))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let string = "Hola, mundo!"

function countVowels(string) {
    let vowels = ["a", "e", "i", "o", "u"]
    let count = 0

    for (let letter of string) {
        if (vowels.includes(letter)) {
            count++
        }
    }

    return count
}

console.log(countVowels(string))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let strings = ["hola", "mundo", "desde", "mouredev"]

function toUpperCase(strings) {
    return strings.map(string => string.toUpperCase())
}

console.log(toUpperCase(strings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

let number = 7

function isPrime(number) {
    if (number < 2) {
        return false
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}   

console.log(isPrime(number))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1, 2, 3, 4, 5]
let array2 = [3, 4, 5, 6, 7]

function commonElements(array1, array2) {
    return array1.filter(element => array2.includes(element))
}

console.log(commonElements(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumEvenNumbers(numbers2) {
    return numbers2.filter(number => number % 2 === 0).reduce((acc, number) => acc + number, 0)
}

console.log(sumEvenNumbers(numbers2))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let numbers3 = [1, 2, 3, 4, 5]

function squareNumbers(numbers3) {
    return numbers3.map(number => number ** 2)
}

console.log(squareNumbers(numbers3))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let text = "Hola, mundo desde MoureDev"

function reverseWords(text) {
    return text.split(" ").reverse().join(" ")
}

console.log(reverseWords(text))

// 10. Crea una función que calcule el factorial de un número dado

let number2 = 4

function factorial(number2) {
    if (number2 === 0) {
        return 1
    }

    return number2 * factorial(number2 - 1)
}

console.log(factorial(number2))