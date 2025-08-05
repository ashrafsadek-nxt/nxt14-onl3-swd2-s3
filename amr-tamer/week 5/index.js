function calc(){
const first_number = document.getElementById("fn").value;
const second_number =document.getElementById("sn").value;
const operation=document.getElementById("op").value;
const output =document.getElementById("output");
const fn=parseFloat(first_number);
const sn=parseFloat(second_number);

if(operation=="+"){
    let x=fn+sn
    output.innerHTML="the result is: " + x;
}
else if(operation=="x"){
    output.innerHTML="the result is:" + fn*sn;
}
else if(operation=="-"){
    output.innerHTML="the result is:" + fn-sn;
}
else{
    if(sn==0)  output.innerHTML="cant divide by 0";
    else output.innerHTML="the result is:" + fn/sn;
}
}