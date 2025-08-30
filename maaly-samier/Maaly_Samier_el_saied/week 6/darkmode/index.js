let dark; 
let body = document.getElementById("body");
let text = document.getElementById("text");
let butn = document.getElementById("button");

let darkmode= false ; 
document.getElementById("darkmode").onclick=function(){
    if (!darkmode){
    body.style.backgroundColor="black";
    text.style.color="white";
    butn.textContent="light mode";
    darkmode  = true ; 
    }
    else {
    body.style.backgroundColor="white";
    text.style.color="black";
    butn.textContent="dark mode";
    darkmode = false ;
}
}
