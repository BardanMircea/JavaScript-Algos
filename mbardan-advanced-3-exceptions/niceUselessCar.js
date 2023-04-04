// Write a module niceUselessCar that exports a function niceUselessCar.

// The function niceUselessCar takes a function as argument.

// It will try to execute the function passed as argument:

// If the function executes properly, niceUselessCar will return true
// If the function throws an error, niceUselessCar will catch the error and then
// It will first print the message "Hmm..."
// Then it will return false
// In any case, it will print the message "Thank you for using the Useless Car"
// Examples
// Example 1
// Executing this code:

// const niceUselessCar = require('./niceUselessCar')
// const returnedBool = niceUselessCar(function() {
//   throw new RangeError("I'm not long enough :(")
// })
// console.log(`I have returned ${returnedBool}`)
// Will print:

// Hmm...
// Thank you for using the Useless Car
// I have returned false
// Example 2
// Executing this code:

// const niceUselessCar = require('./niceUselessCar')
// const returnedBool = niceUselessCar(function() {
//   console.log("All good!")
// })
// console.log(`I have returned ${returnedBool}`)
// Will print:

// All good!
// Thank you for using the Useless Car
// I have returned true

const niceUselessCar = (funct) => {
    try{
        funct();
        return true;
    } catch(e){
        console.log(`Hmm...`)
        return false;
    } finally{
        console.log("Thank you for using the Useless Car")
    }
}

module.exports = niceUselessCar