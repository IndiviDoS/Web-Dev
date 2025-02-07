// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

// Solution
function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

// #69F 10
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:

let arra = [1, 2, 3];

shuffle(arra);
// arr = [3, 2, 1]

shuffle(arra);
// arr = [2, 1, 3]

shuffle(arra);
// arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// Solution
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// #69F 3