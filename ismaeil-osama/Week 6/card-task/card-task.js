let data ={
    name: "Ali",
    email: "ali@gmail.com",
    university: "Menofia University",
    university_Logo: "Logo.png"
}

let btn = document.getElementById("data_btn");
btn.addEventListener("click", showData);

function showData(){
    let div = document.getElementById("parent");
    for(i in data){
        div.innerHTML += `<div id="child"> <h3>${data.name}</h3> 
        <h3>${data.email}</h3>
        <h3>${data.university}</h3>
        <img src="${data.university_Logo}"; alt="Logo"; height="100px"; width="100px"; "</div>`
        console.log(i);
    }
}