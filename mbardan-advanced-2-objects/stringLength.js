// Write a module stringLength that exports a function stringLength.

// The function stringLength takes a string as argument and returns the length of the string.

// The goal is simply to use the length property of a String object. Don't compute the length or handle error cases by hand!
// This: stringLength("myString")
// Will return: 8

// This: stringLength("")
// Will return: 0

// This: stringLength(23)
// Will return: undefined

const stringLength = (str) => {
    return str.length;
}
 
module.exports = stringLength