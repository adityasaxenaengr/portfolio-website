/**
 * PROJECT DETAIL MODAL ENGINE
 * Deep-dive overlay with architecture highlights, features list, and links
 */

(function () {
  function openProjectModal(projectId) {
    const backdrop = document.getElementById('projectModalBackdrop');
    const modalBody = document.getElementById('projectModalBody');
    if (!backdrop || !modalBody || !window.PORTFOLIO_DATA) return;

    const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    modalBody.innerHTML = `
      <div class="project-modal-banner" style="background: ${project.gradient || 'var(--gradient-main)'}; padding: 40px; border-radius: var(--radius-md); text-align: center; color: #fff; margin-bottom: 24px;">
        <h2 style="font-size: 2rem; color: #fff; margin-bottom: 8px;">${project.title}</h2>
        <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
          ${project.tags.map(t => `<span style="background: rgba(255,255,255,0.2); padding: 4px 14px; border-radius: 99px; font-size: 0.8rem; font-family: var(--font-code);">${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-section" style="margin-bottom: 24px;">
        <h3 style="font-size: 1.2rem; margin-bottom: 8px;">Project Overview</h3>
        <p style="color: var(--text-secondary);">${project.fullDesc || project.shortDesc}</p>
      </div>

      ${project.features ? `
        <div class="modal-section" style="margin-bottom: 24px;">
          <h3 style="font-size: 1.2rem; margin-bottom: 12px;">Key Architectural Features</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
            ${project.features.map(f => `
              <li style="display: flex; items-center; gap: 10px; color: var(--text-secondary);">
                <i data-lucide="check-circle" style="color: var(--accent-cyan); width: 18px; height: 18px; flex-shrink: 0;"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      ${project.architectureNotes ? `
        <div class="modal-section" style="margin-bottom: 24px; padding: 16px; background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: var(--radius-md);">
          <h4 style="color: var(--accent-primary); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
            <i data-lucide="cpu" style="width: 18px; height: 18px;"></i>
            System & Infrastructure Highlights
          </h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">${project.architectureNotes}</p>
        </div>
      ` : ''}

      <div style="display: flex; gap: 16px; margin-top: 32px; flex-wrap: wrap;">
        <a href="${project.liveUrl || '#'}" target="_blank" rel="noopener" class="btn btn-primary" style="flex-grow: 1;">
          <i data-lucide="external-link"></i>
          <span>Launch Live Demo</span>
        </a>
        <a href="${project.githubUrl || '#'}" target="_blank" rel="noopener" class="btn btn-secondary" style="flex-grow: 1;">
          <i data-lucide="github"></i>
          <span>View Source Code</span>
        </a>
      </div>
    `;

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
    if (window.playAudioEffect) window.playAudioEffect('open');
  }

  function closeProjectModal() {
    const backdrop = document.getElementById('projectModalBackdrop');
    if (backdrop) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
      if (window.playAudioEffect) window.playAudioEffect('close');
    }
  }

  function initProjectModal() {
    window.openProjectModal = openProjectModal;

    const closeBtn = document.getElementById('closeProjectModalBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeProjectModal);
    }

    const backdrop = document.getElementById('projectModalBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeProjectModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProjectModal();
    });
  }

  document.addEventListener('DOMContentLoaded', initProjectModal);
})();
