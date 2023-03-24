// Write a module calculator that exports a function calculator.

// The function calculator takes two numbers and one operator as arguments.

// It will apply the operator to the two numbers, and print the result of the operation, as in the examples.

// Examples
// Executing a file that contains this code:

// const calculator = require("./calculator");

// Will output:

// The result of 20 - 10 = 10
// And executing a file that contains this code:

// const calculator = require("./calculator");
// calculator(20, 10, "+");
// calculator(20, 10, "/");
// calculator(20, 10, "*");
// Will output:

// The result of 20 + 10 = 30
// The result of 20 / 10 = 2
// The result of 20 * 10 = 200

const calculator = (num1, num2, operation) => {
    let result;
    switch(operation){
        
        case "+":
            result = num1 + num2; 
            console.log("The result of " + num1 + " " + operation + " " + num2 + " = " + result);
            break;
        case "-":
            result = num1 - num2; 
            console.log("The result of " + num1 + " " + operation + " " + num2 + " = " + result)
            break;
        case "*":
            result = num1 * num2; 
            console.log("The result of " + num1 + " " + operation + " " + num2 + " = " + result)
            break;
        case "/":
            if(num2 === 0){
                throw new Error("Division by 0")
            }
            result = num1 / num2; 
            console.log("The result of " + num1 + " " + operation + " " + num2 + " = " + result)
            break;
    }
}


module.exports = calculator;