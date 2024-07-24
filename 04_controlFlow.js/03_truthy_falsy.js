const userEmail = "pk@google.com"

if (userEmail) {    // Nothing is check or compared
    console.log("Got the user email");
}
else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, 0n (BigInt), "" (Empty string), null, undefined, NaN

// truthy values
// true, "0", 'false', " " (space inside string), [], {}, function(){} (empty function)


// Finding if array is empty

const array1 = []
if (array1.length === 0) {
    console.log(`Array is empty`);
} 

// Finding if object is empty

const object1 = {}
if (Object.keys(object1).length === 0) {
    console.log(`Object is empty`);
}