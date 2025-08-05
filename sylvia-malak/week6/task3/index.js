let added = false;

let object1 = {
    name: "Hanna",
    age: 30,
    city: "New York"
};

let object2 = {
    name: "hala",
    age: 20,
    city: "New York"
};

let object3 = {
    name: "nehal",
    age: 20,
    city: "New York"
};

let object4 = {
    name: "layla",
    age: 30,
    city: "New York"
};

const btn = document.getElementById("btn");
btn.addEventListener("click", showData);

function showData() {
    if (!added) {
    const cardsContainer = document.getElementById("cardsContainer");
    
    let allObjects = [object1, object2, object3, object4];

    allObjects.forEach(object => { //arrow function 
        let cardHTML = `
            <div class='card'>
                <h3>${object.name}</h3>
                <p>Age: ${object.age}</p>
                <p>City: ${object.city}</p>
                <button class='btn'>Click Me</button>
            </div>
        `;
        cardsContainer.innerHTML += cardHTML;
    });
        added = true; 
    }
}
