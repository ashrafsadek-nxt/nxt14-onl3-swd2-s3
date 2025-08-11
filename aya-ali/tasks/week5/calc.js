function calculate() {
    const output = document.getElementById('result');
    const firstNum = document.getElementById('num1');
    const secondNum = document.getElementById('num2');
    const operator = document.getElementById('operation');
    let value1 = parseFloat(firstNum.value);
    let value2 = parseFloat(secondNum.value);
    let action = operator.value;
    if(action == "add") {
        output.innerText = value1 + value2;
    }
    else if(action == "subtract") {
        output.innerText = value1 - value2;
    }
    else {
        output.innerText = "Error: Unknown operation!";
    }
}