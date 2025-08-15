document.getElementById("showCards").onclick = function () {
  let cards = document.getElementsByClassName("card");
  document.getElementById("cardsContainer").style.display = "block";

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "inline-block";
  }
};


document.getElementById("darkModeToggle").onclick = function () {
  document.body.classList.toggle("dark");
};
