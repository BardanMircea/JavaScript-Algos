// Write a module goToLevel that exports a function goToLevel.

// The function goToLevel moves an elevator inside a 20-story building (floors 0 to 19). It takes two integer arguments:

// the current floor
// the destination floor
// The function will return the number of floors the elevator has to go through to reach the destination. If the elevator goes up, the number is positive; 
// if the elevator goes down, the number is negative.

// If the floors provided as arguments are invalid (if they are less than 0 or bigger than 19), the function will return 0.

// Examples
// This: goToLevel(0, 3)
// Will return: 3

// This: goToLevel(10, 3)
// Will return: -7

// console.log(goToLevel(10, 3))
// Will return: -4

// This: goToLevel(1, 24)
// Will return: 0

// We will only test your function with numbers.


const goToLevel = (currFl, destinationFl) => {

    if(currFl < 0 || currFl > 19 || destinationFl < 0 || destinationFl > 19){
        return 0; 
    }

    return destinationFl - currFl;
}

module.exports = goToLevel;

