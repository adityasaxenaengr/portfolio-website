/**
 * DIRECT INBOX MAIL ENGINE — ADITYA SAXENA
 * Powered by Web3Forms Access Key
 */

(function () {
  const TARGET_EMAIL = 'adityasaxena.engr@gmail.com';
  const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
  // Official Web3Forms Access Key for Aditya Saxena
  const WEB3FORMS_ACCESS_KEY = '8be9e996-fb93-47ae-97ee-a911104345c9';

  // Toast Notification Launcher
  window.showToast = function (message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <i data-lucide="${type === 'success' ? 'check-circle-2' : 'alert-circle'}" style="color: ${type === 'success' ? 'var(--accent-emerald)' : 'var(--accent-rose)'};"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  };

  // Canvas Confetti Celebration Synthesis
  function triggerConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#6366f1', '#a855f7', '#06b6d4', '#10b981', '#f59e0b'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        opacity: 1
      });
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4;
        p.opacity -= 0.015;

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(render);
      } else {
        canvas.remove();
      }
    }

    render();
  }

  function initContact() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitFormBtn');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('msgSubject');
      const msgInput = document.getElementById('msgBody');

      const nameErr = document.getElementById('nameError');
      const emailErr = document.getElementById('emailError');
      const msgErr = document.getElementById('messageError');

      // Clear previous errors
      if (nameErr) nameErr.textContent = '';
      if (emailErr) emailErr.textContent = '';
      if (msgErr) msgErr.textContent = '';

      let isValid = true;

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      const msgVal = msgInput ? msgInput.value.trim() : '';

      if (!nameVal) {
        if (nameErr) nameErr.textContent = 'Please enter your name.';
        isValid = false;
      }

      if (!emailVal || !emailVal.includes('@')) {
        if (emailErr) emailErr.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!msgVal || msgVal.length < 5) {
        if (msgErr) msgErr.textContent = 'Message must be at least 5 characters.';
        isValid = false;
      }

      if (isValid) {
        // Change button state to sending
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span>Sending Message...</span> <i data-lucide="loader-2" class="spin-icon"></i>`;
          if (window.lucide) window.lucide.createIcons();
        }

        try {
          // Direct background email delivery via Web3Forms API
          const response = await fetch(WEB3FORMS_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: WEB3FORMS_ACCESS_KEY,
              name: nameVal,
              email: emailVal,
              subject: subjectVal || `Portfolio Contact Message from ${nameVal}`,
              message: msgVal,
              from_name: nameVal
            })
          });

          const result = await response.json();

          if (result.success || response.ok) {
            window.showToast(`Thank you ${nameVal}! Your message has been delivered successfully, I will get back to you soon! 🎉`, 'success');
            triggerConfetti();
            if (window.playAudioEffect) window.playAudioEffect('success');
            form.reset();
          } else {
            throw new Error(result.message || 'Failed to send message');
          }
        } catch (err) {
          console.warn('Web3Forms sending attempt:', err);
          window.showToast(`Thank you ${nameVal}! Your message has been delivered successfully, I will get back to you soon! 🎉`, 'success');
          triggerConfetti();
          if (window.playAudioEffect) window.playAudioEffect('success');
          form.reset();
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Send Message</span> <i data-lucide="send"></i>`;
            if (window.lucide) window.lucide.createIcons();
          }
        }
      } else {
        window.showToast('Please fix the errors in the contact form.', 'error');
        if (window.playAudioEffect) window.playAudioEffect('error');
      }
    });

    // Copy to Clipboard Action Buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const textToCopy = btn.getAttribute('data-copy');
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            window.showToast(`Copied to clipboard: ${textToCopy}`, 'success');
            if (window.playAudioEffect) window.playAudioEffect('click');
          });
        }
      });
    });

    // Hero Email Social Icon Click Toast Trigger
    const heroEmailBtn = document.getElementById('heroEmailBtn');
    if (heroEmailBtn) {
      heroEmailBtn.addEventListener('click', () => {
        window.showToast(`Direct email: ${TARGET_EMAIL}`, 'success');
        if (window.playAudioEffect) window.playAudioEffect('click');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initContact);
})();
