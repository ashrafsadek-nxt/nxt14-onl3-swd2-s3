let cardsCreated = false;

const showCardsBtn = document.getElementById("showCardsBtn");
const cardsContainer = document.getElementById("cardsContainer");

showCardsBtn.addEventListener("click", () => {
  if (!cardsCreated) {
    for (let i = 1; i <= 4; i++) {
      const card = document.createElement("div");
      card.className = "card";
      card.textContent = `Card ${i}`;
      cardsContainer.appendChild(card);
    }
    cardsCreated = true;
  }
});
