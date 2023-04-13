// Write a module isFit that exports a function isFit.

// The function isFit takes an array of coordinates - each represented by an array [x, y] - and returns true if all coordinates fit in a 3x3 square; false otherwise.

// const isFit = require("./isFit");
// console.log(isFit([]));       // $> true
// console.log(isFit([[1, 3]]))  // $> true
// console.log(isFit([[1, 3], [3, 3]]))          // $> true
// console.log(isFit([[1, 3], [3, 3], [3, 7]]))  // $> false
// console.log(isFit([[1, 3], [3, 3], [3, 5]]))  // $> true
// console.log(isFit([[1, 3], [3, 3], [3, 6]])); // $> true
// console.log(isFit([[1, 3], [3, 3], [3, 6], [3, 2]]))  // $> false

const isFit = (coordsArr) => {
    if(coordsArr.length === 0){
        return true;
    }

    // check each point against all others, return false if the difference between any of the coordinates is more than 3 points
    for(let i = 0; i < coordsArr.length; i++){
        for(let j = i + 1; j < coordsArr.length; j++){
            if(Math.abs(coordsArr[i][0] - coordsArr[j][0]) > 3 ||
               Math.abs(coordsArr[i][1] - coordsArr[j][1]) > 3 ){
                return false
            }
        }
    }
    return true
}

module.exports = isFit
