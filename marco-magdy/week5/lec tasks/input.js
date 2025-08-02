btn=document.getElementById('btn');
res=document.getElementById('result');
btn.addEventListener('click',function(){
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    let operator=document.getElementById('operator').value;
    if(operator=='+'){
        res.innerHTML=(parseInt(num1)+parseInt(num2));
        console.log(parseInt(num1)+parseInt(num2));
    }
    else if(operator=='-'){
        res.innerHTML=(parseInt(num1)-parseInt(num2));
    }
    else if(operator=='*'){
        res.innerHTML=(parseInt(num1)*parseInt(num2));
    }
    else if(operator=='/'){
        res.innerHTML=(parseInt(num1)/parseInt(num2));
    }
    else{
        alert('Invalid operator');
    }
})