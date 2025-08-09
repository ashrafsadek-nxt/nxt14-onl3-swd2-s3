    var counter=0;
function makeCards(){
    const container=document.getElementById('container');
    if(counter < 4){
    for(var i=0 ; i<=3 ; i++){
        counter++;
        container.innerHTML +="<div class='card'><h1>maryoum</h1></div>";
      }
    }
 }