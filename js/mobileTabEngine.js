
(function () {
  function initMobileAppTabs() {
    const isMobile = window.innerWidth <= 768;
    const mobileNav = document.getElementById('mobileAppTabBar');
    const sections = document.querySelectorAll('main > section');

    if (!isMobile) {

      sections.forEach(sec => sec.style.display = '');
      if (mobileNav) mobileNav.style.display = 'none';
      return;
    }

    if (mobileNav) mobileNav.style.display = 'flex';

    const tabs = document.querySelectorAll('.mobile-app-tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');

        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

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
