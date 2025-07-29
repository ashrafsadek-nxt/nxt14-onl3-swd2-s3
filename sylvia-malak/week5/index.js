function add() {
    const num1 = document.getElementById('inputField').value;
    const num2 = document.getElementById('inputField2').value;

    const result = document.getElementById('result');

    let a = parseFloat(num1);
    let b = parseFloat(num2);

    
    if (isNaN(a) || isNaN(b)) {
        result.innerText = "enter valid numbers";
    } else {
        result.innerText = a + b;
    }
}
function multiply() {
    const num1 = document.getElementById('inputField').value;
    const num2 = document.getElementById('inputField2').value;

    const result = document.getElementById('result');

    let a = parseFloat(num1);
    let b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
        result.innerText = "enter valid numbers";
    } else {
        result.innerText = a * b;
    }
}
