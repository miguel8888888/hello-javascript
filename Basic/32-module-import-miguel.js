import { sayHello, PI, Tringle } from "./31-modules-exercises.js"
import defaultImport from "./31-modules-exercises.js"
import { sayBye, E, Rectangle } from "../Document export/33-export-extern.js"


sayHello()
console.log(PI)
let triangle = new Tringle(10, 5)
console.log(triangle.baseTringle())
console.log(triangle.heightTringle())
console.log(triangle.areaTringle())

// console.log(defaultImport(5, 10))
let square = new defaultImport(10)
console.log(square.sideSquare())
console.log(square.areaSquare())

sayBye()
console.log(E)
let rectangle = new Rectangle(10, 5)
console.log(rectangle.baseRectangle())
console.log(rectangle.heightRectangle())
console.log(rectangle.areaRectangle())