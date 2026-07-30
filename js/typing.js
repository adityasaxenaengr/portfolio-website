/**
 * TYPING EFFECT ENGINE (CHOSEN SENIOR LINES - SINGLE LINE GUARANTEED)
 * Smooth typewriter animation using exact user-selected lines:
 * 1. Full-Stack Engineer.
 * 2. Java & Python Tech.
 * 3. High-Performance Code.
 * 4. Modern Web Design.
 * 5. Java & Full-Stack.
 * 6. Python & Web Engineering.
 */

(function () {
  function initTyping() {
    const element = document.getElementById('typingText');
    if (!element || !window.PORTFOLIO_DATA) return;

    const titles = window.PORTFOLIO_DATA.typingTitles || [
      "Full-Stack Engineer.",
      "Java & Python Tech.",
      "High-Performance Code.",
      "Modern Web Design.",
      "Java & Full-Stack.",
      "Python & Web Engineering."
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentTitle = titles[titleIndex % titles.length];

      if (isDeleting) {
        element.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 35 : 70;

      if (!isDeleting && charIndex === currentTitle.length) {
        speed = 2200; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 450;
      }

      setTimeout(type, speed);
    }

    type();
  }

  document.addEventListener('DOMContentLoaded', initTyping);
})();
