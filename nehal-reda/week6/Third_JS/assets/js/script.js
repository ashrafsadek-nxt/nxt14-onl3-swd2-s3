// script.js
const toggleButton = document.getElementById('toggleMode');
const body = document.body;

// Check for saved mode in localStorage
const savedMode = localStorage.getItem('mode');
if (savedMode) {
    body.classList.add(savedMode);
}

// Toggle between dark and light mode
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('mode', 'light-mode');
        toggleButton.innerText = "Light";
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('mode', 'dark-mode');
        toggleButton.innerText = "Dark";
    }
});
