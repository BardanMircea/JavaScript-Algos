// Write a module ageValidator that exports a function ageValidator.

// The function ageValidator takes an object that has an age property as argument, and checks the value of the age property. If the value is between 0 and 150 (included), the function returns true; otherwise it returns false.

// This: ageValidator({ age: 43, firstName: "James", lastName: "Bond" })
// Will return: true

// This: ageValidator({ weight: 102, age: -98 })
// Will return: false

// This: ageValidator({ age: "lucie" })
// Will return: false

const ageValidator = (obj) => {
    if(obj.age >= 0 && obj.age <= 150){
        return true;
    }
    return false;
    
}

module.exports = ageValidator