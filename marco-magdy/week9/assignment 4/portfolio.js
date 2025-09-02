const overlay = document.querySelectorAll('.overlay');
const firstSection = document.querySelector('.first-section');
const secondSection = document.querySelector('.second-section');
const flyingIcons = document.querySelector('.flying-icons');
const about = document.querySelector('.text-center');
const navbar = document.querySelector('.navbar');
const herosection = firstSection.offsetHeight-80;

window.addEventListener('scroll', () => {
if (window.pageYOffset >= herosection) {
    if (!navbar.classList.contains('navbar-fixed')) {
      navbar.classList.add('animating');
      navbar.offsetHeight;
      navbar.classList.add('navbar-fixed');
      navbar.classList.remove('animating');
    }
    document.querySelector('.dropdown-1').style='color: white;';
    document.querySelector('.dropdown-2').style='color: white;';
    document.querySelector('.dropdown-3').style='color: white;';
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('navbar-fixed');
    navbar.classList.add('bg-transparent');
  }
});

overlay.forEach(ov => {
    ov.style.top = `${Math.random() * (about.clientHeight )}px`;
    ov.style.left = `-${Math.random() * window.innerWidth+300}px`;
    ov.style.transformOrigin = 'center';
ov.animate([
    { transform: `translateX(0) rotate(${Math.random() * 360}deg)` },
    { transform: `translateX(${window.innerWidth+1200}px) rotate(${Math.random() * 360}deg)` }
  ], {
    duration: 50000,
    iterations: Infinity,
    easing: 'linear'
  });
  setTimeout(() => {
    ov.style.animationPlayState = 'running';
  }, 1000);
});

// Typing effect for the main heading
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heading = document.querySelector('.text-center h1');
    const otherText = document.querySelector('.name');
    if (heading) {
        let originalText = heading.textContent;
        let otherogText = otherText.textContent;
        otherText.textContent = ''; // Clear the other text initially
        typeWriter(heading, originalText, 80);
        setTimeout(() => {
        typeWriter(otherText, otherogText, 100);
        }, originalText.length * 80 + 50); // Wait for the first typing to finish
    }
});