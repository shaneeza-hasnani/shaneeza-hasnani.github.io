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

const projectCards = [...document.querySelectorAll('.story')];
const caseGrid = document.querySelector('.case-grid');

if (caseGrid && projectCards.length) {
  const filters = document.createElement('div');
  filters.className = 'project-filters';
  filters.setAttribute('role', 'group');
  filters.setAttribute('aria-label', 'Filter projects by language');
  filters.innerHTML = ['all', 'python', 'sql', 'r', 'typescript'].map((name, index) =>
    `<button type="button" class="filter${index === 0 ? ' active' : ''}" data-filter="${name}" aria-pressed="${index === 0}">${name}</button>`
  ).join('');

  const status = document.createElement('p');
  status.className = 'filter-status';
  status.setAttribute('aria-live', 'polite');
  status.textContent = `Showing all ${projectCards.length} projects`;
  caseGrid.before(filters, status);
  const viewport = document.createElement('div');
  viewport.className = 'marquee-viewport';
  caseGrid.parentNode.insertBefore(viewport, caseGrid);
  viewport.append(caseGrid);
  caseGrid.classList.add('marquee-track');
  const firstSet = document.createElement('div');
  firstSet.className = 'marquee-set';
  projectCards.forEach(card => firstSet.append(card));
  caseGrid.append(firstSet);
  const secondSet = document.createElement('div');
  secondSet.className = 'marquee-set marquee-duplicate';
  secondSet.setAttribute('aria-hidden', 'true');
  secondSet.inert = true;
  caseGrid.append(secondSet);
  const controls = document.createElement('div');
  controls.className = 'marquee-controls';
  controls.innerHTML = '<span>SCROLLING PROJECTS</span><button type="button" class="marquee-pause" aria-pressed="false" aria-label="Pause automatic scrolling">Pause ⏸</button>';
  viewport.after(controls);
  const pauseButton = controls.querySelector('button');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let manuallyPaused = false;
  let visibleCards = [...projectCards];
  function renderMarquee() {
    firstSet.replaceChildren(...visibleCards);
    secondSet.replaceChildren();
    visibleCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.removeAttribute('id');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      secondSet.append(clone);
    });
    const shouldAnimate = visibleCards.length > 1 && !reduceMotion.matches && !manuallyPaused;
    viewport.classList.toggle('marquee-static', !shouldAnimate);
    caseGrid.style.setProperty('--marquee-duration', `${Math.max(18, visibleCards.length * 7)}s`);
    pauseButton.disabled = reduceMotion.matches || visibleCards.length <= 1;
    pauseButton.textContent = manuallyPaused ? 'Play ▶' : 'Pause ⏸';
    pauseButton.setAttribute('aria-pressed', String(manuallyPaused));
  }
  pauseButton.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    renderMarquee();
  });
  reduceMotion.addEventListener('change', renderMarquee);

  projectCards.forEach((card, index) => {
    const title = card.querySelector('h3')?.textContent || `project ${index + 1}`;
    const type = card.querySelector('.story-type')?.textContent.toLowerCase() || '';
    card.dataset.tech = ['python', 'sql', 'r', 'typescript'].filter(language =>
      language === 'r' ? /(^|[^a-z])r([^a-z]|$)/.test(type) : type.includes(language)
    ).join(' ');

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'story-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', `Read the story for ${title}`);
    toggle.textContent = 'Read the story';
    toggle.addEventListener('click', () => {
      const open = card.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      const details = card.querySelector('.story-beats');
      if (details) details.hidden = !open;
      toggle.textContent = open ? 'Close the story' : 'Read the story';
    });
    const details = card.querySelector('.story-beats');
    if (details) {
      details.id = `project-details-${index + 1}`;
      toggle.setAttribute('aria-controls', details.id);
      details.hidden = true;
    }
    card.querySelector('.story-copy')?.append(toggle);
  });

  filters.addEventListener('click', event => {
    const button = event.target.closest('.filter');
    if (!button) return;
    const selected = button.dataset.filter;
    filters.querySelectorAll('.filter').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    visibleCards = projectCards.filter(card => selected === 'all' || card.dataset.tech.split(' ').includes(selected));
    status.textContent = selected === 'all'
      ? `Showing all ${visibleCards.length} projects`
      : `Showing ${visibleCards.length} ${selected.toUpperCase()} project${visibleCards.length === 1 ? '' : 's'}`;
    renderMarquee();
  });
  renderMarquee();
}
