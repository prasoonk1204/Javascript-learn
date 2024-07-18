// Javascript is a dynamically typed language i.e. datatype is checked at the time of execution. we don't need to define the datatype of any element // Disadvantages : code is not optimised or stable, datatype errors occurs more


// Premitive Datatypes
    // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.24
// in JS, there is no integer or decimal or float etc. it's just number

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false (as in symbol we can give same value but symbol makes them different)


// Non-premitive/Reference datatypes
    // Array, Objects, Functions

// Array
const heros = ["iron man", "spiderman"];

// Object
{
    name: "Prasoon",
    age: 19,
} 
// can also give them variable name 
let myObj = {
    name: "Prasoon",
    age: 19,
}

// Function
const myFunction = function() {
    console.log("Hello World");
}
