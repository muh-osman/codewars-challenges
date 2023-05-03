// Write a function that checks if a given string (case insensitive) is a palindrome.

// Convert the String to Lower Case
// Convert the String into Array
// Reverse the array
// Convert Into String
// Check The Given String To The One i created


// Method 1
function isPalindrome(x) { 'Abba' 
    return x.toLowerCase() == x.toLowerCase().split('').reverse().join(''); 
  }

  console.log(isPalindrome('Hello')); //false



// Method 2
const palindrome = (str) => {
  str = str.toLowerCase()
  return str === str.split("").reverse().join("") ? true : false
}

console.log(palindrome("madam")) // true
