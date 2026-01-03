// ===========================
// Constants
// ===========================
const MOBILE_BREAKPOINT = 768;
const SCROLL_REVEAL_OFFSET = 200;
const BACK_TO_TOP_THRESHOLD = 300;

// ===========================
// Loading Screen
// ===========================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 500);
});

// ===========================
// Network Animation (Canvas)
// =========================== 
/**
 * Custom canvas-based network animation for the hero section.
 * Features:
 * - Animated particles (dots) with connecting lines
 * - Performance optimized for 60fps
 * - Reduced particle count on mobile devices
 * - Pauses animation when tab is hidden
 * - Respects prefers-reduced-motion accessibility setting
 * - pointer-events: none on canvas (doesn't interfere with clicks)
 */
function initNetworkAnimation() {
    const canvas = document.getElementById('hero-network-canvas');
    if (!canvas) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        canvas.style.display = 'none';
        return;
    }
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let isTabVisible = true;
    let mouse = { x: null, y: null, radius: 150 };
    
    // Configuration
    // Particle count: desktop 50, mobile 25 for performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50;
    const maxDistance = 150; // Max distance for line connections
    const particleSpeed = 0.3; // Slow movement
    const mouseInfluenceRadius = 150; // Mouse interaction radius
    
    // Resize canvas to match container
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    // Track mouse movement
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    // Reset mouse position when leaving canvas
    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * particleSpeed;
            this.vy = (Math.random() - 0.5) * particleSpeed;
            this.radius = Math.random() * 2 + 1;
            this.originalVx = this.vx;
            this.originalVy = this.vy;
        }
        
        update() {
            // Check mouse interaction
            if (mouse.x != null && mouse.y != null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // If particle is within mouse influence radius
                if (distance < mouseInfluenceRadius) {
                    // Push particles away from mouse or attract them
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
                    
                    // Repel particles (push away)
                    this.vx += forceDirectionX * force * 0.5;
                    this.vy += forceDirectionY * force * 0.5;
                }
            }
            
            // Gradually return to original velocity (damping)
            this.vx += (this.originalVx - this.vx) * 0.05;
            this.vy += (this.originalVy - this.vy) * 0.05;
            
            // Move particle
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Keep within bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }
        
        draw() {
            // Draw subtle dot - slightly darker for better visibility
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(26, 77, 92, 0.25)'; // Increased from 0.15 to 0.25
            ctx.fill();
        }
    }
    
    // Initialize particles
    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Draw connecting lines between nearby particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    // Line opacity based on distance (closer = more opaque) - slightly darker
                    const opacity = (1 - distance / maxDistance) * 0.25; // Increased from 0.15 to 0.25
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(26, 77, 92, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Draw connections to mouse if present
        if (mouse.x != null && mouse.y != null) {
            particles.forEach(particle => {
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouseInfluenceRadius) {
                    const opacity = (1 - distance / mouseInfluenceRadius) * 0.25;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(26, 77, 92, ${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });
            
            // Draw mouse cursor indicator
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(26, 77, 92, 0.3)';
            ctx.fill();
        }
    }
    
    // Animation loop
    function animate() {
        if (!isTabVisible) {
            // Pause animation when tab is not visible
            return;
        }
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        drawConnections();
        
        // Request next frame (60fps target)
        animationId = requestAnimationFrame(animate);
    }
    
    // Handle visibility change (pause when tab is hidden)
    document.addEventListener('visibilitychange', () => {
        isTabVisible = !document.hidden;
        if (isTabVisible) {
            animate(); // Resume animation
        } else {
            cancelAnimationFrame(animationId); // Pause animation
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        init(); // Reinitialize particles on resize
        // Reset mouse position on resize
        mouse.x = null;
        mouse.y = null;
    });
    
    // Initialize
    resizeCanvas();
    init();
    animate();
}

// ===========================
// Particles Animation (Legacy - Removed)
// ===========================
function createParticles() {
    // Legacy particle function - no longer used
    // Network animation replaced this
}

// ===========================
// Counter Animation
// ===========================
function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(progress * target);
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target + suffix;
        }
    }
    
    requestAnimationFrame(update);
}

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'), 10);
                    const suffix = counter.getAttribute('data-suffix') || '';
                    
                    // Validate target is a valid number
                    if (!isNaN(target) && target >= 0) {
                        animateCounter(counter, target, 2000, suffix);
                    }
                });
                observer.disconnect();
            }
        });
    }, observerOptions);
    
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        observer.observe(statsContainer);
    }
}

// ===========================
// Navigation Functionality
// ===========================

// Get navigation elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('back-to-top');

// Toggle mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling with sticky nav offset
// ===========================

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#' || targetId === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const navHeight = navbar ? navbar.offsetHeight : 70;
            const targetPosition = targetSection.offsetTop - navHeight - 20; // Extra 20px padding
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Active Navigation Link
// ===========================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Special case for home/hero section
    if (window.scrollY < 100) {
        navLinks.forEach(link => link.classList.remove('active'));
    }
}

// ===========================
// Navbar Scroll Effect
// ===========================

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (backToTopBtn) {
        if (window.scrollY > BACK_TO_TOP_THRESHOLD) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    // Update scroll progress bar
    updateScrollProgress();
}

// ===========================
// Scroll Progress Bar
// ===========================
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
    
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

// ===========================
// Back to Top Button
// ===========================

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Scroll Reveal Animation
// ===========================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-card, .contact-method');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < window.innerHeight - SCROLL_REVEAL_OFFSET) {
            element.classList.add('reveal', 'active');
        }
    });
}

// Initialize reveal class
function initializeRevealElements() {
    const reveals = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-card, .contact-method');
    reveals.forEach(element => {
        element.classList.add('reveal');
    });
}

// ===========================
// Intersection Observer for Better Performance
// ===========================

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px 200px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
                // Optional: stop observing after animation for performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for instant reveal animation (no staggered delay)
    const elementsToObserve = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-card, .contact-method');
    elementsToObserve.forEach((element, index) => {
        element.classList.add('reveal');
        observer.observe(element);
    });
}

// ===========================
// Typing Effect for Hero (Optional Enhancement)
// ===========================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===========================
// Smooth Page Load
// ===========================

window.addEventListener('load', () => {
    // Initialize network animation
    initNetworkAnimation();
    
    // Initialize counter animation
    initCounterAnimation();
    
    // Initialize reveal elements
    initializeRevealElements();
    
    // Setup intersection observer for better performance
    if ('IntersectionObserver' in window) {
        setupIntersectionObserver();
    } else {
        // Fallback for older browsers
        revealOnScroll();
    }
});

// ===========================
// Custom Cursor Removed - Using Default Pointer
// ===========================

// ===========================
// Ripple Effect for Buttons
// ===========================
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.classList.add('ripple');
    
    const rippleElement = button.querySelector('.ripple');
    if (rippleElement) {
        rippleElement.remove();
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .contact-method, .project-card');
    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.addEventListener('click', createRipple);
    });
}

// ===========================
// Event Listeners
// ===========================

// Scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    handleNavbarScroll();
    updateActiveNavLink();
    
    // Debounce scroll reveal for performance
    if (!('IntersectionObserver' in window)) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(revealOnScroll, 100);
    }
}, { passive: true });

// Resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > MOBILE_BREAKPOINT) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }, 250);
}, { passive: true });

// ===========================
// Keyboard Navigation
// ===========================

// ESC key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===========================
// Click Outside to Close Menu
// ===========================

document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) {
        const isClickInsideNav = navMenu.contains(e.target) || navToggle.contains(e.target);
        if (!isClickInsideNav) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===========================
// ===========================
// Utility Functions
// ===========================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===========================
// Analytics and Tracking (Optional)
// ===========================

// Track navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const section = link.getAttribute('href').substring(1);
        // Add analytics tracking here if needed
        console.log(`Navigation to: ${section}`);
    });
});

// Track project card clicks
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const projectTitle = link.closest('.project-card').querySelector('.project-title').textContent;
        // Add analytics tracking here if needed
        console.log(`Project clicked: ${projectTitle}`);
    });
});

// ===========================
// Performance Monitoring
// ===========================

// Log page load time (development only)
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
});

// ===========================
// Initialize on DOM Content Loaded
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initial calls
    handleNavbarScroll();
    updateActiveNavLink();
    
    // Initialize ripple effects
    initRippleEffect();
    
    // Add smooth scroll behavior for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
        console.log('Smooth scroll polyfill might be needed');
    }
    
    console.log('Portfolio website initialized successfully');
});

// ===========================
// Project Filtering Functionality
// ===========================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterBtns.length || !projectCards.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            let visibleCount = 0;
            projectCards.forEach(card => {
                const tools = card.getAttribute('data-tools');
                
                if (filter === 'all') {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    if (tools && tools.includes(filter)) {
                        card.classList.remove('hidden');
                        visibleCount++;
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
            
            // Update count on "All Projects" button
            const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
            const countSpan = allBtn ? allBtn.querySelector('.filter-count') : null;
            if (countSpan && filter === 'all') {
                countSpan.textContent = projectCards.length;
            }
            
            // Trigger animation for visible cards
            setTimeout(() => {
                projectCards.forEach(card => {
                    if (!card.classList.contains('hidden')) {
                        card.style.animation = 'none';
                        setTimeout(() => {
                            card.style.animation = '';
                            card.classList.add('reveal', 'active');
                        }, 10);
                    }
                });
            }, 100);
        });
    });
}

// ===========================
// ===========================
// Initialize New Features
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initProjectFilters();
});

// ===========================
// Service Worker Registration (for PWA - Optional)
// ===========================

if ('serviceWorker' in navigator) {
    // Uncomment when service worker is ready
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/service-worker.js')
    //         .then(registration => console.log('SW registered:', registration))
    //         .catch(error => console.log('SW registration failed:', error));
    // });
}

// ===========================
// Project Modal Data
// ===========================
const projectDetails = {
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
                title: 'What We Built',
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
        ],
        chartPlaceholder: true
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
        ],
        chartPlaceholder: true
    },
    'wmata-ridership': {
        title: 'WMATA Ridership Analysis',
        badge: 'Data Analysis',
        tech: ['R', 'ggplot2', 'dplyr', 'Exploratory Data Analysis'],
        githubLink: 'https://github.com/shaneeza-hasnani/wmata-ridership-analysis',
        sections: [
            {
                title: 'Overview',
                content: `<p>This exploratory data analysis examines ridership patterns at Washington DC Metro stations, with a specific focus on American University and George Washington University stations. The analysis explores how weekday versus holiday patterns affect metro usage at university locations.</p>
                <p>Understanding these patterns helps transit planners optimize service schedules and capacity planning.</p>`
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
                content: `<p>The analysis uncovered several important patterns:</p>
                <ul>
                    <li><strong>Academic Calendar Impact:</strong> Clear correlation between university schedules and ridership</li>
                    <li><strong>Weekday vs. Holiday:</strong> Significant differences in usage patterns</li>
                    <li><strong>Peak Hours:</strong> Morning and evening commute times show highest ridership</li>
                    <li><strong>Seasonal Variations:</strong> Lower ridership during summer and winter breaks</li>
                </ul>`
            },
            {
                title: 'Applications',
                content: `<p>These findings can inform:</p>
                <ul>
                    <li>Metro service frequency adjustments based on predicted demand</li>
                    <li>Resource allocation during peak academic periods</li>
                    <li>Student transportation planning and campus connectivity</li>
                    <li>Infrastructure investment decisions for university areas</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    },
    'nyc-job-salary': {
        title: 'NYC Job Salary and Career Analysis',
        badge: 'Statistical Analysis',
        tech: ['R', 'Linear Regression', 'Statistical Modeling', 'Data Visualization'],
        githubLink: 'https://github.com/shaneeza-hasnani/nyc-job-salary-career-analysis',
        sections: [
            {
                title: 'Overview',
                content: `<p>This statistical analysis examines the relationship between career level and salary in New York City job postings. Using regression methods, the study quantifies how different career stages (entry-level, mid-level, senior) correlate with compensation.</p>
                <p>The research provides valuable insights for job seekers, employers, and career counselors about salary expectations across career progression.</p>`
            },
            {
                title: 'Research Questions',
                content: `<ul>
                    <li>How does career level influence salary in NYC job market?</li>
                    <li>What is the average salary premium for each career advancement?</li>
                    <li>Are there industry-specific patterns in the career-salary relationship?</li>
                    <li>How do other factors (education, skills) interact with career level?</li>
                </ul>`
            },
            {
                title: 'Statistical Methods',
                content: `<p>The analysis employed several statistical techniques:</p>
                <ul>
                    <li><strong>Multiple Linear Regression:</strong> Modeling salary as a function of career level</li>
                    <li><strong>Hypothesis Testing:</strong> Testing significance of career level coefficients</li>
                    <li><strong>Model Diagnostics:</strong> Checking assumptions and model fit</li>
                    <li><strong>Confidence Intervals:</strong> Quantifying uncertainty in estimates</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<p>The analysis revealed important salary patterns:</p>
                <ul>
                    <li>Statistically significant relationship between career level and salary</li>
                    <li>Quantified salary increases for each career advancement stage</li>
                    <li>Industry and location variations in the career-salary relationship</li>
                    <li>Evidence-based salary benchmarks for NYC job market</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    },
    'linkedin-skills': {
        title: 'LinkedIn Job Skills and Salary Analytics',
        badge: 'Labor Analytics',
        tech: ['R', 'Data Mining', 'Text Analysis', 'Market Research'],
        githubLink: 'https://github.com/shaneeza-hasnani/linkedin-job-skills-salary-analytics',
        sections: [
            {
                title: 'Overview',
                content: `<p>This labor market analytics project examines LinkedIn job postings to identify high-value skill bundles and their relationship to industry, experience level, and salary. The analysis provides actionable insights for career development and hiring strategies.</p>
                <p>By analyzing thousands of job postings, the study reveals which skill combinations command the highest salaries and are most in-demand.</p>`
            },
            {
                title: 'Research Objectives',
                content: `<ul>
                    <li>Identify the most valuable skill combinations in the job market</li>
                    <li>Analyze how skills relate to salary across industries</li>
                    <li>Understand skill requirements by experience level</li>
                    <li>Discover emerging skills and market trends</li>
                </ul>`
            },
            {
                title: 'Analytical Approach',
                content: `<p>The project uses advanced data analysis techniques:</p>
                <ul>
                    <li><strong>Text Mining:</strong> Extracting skills from job descriptions</li>
                    <li><strong>Association Analysis:</strong> Finding skill bundles that appear together</li>
                    <li><strong>Regression Analysis:</strong> Modeling the relationship between skills and salary</li>
                    <li><strong>Clustering:</strong> Grouping similar job profiles and skill sets</li>
                </ul>`
            },
            {
                title: 'Key Insights',
                content: `<p>The analysis uncovered important labor market patterns:</p>
                <ul>
                    <li>Specific skill combinations that command premium salaries</li>
                    <li>Industry-specific skill requirements and compensation trends</li>
                    <li>Skills that provide the highest return on investment</li>
                    <li>Emerging skills gaining traction in the job market</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    },
    'spotify-analysis': {
        title: 'Spotify Audio Features Analysis',
        badge: 'Regression Analysis',
        tech: ['R', 'Regression Modeling', 'Data Visualization', 'Statistical Analysis'],
        githubLink: 'https://github.com/shaneeza-hasnani/spotify-audio-features-analysis',
        sections: [
            {
                title: 'Overview',
                content: `<p>This project analyzes Spotify song data to examine how various audio features and genre relate to song energy levels. Using regression modeling in R, the study quantifies the relationships between musical characteristics and energy.</p>
                <p>The research provides insights into what makes songs energetic and how different genres utilize various audio features.</p>`
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
                title: 'Statistical Methods',
                content: `<p>The analysis employed multiple regression techniques:</p>
                <ul>
                    <li>Multiple linear regression to model energy as a function of audio features</li>
                    <li>Genre as a categorical predictor variable</li>
                    <li>Interaction effects between genre and audio features</li>
                    <li>Model selection and validation procedures</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<p>The study revealed important patterns:</p>
                <ul>
                    <li>Strong relationships between certain audio features and energy levels</li>
                    <li>Genre-specific patterns in how features relate to energy</li>
                    <li>Predictive model for estimating song energy from audio features</li>
                    <li>Insights into the musical characteristics that define energetic songs</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    }
};

// ===========================
// Project Modal Functions
// ===========================
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const project = projectDetails[projectId];
    
    if (!project) return;
    
    // Build modal content
    let contentHTML = `
        <div class="modal-header">
            <span class="modal-badge">${project.badge}</span>
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-tech-stack">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Add all sections
    project.sections.forEach(section => {
        contentHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">${section.title}</h3>
                <div class="modal-section-content">
                    ${section.content}
                </div>
            </div>
        `;
    });
    
    // Add chart placeholder if needed
    if (project.chartPlaceholder) {
        contentHTML += `
            <div class="modal-chart-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                <p>Charts, diagrams, and visualizations can be added here to illustrate project results</p>
            </div>
        `;
    }
    
    // Add footer with GitHub link
    contentHTML += `
        <div class="modal-footer">
            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="modal-cta-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View Code on GitHub</span>
            </a>
        </div>
    `;
    
    modalContent.innerHTML = contentHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===========================
// Initialize Project Modal Events
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers to all "View Details" buttons
    const detailsButtons = document.querySelectorAll('.btn-details');
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Close modal on close button click
    const closeButton = document.querySelector('.modal-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeProjectModal);
    }
    
    // Close modal on overlay click
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeProjectModal);
    }
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('project-modal');
            if (modal && modal.classList.contains('active')) {
                closeProjectModal();
            }
        }
    });
});
