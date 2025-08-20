window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });
  document.getElementById("home").style.display = "block";
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll("section").forEach(section => {
      section.style.display = "none";
    });
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.style.display = "block";
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});