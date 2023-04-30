// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// Declare Variable = 1
// Loop Through the Integers( Numbers ) Array
// Add the Multiplying result to the Variable
// return the Result



// Method 1
function grow(x) {
  let result = 1;
  for(let i = 0; i < x.length; i++){
      result *= x[i];
  }
  return result;
}

console.log(grow([1, 2, 3, 4]));






// Method 2
let arr = [1, 2, 3, 4];
function multiply() {
  return arr.reduce((prev, curr) => prev * curr);
}

console.log(multiply());
