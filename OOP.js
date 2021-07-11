
//  Example 1: Using the Object constructor with no attributes / methods
let person = new Object();
person.name = "Miguel"
console.log(person)

// Output: {name: "Miguel"}

// Example 2: Using the Object constructor with pre-defined attributes / methods
let person_1 = new Object({
    name: "April",
    age: 26
})
console.log(person_1)

// Output: {
//     name: "April",
//     age: 26
// }

// Example 3: Getting an attributes
console.log(person_1.name) // Output: "April"


// Example 4: Creating Objects for Inheritence
// let Car = class {
//     constructor(make, doors) {
//         this.make = make 
//         this.doors = doors
//     }
// }
 
// Example 4: Creating Objects for Inheritence
class Car {
    constructor(make, doors) {
        this.make = make,
        this.doors = doors
    }
}

let g_wagon = new Car('mercedes car', 4)
let focus = new Car('ford', 4)

console.log(focus)

// Output: {
//     make: "mercedes",
//     doors: 4
// }