/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let myName = "Miguel"
let greeting = "Hola, " + myName + "!, este es el taller práctico de JavaScript"

// 2. Muestra la longitud de una cadena de texto

console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string

console.log(greeting[0])
console.log(greeting[greeting.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let message = `Hola, este
es mi
taller practico de
JavaScript`

// 6. Interpola el valor de una variable en un string

let messageInterpolated = `Hola, ${myName}!`
console.log(messageInterpolated)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let stringWithSpaces = greeting.replace(" ", "-")
let stringWithAllSpaces = greeting.replace(/ /g, "-")
console.log(stringWithSpaces)
console.log(stringWithAllSpaces)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting.includes("taller"))

// 9. Comprueba si dos strings son iguales

console.log(greeting === message)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(greeting.length === message.length)