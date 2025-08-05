function calculate(){

    let firstnum = document.getElementById("firstnum").value;
    let operator = document.getElementById("operator").value;
    let secondnum = document.getElementById("secondnum").value;
    let result = 0;
    if(operator == "+"){
        result = parseInt(firstnum) + parseInt(secondnum);
    }
    else if(operator == "-"){
        result = parseInt(firstnum) - parseInt(secondnum);
    }
    else if(operator == "*"){
        result = parseInt(firstnum) * parseInt(secondnum);
    }
    else if(operator == "/"){
        result = parseInt(firstnum) / parseInt(secondnum);
    }
    document.getElementById("result").innerHTML = "=" + result;
}