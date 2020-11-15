const readlineSync = require("readLine-sync")
let fav_num= Number(readlineSync.question("What is you favorite number ?"));

while(fav_num !== 42)
{   
    console.log("Are you sure")
    fav_num= Number(readlineSync.question("What is you favorite number ?"));
}