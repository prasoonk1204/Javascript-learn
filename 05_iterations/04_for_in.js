// "for in" loop syntax
// for (const key in object) {
//     
// }

const Lang = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    py : "python"
}

for (const key in Lang) {
    // console.log(`${key} shortcut is for ${Lang[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}