const container = document.getElementById("container");
counter=0;/*counter to check if we have 4 cards yet or not */
function create() {

    if (counter<4){
    // create a new card
    const newCard = document.createElement("div");
    newCard.className = "card"; 

    // add text inside
    newCard.innerHTML = `<p>hello world</p>`;

    // add it into the container
    container.appendChild(newCard);
    counter++;}
}
