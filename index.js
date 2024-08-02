/* Copyright © 2024 Jose Israel Castro. All rights reserved. */
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    const animation = document.querySelectorAll('.title, .tagline, .greeting, .why, .who, .intro1, .intro2, .intro3, .border');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    animation.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hidden');

        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
});

document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
/* Copyright © 2024 Jose Israel Castro. All rights reserved. */