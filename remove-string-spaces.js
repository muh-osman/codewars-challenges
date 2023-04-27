// Simple, remove the spaces from the string, then return the resultant string.



// Method 1
// const str = "h e l l o";

// const removeSpace = () => str.split(" ").join("")

// console.log(removeSpace())




// Method 2
function removeSpace(str) {
  return str.replaceAll(" ", "");
}
console.log(removeSpace("  K ha  l   id         "));
