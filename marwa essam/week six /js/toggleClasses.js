/**
 * <style>
    .pop{
        background-size: cover;
        background-image: url(/assets/images/gl.webp);
    }
</style>
 <div id ="container"></div>
 */




let container_var =document.getElementById('container')
container_var.style.backgroundColor='lightpink'
container_var.style.height='100px'
container_var.style.width='100px'
//* to add class after click event
// container_var.onclick=function () {
//     container_var.classList.add("pop")
// }
//* to remove class after click event
// container_var.onclick=function () {
//     container_var.classList.remove("pop")
// }
//* to add class after click event and remove class after another click event
container_var.onclick=function () {
    container_var.classList.toggle("pop")
}
