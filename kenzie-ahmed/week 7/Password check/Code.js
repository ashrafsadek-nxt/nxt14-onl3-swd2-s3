document.getElementById("checkBtn").addEventListener("click", () => {
  let password = document.getElementById("password").value;
  let issues = [];

  // Length check
  if (password.length < 8) {
    issues.push("Password is too short (min 8 characters)");
  }

  // Uppercase check
  let hasUpper = false;
  for (let char of password) {
    if (char >= "A" && char <= "Z") {
      hasUpper = true;
      break;
    }
  }
  if (!hasUpper) {
    issues.push("Needs one uppercase letter at least");
  }

  // Lowercase check
  let hasLower = false;
  for (let char of password) {
    if (char >= "a" && char <= "z") {
      hasLower = true;
      break;
    }
  }
  if (!hasLower) {
    issues.push("Needs one lowercase letter at least");
  }

  // Number check
  let hasNumber = false;
  for (let char of password) {
    if (char >= "0" && char <= "9") {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) {
    issues.push("Needs one number at least");
  }

  // Special character check
  let specialChars = '!@#$%^&*(),.?":{}|<>';
  let hasSpecial = false;
  for (let char of password) {
    if (specialChars.includes(char)) {
      hasSpecial = true;
      break;
    }
  }
  if (!hasSpecial) {
    issues.push("Add a special char");
  }

  // Show result
  if (issues.length === 0) {
    alert("Password is fine");
  } else {
    alert("Issues with your password:\n" + issues.join("\n"));
  }
});
