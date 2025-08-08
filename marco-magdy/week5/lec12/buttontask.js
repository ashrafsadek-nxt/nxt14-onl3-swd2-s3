//data
let data =[
    { name: "John", age: 30, city: "New York" ,
        img:"https://placehold.co/100x100" },
    { name: "Jane", age: 25, city: "London" ,
        img:"https://placehold.co/100x100" },
    { name: "Bob", age: 35, city: "Paris" ,
        img:"https://placehold.co/100x100" }
];
let button = document.querySelector(".button");
button.addEventListener("click", function() {
    let output = document.querySelector(".container");
    // clear
    output.innerHTML = "";
    //display data
    for (let i of data){
        html="";
        html += `<div class="box">`;
    for (let key in i) {
        if (i.hasOwnProperty(key)) {
            if (key === "img") {html += `<img src="${i[key]}" alt="Image of ${i.name}"> <br>`;
         }
        else {
            html+= `${key}: ${i[key]} <br>`;
            }
        }
    }
    html += `</div>`;
    output.innerHTML += html;
}
});