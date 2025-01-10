/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4]

let [first, second] = myArray

console.log(first)
console.log(second)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [first2, second2, third2, fourth2, fifth2 = 0] = myArray

console.log(first2)
console.log(second2)
console.log(third2)
console.log(fourth2)
console.log(fifth2)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let { name: myName, age: myAge } = person

console.log(myName)
console.log(myAge)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { name: myName2, age: myAge2 } = person

console.log(myName2)
console.log(myAge2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    address: {
        city: "Vigo",
        country: "Spain"
    }
}

let { address: { city, country } } = person2

console.log(city)
console.log(country)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray2 = [5, 6, 7, 8]

let combinedArray = [...myArray, ...myArray2]

console.log(combinedArray)

// 7. Usa propagación para crear una copia de un array

let copyArray = [...myArray]

console.log(copyArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person3 = {
    email: "miguelsgap@gmail.com",
    age: 22,
    alias: "Miguel"
}

let combinedPerson = { ...person, ...person3 }

console.log(combinedPerson)

// 9. Usa propagación para crear una copia de un objeto

let copyPerson = { ...person }

console.log(copyPerson)

// 10. Combina desestructuración y propagación

let { name: myName3, ...rest } = person

console.log(myName3)

console.log(rest)