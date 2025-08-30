// ========== Scroll Reveal ==========
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active", "animate__animated", "animate__fadeInUp");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ========== Contact Form Message ==========
const contactForm = document.getElementById("contactForm");
const alertPlaceholder = document.getElementById("alertPlaceholder");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Bootstrap alert
    alertPlaceholder.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        ✅ Message Sent Successfully!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;

    contactForm.reset();
  });
}
