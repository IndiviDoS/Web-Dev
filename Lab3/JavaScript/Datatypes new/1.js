// // Is it possible to create functions A and B so that new A() == new B()?
// // function A() { ... }
// // function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

//Solution
function A() { return B(); }
function B() { return A();}

let a = new A();
let b = new B();

alert( new A() == new B() ); 