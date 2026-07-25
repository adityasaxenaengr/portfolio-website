/**
 * CERTIFICATIONS SECTION & AUTHENTIC MODAL VIEWER COMPONENT
 * Renders verified certification cards and realistic certificate document modal
 */

(function () {
  function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    if (!grid || !window.PORTFOLIO_DATA) return;

    const certs = window.PORTFOLIO_DATA.certifications || [];

    grid.innerHTML = certs.map(cert => `
      <div class="cert-card glass-card" data-cert-id="${cert.id}" style="cursor: pointer;">
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
          <span class="cert-click-hint"><i data-lucide="eye"></i> Tap to View</span>
        </div>
      </div>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Add Click Listeners to open Certificate Modal
    document.querySelectorAll('.cert-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-cert-id');
        openCertificateModal(id);
      });
    });
  }

  function openCertificateModal(certId) {
    const certs = window.PORTFOLIO_DATA ? window.PORTFOLIO_DATA.certifications || [] : [];
    const cert = certs.find(c => c.id === certId) || certs[0];
    if (!cert) return;

    const modal = document.getElementById('certificateModal');
    const modalBody = document.getElementById('certModalBody');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="official-certificate-container" id="printableCertificate">
        <div class="cert-inner-border">
          <div class="cert-corner top-left"></div>
          <div class="cert-corner top-right"></div>
          <div class="cert-corner bottom-left"></div>
          <div class="cert-corner bottom-right"></div>

          <div class="cert-official-header">
            <div class="cert-org-logo">${cert.issuerLogo}</div>
            <div class="cert-org-name">${cert.issuer.toUpperCase()}</div>
            <div class="cert-main-heading">CERTIFICATE OF ACHIEVEMENT</div>
            <div class="cert-sub-heading">THIS IS PROUDLY PRESENTED TO</div>
          </div>

          <div class="cert-recipient-name">ADITYA SAXENA</div>

          <p class="cert-official-statement">
            For successfully completing and demonstrating exceptional skill, competence, and algorithmic mastery in 
            <strong>${cert.title}</strong>.
          </p>

          <div class="cert-skills-badge-list">
            ${cert.skills.map(s => `<span class="cert-official-skill">${s}</span>`).join(' • ')}
          </div>

          <div class="cert-footer-section">
            <div class="cert-footer-col">
              <div class="cert-detail-lbl">ISSUE DATE</div>
              <div class="cert-detail-val">${cert.date}</div>
              <div class="cert-detail-lbl" style="margin-top: 10px;">CREDENTIAL ID</div>
              <div class="cert-detail-val code-val">${cert.credId}</div>
            </div>

            <div class="cert-seal-wrapper">
              <div class="official-gold-seal">
                <i data-lucide="award"></i>
                <span>VERIFIED</span>
                <small>OFFICIAL</small>
              </div>
            </div>

            <div class="cert-footer-col text-right">
              <div class="cert-signature-line">
                <div class="sig-font">Authorized Signatory</div>
                <div class="cert-detail-lbl">CERTIFICATION BOARD</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cert-modal-actions">
        <button class="btn btn-primary" id="printCertBtn">
          <i data-lucide="printer"></i>
          <span>Print Certificate</span>
        </button>
        <button class="btn btn-secondary" id="downloadCertBtn">
          <i data-lucide="download"></i>
          <span>Download Certificate</span>
        </button>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    if (window.lucide) {
      window.lucide.createIcons();
    }
    if (window.playAudioEffect) {
      window.playAudioEffect('open');
    }

    // Print Button Action
    document.getElementById('printCertBtn')?.addEventListener('click', () => {
      window.print();
    });

    // Download Button Action
    document.getElementById('downloadCertBtn')?.addEventListener('click', () => {
      if (window.showToast) {
        window.showToast(`Downloading ${cert.title} Certificate...`, 'success');
      }
      const certText = `====================================================\nCERTIFICATE OF ACHIEVEMENT\n====================================================\nThis is to certify that ADITYA SAXENA has successfully earned the ${cert.title} from ${cert.issuer}.\nIssued: ${cert.date}\nCredential ID: ${cert.credId}\n====================================================`;
      const blob = new Blob([certText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Aditya_Saxena_${cert.id}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  function initCertModalClose() {
    const modal = document.getElementById('certificateModal');
    const closeBtn = document.getElementById('certModalClose');
    const backdrop = document.getElementById('certModalBackdrop');

    const closeModal = () => {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (window.playAudioEffect) window.playAudioEffect('close');
    };

    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal?.classList.contains('open')) {
        closeModal();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCertifications();
    initCertModalClose();
  });
})();
