// Write a function named pattern.

// The function pattern takes three arguments: 

// a list of words
// the height of the rectangle
// the width of the rectangle
// For each word of the list:

// if the word is "full", you will display a full rectangle
// if the word is "empty", you will display an empty rectangle
// if the word is neither "full" or "empty", do nothing
// You will put your function pattern in a file named pattern.js. You should copy the full_rectangle and empty_rectangle functions in the file pattern.js as well.

// Examples
// This: pattern(["full"], 3, 5)
// Will print:

// *****
// *****
// *****
// This: pattern(["empty"], 3, 5)
// Will print:

// *****
// *   *
// *****
// This: pattern(["empty", "full", "empty"], 3, 10)
// Will print:

// **********
// *        *
// **********
// **********
// **********
// **********
// **********
// *        *
// **********
// This: pattern(["empty", "full", "potato", "empty"], 3, 10)
// Will print:

// **********
// *        *
// **********
// **********
// **********
// **********
// **********
// *        *
// **********

const pattern = (list, height, width) => {
    for(let word of list){
        if(word === "full"){
            full_rectangle(height, width)
        } else if(word === "empty"){
            empty_rectangle(height, width)
        } else {
            continue;
        }
    }
}


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

module.exports = pattern

