// const instaUser = new Object()    // singelton object
const instaUser = {}    // Non-singelton object

instaUser.id = "123abc"
instaUser.name = "Sam"
instaUser.isLoggedIn = false

// console.log(instaUser);

const user = {
    email: "pk@gmail.com",
    fullname: {
        userfullnanme: {
            firstname: "Prasoon",
            lastname: "Kumar",
        }
    }
}
// we can make nested objects as well

// console.log(user.fullname.userfullnanme.firstname);    // accessing the values inside nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1, obj2}    // combining objects, but this creates nested objects
const obj4 = Object.assign({}, obj1, obj2)    // combining objects
console.log(obj4);

/* 
const obj3 = Object.assign({}**source**, [obj1, obj2]**targets**)
inside asigin(), the first given objects acts as source here {}(empty object), and the followings are called targets // used in professional grade code
here if {} was not given then obj1 would have acted as source
*/

const obj5 = {...obj1, ...obj2}    // combining objects ***best way***
console.log(obj5);

const users = [
    {
        id: 1,
        email: "h1@gmacil.com"
    },
    {
        id: 2,
        email: "h2@gmacil.com"
    },
    {
        id: 3,
        email: "h3@gmacil.com"
    },
]

users[1].email
console.log(Object.keys(instaUser));    // the result is given in array
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));

// declare an object in inspect >> console, and then call its name.. we will be able to see the properties we can use on objects
