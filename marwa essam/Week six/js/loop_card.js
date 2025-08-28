let hide_btn =document.getElementById("hide-btn")
let show_btn =document.getElementById("show")
let container=document.getElementById("container")
show_btn.onclick=function(){
    show_btn.classList.add("hide")
    hide_btn.classList.remove("hide")
  container.classList.remove("hide")
}
hide_btn.onclick=function(){
    hide_btn.classList.add("hide")
    show_btn.classList.remove("hide")
    container.classList.add("hide")
    
}