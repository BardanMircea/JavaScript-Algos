// Write a function named full_rectangle.

// The function full_rectangle takes two arguments: the first one is the height of the rectangle, and the second one is the width of the rectangle.

// The function will print the corresponding rectangle, made of *.

// If one of the dimensions is negative or 0, your function will print nothing.

// You will put your function full_rectangle in a file named full_rectangle.js.

// Examples
// This: full_rectangle(3, 5)
// Will print:

// *****
// *****
// *****
// This: full_rectangle(1, 0)
// Will print nothing.

// This: full_rectangle(1, 5)
// Will print:

// *****
// This: full_rectangle(3, 1)
// Will print:

// *
// *
// *
// This: full_rectangle(3, 3)
// Will print:

// ***
// ***
// ***


const full_rectangle = (height, width) => {
    if(height <= 0 || width <= 0){
        return;
    }

    for(let i = 0; i < height; i++) {
        let line = "";
        for(let j = 0; j < width; j++){
            line += "*";
        }
        console.log(line);
    }
}

module.exports = full_rectangle;
