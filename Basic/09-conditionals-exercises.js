/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = null

myName = "Miguel"

if (myName) {
    console.log(myName)
} else {
    console.log("La variable no tiene valor")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "miguel"
let password = "1234"

if (user === "miguel" && password === "1234") {
    console.log("Usuario y contraseña correctos")
} else {
    console.log("Usuario y/o contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -10

if (number === 0) {
    console.log("El número es cero")
} else if (number > 0) {
    console.log("El número es positivo")
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 9

if (age >= 18) {
    console.log("Puede votar")
} else {
    console.log(`No puede votar, le faltan ${18 - age} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let age2 = 22

let adultOrMinor = age2 >= 18 ? "adulto" : "menor"
console.log(adultOrMinor)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 12

if (month >= 1 && month <= 2 || month === 12) {
    console.log("Invierno")
} else if (month >= 3 && month <= 5) {
    console.log("Primavera")
} else if (month >= 6 && month <= 8) {
    console.log("Verano")
} else if (month >= 9 && month <= 11) {
    console.log("Otoño")
} else {
    console.log("Mes no válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log("31 días")
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30 días")
} else if (month === 2) {
    console.log("28 o 29 días")
} else {
    console.log("Mes no válido")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "es"

switch (language) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    default:
        console.log("Idioma no válido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let month2 = 12

switch (month2) {
    case 1:
    case 2:
    case 12:
        console.log("Invierno")
        break
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break
    default:
        console.log("Mes no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (month2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 días")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 días")
        break
    case 2:
        console.log("28 o 29 días")
        break
    default:
        console.log("Mes no válido")
}
