/**
 * HIGH-PERFORMANCE INTERACTIVE ANIMATIONS ENGINE — ADITYA SAXENA
 * Scroll-Reveal, Floating Physics, and Interactive Micro-animations
 */

(function () {
  // Intersection Observer for Scroll Reveal Animations
  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally unobserve after reveal
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target sections and cards for reveal
    const revealTargets = document.querySelectorAll(
      '.section-header, .about-grid, .skill-card, .project-card, .timeline-item, .testimonial-slide, .contact-grid, .profile-card'
    );

    revealTargets.forEach(target => {
      target.classList.add('reveal-on-scroll');
      revealObserver.observe(target);
    });
  }

  // Interactive Magnetic & Tilt FX on Cards
  function initCardInteractiveFX() {
    const cards = document.querySelectorAll('.glass-card, .project-card, .skill-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initCardInteractiveFX();
  });
})();
