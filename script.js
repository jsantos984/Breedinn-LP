// Contact Modal Functions
function openContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Legacy function - now opens contact modal
function handleTalkToUs() {
    openContactModal();
}

function handleLogin() {
    // Redirect to login page
    alert('Login functionality would be implemented here.');
    // Example: window.location.href = '/login';
}

function changeLanguage(language) {
    console.log(`Language changed to: ${language}`);
    
    // Store language preference
    localStorage.setItem('preferred-language', language);
    
    // Update content based on language
    if (language === 'pt') {
        updateContentToPortuguese();
    } else {
        updateContentToEnglish();
    }
    
    // Visual feedback
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        flag.style.opacity = '0.6';
    });
    
    const selectedFlag = language === 'en' ? flags[0] : flags[1];
    selectedFlag.style.opacity = '1';
    
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

function updateContentToPortuguese() {
    // Update text content to Portuguese
    const content = {
        headline: 'Gestão de Stock de Sémen Congelado.',
        subheadline: 'Finalmente Feito da Forma Certa.',
        paragraph: 'Rastreie, controle e partilhe stock de sémen em tempo real — sem mais caos.',
        demoButton: 'Solicitar Demo',
        worksButton: 'Ver Como Funciona',
        talkButton: 'Fale Connosco',
        loginButton: 'Entrar'
    };
    
    document.querySelector('.hero-headline').textContent = content.headline;
    document.querySelector('.hero-subheadline').textContent = content.subheadline;
    document.querySelector('.hero-paragraph').textContent = content.paragraph;
    document.querySelector('.btn-green').textContent = content.demoButton;
    document.querySelector('.btn-disabled').textContent = content.worksButton;
    
    // Update navigation buttons with correct classes
    const navTalkBtn = document.querySelector('.nav-btn-red');
    const navLoginBtn = document.querySelector('.nav-btn-gray');
    if (navTalkBtn) navTalkBtn.textContent = content.talkButton;
    if (navLoginBtn) navLoginBtn.textContent = content.loginButton;
    
    // Update meta description
    document.querySelector('meta[name="description"]').setAttribute('content', 'Rastreie, controle e partilhe stock de sémen em tempo real com o sistema profissional de gestão de criação da Breedinn.');
}

function updateContentToEnglish() {
    // Reset to English content
    const content = {
        headline: 'Frozen Semen Stock Management.',
        subheadline: 'Finally Done Right.',
        paragraph: 'Track, control, and share semen stock in real time — no more chaos.',
        demoButton: 'Request a Demo',
        worksButton: 'See How It Works',
        talkButton: 'Talk to us',
        loginButton: 'Login'
    };
    
    document.querySelector('.hero-headline').textContent = content.headline;
    document.querySelector('.hero-subheadline').textContent = content.subheadline;
    document.querySelector('.hero-paragraph').textContent = content.paragraph;
    document.querySelector('.btn-green').textContent = content.demoButton;
    document.querySelector('.btn-disabled').textContent = content.worksButton;
    
    // Update navigation buttons with correct classes
    const navTalkBtn = document.querySelector('.nav-btn-red');
    const navLoginBtn = document.querySelector('.nav-btn-gray');
    if (navTalkBtn) navTalkBtn.textContent = content.talkButton;
    if (navLoginBtn) navLoginBtn.textContent = content.loginButton;
    
    // Update meta description
    document.querySelector('meta[name="description"]').setAttribute('content', 'Track, control, and share semen stock in real time with Breedinn\'s professional breeding management system.');
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
    
    // Add click handlers for "Talk to Us" buttons
    document.querySelectorAll('.talk-to-us-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openContactModal();
        });
    });
    
    // Contact modal close handlers
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.querySelector('.contact-modal-close');
    
    // Close on X button click
    closeBtn.addEventListener('click', closeContactModal);
    
    // Close when clicking outside the modal content
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            closeContactModal();
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
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
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
    
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