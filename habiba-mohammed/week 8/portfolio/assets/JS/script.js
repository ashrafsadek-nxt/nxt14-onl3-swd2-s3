// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    const header = document.querySelector('header');
    const table = document.querySelector('table');
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // Update local storage
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update dark mode icon and other elements
    const darkModeIcon = document.getElementById('darkModeIcon');
    if (darkModeIcon) {
        darkModeIcon.src = isDarkMode ? 'assets/Images/dark mode.svg' : 'assets/Images/dark mode.svg';
        darkModeIcon.alt = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
    
    // Add/remove dark mode classes to other elements
    header?.classList.toggle('dark-mode');
    table?.classList.toggle('dark-mode');
    
    // Update text colors
    document.querySelectorAll('h1, p, td, th').forEach(element => {
        element.classList.toggle('dark-mode-text');
    });
}

// Language Toggle
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    
    // Update the language selector text
    const langSelector = document.querySelector('.language-selector');
    if (langSelector) {
        langSelector.textContent = newLang === 'ar' ? 'English | عربي' : 'عربي | English';
    }
}

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Search Functionality
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const content = document.querySelectorAll('main p, main h1, main h2, main h3, table td');
    
    content.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            element.style.backgroundColor = '#2d8ba7';
            element.style.color = 'white';
            setTimeout(() => {
                element.style.backgroundColor = '';
                element.style.color = '';
            }, 2000);
        }
    });
}

// Social Media Hover Effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Initialize Dark Mode from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        // Call toggleDarkMode to ensure all elements are properly updated
        toggleDarkMode();
    }
    
    // Add transition class after initial load to prevent transition on page load
    setTimeout(() => {
        document.body.classList.add('transitions-enabled');
    }, 100);
    
    // Add search button click event
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
    
    // Add search input enter key event
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Add language toggle click event
    const langSelector = document.querySelector('.language-selector');
    if (langSelector) {
        langSelector.addEventListener('click', toggleLanguage);
    }
});
