function CheckPass(){
 const password=document.getElementById("pass");
   let pass=(password.value);
   let upper= /[A-Z]/;
   let lower= /[a-z]/;
   let num= /[0-9]/;
   let SpecialChar= /[!@#$%^&*(),.?":{}|<>]/;
   if(!upper.test(pass)){
    alert("Password must contains at least one uppercase letter !");
   }
    else if(!lower.test(pass)){
    alert("Password must contains at least one lowercase letter !");
   }
    else if(!num.test(pass)){
    alert("Password must contains at least one number !");
    }
    else if(!SpecialChar.test(pass)){
    alert("Password must contains at least one special character !");
    }
    else if(pass.length < 8) {
        alert("Password must be at least 8 characters.");
    }
    else{
        alert("Password is Valid"); 
    }  

}