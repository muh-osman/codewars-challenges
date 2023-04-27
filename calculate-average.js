// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

/* Solution */

// Create Variable = 0
// Loop through the array
// Divide the Varible to the Array length

// Method 1
function find_average(array) {
  
    if (array.length === 0)  return 0
    
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let finalAnswer = sum / array.length;
    return finalAnswer;

}

console.log(find_average([2, 3, 4, 5]));





// Method 2
let arr = [2, 3, 4, 5]

const calculate = () => {

  if (arr.length === 0)  return 0

  const length = arr.length
  const calc = arr.reduce((prev, curr) => prev + curr, 0 )
  return calc / length
  
  // return arr.reduce((acc, current) => acc + current, 0) / arr.length //Shortcut
}

console.log(calculate())









