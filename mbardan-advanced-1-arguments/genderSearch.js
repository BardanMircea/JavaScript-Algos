// Write a module genderSearch that exports a function genderSearch.

// The function genderSearch takes an array of people (represented by hashes) and an optional argument for the gender we are searching for. It will return an array of the people of that gender.

// If the second argument is not specified, you will return only the females by default.

// Examples
// This:

// genderSearch([
//     {"name": "Lucie", "gender": "female"},
//     {"name": "Cathy", "gender": "female"},
//     {"name": "Marc", "gender": "male"}
// ])
// Will return:

// [{'name': 'Lucie', 'gender': 'female'}, {'name': 'Cathy', 'gender': 'female'}]
// Because we return all the females by default.

// Now let's specify a gender.
// This:

// genderSearch([
//     {"name": "Lucie", "gender": "female"},
//     {"name": "Marc", "gender": "male"},
//     {"name": "ET", "gender": "NA"} ],
//     "male"
// )
// Will return:

// [{'name': 'Marc', 'gender': 'male'}]
// And this:

// genderSearch([
//     {"name": "Lucie", "gender": "female"},
//     {"name": "Marc", "gender": "male"},
//     {"name": "ET", "gender": "NA"} ],
//     "female"
// )
// Will return:

// [{'name': 'Lucie', 'gender': 'female'}]

const genderSearch = (arr, gender = "female") => {
    let resultArr = []
    for(let person of arr){
        if(person.gender === gender){
            resultArr.push(person)
        }
    }
    return resultArr;

}

module.exports = genderSearch
