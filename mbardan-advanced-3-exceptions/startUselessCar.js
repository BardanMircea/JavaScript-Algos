// Write a module startUselessCar that exports a function startUselessCar.

// The function will simply throw the message "I cannot start!".

// Example
// Here's a way to test that your function works properly.

// Executing this code:

// const startUselessCar = require('./startUselessCar')
// try {
//     startUselessCar()
// } catch (e) {
//     console.log(`I've caught ${e}`)
// }
// Will print:

// I've caught I cannot start!

const startUselessCar = () => {
    throw("I cannot start!")
}

try {
        startUselessCar()
    } catch (e) {
        console.log(`I've caught ${e}`)
    }

module.exports = startUselessCar