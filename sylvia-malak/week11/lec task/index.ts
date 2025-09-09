class User1 {
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

class Auth1 {
  private users: User1[] = []; 

  register(user: User1) {
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


const auth1 = new Auth1();
auth1.register(new User1("alexa", "67834"));
auth1.register(new User1("sylvia", "98612"));

console.log(auth1.login("sylvia", "98612")); // true
console.log(auth1.login("noha", "22222"));   // false
