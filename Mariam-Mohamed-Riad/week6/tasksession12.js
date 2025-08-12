 const container = document.getElementById("container");
const Btn = document.getElementById("Btn");

let mee={
    Image   : "me.jpg",
    name: "maryouma",
    age: 20,
    country: "Egypt",
}

let ff=true;
//عايزه لما ادوس عالزرار الكارد تظهر اربع مرات
function showcards() {
    if (ff) {
        for (let i = 0; i < 4; i++) {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
             <img src="${mee.Image}" alt="Profile Image" style="width:100px;height:100px; border-radius:50%;">
                <h2>${mee.name}</h2>
                <p>Age: ${mee.age}</p>
                <p>Country: ${mee.country}</p>
            `;
            container.appendChild(card);
        }
        ff = false;
    } else {
        container.innerHTML = "";
        ff = true;
    }
}