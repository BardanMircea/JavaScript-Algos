// Write a module conditionalSum that exports a function conditionalSum.

// The function conditionalSum takes an array of integers and an array of booleans as arguments. Both arrays will contain the same number of elements.

// The function will return the sum of all numbers (from the 1st list) that are at the same index as a true in the 2nd list.
// If there is no true value in the 2nd list, the function will return 0.

// Examples
// This: conditional_sum([10, 2, 3, 4], [true, false, false, true])
// Will return: 14

// This: conditional_sum([10, 2, 3, 4], [false, false, false, false])
// Will return: 0

const conditionalSum = (intArr, boolArr) => {
    if(intArr.length != boolArr.length){
        return;
    }

    let sum = 0;
    for(let i = 0; i < intArr.length; i++){
        if(boolArr[i] === true){
            sum += intArr[i]
        }
    }
    return sum;
}
// console.log(conditionalSum([10, 2, 3, 4], [false, false, false, false]))

module.exports = conditionalSum