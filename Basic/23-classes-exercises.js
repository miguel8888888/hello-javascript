/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    showProperties() {
        console.log(this.name)
        console.log(this.age)
    }

    static showStatic() {
        console.log("Soy un método estático")
    }
}

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

let person = new Person("Brais", 37)

person.showProperties()


// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

Person.showStatic()

// 6. Crea una clase que haga uso de herencia

class Developer extends Person {
    constructor(name, age, alias) {
        super(name, age)
        this.alias = alias
    }

    showProperties() {
        super.showProperties()
        console.log(this.alias)
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }
}

// 7. Crea una clase que haga uso de getters y setters

let developer = new Developer("Brais", 37, "MoureDev")

developer.showProperties()

console.log(developer.name)

developer.name = "Brais Moure"

console.log(developer.name)

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Programador extends Person {

    #alias

    constructor(name, age, alias) {
        super(name, age)
        this.#alias = alias
    }

    showProperties() {
        super.showProperties()
        console.log(this.#alias)
    }

    get alias() {
        return this.#alias
    }

    set alias(alias) {
        this.#alias = alias
    }
}

let programador = new Programador("Miguel", 22, "Dev")


// 9. Utiliza los get y set y muestra sus valores

programador.showProperties()

console.log(programador.alias)

// 10. Sobrescribe un método de una clase que utilice herencia 

programador.alias = "Developer"

console.log(programador.alias)