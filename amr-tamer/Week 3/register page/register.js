  document.querySelector(".sign-form").addEventListener("submit", function (e) {
    const password = document.querySelector("#password").value;
    const confirm = document.querySelector("#cpassword").value;
    if (password !== confirm) {
      e.preventDefault();
      alert("Passwords do not match!");
    }
  });