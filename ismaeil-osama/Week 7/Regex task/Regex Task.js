const PassField = document.getElementById("password");
const PassButton = document.getElementById("passbtn");

PassButton.addEventListener("click", CheckPassword);

function CheckPassword(){
    const password = PassField.value;
    const CapitalValueMatch = /[A-Z]/.test(password);
    const SmallValueMatch = /[a-z]/.test(password);
    const SpecialCharactersMatch = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const NumbersMatch = /[0-9]/.test(password);
    if(password === ""){
        alert("Please Enter Password");
    }
    else if(!CapitalValueMatch){
        alert("Password Must Contain Capital Letters");
    }
    else if(!SmallValueMatch){
         alert("Password Must Contain Small Letters");
    }
    else if(!SpecialCharactersMatch){
         alert("Password Must Contain Special Characters");
    }
    else if(!NumbersMatch){
         alert("Password Must Contain Numbers");
    }
    else if(password.length < 8){
         alert("Password Must Be At Least 8 Characters");
    }
    else{
         alert("Your Password Is Strong");
    }
}