class User {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    getUserName() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
}
class Authentication {
    users = [];
    register(user) {
        this.users.push(user);
    }
    login(username, password) {
        for (let user of this.users) {
            if (user.getUserName() === username && user.getPassword() === password) {
                return true;
            }
        }
        return false;
    }
}
const logForm = document.getElementById('LogInForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const auth = new Authentication();
auth.register(new User("Mona", "123"));
function logIn(event) {
    event.preventDefault();
    const userName = username.value.trim();
    const passWord = password.value.trim();
    if (!userName || !passWord) {
        alert("Please enter both username and password.");
        return;
    }
    if (auth.login(userName, passWord)) {
        alert("Log in is successful!");
    }
    else {
        alert("Username or Password is wrong, please try again.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('Login-submit-button');
    submitButton.addEventListener('click', logIn);
});
export {};
//# sourceMappingURL=task2.js.map