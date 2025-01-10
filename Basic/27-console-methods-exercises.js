/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

console.error("Este es un mensaje de error.")

// 2. Crea una función que utilice warn correctamente

console.warn("Este es un mensaje de advertencia.")

// 3. Crea una función que utilice info correctamente

console.info("Este es un mensaje de información adicional.")

// 4. Utiliza table

let data = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 21 },
    { name: "Miguel", age: 22}
]

console.table(data)

// 5. Utiliza group

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()

// 6. Utiliza time

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {
    
}   

console.timeEnd("Tiempo de ejecución 1")

// 7. Valida con assert si un número es positivo

let number = -10

console.assert(number > 0, "El número no es positivo")

// 8. Utiliza count

console.count("Número de veces")
console.count("Número de veces")
console.count("Número de veces")
console.count("Número de veces")
console.count("Número de veces")
console.count("Número de veces")
console.countReset("Número de veces")

// 9. Utiliza trace

console.trace()

// 10. Utiliza clear

console.clear()