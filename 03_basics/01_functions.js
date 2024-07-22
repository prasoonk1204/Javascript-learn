function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("O");
    console.log("O");
    console.log("N");
    
}   // defining a function

sayMyName()   // executing function

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1, number2) {
    // let add = number1 + number2
    // return add   // way to return the answer

    return number1 + number2    // another way to return

    // code written after return statement in a function does not gets executed
}

const result = addTwoNumbers(3, 5)

console.log(`Result = ${result}`);

// number1, number2 are called parameters -- values while defining function
// 3, 5 are called arguments -- values while calling the function

function loginUserMessage(username = "Sam") {
    return `${username} just logged in`
}

console.log(loginUserMessage("Pk"))
console.log(loginUserMessage())

// "Sam" is the default argument if no argument is passed in function call 


function calculateCartPrice (...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 300));

// ... is used in parameter so that all the given arguments are taken


// ++++++++++++++ using function with objects ++++++++++++++
const course = {
    courseName: "Chai aur Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

function handleObject(anyObject) {
    console.log(`Course name is ${anyObject.courseName} and price is ${anyObject.price}`);
}

handleObject(course)    

handleObject({
    courseName: "Chai aur Code",
    price: "199",
})    // can directly pass an object as well


// ++++++++++++ using function with array ++++++++++++
const newArray = [200, 352, 634, 100]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray));

console.log(returnSecondValue([200, 846, 634, 100]));   // directly passing array
