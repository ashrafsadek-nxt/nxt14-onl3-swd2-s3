function checkPassword() {
    let password = prompt("Enter your password:");
    let upper= /[A-Z]/;
    let lower= /[a-z]/;
    let num= /[0-9]/;
    let sChar= /[!@#$%^&*(),.?":{}|<>]/;
    if (!upper.test(password)) {
        alert("Must contain at least one uppercase letter");
        return;
    }
    if (!lower.test(password)) {
        alert("Must contain at least one lowercase letter");
        return;
    }
    if (!num.test(password)) {
        alert("Must contain at least one number");
        return;
    }
    if (!sChar.test(password)) {
        alert("Must contain at least one special character");
        return;
    }
    if (password.length < 8) {
        alert("Must be at least 8 characters long");
        return;
    }
    alert(" Password is valid");
}

checkPassword();
