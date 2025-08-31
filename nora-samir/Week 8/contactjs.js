const sentence = "Welcome to my Website to contact me"; 
const textElement = document.getElementById("text");

let i = 0;

const typing = setInterval(() => {
  textElement.textContent += sentence[i];
  i++;

  if (i === sentence.length) {
    clearInterval(typing); 
  }
}, 70);
//alert from button
const note=document.getElementsByClassName("btn")[0];
note.addEventListener("click",function()
{
    alert("Welcome here , my beautiful user ")
})