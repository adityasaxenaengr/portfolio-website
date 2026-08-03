
(function () {
  'use strict';

  function initCursor() {
    const dot = document.getElementById('cursorDot');
    const outline = document.getElementById('cursorOutline');

    if (!dot || !outline) return;

    document.body.classList.add('js-ready');

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        outline.style.opacity = '1';
      }

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    });

    function animateOutline() {

      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;

      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateOutline);
    }

    animateOutline();

    const hoverSelectors = 'a, button, input, textarea, label, .btn, .glass-card, .project-card, .skill-card, .filter-tab, .social-btn';

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverSelectors)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
    });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      dot.style.opacity = '0';
      outline.style.opacity = '0';
    });
  }

  document.addEventListener('DOMContentLoaded', initCursor);
})();
