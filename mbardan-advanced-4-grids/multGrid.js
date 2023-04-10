// Write a module multGrid that exports a function multGrid.

// The functin multGrid takes a size s as argument.

// The function will return the s times multiplication table.

// Examples
// This: multGrid(4)
// Will return:

// [
//     [1, 2, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6, 9, 12],
//     [4, 8, 12, 16]
// ]
// This: multGrid(7)
// Will return:

// [
//     [1, 2, 3, 4, 5, 6, 7],
//     [2, 4, 6, 8, 10, 12, 14],
//     [3, 6, 9, 12, 15, 18, 21],
//     [4, 8, 12, 16, 20, 24, 28],
//     [5, 10, 15, 20, 25, 30, 35],
//     [6, 12, 18, 24, 30, 36, 42],
//     [7, 14, 21, 28, 35, 42, 49]
// ]

const multGrid = (size) => {
    const grid  = []
    for(let i = 0; i < size; i++){
        grid[i] = []
        for(let j = 0; j < size; j++){
            grid[i][j] = (i + 1) * (j + 1)
        }
    }
    return grid
}

module.exports = multGrid