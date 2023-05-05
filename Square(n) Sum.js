// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Loop Through the Array
// Square Each Number
// Sum the result

// Method 1
function squareSum(numbers) {
  return numbers
    .map((n) => n * n)
    .reduce((acc, CurrentValue) => acc + CurrentValue, 0);
}

console.log(squareSum([1, 2, 2])); // 9




// Method 2
const pow = (num) =>
  num.map((num) => Math.pow(num, 2)).reduce((acc, cur) => acc + cur);

console.log(pow([0, 3, 4, 5])); // 50
