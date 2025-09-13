interface User {
  username: string;
  password: string;
}

class AuthSystem {
  private users: User[] = [];

  constructor() {
    this.loadUsers();
    this.initEvents();
  }

  private loadUsers(): void {
    const data = localStorage.getItem("users");
    if (data) {
      this.users = JSON.parse(data);
    }
  }

  private saveUsers(): void {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  private initEvents(): void {
    const loginBtn = document.getElementById("login-btn") as HTMLButtonElement;
    const registerBtn = document.getElementById("register-btn") as HTMLButtonElement;
    const showRegister = document.getElementById("show-register") as HTMLAnchorElement;
    const showLogin = document.getElementById("show-login") as HTMLAnchorElement;

    loginBtn.addEventListener("click", () => this.login());
    registerBtn.addEventListener("click", () => this.register());
    showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleForms("register");
    });
    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleForms("login");
    });
  }

  private toggleForms(type: "login" | "register"): void {
    const loginBox = document.getElementById("login-box")!;
    const registerBox = document.getElementById("register-box")!;
    if (type === "login") {
      loginBox.classList.remove("hidden");
      registerBox.classList.add("hidden");
    } else {
      loginBox.classList.add("hidden");
      registerBox.classList.remove("hidden");
    }
  }

  private login(): void {
    const username = (document.getElementById("login-username") as HTMLInputElement).value;
    const password = (document.getElementById("login-password") as HTMLInputElement).value;
    const msg = document.getElementById("login-msg")!;

    // filter بدل find
    const user = this.users.filter(u => u.username === username && u.password === password)[0];
    if (user) {
      msg.textContent = "Login successful!";
      msg.style.color = "green";
    } else {
      msg.textContent = "Invalid username or password.";
      msg.style.color = "red";
    }
  }

  private register(): void {
    const username = (document.getElementById("reg-username") as HTMLInputElement).value;
    const password = (document.getElementById("reg-password") as HTMLInputElement).value;
    const msg = document.getElementById("reg-msg")!;

    // filter بدل find
    if (this.users.filter(u => u.username === username).length > 0) {
      msg.textContent = "Username already exists.";
      msg.style.color = "red";
      return;
    }

    this.users.push({ username, password });
    this.saveUsers();

    msg.textContent = "Registration successful!";
    msg.style.color = "green";
  }
}

// Start
new AuthSystem();
