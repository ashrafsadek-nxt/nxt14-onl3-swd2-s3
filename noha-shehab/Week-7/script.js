const pass = document.getElementById("pass");
const message = document.getElementById("message");
const button = document.querySelector("button");

const strongPasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

button.addEventListener("click", () => {
  const passValue = pass.value;
  let missing = [];
  if (!/[A-Z]/.test(passValue)) {
    missing.push("uppercase letter");
  }
  if (!/[a-z]/.test(passValue)) {
    missing.push("lowercase letter");
  }
  if (!/[0-9]/.test(passValue)) {
    missing.push("number");
  }
  if (!/[#?!@$%^&*-]/.test(passValue)) {
    missing.push("special character");
  }
  if (passValue.length < 8) {
    missing.push("at least 8 characters");
  }
  if (strongPasswordRegex.test(passValue)) {
    message.innerHTML = "Strong Password";
    message.style.color = "green";
  } else {
    message.innerHTML = "Weak Password, missing: " + missing.join(", ");
    message.style.color = "red";
  }
});
