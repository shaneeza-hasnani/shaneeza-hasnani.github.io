const progress = document.querySelector('.progress i');
const navLinks = [...document.querySelectorAll('header nav a[href^="#"]')];
const sections = [...document.querySelectorAll('main section[id]')];

function updateProgress() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const percent = max > 0 ? (scrollY / max) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
}

const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => link.toggleAttribute('aria-current', link.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-30% 0px -55%', threshold: [0, .25, .5] });

sections.forEach(section => sectionObserver.observe(section));
addEventListener('scroll', updateProgress, { passive: true });
addEventListener('resize', updateProgress);
updateProgress();

const projectCards = [...document.querySelectorAll('.story')];
const caseGrid = document.querySelector('.case-grid');

if (caseGrid && projectCards.length) {
  const filters = document.createElement('div');
  filters.className = 'project-filters';
  filters.setAttribute('role', 'group');
  filters.setAttribute('aria-label', 'Filter projects by language');
  filters.innerHTML = ['all', 'python', 'sql', 'r'].map((name, index) =>
    `<button type="button" class="filter${index === 0 ? ' active' : ''}" data-filter="${name}" aria-pressed="${index === 0}">${name}</button>`
  ).join('');

  const status = document.createElement('p');
  status.className = 'filter-status';
  status.setAttribute('aria-live', 'polite');
  status.textContent = `Showing all ${projectCards.length} projects`;
  caseGrid.before(filters, status);

  projectCards.forEach((card, index) => {
    const title = card.querySelector('h3')?.textContent || `project ${index + 1}`;
    const type = card.querySelector('.story-type')?.textContent.toLowerCase() || '';
    card.dataset.tech = ['python', 'sql', 'r'].filter(language =>
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
      toggle.textContent = open ? 'Close the story' : 'Read the story';
    });
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
    let visible = 0;
    projectCards.forEach(card => {
      const match = selected === 'all' || card.dataset.tech.split(' ').includes(selected);
      card.hidden = !match;
      if (match) visible += 1;
    });
    status.textContent = selected === 'all'
      ? `Showing all ${visible} projects`
      : `Showing ${visible} ${selected.toUpperCase()} project${visible === 1 ? '' : 's'}`;
  });
}

const freshStyles = document.createElement('link');
freshStyles.rel = 'stylesheet';
freshStyles.href = 'styles.css?v=5';
document.head.append(freshStyles);
