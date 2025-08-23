// Smooth scroll from cover button
document.getElementById('explore')?.addEventListener('click', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const about = document.getElementById('about');
  const body = document.body;
  if (!about) return;
  if (prefersReduced) {
    about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  body.classList.add('flipping');
  setTimeout(() => {
    about.scrollIntoView({ behavior: 'instant', block: 'start' });
    body.classList.remove('flipping');
  }, 520);
});

// Typing effect for role
(function typeRole() {
  const target = document.getElementById('typed-role');
  if (!target) return;
  const fullText = 'Junior Front-End Developer';
  const speedMs = 60;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    target.textContent = fullText;
    return;
  }
  target.textContent = '';
  let index = 0;
  const interval = setInterval(() => {
    target.textContent += fullText.charAt(index);
    index += 1;
    if (index >= fullText.length) clearInterval(interval);
  }, speedMs);
})();

// Basic intersection animations for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(sec => observer.observe(sec));

// Enhanced parallax effects for cover only (not sections)
const coverGlow = document.querySelector('.cover .glow');
const grid3d = document.querySelector('.grid3d');

document.addEventListener('mousemove', (e) => {
  if (!coverGlow || !grid3d) return;
  
  const x = (e.clientX / window.innerWidth - 0.5) * 12; // -6..6
  const y = (e.clientY / window.innerHeight - 0.5) * 12; // -6..6
  
  coverGlow.style.transform = `translate(${x}px, ${y}px)`;
  
  // Subtle grid movement for cover only
  const gridX = (e.clientX / window.innerWidth - 0.5) * 3;
  const gridY = (e.clientY / window.innerHeight - 0.5) * 3;
  grid3d.style.transform = `rotateX(60deg) translateY(-10vh) translate(${gridX}px, ${gridY}px)`;
});

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Add hover effect to interactive elements
document.querySelectorAll('a, button, .card, .project-card, .skills-icons li').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});