// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const backToTopButton = document.getElementById('backToTop');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top button visibility
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    // Close mobile menu after clicking
    navMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  });
});

// Back to top button
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(
  '.project-card, .skill-category, .strength-item, .education-item, .about-card'
);

animatedElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(element);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (!name || !email || !message) {
    showFormMessage('Please fill in all fields', 'error');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage('Please enter a valid email address', 'error');
    return;
  }

  // Simulate form submission
  showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
  
  // Reset form
  contactForm.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    formMessage.style.display = 'none';
  }, 5000);
});

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = 'form-message ' + type;
  formMessage.style.display = 'block';
}

// Download CV functionality
const downloadCVButton = document.getElementById('downloadCV');

downloadCVButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Show a message since we don't have an actual CV file
  alert('CV download functionality would be implemented with an actual PDF file. For now, please contact via email at epaalemayehu@gmail.com');
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Typing effect for hero tagline (optional enhancement)
const tagline = document.querySelector('.hero-tagline');
const originalText = tagline.textContent;
let charIndex = 0;

function typeWriter() {
  if (charIndex < originalText.length) {
    tagline.textContent = originalText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriter, 50);
  }
}

// Start typing effect after page load
window.addEventListener('load', () => {
  tagline.textContent = '';
  setTimeout(typeWriter, 1000);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroBackground = document.querySelector('.animated-bg');
  
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Skill badge animation on hover
const skillBadges = document.querySelectorAll('.skill-badge');

skillBadges.forEach(badge => {
  badge.addEventListener('mouseenter', function() {
    this.style.transform = 'translateX(10px) scale(1.05)';
  });
  
  badge.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0) scale(1)';
  });
});

// Project card hover effect enhancement
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});