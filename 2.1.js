const readlineSync = require("readLine-sync")
let age= new Number(readlineSync.question("How old are you?"));
if (age>=18){
console.log("Your are an adult");
} else {
console.log("You are not yet an adult");
}