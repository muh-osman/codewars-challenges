// Each number should be formatted that it is rounded to two decimal places.
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.


// Method 1
function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100; // 77.65877799 * 100 / 100
}
console.log(twoDecimalPlaces(77.65877799));







// Method 2
const round = num => Number(num.toFixed(2)) // return number

// const round = num => num.toFixed(2) // return string


console.log(round(77.65877799))
