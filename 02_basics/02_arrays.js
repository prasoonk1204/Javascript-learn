const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)    // second array gets inserted into the first one
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)    // concat- merges both the arrays
console.log(all_heros);

const allHeros = [...marvel_heros, ...dc_heros]    // spread operator - shows same results as concat - can be used to merge more than 2 arrays
console.log(allHeros);

// commonly spread is used

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
 
const anotherArr_simple = anotherArr.flat(Infinity)    // all sub-arrays get concatenated into a new array upto the specified depth

console.log(anotherArr_simple);


console.log(Array.isArray('Prasoon'));
console.log(Array.from('Prasoon'));    // forms a new array from the given data

console.log(Array.from({name: "Prasoon"}));    // need to specify if array should be made of the key or value, otherwise empty array is formed 


let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1,score2, score3));   // forms new array

// read about isArray, from, of
