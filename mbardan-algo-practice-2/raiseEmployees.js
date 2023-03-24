// Write a module raiseEmployees that exports a function raiseEmployees.

// The function raiseEmployees takes a hash describing the employees of a company as an argument. Each key in the hash will itself have a hash value with the employee's title and salary.

// The function will return the hash after increasing the salary of some employees.

// Only employees who are not C-levels (a C-level employee is someone whose job title starts with a "C" and ends with an "O") will get a $100 raise.

// The function will only be tested with valid hashes (title and salary keys will always be present).

// Example
// This:

// const salaries = {
//     "Elon Musk": { "title": "CEO", "salary": 5000 },
//     "Alfred": { "title": "Secretary", "salary": 2000 },
//     "Pascal": { "title": "Community manager", "salary": 1500 },
//     "Picsou": { "title": "CFO", "salary": 3000 }
// }
// raiseEmployees(salaries);
// Will return:

// {
//     'Elon Musk': {'title': 'CEO', 'salary': 5000},
//     'Alfred': {'title': 'Secretary', 'salary': 2100},
//     'Pascal': {'title': 'Community manager', 'salary': 1600},
//     'Picsou': {'title': 'CFO', 'salary': 3000},
// }

const raiseEmployees = (map) => {
    for(let [key, value] of Object.entries(map)){
        if(!isCLevel(value["title"])){
            value["salary"] += 100;
        }
    }
    return map;
}

const isCLevel = (employeeTitle) => {
    return employeeTitle.toLowerCase().endsWith("o") && employeeTitle.toLowerCase().startsWith("c");
}


// const salaries = {
//     "Elon Musk": { "title": "CEO", "salary": 5000 },
//     "Alfred": { "title": "Secretary", "salary": 2000 },
//     "Pascal": { "title": "Community manager", "salary": 1500 },
//     "Picsou": { "title": "CFO", "salary": 3000 }
// }
// console.log(raiseEmployees(salaries));

module.exports = raiseEmployees