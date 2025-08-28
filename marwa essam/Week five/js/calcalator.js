let numOne=document.getElementById('num1')
let numTwo=document.getElementById('num2')
let numThree=document.getElementById('num3')
let operation=document.getElementById('operation')
let result_var=document.getElementById('result')
let count=document.getElementById('count')
let numbers =document.querySelectorAll(".numbers")
let operation_num=document.getElementById('opnum')

numbers.onkeyup = function(){
sessionStorage.numOne=JSON.stringify("numOne.value")
sessionStorage.numTwo=JSON.stringify("numTwo.value.value")
sessionStorage.numThree=JSON.stringify("numThree.value")
}

sessionStorage.result= result_var.value
sessionStorage.operation= operation.value


count.onclick =function(){
    switch(operation_num)
{
    case 1 : 
sessionStorage.result = JSON.parse(sessionStorage.numOne )+JSON.parse (sessionStorage.numTwo) + JSON.parse (sessionStorage.numThree)
break;
  case 2 : 
sessionStorage.result = JSON.parse(sessionStorage.numOne )-JSON.parse (sessionStorage.numTwo) - JSON.parse (sessionStorage.numThree)
break;
  case 3 : 
sessionStorage.result = JSON.parse(sessionStorage.numOne )*JSON.parse (sessionStorage.numTwo) * JSON.parse (sessionStorage.numThree)
break;
  case 4 : 
sessionStorage.result = (JSON.parse(sessionStorage.numOne )/JSON.parse (sessionStorage.numTwo) )/JSON.parse (sessionStorage.numThree)
break;
}

}

