let added = false;

document.getElementById("add-btn").addEventListener("click", function () {
  if (added) return;

  const container = document.getElementById("card-container");

  for (let i = 1; i <= 4; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <h3>Card ${i}</h3>
          <p>This is card number ${i}.</p>
        `;
    container.appendChild(card);
  }

  added = true;
});
