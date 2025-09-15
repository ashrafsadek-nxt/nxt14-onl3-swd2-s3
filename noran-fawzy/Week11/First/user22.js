class User {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getInfo() {
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
//# sourceMappingURL=user22.js.map