// Check if Empty Value return 0
// Find the heighest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the array



// Method 1
const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

function HeighestLowestNum() {
  if (arr == null) {
    return 0;
  } else {
    return arr
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((prev, curre) => prev + curre, 0);
  }
}

console.log(HeighestLowestNum());
