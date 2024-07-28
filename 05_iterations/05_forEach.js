// "forEach" syntax
// variable.forEach( any function )

const coding = ["js", "ruby", "python", "java", "cpp"]

// +++++++++ using regular function ++++++++

coding.forEach( function (item) {
    console.log(item);
} )


// +++++++++ using arrow function ++++++++

coding.forEach( (val) => {
    console.log(val);
})


// +++++++++ defining a function separately then providing its reference in forEach ++++++++

function printME(item) {
    console.log(item);
}
coding.forEach(printME)


// +++++++++++++++ important ++++++++++++++

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} ) 


// working on objects inside an array

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )