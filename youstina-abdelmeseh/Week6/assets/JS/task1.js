let count=0;
function ShowCards(){
    const container= document.getElementById('container');
    if(count<4){
    for(var i=0;i<=3;i++){
        count++;
        container.innerHTML+="<div class='card'></div>";
    }
  }

}