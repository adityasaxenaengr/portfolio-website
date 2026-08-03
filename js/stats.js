
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

  function animateOrdinalValue(obj, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const val = Math.floor(progress * end);
      if (val === 1) obj.innerHTML = "1st";
      else if (val === 2) obj.innerHTML = "2nd";
      else if (val >= 3) obj.innerHTML = "3rd";
      else obj.innerHTML = "0";

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

          if (yEl) animateOrdinalValue(yEl, 3, 1200);
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
