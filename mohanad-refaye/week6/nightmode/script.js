   // Get the toggle button and elements
      const toggleBtn = document.getElementById("darkModeToggle");
      const body = document.body;
      const icon = toggleBtn.querySelector(".icon");
      const text = toggleBtn.querySelector(".text");

      // Check for saved theme preference or default to 'light'
      const currentTheme = window.savedTheme || "light";

      // Apply the saved theme on page load
      if (currentTheme === "dark") {
        body.classList.add("dark");
        toggleBtn.classList.add("dark");
        icon.textContent = "🌙";
        text.textContent = "Dark Mode";
      }

      // Toggle function
      function toggleDarkMode() {
        body.classList.toggle("dark");
        toggleBtn.classList.toggle("dark");

        // Update button content
        if (body.classList.contains("dark")) {
          icon.textContent = "🌙";
          text.textContent = "Dark Mode";
          window.savedTheme = "dark";
        } else {
          icon.textContent = "☀️";
          text.textContent = "Light Mode";
          window.savedTheme = "light";
        }
      }

      // Add click event listener
      toggleBtn.addEventListener("click", toggleDarkMode);