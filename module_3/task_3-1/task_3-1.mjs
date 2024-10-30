"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 7;
if (wakeUpTime === 6, wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
printOut("i have to take the train to school")
} else {
  printOut("i have to take the car to school")
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = -6;
if (number > 0) {
  printOut("Positive");
}else if (number < 0){
  printOut("Negative");
}else {
  printOut("Zero");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let imageSize = Math.floor(Math.random()) * 8 + 1;{
  printOut("The Image size is", imageSize, "MP");
} 
printOut (imageSize.toString());

if (imageSize >=4){
  printOut("Thank you!");
} else {
  printOut ("The image is to small!")
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Photo size = " + imageSize + " " )

if (imageSize >= 6){
  printOut("The image is too large");
} else if (imageSize >= 4){
  printOut("Thank you");
}else {
  printOut("The image is too small!")
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = [
  "january", "February", "Mars", "April", "Mai", 
  "Jun", "Juli", "August", "September" , "October", "November", "December"
];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
const monthIndex = monthList.indexOf(monthName)
const days = daysInMonth[monthIndex];

printOut("Month is " + monthName.toString());
if (monthName.includes ("r")){
  printOut ("You must take D vitamin");
} else {
  printOut ("you dont have to take D vitamin");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(`the month of ${monthName} has ${days} days`);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "Mars") {
  printOut("The gallary is closed for refurbishment");
}
if (monthName === "Mai") {
  printOut ("The gallary is closed for refurbishment");
}
if (monthName === "April") {
  printOut ("The gallary is temporarily located in the building next door");
}
if (monthName !== "Mars" && monthName !== "Mai" && monthName !== "April"){
  printOut ("The gallary is open");
}

printOut(newLine);
