// I'm new to coding and now I want to get the sum of two arrays..
// . Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Method 1
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, currentValue) => acc + currentValue, 0);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));






// Method 2
const sum = (arr1, arr2) => {
    return [...arr1, ...arr2].reduce((acc, cur) => acc + cur)
}
console.log(sum([1, 2, 3], [4, 5, 6]));





// Method 3
const sum3 = (arr1, arr2) => {
    return [arr1, arr2].flat().reduce((acc, cur) => acc + cur)
}
console.log(sum3([1, 2, 3], [4, 5, 6]));
