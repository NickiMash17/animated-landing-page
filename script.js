// Typing effect for hero text
const typingText = document.querySelector('.typing-effect');
const phrases = ["Innovative Solutions", "Cutting-Edge Technology", "Web Development", "UI/UX Design"];
let phraseIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < phrases[phraseIndex].length) {
        typingText.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typingText) {
        typeText();
    }
});

// Scroll animations for fade-in effect on sections
const fadeInSections = document.querySelectorAll('.fade-in');

function checkInView() {
    fadeInSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('fade-in-visible');
        }
    });
}

document.addEventListener('scroll', checkInView);
window.addEventListener('load', checkInView);

// Particles Hero Section
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#ffcc00" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
        size: { value: 3, random: true, anim: { enable: true, speed: 10, size_min: 0.1 } },
        line_linked: { enable: true, distance: 150, color: "#ffcc00", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
// Toggle Sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const closeBtn = document.querySelector('.close-btn');

// Open sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    hamburger.classList.add('active');
});

// Close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    hamburger.classList.remove('active');
});

// Close sidebar when clicking outside
sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    hamburger.classList.remove('active');
});

// Close sidebar when a link is clicked
const sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
// Smooth Scroll for Scroll Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        // Scroll to the next section (e.g., the "About" section)
        const nextSection = document.querySelector('#about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}