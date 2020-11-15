const readlineSync = require("readLine-sync")
let numb= Number(readlineSync.question("Enter a number between 1 and 7 :"));


if (numb == 1) {
    console.log("Monday");
} 
if (numb == 2) {
    console.log("Tuesday");
} 
if (numb == 3) {
    console.log("Wednesday");
}
if (numb == 4) {
    console.log("Thursday");
} 
if (numb == 5) {
    console.log("Friday");
} 
if (numb == 6) {
    console.log("Saturday");
} 
if (numb == 7) {
    console.log("Sunday");
}
if ((numb<1) || (numb>7)){
    console.log("Error this number is not between 1 and 7");
}

