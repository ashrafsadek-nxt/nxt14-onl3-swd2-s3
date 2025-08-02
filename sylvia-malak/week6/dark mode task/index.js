var btn = document.getElementById("btn");
var body = document.querySelector("body");
var isDarkMode = false;
btn.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
});