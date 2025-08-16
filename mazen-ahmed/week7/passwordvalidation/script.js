const password = document.getElementById('pass');
const message = document.getElementById('message');
const btn = document.querySelector('button');

const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

btn.addEventListener('click', () => {
    const passValue = password.value;
    let missing = [];

    if (!/[A-Z]/.test(passValue)) missing.push("Add at least one uppercase letter");
    if (!/[a-z]/.test(passValue)) missing.push("Add at least one lowercase letter");
    if (!/[0-9]/.test(passValue)) missing.push("Add at least one number");
    if (!/[#?!@$%^&*-]/.test(passValue)) missing.push("Add at least one special character");
    if (passValue.length < 8) missing.push("Password must be at least 8 characters long");

    if (strongPasswordRegex.test(passValue)) {
        message.innerHTML = ' Strong Password';
        message.style.color = 'green';
    } else {
        message.innerHTML = " Weak Password, missing: <br> - " + missing.join("<br> - ");
        message.style.color = 'red';
    }
});
