document.getElementById("checkBtn").addEventListener("click", () => {
  const password = document.getElementById("password").value;
  const issues = [];

  // Length check
  if (password.length < 8) {
    issues.push("Password is too short (min 8 characters)");
  }

  // Regex checks
  if (!/[A-Z]/.test(password)) {
    issues.push("Needs one uppercase letter at least");
  }

  if (!/[a-z]/.test(password)) {
    issues.push("Needs one lowercase letter at least");
  }

  if (!/[0-9]/.test(password)) {
    issues.push("Needs one number at least");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    issues.push("Add a special character");
  }

  // Show result
  if (issues.length === 0) {
    alert("Password is fine ");
  } else {
    alert("Issues with your password:\n" + issues.join("\n"));
  }
});
