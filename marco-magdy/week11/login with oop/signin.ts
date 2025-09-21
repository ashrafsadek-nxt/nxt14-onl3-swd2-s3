let signin=document.getElementById("signin");
let signup=document.getElementById("signup");
let signincontainer=document.querySelector(".container-signin");
let container=document.querySelector(".container");
if (signincontainer&&signincontainer&&container && signin && signup){

signin.addEventListener("click",function(){
    container.classList.remove("right-panel-active");
    signincontainer.classList.add("right-panel-active");
});
signup.addEventListener("click",function(){
    container.classList.add("right-panel-active");
    signincontainer.classList.remove("right-panel-active");
});
}
class User{
    constructor(name:string,email:string,password:string){
        this.name=name;
        this.email=email;
        this.password=password;
    }
    get Name():string{
        return this.name;
    }
    set Name(value:string){
        this.name=value;
    }
    get Email():string{
        return this.email;
    }
    set Email(value:string){
        this.email=value;
    }
    get Password():string{
        return this.password;
    }
    set Password(value:string){
        this.password=value;
    }
    private name:string;
    private email:string;
    private password:string;
}
class Auth{
    private users:User[]=[];
    register(user:User){
        this.users.push(user);
        console.log(this.users);
    }
        
    login(name:string,password:string){
        if (this.users.length === 0) {
            console.log("No users registered");
            return false;
        }
        this.users.forEach(user => {
            if (user.Name === name && user.Password === password) {
                console.log("Login successful");
                return true;
            }
        })
        console.log("Login failed");
        return false;

    }
}
let signinbutton=document.getElementById("signin-button");
let signupbutton=document.getElementById("signup-button");
let auth=new Auth();
if (signinbutton){
    signinbutton.addEventListener("click",function(event){
        event.preventDefault();
        let username:string=(document.getElementById("signin-username") as HTMLInputElement).value;
        let password:string=(document.getElementById("signin-password") as HTMLInputElement).value;
        let user=new User(username,"",password);
        auth.login(user.Name,user.Password);
    });
}
if (signupbutton){
    signupbutton.addEventListener("click",function(event){
        event.preventDefault();
        let username:string=(document.getElementById("signup-username") as HTMLInputElement).value;
        let email:string=(document.getElementById("email") as HTMLInputElement).value;
        let password:string=(document.getElementById("signup-password") as HTMLInputElement).value;
        let user=new User(username,email,password);
        auth.register(user);
    });
}

