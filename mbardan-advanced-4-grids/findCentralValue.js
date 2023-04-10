// Write a module findCentralValue that exports a function findCentralValue.

// The function findCentralValue takes a grid of strings as argument.

// The function will return the central value of the grid; that is, the value that's in the central column, in the central line.

// The grid provided as argument will always have an odd number of lines and columns.
// Example
// This:

// findCentralValue([
//         ["1", "2", "3"],
//         ["a", "b", "c", "d", "e"],
//         ["(", "-", "!", ".", "?"],
//         [],
//         ["A", "B"],
//     ])
// Will return: '!'

// Because the central line is ["(", "-", "!", ".", "?"] (there's 2 lines before it, and 2 lines after it) and the central value from that line is '!'.

// Similarly, this:

// findCentralValue([
//         ["blamey"],
//         ["100", "200", "300", "400", "500", "600", "700"],
//         ["a", "e", "i", "o", "u"]
//     ])
// Will return: '400'

const findCentralValue = (stringsGrid) => {
    return stringsGrid[parseInt(stringsGrid.length / 2)][parseInt(stringsGrid[parseInt(stringsGrid.length / 2)].length/2)]
}

module.exports = findCentralValue