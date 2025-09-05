// Typing Effect
var typed = new Typed('.typing', {
  strings: ["Noran Fawzy Najm", "Front-End Developer", "Medical Informatics Student"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

// Navigation Show/Hide
window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById("home").style.display = "block";
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;

      if (name && email && message) {
        alert("Thanks " + name + ", Your message has been sent successfully.");
        form.reset(); 
      } else {
        alert("Please fill out all fields before submitting.");
      }
    });
  });