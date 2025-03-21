// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
pow(3, 2) = 3 * 3
pow(3, 3) = 3 * 3 * 3 
// pow(1, 100) = 1 * 1 * ...* 1

function pow(x, n) {
    return x ** n;
}
if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }