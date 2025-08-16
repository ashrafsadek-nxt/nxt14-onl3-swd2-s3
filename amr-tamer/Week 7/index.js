 const btn=document.getElementById("btn");
 btn.addEventListener("click",fn);
function fn(){
    const pass=document.getElementById("pass").value;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let errors=[];
    if(!pass.match(/[a-z]/)){
        errors.push("must contain 1 lower case");
    }
    if(!pass.match(/[A-Z]/)){
        errors.push("must contain 1 upper case");
    }
    if(!pass.match(/\d/)){
        errors.push("must contain 1 digit");
    }
    if(!pass.match(/[@$!%*?&]/)){
        errors.push("must contain 1 speacial characters");
    }
    if(pass.length<8){
        errors.push("must be at least 8 characters");
    }
    if(pass.match(/[^A-Za-z\d@$!%*?&]/)){
        errors.push("Contains invalid characters");
    }
    if (errors.length === 0) {
        alert("Correct pass");
    } else {
        alert("Wrong Pass:\n" + errors.join("\n"));
    }
}