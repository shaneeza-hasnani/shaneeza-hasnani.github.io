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
