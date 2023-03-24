// Write a module indexByLen that exports a function indexByLen.

// The function indexByLen takes an array of strings as argument and returns a hash with all unique strings indexed by string length.

// Each key of the hash will be the length of the string, and the corresponding value will be a list of strings of that length, in alphabetical order.

// Example
// This:

// indexByLen(['toto', 'tata', 'ti', 'toto'])
// Will return:

// {4: ['tata', 'toto'], 2: ['ti']}
// Or, depending on how you coded your function:

// {2: ['ti'], 4: ['tata', 'toto']}
// Keys in a hashes are not sorted!


const indexByLen = (arr) => {
    let noDupArr = []
    arr.forEach(element => {
        if(!noDupArr.includes(element)){
            noDupArr.push(element)
        }
    });

    let result = {}

    for(let elem of noDupArr){
        if(result[elem.length] != undefined){
            result[elem.length].push(elem)
            result[elem.length].sort();
        } else {
            result[elem.length] = []
            result[elem.length].push(elem);
        }
        
    }
    
    return result;
}

// indexByLen(['toto', 'tata', 'ti', 'toto'])
module.exports = indexByLen;