const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;

function updateIcon() {
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
}

// load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// update icon on page load
updateIcon();

// toggle theme on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  updateIcon();
});
