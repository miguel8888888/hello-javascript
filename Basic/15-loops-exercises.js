/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0

for (let i = 1; i <= 100; i++) {
    suma += i
}

console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let names = ["Miguel", "Brais", "Moure", "Dev"]

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let text = "Hola, este es el taller práctico de JavaScript"
let vowels = 0

for (let i = 0; i < text.length; i++) {
    console.log(text[i].match(/[aeiou]/gi))
    if (text[i].match(/[aeiou]/gi)) {
        vowels++
    }
}

console.log(vowels)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbers = [1, 2, 3, 4, 5]

let product = 1

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i]
}

console.log(product)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) { 
    console.log(`5 x ${i} = ${5 * i}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let reversedText = ""

for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i]
}

console.log(reversedText)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = [0, 1]

for (let i = 2; i < 10; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
}

console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let greaterThanTen = []

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 10) {
        greaterThanTen.push(numbers2[i])
    }
}

console.log(greaterThanTen)