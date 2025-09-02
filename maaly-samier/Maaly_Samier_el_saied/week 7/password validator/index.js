
function checkpassword(){
const passwordID= document.getElementById("password") ;
const password  = passwordID.value;
const text= document.getElementById("label");
const notLong =/^.{8,}$/;
const noUpperCase= /[A-Z]/; 
const noLowerCase = /[a-z]/;
const noSympoles = /[!@#$%^&*]/;
const noNumbers = /[0-9]/;
 text.textContent = "";
if (!password.match(notLong)){
    text.innerHTML+=`<br><br>Password not long enough ! <br>` ; 
} if (!password.match(noUpperCase)){
        text.innerHTML+=`Password doesn't have upper case letters ! <br>` ; 
} if (!password.match(noLowerCase)){
    text.innerHTML+=`Password doesnt contain lower case letters! <br>`; 
} if (!password.match(noSympoles)){
    text.innerHTML+=`Password doesn't contain any sympols! <br>`; 
} if (!password.match(noNumbers) ){
    text.innerHTML+=`Password doesn't contain any numbers! <br>`; 
}

}