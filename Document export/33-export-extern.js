export function sayBye() {
    console.log("Adiós")
}

export const E = 2.7182

export class Rectangle {
    constructor(base, height) {
        this.base = base
        this.height = height
    }

    baseRectangle() {
        return this.base
    }

    heightRectangle() {
        return this.height
    }

    areaRectangle() {
        return this.base * this.height
    }
}