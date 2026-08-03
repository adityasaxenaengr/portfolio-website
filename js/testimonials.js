
(function () {
  let currentIndex = 0;

  function renderTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    if (!track || !window.PORTFOLIO_DATA) return;

    const list = window.PORTFOLIO_DATA.testimonials || [];

    track.innerHTML = list.map(item => `
      <div class="testimonial-slide glass-card">
        <p class="testimonial-quote">"${item.quote}"</p>
        <div class="testimonial-author">
          <div class="author-quote-icon" style="width: 44px; height: 44px; border-radius: 50%; background: rgba(99, 102, 241, 0.15); border: 1px solid var(--accent-primary); display: flex; align-items: center; justify-content: center; color: var(--accent-cyan); flex-shrink: 0;">
            <i data-lucide="quote" style="width: 22px; height: 22px;"></i>
          </div>
          <div style="text-align: left;">
            <div class="author-name">${item.name}</div>
            <div class="author-role">${item.role}</div>
          </div>
        </div>
      </div>
    `).join('');

    if (dotsContainer) {
      dotsContainer.innerHTML = list.map((_, i) => `
        <div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
      `).join('');
    }

    if (window.lucide) window.lucide.createIcons();
    updateTrack();
  }

  function updateTrack() {
    const track = document.getElementById('testimonialTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    if (!track) return;

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function initTestimonials() {
    renderTestimonials();

    const prevBtn = document.getElementById('testimonialPrevBtn');
    const nextBtn = document.getElementById('testimonialNextBtn');
    const dotsContainer = document.getElementById('testimonialDots');
    const list = window.PORTFOLIO_DATA ? window.PORTFOLIO_DATA.testimonials : [];

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + list.length) % list.length;
        updateTrack();
        if (window.playAudioEffect) window.playAudioEffect('click');
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % list.length;
        updateTrack();
        if (window.playAudioEffect) window.playAudioEffect('click');
      });
    }

    if (dotsContainer) {
      dotsContainer.addEventListener('click', (e) => {
        const dot = e.target.closest('.carousel-dot');
        if (!dot) return;
        currentIndex = parseInt(dot.getAttribute('data-index'), 10);
        updateTrack();
        if (window.playAudioEffect) window.playAudioEffect('click');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initTestimonials);
})();
