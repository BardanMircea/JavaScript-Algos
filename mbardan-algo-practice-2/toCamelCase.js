// Write a module toCamelCase that exports a function toCamelCase.

// The function toCamelCase takes a snake_case string (where words are separated by _) as argument, and returns the corresponding camelCase string.  

// In the camelCase string, all words are capitalised and their remaining letters are lowercase.

// The only exception is the first word, which should be capitalised only if the original word was capitalised.

// This: toCamelCase("Hello_my_name_is_bond")
// Will return: "HelloMyNameIsBond"

// This: toCamelCase("apple_jUICE")
// Will return: "appleJuice"

// This: toCamelCase("")
// Will return: ""

// Use the .split method to split the original string on the character _

const toCamelCase = (snakeCaseStr) => {

    if(snakeCaseStr === "") return "";

    let words = snakeCaseStr.toLowerCase().split("_");
    let wordsToCamelCase = ""

    for(let word of words){
        wordsToCamelCase += word[0].toUpperCase() + word.slice(1);
    }

    wordsToCamelCase = wordsToCamelCase.replace(wordsToCamelCase[0], snakeCaseStr[0])
   
    return wordsToCamelCase;
}

// toCamelCase("hello_my_name_is_bond");

module.exports = toCamelCase;