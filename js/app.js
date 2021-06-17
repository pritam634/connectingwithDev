$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    var hambargar = document.querySelector('.hambarger');
    var times = document.querySelector('.times');
    var mobileNav = document.querySelector('.mobile-nav');


    hambargar.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    let nav_button = document.querySelector(".nav-button");
    nav_button.addEventListener("click", function () {
        mobileNav.classList.remove('open');
    });

    let nav_button2 = document.querySelector(".nav-button2");
    nav_button2.addEventListener("click", function () {
        mobileNav.classList.remove('open');
    });

    let nav_button3 = document.querySelector(".nav-button3");
    nav_button3.addEventListener("click", function () {
        mobileNav.classList.remove('open');
    });
});