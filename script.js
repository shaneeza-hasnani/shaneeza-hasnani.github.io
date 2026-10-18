// Portfolio navigation and accessible project filtering.
const pages = [...document.querySelectorAll('main > section')];
const links = [...document.querySelectorAll('header nav a[href^="#"]')];
function showPage() {
  const hash = location.hash.slice(1) || 'top';
  const active = pages.find(page => page.id === hash) || pages[0];
  pages.forEach(page => { page.hidden = page !== active; });
  links.forEach(link => {
    if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  window.scrollTo({top: 0, behavior: 'instant'});
}
addEventListener('hashchange', showPage);
showPage();

const projectCards = [...document.querySelectorAll('.work .story')];
const caseGrid = document.querySelector('.work .case-grid');
if (caseGrid && projectCards.length) {
  const filters = document.createElement('div');
  filters.className = 'project-filters';
  filters.setAttribute('role', 'group');
  filters.setAttribute('aria-label', 'Filter projects by technology');
  const filterNames = ['all', 'python', 'sql', 'r', 'typescript'];
  filters.innerHTML = filterNames.map((name, index) =>
    `<button type="button" class="filter${index === 0 ? ' active' : ''}" data-filter="${name}" aria-pressed="${index === 0}">${name === 'all' ? 'All projects' : name === 'typescript' ? 'TypeScript' : name.toUpperCase()}</button>`
  ).join('');
  const status = document.createElement('p');
  status.className = 'filter-status';
  status.setAttribute('aria-live', 'polite');
  caseGrid.before(filters, status);

  projectCards.forEach((card, index) => {
    const title = card.querySelector('h3')?.textContent || `Project ${index + 1}`;
    const type = card.querySelector('.story-type')?.textContent.toLowerCase() || '';
    card.dataset.tech = ['python', 'sql', 'r', 'typescript'].filter(language =>
      language === 'r' ? /(^|[^a-z])r([^a-z]|$)/.test(type) : type.includes(language)
    ).join(' ');
    // Editorial thumbnails are decorative abstractions, never miniature live apps.
    const patterns = [
      '<rect x="20" y="34" width="58" height="78" rx="5"/><rect x="89" y="51" width="58" height="61" rx="5"/><rect x="158" y="24" width="58" height="88" rx="5"/><path d="M25 135H260"/>',
      '<path d="M22 46L57 54L89 48L119 74L152 78L182 105L212 112L253 140"/><path d="M22 140H253M22 94H253M22 48H253"/>',
      '<rect x="20" y="38" width="70" height="90" rx="5"/><rect x="110" y="38" width="70" height="90" rx="5"/><rect x="200" y="38" width="55" height="90" rx="5"/><path d="M90 82H110M180 82H200"/>',
      '<rect x="42" y="22" width="150" height="124" rx="5"/><path d="M60 48H164M60 68H143M60 88H168M60 108H115"/><circle cx="214" cy="113" r="29"/><path d="M203 113L212 122L227 102"/>',
      '<path d="M24 138L60 95L96 111L132 58L168 76L204 40L246 61"/><path d="M24 138H255M24 28V138"/>',
      '<rect x="32" y="91" width="31" height="48" rx="3"/><rect x="77" y="72" width="31" height="67" rx="3"/><rect x="122" y="48" width="31" height="91" rx="3"/><rect x="167" y="25" width="31" height="114" rx="3"/><rect x="212" y="55" width="31" height="84" rx="3"/>',
      '<circle cx="65" cy="77" r="19"/><circle cx="143" cy="42" r="16"/><circle cx="218" cy="85" r="23"/><circle cx="135" cy="128" r="17"/><path d="M82 69L128 48M159 48L196 74M203 98L152 121M117 122L80 89"/>',
      '<path d="M24 100L40 100L49 54L62 137L77 70L90 110L109 34L126 136L140 82L157 113L178 50L195 128L215 75L235 102L253 102"/>',
      '<rect x="27" y="27" width="222" height="112" rx="8"/><path d="M27 52H249M46 75H103M46 95H149M46 115H87"/><circle cx="217" cy="99" r="18"/>',
      '<circle cx="135" cy="83" r="60"/><path d="M135 23V143M75 83H195"/><path d="M135 83L181 45"/><circle cx="135" cy="83" r="12"/>',
      '<path d="M24 125H252"/><rect x="34" y="83" width="26" height="42" rx="3"/><rect x="75" y="55" width="26" height="70" rx="3"/><rect x="116" y="34" width="26" height="91" rx="3"/><rect x="157" y="69" width="26" height="56" rx="3"/><rect x="198" y="45" width="26" height="80" rx="3"/>'
    ];
    const visual = document.createElement('div');
    visual.className = 'editorial-visual';
    visual.setAttribute('aria-hidden', 'true');
    visual.innerHTML = '<svg viewBox="0 0 280 166" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' + patterns[index % patterns.length] + '</svg>';
    card.querySelector('.story-index')?.after(visual);
    const typeLine = card.querySelector('.story-type');
    if (typeLine) {
      const tech = document.createElement('div');
      tech.className = 'tech-tags';
      typeLine.textContent.split('·').slice(1).join('·').split(/[+,·]/).map(s => s.trim()).filter(Boolean).slice(0,4).forEach(tag => {
        const chip = document.createElement('span');
        chip.textContent = tag;
        tech.append(chip);
      });
      if (tech.childElementCount) card.querySelector('.project-summary')?.after(tech);
    }
    const details = card.querySelector('.story-beats');
    if (details) {
      details.hidden = true;
      details.id = `project-details-${index + 1}`;
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'story-toggle';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', details.id);
      toggle.textContent = 'Read the case study +';
      toggle.addEventListener('click', () => {
        const open = details.hidden;
        details.hidden = !open;
        card.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.textContent = open ? 'Close case study −' : 'Read the case study +';
      });
      card.querySelector('.story-copy')?.append(toggle);
    }
  });
  function filterProjects(selected) {
    let count = 0;
    projectCards.forEach(card => {
      const show = selected === 'all' || card.dataset.tech.split(' ').includes(selected);
      card.hidden = !show;
      if (show) count++;
    });
    status.textContent = selected === 'all' ? `Showing all ${count} projects` : `Showing ${count} ${selected.toUpperCase()} project${count === 1 ? '' : 's'}`;
    filters.querySelectorAll('.filter').forEach(button => {
      const active = button.dataset.filter === selected;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (button) filterProjects(button.dataset.filter);
  });
  filterProjects('all');
}
