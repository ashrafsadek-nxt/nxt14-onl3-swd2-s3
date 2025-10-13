var button = document.getElementById("button");
button.addEventListener("click", createDivs);
var flag = 0;
function createDivs(){
    if(flag === 0){
     const parent = document.getElementById("parent-Div");
    for(let i=0; i<4; i++){
        parent.innerHTML += "<div class='child-Div'><h2>Child Div</h2></div>";
        flag =1;
    }   
    }
    
}