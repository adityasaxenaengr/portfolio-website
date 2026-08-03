
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const $$ = (sel) => document.querySelectorAll(sel);

  function initPreloader() {
    const loader = $('pageLoader');
    if (!loader) return;

    const hideLoader = () => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 650);
    };

    if (document.readyState === 'complete') {
      setTimeout(hideLoader, 200);
    } else {
      window.addEventListener('load', () => setTimeout(hideLoader, 250));
    }
  }

  function initHeroParticles() {
    const container = $('heroParticles');
    if (!container) return;

    container.innerHTML = '';
    const particleCount = 24;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 7}s`;
      p.style.animationDuration = `${6 + Math.random() * 6}s`;
      p.style.width = `${3 + Math.random() * 4}px`;
      p.style.height = p.style.width;
      container.appendChild(p);
    }
  }

  function initScrollProgressAndNav() {
    const progress = $('scrollProgress');
    const navbar = $('navbar');
    const sections = $$('section[id]');
    const navLinks = $$('.nav-menu a[href^="#"]');

    const handleScroll = () => {
      const docEl = document.documentElement;
      const totalScroll = docEl.scrollHeight - docEl.clientHeight;
      const scrollPercent = totalScroll > 0 ? (docEl.scrollTop / totalScroll) * 100 : 0;

      if (progress) {
        progress.style.width = `${scrollPercent}%`;
      }

      if (navbar) {
        navbar.classList.toggle('scrolled', docEl.scrollTop > 40);
      }

      let currentSecId = '';
      sections.forEach((sec) => {
        if (docEl.scrollTop >= sec.offsetTop - 220) {
          currentSecId = sec.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSecId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in', 'revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealSelectors = [
      '.reveal-up',
      '.reveal-scale',
      '.reveal-left',
      '.reveal-right',
      '.reveal-on-scroll',
      '.section-header',
      '.about-grid',
      '.stat-card',
      '.skill-card',
      '.project-card',
      '.timeline-item',
      '.certification-card',
      '.contact-grid',
      '.glass-card'
    ];

    const targets = $$(revealSelectors.join(', '));
    targets.forEach((el) => {
      if (!el.classList.contains('reveal-scale') && !el.classList.contains('reveal-left') && !el.classList.contains('reveal-right')) {
        el.classList.add('reveal-up');
      }
      revealObserver.observe(el);
    });
  }

  function initTimelineDrawing() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const setTimelineHeight = () => {
      const h = timeline.offsetHeight;
      if (h > 0) {
        timeline.style.setProperty('--tl-h', `${h}px`);
      }
    };

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimelineHeight();
          timeline.classList.add('drawn');
          timelineObserver.unobserve(timeline);
        }
      });
    }, { threshold: 0.15 });

    timelineObserver.observe(timeline);
    window.addEventListener('resize', setTimelineHeight);
  }

  function initStaggeredSkills() {
    const skillsGrid = $('skillsGrid');
    if (!skillsGrid) return;

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = skillsGrid.querySelectorAll('.skill-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('in', 'revealed');
            }, index * 60);
          });
          skillObserver.unobserve(skillsGrid);
        }
      });
    }, { threshold: 0.15 });

    skillObserver.observe(skillsGrid);
  }

  function init3DTiltCards() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cards = $$('.project-card, .glass-card, .stat-card, .profile-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        if (reducedMotion.matches || window.matchMedia('(hover: none)').matches) return;

        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `perspective(1000px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-5px)`;
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  function initMagneticButtons() {
    const buttons = $$('.btn-primary, .btn-secondary, .btn-outline, .social-btn');

    buttons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        if (window.matchMedia('(hover: none)').matches) return;

        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  let audioCtx = null;
  let lastChimeTime = 0;

  function playUiChime() {
    try {
      if (window.PORTFOLIO_STATE && window.PORTFOLIO_STATE.soundEnabled === false) return;

      const now = performance.now();
      if (now - lastChimeTime < 90) return;
      lastChimeTime = now;

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const time = audioCtx.currentTime;
      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(0.035, time + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.1);

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(820, time);
      filter.Q.setValueAtTime(0.9, time);

      gain.connect(filter);
      filter.connect(audioCtx.destination);

      const tone = audioCtx.createOscillator();
      tone.type = 'sine';
      tone.frequency.setValueAtTime(650, time);
      tone.frequency.exponentialRampToValueAtTime(430, time + 0.09);
      tone.connect(gain);
      tone.start(time);
      tone.stop(time + 0.1);
    } catch (_) {

    }
  }

  function initAudioFeedback() {
    document.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (!e.isPrimary) return;
      if (e.target.closest('a, button, .btn, .filter-tab, .social-btn, .card')) {
        playUiChime();
      }
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initHeroParticles();
    initScrollProgressAndNav();
    initScrollReveal();
    initTimelineDrawing();
    initStaggeredSkills();
    init3DTiltCards();
    initMagneticButtons();
    initAudioFeedback();
  });
})();
