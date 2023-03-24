// Write a Javascript program that draws a right triangle. Your program will prompt the user for the size of the base and draw the corresponding triangle.

// Only positive numbers will be sent to your program.

// $> node draw_triangle.js (if the size of the base : 2)
//   /|
//  / |
// /__|
// $> node draw_triangle.js (if the size of the base : 10)
//           /|
//          / |
//         /  |
//        /   |
//       /    |
//      /     |
//     /      |
//    /       |
//   /        |
//  /         |
// /__________|
// $> node draw_triangle.js (if the size of the base : 0)
// /|
// $>

//BEGIN

const prompt = require("prompt-sync")({ sigint: true });

const baseLenght = parseInt(prompt("Enter the size of the base: "));

if (baseLenght <= 0) {
  console.log("Not a valid base");
  return;
}

const hypotenuse = "/";
const cathetus = "|";
let triangleBase = "";
let leftWhiteSpace = "";
let rightWhiteSpace = "";

for (let i = 0; i < baseLenght; i++) {
  triangleBase += "_";
}

for (let i = 0; i < baseLenght; i++) {
  leftWhiteSpace += " ";
}

for (let i = 0; i <= baseLenght; i++) {
  if (i === baseLenght) {
    console.log(hypotenuse + triangleBase + cathetus);
    break;
  }
  console.log(leftWhiteSpace + hypotenuse + rightWhiteSpace + cathetus);
  leftWhiteSpace = leftWhiteSpace.slice(0, leftWhiteSpace.length - 1);
  rightWhiteSpace += " ";
}

// END
