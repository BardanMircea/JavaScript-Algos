// Write a module moneyExchange that exports a function moneyExchange.

// The function moneyExchange takes a hash as an argument.

// This hash contains the exchange rate for currency pairs, and your function will return a new hash with the inverse exchange rate for all pairs.

// The prices will be written with two decimals - you can use the Math.floor() function.

// Examples
// This:

// moneyExchange({
//     'usd': {
//         'eur': 0.90,
//         'rmb': 7.75,
//         'vnd': 22000
//     },
//     'eur': {
//         'yen': 125.00
//     }
// })
// Will return:

// {'eur': {'usd': 1.11}, 'rmb': {'usd': 0.12}, 'vnd': {'usd': 0.0}, 'yen': {'eur': 0.0}}
// And this:

// moneyExchange({
//     'usd': {
//         'gbp': 1.46
//     },
//     'eur': {
//         'gbp': 1.25
//     }
// })
// Will return:

// {'gbp': {'usd': 0.68, 'eur': 0.8}}

const moneyExchange = (arr) => {
    let resultHash = {}
    for(let [referenceCurrency, targetCurrencies] of Object.entries(arr)){
        for(let [currency, rate] of Object.entries(targetCurrencies)){
            let reverseRate = Math.floor((1.0 / rate)* 100.0) / 100.0
            // console.log(Math.floor((1.0 / rate)* 100.0) / 100.0)
            // console.log(reverseRate)
            if(currency in resultHash){
                resultHash[currency][referenceCurrency] = reverseRate
            } else {
                resultHash[currency] = {}
                resultHash[currency][referenceCurrency] = reverseRate   
            }
        }
    }
    return resultHash
}

module.exports = moneyExchange
// moneyExchange({
//     'usd': {
//         'eur': 0.90,
//         'rmb': 7.75,
//         'vnd': 22000
//     },
//     'eur': {
//         'yen': 125.00
//     }
// })


// moneyExchange({
//     'usd': {
//         'gbp': 1.46
//     },
//     'eur': {
//         'gbp': 1.25
//     }
// })
