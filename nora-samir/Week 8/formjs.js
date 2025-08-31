const sentence = "Tell me your opinion :"; 
const textElement = document.getElementById("text");

let i = 0;

const typing = setInterval(() => {
  textElement.textContent += sentence[i];
  i++;

  if (i === sentence.length) {
    clearInterval(typing); 
  }
}, 100); 
//change background color
var c=document.getElementById("c");
c.addEventListener("input",function()
{
   document.body.style.background=c.value;
})

//hello + username

let n=document.getElementById("username");
n.addEventListener("change",function()
{
   alert(`Welcome,${n.value} Glad to see you 🌸`);
})

//chack the password
var strongpassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
var patternnum = /\d/;           
var patternUpper = /[A-Z]/;      
var patternLower = /[a-z]/;     
var patternchar = /[!@#$%^&*(),.?":{}|<>_\-]/;

var pass = document.getElementById("pwd");
pass.addEventListener("change" ,function(){
if (strongpassword.test(pass.value)){
  alert("You Entered strong and perfect password");
 
}
 if (!patternnum.test(pass.value)) {

    alert("the password must contain at least one number");

}

 if (!patternUpper.test(pass.value)) {
    alert("the password must contain at least one UPPERCASE letters");
    

}

 if (!patternLower.test(pass.value)) {
    alert("the password must contain at least one lowercase letters");
}
 if (!patternchar.test(pass.value)) {

    alert("the password must contain at least one special character");
}
})