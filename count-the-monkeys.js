// You take your son to the forest to see the monkeys. You know that there are a certain number there (n),
// | but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n),
//  populate an array with all numbers up to and including that number, but excluding zero.

/* Solution */

// Create Empty Array
// Loop through The number Given
// Push the NUmber to the new Array
// Return the Array


// Method 1
function monkeyCount(n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log(monkeyCount(10));





// Method 2
let arr = [];
let inti = 0;

const count = (num) => {
  for (let i = 0; i < num; i++) {
    inti++;
    arr.push(inti);
  }
  return arr;
};

console.log(count(30));
