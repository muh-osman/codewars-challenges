// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

/* Solution */

// Create New Empty Array
// Loop though n
// Multiply x * n
// Add the number to the new Array
// Return the new array

function countBy(x, n) {
  //   let newArray = [];
  //   for (let i = 1; i <= n; i++) {
  //     newArray.push(x * i);
  //   }
  //   return newArray;
  return Array.from(Array(n + 1).keys())
    .slice(1)
    .map((number) => number * x);
}
console.log(countBy(2, 5));

// Read About Arrays , Array.from , Array.keys
// Slice Method , Map Method
// From MDN or W3Schools




// Method 2
let arr = []
let init = 0
const duplicate = (x, n) => {

  for (let i = 0; i < n; i++) {
    init += x // init = init + x
    arr.push(init)
  }

  return arr
}

console.log(duplicate(2, 5)) // [2, 4, 6, 8, 10]