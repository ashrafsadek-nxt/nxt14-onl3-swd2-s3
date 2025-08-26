document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

const Name = document.getElementById("Name").value.trim();
const age = document.getElementById("age").value.trim();
const email = document.getElementById("email").value.trim();
const purpose = document.getElementById("box").value.trim();
const gender = document.querySelector('input[name="gender"]:checked');


let valid = true ;
let errors =[];

if ( Name === "" || age === "" || email ==="" || purpose === "" || !gender){
    valid = false ;
    errors.push("please fill in all fields") ;
}
if (purpose.length < 6){
    valid = false ;
    errors.push("must be more than 6 ") ;
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    valid = false ;
    errors.push("please enter a valid email") ;
}

if (errors.length > 0){
    alert(errors);
    return;
}
this.submit();
});