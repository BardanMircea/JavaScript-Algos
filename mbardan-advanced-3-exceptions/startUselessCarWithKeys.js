// Write a module startUselessCarWithKeys that exports a function startUselessCarWithKeys.

// The function startUselessCarWithKeys takes a function as argument.

// It will try to execute the function passed as argument:

// If the function executes properly, startUselessCarWithKeys will return true
// If the function throws an error, startUselessCarWithKeyswill catch the error and then
// if the error is of type TypeError, it will print the message "TypeError <error message>"
// if the error is of type RangeError, it will print the message "RangeError <error message>"
// in all cases, no matter the type of the error, it will return false
// Examples
// Example 1
// Executing this code:

// const startUselessCarWithKeys = require('./startUselessCarWithKeys')
// const returnedBool = startUselessCarWithKeys(function() {
//   throw new RangeError("I'm not long enough :(")
// })
// console.log(`I have returned ${returnedBool}`)
// Will print:

// RangeError I'm not long enough :(
// I have returned false

const startUselessCarWithKeys = (func) => {
    try{
        func();
        return true;
    } catch(e){
        if(typeof e === TypeError){
            console.log(`TypeError ${e.message}`)
        } else if(typeof e === RangeError){
            console.log(`RangeError ${e.message}`)
        }
        
        return false;
    }
}

module.exports = startUselessCarWithKeys
