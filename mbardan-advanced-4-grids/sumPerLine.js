// Write a module sumPerLine that exports a function sumPerLine.

// The function sumPerLine takes a grid of integers as argument.

// The function will return an array of the sums for each subarray.

// Example
// This:

// sumPerLine([
//         [1, 2, 3],
//         [4, 8, 15, 16, 23, 42],
//         [9, 3, 81, -34],
//     ])
// Will return: [6, 108, 59]

// Because, line by line, we have:

// 1 + 2 + 3 => 6
// 4 + 8 + 15 + 16 + 23 + 42 => 108
// 9 + 3 + 81 - 34 => 59

const sumPerLine = (intsGrid) => {
    const sumsArr = []
    for(const line of intsGrid){
        let sum = 0;
        for(const int of line){
            sum += int
        }
        sumsArr.push(sum)
    }
    return sumsArr
}


module.exports = sumPerLine