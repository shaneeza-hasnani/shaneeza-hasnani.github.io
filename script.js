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
