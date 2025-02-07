// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// For instance:

function unique(arr) {
  /* your code */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
// P.S. Here strings are used, but can be values of any type.

// P.P.S. Use Set to store unique values.

// Solution
function unique(arr) {
  return Array.from(new Set(arr));
}

// #69F 2
// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// From every anagram group should remain only one word, no matter which one.

// Solution
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split("").sort().join(""); // (*) letters are sorted here

    map.set(sorted, word);
  }

  return Array.from(map.values());
}

// #69F 3
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

// But that doesn’t work:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
// Why? How can we fix the code to make keys.push work?

// Solution
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more