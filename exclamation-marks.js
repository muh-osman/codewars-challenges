// Remove an exclamation mark from the end of a string. For a beginner kata,
//  you can assume that the input data is always a string, no need to verify it.

// Method 1
// function remove(string) {
//   return string.replace(/!$/, "");
// }

// console.log(remove("!Hi!!!"));






// Method 2
const remove = str => str.endsWith("!") ? str.slice(0, -1) : str

console.log(remove("Hello!!!"))
