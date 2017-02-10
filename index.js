const readSync = require("readline-sync");
const math = require("./math");

let a = readSync.question("Enter a");
let b = readSync.question("Enter b");
let c = readSync.question("Enter c");

let result = math.equation(a,b,c);

console.log(result);
