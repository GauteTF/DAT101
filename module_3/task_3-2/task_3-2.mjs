"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for(let count = 1; count <= 10; count++) {
    printOut(count.toString());
}

for(let count = 10; count >= 1; count--) {
    printOut(count.toString());
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let Correct = 0;

do {
    Correct = Math.floor(Math.random() * 60);
    
}
while(Correct !== 45)
printOut ("tallet er")
printOut(Correct.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

Correct = 0;
const startTime = Date.now();
let count = 0;


do {
    Correct = Math.floor(Math.random() * 1000000);
    count++
    
}
while(Correct !== 45)



const stopTime = Date.now();
const timeTaken = stopTime - startTime;

let countAnswer = " Tallet som er valgt " + Correct + " Dataen brukte " + timeTaken + "ms, Det tok " + count + " Forsøk ";
printOut (countAnswer);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let num = 2; num < 200; num++) {
    let isPrime = true;
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++){
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        printOut(num + ",");
    }
}
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let row = 0;
let col = 0;
let text = "";

for (row = 1; row <=7; row++) {
    for (col = 1; col <=9; col++)
text += row + "R" + col + "K ";
    if (row < 7) {
        text += "<br/>";
    }
}

/* skjønner ikke hvorfor 2R2K ikke kommer under i riktig rekke følge?
*/
printOut(text);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let karakterPoeng = Math.ceil(Math.random() * 236);
console.log(karakterPoeng);
let karakterProsent = (karakterPoeng / 236) * 100;
let karakterText = "";
if (karakterPoeng <= 94) {
    karakterText = "F";
}
else if (karakterPoeng <= 122) {
    karakterText = "E";
}
else if (karakterPoeng <= 151) {
    karakterText = "D";
}
else if (karakterPoeng <= 179) {
    karakterText = "C";
}
else if (karakterPoeng <= 207) {
    karakterText = "B";
}
else {
    karakterText = "A";
}
printOut ("kandidaten fikk karakteren ");
printOut (karakterText);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let terningKast = Math.ceil(Math.random()) * 6;

printOut("Første kast ble " + terningKast);

let isYatzy = [];
let antalKast = 0;
let restKast = 0;

isYatzy.push(terningKast);

for (restKast = 0; restKast < 5; restKast++) {

if(isYatzy[0] === terningKast){
    do{
        terningKast = Math.ceil(Math.random() * 6);
        antalKast++;
    }
    while (isYatzy[0] !== terningKast)
        isYatzy.push(terningKast);
}
}

printOut("antall kast det tok for yatzy " + antalKast);
printOut("<b>" + isYatzy + "<b>");

printOut("--- Straight ----------------------------------------------------------------------------------");



printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
