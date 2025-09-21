"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let signin = document.getElementById("signin");
let signup = document.getElementById("signup");
let signincontainer = document.querySelector(".container-signin");
let container = document.querySelector(".container");
if (signincontainer && signincontainer && container && signin && signup) {
    signin.addEventListener("click", function () {
        container.classList.remove("right-panel-active");
        signincontainer.classList.add("right-panel-active");
    });
    signup.addEventListener("click", function () {
        container.classList.add("right-panel-active");
        signincontainer.classList.remove("right-panel-active");
    });
}
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
    get Email() {
        return this.email;
    }
    set Email(value) {
        this.email = value;
    }
    get Password() {
        return this.password;
    }
    set Password(value) {
        this.password = value;
    }
    name;
    email;
    password;
}
class Auth {
    users = [];
    register(user) {
        this.users.push(user);
        console.log(this.users);
    }
    login(name, password) {
        if (this.users.length === 0) {
            console.log("No users registered");
            return false;
        }
        this.users.forEach(user => {
            if (user.Name === name && user.Password === password) {
                console.log("Login successful");
                return true;
            }
        });
        console.log("Login failed");
        return false;
    }
}
let signinbutton = document.getElementById("signin-button");
let signupbutton = document.getElementById("signup-button");
let auth = new Auth();
if (signinbutton) {
    signinbutton.addEventListener("click", function (event) {
        event.preventDefault();
        let username = document.getElementById("signin-username").value;
        let password = document.getElementById("signin-password").value;
        let user = new User(username, "", password);
        auth.login(user.Name, user.Password);
    });
}
if (signupbutton) {
    signupbutton.addEventListener("click", function (event) {
        event.preventDefault();
        let username = document.getElementById("signup-username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("signup-password").value;
        let user = new User(username, email, password);
        auth.register(user);
    });
}
//# sourceMappingURL=signin.js.map