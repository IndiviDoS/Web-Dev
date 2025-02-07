// no error
let message = "hello";
message = 123456;

alert( 1 / 0 ); // Infinity

alert( Infinity ); // Infinity

// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
alert( "not a number" / 2 ); // NaN, such division is erroneous

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3   

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked    

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

//Task

let newName = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${newName}` ); // hello Ilya