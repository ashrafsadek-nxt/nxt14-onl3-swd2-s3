function calculate() {
    var result = document.getElementById('result');
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var operation = document.getElementById('operation');
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);
    let op = operation.value;
    if (op == "add") {
        result.innerText = number1 + number2;
    }
    else if (op == "subtract") {
        result.innerText = number1 - number2;
    }
    else {
        result.innerText = "Error: Unknown operation!";
    }
}