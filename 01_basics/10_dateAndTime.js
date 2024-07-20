let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);    // object

let myCreatedDate = new Date(2024, 2, 4)   // year, month(starts from 0 in js), date
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024, 2, 4, 14, 6)    // 4 march 2024, 2:06:00 PM
console.log(myCreatedDate1.toLocaleString()); 

let myCreatedDate2 = new Date("2024-01-12")    // here month starts from 1
console.log(myCreatedDate2.toLocaleString()); 


let myTimeStamp = Date.now()

console.log(myTimeStamp);   // in miliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));   // in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));
