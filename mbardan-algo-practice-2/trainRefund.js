// Write a module trainRefund that exports a function trainRefund.

// The function trainRefund takes two hashes as arguments.

// The first hash associates the clients and their destination.

// The second hash represents the delay for each destination.

// You will return an array with all customers whose delay is greater than or equal to 60.

// The returned array must be sorted in alphabetical order.

// Examples
// This:

// trainRefund({
//   'alfred': "Paris",
//   'toto': "Paris",
//   'lucie': "London",
//   'pauline': "Bruxelles",
// }, {
//   "Paris": 67,
//   "London": 60,
//   "Bruxelles": 54,
// })
// Will return:

// ['alfred', 'lucie', 'toto']

const trainRefund = (clientsDestination, destinationsDelays) => {
    let resArr = []

    for(let entry of Object.entries(clientsDestination)){
        if(entry[1] in destinationsDelays){
            if(destinationsDelays[entry[1]] >= 60){
                resArr.push(entry[0])
            }
        }
    }
    return resArr.sort()
}

module.exports = trainRefund;

// trainRefund({
//       'alfred': "Paris",
//       'toto': "Paris",
//       'lucie': "London",
//       'pauline': "Bruxelles",
//     }, {
//       "Paris": 67,
//       "London": 60,
//       "Bruxelles": 54,
//     })