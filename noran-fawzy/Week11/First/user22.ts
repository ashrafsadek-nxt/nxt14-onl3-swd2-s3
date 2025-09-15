class User {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}

const user = new User("Nour", 20, "noranfawzy@gmail.com");

export function showUserInfo() {
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.textContent = user.getInfo();
    }
}
