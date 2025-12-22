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
