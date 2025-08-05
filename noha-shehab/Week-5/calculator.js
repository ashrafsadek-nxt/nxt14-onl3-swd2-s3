const firstnum = document.getElementById("num1");
const secondnum = document.getElementById("num2");
const operation = document.getElementById("operation");
const output = document.getElementById("output");

function calculate() {
  let num1 = parseInt(firstnum.value);
  let num2 = parseInt(secondnum.value);
  let op = operation.value;

  let result;
  switch (op) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        output.innerHTML = "Cannot divide by zero";
        return;
      }
      result = num1 / num2;
      break;
    default:
      output.innerHTML = "Invalid operation";
      return;
  }
  output.innerHTML = result;
}
