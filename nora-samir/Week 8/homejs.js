const sentence = "My Works :"; 
const textElement = document.getElementById("text");

let i = 0;

const typing = setInterval(() => {
  textElement.textContent += sentence[i];
  i++;

  if (i === sentence.length) {
    clearInterval(typing); 
  }
}, 100); 