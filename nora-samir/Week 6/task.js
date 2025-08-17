var mybtn=document.getElementById("mybtn"); 
let mycard=document.getElementById("container");

let flag=false;  //my flag
mybtn.addEventListener("click",function()
{
   if(!flag){
   for(var i=0;i<4;i++) //loop four times
  {
  mycard.innerHTML +="<div class='card'>smile you are beautiful</div>"; //print the card
  }
  flag=true;
   }

})
