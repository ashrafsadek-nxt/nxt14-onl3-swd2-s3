let Payment=document.getElementById("Payment")
let ContactUs=document.getElementById("Contact Us")
let Help=document.getElementById("Help")
let face=document.getElementById("face")
let insta=document.getElementById("insta")
let showPro=document.getElementById("showPro")
let hidePro=document.getElementById("hidePro")
let artical_container=document.getElementById("art2")



showPro.classList.add("hide")
showPro.onclick=function(){
hidePro.classList.remove("hide")
artical_container.classList.remove("hide")
showPro.classList.add("hide")


}
hidePro.onclick=function(){
    hidePro.classList.add("hide")
artical_container.classList.add("hide")
showPro.classList.remove("hide")
}

Payment.onclick=function (){
    Payment.style.color="blue"
}
ContactUs.onclick=function (){
    nav.style.color="white"
}
Help.onclick=function (){
    Help.style.color="red"
}
 face.onmouseup=function (){
    face.style.color="blue"
    location.assign("http://www.fb.com")
 }
  insta.onmouseup=function (){
    insta.style.color="orange"
     location.assign("http://www.instagram.com")
 }
 