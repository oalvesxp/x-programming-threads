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
let array = [1, 2, 3]
let func = function () { return "Any value"}
let und // undefined
let nulo = null

const types = [string, number, bool, obj, array, func, und, nulo]

for(let i = 0; i < types.length; i++) {
    console.log(`${types[i]} → ${typeof types[i]}`)
}
