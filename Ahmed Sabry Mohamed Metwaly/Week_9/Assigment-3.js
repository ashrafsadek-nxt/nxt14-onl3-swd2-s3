  // ========== toggle =========
document.getElementById("Toggle").addEventListener("click",function(){
    document.getElementById("menue-Sm-Size").classList.toggle("active")
})

// ==========button===========
document.getElementById("btn").addEventListener("click",function(){
    alert("It's Life pro , Enjoy")
})

//========= Contact Form Submit=========
function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
}