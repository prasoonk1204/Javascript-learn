let a = 300    // this is called global scope

if (true) {
    let a = 10    // this is block scope
    const b = 20
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);    // global scope for b is not defined.. hence it will give an error


function one() {
    const username = "prasoon"

    function two() {
        const website = "youtube.com"
        console.log(username);    // child function can access parent variables
    }
    // console.log(website);    // but parent can't access child variables

    two()
}

// one()

if (true) {
    const username = "prasoon"
    if (username === "prasoon") {
        const website = " youtube.com"
        console.log(username + website);
    } 

    // console.log(website);    // error
}

// console.log(username);    // error

// +++++++++++++++ interesting +++++++++++++++++

addone(5)   // this function can be called before its definition

function addone(num) {
    return num + 1
}



addTwo(5)     // but this function can not be called // it will give an error

const addTwo = function(num) {
    return num + 2
}
