import Swiper from 'swiper/js/swiper';

(function initMenu() {
    const menuToggler = document.querySelector('.js-menu-toggler');
    const menu = document.querySelector('.js-menu');
    const links = menu.querySelectorAll('a');
    
    function toggleMenu() {
        menu.classList.toggle('menu--open');
    }

    menuToggler.addEventListener('click', toggleMenu);

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', toggleMenu);
    }
}());

(function animateForm() {
    const form = document.querySelectorAll('.js-form');

    if (form) {
        for (let i = 0; i < form.length; i++) {
            const input = form[i].querySelector('.js-input-place');
            input && input.addEventListener('click', function expandForm() {
                input.classList.add('active');
                input.removeEventListener('click', expandForm);
            });
        }
    }
}());

(function initializeGallery() {
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}());
