document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const text = "TechWave!";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.querySelector(".typing").textContent += text[index];
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Scroll Fade-in Effect
    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (rect < windowHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Initial call to show elements already in view
});
