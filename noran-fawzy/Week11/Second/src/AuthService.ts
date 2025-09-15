import { User } from "./User.js";

export class AuthService {
  private users: User[];

  constructor() {
    // مستخدمين افتراضيين للتجربة
    this.users = [
      new User("Nour", "1234"),
      new User("Admin", "admin123"),
    ];
  }

  login(username: string, password: string): boolean {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }
}
