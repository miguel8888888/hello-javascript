/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function sayHello() {
    console.log("Hola")
}

// 2. Exporta una constante

export const PI = 3.1416

// 3. Exporta una clase

export class Tringle {
    constructor(base, height) {
        this.base = base
        this.height = height
    }

    baseTringle() {
        return this.base
    }

    heightTringle() {
        return this.height
    }

    areaTringle() {
        return this.base * this.height / 2
    }
}

// 4. Importa una función

// 5. Importa una constante

// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// export default function multiply(a, b) {
//     return a * b
// }

// export default const E = 2.7182

export default class Square {
    constructor(side) {
        this.side = side
    }

    sideSquare() {
        return this.side
    }

    areaSquare() {
        return this.side * this.side
    }
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior