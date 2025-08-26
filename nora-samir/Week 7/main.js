//task
var strongpassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
var patternnum = /\d/;           
var patternUpper = /[A-Z]/;      
var patternLower = /[a-z]/;     
var patternchar = /[!@#$%^&*(),.?":{}|<>_\-]/;

var pass = prompt("Please Enter the password :");

if (strongpassword.test(pass)){
  alert("You Entered strong and perfect password");
 
}
 if (!patternnum.test(pass)) {

    alert("the password must contain at least one number");

}

 if (!patternUpper.test(pass)) {
    alert("the password must contain at least one UPPERCASE letters");
    

}

 if (!patternLower.test(pass)) {
    alert("the password must contain at least one lowercase letters");
}
 if (!patternchar.test(pass)) {

    alert("the password must contain at least one special character");
}

 
 

