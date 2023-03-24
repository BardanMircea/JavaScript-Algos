// Write a module onlyDigits that exports a function onlyDigits.

// The function onlyDigits takes a string as argument and returns true if the string is only made of digits and spaces; false otherwise.

// Note that we are asking you to return a boolean, not to print it!
// Examples
// This: onlyDigits("100 299 009")
// Will return: true

// This: onlyDigits("666")
// Will return: true

// This: onlyDigits("Number: 0900 099 898")
// Will return: false

const onlyDigits = (str) => {

    for(const char of str){
        if(isNaN(char)) {
            if(char !== " "){
             
                return false;
            }
        }
    }
    return true;
}

module.exports = onlyDigits