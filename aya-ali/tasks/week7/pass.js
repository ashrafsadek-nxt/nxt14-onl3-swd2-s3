function checkPassword() {
  const password = document.getElementById("password").value;

  const hasUpper = /[A-Z]/;
  const hasLower = /[a-z]/;
  const hasNum = /[0-9]/;
  const hasSpecial = /[!@#$%^&*]/;

  if (password.length < 8) {
    document.getElementById("result").textContent = "Password must be at least 8 characters long";
  } else if (!hasUpper.test(password)) {
    document.getElementById("result").textContent = "Password must contain at least one uppercase letter";
  } else if (!hasLower.test(password)) {
    document.getElementById("result").textContent = "Password must contain at least one lowercase letter";
  } else if (!hasNum.test(password)) {
    document.getElementById("result").textContent = "Password must contain at least one number";
  } else if (!hasSpecial.test(password)) {
    document.getElementById("result").textContent = "Password must contain at least one special character";
  } else {
    document.getElementById("result").textContent = "Valid";
  }
}
