class User {
  username: string;
  private password: string; 

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  checkPassword(password: string): boolean {
    return this.password === password;
  }
}

class Auth {
  private users: User[] = []; 

  register(user: User) {
    this.users.push(user);
  }

  login(username: string, password: string): boolean {
    for (let u of this.users) {
      if (u.username === username && u.checkPassword(password)) {
        return true;
      }
    }
    return false;
  }
}


const auth = new Auth();
auth.register(new User("alexa", "67834"));
auth.register(new User("sylvia", "98612"));



const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const message = document.getElementById("message") as HTMLParagraphElement;

document.getElementById("loginBtn")!.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const success = auth.login(username, password);

  if (success) {
    message.textContent = ` Login successful! Welcome, ${username}.`;
    message.style.color = "green";
  } else {
    message.textContent = " Invalid username or password!";
    message.style.color = "red";
  }
});
