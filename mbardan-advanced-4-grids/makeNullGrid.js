// Write a module makeNullGrid that exports a function makeNullGrid.

// The function makeNullGrid takes an integer (representing a size) as argument.

// The function will return a grid (a list of lists) of size by size elements. Each element of the grid will be set to null.

// Example
// This: makeNullGrid(3)
// Will print:

// [[null, null, null], [null, null, null], [null, null, null]]

const makeNullGrid = (size) => {
    const grid = []
    for(let i = 0; i < size; i++){
        grid[i] = []
        for(let j = 0; j < size; j++){
            grid[i][j] = null        
        }
     
    }
    return grid;
}

// console.log(makeNullGrid(6))

module.exports = makeNullGrid