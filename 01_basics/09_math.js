console.log(Math);

console.log(Math.abs(-4));  // abs = absolute

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));    // top round value is chosen
console.log(Math.floor(4.8));    // lower round value is chosen

console.log(Math.min(4,1,75,5,12));    // gives minimum value
console.log(Math.max(4,1,75,5,12));    // gives maximum value

console.log(Math.random());    // gives random value between 0 and 1 (decimal values)

console.log((Math.random()*10) +1);    // value (1-10) 
console.log(Math.floor(Math.random()*10) +1);   // round off the decimal value to the lower value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );    // give lower round off value between the range min-max and value is more than the min 
