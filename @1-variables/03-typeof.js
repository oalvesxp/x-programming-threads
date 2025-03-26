/**
 * Fundamentos de javascript
 *
 * @author Osvaldo A.
 * @date 22/03/2025
 * @description Typeof
 */

let string = "This is a string"
let number = 1
let bool = true
let obj = { name: "Jhon Doe"}
let array = ["Maçã", "Banana", "Pêra"]
let func = function () { return "This is a function"}
let und // undefined

const types = [string, number, bool, obj, array, func, und]

for(let i = 0; i < types.length; i++) {
    console.log(typeof types[i])
}
