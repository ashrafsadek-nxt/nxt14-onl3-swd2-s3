class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUserName(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }
}

class Authentication {
    private users: User[] = [];

    register(user: User): void {
        this.users.push(user);
    }

    login(username: string, password: string): boolean {
        for (let user of this.users) {
            if (user.getUserName() === username && user.getPassword() === password) {
                return true;
            }
        }
        return false;
    }
}

const logForm = document.getElementById('LogInForm') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement; 

const auth = new Authentication();
auth.register(new User("Mona", "123"));