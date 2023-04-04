// Write a module startUselessCarWithKey that exports a function startUselessCarWithKey.

// The function startUselessCarWithKey takes a function as argument.

// It will try to execute the function passed as argument:

// If the function executes properly, startUselessCarWithKey will return true
// If the function throws an error, startUselessCarWithKeywill catch the error and display the message "I've caught <error name> <error message>" - and then it will return false
// The message to print when an error has been caught is the same as the example code in the previous exercice.
// Examples
// Executing this code:

// const startUselessCarWithKey = require('./startUselessCarWithKey');
// const returnedBool = startUselessCarWithKey(function() {
//   throw new Error("Key broken!")
// });
// console.log(`I have returned ${returnedBool}`);
// Will print:

// I've caught Error Key broken!
// I have returned false
// And executing this code:

// const startUselessCarWithKey = require('./startUselessCarWithKey');
// const returnedBool = startUselessCarWithKey(function() {
//     console.log("All is fine");
// });
// console.log(`I have returned ${returnedBool}`);
// Will print:

// All is fine
// I have returned true

const startUselessCarWithKey = (func) => {
    try{
        func();
        return true;
    } catch(e){
        console.log(`I've caught ${e.name} ${e.message}`)
        return false;
    }
}

module.exports = startUselessCarWithKey