const password = document.getElementById('password');
const btn = document.getElementById('btn');

btn.addEventListener("click", checkPassword);

function checkPassword() {
    const value = password.value;

    const haslowercase = /[a-z]/.test(value);
    const hasuppercase = /[A-Z]/.test(value);
    const hasdigit = /[0-9]/.test(value);
    const hasspecialchar = /[@#$%^&/]/.test(value);
    const validlength = /^.{8,16}$/.test(value);

    if (value === "") {
        alert("❌ Password cannot be empty");
    }
    else if (!validlength) {
        alert("❌ Password must be between 8 to 16 characters");
    }
    else if (!haslowercase) {
        alert("❌ Password must contain at least one lowercase letter");
    }
    else if (!hasuppercase) {
        alert("❌ Password must contain at least one uppercase letter");
    }
    else if (!hasdigit) {
        alert("❌ Password must contain at least one digit");
    }
    else if (!hasspecialchar) {
        alert("❌ Password must contain at least one special character (@, #, $, %, ^, &, /)");
    }
    else {
        alert("✅ Password is valid!");
    }
}
