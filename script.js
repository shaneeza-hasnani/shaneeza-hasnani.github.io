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
        metrics: ['81.6% model accuracy', '891 passenger records', '8 engineered features', 'Precision: 0.79 · Recall: 0.76'],
        methodology: 'Applied logistic regression with L2 regularization after evaluating Random Forest and SVM baselines. Selected logistic regression for interpretability. Feature engineering included title extraction from passenger names, family size binning, and cabin deck parsing. Missing age values imputed using median-by-title grouping.',
        chartConfig: {
            type: 'bar',
            label: 'Survival Rate by Passenger Class (%)',
            labels: ['1st Class', '2nd Class', '3rd Class'],
            data: [63, 47, 24],
            color: '#14B8A6'
        },
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
                    <li>Model evaluation using accuracy, precision, recall, and F1-score metrics</li>
                </ul>`
            },
            {
                title: 'Key Features Analyzed',
                content: `<p>The model considers several important factors:</p>
                <ul>
                    <li><strong>Passenger Class:</strong> First, second, or third class ticket</li>
                    <li><strong>Gender:</strong> Male or female passenger (strongest predictor)</li>
                    <li><strong>Age:</strong> Passenger age in years (imputed via title-based median)</li>
                    <li><strong>Family Aboard:</strong> SibSp + Parch combined into FamilySize feature</li>
                    <li><strong>Fare:</strong> Log-transformed ticket price</li>
                    <li><strong>Extracted Title:</strong> Mr, Mrs, Miss, Master derived from name</li>
                </ul>`
            },
            {
                title: 'Results and Insights',
                content: `<p>The analysis revealed several key survival patterns:</p>
                <ul>
                    <li>Gender was the strongest predictor: women had 74% survival vs. 19% for men</li>
                    <li>1st class passengers survived at 63% vs. 24% for 3rd class</li>
                    <li>Children (age &lt; 10) showed higher survival across all classes</li>
                    <li>Solo travelers had lower survival rates than small family groups</li>
                </ul>`
            }
        ]
    },
    'fraud-disclosure': {
        title: 'Fraud Disclosure Event Study',
        badge: 'Event Study',
        tech: ['Python', 'Pandas', 'NumPy', 'Financial Analysis', 'Statistics', 'Fama-French'],
        githubLink: 'https://github.com/shaneeza-hasnani/fraud-disclosure-event-study',
        metrics: ['50+ fraud events analyzed', 'Event windows: −10 to +10 days', 'Fama-French 3-factor model', 'Abnormal returns quantified'],
        methodology: 'Implemented the standard event study framework: defined event window (−10, +10) around fraud disclosure date, estimated normal returns using Fama-French Three-Factor Model over a 200-day estimation window (−210 to −11), computed Abnormal Returns (AR = Actual − Expected), then aggregated into Cumulative Abnormal Returns (CAR). Applied t-tests for statistical significance of market reactions.',
        chartConfig: {
            type: 'line',
            label: 'Cumulative Abnormal Returns (%) Around Disclosure Day',
            labels: ['-10','-8','-6','-4','-2','0','+2','+4','+6','+8','+10'],
            data: [0.2, 0.1, -0.3, -0.8, -1.5, -6.8, -9.2, -10.1, -10.4, -10.6, -10.5],
            color: '#F59E0B'
        },
        sections: [
            {
                title: 'Overview',
                content: `<p>This event study analyzes how stock markets react to corporate fraud disclosures using the Fama-French Three-Factor Model. The research examines abnormal returns around fraud announcement dates to understand investor responses to fraud revelations.</p>
                <p>The study provides insights into market efficiency and investor behavior when companies publicly disclose fraudulent activities.</p>`
            },
            {
                title: 'Research Methodology',
                content: `<ul>
                    <li>Event study framework with event window [−10, +10] around disclosure dates</li>
                    <li>Fama-French Three-Factor Model for expected return estimation</li>
                    <li>200-day estimation window (t=−210 to t=−11) for parameter calibration</li>
                    <li>AR and CAR computation with t-test significance testing</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<p>The analysis revealed important patterns in market reactions:</p>
                <ul>
                    <li>Significant negative CARs of ~−10% concentrated around disclosure day (t=0)</li>
                    <li>Pre-disclosure drift (t=−5 to t=−1) suggests evidence of information leakage</li>
                    <li>Market reaction magnitude varied by fraud type and severity</li>
                    <li>Continued negative drift post-disclosure indicates slow information absorption</li>
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
        tech: ['R', 'ggplot2', 'dplyr', 'lubridate', 'Exploratory Data Analysis'],
        githubLink: 'https://github.com/shaneeza-hasnani/wmata-ridership-analysis',
        metrics: ['5+ years of ridership data', '6 university stations analyzed', 'Weekday vs. holiday breakdowns', 'Seasonal decomposition applied'],
        methodology: 'Conducted full EDA pipeline in R: data cleaning with dplyr, date parsing with lubridate, outlier identification using IQR method, and visualization with ggplot2. Applied STL seasonal decomposition to separate trend, seasonal, and residual components. Compared ridership distributions using Wilcoxon rank-sum test for weekday vs. weekend significance testing.',
        chartConfig: {
            type: 'line',
            label: 'Monthly Ridership Index: Weekday vs Weekend',
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            data: [82, 78, 90, 95, 85, 60, 52, 55, 91, 93, 89, 70],
            color: '#8B5CF6'
        },
        sections: [
            {
                title: 'Overview',
                content: `<p>This exploratory data analysis examines ridership patterns at Washington DC Metro stations, with a specific focus on American University and George Washington University stations. The analysis explores how weekday versus holiday patterns affect metro usage at university locations.</p>`
            },
            {
                title: 'Analysis Approach',
                content: `<ul>
                    <li>Time series analysis of daily ridership data spanning 5+ years</li>
                    <li>Comparison of weekday and weekend/holiday distributions (Wilcoxon test)</li>
                    <li>Seasonal trend decomposition using STL method in R</li>
                    <li>Station-specific ridership profiling for AU, GWU, and adjacent stops</li>
                </ul>`
            },
            {
                title: 'Key Insights',
                content: `<ul>
                    <li><strong>Academic Calendar Impact:</strong> 35–40% ridership drop during summer/winter breaks</li>
                    <li><strong>Weekday vs. Holiday:</strong> Statistically significant difference (p &lt; 0.001)</li>
                    <li><strong>Peak Hours:</strong> 8–9am and 5–6pm commute spikes dominate weekday patterns</li>
                    <li><strong>COVID Impact:</strong> Clear structural break in 2020 with gradual recovery through 2022</li>
                </ul>`
            },
            {
                title: 'Applications',
                content: `<p>These findings can inform metro service frequency adjustments, resource allocation during peak academic periods, and student transportation planning. The seasonal model can project ridership approximately two weeks ahead with reasonable accuracy.</p>`
            }
        ]
    },
    'nyc-job-salary': {
        title: 'NYC Job Salary & Career Analysis',
        badge: 'Statistical Analysis',
        tech: ['R', 'Linear Regression', 'Statistical Modeling', 'ggplot2', 'Hypothesis Testing'],
        githubLink: 'https://github.com/shaneeza-hasnani/nyc-job-salary-career-analysis',
        metrics: ['4,000+ NYC job listings analyzed', 'R² = 0.74 (model fit)', 'p < 0.001 across all levels', '5 career tiers modeled'],
        methodology: 'Applied multiple linear regression with career level as the primary predictor (encoded as ordinal factor) and industry sector as a covariate. Performed assumption checks: residual normality (Shapiro-Wilk), homoscedasticity (Breusch-Pagan), and multicollinearity (VIF < 3 for all predictors). Bootstrapped 95% confidence intervals for salary estimates across career tiers (1,000 iterations).',
        chartConfig: {
            type: 'bar',
            label: 'Median Annual Salary by Career Level ($K)',
            labels: ['Entry', 'Junior', 'Mid', 'Senior', 'Executive'],
            data: [58, 78, 102, 138, 195],
            color: '#F59E0B'
        },
        sections: [
            {
                title: 'Overview',
                content: `<p>This statistical analysis examines the relationship between career level and salary in New York City job postings. Using regression methods, the study quantifies how different career stages correlate with compensation across industries.</p>`
            },
            {
                title: 'Statistical Methods',
                content: `<ul>
                    <li><strong>Multiple Linear Regression:</strong> Career level + industry sector as predictors</li>
                    <li><strong>Hypothesis Testing:</strong> F-test for overall model significance; t-tests per coefficient</li>
                    <li><strong>Model Diagnostics:</strong> Residual plots, Q-Q normality test, VIF for multicollinearity</li>
                    <li><strong>Bootstrapped CIs:</strong> 95% confidence intervals on salary estimates (1,000 iterations)</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<ul>
                    <li>Career level explains 74% of salary variance (R² = 0.74, model significant at p &lt; 0.001)</li>
                    <li>Each level increase adds ~$30–40K in median compensation</li>
                    <li>Finance and tech sectors pay 22–28% premium over baseline industries</li>
                    <li>Entry-to-senior progression: $58K → $138K median (2.4× increase)</li>
                </ul>`
            }
        ]
    },
    'linkedin-skills': {
        title: 'LinkedIn Skills & Salary Analytics',
        badge: 'Labor Analytics',
        tech: ['R', 'Data Mining', 'Text Analysis', 'Association Rules', 'Market Research'],
        githubLink: 'https://github.com/shaneeza-hasnani/linkedin-job-skills-salary-analytics',
        metrics: ['12,000+ job postings mined', 'Top 15 skill bundles identified', '3 job archetypes clustered', 'Cloud + API skills: +25% premium'],
        methodology: 'Extracted skill mentions from job description text using regex pattern matching and a custom skill taxonomy (200+ terms). Applied Apriori algorithm (min support=0.05, min confidence=0.6) to identify co-occurring skill bundles. Used k-means clustering (k=3) to segment job profiles. Regressed salary on skill bundle membership and seniority level to quantify compensation premiums.',
        chartConfig: {
            type: 'bar',
            label: 'Salary Premium by Skill Bundle (%)',
            labels: ['Cloud+API', 'ML+Stats', 'Python+SQL', 'Tableau+BI', 'R+Excel'],
            data: [25, 22, 18, 12, 8],
            color: '#14B8A6'
        },
        sections: [
            {
                title: 'Overview',
                content: `<p>This labor market analytics project examines LinkedIn job postings to identify high-value skill bundles and their relationship to industry, experience level, and salary. The analysis surfaces which skill combinations command the highest market premium.</p>`
            },
            {
                title: 'Analytical Approach',
                content: `<ul>
                    <li><strong>Text Mining:</strong> Regex extraction + custom 200-term skill taxonomy</li>
                    <li><strong>Association Analysis:</strong> Apriori algorithm for co-occurring skill bundles</li>
                    <li><strong>Regression Analysis:</strong> Salary premium per skill bundle controlling for seniority</li>
                    <li><strong>Clustering:</strong> k-means (k=3) segmentation of job profiles into archetypes</li>
                </ul>`
            },
            {
                title: 'Key Insights',
                content: `<ul>
                    <li>Cloud + API skills command the highest premium (+25%) among bundles analyzed</li>
                    <li>ML + Statistics bundle yields +22% over baseline data analyst roles</li>
                    <li>Python + SQL combination appears in 68% of data science postings analyzed</li>
                    <li>3 distinct job archetypes emerged: Data Analyst, ML Engineer, Analytics Engineer</li>
                </ul>`
            }
        ]
    },
    'spotify-analysis': {
        title: 'Spotify Audio Features Analysis',
        badge: 'Regression Analysis',
        tech: ['R', 'Multiple Regression', 'ggplot2', 'Stepwise Selection', 'Statistical Analysis'],
        githubLink: 'https://github.com/shaneeza-hasnani/spotify-audio-features-analysis',
        metrics: ['10,000+ tracks analyzed', 'Adjusted R² = 0.71', '5 significant audio predictors', '8 genres compared'],
        methodology: 'Applied multiple linear regression with energy as the response variable. Used stepwise variable selection (BIC criterion) across 11 candidate audio features to arrive at a parsimonious 5-predictor model. Tested interaction terms between genre and audio features. Validated model fit with 5-fold cross-validation (RMSE = 0.08 on held-out data). Visualized partial regression plots for each significant predictor.',
        chartConfig: {
            type: 'bar',
            label: 'Feature Coefficients (Impact on Song Energy)',
            labels: ['Loudness', 'Acousticness', 'Valence', 'Danceability', 'Tempo'],
            data: [0.58, -0.41, 0.29, 0.22, 0.17],
            color: '#8B5CF6'
        },
        sections: [
            {
                title: 'Overview',
                content: `<p>This project analyzes Spotify song data to examine how various audio features and genre relate to song energy levels. Using multiple regression modeling in R, the study quantifies the relationships between musical characteristics and energy and identifies the strongest predictors.</p>`
            },
            {
                title: 'Audio Features Analyzed',
                content: `<ul>
                    <li><strong>Loudness (β=+0.58):</strong> Strongest positive predictor of energy</li>
                    <li><strong>Acousticness (β=−0.41):</strong> Strongest negative predictor — acoustic tracks score lower on energy</li>
                    <li><strong>Valence (β=+0.29):</strong> Positive/happy songs tend to be more energetic</li>
                    <li><strong>Danceability (β=+0.22):</strong> Danceable songs moderately predict higher energy</li>
                    <li><strong>Tempo (β=+0.17):</strong> Faster BPM associated with higher energy (weakest predictor)</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<ul>
                    <li>Adjusted R² = 0.71 — model explains 71% of variance in song energy</li>
                    <li>Loudness and acousticness together account for ~60% of explained variance</li>
                    <li>Genre significantly moderates the loudness→energy relationship (interaction term p &lt; 0.05)</li>
                    <li>Cross-validation RMSE = 0.08 on held-out test set, indicating good generalization</li>
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
   LOADER
   ================================================================ */
function initLoader(onComplete) {
    const loader  = document.getElementById('loader');
    const bar     = document.getElementById('loader-bar');
    const percent = document.getElementById('loader-percent');

    if (!loader) { onComplete(); return; }

    const start    = performance.now();
    const duration = 1800;

    function step(now) {
        const elapsed = now - start;
        const t       = Math.min(elapsed / duration, 1);
        const eased   = 1 - Math.pow(1 - t, 3);
        const progress = eased * 100;

        if (bar)     bar.style.width     = progress + '%';
        if (percent) percent.textContent = Math.round(progress) + '%';

        if (t < 1) {
            requestAnimationFrame(step);
        } else {
            loader.classList.add('hidden');
            setTimeout(onComplete, 500);
        }
    }

    requestAnimationFrame(step);
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
   THREE.JS NEURAL NETWORK HERO
   ================================================================ */
function initThreeHero() {
    if (typeof THREE === 'undefined') return;

    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;

    const mobile     = isMobile();
    const NODE_COUNT = mobile ? 35 : 70;
    const EDGE_THRESH = mobile ? 1.8 : 2.2;

    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !mobile });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 6;

    // Node geometry & materials
    const nodeGeom = new THREE.SphereGeometry(0.045, 8, 8);
    const nodeGroup = new THREE.Group();
    const positions = [];

    for (let i = 0; i < NODE_COUNT; i++) {
        const mat   = new THREE.MeshBasicMaterial({ color: 0x14B8A6, transparent: true, opacity: 0.75 });
        const mesh  = new THREE.Mesh(nodeGeom, mat);
        const phi   = Math.acos(1 - 2 * (i + 0.5) / NODE_COUNT);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
        const r     = 3.5 + (Math.random() - 0.5) * 2;
        mesh.position.set(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.sin(phi) * Math.sin(theta),
            r * Math.cos(phi)
        );
        positions.push(mesh.position.clone());
        mesh.userData.pulseSpeed  = 0.5 + Math.random() * 2;
        mesh.userData.pulseOffset = Math.random() * Math.PI * 2;
        mesh.userData.baseOpacity = 0.35 + Math.random() * 0.4;
        nodeGroup.add(mesh);
    }

    // Accent nodes
    [2, 11, 23, 38, 55].filter(i => i < NODE_COUNT).forEach((idx, i) => {
        nodeGroup.children[idx].material.color.setHex(i % 2 === 0 ? 0x8B5CF6 : 0xF59E0B);
        nodeGroup.children[idx].scale.setScalar(2.2);
    });

    scene.add(nodeGroup);

    // Edges
    const edgeGroup = new THREE.Group();
    const edgeMat   = new THREE.LineBasicMaterial({ color: 0x14B8A6, transparent: true, opacity: 0.12 });
    for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
            if (positions[i].distanceTo(positions[j]) < EDGE_THRESH) {
                const geom = new THREE.BufferGeometry().setFromPoints([positions[i], positions[j]]);
                edgeGroup.add(new THREE.Line(geom, edgeMat.clone()));
            }
        }
    }
    scene.add(edgeGroup);

    // Show canvas
    canvas.classList.add('visible');

    // Mouse tilt
    let targetX = 0, targetY = 0;
    document.addEventListener('mousemove', e => {
        targetX = (e.clientX / window.innerWidth  - 0.5) * 0.5;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.35;
    }, { passive: true });

    // Render loop
    const clock = new THREE.Clock();
    let   paused = false;

    function animate() {
        requestAnimationFrame(animate);
        if (paused) return;

        const t = clock.getElapsedTime();
        nodeGroup.rotation.y  = t * 0.07 + targetX;
        nodeGroup.rotation.x  = Math.sin(t * 0.04) * 0.15 + targetY;
        edgeGroup.rotation.y  = nodeGroup.rotation.y;
        edgeGroup.rotation.x  = nodeGroup.rotation.x;

        nodeGroup.children.forEach(node => {
            const p = Math.sin(t * node.userData.pulseSpeed + node.userData.pulseOffset);
            node.material.opacity = node.userData.baseOpacity + p * 0.25;
        });

        renderer.render(scene, camera);
    }

    animate();

    document.addEventListener('visibilitychange', () => { paused = document.hidden; });

    const heroEl = document.getElementById('home');
    if (heroEl) {
        new IntersectionObserver(entries => { paused = !entries[0].isIntersecting; }, { threshold: 0 })
            .observe(heroEl);
    }

    window.addEventListener('resize', debounce(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, 200));
}

/* ================================================================
   TYPED.JS
   ================================================================ */
function initTyped() {
    if (typeof Typed === 'undefined') return;
    const el = document.getElementById('typed-target');
    if (!el) return;

    new Typed('#typed-target', {
        strings: ['Fraud Analyst', 'Data Scientist', 'ML Engineer', 'Certified Fraud Examiner', 'Anomaly Hunter'],
        typeSpeed: 65,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: false
    });
}

/* ================================================================
   HERO ENTRANCE
   ================================================================ */
function runHeroEntrance() {
    const els = ['.hero-eyebrow', '.hero-name', '.hero-typed-row', '.hero-tagline',
                 '.hero-stats-row', '.hero-cta-row', '.hero-social-row'];

    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        els.forEach((sel, i) => {
            tl.to(sel, { y: 0, opacity: 1, duration: i === 1 ? 0.7 : 0.55 }, i === 0 ? 0 : '-=0.3');
        });
        tl.add(() => { initTyped(); animateHeroCounters(); }, 0.5);
    } else {
        // Fallback — just reveal
        els.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) { el.style.opacity = '1'; el.style.transform = 'none'; }
        });
        initTyped();
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
   CHART.JS RADAR
   ================================================================ */
function initSkillsRadar() {
    if (typeof Chart === 'undefined') return;
    const canvas = document.getElementById('skills-radar');
    if (!canvas) return;

    new IntersectionObserver((entries, obs) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();

        new Chart(canvas.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['Fraud Analytics', 'Machine Learning', 'Data Visualization',
                         'Programming', 'Statistical Analysis', 'Financial Forensics'],
                datasets: [{
                    label: 'Proficiency',
                    data: [95, 85, 90, 88, 87, 92],
                    borderColor: '#14B8A6',
                    backgroundColor: 'rgba(20,184,166,0.1)',
                    pointBackgroundColor: '#14B8A6',
                    pointBorderColor: '#0F172A',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: { duration: 1500, easing: 'easeOutQuart' },
                scales: {
                    r: {
                        min: 0, max: 100, beginAtZero: true,
                        grid:       { color: 'rgba(148,163,184,0.08)' },
                        angleLines: { color: 'rgba(148,163,184,0.08)' },
                        ticks:      { display: false },
                        pointLabels: {
                            color: '#94A3B8',
                            font: { family: "'JetBrains Mono', monospace", size: isMobile() ? 9 : 11 }
                        }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1E293B',
                        borderColor: 'rgba(20,184,166,0.3)',
                        borderWidth: 1,
                        titleColor: '#14B8A6',
                        bodyColor: '#94A3B8',
                        callbacks: { label: ctx => ` ${ctx.raw}% proficiency` }
                    }
                }
            }
        });
    }, { threshold: 0.3 }).observe(canvas);
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

    let activeModalChart = null;

    function openModal(projectId) {
        const project = PROJECT_DATA[projectId];
        if (!project) return;

        // Metrics chips
        const metricsHtml = project.metrics
            ? `<div class="modal-metrics">${project.metrics.map(m => `<span class="modal-metric-chip">${m}</span>`).join('')}</div>`
            : '';

        // Methodology block
        const methodHtml = project.methodology
            ? `<div class="modal-section">
                <h3 class="modal-section-title">Methodology</h3>
                <div class="modal-section-content modal-methodology"><p>${project.methodology}</p></div>
               </div>`
            : '';

        // Chart canvas
        const chartHtml = project.chartConfig
            ? `<div class="modal-chart-wrap">
                <div class="modal-chart-label">${project.chartConfig.label}</div>
                <canvas id="modal-project-chart" height="160"></canvas>
               </div>`
            : '';

        let html = `
            <span class="modal-badge">${project.badge}</span>
            <h2 class="modal-title" id="modal-title">${project.title}</h2>
            ${metricsHtml}
            <div class="modal-tech-stack">
                ${project.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('')}
            </div>
            ${chartHtml}
        `;
        project.sections.forEach(s => {
            html += `<div class="modal-section">
                <h3 class="modal-section-title">${s.title}</h3>
                <div class="modal-section-content">${s.content}</div>
            </div>`;
        });
        html += methodHtml;
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

        // Render chart after DOM is ready
        if (project.chartConfig) {
            requestAnimationFrame(() => {
                const chartCanvas = document.getElementById('modal-project-chart');
                if (!chartCanvas || typeof Chart === 'undefined') return;
                if (activeModalChart) { activeModalChart.destroy(); activeModalChart = null; }
                const cfg = project.chartConfig;
                const isDark = true;
                const gridColor = 'rgba(148,163,184,0.1)';
                const textColor = '#94A3B8';

                const datasets = [{
                    label: cfg.label,
                    data: cfg.data,
                    backgroundColor: cfg.type === 'bar'
                        ? cfg.color + '99'
                        : cfg.color + '30',
                    borderColor: cfg.color,
                    borderWidth: cfg.type === 'bar' ? 0 : 2,
                    borderRadius: cfg.type === 'bar' ? 4 : 0,
                    fill: cfg.type === 'line',
                    tension: 0.4,
                    pointRadius: cfg.type === 'line' ? 3 : 0,
                    pointBackgroundColor: cfg.color,
                }];

                activeModalChart = new Chart(chartCanvas, {
                    type: cfg.type,
                    data: { labels: cfg.labels, datasets },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: '#1E293B',
                                borderColor: cfg.color,
                                borderWidth: 1,
                                titleColor: '#F1F5F9',
                                bodyColor: '#94A3B8',
                                padding: 10,
                            }
                        },
                        scales: {
                            x: {
                                grid: { color: gridColor },
                                ticks: { color: textColor, font: { size: 11, family: "'JetBrains Mono', monospace" } }
                            },
                            y: {
                                grid: { color: gridColor },
                                ticks: { color: textColor, font: { size: 11 } }
                            }
                        }
                    }
                });
            });
        }
    }

    function closeModal() {
        if (activeModalChart) { activeModalChart.destroy(); activeModalChart = null; }
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
        ['.terminal-window',      'reveal-left'],
        ['.about-right',          'reveal-right'],
        ['.experience-strip',     'reveal'],
        ['.panel-card',           'reveal'],
        ['.skill-tag-group',      'reveal'],
        ['.tools-library-section','reveal'],
        ['.project-card',         'reveal'],
        ['.cert-card',            'reveal'],
        ['.pub-card',             'reveal'],
        ['.testimonial-card',     'reveal'],
        ['.contact-terminal',     'reveal'],
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
    document.querySelectorAll('.cert-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.pub-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.1) + 's';
    });
    document.querySelectorAll('.testimonial-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.1) + 's';
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

    // Hero canvas parallax
    const canvas = document.getElementById('three-canvas');
    if (canvas) {
        ScrollTrigger.create({
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            onUpdate: self => {
                canvas.style.transform = `translateY(${self.progress * 100}px)`;
                canvas.style.opacity   = String(Math.max(0, 1 - self.progress * 1.5));
            }
        });
    }
}

/* ================================================================
   BOOT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollProgress();
    initProjectFilter();
    initProjectModal();
    initScrollReveal();
});

window.addEventListener('load', () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    initLoader(() => {
        if (!prefersReduced) initThreeHero();
        runHeroEntrance();
        initGSAPAnimations();
    });

    initTerminal();
    initSkillsRadar();
    initProgressBars();
    initSparklines();
    initCounters();
});
