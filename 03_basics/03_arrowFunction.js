const user = {
    username: "Saurabh",
    price: 299,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);    // prints current context
    }
    
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this);


function chai() {
    let username = "prasoon"
    console.log(this.username);
}
chai()


const chai2 =  () => {     // arrow function
    let username = "prasoon"
    console.log(this);
}
chai2()

// (parameters) => {}    // basics syntax of arrow function

const add = (num1, num2) => {
    return num1 + num2    // explicit return
}

console.log(add(3,5));


// const add2 = (num1, num2) => num1 + num2    // implicit return : does not require to write return
const add2 = (num1, num2) => ( num1 + num2 )    // can also use paranthesis

console.log(add2(3,7));


const user2 = () => ({username: "hitesh"})    // for returning object, paranthesis() is required
console.log(user2());
