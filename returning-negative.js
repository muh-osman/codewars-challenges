// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


const negative = num => num <= 0 ? num : -num

console.log(negative(1))
console.log(negative(-4))
console.log(negative(0))