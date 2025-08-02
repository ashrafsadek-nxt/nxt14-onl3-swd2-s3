var button= document.querySelector(".button");
var body= document.querySelector("body");
var dark= false;
// button.addEventListener('click', () => {
//     if(dark){
//         button.style.transform = "translateX(-150px)";
//         button.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
//         body.style.backgroundColor = "black";
//         dark = false;
//     }
//     else{
//         button.style.transform = "translateX(150px)";
//         button.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
//         body.style.backgroundColor = "white";
//         dark = true;
//     }

// });
button.addEventListener('click', () => {
    body.classList.toggle('dark');
});