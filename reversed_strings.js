// Complete the solution so that it reverses the string passed into it.

// Declare empty String
// Loop through the string Given as Parameter
// Add The Last Characters to the Empty String
// Return the String

// Method 1
function solution(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(solution("Hi From VS Code"));





// Method 2
const reverse = (str) => str.split("").reverse().join("");

console.log(reverse("Hello world"));
