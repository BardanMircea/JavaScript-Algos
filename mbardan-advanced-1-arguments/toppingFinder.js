// Write a module toppingFinder that exports a function toppingFinder.

// The function toppingFinder takes a hash describing the pizzas as its first argument, and a string describing an ingredient as its second argument.

// Your function will return an array of all pizzas (in alphabetical order) that contain this ingredient.

// Examples
// This:

// toppingFinder({
//     'Hawaiian': ['Ham', 'Pineapple'],
//     'Romana': ['Cheese', 'Capers', 'Olives', 'Origan'],
//     'Napoli': ['Cheese', 'Capers', 'Anchovies'],
//     'Cotto e Funghi': ['Cheese', 'Ham', 'Mushroom'],
// }, 'Ham')
// Will return:

// ['Cotto e Funghi', 'Hawaiian']
// And this:

// toppingFinder({
//     'Hawaiian': ['Ham', 'Pineapple'],
//     'Romana': ['Cheese', 'Capers', 'Olives', 'Origan'],
//     'Napoli': ['Cheese', 'Capers', 'Anchovies'],
//     'Cotto e Funghi': ['Cheese', 'Ham', 'Mushroom'],
// }, 'Cheese')
// Will return:

// ['Cotto e Funghi', 'Napoli', 'Romana']

const toppingFinder = (pizzas, ingredient) => {
    let resultArr = [];
    for(let [pizza, ingredients] of Object.entries(pizzas)){
        if(ingredients.includes(ingredient)){
            resultArr.push(pizza)
        }
    }
    return resultArr.sort();
}

module.exports = toppingFinder
