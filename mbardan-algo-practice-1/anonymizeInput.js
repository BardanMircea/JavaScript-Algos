// Write a module anonymizeInput that exports a function anonymizeInput.

// The function anonymizeInput takes a string as argument.

// It will print the string with all its characters replaced by a * except for the 4 last ones.

// Examples
// Executing a file that contains this code:

// const anonymizeInput = require("./anonymizeInput");
// anonymizeInput("he sees ghosts");
// Will print:

// **********osts
// This: anonymizeInput("roses are red")
// Will print: ********* red

// This: anonymizeInput("-_-")
// Will print: -_-

const anonymizeInput = (str) => {
    let hiddenStr = "";
    for(let i = 0; i < str.length - 4; i++){
        hiddenStr += "*";
    }
    let lastFour = str.slice(-4);
    console.log(hiddenStr + lastFour);
}


// anonymizeInput("roses are red")
// anonymizeInput("he sees ghosts");
module.exports = anonymizeInput;