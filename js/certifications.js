
(function () {
  function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    if (!grid || !window.PORTFOLIO_DATA) return;

    const certs = window.PORTFOLIO_DATA.certifications || [];

        grid.innerHTML = certs.map(cert => `
      <div class="cert-card glass-card ${cert.isComingSoon ? 'coming-soon-card' : ''}" data-cert-id="${cert.id}" style="cursor: ${cert.isComingSoon ? 'default' : 'pointer'};">
        <div class="cert-header">
          <div class="cert-issuer-badge">
            <span class="cert-logo">${cert.issuerLogo}</span>
            <div>
              <h3 class="cert-title">${cert.title}</h3>
              <div class="cert-issuer">${cert.issuer}</div>
            </div>
          </div>
          ${cert.isComingSoon ? `<span class="cert-verified-badge" style="color: #F59E0B; background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.25);"><i data-lucide="clock"></i> Coming Soon</span>` : `<span class="cert-verified-badge" title="Verified Credential"><i data-lucide="shield-check"></i> Verified</span>`}
        </div>

        <p class="cert-desc">${cert.description}</p>

        <div class="cert-skills">
          ${cert.skills.map(s => `<span class="tag-pill">${s}</span>`).join('')}
        </div>

        <div class="cert-footer">
          <span class="cert-id">ID: <code>${cert.credId}</code></span>
          ${cert.isComingSoon ? `<span class="cert-click-hint" style="color: var(--text-muted); opacity: 0.75;"><i data-lucide="clock"></i> Verification Pending</span>` : `<span class="cert-click-hint"><i data-lucide="eye"></i> Tap to View</span>`}
        </div>
      </div>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }

    document.querySelectorAll('.cert-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-cert-id');
        const cert = certs.find(c => c.id === id);
        if (cert && cert.isComingSoon) {
          if (window.showToast) {
            window.showToast('Certificate verification in progress. Real document will be available soon.', 'info');
          }
          return;
        }
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

    document.getElementById('printCertBtn')?.addEventListener('click', () => {
      const certContainer = document.querySelector('.official-certificate-container') || document.getElementById('certModalBody');
      const certHtml = certContainer.outerHTML;
      const printWin = window.open('', '_blank');
      printWin.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Aditya's ${cert.title} Certificate</title>
            <link rel="stylesheet" href="css/styles.css">
            <style>
              body { background: #0B1220 !important; color: #F8FAFC !important; padding: 40px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
              .official-certificate-container { width: 100%; max-width: 800px; }
              @media print {
                body { background: #0B1220 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              }
            </style>
          </head>
          <body>
            ${certHtml}
            <script>
              setTimeout(() => { window.print(); window.close(); }, 500);
            </script>
          </body>
        </html>
      `);
      printWin.document.close();
    });

    document.getElementById('downloadCertBtn')?.addEventListener('click', () => {
      const certContainer = document.querySelector('.official-certificate-container') || document.getElementById('certModalBody');
      const cleanTitle = cert.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
      const fileName = `aditya's_${cleanTitle}_certificate.pdf`;

      if (window.showToast) {
        window.showToast(`Generating ${fileName}...`, 'success');
      }

      if (window.html2pdf) {
        const opt = {
          margin:       0.2,
          filename:     fileName,
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#0B1220' },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
        };
        window.html2pdf().set(opt).from(certContainer).save();
      } else {
        const certHtml = certContainer.outerHTML;
        const printWin = window.open('', '_blank');
        printWin.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${fileName}</title>
              <link rel="stylesheet" href="css/styles.css">
              <style>
                body { background: #0B1220 !important; color: #F8FAFC !important; padding: 40px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                .official-certificate-container { width: 100%; max-width: 800px; }
              </style>
            </head>
            <body>
              ${certHtml}
              <script>
                setTimeout(() => { window.print(); window.close(); }, 500);
              </script>
            </body>
          </html>
        `);
        printWin.document.close();
      }
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
