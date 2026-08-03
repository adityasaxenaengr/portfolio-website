
(function () {
  let currentCategory = 'all';
  let searchQuery = '';

  function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid || !window.PORTFOLIO_DATA) return;

    const skills = window.PORTFOLIO_DATA.skills || [];

    const filtered = skills.filter(skill => {
      const matchesCat = currentCategory === 'all' || skill.category === currentCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (skill.desc && skill.desc.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);" class="glass-card">
          <i data-lucide="search-x" style="width: 48px; height: 48px; margin-bottom: 12px; color: var(--accent-rose);"></i>
          <p>No skills found matching "${searchQuery}". Try a different search term.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    grid.innerHTML = filtered.map(skill => `
      <div class="skill-card glass-card reveal-up in">
        <div class="skill-icon-wrapper">
          <i data-lucide="${skill.icon || 'code'}"></i>
        </div>
        <div class="skill-info">
          <div class="skill-header-row">
            <span class="skill-name">${skill.name}</span>
          </div>
          ${skill.desc ? `<p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">${skill.desc}</p>` : ''}
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  function initSkills() {
    renderSkills();

    const filterTabs = document.getElementById('skillsFilterTabs');
    if (filterTabs) {
      filterTabs.addEventListener('click', (e) => {
        const tab = e.target.closest('.filter-tab');
        if (!tab) return;

        filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        currentCategory = tab.getAttribute('data-category');
        renderSkills();
        if (window.playAudioEffect) window.playAudioEffect('click');
      });
    }

    const searchInput = document.getElementById('skillsSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderSkills();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initSkills);
})();
