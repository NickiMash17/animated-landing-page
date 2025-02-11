document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    fadeElements.forEach(el => observer.observe(el));

    // Enhanced Typing effect
    const words = ["Innovation", "Technology", "Creativity", "TechWave"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingEffect = document.querySelector(".typing-effect");
    function typeText() {
        if (charIndex < words[wordIndex].length) {
            typingEffect.innerHTML += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 120);
        } else {
            setTimeout(deleteText, 1000);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typingEffect.innerHTML = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, 80);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeText, 500);
        }
    }

    typeText();

    // Smooth Scroll Effect
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Animated Hero Background
    const hero = document.querySelector(".hero");
    let hue = 0;
    function animateBackground() {
        hue = (hue + 1) % 360;
        hero.style.background = `linear-gradient(to right, hsl(${hue}, 70%, 50%), hsl(${(hue + 60) % 360}, 70%, 50%))`;
        requestAnimationFrame(animateBackground);
    }
    animateBackground();
});
