// Write a module lastElemsOfGrid that exports a function lastElemsOfGrid.

// The function lastElemsOfGrid takes an array of arrays as argument.

// The function will return an array that contains the last elements of each subarray.

// The argument provided to the function will always have at list one subarray, and all subarrays will have at least one element.

// Examples
// This:

// lastElemsOfGrid([
//     ["1", "2", "3"],
//     ["a", "b", "c", "d", "e"],
//     ["(", "-", "!", ".", "?"],
//     ["A", "B"],
// ])
// Will return:

// ['3', 'e', '?', 'B']

const lastElemsOfGrid = (grid) => {
    const lastElemsArr = []

    for(const subArr of grid){
        lastElemsArr.push(subArr[subArr.length-1])
    }

    return lastElemsArr;
}

module.exports = lastElemsOfGrid