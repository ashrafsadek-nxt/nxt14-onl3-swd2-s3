const btn = document.getElementById("showBtn");
const dataBox = document.getElementById("dataBox");

btn.addEventListener("mouseenter", () => {
dataBox.style.display = "block";
});


btn.addEventListener("mouseleave", () => {
    setTimeout(() => {
    if (!dataBox.matches(":hover")) {
        dataBox.style.display = "none";
    }
    }, 100);
});
dataBox.addEventListener("mouseleave", () => {
dataBox.style.display = "none";
});