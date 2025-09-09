var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.checkPassword = function (password) {
        return this.password === password;
    };
    return User;
}());
var Auth = /** @class */ (function () {
    function Auth() {
        this.users = [];
    }
    Auth.prototype.register = function (user) {
        this.users.push(user);
    };
    Auth.prototype.login = function (username, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.username === username && u.checkPassword(password)) {
                return true;
            }
        }
        return false;
    };
    return Auth;
}());
var auth = new Auth();
auth.register(new User("alexa", "67834"));
auth.register(new User("sylvia", "98612"));
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var message = document.getElementById("message");
document.getElementById("loginBtn").addEventListener("click", function () {
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    var success = auth.login(username, password);
    if (success) {
        message.textContent = " Login successful! Welcome, ".concat(username, ".");
        message.style.color = "green";
    }
    else {
        message.textContent = " Invalid username or password!";
        message.style.color = "red";
    }
});
export {};