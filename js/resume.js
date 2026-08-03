
(function () {
  function renderResumeContent() {
    const container = document.getElementById('resumeModalBody');
    if (!container || !window.PORTFOLIO_DATA) return;

    const data = window.PORTFOLIO_DATA;

    container.innerHTML = `
      <div class="resume-paper">
        <header style="border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 20px;">
          <h1>${data.profile.name}</h1>
          <p style="font-weight: 600; color: #475569; font-size: 1.1rem;">${data.profile.title}</p>
          <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-top: 8px; font-size: 0.85rem; color: #64748b;">
            <span>📍 ${data.profile.location}</span>
            <span>✉️ ${data.profile.email}</span>
          </div>
        </header>

        <section style="margin-bottom: 20px;">
          <h3>Profile Summary</h3>
          <p style="color: #334155; line-height: 1.6;">${data.profile.tagline} Focused on writing clean code, solving algorithmic challenges, and engineering real-world software applications.</p>
        </section>

        <section style="margin-bottom: 20px;">
          <h3>Core Technical Skills</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
              <strong>Web & Frontend:</strong>
              <p style="color: #334155; font-size: 0.85rem;">HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design</p>
            </div>
            <div>
              <strong>Programming & Backend:</strong>
              <p style="color: #334155; font-size: 0.85rem;">Python, Java (OOP), Node.js & Express, SQL, Git & GitHub</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 20px;">
          <h3>Education & University</h3>
          <div style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <h4 style="font-size: 1rem; color: #0f172a; font-weight: 700;">B.Tech in Computer Science & Engineering (CSE)</h4>
              <span style="font-size: 0.8rem; font-weight: 600; color: #64748b;">Present</span>
            </div>
            <p style="font-size: 0.85rem; color: #475569; font-weight: 600; margin-bottom: 6px;">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
          </div>
        </section>

        <section>
          <h3>Key Projects</h3>
          <ul style="padding-left: 18px; color: #334155; font-size: 0.85rem; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Personal Developer Portfolio Website:</strong> Built with HTML5, CSS3, ES JavaScript, featuring dark/light theme, terminal CLI, and direct email delivery.</li>
            <li><strong>Full-Stack E-Commerce Web App:</strong> React & Node.js shopping portal with product search, cart state, and user authentication.</li>
            <li><strong>Python Automation Tool:</strong> Automation scripts and web scraping utility built in Python 3.</li>
            <li><strong>Java Management System:</strong> Object-oriented Java application with OOP architecture and SQL integration.</li>
          </ul>
        </section>
      </div>
    `;
  }

  function openResumeModal() {
    renderResumeContent();
    const backdrop = document.getElementById('resumeModalBackdrop');
    if (backdrop) {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.playAudioEffect) window.playAudioEffect('open');
    }
  }

  function closeResumeModal() {
    const backdrop = document.getElementById('resumeModalBackdrop');
    if (backdrop) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (window.playAudioEffect) window.playAudioEffect('close');
    }
  }

  function initResume() {
    window.openResumeModal = openResumeModal;

    const toggleBtns = [document.getElementById('resumeToggleBtn'), document.getElementById('heroResumeBtn')];
    toggleBtns.forEach(btn => {
      if (btn) btn.addEventListener('click', openResumeModal);
    });

    const closeBtn = document.getElementById('closeResumeModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', closeResumeModal);

    const backdrop = document.getElementById('resumeModalBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeResumeModal();
      });
    }

    const printBtn = document.getElementById('printResumeBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }

    const downloadBtn = document.getElementById('downloadResumeBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        if (window.showToast) window.showToast('Generating resume PDF download...', 'success');
        window.print();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initResume);
})();
