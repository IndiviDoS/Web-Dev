// Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

//Solution 
//The result is: Error: Cannot read property 'name' of undefined