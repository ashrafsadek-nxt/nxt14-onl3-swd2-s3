function  calc(){
    const result= document.getElementById('result-holder');

    const firstNo=document.getElementById('first-no');
    let firstNumber=parseFloat(firstNo.value);

    const secondNo=document.getElementById('second-no');
     let secondNumber=parseFloat(secondNo.value);

    const sum=document.getElementById('sum');
    const multiply=document.getElementById('multiply');

            if (sum.checked) {
                console.log(firstNumber + secondNumber);
                result.innerText="The result: "+ firstNumber + " + " + secondNumber + "=" + (firstNumber + secondNumber);
            }
            else if (multiply.checked) {
                console.log(firstNumber * secondNumber);
                result.innerText="The result: "+ firstNumber + " × " + secondNumber + "=" + (firstNumber * secondNumber);
             }
}

