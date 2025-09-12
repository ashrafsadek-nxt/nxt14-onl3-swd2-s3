class User {
  username: string
  password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}

class Auth {
  private users = new Map<string, string>()

  register(user: User) {
    if (this.users.has(user.username)) {
      throw new Error("Username already exists")
    }
    this.users.set(user.username, user.password)
  }

  login(username: string, password: string): boolean {
    return this.users.get(username) === password
  }
}

// تجربة
const auth = new Auth()
auth.register(new User("saif", "1234"))
auth.register(new User("name2", "pass"))

console.log(auth.login("saif", "1234")) // true
console.log(auth.login("name2", "a"))   // false
console.log(auth.login("unknown", "123")) // false
