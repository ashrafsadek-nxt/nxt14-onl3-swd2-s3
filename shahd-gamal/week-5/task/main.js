const btn = document.getElementById("btn");

function calc() {
  const num1 = parseFloat(document.getElementById("first-num").value);
  const num2 = parseFloat(document.getElementById("second-num").value);
  let op = document.getElementById("operation-list").value;
  let res;

  if (op == "+") {
    res = num1 + num2;
  } else if (op == "*") {
    res = num1 * num2;
  }

  document.getElementById("result").textContent = res;
}

btn.addEventListener("click", calc);
