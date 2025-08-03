
function Add()
{
    const firstnum = document.getElementById('num1');
    let num1 = parseInt(firstnum.value)
const secondnum = document.getElementById('num2');
let num2 = parseInt(secondnum.value)
const thirdnum = document.getElementById('num3');
let num3 = parseInt(thirdnum.value)
let sum = num1 + num2 + num3
const showresult = document.getElementById('sum result')
showresult.innerText ="Sum Result: "+sum;
}
function Subtract()
{
    const firstnum = document.getElementById('num1');
    let num1 = parseInt(firstnum.value)
const secondnum = document.getElementById('num2');
let num2 = parseInt(secondnum.value)
const thirdnum = document.getElementById('num3');
let num3 = parseInt(thirdnum.value)
let subt = num1 - num2 - num3
const showresult = document.getElementById('subt result')
showresult.innerText ="Subtraction Result: "+subt;
}
function Multiply()
{
    const firstnum = document.getElementById('num1');
    let num1 = parseInt(firstnum.value)
const secondnum = document.getElementById('num2');
let num2 = parseInt(secondnum.value)
const thirdnum = document.getElementById('num3');
let num3 = parseInt(thirdnum.value)
let subt = num1 * num2 * num3
const showresult = document.getElementById('multi result')
showresult.innerText ="Multiplication Result: "+subt;
}
function Divide()
{
    const firstnum = document.getElementById('num1');
    let num1 = parseInt(firstnum.value)
const secondnum = document.getElementById('num2');
let num2 = parseInt(secondnum.value)
const thirdnum = document.getElementById('num3');
let num3 = parseInt(thirdnum.value)
let subt = num1 / num2 / num3
const showresult = document.getElementById('div result')
showresult.innerText ="Division Result: "+subt;
}