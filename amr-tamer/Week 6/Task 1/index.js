function showServices(){
    const cont=document.getElementById('content');
    cont.innerHTML = '';
    for(var i=0;i<3;i++){
      cont.innerHTML+='<div class="card"> <div class="card-content"> <div class="card-title"> Card Title</div> <div class="card-description">Card content</div></div></div>';
    }
}