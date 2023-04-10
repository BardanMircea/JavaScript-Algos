// Write a module dig that exports a function dig.

// The function dig takes 2 arguments, a nested hash and an array of keys.

// Your function will dig through the nested hash to find a value based on the keys (look at the examples, it will make sense!) and will return that value.

// If, at some point, a key doesn't exist, your function will return null.

// Examples
// This:

// dig({
//     'a': {
//         'b': 'toto'
//         }
//     }, ('a', 'b')
// )
// Will return: toto

// This:

// dig({
//     'a': {
//         'b': 'toto'
//         }
//     }, ('a', 'b', 'c')
// )
// Will return: null

// This:

// dig({
//     'a': ['b', 'c', 'd']
//     }, ('a', 0)
// )
// Will return: null

const dig = (nestedHash, keysArr) => {
    if(keysArr.length === 0){
        return 'Empty array'
    }

    let value = nestedHash[keysArr[0]]
    for(let i = 1; i < keysArr.length; i++){
        if(typeof value === "object" && keysArr[i] in value){
            value = value[keysArr[i]]
        } else{
            value = null
            break;
        }
        
    }
    return value
}

module.exports = dig

