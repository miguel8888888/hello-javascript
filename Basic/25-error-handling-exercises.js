/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}

// 3. Lanza una excepción genérica

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }

    return a + b
}

try {
    console.log(sumIntegers(5, "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// 4. Crea una excepción personalizada

function sumIntegersPersonalize(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a < 0 || b < 0) {
        throw new RangeError("Esta operación sólo suma números positivos")
    }

    return a + b
}

class RangeError extends Error {
    constructor(message) {
        super(message)
        this.name = "RangeError"
    }

    printType() {
        console.log("Este es un error de tipo: " + this.name)
    }
}


// 5. Lanza una excepción personalizada
try {
    console.log(sumIntegersPersonalize(-5, 10))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
    if (error instanceof RangeError) {
        error.printType()
    }
}

// 6. Lanza varias excepciones según una lógica definida

function tomorrow(dayNumber) {
    if (typeof dayNumber !== "number") {
        throw new TypeError("El día debe ser un número")
    }

    if (dayNumber < 1 || dayNumber > 7) {
        throw new RangeDayError("El día debe estar entre 1 y 7")
    }

    let days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

    return days[dayNumber]
}

class RangeDayError extends Error {
    constructor(message) {
        super(message)
        this.name = "RangeDayError"
    }
    
    printType() {
        console.log("Este es un error de tipo: " + this.name)
    }
}

try {
    console.log(tomorrow("8"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
    if (error instanceof RangeDayError) {
        error.printType()
    } else if (error instanceof TypeError) {
        console.log("Este es un error de tipo general")
    }
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    console.log(tomorrow(7))
    console.log(sumIntegersPersonalize(-5, 10))
}catch (error) {
    console.log("Se ha producido un error:", error.message)
    if (error instanceof RangeDayError) {
        error.printType()
    } else if (error instanceof RangeError) {
        console.log("Este es un error de rango")
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let values = ["1", "2", "3", "4", "5", "6", "7", "8.9", "9", "10", "hola", "mundo"]

function toFloat(value) {
    let valueFloat = parseFloat(value)
    if ( Number.isNaN(valueFloat) ) {
        throw new TypeError("Este valor no es un número")
    }

    return parseFloat(value)
}

for (let value of values) {

    try {
        console.log(toFloat(value))
    } catch (error) {
        console.log("Se ha producido un error:", error.message)
    }
}



// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

let myObject = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

function checkProperty(object, property) {
    if (!object.hasOwnProperty(property)) {
        throw new ReferenceError("La propiedad no existe en el objeto")
    }

    return object[property]
}

try {
    console.log(checkProperty(myObject, "email"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation() {
    let retries = 0
    while (retries < 10) {
        try {
            console.log("Intento", retries + 1)
            console.log(checkProperty(myObject, "email"))
            break
        } catch (error) {
            console.log("Se ha producido un error:", error.message)
            retries++
        }
    }
}

retryOperation()

