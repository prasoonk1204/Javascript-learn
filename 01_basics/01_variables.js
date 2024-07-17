const accountId = 114242  // defines a constant which cannot be changed
let accountEmail = "pk@gmail.com"  // defines a varible which can be changed
var accountPassword = "12345"  //prefer not to use this because of issue in block scope and functional scope
accountCity = "Kolkata"  // varibles can be defined like this also in js, but do not use
let accountState;

// accountId = 23 // not allowed to change

accountEmail = "prasoon@gmail.com"
accountPassword = "1111"
accountCity = "Delhi"

console.log(accountId);  // used to print

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  // puts the enclosed variables in a table and prints them 


