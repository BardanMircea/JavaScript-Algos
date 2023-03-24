// Write a module announce that exports a function announce.

// The function announce takes an array of player names as argument, and prints a message with all player names.

// If the array is empty, the message Nobody will fight today! will be printed instead.

// Examples
// This: announce(["Jon", "Sansa", "Arya"])
// Will print:

// The contenders today are: Jon, Sansa, Arya
// This: announce(["Night Walker"])
// Will print:

//  The contenders today are: Night Walker
// This: announce([])
// Will print:

// Nobody will fight today!
// Hint
// Proceed step by step: start by displaying all the strings in a loop. Once you have that, you can add the introductory message and figure out how to add the commas (that may be the tricky part!). Then, handle the special case where the array is empty, and you are done!

const announce = (playerNames) => {

    if(playerNames.length === 0){
        console.log("Nobody will fight today!")
        return;
    }
    
    let message = "The contenders today are: "
   
    for(let i = 0; i < playerNames.length; i++){
        if(i === playerNames.length - 1){
            message += playerNames[i]
            break;
        }
        message += playerNames[i] + ", ";
    }
    console.log(message)
}

module.exports = announce