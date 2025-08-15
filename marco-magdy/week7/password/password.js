let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
let form = document.getElementById('passwordForm');
let password = document.getElementById('password');
function validatpass() {
    let pass = password.value;
    let errors = [];
    if (pass.length < 6 || pass.length > 16) {
        errors.push('Password must be between 6 and 16 characters long.');
    }
    if (!pass.match(/[0-9]/)) {
        errors.push('Password must contain at least one digit.');
    }
    if (!pass.match(/[!@#$%^&*]/)) {
        errors.push('Password must contain at least one special character (!@#$%^&*).');
    }
    if (!pass.match(/[a-zA-Z]/)) {
        errors.push('Password must contain at least one letter.');
    }
    if (errors.length > 0) {
        for (let error of errors) {
            console.error(error);
        }
        return false;
    } else {
        console.log('Password is valid.');
        return true;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validatpass()) {
        alert('Password is valid');
    } else {
        alert('Password is not valid');
    }
});