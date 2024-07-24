// if

// if (condition) {
//     // if condition = true -> code inside this scope will execute
//     // if condition = false -> code inside this scope will NOT execute
// }

// // else
// // used in pair with if statements such that if is not executed then else gets executed 
// else {

// }

// comparison : <, >, <=, >=, ==, !=, ===, !==

// Example
const temp = 41
if (temp <= 50) {
    console.log(`temperature is less than 50`);
}
else {
    console.log(`temperature is greater than 50`);
}

// Shorthand notation

const balance = 1000
// if (balance <= 1000) console.log(`test`);

if (balance < 500) {
    console.log(`less than 500`);
} 
else if (balance < 750) {
    console.log(`less than 750`);
} 
else if (balance < 900) {
    console.log(`less than 900`);
} 
else {
    console.log(`less than 1200`);
}

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true

if (userLoggedIn && debitCard) {    // && is used for "and"
    console.log(`Allow to buy course`);
}

if ( loggedInFromEmail || loggedInFromGoogle ) {    // || is used for "or"
    console.log(`User logged in`);
}
