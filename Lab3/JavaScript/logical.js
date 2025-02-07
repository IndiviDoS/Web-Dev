//What is the code below going to output?
alert( null || 2 || undefined ); //2

// What will the code below output?
alert( alert(1) || 2 || alert(3) ); //first 1 then 2

// What is this code going to show?

alert( 1 && null && 2 ); //null

// What is the result of AND'ed alerts?
alert( alert(1) && alert(2) ); //1 then undefined

//The result of OR AND OR
alert( null || 2 && 3 || 4 ); // 3

//Write an if condition to check that age is between 14 and 90 inclusively.
if (age >= 14 && age <= 90);
// “Inclusively” means that age can reach the edges 14 or 90.

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if (age < 14 || age > 90);

// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

//Answer
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

//Check the login
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}