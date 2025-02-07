let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

do {
    // loop body
  } while (condition);

  for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }

  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // what if we want to exit from here to Done (below)?
    }
  }
  
  alert('Done!');   

  //What is the last value alerted by this code? Why?
  let is = 3;

while (is) {
  alert( i-- );
} // 1

// For every loop iteration, write down which value it outputs and then compare it with the solution.
