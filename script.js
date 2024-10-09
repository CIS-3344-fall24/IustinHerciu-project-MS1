document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.main-title', {
        strings: ["Welcome To The Knowledge Quiz!"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('h1, h2', { origin: 'top' });
    ScrollReveal().reveal('.selection', { origin: 'bottom' });
    ScrollReveal().reveal('p', { origin: 'left' });
});