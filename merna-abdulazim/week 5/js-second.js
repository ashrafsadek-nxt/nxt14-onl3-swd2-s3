function calculate(){
    const Number1 = Number(document.getElementById('num1').value);
    const Number2 = Number(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if(operation == 'add'){
        result = Number1 + Number2;
    }else if(operation == 'subtract'){
        result = Number1 - Number2;
    }
    document.getElementById('result').textContent = result;

}