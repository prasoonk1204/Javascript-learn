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
// {
//     name: "Prasoon",
//     age: 19,
// } 
// can also give them variable name 
let myObj = {
    name: "Prasoon",
    age: 19,
}

// Function
const myFunction = function() {
    console.log("Hello World");
}


// *************************memory***************************************

// datatypes are based on memory allocation

// Primitive datatypes -> Stack memory ->  call by value -> change occurs in the copy

// Reference/Non primitive data types -> heap memory -> call by reference => change occurs in the original value

let myWeb = "pk.com"

let anotherWeb = myWeb
anotherWeb = "abc.com"

console.log(myWeb);
console.log(anotherWeb);
// the value of myWeb remains the same and anotherWeb changes

// ************************

let userOne = {
    email : "user@gmail.com",
    pass : "user001",
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);
// both values in userOne and userTwo changes