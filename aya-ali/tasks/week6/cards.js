let cardsAdded = false;

document.getElementById("add-btn").addEventListener("click", () => {
  if (cardsAdded) return;

  const container = document.getElementById("card-container");

  const names = ["Aya", "Dina", "Huda", "Hala"];

  names.forEach(name => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${name}</h3>`;
    container.appendChild(card);
  });

  cardsAdded = true;
});
