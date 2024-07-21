// Object.create   // constructor method, singleton is created

// object literals

const mySym = Symbol("keys1")

const jsUser = {
    name: "Prasoon",    // by default keys are string type 
    "full name": "Prasoon Kumar",
    age: 19,
    [mySym]: "my keys 1",   // using symbol datatype as a key ***remember the syntax***
    location: "Kolkata",
    email: "pk@google.com",
    igLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}   // declaring an object


console.log(jsUser.name);   // accessing object value // this way does not allow accessing two word keys(eg:"full name" here) 

console.log(jsUser["email"]);   // another way for accessing object values

console.log(jsUser["full name"]);

console.log(jsUser[mySym]);    // accessing the symbol key

jsUser.email = "prasoon@gmail.com"    // changing value

Object.freeze(jsUser)   // freezes the object so that no changes can be made

jsUser.location = "Delhi"   // does not change
console.log(jsUser);



jsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(jsUser.greeting);   // function does not execute but its reference is show
console.log(jsUser.greeting());    // function gets executed

jsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting2());
