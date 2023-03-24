// Write a module insertDouble that exports a function insertDouble.

// The function insertDouble takes a string as argument, and displays that string back with a small difference: the characters n, s, p and l will be "doubled" in the output.

// Examples
// This: insertDouble("hello world")
// Will print: hellllo worlld

// And this: insertDouble("now let's settle this!")
// Will print: nnow llet'ss ssettlle thiss!
const insertDouble = (str) => {
    let redactedSentence ="";

for(char of str){
    redactedSentence += char;

    if(char === "n" || char === "s" || char === "p" || char === "l"){
        redactedSentence += char
    }
}

console.log(redactedSentence);
}

module.exports = insertDouble;

