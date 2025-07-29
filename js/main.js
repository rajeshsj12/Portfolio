// Main JavaScript for Portfolio Website
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initCounters();      // Handles elements with data-target
    initCountersNew();   // Handles elements with data-target-new   
    initSkillBars();
    initProjectToggles();
    initParticles();
    initSmoothScroll();
    initTypingEffect();
    
    // Navigation functionality
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Mobile menu toggle
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Active navigation link
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveNavLink);
        updateActiveNavLink(); // Call once on load
    }
    
    // Scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger skill bar animations
                    if (entry.target.classList.contains('skills')) {
                        animateSkillBars();
                    }
                    
                    // Trigger counter animations
                    if (entry.target.classList.contains('hero')) {
                        animateCounters();
                        animateCountersNew();
                    }
                }
            });
        }, observerOptions);
        
        // Add reveal class to elements that should animate
        const revealElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .about-card, .info-card, .contact-card, .cta-card');
        
        revealElements.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
        
        // Observe sections for animations
        const sections = document.querySelectorAll('section');
        sections.forEach(section => observer.observe(section));
    }
    
    // Counter animations
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        
        window.animateCounters = function() {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 1000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    counter.textContent = Math.floor(current);
                }, 16);
            });
        };
    }

    function initCountersNew() {
        const counters = document.querySelectorAll('.stat-number[data-target-new]');

        window.animateCountersNew = function() {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target-new'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;

                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                        counter.textContent = target + '+'; // 🎯 Adds "+" only when done
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 16);
            });
        };
    }

    
    // Skill bar animations
    function initSkillBars() {
        window.animateSkillBars = function() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            skillBars.forEach((bar, index) => {
                const width = bar.getAttribute('data-width');
                
                setTimeout(() => {
                    bar.style.width = width;
                }, index * 100);
            });
        };
    }
    
    // Project toggle functionality
    function initProjectToggles() {
        const toggles = document.querySelectorAll('.project-toggle');
        
        toggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const card = this.closest('.project-card');
                const details = card.querySelector('.project-details');
                const icon = this.querySelector('i');
                const text = this.querySelector('.toggle-text');
                
                if (details.classList.contains('expanded')) {
                    details.classList.remove('expanded');
                    this.classList.remove('expanded');
                    text.textContent = 'View Details';
                } else {
                    details.classList.add('expanded');
                    this.classList.add('expanded');
                    text.textContent = 'Hide Details';
                }
            });
        });
    }
    
    // Particle system
    function initParticles() {
        const heroParticles = document.querySelector('.hero-particles');
        if (!heroParticles) return;
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random starting position
            const startX = Math.random() * window.innerWidth;
            const endX = startX + (Math.random() - 0.5) * 200;
            
            particle.style.left = startX + 'px';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            heroParticles.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 5000);
        }
        
        // Create particles periodically
        setInterval(createParticle, 200);
    }
    
    // Smooth scrolling
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Typing effect for hero title
    function initTypingEffect() {
        const titleLines = document.querySelectorAll('.title-line');
        
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            line.style.borderRight = '2px solid var(--primary-color)';
            
            setTimeout(() => {
                let i = 0;
                const typeTimer = setInterval(() => {
                    line.textContent += text.charAt(i);
                    i++;
                    
                    if (i >= text.length) {
                        clearInterval(typeTimer);
                        
                        // Remove cursor from all but last line
                        if (index < titleLines.length - 1) {
                            line.style.borderRight = 'none';
                        }
                    }
                }, 100);
            }, index * 2000);
        });
    }
    
    // Lazy loading for images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Progress bar animations
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.setProperty('--target-width', width);
            bar.classList.add('animate-progress');
        });
    }
    
    // Form validation (if forms are added later)
    function initFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        input.classList.add('error');
                        isValid = false;
                    } else {
                        input.classList.remove('error');
                    }
                });
                
                if (isValid) {
                    // Handle form submission
                    console.log('Form is valid');
                }
            });
        });
    }
    
    // Theme switcher (for future dark mode)
    function initThemeSwitcher() {
        const themeToggle = document.querySelector('.theme-toggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
            });
            
            // Load saved theme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
            }
        }
    }
    
    // Performance optimization: Debounce scroll events
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
    
    // Optimized scroll handler
    const optimizedScrollHandler = debounce(() => {
        // Handle scroll-dependent animations here
    }, 10);
    
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Page load animations
    function initPageLoadAnimations() {
        // Add staggered animations to hero elements
        const heroElements = document.querySelectorAll('.hero-text > *');
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('fade-in-up');
        });
        
        // Add entrance animations to navigation
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('fade-in-up');
        });
    }
    
    // Initialize page load animations
    initPageLoadAnimations();
    
    // Handle page visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause animations when page is not visible
            document.body.style.animationPlayState = 'paused';
        } else {
            // Resume animations when page becomes visible
            document.body.style.animationPlayState = 'running';
        }
    });
    
    // Add loading state
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Trigger entrance animations
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.classList.add('animate-in');
            }
        }, 100);
    });
    
    // Error handling for missing elements
    function safeQuerySelector(selector, callback) {
        const element = document.querySelector(selector);
        if (element && typeof callback === 'function') {
            callback(element);
        }
    }
    
    function safeQuerySelectorAll(selector, callback) {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0 && typeof callback === 'function') {
            callback(elements);
        }
    }
    
    // Console greeting
    console.log(`
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║        Welcome to Rajesh S's          ║
    ║        Portfolio Website!             ║
    ║                                       ║
    ║    Built with HTML5, CSS3 & JS       ║
    ║    Optimized for Performance          ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
    `);
});

// Additional utility functions
class AnimationUtils {
    static fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let opacity = 0;
        const timer = setInterval(() => {
            opacity += 50 / duration;
            element.style.opacity = opacity;
            
            if (opacity >= 1) {
                clearInterval(timer);
                element.style.opacity = '1';
            }
        }, 50);
    }
    
    static fadeOut(element, duration = 300) {
        let opacity = 1;
        const timer = setInterval(() => {
            opacity -= 50 / duration;
            element.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(timer);
                element.style.display = 'none';
                element.style.opacity = '0';
            }
        }, 50);
    }
    
    static slideDown(element, duration = 300) {
        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.display = 'block';
        
        const targetHeight = element.scrollHeight;
        let height = 0;
        const increment = targetHeight / (duration / 10);
        
        const timer = setInterval(() => {
            height += increment;
            element.style.height = height + 'px';
            
            if (height >= targetHeight) {
                clearInterval(timer);
                element.style.height = 'auto';
                element.style.overflow = 'visible';
            }
        }, 10);
    }
    
    static slideUp(element, duration = 300) {
        const targetHeight = element.scrollHeight;
        let height = targetHeight;
        const decrement = targetHeight / (duration / 10);
        
        element.style.overflow = 'hidden';
        
        const timer = setInterval(() => {
            height -= decrement;
            element.style.height = height + 'px';
            
            if (height <= 0) {
                clearInterval(timer);
                element.style.display = 'none';
                element.style.height = 'auto';
                element.style.overflow = 'visible';
            }
        }, 10);
    }
}

// Export utility functions for use in other scripts
window.AnimationUtils = AnimationUtils;

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
