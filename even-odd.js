// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOdd = (num) => {
  return num % 2 == 0 ? `${num} => Even` : `${num} => Odd`;
};

const input = prompt("Enter a number");

console.log(evenOdd(input));
