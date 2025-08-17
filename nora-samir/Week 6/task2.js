var mode=document.getElementById("mybtn");
var body=document.getElementById("body");

mode.addEventListener("click",function(){

body.classList.toggle("style");
mode.classList.toggle("style");

})