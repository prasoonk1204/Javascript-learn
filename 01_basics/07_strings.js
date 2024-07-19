const name = "Prasoon" // declaring string
const repoCount = 2

// Old way
console.log(name + repoCount + " Value");   

// New way - String interpolation  ******use this way******
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const newName = new String('hitesh')  // another way to declare string
// by using this in inspect > console, we can see the operations to perform on string

console.log(name[1]);
console.log(name.__proto__);

console.log(name.length);
console.log(name.indexOf('a'));

console.log(newName.toUpperCase());

console.log(newName.charAt(2));
console.log(newName.indexOf('e'));

const newString = newName.substring(0,4)
console.log(newString);

const anotherString = newName.slice(-5, 2)  // -ve can only be used here, not in substring
console.log(anotherString);

const newStr = "      abcd     "
console.log(newStr);
console.log(newStr.trim());


const url = "https://www.google.com/new%20webpage"
console.log(url.replace('%20','-'));
console.log(url.includes('com'));

const newStringOne = "hey-how-are-you"
console.log(newStringOne.split('-'));

// read string operations documentation on mdn