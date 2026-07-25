/**
 * STATS COUNTER ENGINE
 * Smooth number counting animation upon scroll
 */

(function () {
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function initStats() {
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length === 0) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          
          const yEl = document.getElementById('statYears');
          const pEl = document.getElementById('statProjects');
          const aEl = document.getElementById('statAwards');
          const sEl = document.getElementById('statSatisfaction');

          if (yEl) animateValue(yEl, 0, 0, 1000);
          if (pEl) animateValue(pEl, 0, 8, 1500);
          if (aEl) animateValue(aEl, 0, 50, 1500);
          if (sEl) animateValue(sEl, 0, 100, 2000);
        }
      });
    }, { threshold: 0.3 });

    statCards.forEach(card => observer.observe(card));
  }

  document.addEventListener('DOMContentLoaded', initStats);
})();
