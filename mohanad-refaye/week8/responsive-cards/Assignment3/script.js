   // Start chatting
      const startBtn = document.querySelector(".btn-primary");
      const messages = document.querySelector(".messages");

      const sampleReplies = [
        "Awesome, can't wait 🚀",
        "Did you push to GitHub?",
        "Let's test dark mode together 🌙",
        "Cool, I'll update the docs 📄",
        "🔥🔥🔥"
      ];

      startBtn.addEventListener("click", () => {
        const bubble = document.createElement("div");
        bubble.className = "bubble you";
        bubble.textContent = "Hello team 👋";
        messages.appendChild(bubble);

        setTimeout(() => {
          const reply = document.createElement("div");
          reply.className = "bubble other";
          reply.textContent =
            sampleReplies[Math.floor(Math.random() * sampleReplies.length)];
          messages.appendChild(reply);

          messages.scrollTop = messages.scrollHeight;
        }, 1000);
      });

      //  Download
      const downloadBtn = document.querySelector(".btn-outline");
      downloadBtn.addEventListener("click", () => {
        alert("Download started... 📥");
      });

      // FAQ Animation
      document.querySelectorAll(".faq details").forEach((detail) => {
        detail.addEventListener("toggle", () => {
          if (detail.open) {
            detail.style.transition = "all 0.3s ease-in-out";
            detail.style.background = "rgba(217, 70, 239, 0.1)";
          } else {
            detail.style.background = "rgba(255, 255, 255, 0.05)";
          }
        });
      });