function ToggleMode(){
    var container=document.getElementById('container');
    container.classList.toggle("Dark");   
    const btn=document.getElementById('mode');
    btn.innerText = btn.innerText === "Light Mode" ? "Dark Mode" : "Light Mode" ;
}