let info = {
    fullName: "Nehal Reda",
    des: "Cs student",
    more: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem itaque cum maiores iusto quam corporis"
}
let dv = document.getElementById('container');
function showData() {
    dv.innerHTML = "";
    let card = `
      <div class="card">
            <img src="assets/imgs/850636.png" alt="" width="100px" height="100px" style="border-radius: 50px;">
            <h3>${info.fullName}</h3>
            <h4>${info.des}</h4>
            <p>${info.more}</p>
             <button
            style="background-color: blue; color: white;font-weight: bold; width: 50%;height: 4vh;border-radius: 2rem;border:none">more</button>
        </div>
    `;

    let content = "";
    for (let i = 0; i < 3; i++) {
        content += card;
    }
    dv.innerHTML = content;
}

const btn = document.getElementById('btn');
btn.addEventListener("click", showData);