/* ================================================================
   SHANEEZA HASNANI — DATA SCIENTIST PORTFOLIO
   script.js — All interactivity
   ================================================================ */

'use strict';

/* ================================================================
   PROJECT DATA
   ================================================================ */
const PROJECT_DATA = {
    'titanic-survival': {
        title: 'Titanic Survival Prediction',
        badge: 'Machine Learning',
        tech: ['Python', 'Logistic Regression', 'Scikit-learn', 'Pandas', 'NumPy'],
        githubLink: 'https://github.com/shaneeza-hasnani/titanic-survival-prediction',
        sections: [
            {
                title: 'Overview',
                content: `<p>This machine learning project predicts whether passengers aboard the RMS Titanic would have survived based on various features like age, gender, passenger class, and ticket fare.</p>
                <p>Using logistic regression, the model analyzes historical Titanic passenger data to understand the factors that influenced survival rates during the tragic disaster.</p>`
            },
            {
                title: 'What I Built',
                content: `<ul>
                    <li>A predictive model using logistic regression to classify survival outcomes</li>
                    <li>Feature engineering to extract meaningful patterns from passenger data</li>
                    <li>Data preprocessing pipeline to handle missing values and categorical variables</li>
                    <li>Model evaluation using accuracy, precision, and recall metrics</li>
                </ul>`
            },
            {
                title: 'Key Features Analyzed',
                content: `<p>The model considers several important factors:</p>
                <ul>
                    <li><strong>Passenger Class:</strong> First, second, or third class ticket</li>
                    <li><strong>Gender:</strong> Male or female passenger</li>
                    <li><strong>Age:</strong> Passenger age in years</li>
                    <li><strong>Family Aboard:</strong> Number of siblings/spouses and parents/children</li>
                    <li><strong>Fare:</strong> Ticket price paid by the passenger</li>
                    <li><strong>Embarkation Port:</strong> Where the passenger boarded the ship</li>
                </ul>`
            },
            {
                title: 'Results and Insights',
                content: `<p>The analysis revealed several key survival patterns:</p>
                <ul>
                    <li>Women and children had significantly higher survival rates</li>
                    <li>First class passengers were more likely to survive than third class</li>
                    <li>Passengers traveling with family had different survival patterns</li>
                    <li>The model achieved strong predictive accuracy on test data</li>
                </ul>`
            }
        ]
    },
    'fraud-disclosure': {
        title: 'Fraud Disclosure Event Study',
        badge: 'Event Study',
        tech: ['Python', 'Pandas', 'NumPy', 'Financial Analysis', 'Statistics'],
        githubLink: 'https://github.com/shaneeza-hasnani/fraud-disclosure-event-study',
        sections: [
            {
                title: 'Overview',
                content: `<p>This event study analyzes how stock markets react to corporate fraud disclosures using the Fama-French Three-Factor Model. The research examines abnormal returns around fraud announcement dates to understand investor responses to fraud revelations.</p>
                <p>The study provides insights into market efficiency and investor behavior when companies publicly disclose fraudulent activities.</p>`
            },
            {
                title: 'Research Methodology',
                content: `<ul>
                    <li>Event study framework with defined event windows around disclosure dates</li>
                    <li>Fama-French Three-Factor Model to calculate expected returns</li>
                    <li>Analysis of abnormal returns (AR) and cumulative abnormal returns (CAR)</li>
                    <li>Statistical significance testing of market reactions</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<p>The analysis revealed important patterns in market reactions:</p>
                <ul>
                    <li>Significant negative abnormal returns following fraud disclosures</li>
                    <li>Market reaction timing and magnitude varied by fraud type and severity</li>
                    <li>Evidence of information leakage prior to official announcements</li>
                    <li>Longer-term impacts on stock performance and volatility</li>
                </ul>`
            },
            {
                title: 'Implications',
                content: `<p>This research contributes to understanding:</p>
                <ul>
                    <li>How markets price fraud risk and reputational damage</li>
                    <li>The effectiveness of corporate governance and disclosure policies</li>
                    <li>Investor sentiment and confidence following fraud revelations</li>
                    <li>Risk management strategies for detecting early warning signs</li>
                </ul>`
            }
        ]
    },
    'wmata-ridership': {
        title: 'WMATA Ridership Analysis',
        badge: 'Data Analysis',
        tech: ['R', 'ggplot2', 'dplyr', 'Exploratory Data Analysis'],
        githubLink: 'https://github.com/shaneeza-hasnani/wmata-ridership-analysis',
        sections: [
            {
                title: 'Overview',
                content: `<p>This exploratory data analysis examines ridership patterns at Washington DC Metro stations, with a specific focus on American University and George Washington University stations. The analysis explores how weekday versus holiday patterns affect metro usage at university locations.</p>`
            },
            {
                title: 'Analysis Approach',
                content: `<ul>
                    <li>Time series analysis of daily ridership data</li>
                    <li>Comparison of weekday and weekend/holiday patterns</li>
                    <li>Seasonal trend identification and decomposition</li>
                    <li>Station-specific ridership characteristics</li>
                </ul>`
            },
            {
                title: 'Key Insights',
                content: `<ul>
                    <li><strong>Academic Calendar Impact:</strong> Clear correlation between university schedules and ridership</li>
                    <li><strong>Weekday vs. Holiday:</strong> Significant differences in usage patterns</li>
                    <li><strong>Peak Hours:</strong> Morning and evening commute times show highest ridership</li>
                    <li><strong>Seasonal Variations:</strong> Lower ridership during summer and winter breaks</li>
                </ul>`
            },
            {
                title: 'Applications',
                content: `<p>These findings can inform metro service frequency adjustments, resource allocation during peak academic periods, and student transportation planning.</p>`
            }
        ]
    },
    'nyc-job-salary': {
        title: 'NYC Job Salary and Career Analysis',
        badge: 'Statistical Analysis',
        tech: ['R', 'Linear Regression', 'Statistical Modeling', 'Data Visualization'],
        githubLink: 'https://github.com/shaneeza-hasnani/nyc-job-salary-career-analysis',
        sections: [
            {
                title: 'Overview',
                content: `<p>This statistical analysis examines the relationship between career level and salary in New York City job postings. Using regression methods, the study quantifies how different career stages correlate with compensation.</p>`
            },
            {
                title: 'Statistical Methods',
                content: `<ul>
                    <li><strong>Multiple Linear Regression:</strong> Modeling salary as a function of career level</li>
                    <li><strong>Hypothesis Testing:</strong> Testing significance of career level coefficients</li>
                    <li><strong>Model Diagnostics:</strong> Checking assumptions and model fit</li>
                    <li><strong>Confidence Intervals:</strong> Quantifying uncertainty in estimates</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<ul>
                    <li>Statistically significant relationship between career level and salary</li>
                    <li>Quantified salary increases for each career advancement stage</li>
                    <li>Industry and location variations in the career-salary relationship</li>
                    <li>Evidence-based salary benchmarks for NYC job market</li>
                </ul>`
            }
        ]
    },
    'linkedin-skills': {
        title: 'LinkedIn Job Skills and Salary Analytics',
        badge: 'Labor Analytics',
        tech: ['R', 'Data Mining', 'Text Analysis', 'Market Research'],
        githubLink: 'https://github.com/shaneeza-hasnani/linkedin-job-skills-salary-analytics',
        sections: [
            {
                title: 'Overview',
                content: `<p>This labor market analytics project examines LinkedIn job postings to identify high-value skill bundles and their relationship to industry, experience level, and salary.</p>`
            },
            {
                title: 'Analytical Approach',
                content: `<ul>
                    <li><strong>Text Mining:</strong> Extracting skills from job descriptions</li>
                    <li><strong>Association Analysis:</strong> Finding skill bundles that appear together</li>
                    <li><strong>Regression Analysis:</strong> Modeling the relationship between skills and salary</li>
                    <li><strong>Clustering:</strong> Grouping similar job profiles and skill sets</li>
                </ul>`
            },
            {
                title: 'Key Insights',
                content: `<ul>
                    <li>Specific skill combinations that command premium salaries</li>
                    <li>Industry-specific skill requirements and compensation trends</li>
                    <li>Skills that provide the highest return on investment</li>
                    <li>Emerging skills gaining traction in the job market</li>
                </ul>`
            }
        ]
    },
    'spotify-analysis': {
        title: 'Spotify Audio Features Analysis',
        badge: 'Regression Analysis',
        tech: ['R', 'Regression Modeling', 'Data Visualization', 'Statistical Analysis'],
        githubLink: 'https://github.com/shaneeza-hasnani/spotify-audio-features-analysis',
        sections: [
            {
                title: 'Overview',
                content: `<p>This project analyzes Spotify song data to examine how various audio features and genre relate to song energy levels. Using regression modeling in R, the study quantifies the relationships between musical characteristics and energy.</p>`
            },
            {
                title: 'Audio Features Analyzed',
                content: `<ul>
                    <li><strong>Acousticness:</strong> Confidence measure of whether the track is acoustic</li>
                    <li><strong>Danceability:</strong> How suitable a track is for dancing</li>
                    <li><strong>Valence:</strong> Musical positiveness conveyed by a track</li>
                    <li><strong>Tempo:</strong> Overall estimated tempo in beats per minute</li>
                    <li><strong>Loudness:</strong> Overall loudness of a track in decibels</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<ul>
                    <li>Strong relationships between certain audio features and energy levels</li>
                    <li>Genre-specific patterns in how features relate to energy</li>
                    <li>Predictive model for estimating song energy from audio features</li>
                    <li>Insights into the musical characteristics that define energetic songs</li>
                </ul>`
            }
        ]
    }
};

/* ================================================================
   UTILITIES
   ================================================================ */
function lerp(a, b, t) { return a + (b - a) * t; }
function isMobile() { return window.innerWidth <= 768; }

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}


/* ================================================================
   SCROLL PROGRESS
   ================================================================ */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total    = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
    }, { passive: true });
}

/* ================================================================
   NAVIGATION
   ================================================================ */
function initNavigation() {
    const navbar    = document.getElementById('navbar');
    const hamburger = document.getElementById('nav-hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay   = document.getElementById('mobile-overlay');
    const backToTop = document.getElementById('back-to-top');
    const sections  = document.querySelectorAll('section[id]');

    // Scroll effects
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (navbar)    navbar.classList.toggle('scrolled', scrollY > 30);
        if (backToTop) backToTop.classList.toggle('visible', scrollY > 400);

        // Active link detection
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }, { passive: true });

    // Back to top
    if (backToTop) {
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Mobile nav
    function openMobileNav() {
        hamburger && hamburger.classList.add('active');
        hamburger && hamburger.setAttribute('aria-expanded', 'true');
        mobileNav && mobileNav.classList.add('active');
        overlay   && overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        hamburger && hamburger.classList.remove('active');
        hamburger && hamburger.setAttribute('aria-expanded', 'false');
        mobileNav && mobileNav.classList.remove('active');
        overlay   && overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', () => {
        mobileNav && mobileNav.classList.contains('active') ? closeMobileNav() : openMobileNav();
    });
    if (overlay) overlay.addEventListener('click', closeMobileNav);

    document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMobileNav));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}


/* ================================================================
   HERO ENTRANCE
   ================================================================ */
function runHeroEntrance() {
    const els = ['.hero-subtitle', '.hero-name', '.hero-tagline',
                 '.hero-stats-row', '.hero-cta-row', '.hero-social-row'];

    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        els.forEach((sel, i) => {
            tl.to(sel, { y: 0, opacity: 1, duration: i === 1 ? 0.7 : 0.55 }, i === 0 ? 0 : '-=0.3');
        });
        tl.add(() => { animateHeroCounters(); }, 0.5);
    } else {
        // Fallback — just reveal
        els.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) { el.style.opacity = '1'; el.style.transform = 'none'; }
        });
        animateHeroCounters();
    }
}

/* ================================================================
   HERO COUNTERS
   ================================================================ */
function animateHeroCounters() {
    document.querySelectorAll('.hero-stat-num').forEach(el => {
        const target = parseInt(el.dataset.val, 10);
        const start  = performance.now();
        const dur    = 1200;
        function tick(now) {
            const t = Math.min((now - start) / dur, 1);
            el.textContent = Math.round((1 - Math.pow(1 - t, 3)) * target);
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = target;
        }
        requestAnimationFrame(tick);
    });
}

/* ================================================================
   ABOUT COUNTERS
   ================================================================ */
function initCounters() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || entry.target.dataset.animated) return;
            entry.target.dataset.animated = '1';
            const numEl  = entry.target.querySelector('.counter-num');
            const target = parseInt(entry.target.dataset.count, 10);
            const suffix = entry.target.dataset.suffix || '';
            const start  = performance.now();
            function tick(now) {
                const t = Math.min((now - start) / 1400, 1);
                numEl.textContent = Math.round((1 - Math.pow(1 - t, 3)) * target) + (t >= 1 ? suffix : '');
                if (t < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter-card').forEach(c => observer.observe(c));
}

/* ================================================================
   TERMINAL TYPEWRITER
   ================================================================ */
function initTerminal() {
    const body = document.getElementById('terminal-body');
    if (!body) return;

    const lines = [
        { type: 'prompt', text: 'whoami' },
        { type: 'output', text: 'shaneeza_hasnani — CFE · Data Scientist · ML Engineer' },
        { type: 'blank' },
        { type: 'prompt', text: 'cat about.txt' },
        { type: 'output', text: 'Drawn to the puzzles hidden in data:' },
        { type: 'output', text: 'outliers, patterns, and the stories numbers tell.' },
        { type: 'output', text: 'Bridging fraud examination with machine learning.' },
        { type: 'blank' },
        { type: 'prompt', text: 'ls specialization/' },
        { type: 'output', text: 'fraud-analytics/  machine-learning/  data-viz/' },
        { type: 'blank' },
        { type: 'prompt', text: 'echo $STATUS' },
        { type: 'green',  text: 'AVAILABLE_FOR_DATA_SCIENCE_ROLES' },
    ];

    new IntersectionObserver((entries, obs) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        typeLines(lines, body, 0);
    }, { threshold: 0.3 }).observe(body);
}

function typeLines(lines, container, idx) {
    if (idx >= lines.length) {
        const c = document.createElement('span');
        c.className = 't-cursor';
        container.appendChild(c);
        return;
    }

    const line   = lines[idx];
    const lineEl = document.createElement('div');

    if (line.type === 'blank') {
        lineEl.innerHTML = '&nbsp;';
        container.appendChild(lineEl);
        setTimeout(() => typeLines(lines, container, idx + 1), 120);
        return;
    }

    container.appendChild(lineEl);

    const isPrompt  = line.type === 'prompt';
    const isGreen   = line.type === 'green';
    const charDelay = isPrompt ? 48 : 20;
    const pauseAfter = isPrompt ? 280 : 90;

    if (isPrompt) {
        lineEl.innerHTML = '<span class="t-prompt">shaneeza@datalab</span><span style="color:#475569">:</span><span class="t-cmd">~</span><span style="color:#94A3B8"> $ </span>';
    } else if (isGreen) {
        lineEl.style.color = '#10B981';
    } else {
        lineEl.style.opacity = '0.7';
    }

    const textSpan = document.createElement('span');
    if (isPrompt) textSpan.className = 't-cmd';
    lineEl.appendChild(textSpan);

    const cursor = document.createElement('span');
    cursor.className = 't-cursor';
    lineEl.appendChild(cursor);

    let charIdx = 0;
    const text  = line.text;

    function typeChar() {
        if (charIdx < text.length) {
            textSpan.textContent += text[charIdx++];
            setTimeout(typeChar, charDelay + Math.random() * 18);
        } else {
            cursor.remove();
            setTimeout(() => typeLines(lines, container, idx + 1), pauseAfter);
        }
    }

    typeChar();
}


/* ================================================================
   PROGRESS BARS
   ================================================================ */
function initProgressBars() {
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.4 }).observe(document.querySelector('.skills-bars-panel') || document.body);

    // Per-bar observer for precise timing
    document.querySelectorAll('.bar-fill').forEach(bar => {
        new IntersectionObserver((entries, obs) => {
            if (entries[0].isIntersecting) {
                bar.classList.add('animate');
                obs.disconnect();
            }
        }, { threshold: 0.5 }).observe(bar);
    });
}

/* ================================================================
   MINI SPARKLINES
   ================================================================ */
function initSparklines() {
    document.querySelectorAll('.mini-chart').forEach(canvas => {
        const type = canvas.dataset.type;
        const ctx  = canvas.getContext('2d');
        const w = canvas.offsetWidth || 200;
        const h = canvas.offsetHeight || 60;
        canvas.width  = w;
        canvas.height = h;

        let data, color;
        if (type === 'event-study') {
            data  = [50,51,50,49,50,48,46,44,42,38,28,22,20,19,19,20,21,22,23,24];
            color = '#F59E0B';
        } else if (type === 'classification') {
            data  = [50,54,58,63,67,71,74,77,80,82,84,85,86,86,87,87,88,88,89,89];
            color = '#14B8A6';
        } else {
            data  = Array.from({ length: 20 }, (_, i) => 40 + Math.sin(i * 0.6) * 20 + i * 1.5);
            color = '#8B5CF6';
        }

        drawSparkline(ctx, w, h, data, color);
    });
}

function drawSparkline(ctx, w, h, data, color) {
    ctx.clearRect(0, 0, w, h);
    const min = Math.min(...data), max = Math.max(...data);
    const range = max - min || 1;
    const pad = 4;
    const ew  = (w - pad * 2) / (data.length - 1);

    const toY = v => h - pad - ((v - min) / range) * (h - pad * 2);

    // Gradient fill
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, color + '50');
    grad.addColorStop(1, color + '00');

    ctx.beginPath();
    data.forEach((v, i) => {
        const x = pad + i * ew, y = toY(v);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.lineTo(pad + (data.length - 1) * ew, h);
    ctx.lineTo(pad, h);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    data.forEach((v, i) => {
        const x = pad + i * ew, y = toY(v);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth   = 1.5;
    ctx.lineJoin    = 'round';
    ctx.stroke();

    // End dot
    const lastX = pad + (data.length - 1) * ew;
    const lastY = toY(data[data.length - 1]);
    ctx.beginPath();
    ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

/* ================================================================
   PROJECT FILTER
   ================================================================ */
function initProjectFilter() {
    const pills = document.querySelectorAll('.filter-pill');
    const cards = document.querySelectorAll('.project-card');

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const filter = pill.dataset.filter;

            cards.forEach(card => {
                const tags = (card.dataset.filter || '').toLowerCase();
                const show = filter === 'all' || tags.includes(filter);

                card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
                if (show) {
                    card.style.display   = '';
                    requestAnimationFrame(() => {
                        card.style.opacity   = '1';
                        card.style.transform = '';
                    });
                } else {
                    card.style.opacity   = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => { card.style.display = 'none'; }, 220);
                }
            });
        });
    });
}

/* ================================================================
   PROJECT MODAL
   ================================================================ */
function initProjectModal() {
    const modal    = document.getElementById('project-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('modal-close');
    const bodyEl   = document.getElementById('modal-body');
    if (!modal) return;

    function openModal(projectId) {
        const project = PROJECT_DATA[projectId];
        if (!project) return;

        let html = `
            <span class="modal-badge">${project.badge}</span>
            <h2 class="modal-title" id="modal-title">${project.title}</h2>
            <div class="modal-tech-stack">
                ${project.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('')}
            </div>
        `;
        project.sections.forEach(s => {
            html += `<div class="modal-section">
                <h3 class="modal-section-title">${s.title}</h3>
                <div class="modal-section-content">${s.content}</div>
            </div>`;
        });
        html += `<div class="modal-footer">
            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="modal-github-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View Code on GitHub
            </a>
        </div>`;

        bodyEl.innerHTML = html;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeBtn && closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.card-btn-details').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.project));
    });

    closeBtn  && closeBtn.addEventListener('click', closeModal);
    backdrop  && backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
function initScrollReveal() {
    // Assign reveal classes
    const assignments = [
        ['.section-header',       'reveal'],
        ['.about-photo-col',      'reveal-left'],
        ['.about-text-col',       'reveal-right'],
        ['.panel-card',           'reveal'],
        ['.skill-tag-group',      'reveal'],
        ['.credential-card',      'reveal'],
        ['.gallery-figure',       'reveal'],
        ['.project-card',         'reveal'],
        ['.contact-cta',          'reveal'],
        ['.contact-link-card',    'reveal'],
    ];

    assignments.forEach(([selector, cls]) => {
        document.querySelectorAll(selector).forEach(el => el.classList.add(cls));
    });

    // Timeline directional reveals
    document.querySelectorAll('.tl-item').forEach(item => {
        item.classList.add(item.classList.contains('tl-left') ? 'reveal-left' : 'reveal-right');
    });

    // Stagger delays
    document.querySelectorAll('.project-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.07) + 's';
    });
    document.querySelectorAll('.skill-chip').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.025) + 's';
    });
    document.querySelectorAll('.contact-link-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.credential-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.gallery-figure').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.07) + 's';
    });

    // Intersection observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
}

/* ================================================================
   GSAP PARALLAX (if available)
   ================================================================ */
function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);
}


/* ================================================================
   GALLERY CHARTS (Chart.js live programmatic charts)
   ================================================================ */
const GALLERY_CHART_DEFAULTS = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 1200, easing: 'easeOutQuart' },
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: '#1E293B',
            borderColor: 'rgba(20,184,166,0.3)',
            borderWidth: 1,
            titleColor: '#14B8A6',
            bodyColor: '#94A3B8'
        }
    }
};

function buildGalleryCharts() {
    if (typeof Chart === 'undefined') return;

    const darkGrid = { color: 'rgba(148,163,184,0.07)' };
    const axisTick = { color: '#475569', font: { family: "'JetBrains Mono', monospace", size: 9 } };
    const commonScales = {
        x: { grid: darkGrid, ticks: axisTick, border: { color: 'transparent' } },
        y: { grid: darkGrid, ticks: axisTick, border: { color: 'transparent' } }
    };

    /* — Chart 1: Fraud Event Study — CAR line — */
    const c1 = document.getElementById('gallery-chart-1');
    if (c1) {
        const days   = Array.from({ length: 21 }, (_, i) => `t${i - 10}`);
        const car    = [0,0,0.2,0.3,0.1,-0.2,-0.5,-1.1,-2.0,-3.5,-5.8,-8.2,-9.4,-9.7,-9.8,-9.6,-9.4,-9.2,-9.0,-8.9,-8.8];
        new Chart(c1, {
            type: 'line',
            data: {
                labels: days,
                datasets: [{
                    data: car,
                    borderColor: '#F59E0B',
                    backgroundColor: 'rgba(245,158,11,0.08)',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { ...GALLERY_CHART_DEFAULTS, scales: commonScales }
        });
    }

    /* — Chart 2: Titanic — survival by class (grouped bar) — */
    const c2 = document.getElementById('gallery-chart-2');
    if (c2) {
        new Chart(c2, {
            type: 'bar',
            data: {
                labels: ['1st Class', '2nd Class', '3rd Class'],
                datasets: [
                    { label: 'Survived', data: [63, 47, 24], backgroundColor: '#14B8A6', borderRadius: 4, barPercentage: 0.6 },
                    { label: 'Perished', data: [37, 53, 76], backgroundColor: 'rgba(139,92,246,0.5)', borderRadius: 4, barPercentage: 0.6 }
                ]
            },
            options: {
                ...GALLERY_CHART_DEFAULTS,
                plugins: { ...GALLERY_CHART_DEFAULTS.plugins, legend: { display: true, labels: { color: '#94A3B8', font: { family: "'JetBrains Mono', monospace", size: 9 } } } },
                scales: commonScales
            }
        });
    }

    /* — Chart 3: WMATA — ridership weekday vs holiday — */
    const c3 = document.getElementById('gallery-chart-3');
    if (c3) {
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        new Chart(c3, {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    { label: 'Weekday', data: [420,445,460,430,410,390,350,355,455,475,440,390], borderColor: '#14B8A6', backgroundColor: 'transparent', borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#14B8A6', tension: 0.4 },
                    { label: 'Holiday', data: [180,160,200,195,170,165,195,200,185,175,160,175], borderColor: '#F59E0B', backgroundColor: 'transparent', borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#F59E0B', tension: 0.4 }
                ]
            },
            options: {
                ...GALLERY_CHART_DEFAULTS,
                plugins: { ...GALLERY_CHART_DEFAULTS.plugins, legend: { display: true, labels: { color: '#94A3B8', font: { family: "'JetBrains Mono', monospace", size: 9 } } } },
                scales: { ...commonScales, y: { ...commonScales.y, title: { display: true, text: 'Avg. Daily Riders (k)', color: '#475569', font: { size: 9 } } } }
            }
        });
    }

    /* — Chart 4: NYC Jobs — median salary by career level — */
    const c4 = document.getElementById('gallery-chart-4');
    if (c4) {
        new Chart(c4, {
            type: 'bar',
            data: {
                labels: ['Entry', 'Mid', 'Senior', 'Manager', 'Director', 'Executive'],
                datasets: [{
                    data: [62, 85, 112, 135, 165, 210],
                    backgroundColor: [
                        'rgba(20,184,166,0.5)', 'rgba(20,184,166,0.6)', 'rgba(20,184,166,0.7)',
                        'rgba(139,92,246,0.6)', 'rgba(139,92,246,0.7)', 'rgba(245,158,11,0.7)'
                    ],
                    borderRadius: 4, barPercentage: 0.7
                }]
            },
            options: {
                ...GALLERY_CHART_DEFAULTS,
                scales: { ...commonScales, y: { ...commonScales.y, title: { display: true, text: 'Median Salary ($k)', color: '#475569', font: { size: 9 } } } }
            }
        });
    }

    /* — Chart 5: LinkedIn skill clusters — radar — */
    const c5 = document.getElementById('gallery-chart-5');
    if (c5) {
        new Chart(c5, {
            type: 'radar',
            data: {
                labels: ['Python/SQL', 'ML/AI', 'Visualization', 'Finance', 'Communication'],
                datasets: [
                    { label: 'High-Salary Bundle', data: [90, 85, 70, 60, 75], borderColor: '#14B8A6', backgroundColor: 'rgba(20,184,166,0.1)', borderWidth: 2, pointBackgroundColor: '#14B8A6' },
                    { label: 'Avg. Bundle', data: [55, 50, 60, 45, 65], borderColor: '#F59E0B', backgroundColor: 'rgba(245,158,11,0.07)', borderWidth: 2, pointBackgroundColor: '#F59E0B' }
                ]
            },
            options: {
                ...GALLERY_CHART_DEFAULTS,
                plugins: { ...GALLERY_CHART_DEFAULTS.plugins, legend: { display: true, labels: { color: '#94A3B8', font: { family: "'JetBrains Mono', monospace", size: 9 } } } },
                scales: { r: { min: 0, max: 100, grid: { color: 'rgba(148,163,184,0.08)' }, angleLines: { color: 'rgba(148,163,184,0.08)' }, ticks: { display: false }, pointLabels: { color: '#94A3B8', font: { size: 9 } } } }
            }
        });
    }

    /* — Chart 6: Spotify — energy vs valence scatter — */
    const c6 = document.getElementById('gallery-chart-6');
    if (c6) {
        const scatterData = Array.from({ length: 80 }, () => ({
            x: +(Math.random()).toFixed(2),
            y: +(0.2 + Math.random() * 0.6 + (Math.random() - 0.5) * 0.15).toFixed(2)
        }));
        // Add trend line points
        const trendData = [{ x: 0, y: 0.25 }, { x: 0.25, y: 0.38 }, { x: 0.5, y: 0.52 }, { x: 0.75, y: 0.66 }, { x: 1, y: 0.78 }];
        new Chart(c6, {
            type: 'scatter',
            data: {
                datasets: [
                    { label: 'Tracks', data: scatterData, backgroundColor: 'rgba(20,184,166,0.4)', pointRadius: 3, pointHoverRadius: 5 },
                    { label: 'Trend', data: trendData, type: 'line', borderColor: '#F59E0B', backgroundColor: 'transparent', borderWidth: 2, pointRadius: 0, tension: 0.3 }
                ]
            },
            options: {
                ...GALLERY_CHART_DEFAULTS,
                plugins: { ...GALLERY_CHART_DEFAULTS.plugins, legend: { display: false } },
                scales: {
                    x: { ...commonScales.x, title: { display: true, text: 'Valence', color: '#475569', font: { size: 9 } } },
                    y: { ...commonScales.y, title: { display: true, text: 'Energy', color: '#475569', font: { size: 9 } } }
                }
            }
        });
    }
}

function initGalleryCharts() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;

    new IntersectionObserver((entries, obs) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        buildGalleryCharts();
    }, { threshold: 0.1 }).observe(projectsSection);
}

/* ================================================================
   THEME TOGGLE
   ================================================================ */
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Restore saved preference
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    toggle.setAttribute('aria-label', saved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
}

/* ================================================================
   BOOT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollProgress();
    initThemeToggle();
    initProjectFilter();
    initProjectModal();
    initScrollReveal();
});

window.addEventListener('load', () => {
    runHeroEntrance();
    initGSAPAnimations();
    initSparklines();
    initCounters();
    initGalleryCharts();
});
