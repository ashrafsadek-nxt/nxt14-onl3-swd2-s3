const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// استرجاع الـ theme من localStorage لو موجود
if (localStorage.getItem("theme")) {
  body.dataset.theme = localStorage.getItem("theme");
}

function animateIcon() {
  icon.classList.add('rotate'); 
  setTimeout(() => icon.classList.remove('rotate'), 500); // خليها نصف ثانية كفاية
}

function setThemeIcon() {
  if (body.dataset.theme === 'dark') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
}

setThemeIcon();

themeToggle.addEventListener('click', () => {
  const isDark = body.dataset.theme === 'dark';
  body.dataset.theme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme' , body.dataset.theme);
  setThemeIcon();
  animateIcon();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  body.dataset.theme = e.matches ? 'dark' : 'light';
  localStorage.setItem('theme' , body.dataset.theme);
  setThemeIcon();
  animateIcon();
});

// smooth scroll للروابط
document.querySelectorAll('.navigation .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// typing effect
const roleEl = document.querySelector(".role");
const text = roleEl.textContent;
roleEl.textContent = ""; // مسح النص قبل ما يبدأ
let i = 0;
function typing() {
  if (i < text.length) {
    roleEl.textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

// scroll reveal
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// scroll to top button
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.classList.add("top-btn");
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
