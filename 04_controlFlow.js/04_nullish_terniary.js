// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10   // 5 is assigned
// val1 = null ?? 10   // 10 is assigned
// val1 = undefined ?? 15   // 15 is assigned
val1 = null ?? 10 ?? 20    // 10 is assigned

console.log(val1);


// Terniary Operator

// condition ? true : false     // syntax

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");      // more than 80