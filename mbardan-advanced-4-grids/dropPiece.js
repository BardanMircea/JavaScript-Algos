// This mission is inspired by the game Connect Four. In this game, players take turns dropping coins into a vertical grid, and whoever manages to align four of their coins (either vertically, horizontally or in a diagonal) wins.

// Here you will emulate the act of dropping the coin into the grid. 

// Write a module dropPiece that exports a function dropPiece.

// The function dropPiece takes three arguments - an array of arrays, a number representing a column, and a string - and returns true if the coin could be dropped; false otherwise. A coin cannot be dropped in a column that doesn't exist or if the given column is already full of coins.

// Note: an empty cell will be signified by the empty string. The grid can have any number of columns and rows, but all rows will always have the same length.

// Example
// This sequence of function calls:

// let grid = [["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];
// console.log(dropPiece(grid, 1, "W"))
// console.log(grid)
// console.log(dropPiece(grid, 1, "B"))
// console.log(grid)
// console.log(dropPiece(grid, 1, "W"))
// console.log(grid)
// console.log(dropPiece(grid, 1, "W"))
// console.log(dropPiece(grid, 5, "W"))
// Will print:

// true
// [['', '', '', ''], 
//  ['', '', '', ''], 
//  ['W', '', '', '']
// ]
// true
// [['', '', '', ''], 
//  ['B', '', '', ''], 
//  ['W', '', '', '']
// ]
// true
// [['W', '', '', ''], ['B', '', '', ''], ['W', '', '', '']]
// false
// false

const dropPiece = (grid, colNum, piece) => {
    if(grid.length === 0 || colNum-1 > grid.length){
        return false
    }

    for(let j = grid.length-1; j >= 0; j--){
        if(grid[j][colNum-1] === ""){
            grid[j][colNum-1] = piece
            return true
        } 
    }
    return false;
}
module.exports = dropPiece