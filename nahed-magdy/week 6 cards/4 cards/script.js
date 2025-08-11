let info = [
    {
        fullname: "Ahmed Ali",
        age: 20,
        address: "Giza",
        salary: 5000,
        img: "images/blackgoose (1).png"
    },
    {
        fullname: "Sara Mohamed",
        age: 22,
        address: "Cairo",
        salary: 6000,
        img: "images/logo.jpg"
    },
    {
        fullname: "Omar Hassan",
        age: 25,
        address: "Alexandria",
        salary: 5500,
        img: "images/blackgoose (1).png"
    },
    {
        fullname: "Mona Samir",
        age: 23,
        address: "Luxor",
        salary: 5200,
        img: "images/logo.jpg"
    }
];
function showData() {
    const dv = document.getElementById("container");
    dv.innerHTML = "";
    for (let i = 0; i < info.length; i++) {
        dv.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px; width:200px;">
            <img src="${info[i].img}" alt="photo" style="width:100%;">
            <h3>${info[i].fullname}</h3>    
            <p>Age: ${info[i].age}</p>
            <p>Address: ${info[i].address}</p>
            <p>Salary: ${info[i].salary}</p>
        </div>
        `;
    }
}

const btn = document.getElementById('btn');
btn.addEventListener("click", showData);