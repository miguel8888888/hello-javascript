/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 5 + 5
let resta = 5 - 5
let multiplicacion = 5 * 5
let division = 5 / 5
let modulo = 5 % 5
let exponente = 5 ** 5
let incremento = 4
let decremento = 4

incremento++
decremento--

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(exponente)
console.log(incremento)
console.log(decremento)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let valorAsignacion = 5

let sumaAsignacion = valorAsignacion += 5
let restaAsignacion = valorAsignacion -= 5
let multiplicacionAsignacion = valorAsignacion *= 5
let divisionAsignacion = valorAsignacion /= 5
let moduloAsignacion = valorAsignacion %= 5
let exponenteAsignacion = valorAsignacion **= 5

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 4)
console.log(5 < 6)
console.log(5 >= 5)
console.log(5 <= 5)
console.log(5 == 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 4)
console.log(5 > 6)
console.log(5 <= 4)
console.log(5 >= 6)
console.log(5 == 4)

// 5. Utiliza el operador lógico and

let and = 5 > 4 && 5 < 6

// 6. Utiliza el operador lógico or

let or = 5 > 4 || 5 < 6

// 7. Combina ambos operadores lógicos

let andOr = 5 > 4 && 5 < 6 || 5 > 6

// 8. Añade alguna negación

let negacion = !(5 > 4)

// 9. Utiliza el operador ternario

let ternario = 5 > 4 ? "Verdadero" : "Falso"

// 10. Combina operadores aritméticos, de comparáción y lógicas

let combinado = 5 + 5 > 4 && 5 < 6 || 5 > 6