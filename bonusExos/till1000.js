// Write a Javascript program that prompts the user for a starting number, and consecutive operations on that number. The program quits only when the number reaches or exceeds 1000.

// If a division by 0 is attempted, an error message is displayed, and the program continues normally.

// Note that for the division operation, you have to use the floor division operator

// Example:
// $> node till_1000.js
// Enter the starting number: 999
// Enter an operation: -1
// 998
// Enter an operation: +2
// 1000
// $> node till_1000.js
// Enter the starting number: 9
// Enter an operation: *10
// 90
// Enter an operation: +700
// 790
// Enter an operation: +1
// 791
// Enter an operation: /5
// 158
// Enter an operation: *8
// 1264
// $> node till_1000.js
// Enter the starting number: 1000
// $> node till_1000.js
// Enter the starting number: 800
// Enter an operation: /0
// Error.
// 800
// Enter an operation: +220
// 1020

// BEGIN
const prompt = require("prompt-sync")({ sigint: true });

let startingNumber = prompt("Enter the starting number: ");

let number = parseInt(startingNumber);

while (true) {
  if (number >= 1000) {
    return;
  }

  let operation = prompt("Enter an operation: ");

  let operator = operation.substring(0, 1);
  let operand = parseInt(operation.substring(1));

  if (isNaN(operand)) {
    console.log("Please insert a valid number");
    continue;
  }

  switch (operator) {
    case "+":
      number += operand;
      break;
    case "-":
      number -= operand;
      break;
    case "*":
      number *= operand;
      break;
    case "/":
      if (operand === 0) {
        console.log("Division by zero!");
      } else {
        number /= operand;
      }
      break;
    default:
      console.log("Not a supported operation");
  }

  console.log(number);
}
// END
