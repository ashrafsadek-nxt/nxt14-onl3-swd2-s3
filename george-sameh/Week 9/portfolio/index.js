window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Toggle icon
  const icon = toggleBtn.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    toggleBtn.classList.remove('btn-outline-dark');
    toggleBtn.classList.add('btn-outline-light');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    toggleBtn.classList.remove('btn-outline-light');
    toggleBtn.classList.add('btn-outline-dark');
  }
});
