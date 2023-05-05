// Is n divisible by x and y?


// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Method 1
function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0;
}

console.log(isDivisible(5,1,3));





// Method 2
const isDiv = (n, x, y) => {
    if (n % x == 0 && n % y == 0) {
        return true
    } else {
        return false
    }
}

console.log(isDiv(5,1,3))
