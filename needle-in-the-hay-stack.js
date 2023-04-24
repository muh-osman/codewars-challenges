// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// Loop Through the Array
// Check if the element === needle
// Return The Message


// Method 1
function findNeedle(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "needle") {
        return "found the needle at position " + i;
      }
    }
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));




// Method 2
const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

const needle = () => `found the needle at position: ${arr.indexOf('needle')}`

console.log(needle())