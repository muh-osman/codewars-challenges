// You get an array of numbers, return the sum of all of the positives ones.

// [1] InitValue = 0
// [2] Array Loop
// [3] Check if the number is positive or not
// [4] Add the number to the initValue if Positive


// Method 1
const arr = [1, -3, 5, 9]
let init = 0;

function res() {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      init += arr[i]
    }
  }

  return init
}

console.log(res());





// Method 2
// const arr = [1, -3, 5, 9];

// const res = () =>
//   arr.filter((num) => num > 0).reduce((prev, curr) => prev + curr, 0);

// console.log(res());





// Method 3
// const arr = [1, -3, 5, 9];
// const resArr = [];

// const result = () => {

//   if (arr.length == 0) {
//     return "0";

//   } else {
//     arr.forEach((num) => num > 0 ? resArr.push(num) : null)
//       return(
//         resArr.reduce((prev, curr) => {
//           return prev + curr;
//         })
//       )
//   }
// };

// console.log(result());
