// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
//  and the negatives become positives.

/* Solution */

// Create Empty new Array
// Loop through the Array
// Inverse the Number
// Return the New Array


// Method 1
function invert1(array) {
  return array.map((x) => x * -1);
}

console.log(invert1([1, 2, 3, 4, -5]));



// Method 2
function invert2(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i] * -1);
    }
    return newArray;
}

console.log(invert2([1, 2, 3, 4, -5]));




// Method 3
const arr = [1, 2, 3, 4, -5]
const invert3 = () => {
  return arr.map(num => -num)
}

console.log(invert3())

