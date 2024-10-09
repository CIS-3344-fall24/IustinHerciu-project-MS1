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

    // Geography Quiz Email Validation
    const geoForm = document.querySelector('form[action="GeographyQuiz.html"]');
    geoForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email2').value;
        const confirmEmail = document.getElementById('confirmEmail2').value;

        if (email !== confirmEmail) {
            alert('Geography Quiz: Emails do not match! Please try again.');
            event.preventDefault();  // Prevents form submission
        }
    });

    // Physics Quiz Email Validation
    const physicsForm = document.querySelector('form.physics_card');
    physicsForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;

        if (email !== confirmEmail) {
            alert('Physics Quiz: Emails do not match! Please try again.');
            event.preventDefault();  // Prevents form submission
        }
    });
    // Architecture Quiz Email Validation
    const architectureForm = document.querySelector('form.architecture_card');
    architectureForm.addEventListener('submit', function(event) {
        const email = document.getElementById('email3').value;
        const confirmEmail = document.getElementById('confirmEmail3').value;

        if (email !== confirmEmail) {
            alert('Architecture Quiz: Emails do not match! Please try again.');
            event.preventDefault();  // Prevents form submission
        }
    });
});