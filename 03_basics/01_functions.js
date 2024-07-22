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

// "Sam" is the default argument if no argument is passed in function call 