// script.js

// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('fixed', window.scrollY > 0);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const navToggle = document.querySelector('.navbar-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     navToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('show');
//     });
// });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('fixed', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
