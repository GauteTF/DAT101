"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const x = 2 + 3 * (2-4) *6;
printOut ("2 + 3(2 - 4) 6 = " + x.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters/inch */
/*
    (25.4 / 1000) * 25.34m
*/

const milliInInch = 25.4;
const milliInMeters = 1000;
const meters = 25.34;
const answer = (meters * milliInMeters) / milliInInch;
const exactAnswer = answer.toFixed(2);

printOut("exactAnswer = " + exactAnswer.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* convert 3 days, 12 hours, 14 minutes, and 45 seconds to minuts
*/

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part3_Answer = 
(3 * hoursInDay * minutesInHour) +
(12 * minutesInHour) +
14 + 
(45 / secondsInMinute);

printOut("part3_Answer = " + part3_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds.
*/

const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*
Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK -> USD and USD -> NOK
Use 76 NOK = 8.6 USD as exchange rate.
The answer must be in whole "Kroner" and whole "dollars".
*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut( amountUSD + " dollars is " + amountNOK + " Kroner");
amountUSD = Math.round(amountNOK * USD); 
printOut( amountNOK + " kroner is " + amountUSD + " dollars");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Thre is much between heaven and earth that we do not understand";
const numberOfCharacters = text.length;
const characterAt19 = text.charAt(18);
const substringFrom35 = text.substring(34, 34 + 8);
const indexOfEarth = text.indexOf(`earth`);

printOut(numberOfCharacters + characterAt19 + substringFrom35 + indexOfEarth);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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