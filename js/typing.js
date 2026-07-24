/**
 * TYPING EFFECT ENGINE
 * Smooth typewriter animation for hero section titles
 */

(function () {
  function initTyping() {
    const element = document.getElementById('typingText');
    if (!element || !window.PORTFOLIO_DATA) return;

    const titles = window.PORTFOLIO_DATA.typingTitles || [
      "Full-Stack Web Apps",
      "Python Automation",
      "Java OOP Software",
      "Responsive UIs"
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        element.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentTitle.length) {
        speed = 2000; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
      }

      setTimeout(type, speed);
    }

    type();
  }

  document.addEventListener('DOMContentLoaded', initTyping);
})();
