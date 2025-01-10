/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// 2. Accede y muestra su valor

console.log(person.name)
console.log(person.age)
console.log(person.alias)

// 3. Agrega una nueva propiedad

person.email = "braismoure@mouredev.com"

// 4. Elimina una de las 3 primeras propiedades

delete person.age

// 5. Agrega una función e invócala

person.walk = function () {
    console.log("La persona camina.")
}

person.walk()

// 6. Itera las propiedades del objeto

for (let key in person) {
    console.log(key)
}

// 7. Crea un objeto anidado

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    address: {
        city: "Vigo",
        country: "Spain"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person2.address.city)
console.log(person2.address.country)

// 9. Comprueba si los dos objetos creados son iguales

console.log(person === person2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name === person2.name)