const cards = [
  { title: "Card 1", description: "This is the first card." },
  { title: "Card 2", description: "This is the second card." },
  { title: "Card 3", description: "This is the third card." },
  { title: "Card 4", description: "This is the fourth card." }
];
function showcard() {
  const container = document.getElementById("cardContainer");
  container.innerHTML = ""; 
  cards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <button onclick="alert('You clicked ${card.title}')">Click Me</button>
    `;
    container.appendChild(cardDiv);
  });
}