//  Dark Mode Toggle
const darkModeBtn = document.getElementById("darkMode");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.textContent = "Light Mode";
    } else {
      darkModeBtn.textContent = "Dark Mode";
    }
  });
}

//  Language Switcher
const langSelect = document.getElementById("languageSelect");
const contentTitle = document.querySelector("main .content h1");
const contentParagraph = document.querySelector("main .content p");

if (langSelect) {
  langSelect.addEventListener("change", (e) => {
    if (e.target.value === "ar") {
      contentTitle.textContent = "مرحبًا بك في صفحتي";
      contentParagraph.innerHTML = "اهلا, انا سيلفيا — طالبة في قسم نظم المعلومات بجامعة حلوان. " +
          "أعمل كفرونت اند مع مهارات قوية في الباك اند " +
        " .أنا شغوفة بالتعلم ودائمًا متحمسة لاستكشاف تقنيات جديدة تتجاوز أي مجموعة ثابتة" ;
    } else {
      contentTitle.textContent = "Welcome to My Page";
      contentParagraph.innerHTML =
        "Hi, I'm <strong>SYLVIA</strong> — a BIS student at Helwan University. " +
        "I work as a front-end developer with solid back-end skills. " +
        "I’m passionate about learning and always excited to explore new technologies beyond any fixed stack.";
    }
  });
}

//  Search Bar Functionality for Technologies
const searchInput = document.querySelector(".navbar-right input");
const searchButton = document.querySelector(".navbar-right button");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const techs = document.querySelectorAll(".tech-table td");

    let found = false;
    techs.forEach((td) => {
      if (td.textContent.toLowerCase().includes(query) && query !== "") {
        td.style.backgroundColor = "#3498db";
        td.style.color = "#fff";
        found = true;
      } else {
        td.style.backgroundColor = "";
        td.style.color = "";
      }
    });

    if (!found && query !== "") {
      alert("No matching technology found!");
    }
  });
}

//  Form Validation 
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    
    hideAlerts();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const country = document.getElementById("country").value.trim();
    const subject = document.getElementById("subject").value.trim();

    let isValid = true;
    let errorMessage = "";

    if (!name || !email || !phone || !country || !subject) {
      isValid = false;
      errorMessage = "Please fill in all fields.";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      isValid = false;
      errorMessage = "Please enter a valid email.";
    } else if (!/^[0-9]{7,15}$/.test(phone)) {
      isValid = false;
      errorMessage = "Please enter a valid phone number (7-15 digits).";
    }

    if (!isValid) {
      showAlert(errorMessage, "error");
      return;
    }

    const submitBtn = contactForm.querySelector('input[type="submit"]');
    submitBtn.classList.add('loading');
    
    
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      showAlert("Form submitted successfully!", "success");
      contactForm.reset();
    }, 1500);
  });
}

function showAlert(message, type) {
  hideAlerts();
  
  const alertElement = document.getElementById(`${type}Alert`);
  if (alertElement) {
    alertElement.textContent = message;
    alertElement.style.display = 'block';
    
    setTimeout(() => {
      hideAlerts();
    }, 5000);
  }
}

function hideAlerts() {
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => {
    alert.style.display = 'none';
  });
}