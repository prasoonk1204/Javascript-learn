const myArr = [0, 1, 2, 3, 4, 5]    // daclaring array
const myHeros = ["ironman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)    // another way of declaring

console.log(myArr);
console.log(myArr[1]);


// Array methods

myArr.push(6)   // adding new value.. gets added at the end
myArr.push(7)
console.log(myArr);

myArr.pop()    // removes the last value
console.log(myArr);

myArr.unshift(9)    // new value gets added in the start
myArr.shift()   // value from start is removed

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()    // converts the array into a string
console.log(newArr);


// slice, splice

console.log("A ", myArr);

const newArr2 = myArr.slice(1, 3)    // slice- displays a section of the array between the given range (includes start index but not the end)

console.log(newArr2);
console.log("B ", myArr);

const newArr3 = myArr.splice(1, 3)    // splice- displays a section of the array between the given range(includes both the start and the end) and ***displayed section gets removed from the original array***
console.log("C ", myArr);
console.log(newArr3);


