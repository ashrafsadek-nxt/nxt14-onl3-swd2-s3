const toggleBtn = document.getElementById('toggleMode');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(c => c.classList.toggle('dark-mode'));
  });

  document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });