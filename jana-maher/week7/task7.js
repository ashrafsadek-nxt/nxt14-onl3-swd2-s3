function checkPassword() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let errors = [];
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one digit.");
    }
    if (!/[@$!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character (@,$,!,%,*,?,&).");
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    if (errors.length > 0) {
        message.style.color = "red";
        message.innerHTML = errors.join("<br> ");
    } else {
        message.style.color = "green";
        message.textContent = "Password is valid.";
    }
}
