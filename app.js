// Typing effect for the hero subtitle
const tagline = document.getElementById('tagline');
const text = "Backend Developer & Data Scientist";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        tagline.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, 70);
    }
}

// Fade-in effect for cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
});
