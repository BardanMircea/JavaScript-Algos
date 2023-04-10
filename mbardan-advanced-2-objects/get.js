// Write a module get that exports a function get.

// The function get takes an object and a string representing a nested path as arguments, and returns the value assigned to the nested path; or undefined if the given path doesn't exist in the object.

// For example, if we use the following object:

// let agent = {
//   person: {
//     name: "bond",
//     spy: {
//       code: "007"
//     }
//   }
// };
// This: get(agent, "person")
// Will return: {name: "bond", spy: { code: "007" }}

// This: get(agent, "person.name")
// Will return: "bond"

// This: get(agent, "person.name.code")
// Will return: undefined

// This: get(agent, "person.spy.code")
// Will return: "007"

const get = (object, nestedPath) => {
  const parts = nestedPath.split(".")

  let value = object[parts[0]]
  for(let i = 1; i < parts.length; i++){
    if(typeof value === "object" && parts[i] in value){
      value = value[parts[i]]
    } else {
      return undefined
    }
  }
  return value
}

module.exports = get