const readlineSync = require("readLine-sync")
let minimum= new Number(readlineSync.question("chose the number minimum: "));
let maximum= new Number(readlineSync.question("chose the number maximum: "));
let current= new Number(readlineSync.question("chose the number current: "));
if ((current >= minimum) && (current <= maximum)) {
    console.log("Nice you can continue")
}
else if (minimum >= maximum) {
    console.log("Error, you don't understand anything")
}
else {
    console.log("Error, you are fail!")
}