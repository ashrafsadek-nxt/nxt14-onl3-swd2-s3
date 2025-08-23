const password = document.getElementById('password');

var btn = document.getElementById('btn');
btn.addEventListener("click", checkPassword);

const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&/]).{8,16}$/;
function checkPassword(){
    if(!/[A-Z]/.test(password.value)){
        alert("Password must contain at least one uppercase letter");
    }
    else if (!/[a-z]/.test(password.value)){
        alert("Password must contain at least one lowercase letter");
    }
    else if (!/[0-9]/.test(password.value)){
        alert("Password must contain at least one digit");
    }
    else if (!/[@#$%^&/]/.test(password.value)){
        alert("Password must contain at least one special character");
    }
    else if (password.value.length < 8 || password.value.length > 16){
        alert("Password length must be between 8 and 16 characters");
    }
    else{
        alert("Password is valid");
    }
}
