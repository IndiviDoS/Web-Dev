let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)

// We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.
// Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the user decided not to fill in the corresponding values.
// We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

let heights = null;
let width = null;

// important: use parentheses
let area = (heights ?? 100) * (width ?? 50);

alert(area); // 5000

// let x = 1 && 2 ?? 3; // Syntax error