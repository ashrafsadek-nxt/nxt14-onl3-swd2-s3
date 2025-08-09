
function result()
{  
    const n1 = document.getElementById('num1');
    let num1 = parseFloat(n1.value);

    const n2 = document.getElementById('num2');
    let num2 = parseFloat(n2.value);

    const op = document.getElementById('operator');
    let operator = op.value;

    if(operator == '+')
    {
        document.getElementById('result').innerText = num1 + num2;
    }
    else if(operator == '-')
    {
        document.getElementById('result').innerText = num1 - num2;
    }
    else if(operator == '*')
    {
        document.getElementById('result').innerText = num1 * num2;
    }
    else if(operator == '/')
    {
        document.getElementById('result').innerText = num1 / num2;
    }
}
