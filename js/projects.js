/**
 * PROJECTS ENGINE
 * Dynamic project card filtering, search, and modal triggers
 */

(function () {
  let activeCategory = 'all';
  let searchQuery = '';

  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid || !window.PORTFOLIO_DATA) return;

    const projects = window.PORTFOLIO_DATA.projects || [];

    const filtered = projects.filter(proj => {
      const matchesCat = activeCategory === 'all' || proj.category === activeCategory;
      const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            proj.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px; color: var(--text-muted);" class="glass-card">
          <i data-lucide="folder-search" style="width: 54px; height: 54px; margin-bottom: 16px; color: var(--accent-cyan);"></i>
          <h3>No Projects Match Your Search</h3>
          <p style="margin-top: 8px;">Try clearing filters or searching for different tech keywords like "React", "Python", or "Next.js".</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    grid.innerHTML = filtered.map(proj => `
      <div class="project-card glass-card" data-project-id="${proj.id}">
        <div class="project-thumbnail">
          <div class="project-svg-visual" style="background: ${proj.gradient || 'var(--gradient-main)'}">
            <span>${proj.svgBanner || proj.title}</span>
          </div>
          <div class="project-overlay">
            <button class="btn btn-primary open-modal-btn" data-project-id="${proj.id}">
              <i data-lucide="eye"></i>
              <span>View Details</span>
            </button>
            <a href="${proj.liveUrl || '#'}" target="_blank" rel="noopener" class="icon-btn" title="Live Preview">
              <i data-lucide="external-link"></i>
            </a>
            <a href="${proj.githubUrl || '#'}" target="_blank" rel="noopener" class="icon-btn" title="GitHub Code">
              <i data-lucide="github"></i>
            </a>
          </div>
        </div>

        <div class="project-body">
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>

          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.shortDesc}</p>

          <button class="btn btn-secondary open-modal-btn" data-project-id="${proj.id}" style="margin-top: auto; width: 100%;">
            <span>Project Details</span>
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();

    // Attach modal trigger click events
    grid.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute('data-project-id');
        if (window.openProjectModal) {
          window.openProjectModal(pid);
        }
      });
    });
  }

  function initProjects() {
    renderProjects();

    // Filter Tabs
    const filterTabs = document.getElementById('projectsFilterTabs');
    if (filterTabs) {
      filterTabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.filter-tab');
        if (!tab) return;

        filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        activeCategory = tab.getAttribute('data-category');
        renderProjects();
        if (window.playAudioEffect) window.playAudioEffect('click');
      });
    }

    // Search Input
    const searchInput = document.getElementById('projectsSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderProjects();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initProjects);
})();
