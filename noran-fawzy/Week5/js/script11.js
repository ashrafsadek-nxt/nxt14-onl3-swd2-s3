function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);
  const operations = document.getElementById("operations").value;
  const resultHolder = document.getElementById("result");

  let result;
if (operations === "add") {
result = num1 + num2 + num3;
  } else if (operations === "multiply") {
result = num1 * num2 * num3;
  } else {
result = "Your operation has an Error";
  }

resultHolder.innerText = `Result= ${result}`;
}