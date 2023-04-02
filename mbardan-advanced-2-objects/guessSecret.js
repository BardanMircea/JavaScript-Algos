// Write a module guessSecret that exports an object guessSecret.

// The guessSecret object has a property tries initialised to 3.

// The object also has two methods:

// A createSecret method that takes a value as argument and creates a property secret set to that value
// A try method that takes a value as argument and checks if it's the same as the secret.
// If the secret hasn't been created yet, it will print "I have no secrets"
// if there are no tries left, it will simply print "Sorry, no guesses left. The secret can never be revealed."
// if there are tries left but the value is not the secret, it will decrement the tries property and print the message "You guessed wrong. Tries: X left."
// finally, if the value matches the secret, it will print "The secret has been revealed!"
// You can (and should) do this step-by-step. Implement the first requirement, test it, implement the second requirement, test it, ...
// Unit tests (isolated, test only one feature)
// Test you have correctly initialised the tries property:

// const guessSecret = require("./guessSecret");
// console.log(guessSecret.tries);   // it should print 3
// Test the createSecret method:

// const guessSecret = require("./guessSecret");
// console.log(guessSecret.secret);  //  It should print undefined
// guessSecret.createSecret("The psychologist is already dead.");
// console.log(guessSecret.secret);  //  It should print the secret you just set
// Test the first requirement of the try method:

// const guessSecret = require("./guessSecret");
// guessSecret.try("he is dead already");  // It should print "I have no secrets"
// Test the second requirement of the try method:

// const guessSecret = require("./guessSecret");
// guessSecret.createSecret("The psychologist is already dead.");
// guessSecret.tries = 0;        // We force the case when there are no tries left
// guessSecret.try("he's bald"); // It should print "Sorry, no guesses left. The secret can never be revealed."
// Test the third requirement of the try method:

// const guessSecret = require("./guessSecret");
// guessSecret.createSecret("The psychologist is already dead.");
// console.log(guessSecret.tries);   // It should print 3
// guessSecret.try("he's bald");     // It should print "You guessed wrong. Tries: 2 left."
// console.log(guessSecret.tries);   // It should print 2
// Test the fourth requirement of the try method:

// const guessSecret = require("./guessSecret");
// guessSecret.createSecret("The psychologist is already dead.");
// guessSecret.try("The psychologist is already dead."); // It should print "The secret has been revealed!"
// Integration test (test that it all works together)
// You can't require a module twice, so you have to run those tests in two separate test files.

// const home = require("./guessSecret");
// home.createSecret("home");
// home.try("cat");        // $> You guessed wrong. Tries: 2 left.
// home.try("spaceship");  // $> You guessed wrong. Tries: 1 left.
// home.try("potato");     // $> You guessed wrong. Tries: 0 left.
// home.try("home");       // $> Sorry, no guesses left. The secret can never be revealed.
// const nb = require("./guessSecret");
// nb.createSecret(25)
// nb.try("25");       // $> You guessed wrong. Tries: 2 left.
// nb.try(25);         // $> The secret has been revealed!

const guessSecret = {
    tries : 3,
    createSecret(value){
        this.secret = value;

    },
    try(value){
        if(this.secret === undefined){
            console.log("I have no secrets");
            return;
        } 
        if(this.tries === 0){
            console.log("Sorry, no guesses left. The secret can never be revealed.")
            return;
        }   
        if(this.secret !== value){
            this.tries--;
            console.log(`You guessed wrong. Tries: ${this.tries} left`)
        } else {
            console.log("The secret has been revealed!")
        } 
    }

}

module.exports = guessSecret;