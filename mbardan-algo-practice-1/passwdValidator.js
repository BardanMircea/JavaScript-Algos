// Write a module passwdValidator that exports a function passwdValidator.

// The function passwdValidator takes a string as argument.

// It will return true if the string is a valid password; false otherwise.

// A valid password has the following characteristics:

// it has between 6 and 12 characters (included)
// it has at least one lowercase character
// it has at least one uppercase character
// it has at least one number
// it has at least one special character: $, # or @
// Examples
// This: passwdValidator("l#H1@")
// Will return: false

// This: passwdValidator("el3H1@f")
// Will return: true

// This: passwdValidator("fwjifewJ#")
// Will return: false

const passwdValidator = (str) => {

    if(str.length >= 6 && str.length <= 12){
        if(/[A-Z]/.test(str) && /[a-z]/.test(str)){
            if(str.includes("$") || str.includes("#") || str.includes("@")){
                if(/\d/.test(str)){
                    return true;
                }
            }
        }
    }
    return false;
}

module.exports = passwdValidator;