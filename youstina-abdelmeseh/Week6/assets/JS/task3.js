let info={
    name:"Tina",
    age:20,
    address:"Cairo"
}
let count=0;
const btn=document.getElementById('show');
const dv=document.getElementById('container');
btn.addEventListener("click",ShowDetails);
function ShowDetails(){
    if(count==0){
        for(var i=0;i<=3;i++){
            let cardContent='<div class="card">';
        for(let x in info){
          cardContent+=`<p>${info[x]}</p>`;
     }
     cardContent+='</div>';
     dv.innerHTML+=cardContent;
    }
    count=4;
 }
}