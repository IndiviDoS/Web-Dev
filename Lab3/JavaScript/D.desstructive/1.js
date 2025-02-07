// We have an object:

// let user = {
//   name: "John",
//   years: 30
// };
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
// Here’s an example of the values after your assignment:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

// Solution
let {name, years: age, isAdmin = false} = user; // add this line between the lines above and below


// #69F 2
// There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

// Solution
function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}