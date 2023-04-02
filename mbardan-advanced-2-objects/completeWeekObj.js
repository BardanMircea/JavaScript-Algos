// Write a module completeWeekObj that exports a function completeWeekObj.

// The function completeWeekObj takes an object (with the seven days of the week as keys) as argument, and returns that object.

// If a day of the week (monday, tuesday, wednesday, thursday, friday, saturday and sunday) is absent in the object's keys, you will add it with the value 0.

// So this:

// completeWeekObj({
//  'monday': 1,
//  'tuesday': 7,
//  'saturday': 8,
//  'sunday': -7,
// })
// Will return:

// {
//   'monday': 1,
//   'tuesday': 7,
//   'saturday': 8,
//   'sunday': -7,
//   'wednesday': 0,
//   'thursday': 0,
//   'friday': 0
// }

const completeWeekObj = (weekObj) => {
    const completeWeek = [
        'monday',
        'tuesday',
        'saturday',
        'sunday',
        'wednesday',
        'thursday',
        'friday'
    ]
        
    for(let elem of completeWeek){
        if(!(elem in weekObj)){
            weekObj[elem] = 0;
        }
    }
    
    return weekObj;
}

module.exports = completeWeekObj;