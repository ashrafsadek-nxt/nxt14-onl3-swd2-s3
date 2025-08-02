let added = false; 
function addCards() {
    if (!added) { 
        const cardsContainer = document.getElementById("cardsContainer");
        for (let i = 0; i <= 3; i++) { // This will add 4 cards to the button element
            cardsContainer.innerHTML += "<div class='card'><h4>heading</h4><p>paragraph</p></div>";
        }
        added = true; 
    }
}
