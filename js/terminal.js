
(function () {
  let outputHistory = [];

  function appendOutput(text, type = 'normal') {
    const outputEl = document.getElementById('terminalOutput');
    if (!outputEl) return;

    const line = document.createElement('div');
    line.style.margin = '4px 0';

    if (type === 'cmd') {
      line.innerHTML = `<span class="term-prompt">aditya@dev:~$</span> <span>${text}</span>`;
    } else if (type === 'error') {
      line.innerHTML = `<span style="color: #ef4444;">[ERROR] ${text}</span>`;
    } else if (type === 'success') {
      line.innerHTML = `<span style="color: #10b981;">[SUCCESS] ${text}</span>`;
    } else {
      line.innerHTML = text;
    }

    outputEl.appendChild(line);
    const body = document.getElementById('terminalBody');
    if (body) body.scrollTop = body.scrollHeight;
  }

  function handleCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    appendOutput(cmdRaw, 'cmd');

    const args = cmd.split(' ');
    const mainCmd = args[0];

    switch (mainCmd) {
      case 'help':
        appendOutput(`
          <div style="color: #cbd5e1; margin: 8px 0;">
            <strong>Available Terminal Commands:</strong><br>
            • <span class="term-highlight">about</span>      - Short bio & background<br>
            • <span class="term-highlight">skills</span>     - List key technologies & proficiencies<br>
            • <span class="term-highlight">projects</span>   - View featured portfolio projects<br>
            • <span class="term-highlight">contact</span>    - Print contact information<br>
            • <span class="term-highlight">resume</span>     - Open resume document viewer<br>
            • <span class="term-highlight">matrix</span>     - Run matrix digital rain effect<br>
            • <span class="term-highlight">theme</span>      - Toggle light/dark UI theme<br>
            • <span class="term-highlight">clear</span>      - Clear terminal screen<br>
            • <span class="term-highlight">sudo</span>       - Request root privileges
          </div>
        `);
        break;

      case 'about':
        appendOutput(`
          <span style="color: #f8fafc;">Aditya Saxena</span> — Full-Stack Developer & Software Engineer.<br>
          B.Tech CSE student passionate about Full-Stack Web Development, Python, and Java.
        `);
        break;

      case 'skills':
        if (window.PORTFOLIO_DATA) {
          const skillsList = window.PORTFOLIO_DATA.skills.slice(0, 8).map(s => `• <span class="term-highlight">${s.name}</span> — ${s.desc}`).join('<br>');
          appendOutput(`<strong>Technical Stack:</strong><br>${skillsList}`);
        }
        break;

      case 'projects':
        if (window.PORTFOLIO_DATA) {
          const projs = window.PORTFOLIO_DATA.projects.map(p => `• <span class="term-highlight">${p.title}</span> — ${p.shortDesc}`).join('<br>');
          appendOutput(`<strong>Featured Work:</strong><br>${projs}`);
        }
        break;

      case 'contact':
        appendOutput(`
          Email: <a href="mailto:adityasaxena.engr@gmail.com" style="color: #38bdf8;">adityasaxena.engr@gmail.com</a><br>
          Location: Bareilly, Uttar Pradesh, India
        `);
        break;

      case 'resume':
        appendOutput('Opening curriculum vitae modal...', 'success');
        if (window.openResumeModal) window.openResumeModal();
        break;

      case 'theme':
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        appendOutput(`Theme switched to: <strong>${next}</strong>`, 'success');
        break;

      case 'matrix':
        appendOutput('<span style="color: #10b981;">01000001 01000100 01001001 01010100 01011001 01000001 00100000 01010011 01000001 01011000 01000101 01001110 01000001</span>');
        break;

      case 'clear':
        const outputEl = document.getElementById('terminalOutput');
        if (outputEl) outputEl.innerHTML = '';
        break;

      case 'sudo':
        appendOutput('Permission denied: User aditya is not in the sudoers file. This incident will be reported to Santa Claus.', 'error');
        break;

      default:
        appendOutput(`Command not recognized: '${mainCmd}'. Type <span class="term-highlight">'help'</span> for list of commands.`, 'error');
        break;
    }
  }

  function initTerminal() {
    const backdrop = document.getElementById('terminalModalBackdrop');
    const input = document.getElementById('terminalInput');
    const toggleBtn = document.getElementById('terminalToggleBtn');
    const closeBtn = document.getElementById('closeTerminalBtn');

    if (!backdrop || !input) return;

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        backdrop.classList.add('open');
        input.focus();
        if (window.playAudioEffect) window.playAudioEffect('open');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        backdrop.classList.remove('open');
      });
    }

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value;
        input.value = '';
        handleCommand(val);
        if (window.playAudioEffect) window.playAudioEffect('click');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initTerminal);
})();
