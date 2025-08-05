function calculate() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  let result;

  if (operation === 'sum') {
    result = num1 + num2;
  } else if (operation === 'multiply') {
    result = num1 * num2;
  }

  document.getElementById('result').textContent = result;
}
