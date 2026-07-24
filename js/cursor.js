/**
 * CURSOR FOLLOWER ENGINE
 * Smooth interactive magnetic glowing cursor
 */

(function () {
  function initCursor() {
    const dot = document.getElementById('cursorDot');
    const outline = document.getElementById('cursorOutline');

    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    });

    function animateOutline() {
      // Smooth interpolation (lerp)
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateOutline);
    }

    animateOutline();

    // Hover effect on interactive elements
    const hoverElements = 'a, button, input, textarea, .glass-card, .filter-tab';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverElements)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverElements)) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initCursor);
})();
