// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Turn the String into Array
// Loop through the Array
// Repeat Each Element Once
// Return the Array Into String again



const str = 'ahmed'
const double = () => {
  return str.split('').map(letter => letter.repeat(2)).join('')
}

console.log(double())