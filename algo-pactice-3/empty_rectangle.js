// Write a function named empty_rectangle.

// The function empty_rectangle takes two arguments: the first one is the height of the rectangle, and the second one is the width of the rectangle.

// The sides of the rectangle will be made of *, while the inside of the rectangle will be made of " " (whitespaces).

// You will put your function empty_rectangle in a file named empty_rectangle.js.

// Examples
// This: empty_rectangle(3, 5)
// Will print:

// *****
// *   *
// *****
// This: empty_rectangle(1, 5)
// Will print:

// *****
// This: empty_rectangle(2, 5)
// Will print:

// *****
// *****
// This: empty_rectangle(3, 1)
// Will print:

// *
// *
// *
// This: empty_rectangle(3, 3)
// Will print:

// ***
// * *
// ***

const empty_rectangle = (height, width) => {
    if(height <= 0 || width <= 0){
        return;
    }

    for(let i = 0; i < height; i++){
        let line = "*"
        for(let j = 0; j < width - 2; j++){
            if(i === 0 || i === height- 1){
                line += "*"
            } else {
                line += " "
            }
                            }
        line += "*"
        console.log(line)
    }
}

module.exports = empty_rectangle

empty_rectangle(3,5)