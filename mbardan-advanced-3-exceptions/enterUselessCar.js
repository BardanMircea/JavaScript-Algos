// Write a module enterUselessCar that exports a function enterUselessCar.

// The function enterUselessCar will throw an Error object with the message "Door cannot be open!"

// Example
// Here's a way to test that your function works properly.

// Executing this code:

// const enterUselessCar = require('./enterUselessCar')
// try {
//     enterUselessCar()
// } catch (e) {
//     console.log(`I've caught ${e.name} ${e.message}`)
// }
// Will print:

// I've caught Error Door cannot be open!

const enterUselessCar = () => {
    throw new Error("Door cannot be open!")
}

try {
    enterUselessCar()
} catch (e) {
    console.log(`I've caught ${e.name} ${e.message}`)
}

module.exports = enterUselessCar