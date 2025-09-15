import { AuthService } from "./AuthService.js";
const authService = new AuthService();
const form = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const isLoggedIn = authService.login(username, password);
    if (isLoggedIn) {
        messageDiv.textContent = "Login successful! 🎉";
        messageDiv.style.color = "green";
    }
    else {
        messageDiv.textContent = "Invalid username or password ❌";
        messageDiv.style.color = "red";
    }
});
