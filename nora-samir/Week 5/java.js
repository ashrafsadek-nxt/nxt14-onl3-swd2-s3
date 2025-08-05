const bt=document.getElementById("clickbutton");
bt.addEventListener("click",fun);
function fun()  {     
   
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const num3 = document.getElementById('num3');
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
     const n3 = Number(num3.value);
    const op=document.getElementById('operation');
   
    if (op.value =="sum" || op.value =="+" )
    {
        console.log(n1+n2+n3);
        alert("the result is"+(n1+n2+n3));
       
    }
    else{
       console.log(n1*n2*n3);
        alert("the result is"+(n1*n2*n3));
    }

}



