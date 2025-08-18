let password = `password1234!` ;
let errors = [] ;

function checkPassword(password){
    errors = [] ;

    if (password.length < 12){
        return "password must be atleast 12 characters long" ;
    }

    if (!/[A-Z]/.test(password)){
        errors.push("password must contain atleast 1 uppercase letter") ;
    }

    if (!/[a-z]/.test(password)){
        errors.push("password must contain atleast 1 lowercase letter") ;
    }

    if (!/[0-9]/.test(password)){
        errors.push("password must contain atleast 1 number") ;
    }

    if (!/[!@#$%^&*]/.test(password)){
        errors.push("password must contain atleast 1 symbol") ;
    }

    if (errors.length > 0){
        console.log(errors) ;
    } else {
        console.log('valid password!') ;
    }
}
checkPassword(password);

