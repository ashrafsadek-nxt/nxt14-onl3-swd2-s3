const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const plusButton = document.getElementById("plus");
const multiplyButton = document.getElementById("multiply");

function showSum() {
  const sum = Number(num1Input.value) + Number(num2Input.value);
  alert("Sum: " + sum);
}

function showProduct() {
  const product = Number(num1Input.value) * Number(num2Input.value);
  alert("multiply: " + product);
}

