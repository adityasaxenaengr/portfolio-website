/**
 * MOBILE APP TAB SWITCHER ENGINE
 * Shows 1 section at a time on mobile screens so users never have long vertical scrolling!
 */

(function () {
  function initMobileAppTabs() {
    const isMobile = window.innerWidth <= 768;
    const mobileNav = document.getElementById('mobileAppTabBar');
    const sections = document.querySelectorAll('main > section');

    if (!isMobile) {
      // On Desktop: ensure all sections are visible normally
      sections.forEach(sec => sec.style.display = '');
      if (mobileNav) mobileNav.style.display = 'none';
      return;
    }

    if (mobileNav) mobileNav.style.display = 'flex';

    // Enable smooth mobile section scrolling
    const tabs = document.querySelectorAll('.mobile-app-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');

        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Scroll to target section smoothly
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  window.addEventListener('resize', initMobileAppTabs);
  document.addEventListener('DOMContentLoaded', initMobileAppTabs);
})();
