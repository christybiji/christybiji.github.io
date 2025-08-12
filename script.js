// Tamino Martinius - All rights reserved

// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com

// Terms of usage: http://particleslider.com/legal/license

var init = function(){
  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;
  
  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 3 : 0,
    ptlSize: isMobile || isSmall ? 3 : 1,
    width: 1e9,
    height: 1e9
  });
    
  var gui = new dat.GUI();
  gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'restless');
  gui.addColor(ps, 'color').onChange(function(value){
    ps.monochrome = true;
    ps.setColor(value);
	  ps.init(true);
  });
  
  
  (window.addEventListener
   ? window.addEventListener('click', function(){ps.init(true)}, false)
   : window.onclick = function(){ps.init(true)});
}

var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
  psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
	psScript.setAttribute('type', 'text/javascript');
  document.body.appendChild(psScript);
}
    
(window.addEventListener
  ? window.addEventListener('load', initParticleSlider, false)
  : window.onload = initParticleSlider);

// Navigation functionality
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupSmoothScrolling();
    }
    
    bindEvents() {
        // Mobile menu toggle
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
        
        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }
    
    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Form handling
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form form');
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            this.showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!this.isValidEmail(data.email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        this.showMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.form.reset();
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            padding: 15px;
            margin-top: 20px;
            border-radius: 10px;
            font-weight: 500;
            text-align: center;
            ${type === 'success' ? 
                'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : 
                'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;
        
        this.form.appendChild(messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// Intersection Observer for animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.observerOptions);
        
        // Observe all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            this.observer.observe(section);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    const navigation = new Navigation();
    
    // Initialize contact form
    const contactForm = new ContactForm();
    
    // Initialize scroll animations
    const scrollAnimations = new ScrollAnimations();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Add some CSS for the loading state
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        .content-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .content-section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .navbar.scrolled {
            background: rgba(0, 0, 0, 0.95);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: rgba(0, 0, 0, 0.95);
                backdrop-filter: blur(20px);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 50px;
                transition: left 0.3s ease;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .hamburger.active .bar:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }
            
            .hamburger.active .bar:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active .bar:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
        }
    `;
    document.head.appendChild(style);
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });
    
    // Add typing effect to welcome text
    const welcomeTitle = document.querySelector('.welcome-text h1');
    if (welcomeTitle) {
        const text = welcomeTitle.textContent;
        welcomeTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                welcomeTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('#first-slide');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
});
