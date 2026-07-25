/**
 * CERTIFICATIONS SECTION COMPONENT
 * Renders verified certification cards dynamically
 */

(function () {
  function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    if (!grid || !window.PORTFOLIO_DATA) return;

    const certs = window.PORTFOLIO_DATA.certifications || [];

    grid.innerHTML = certs.map(cert => `
      <div class="cert-card glass-card">
        <div class="cert-header">
          <div class="cert-issuer-badge">
            <span class="cert-logo">${cert.issuerLogo}</span>
            <div>
              <h3 class="cert-title">${cert.title}</h3>
              <div class="cert-issuer">${cert.issuer}</div>
            </div>
          </div>
          <span class="cert-verified-badge" title="Verified Credential">
            <i data-lucide="shield-check"></i> Verified
          </span>
        </div>

        <p class="cert-desc">${cert.description}</p>

        <div class="cert-skills">
          ${cert.skills.map(s => `<span class="tag-pill">${s}</span>`).join('')}
        </div>

        <div class="cert-footer">
          <span class="cert-id">ID: <code>${cert.credId}</code></span>
          <span class="cert-date">Issued ${cert.date}</span>
        </div>
      </div>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  document.addEventListener('DOMContentLoaded', renderCertifications);
})();
