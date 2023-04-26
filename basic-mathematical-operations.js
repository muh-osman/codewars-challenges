// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Check the Operation then Act

//  Method 1
function basicOp(operation, value1, value2) {
    if (operation == "+") return value1 + value2;
    if (operation == "-") return value1 - value2;
    if (operation == "*") return value1 * value2;
    if (operation == "/") return value1 / value2;
}

console.log(basicOp("-", 5, 6));






//  Method 2
const calculator = (num1, operation, num2) => {
  return eval(num1 + operation + num2)
}

console.log(calculator(5, '*', 3))
