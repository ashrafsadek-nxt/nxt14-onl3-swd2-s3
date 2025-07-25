var signin=document.getElementById("signin");
var signup=document.getElementById("signup");
var signincontainer=document.querySelector(".container-signin");
var container=document.querySelector(".container");
signin.addEventListener("click",function(){
    container.classList.remove("right-panel-active");
    signincontainer.classList.add("right-panel-active");
});
signup.addEventListener("click",function(){
    container.classList.add("right-panel-active");
    signincontainer.classList.remove("right-panel-active");
});