function showCards() {
  const container = document.getElementById("cardContainer");

  if (container.children.length >= 4) return;

  let i = 1;
  while (i <= 4) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = `Card ${i}`;
    container.appendChild(card);
    i++;
  }
}
// dark/light
const Button = document.getElementById("Mode");

Button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
   Button.textContent = "Light";
  } else {
    Button.textContent = "Dark";
  }
});
