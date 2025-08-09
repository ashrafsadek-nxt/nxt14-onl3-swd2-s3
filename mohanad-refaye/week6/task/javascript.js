let info = {
  name: "mohanad refaye",
  age: 30,
  occupation: "Software Developer",
};

let added = false;

document.getElementById("add-btn").addEventListener("click", function () {
  if (added) return;

  const container = document.getElementById("card-container");

  for (let key in info) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
          <h3>${key} : ${info[key]} </h3>
        `;
    container.appendChild(card);
  }

  added = true;
});
