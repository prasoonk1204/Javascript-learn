let a = 300    // this is called global scope

if (true) {
    let a = 10    // this is block scope
    const b = 20
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);    // global scope for b is not defined.. hence it will give an error