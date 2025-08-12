var flag = false;
function makecards()
{
    const divs = document.getElementById('container');
    if(flag == false)
    {
        for(var i = 0; i < 4; i++){
            divs.innerHTML += "<div class ='card'><h4>heading</h4><p>paragraph</p></div>";
        }
        flag = true;
    }
}
