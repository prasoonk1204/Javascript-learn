const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());  //converting number to string

console.log(balance.toFixed(2));    // mostly used in case of ecomerce websites

const otherNumber = 223.8364

console.log(otherNumber.toPrecision(3));    // for rounding off

const hundreds = 100000000
console.log(hundreds.toLocaleString());  // adds commas between hundreds, thousands, millions,etc. but can change to indian system by adding en-IN inside the ()
