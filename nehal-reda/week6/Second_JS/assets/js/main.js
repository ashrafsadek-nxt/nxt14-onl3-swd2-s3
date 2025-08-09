// var num1 = prompt("Enter any number :");
// var num2 = prompt("Enter any number :");
// var num3 = prompt("Enter any number :");

function calc() {
    var result;
    var num1 = document.getElementById('num1');
    var n1 = parseInt(num1.value);
    console.log(n1);

    var oper = document.getElementById('sign');
    var sign = oper.value;
    console.log(sign);

    var num2 = document.getElementById('num2');
    var n2 = parseInt(num2.value);
    console.log(n2);

    // var oper = document.getElementById('sign');
    // var sign = oper.value;
    // console.log(sign);


    switch (sign) {
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;

        default:
            console.log('good luck');

            break;
    }

    console.log(result);
    var res = document.getElementById('result');
    res.innerText = `
     ${result}`;

}

// console.log(calc());
