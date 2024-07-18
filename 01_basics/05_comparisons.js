console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);  // js converts datatype for comparison


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Equality check(==) and comparisons(> < >= <=) works differently
// Comparison converts null to a number, treating it as 0.
// That's why (null >= 0) is true and and the other two are false


console.log("2" === 2);
// strict check(===).. it checks both the value and datatype 
