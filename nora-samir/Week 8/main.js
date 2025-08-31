
var btn=document.getElementsByClassName("btn")[0];
btn.addEventListener("click",function()
{
    alert("great choice, let's begin this journay");
})
//dark mode
var mode=document.getElementById("changemode");
mode.addEventListener("click",function(){

document.body.classList.toggle("style");
mode.classList.toggle("style");

})

const sentence = "Welcome to my website"; 
const textElement = document.getElementById("text");

let i = 0;

const typing = setInterval(() => {
  textElement.textContent += sentence[i];
  i++;

  if (i === sentence.length) {
    clearInterval(typing); 
  }
}, 70);
