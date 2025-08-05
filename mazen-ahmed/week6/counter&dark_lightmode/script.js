let count = 0;
function counter() {
const container = document.querySelector(".container");
if (count < 4) {
    for(let i = 0; i < 4; i++) {
       count++;
       container.innerHTML += `<div class="card">${count}</div>`;
    }
   
}
}
function toggleMode() {
    const container = document.querySelector(".container");
    container.classList.toggle("dark");
    const btn = document.querySelector("#btn1");
    btn.innerText = btn.innerText === "Light Mode" ? "Dark Mode" : "Light Mode";
}