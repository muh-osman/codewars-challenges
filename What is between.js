// What is between

// Complete the function that takes two integers (a, b, where a < b)
//  and return an array of all integers between the input parameters, including them.

// Method 1
function between(a, b) {
  return Array(b - a + 1)
    .fill(a)
    .map((n, i) => n + i);
}
console.log(between(1, 4));



// Method 2
const res = (a, b) => {
  let arr = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
};

console.log(res(1, 4));
