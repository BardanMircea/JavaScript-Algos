// Write a module printFilter that exports a function printFilter.

// The function printFilter takes an array and prints all its elements one by one. It also takes a second argument: a list of banned words that should never be printed.

// Look at the examples:

// Examples
// This: printFilter(["nice", "to", "meet", "you"])
// Will print:

// nice
// to
// meet
// you
// This: printFilter(["nice", "to", "meet", "you"], ["nice"])
// Will print:

// to
// meet
// you
// This: printFilter(["nice", "to", "meet", "you"], ["you", "to", "nice"])
// Will print:

// meet

const printFilter = (arr, bannedWords) => {
    if(bannedWords === undefined){
        for(let word of arr){
            console.log(word)
        }
    } else {
        for(let word of arr){
            if(!bannedWords.includes(word)){
                console.log(word)
            }
        }
    }
        
}
module.exports = printFilter
// printFilter(["nice", "to", "meet", "you"])