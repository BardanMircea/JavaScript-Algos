// Write a module displayGridPerLine that exports a function displayGridPerLine.

// The function displayGridPerLine takes a grid of strings as argument.

// The function will print the grid, subarray by subarray.

// Each subarray will be printed on its own line, with " => " as separation between two elements.

// Example
// This:

// displayGridPerLine([
//         ["1", "2", "3"],
//         ["a", "b", "c", "d", "e"],
//         [],
//         ["A", "B"],
//     ])
// Will print:

// 1 => 2 => 3
// a => b => c => d => e
// A => B
// Git instructions

const displayGridPerLine = (stringsGrid) => {
    for(const row of stringsGrid){
        // if(row.length === 0){
        //     continue;
        // }
        let line = ""
        for(let i = 0; i < row.length; i++){
            if(i === row.length - 1){
                line += row[i]
                break;
            }
            line += row[i] + " => "
        }
        console.log(line)
    }
}

module.exports = displayGridPerLine