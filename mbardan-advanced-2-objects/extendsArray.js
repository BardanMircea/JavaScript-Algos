// Write a module extendsArray that exports a function extendsArray.

// The function extendsArray adds 3 methods to the Array prototype:

// sum: Array.sum() returns the sum of all numbers in the array
// first: Array.first() returns the first element of the array
// last: Array.last() returns the last element of the array
// extendsArray();    // Here the function modifies the Array prototype
// const allNum = [4, 12, 8, 2];
// const mixed = ["Hello", 20, -1, "!", 450]
// allNum.sum();      // Will return 26
// allNum.last();     // Will return 2
// allNum.first();    // Will return 4
// mixed.sum();       // Will return 469
// /!\ Changing the prototype of a built-in class is considered bad practice, particularly if your code is meant to be shared and used by others. This is for educational purposes only! /!\

const extendsArray = () => {

    Array.prototype.sum = function () {
        let sum = 0;
        for(const elem of this){
            if(typeof elem === 'number'){
                sum += elem
            }
        }
        return sum;
    };

    Array.prototype.first = function () {
        return this[0]
    };

    Array.prototype.last = function () {
        return this[this.length - 1];
    };
}

module.exports = extendsArray