// Contact Modal Functions
function openContactModal() {
    console.log('Opening contact modal...');
    const modal = document.getElementById('contactModal');
    console.log('Modal element:', modal);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        console.log('Modal should be visible now');
    } else {
        console.error('Contact modal not found!');
    }
}

function closeContactModal() {
    console.log('Closing contact modal...');
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Legacy function - now opens contact modal
function handleTalkToUs() {
    console.log('handleTalkToUs called (legacy)');
    openContactModal();
}

function handleLogin() {
    // Redirect to login page
    alert('Login functionality would be implemented here.');
    // Example: window.location.href = '/login';
}

function changeLanguage(language) {
    console.log(`Language changed to: ${language}`);
    
    // Hide all language elements
    const enElements = document.querySelectorAll('[data-lang="en"]');
    const ptElements = document.querySelectorAll('[data-lang="pt"]');
    
    if (language === 'pt') {
        enElements.forEach(el => el.style.display = 'none');
        ptElements.forEach(el => el.style.display = 'inline');
    } else {
        ptElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'inline');
    }
    
    // Store language preference
    localStorage.setItem('preferred-language', language);
    
    // Visual feedback
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        flag.style.opacity = '0.6';
    });
    
    const selectedFlag = language === 'en' ? flags[0] : flags[1];
    if (selectedFlag) {
        selectedFlag.style.opacity = '1';
    }
    
    setTimeout(() => {
        flags.forEach(flag => {
            flag.style.opacity = '1';
        });
    }, 1000);
}

function requestDemo() {
    // Handle demo request
    alert('Demo request functionality would be implemented here.');
    // Example implementation:
    // window.location.href = '/request-demo';
    // or open a modal form
}


// Scroll indicator animation
function animateScrollIndicator() {
    const dots = document.querySelectorAll('.dot');
    let currentDot = 0;
    
    setInterval(() => {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentDot);
        });
        currentDot = (currentDot + 1) % dots.length;
    }, 2000);
}

// Smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const navbarHeight = 70; // Fixed navbar height
        const elementPosition = element.offsetTop - navbarHeight - 10;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Navbar scroll effect (simplified)
function handleNavbarScroll() {
    const navbar = document.querySelector('.top-navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    console.log('Script.js is running!');
    
    // Ensure contact modal is properly hidden on page load
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.classList.remove('active');
        contactModal.style.display = 'none';
        contactModal.style.visibility = 'hidden';
        contactModal.style.opacity = '0';
    }
    
    // Ensure body scroll is restored
    document.body.style.overflow = 'auto';
    
    // Initialize scroll indicator animation
    animateScrollIndicator();
    
    // Initialize navbar scroll effect
    handleNavbarScroll();
    
    // Add smooth scrolling to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Add click handlers for contact scroll triggers (smooth scroll to footer) - PRIORITY HANDLER
    const contactScrollTriggers = document.querySelectorAll('.contact-scroll-trigger');
    console.log('Found contact scroll trigger buttons:', contactScrollTriggers.length);
    console.log('Contact scroll trigger buttons:', contactScrollTriggers);
    
    // Check if contact footer exists
    const contactFooter = document.getElementById('contact-footer');
    console.log('Contact footer element found:', !!contactFooter, contactFooter);
    
    contactScrollTriggers.forEach((button, index) => {
        console.log(`Setting up contact scroll trigger button ${index}:`, button.textContent, button.className);
        
        // Clear any existing handlers
        button.removeAttribute('onclick');
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        newButton.addEventListener('click', function(e) {
            console.log('SCROLL BUTTON CLICKED!', this.textContent);
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            const footer = document.getElementById('contact-footer');
            console.log('Footer element check:', !!footer);
            
            if (footer) {
                console.log('Scrolling to footer...');
                footer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('Scroll command executed');
            } else {
                console.error('Footer element not found!');
            }
            return false;
        });
    });
    
    // Contact modal setup (reusing contactModal variable from above)
    const closeBtn = document.querySelector('.contact-modal-close');
    
    console.log('Contact modal found:', !!contactModal);
    console.log('Close button found:', !!closeBtn);
    
    if (closeBtn) {
        // Close on X button click
        closeBtn.addEventListener('click', closeContactModal);
    }
    
    if (contactModal) {
        // Close when clicking outside the modal content
        contactModal.addEventListener('click', function(e) {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    console.log('Contact form found:', !!contactForm);
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('fullName');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Here you would typically send the data to your backend
            console.log('Contact form submitted:', { name, email, message });
            
            // Show success message (you could replace this with a proper success UI)
            alert('Thank you for your message! We\'ll get back to you soon.');
            
            // Reset form and close modal
            contactForm.reset();
            closeContactModal();
        });
    }
    
    // Load saved language preference and initialize language switcher
    const savedLanguage = localStorage.getItem('preferred-language') || 'en';
    changeLanguage(savedLanguage);
    
    console.log('Language switcher initialized with language:', savedLanguage);
    
    // Add click handler for scroll indicator
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
        // Scroll to the features section
        smoothScroll('#how-it-works');
    });
    
    console.log('Breedinn website initialized successfully!');
});

// Modal functions
function openAboutModal() {
    const modal = document.getElementById('aboutModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeAboutModal() {
    const modal = document.getElementById('aboutModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modals when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAboutModal();
        closeContactModal();
    }
});