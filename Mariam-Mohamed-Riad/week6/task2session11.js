function toggle(){
    let body = document.body;
    body.classList.toggle("dark-mode");
     if (body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}