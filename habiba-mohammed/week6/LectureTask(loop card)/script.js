let info = {
    name: "hello",
    image: "assets/Images/wallpaperflare.com_wallpaper (1).jpg"
};

var flag = false;
var btn = document.getElementById("btn");
btn.addEventListener("click", showdata);
function showdata()
{
    const dv = document.getElementById('container');
    if(flag == false)
    {
        for(var i = 0; i < 4; i++){
            dv.innerHTML += `
                <div class="card">
                    <h3>${info.name}</h3>
                    <img src="${info.image}" alt="${info.name}">
                </div>
            `;
        }
        flag = true;
    }
}
