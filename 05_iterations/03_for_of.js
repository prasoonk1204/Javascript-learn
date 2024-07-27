// "for of" loop syntax
// for (const iterator of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]

const myArr = [1, 2, 3, 4, 5]

for (const val of myArr) {
    // console.log(val);
}

const greetings = "hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const myMap = new Map()
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('UK', "United Kingdom")

// console.log(myMap);

for (const [key, value] of myMap) {    // array is being destructured
    console.log(key, ':-', value);
}


// +++++++++++++ this loop does not work for object ++++++++++++
// const myGames = {
//     'game1' : "GTA 5"
//     'game2' : "Spiderman"
// }

// for (const [key, value] of myGames) {
//     console.log(key, ':-', value);      // this Object is not iterable // error
// }