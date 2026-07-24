/**
 * MAIN PORTFOLIO APPLICATION CONTROLLER
 * Initializes components, audio synthesis engine, navigation, and experience timeline
 */

(function () {
  let isSoundEnabled = true;

  // Synthesize UI sound effects via Web Audio API
  window.playAudioEffect = function (type) {
    if (!isSoundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'click') {
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === 'toggle') {
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'open') {
        osc.frequency.setValueAtTime(500, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else if (type === 'close') {
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'success') {
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16); // G5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch (e) {
      // AudioContext muted or blocked
    }
  };

  // Render Experience Timeline
  function renderExperienceTimeline() {
    const container = document.getElementById('experienceTimeline');
    if (!container || !window.PORTFOLIO_DATA) return;

    const list = window.PORTFOLIO_DATA.experience || [];

    container.innerHTML = list.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass-card">
          <div class="timeline-date">${item.period}</div>
          <h3 class="timeline-role">${item.role}</h3>
          <div class="timeline-company">${item.company}</div>
          <p style="color: var(--text-secondary); margin-bottom: 12px; font-size: 0.95rem;">${item.description}</p>
          <ul class="timeline-bullets">
            ${item.achievements.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // Scroll Navigation Active State & Progress Bar
  function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;

      // Update active nav link
      let currentSection = '';
      sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // Mobile Drawer Menu Toggle
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (!menuBtn || !navMenu) return;

    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      const menuIcon = document.getElementById('menuIcon');
      if (menuIcon) {
        menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        if (window.lucide) window.lucide.createIcons();
      }
      if (window.playAudioEffect) window.playAudioEffect('click');
    });

    // Close menu when link clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const menuIcon = document.getElementById('menuIcon');
        if (menuIcon) {
          menuIcon.setAttribute('data-lucide', 'menu');
          if (window.lucide) window.lucide.createIcons();
        }
      });
    });
  }

  // Sound Toggle Engine
  function initSoundToggle() {
    const btn = document.getElementById('soundToggleBtn');
    const icon = document.getElementById('soundIcon');
    if (!btn || !icon) return;

    btn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      icon.setAttribute('data-lucide', isSoundEnabled ? 'volume-2' : 'volume-x');
      if (window.lucide) window.lucide.createIcons();
      if (window.showToast) {
        window.showToast(`Sound FX ${isSoundEnabled ? 'Enabled' : 'Muted'}`, isSoundEnabled ? 'success' : 'error');
      }
    });
  }

  // Initialize App
  document.addEventListener('DOMContentLoaded', () => {
    // Current Year Update
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    renderExperienceTimeline();
    initScrollProgress();
    initMobileMenu();
    initSoundToggle();

    // Lucide Icons Render
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
})();
