let password ='Sylvia123';
let error=[];
if (password.length < 8) {
    error.push("Password must be at least 8 characters long.");
}
if (!/[A-Z]/.test(password)) {
    error.push("Password must contain at least one uppercase letter.");
}
if (!/[a-z]/.test(password)) {
    error.push("Password must contain at least one lowercase letter.");
}
if (!/[0-9]/.test(password)) {
    error.push("Password must contain at least one digit.");
}
if (!/[!@#$%^&*]/.test(password)) {
    error.push("Password must contain at least one special character (!@#$%^&*).");
}
if (error.length > 0) {
    console.log("Invalid Password:");
    error.forEach(err => console.log(err));
}
else {
    console.log("Valid Password");
}



