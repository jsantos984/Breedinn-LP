// Utility functions
function handleTalkToUs() {
    // Open contact form or redirect to contact page
    alert('Contact form would open here. Implement your preferred contact method.');
    // Example: window.open('mailto:contact@breedinn.com?subject=Talk to us');
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
    document.querySelector('.btn-red').textContent = content.talkButton;
    document.querySelector('.btn-light').textContent = content.loginButton;
    
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
    document.querySelector('.btn-red').textContent = content.talkButton;
    document.querySelector('.btn-light').textContent = content.loginButton;
    
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

// Smooth scrolling for potential future sections
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll indicator animation
    animateScrollIndicator();
    
    // Initialize navbar scroll effect
    handleNavbarScroll();
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
    
    // Add click handler for scroll indicator
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
        // Scroll to next section (when more content is added)
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('btn')) {
                focusedElement.click();
            }
        }
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

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAboutModal();
    }
});