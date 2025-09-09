class User {
  constructor(private username: string, private password: string) {}

  getUsername(): string {
    return this.username;
  }

  validatePassword(password: string): boolean {
    return this.password === password;
  }
}


class AuthService {
  private users: User[] = [];

  constructor() {
   
    this.users.push(new User("Kenzie", "12345"));
    this.users.push(new User("Admin", "admin123"));
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.getUsername() === username);
    return user ? user.validatePassword(password) : false;
  }
}


class LoginPage {
  private authService: AuthService;
  private form: HTMLFormElement;
  private message: HTMLElement;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.form = document.getElementById("loginForm") as HTMLFormElement;
    this.message = document.getElementById("message") as HTMLElement;
    this.initialize();
  }

  private initialize() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleLogin();
    });
  }

  private handleLogin() {
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if (this.authService.login(username, password)) {
      this.showMessage("✅ Login successful!", "green");
    } else {
      this.showMessage("❌ Invalid username or password", "red");
    }
  }

  private showMessage(message: string, color: string) {
    this.message.textContent = message;
    this.message.style.color = color;
  }
}

const authService = new AuthService();
new LoginPage(authService);
