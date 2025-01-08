/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Resolviendo el ejercicio 1

// 2. Escribe un comentario en varias líneas

/*Con este comentario
estoy resolviendo el ejercicio 2 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myName = "miguel"
let age = 22
let isStudent = true
let undefinedValue
let nullValue = null
let mySymbol = Symbol("miguelsymbol")
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)

// 4. Imprime por consola el valor de todas las variables

console.log(myName)
console.log(age)
console.log(isStudent)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myName)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myName = "miguel2"
age = 23
isStudent = false
undefinedValue = "undefined"
nullValue = "null"
mySymbol = Symbol("miguelsymbol2")
myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myName = 22
age = "miguel"
isStudent = 22
undefinedValue = 22
nullValue = 22
mySymbol = 22
myBigInt = 22

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myName2 = "miguel"
const age2 = 22
const isStudent2 = true
const undefinedValue2 = undefined
const nullValue2 = null
const mySymbol2 = Symbol("miguelsymbol")
const myBigInt2 = BigInt(817239871289371986589716389471628379612983761289376129)

// 9. A continuación, modifica los valores de las constantes

// Error
// myName2 = "miguel2"
// age2 = 23
// isStudent2 = false
// undefinedValue2 = "undefined"
// nullValue2 = "null"
// mySymbol2 = Symbol("miguelsymbol2")
// myBigInt2 = BigInt(817239871289371986589716389471628379612983761289376129)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse