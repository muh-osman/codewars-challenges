// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
//  and month 11 (November), is part of the fourth quarter.

// Method 1
const quarterOf = (month) => {
  // Your code here
  // return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  return Math.ceil(month / 3);
};
console.log(quarterOf(2));






// Method 2 (ChatGPT)
const range = (x, min, max) => x >= min && x <= max // true or false

const quarter = (month) => {
  switch (true) {
    case range(month, 1, 3):
      return 1;
    case range(month, 4, 6):
      return 2;
    case range(month, 7, 9):
      return 3;
    case range(month, 10, 12):
      return 4;
    default:
      return "Invalid month";
  }
};

console.log(quarter(2)); // 1
