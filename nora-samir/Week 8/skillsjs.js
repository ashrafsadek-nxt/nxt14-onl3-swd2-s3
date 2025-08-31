    
const sentence = "Welcome to my website to see my skills "; 
const textElement = document.getElementById("text");

let i = 0;

const typing = setInterval(() => {
  textElement.textContent += sentence[i];
  i++;

  if (i === sentence.length) {
    clearInterval(typing); 
  }
}, 70); 