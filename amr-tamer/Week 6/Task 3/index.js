const datas =[
    {
        title: "Web Development",
        subtitle: "Build modern websites",
        description: "We create fast, responsive, and user-friendly websites using the latest technologies.",
        img: "is_web_development_good_career.avif",
        icon: "fa-code"
    },
    {
        title: "UI/UX Design",
        subtitle: "Design that speaks",
        description: "Crafting beautiful and functional designs to enhance user experience and engagement.",
        img: "UIUX-designing-1.jpg",
        icon: "fa-pencil-ruler"
    },
    {
        title: "Mobile Apps",
        subtitle: "iOS & Android",
        description: "We build high-performance mobile applications for startups and businesses.",
        img: "mobile-apps-1-scaled.jpg",
        icon: "fa-mobile-screen-button"
      }
];
function showServices(){
    let adddata = "<h1>Our Services</h1><div class='card-grid'>";
    const container = document.getElementById("content");
    for(let data of datas){
        adddata+=`
            <div class="card">
            <img src="${data.img}" alt="${data.title}">
            <div class="card-content">
              <h2 class="card-title">${data.title}</h2>
              <p class="card-subtitle">${data.subtitle}</p>
              <p class="card-text">${data.description}</p>
              <div class="card-footer">
                <a href="#" class="card-btn">Learn More</a>
                <i class="fa-solid ${data.icon}"></i>
              </div>
            </div>
          </div>
        `;
    }
    adddata += "</div>";
    container.innerHTML = adddata;
    const button=document.getElementById("btn");
    button.remove();
}