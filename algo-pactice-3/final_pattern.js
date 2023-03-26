// Bonus Step
// This step is a bonus. It's more of a puzzle to solve than a programming exercice!
// Write a function named final_pattern.

// The function final_pattern takes three arguments:

// a list of words
// the height of the rectangle
// the width of the rectangle
// For each word of the list:

// if the word is "full", you will display a full rectangle
// if the word is "empty", you will display an empty rectangle
// if the word is "diagonal", you will display a rectangle with its diagonals
// if the word is "concentric", you will display a series of rectangles with the same center
// if the word is neither "full" or "empty" or "diagonal" or "concentric", do nothing
// The concentric function will print nothing if the height and the width are different, and if the size of the square
// minus 3 is not a multiple of 4.

// You will put your function final_pattern in a file named final_pattern.js.

// Examples
// This: final_pattern(["empty", "concentric", "full", "empty", "diagonal"], 3, 10)
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
// This: final_pattern(["empty", "patato", "concentric"], 11, 11)
// Will print:

// ***********
// *         *
// *         *
// *         *
// *         *
// *         *
// *         *
// *         *
// *         *
// *         *
// ***********
// ***********
// *         *
// * ******* *
// * *     * *
// * * *** * *
// * * * * * *
// * * *** * *
// * *     * *
// * ******* *
// *         *
// ***********
// This: final_pattern(["full", "patato", "concentric"], 10, 10)
// Will print:

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

const final_pattern = (list, height, width) => {
    if(height <= 0 || width <= 0 ){
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
            case "concentric":
                concentric(height, width);
                break;
            default: continue;       
        }   
    }
}


const concentric = (height, width) => {
    if(height != width){
        return;
    }
    if((height - 3) % 4 != 0) {
        return;
    }
    
    let fullLine = "";
    let spaceLine= "";
    let leftPadding = "*";
    let rightPadding = "*";

    for(let i = 0; i < width - 2; i++){
        fullLine += "*"
        spaceLine += " "
    }

    for(let i = 0; i < parseInt(height / 2); i++){
        if(i >= parseInt(height / 2 / 2 + 1)){
            leftPadding = leftPadding.slice(0, -2) 
            rightPadding = rightPadding.slice(0, -2)
            fullLine += "****"
            spaceLine += "    "
            console.log(leftPadding + spaceLine + rightPadding)
            console.log(leftPadding + fullLine + rightPadding)
        } else {
            console.log(leftPadding + fullLine + rightPadding)
            console.log(leftPadding + spaceLine + rightPadding)
            if(i < parseInt(height / 2 / 2)){
                leftPadding += " *"
                rightPadding = "* " + rightPadding
                fullLine = fullLine.slice(0, -4)
                spaceLine = spaceLine.slice(0, -4)
            }
            if(i === parseInt(height / 2 / 2)){
                console.log(leftPadding + fullLine + rightPadding)
            }
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


module.exports = final_pattern

