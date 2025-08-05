const toggleInput = document.getElementById("modeToggle");

toggleInput.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
