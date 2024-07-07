document.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector('.fw-bold.mb-4');
    text.innerHTML = text.textContent.split('').map((letter, index) => `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`).join('');
});

document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', `${100 * (index + 1)}`);
    });
    AOS.init();
});

document.addEventListener('DOMContentLoaded', (event) => {
    AOS.init();
});