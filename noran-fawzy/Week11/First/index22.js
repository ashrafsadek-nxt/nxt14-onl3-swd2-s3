import { showUserInfo } from "./user22.js";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("showBtn");
    if (button) {
        button.addEventListener("click", showUserInfo);
    }
});
