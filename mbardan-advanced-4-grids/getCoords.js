// Write a module getCoords that exports a function getCoords.

// The function getCoords takes a grid (made of an array of arrays) and returns an array with the coordinates of the first top-left integer it encounters.

// If the grid doesn't contain any integers, it will return the array [null, null].

// Examples
// This: getCoords([["", "", ""], ["", "", 2], [1, 2, 3]])
// Will return: [1, 2]

// This: getCoords([["", "", ""], ["", "", ""], [-10, "", ""]])
// Will return: [2, 0]

// This: getCoords([["", ""], ["", ""]])
// Will return: [null, null]

// This: getCoords([""])
// Will return: [null, null]

const getCoords = (grid) => {
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(typeof grid[i][j] === "number"){
                return [i, j]
            }
        }
    }
    return [null, null]
}

module.exports = getCoords