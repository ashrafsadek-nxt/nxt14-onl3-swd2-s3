document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
const btn = document.getElementById("toggle-theme");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  btn.textContent = "☀️";
} else {
  btn.textContent = "🌙";
}
btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
const text = "Nahed Magdy Mohamed"; 
let index = 0;
const speed = 60; 
const typingElement = document.getElementById("typing-text");
function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  } else {
    setInterval(() => {
      typingElement.style.borderRight =
        typingElement.style.borderRight === "3px solid #fff"
          ? "3px solid transparent"
          : "3px solid #fff";
    }, 500);
  }
}
window.onload = typeEffect;
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !number || !email || !message) {
    alert("Please fill in all required fields!");
    return;
  }
  const phonePattern = /^[0-9]{10,15}$/;
  if (!phonePattern.test(number)) {
    alert("Please enter a valid phone number (10–15 digits).");
    return;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }
  if (age && (isNaN(age) || age < 10 || age > 100)) {
    alert("Please enter a valid age between 10 and 100.");
    return;
  }
  alert("Message sent successfully!");
  form.reset();
});

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let index2 = 0;

function showSlide(i) {
  index2 = (i + slide.length) % slide.length;
  slides.style.transform = `translateX(${-index2 * 100}%)`;
}

nextBtn.addEventListener("click", () => showSlide(index2 + 1));
prevBtn.addEventListener("click", () => showSlide(index2 - 1));

const navLinks = document.querySelector("ul");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "☰";
toggleBtn.style.fontSize = "25px";
toggleBtn.style.background = "transparent";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.id = "menu-toggle";

document.querySelector("nav").insertBefore(toggleBtn, navLinks);

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
