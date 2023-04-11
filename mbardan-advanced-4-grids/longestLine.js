// Write a module longestLine that exports a function longestLine.

// The function longestLine takes a rowsGrid (an array of arrays) as argument.

// The function will look at all the rowsGrid lines (vertical and horizontal), and will return the length of the longest sequence of identical consecutive elements.

// Example
// This:

// longestLine([
//     ['1', '2', '3'],
//     ['1', '2', '3'],
//     ['7', '2', '4'],
//     ['3', '2', '4'],
//     ['7', '1', '1'],
// ])
// Will return (because the longest sequence is the sequence of '2' in the second column) : 4

const longestLine = (rowsGrid) => {

    // reverse grid by turning rows into columns
    const columnsGrid = turnRowsToColumns(rowsGrid)
  
    let longestRowSeq = findLongestSequence(rowsGrid);
    let longestColSeq = findLongestSequence(columnsGrid)
    return longestRowSeq > longestColSeq ? longestRowSeq : longestColSeq
    
}

// function to turn rows into columns
function turnRowsToColumns(rowsGrid) {
    const columnsGrid = []
    for (let i = 0; i < rowsGrid[i].length; i++) {
        columnsGrid[i] = []
        for (let j = 0; j < rowsGrid.length; j++)
            columnsGrid[i].push(rowsGrid[j][i])
    }
    return columnsGrid
}

//function to count the number of consecutive occurences and return the longest count
function findLongestSequence(grid) {
    let longestSeq = 1;
    for (let i = 0; i < grid.length; i++) {
        let seq = 1;
        for (let j = 1; j < grid[i].length; j++) {
            if (grid[i][j - 1] === grid[i][j]) {
                seq++;
                if (seq > longestSeq) {
                    longestSeq = seq;
                }
            } else {
                seq = 1;
            }
        }
    }
    return longestSeq;
}
module.exports = longestLine
