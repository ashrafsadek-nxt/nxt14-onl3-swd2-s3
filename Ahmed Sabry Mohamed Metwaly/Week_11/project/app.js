class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class Auth {
  constructor() {
    this.users = new Map();
  }

  register(user) {
    if (this.users.has(user.username)) {
      throw new Error("Username already exists");
    }
    this.users.set(user.username, user.password);
  }

  login(username, password) {
    return this.users.get(username) === password;
  }
}

// ====== DOM Handling ======
const auth = new Auth();

// Register
document.getElementById("register-btn").addEventListener("click", () => {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  const msg = document.getElementById("reg-msg");

  try {
    auth.register(new User(username, password));
    msg.textContent = "User registered successfully!";
    msg.style.color = "green";
  } catch (e) {
    msg.textContent = e.message;
    msg.style.color = "red";
  }
});

// Login
document.getElementById("login-btn").addEventListener("click", () => {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const msg = document.getElementById("login-msg");

  if (auth.login(username, password)) {
    msg.textContent = "Login successful!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Invalid username or password";
    msg.style.color = "red";
  }
});
