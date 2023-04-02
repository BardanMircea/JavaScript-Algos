// Write a module dory that exports an object dory. (You write an object with its own property and methods, and you export it)

// The object dory has a property named name with its value set to "Dory".

// The object also has a method named mantra that prints "Just Keep Swimming".

// So this:

// const dory = require("./dory");
// dory.mantra();
// console.log("Its name is", dory.name);
// Will print:

// Just Keep Swimming
// Its name is Dory

const dory = {
    name : "Dory",
    mantra() {
        console.log("Just Keep Swimming")
    }
}

module.exports = dory