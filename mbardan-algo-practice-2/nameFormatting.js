// Write a module nameFormatting that exports a function nameFormatting.

// The function nameFormatting takes one argument, the full name of a person, and returns an object that has the following properties:

// name
// uppercase_name
// first_name
// last_name
// middle_names (ONLY if they actually have middle name(s))
// Examples
// This: nameFormatting('Corrin Hermann')
// Will return:

// {
//     name: 'Corrin Hermann',
//     uppercase_name: 'CORRIN HERMANN',
//     first_name: 'Corrin',
//     last_name: 'Hermann'
// }
// This: nameFormatting('Russell Heidenreich Herzog Feil Runte')
// Will return:

// {
//     name: 'Russell Heidenreich Herzog Feil Runte',
//     uppercase_name: 'RUSSELL HEIDENREICH HERZOG FEIL RUNTE',
//     first_name: 'Russell',
//     last_name: 'Runte',
//     middle_names: [ 'Heidenreich', 'Herzog', 'Feil' ]
// }
// Only well formatted names will be sent to the function.

const nameFormatting = (fullName) => {
    if (fullName === "") return;

    let map = {
        name : "",
        uppercase_name: "",
        first_name : "",
        last_name : "",
    }

    let names = fullName.split(" ");

    map["name"] = fullName;
    map["uppercase_name"] = fullName.toUpperCase();
    map["first_name"] = names[0];
    map["last_name"] = names[names.length - 1]

    if(names.length > 2){
        map["middle_names"] = [];
        for(let i = 1; i < names.length - 1 ; i++){
            map["middle_names"][i-1] = names[i]
        }
    }
    
    return map;
}

module.exports=nameFormatting;
// nameFormatting('Russell Heidenreich Herzog Feil Runte')