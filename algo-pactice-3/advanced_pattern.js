// Write a function named advanced_pattern.

// The function advanced_pattern takes three arguments:

// a list of words
// the height of the rectangle
// the width of the rectangle
// For each word of the list:

// if the word is "full", you will display a full rectangle
// if the word is "empty", you will display an empty rectangle
// if the word is "diagonal", you will display a rectangle with its diagonals
// if the word is neither "full" or "empty" or "diagonal", do nothing
// The diagonal function will print nothing if the height and the width are different.

// You will put your function advanced_pattern in a file named advanced_pattern.js.

// Examples
// This: advanced_pattern(["empty", "full", "empty", "diagonal"], 3, 10)
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
// This: advanced_pattern(["empty", "patato", "diagonal"], 6, 6)
// Will print:

// ******
// *    *
// *    *
// *    *
// *    *
// ******
// ******
// **  **
// * ** *
// * ** *
// **  **
// ******
// This: advanced_pattern(["full", "patato", "diagonal"], 7, 7)
// Will print:

// *******
// *******
// *******
// *******
// *******
// *******
// *******
// *******
// **   **
// * * * *
// *  *  *
// * * * *
// **   **
// *******

const advanced_pattern = (list, height, width) => {
    if(height <= 0 || width <= 0){
        return;
    }
    for(let word of list){
        switch(word){
            case "full": 
                full_rectangle(height, width);
                break;
            case "empty": 
                empty_rectangle(height, width);
                break;
            case "diagonal": 
                diagonal(height, width);
                break; 
            default: continue;       
        }   
    }
}


const diagonal = (height, width) => {
    if(height != width){
        return;
    }
    for(let i = 0; i < height; i++){
        let line = "*";
        for(let j = 0; j < width - 2; j++){
            if(i === 0 || i === height - 1){
                line += "*";
                continue;
            } 
            if(j === i - 1 || i === width - 2 - j) {
                line += "*";
            } else {
                line += " ";
            }
        }
        line += "*";
        console.log(line)
    }
}

const full_rectangle = (height, width) => {
    for(let i = 0; i < height; i++) {
        let line = "";
        for(let j = 0; j < width; j++){
            line += "*";
        }
        console.log(line);
    }
}

const empty_rectangle = (height, width) => {
    for(let i = 0; i < height; i++){
        let line = "*"
        for(let j = 0; j < width -2; j++){
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

module.exports = advanced_pattern

