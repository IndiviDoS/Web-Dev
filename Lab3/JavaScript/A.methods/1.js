// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

// Solution
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
    }

// #67F 2
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

// Solution
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }

// #67F 3
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
// For instance:

let arra = [5, 3, 8, 1];

filterRangeInPlace(arra, 1, 4); // removed the numbers except from 1 to 4

alert( arra ); // [3, 1]

// Solution
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

// #67F 4
// Sort in decreasing order
let array = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( array ); // 8, 5, 2, 1, -10

// Solution
array.sort((a, b) => b - a);

// #67F 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
let ar = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(ar);

alert( sorted ); // CSS, HTML, JavaScript
alert( ar ); // HTML, JavaScript, CSS (no changes)

// Solution
function copySorted(arr) {
    return arr.slice().sort();
  }

// #68F 6
// Create a constructor function Calculator that creates “extendable” calculator objects.
// The task consists of two parts.
// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
// Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
// For instance, let’s add the multiplication *, division / and power **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

// Solution
function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b,
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

// // #69F 7
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

// let names = /* ... your code */

alert( names ); // John, Pete, Mary

// Solution
let names = users.map(item => item.name);

// #69F 8
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
// For instance:

let johne = { name: "John", surname: "Smith", id: 1 };
let petee = { name: "Pete", surname: "Hunt", id: 2 };
let marye = { name: "Mary", surname: "Key", id: 3 };

let userss = [ johne, petee, marye ];

let userssMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( userssMapped[0].id ) // 1
alert( userssMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// Solution
let usersMapped = userss.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));