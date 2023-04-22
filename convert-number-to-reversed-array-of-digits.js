// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Change the number to String
// Split the String to an array
// Change the Strings in the array to Numbers
// Reverse the Array

const num = 123456789;

const reverseStr = () => {
  return num
    .toString()
    .split("")
    .reverse()
    .map((num) => Number(num));
};

console.log(reverseStr());
