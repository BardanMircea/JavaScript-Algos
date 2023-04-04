// Write a module exceptionsGenerator that exports a function exceptionsGenerator.

// The function exceptionsGenerator takes an argument.

// That argument is supposed to be an integer equal or less than 20, so the function will throw exceptions if that's not the case.

// It will throw a TypeError with the message "Must be numeric" if the argument can't be interpreted as an integer.
// It will throw a TypeError with the message "Must not be > 20" if the argument is strictly superior to 20.
// In both cases, the function will return false
// If the argument is valid, the function will return true.

// As you see in the examples, nowhere we are trying to catch the errors. We are just throwing them!
// Examples
// Example 1
// If we execute the following test.js file:

// const exceptionsGenerator = require('./exceptionsGenerator');
// exceptionsGenerator("hello");
// We will get the following output:

// /private/tmp/test.js:3
//     throw TypeError("Must be numeric")
//     ^
// TypeError: Must be numeric
//     at exceptionsGenerator (/private/tmp/tests2.js:3:8)
//     at Object.<anonymous> (/private/tmp/tests2.js:8:1)
//     at Module._compile (node:internal/modules/cjs/loader:1097:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1149:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47
// Node.js v17.3.0
// Example 2
// If we execute the following test.js file:

// const exceptionsGenerator = require('./exceptionsGenerator');
// exceptionsGenerator(130);
// We will get the following output:

// /private/tmp/test.js:3
//     throw TypeError("Must not be > 20")
//     ^
// TypeError: Must not be > 20
//     at exceptionsGenerator (/private/tmp/tests2.js:3:8)
//     at Object.<anonymous> (/private/tmp/tests2.js:8:1)
//     at Module._compile (node:internal/modules/cjs/loader:1097:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1149:10)
//     at Module.load (node:internal/modules/cjs/loader:975:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47
// Node.js v17.3.0
// Example 3
// If we execute the following test.js file:

// const exceptionsGenerator = require('./exceptionsGenerator');
// exceptionsGenerator(13);
// We get no output, because the file executes normally without error.

// Obviously, you must use exceptions and not just print the output...!

const exceptionsGenerator = (int) => {
    try{
        if(isNaN(int) || int === undefined || int === null){
            throw new TypeError("Must be numeric")
        }
        
        if(int > 20){
            throw new TypeError("Must not be > 20")
        }

        return true;

    } catch(e){
        console.log(`${e}` + ": " + `${e.message}`)
        return false
    }
}

module.exports = exceptionsGenerator