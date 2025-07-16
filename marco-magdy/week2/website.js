document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('#toggle');
    const body = document.body;
    function applyTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggle.checked = true;
        applyTheme(true);
    } else {
        toggle.checked = false;
        applyTheme(false);
    }
    toggle.addEventListener('change', () => {
        applyTheme(toggle.checked);
    });
    const aboutSection = document.querySelector('#about');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillProgressBars.forEach(bar => {
                    bar.classList.remove('animate');
                    void bar.offsetWidth; 
                    bar.classList.add('animate');
                });
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(aboutSection);
});