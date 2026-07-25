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
      <div class="project-modal-banner" style="background: ${project.gradient || 'var(--gradient-main)'}; padding: 18px 56px 18px 24px; border-radius: var(--radius-md); color: #fff; margin-bottom: 20px; position: relative;">
        <h3 style="font-size: 1.35rem; color: #fff; margin-bottom: 6px; font-weight: 700;">${project.title}</h3>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${project.tags.map(t => `<span style="background: rgba(255,255,255,0.2); padding: 3px 10px; border-radius: 99px; font-size: 0.75rem; font-family: var(--font-code);">${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-section" style="margin-bottom: 18px;">
        <h4 style="font-size: 1rem; color: var(--accent-cyan); margin-bottom: 6px;">Project Overview</h4>
        <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">${project.fullDesc || project.shortDesc}</p>
      </div>

      ${project.features ? `
        <div class="modal-section" style="margin-bottom: 18px;">
          <h4 style="font-size: 1rem; color: var(--accent-cyan); margin-bottom: 8px;">Key Features</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px; padding: 0;">
            ${project.features.map(f => `
              <li style="display: flex; align-items: center; gap: 8px; color: var(--text-secondary); font-size: 0.88rem;">
                <i data-lucide="check-circle" style="color: var(--accent-emerald); width: 16px; height: 16px; flex-shrink: 0;"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      ${project.architectureNotes ? `
        <div class="modal-section" style="margin-bottom: 20px; padding: 12px 16px; background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: var(--radius-md);">
          <h5 style="color: var(--accent-primary); margin-bottom: 4px; display: flex; align-items: center; gap: 6px; font-size: 0.9rem;">
            <i data-lucide="cpu" style="width: 16px; height: 16px;"></i>
            Architecture & Tech Stack
          </h5>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">${project.architectureNotes}</p>
        </div>
      ` : ''}

      <div style="display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap;">
        ${project.liveUrl && project.liveUrl !== '#' ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="flex: 1; padding: 10px 16px; font-size: 0.88rem; justify-content: center;">
            <i data-lucide="external-link" style="width: 16px; height: 16px;"></i>
            <span>Launch Live Demo</span>
          </a>
        ` : `
          <button class="btn btn-primary" disabled style="flex: 1; padding: 10px 16px; font-size: 0.88rem; justify-content: center; opacity: 0.7; cursor: not-allowed; background: rgba(99, 102, 241, 0.2); border-color: rgba(99, 102, 241, 0.3);">
            <i data-lucide="clock" style="width: 16px; height: 16px;"></i>
            <span>Live Demo (In Dev)</span>
          </button>
        `}

        ${project.githubUrl && project.githubUrl !== '#' ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary" style="flex: 1; padding: 10px 16px; font-size: 0.88rem; justify-content: center;">
            <i data-lucide="github" style="width: 16px; height: 16px;"></i>
            <span>View Source Code</span>
          </a>
        ` : `
          <button class="btn btn-secondary" disabled style="flex: 1; padding: 10px 16px; font-size: 0.88rem; justify-content: center; opacity: 0.7; cursor: not-allowed; background: rgba(255, 255, 255, 0.05); border-color: rgba(255, 255, 255, 0.15);">
            <i data-lucide="code" style="width: 16px; height: 16px;"></i>
            <span>Source Code (In Dev)</span>
          </button>
        `}
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
    window.closeProjectModal = closeProjectModal;

    document.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('#closeProjectModalBtn, .modal-close-btn');
      if (closeBtn && document.getElementById('projectModalBackdrop')?.classList.contains('open')) {
        closeProjectModal();
        return;
      }

      const backdrop = document.getElementById('projectModalBackdrop');
      if (backdrop && e.target === backdrop && backdrop.classList.contains('open')) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProjectModal();
    });
  }

  document.addEventListener('DOMContentLoaded', initProjectModal);
})();
