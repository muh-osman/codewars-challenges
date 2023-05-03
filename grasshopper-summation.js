// Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.

// Decalre the Result Variable;
// Loop through the Given Number
// Add the Number
// Return the Result

// Method 1
var summation = function (num) {
  return Array(num)
    .fill(true)
    .reduce((acc, curretValue, index) => acc + index + 1, 0);
};

console.log(summation(10));




// Method 2
const sum = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i; // result = result + i
  }
  return result;
};

console.log(sum(10)); // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
