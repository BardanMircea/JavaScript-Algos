// If the number N is even, the last two characters of the string are printed N times
// If the number N is odd, the first two characters of the string are printed N times
// If the string is shorter than 2 characters, nothing is printed

// const printN = require("./printN");


const printN = (str, num) => {
    if(str.length < 2){
        return;
    }
    if(num % 2 === 0){
        for(let i = 0; i < num; i++){
            console.log(str.slice(-2))
        }
    } else {
        for(let i = 0; i < num; i++){
            console.log(str.slice(0, 2))
        }
        
    }
}

// printN("ship", 1);

module.exports = printN;