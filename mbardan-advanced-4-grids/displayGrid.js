// Write a module displayGrid that exports a function displayGrid.

// The function displayGrid takes a grid (an array of arrays) as argument, and prints each element of the grid.

// It will first print all the elements in the first array, then print all the elements in the second array, and so on.

// Each printed element will be followed by a newline.

// Example
// This:

// displayGrid([
//         ["1", "2", "3"],
//         ["a", "b", "c", "d", "e"],
//         [],
//         ["A", "B"],
//     ])
// Will print:

// 1
// 2
// 3
// a
// b
// c
// d
// e
// A
// B

const displayGrid = (grid) => {
    for(const elem of grid){
        for(let i = 0; i < elem.length; i++){
            console.log(elem[i])
        }
        
    }
}

module.exports = displayGrid