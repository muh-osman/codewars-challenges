// Expressions Matter

// Given three integers a ,b ,c,
// return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] ,
//  and return the Maximum Obtained (Read the notes for more detail about it)

// Method 1
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, a * (b + c), c * (a + b));
}
console.log(expressionMatter(3, 5, 7));





// Method 2
let obj = {
  plus: (a, b, c) => a + b + c,
  multiply: (a, b, c) => a * b * c,
  multiplyThenPlus: (a, b, c) => a * (b + c),
  plusThenMultiply: (a, b, c) => (a + b) * c,
};

const max = (a, b, c) => {
  return Math.max(
    obj.plus(a, b, c),
    obj.multiply(a, b, c),
    obj.multiplyThenPlus(a, b, c),
    obj.plusThenMultiply(a, b, c)
  );
};

console.log(max(3, 5, 7));
