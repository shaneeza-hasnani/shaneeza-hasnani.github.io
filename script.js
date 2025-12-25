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
// Particles Animation
// ===========================
function createParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;
    
    const particleCount = window.innerWidth < MOBILE_BREAKPOINT ? 20 : 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const drift = (Math.random() - 0.5) * 100;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.setProperty('--drift', `${drift}px`);
        
        particlesContainer.appendChild(particle);
    }
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
// Smooth Scrolling
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
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
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
    
    // Observe elements with staggered animation
    const elementsToObserve = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-card, .contact-method');
    elementsToObserve.forEach((element, index) => {
        element.classList.add('reveal');
        element.style.transitionDelay = `${index * 0.05}s`;
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
    // Create particles
    createParticles();
    
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
// Form Enhancement (if contact form is added later)
// ===========================

// Placeholder for future contact form functionality
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
        });
    }
}

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
    setupContactForm();
    
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
// Contact Form Handling
// ===========================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Get submit button
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"></path>
            </svg>
            <span>Sending...</span>
        `;
        
        try {
            // Simulate sending (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Message Sent!</span>
            `;
            submitBtn.style.background = '#10b981';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);
            
            // Show alert
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
        } catch (error) {
            // Show error message
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                <span>Failed to Send</span>
            `;
            submitBtn.style.background = '#ef4444';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 3000);
            
            showNotification('Failed to send message. Please try again or email directly.', 'error');
        }
    });
}

// Helper function to show notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 350px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Initialize New Features
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initProjectFilters();
    initContactForm();
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
    'fraud-detection': {
        title: 'Credit Card Fraud Detection',
        badge: 'Machine Learning',
        tech: ['Python', 'Random Forest', 'Scikit-learn', 'Pandas', 'NumPy'],
        githubLink: 'https://github.com/shaneeza-hasnani',
        sections: [
            {
                title: 'Overview',
                content: `<p>This project develops an advanced machine learning system to detect fraudulent credit card transactions with exceptional accuracy. Using a Random Forest classifier, the model analyzes transaction patterns to identify potentially fraudulent activities in real-time.</p>
                <p>The system processes thousands of transactions and uses sophisticated algorithms to distinguish between legitimate and fraudulent behavior, helping financial institutions protect their customers.</p>`
            },
            {
                title: 'What We Built',
                content: `<ul>
                    <li>A smart detection system that reviews credit card transactions automatically</li>
                    <li>Advanced pattern recognition to spot unusual spending behavior</li>
                    <li>Real-time alerts for suspicious activities</li>
                    <li>User-friendly dashboard showing detection results</li>
                </ul>`
            },
            {
                title: 'Key Results',
                content: `<p>The model achieved <strong>99.96% accuracy</strong> in identifying fraudulent transactions across 10,000+ credit card transactions. This means it correctly identifies fraud 9,996 times out of 10,000 attempts.</p>
                <p>Key metrics include:</p>
                <ul>
                    <li>99.96% overall accuracy in fraud detection</li>
                    <li>Extremely low false positive rate (genuine transactions marked as fraud)</li>
                    <li>Fast processing time suitable for real-time detection</li>
                    <li>Ability to learn and adapt to new fraud patterns</li>
                </ul>`
            },
            {
                title: 'How It Works',
                content: `<p>The system works in several simple steps:</p>
                <ul>
                    <li><strong>Data Collection:</strong> Gathers transaction information like amount, time, location, and merchant details</li>
                    <li><strong>Pattern Analysis:</strong> Compares each transaction against known patterns of legitimate and fraudulent activity</li>
                    <li><strong>Risk Scoring:</strong> Assigns a risk score to each transaction based on multiple factors</li>
                    <li><strong>Decision Making:</strong> Automatically flags high-risk transactions for review or blocking</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    },
    'fraud-dashboard': {
        title: 'Automated Fraud Dashboard',
        badge: 'Dashboard & Visualization',
        tech: ['Python', 'SQL', 'Power BI', 'Data Visualization'],
        githubLink: 'https://github.com/shaneeza-hasnani',
        sections: [
            {
                title: 'Overview',
                content: `<p>An integrated real-time dashboard system that combines Python data processing, SQL database queries, and Power BI visualizations to monitor and detect fraudulent activities across the organization.</p>
                <p>This comprehensive solution reduced manual review time by 40% while providing fraud analysts with powerful tools to investigate suspicious activities quickly.</p>`
            },
            {
                title: 'Dashboard Features',
                content: `<ul>
                    <li>Real-time fraud detection alerts and notifications</li>
                    <li>Interactive visualizations showing fraud trends and patterns</li>
                    <li>Automated reporting with customizable time periods</li>
                    <li>Drill-down capabilities for detailed transaction analysis</li>
                    <li>Risk scoring dashboard with color-coded alerts</li>
                </ul>`
            },
            {
                title: 'Impact & Benefits',
                content: `<p>The automated dashboard transformed how the fraud team operates:</p>
                <ul>
                    <li><strong>40% reduction</strong> in manual review time</li>
                    <li><strong>Real-time visibility</strong> into fraud trends across all channels</li>
                    <li><strong>Faster response</strong> to emerging fraud patterns</li>
                    <li><strong>Better collaboration</strong> with shared dashboards across teams</li>
                    <li><strong>Data-driven decisions</strong> with comprehensive analytics</li>
                </ul>`
            },
            {
                title: 'Technical Architecture',
                content: `<p>The system uses a three-tier architecture:</p>
                <ul>
                    <li><strong>Data Layer:</strong> SQL databases store transaction and fraud data</li>
                    <li><strong>Processing Layer:</strong> Python scripts clean, transform, and analyze data</li>
                    <li><strong>Presentation Layer:</strong> Power BI creates interactive visualizations</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    },
    'risk-scoring': {
        title: 'Transaction Risk Scoring',
        badge: 'Predictive Analytics',
        tech: ['R', 'Logistic Regression', 'Decision Trees', 'Statistical Analysis'],
        githubLink: 'https://github.com/shaneeza-hasnani',
        sections: [
            {
                title: 'Overview',
                content: `<p>A sophisticated risk scoring system that uses predictive analytics to assess the likelihood of fraud for each transaction. The model employs logistic regression and decision trees to calculate risk scores in real-time.</p>
                <p>This system successfully reduced false positives by 20% while maintaining high detection accuracy, saving time and improving customer experience.</p>`
            },
            {
                title: 'How Risk Scoring Works',
                content: `<p>The system evaluates multiple factors for each transaction:</p>
                <ul>
                    <li>Transaction amount and frequency patterns</li>
                    <li>Geographic location and device information</li>
                    <li>Historical customer behavior</li>
                    <li>Time and velocity of transactions</li>
                    <li>Merchant category and reputation</li>
                </ul>
                <p>Each factor is weighted and combined to produce a final risk score from 0-100, where higher scores indicate higher fraud risk.</p>`
            },
            {
                title: 'Key Achievements',
                content: `<ul>
                    <li><strong>20% reduction</strong> in false positives (legitimate transactions incorrectly flagged)</li>
                    <li><strong>Maintained high accuracy</strong> in detecting actual fraud</li>
                    <li><strong>Faster transaction processing</strong> with automated risk assessment</li>
                    <li><strong>Better customer experience</strong> with fewer unnecessary blocks</li>
                    <li><strong>Adaptive learning</strong> that improves over time</li>
                </ul>`
            },
            {
                title: 'Business Impact',
                content: `<p>The risk scoring model provided significant benefits:</p>
                <ul>
                    <li>Reduced customer complaints about blocked legitimate transactions</li>
                    <li>Improved fraud detection rates with more accurate targeting</li>
                    <li>Decreased operational costs through automation</li>
                    <li>Enhanced risk management capabilities for the business</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    },
    'anomaly-detection': {
        title: 'Anomaly Detection System',
        badge: 'Real-time Detection',
        tech: ['Python', 'SQL', 'Pandas', 'Anomaly Detection Algorithms'],
        githubLink: 'https://github.com/shaneeza-hasnani',
        sections: [
            {
                title: 'Overview',
                content: `<p>A real-time anomaly detection system that continuously monitors transaction data to identify unusual patterns that may indicate fraud. The system uses advanced algorithms to spot deviations from normal behavior.</p>
                <p>This solution improved overall fraud detection by 25% by catching sophisticated fraud schemes that traditional rule-based systems might miss.</p>`
            },
            {
                title: 'What Makes It Special',
                content: `<ul>
                    <li><strong>Real-time Processing:</strong> Analyzes transactions as they happen, not hours later</li>
                    <li><strong>Pattern Learning:</strong> Automatically learns what "normal" looks like for each customer</li>
                    <li><strong>Adaptive Detection:</strong> Adjusts to new fraud techniques without manual reprogramming</li>
                    <li><strong>Multi-dimensional Analysis:</strong> Considers multiple factors simultaneously</li>
                </ul>`
            },
            {
                title: 'Types of Anomalies Detected',
                content: `<p>The system identifies various types of unusual activity:</p>
                <ul>
                    <li><strong>Volume Anomalies:</strong> Unusual transaction amounts or frequencies</li>
                    <li><strong>Behavioral Anomalies:</strong> Actions that don't match customer's typical patterns</li>
                    <li><strong>Geographic Anomalies:</strong> Transactions from unexpected locations</li>
                    <li><strong>Temporal Anomalies:</strong> Unusual timing or velocity of transactions</li>
                </ul>`
            },
            {
                title: 'Results & Impact',
                content: `<p>The anomaly detection system delivered impressive results:</p>
                <ul>
                    <li><strong>25% improvement</strong> in fraud detection rates</li>
                    <li><strong>Earlier detection</strong> of emerging fraud patterns</li>
                    <li><strong>Reduced investigation time</strong> with prioritized alerts</li>
                    <li><strong>Better protection</strong> for high-value accounts</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    },
    'healthcare-fraud': {
        title: 'Healthcare Fraud Analytics',
        badge: 'Statistical Analysis',
        tech: ['R', 'SQL', 'SPSS', 'Statistical Modeling'],
        githubLink: 'https://github.com/shaneeza-hasnani',
        sections: [
            {
                title: 'Overview',
                content: `<p>A comprehensive healthcare fraud analysis project that used statistical methods to examine medical billing data and identify fraudulent claims. The analysis uncovered over $500,000 in fraudulent billing activities.</p>
                <p>This work involved analyzing patterns in healthcare claims to identify providers submitting false or inflated bills.</p>`
            },
            {
                title: 'What We Analyzed',
                content: `<p>The project examined various aspects of healthcare billing:</p>
                <ul>
                    <li>Medical procedure codes and billing patterns</li>
                    <li>Provider billing histories and frequencies</li>
                    <li>Patient diagnosis and treatment correlations</li>
                    <li>Geographic distribution of claims</li>
                    <li>Comparative analysis with industry standards</li>
                </ul>`
            },
            {
                title: 'Key Findings',
                content: `<p>Statistical analysis revealed several fraud patterns:</p>
                <ul>
                    <li><strong>Billing Anomalies:</strong> Over $500,000 in fraudulent claims identified</li>
                    <li><strong>Upcoding:</strong> Providers billing for more expensive procedures than performed</li>
                    <li><strong>Phantom Billing:</strong> Charges for services never provided</li>
                    <li><strong>Duplicate Claims:</strong> Multiple bills for the same service</li>
                </ul>`
            },
            {
                title: 'Methodology',
                content: `<p>Our approach combined multiple statistical techniques:</p>
                <ul>
                    <li><strong>Descriptive Statistics:</strong> Understanding normal billing patterns</li>
                    <li><strong>Outlier Detection:</strong> Identifying unusual claims</li>
                    <li><strong>Correlation Analysis:</strong> Finding relationships between variables</li>
                    <li><strong>Comparative Analysis:</strong> Benchmarking against industry norms</li>
                </ul>`
            }
        ],
        chartPlaceholder: true
    },
    'neural-network': {
        title: 'Neural Network Fraud Classifier',
        badge: 'Deep Learning',
        tech: ['Python', 'TensorFlow', 'Keras', 'Deep Learning'],
        githubLink: 'https://github.com/shaneeza-hasnani',
        sections: [
            {
                title: 'Overview',
                content: `<p>An advanced deep learning neural network designed to classify different types of fraud with high accuracy. This system uses TensorFlow and Keras to build and train sophisticated models that can handle imbalanced datasets effectively.</p>
                <p>The neural network approach allows the model to learn complex patterns that traditional methods might miss.</p>`
            },
            {
                title: 'How Neural Networks Help',
                content: `<p>Neural networks offer several advantages for fraud detection:</p>
                <ul>
                    <li><strong>Complex Pattern Recognition:</strong> Can identify subtle fraud indicators</li>
                    <li><strong>Multi-class Classification:</strong> Distinguishes between different fraud types</li>
                    <li><strong>Handling Imbalanced Data:</strong> Works well even when fraud cases are rare</li>
                    <li><strong>Continuous Learning:</strong> Improves accuracy as it processes more data</li>
                </ul>`
            },
            {
                title: 'Model Architecture',
                content: `<p>The neural network consists of multiple layers:</p>
                <ul>
                    <li><strong>Input Layer:</strong> Receives transaction features and characteristics</li>
                    <li><strong>Hidden Layers:</strong> Process and transform data through multiple stages</li>
                    <li><strong>Output Layer:</strong> Classifies transactions into fraud categories</li>
                    <li><strong>Activation Functions:</strong> Add non-linearity for complex pattern learning</li>
                </ul>`
            },
            {
                title: 'Performance & Applications',
                content: `<p>The model excels in several areas:</p>
                <ul>
                    <li>Superior performance on imbalanced datasets</li>
                    <li>Accurate classification of multiple fraud types</li>
                    <li>Fast inference time for real-time applications</li>
                    <li>Scalable architecture for growing data volumes</li>
                    <li>Transfer learning capabilities for new fraud types</li>
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
