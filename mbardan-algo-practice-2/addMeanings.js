// Write a module addMeanings that exports a function addMeanings.

// The function addMeanings takes a string and a hash as arguments.

// The function will return the string, after adding in parentheses the meaning of the words that can be found in the hash.

// For simplicity, the sentences will not contain any punctuation and we will respect the case (the words of the sentence must match perfectly with the hash keys).

// Pay attention to spaces. Your result must be formatted exactly as below.
// Example
// This:

// addMeanings("she took the knife to murder the red pepper", {
//             "murder": "unfriendly act",
//             "pepper": "delicious condiment",
//             "knife": "pointy thing",
//             "SHE": "not in the sentence",
//         })
// Will return the following string: "she took the knife (pointy thing) to murder (unfriendly act) the red pepper (delicious condiment)"

const addMeanings = (str, hash) => {
    let resultStr = ""
    let words = str.split(" ")

    for(let word of words ){
        resultStr += word + " ";
        if(word in hash){
            resultStr += "(" + hash[word] + ") ";
        }
    }

    return resultStr.trim();
}

module.exports = addMeanings;

// console.log(addMeanings("SHE took the knife to murder the red pepper", {
//                 "murder": "unfriendly act",
//                 "pepper": "delicious condiment",
//                 "knife": "pointy thing",
//                 "SHE": "not in the sentence",
//             }))
