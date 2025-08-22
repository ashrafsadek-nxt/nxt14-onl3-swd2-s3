const cardsData = [
  {
    title: 'Card 1',
    image: 'https://placehold.co/200x150/png'
  },
  {
    title: 'Card 2',
    image: 'https://placehold.co/200x150/png'
  },
  {
    title: 'Card 3',
    image: 'https://placehold.co/200x150/png'
  }
];

function showCards() {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';

  for (let i = 0; i < cardsData.length; i++) {
    const card = cardsData[i];

    container.innerHTML += `
      <div class="card" data-title="${card.title}">
        <p>${card.title}</p>
        <img src="${card.image}" alt="${card.title}">
      </div>
    `;
  }
}
document.getElementById('btn').addEventListener('click', showCards);
