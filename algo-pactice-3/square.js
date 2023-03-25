// Write a script square.js.

// This script will display a 10 x 10 square, made of *.

// You will put the file square.js (and all the other files for this project) at the root of your Git repository.
// Example
// $> node square.js
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// $> node square.js
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// $>

const square = () => {
    
    for(let i = 0; i < 10; i++){
        let line = ""
        for(let j = 0; j < 10; j++){
            line+= "*"
        }
        console.log(line)
    }
}

square();