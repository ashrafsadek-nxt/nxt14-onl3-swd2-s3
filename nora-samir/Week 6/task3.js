var btn=document.getElementById("mybtn");

let info={
    name:"Nora Samir",
    age:" age: 20",
    me:"I am beautiful person and I love my family & friends"
}
var flag=false;
btn.addEventListener("click",function()
{
   if(!flag){
   
    for(var i=0;i<4;i++)  {
   var card=document.getElementsByClassName("divy")[i];
    card.classList.add("mydiv");
    for(let x in info)
    {
       
        card.innerHTML +=`${info[x]} <br>  `;
       

    }
   
}

}
flag=true;
  
})