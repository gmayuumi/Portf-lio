document.addEventListener('DOMContentLoaded', () => {

    
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navClose = document.getElementById('mobile-close');
    const navLinks = document.querySelectorAll('.mobile__link');
    
    const openMenu = () => { if (mobileMenu) mobileMenu.classList.add('show-menu'); };
    const closeMenu = () => { if (mobileMenu) mobileMenu.classList.remove('show-menu'); };

    if (navToggle) navToggle.addEventListener('click', openMenu);
    if (navClose) navClose.addEventListener('click', closeMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMenu));

 
    const themeButton = document.getElementById('theme-button');
    const purpleTheme = 'purple-theme'; 

    const selectedTheme = localStorage.getItem('selected-theme');

    const getCurrentTheme = () => document.body.classList.contains(purpleTheme) ? 'purple' : 'dark';

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'purple' ? 'add' : 'remove'](purpleTheme);
    }

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(purpleTheme);
            localStorage.setItem('selected-theme', getCurrentTheme());
        });
    }

   
    const progressBar = document.getElementById('scroll-progress-bar');
    if(progressBar) {
        const updateProgressBar = () => {
            const { scrollTop, scrollHeight } = document.documentElement;
            const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
            progressBar.style.setProperty('width', scrollPercent);
        };
        window.addEventListener('scroll', updateProgressBar);
    }
    
   
    if (typeof Swiper !== 'undefined') {
        const swiperProjects = new Swiper('.projects__container', {
            loop: true, spaceBetween: 24, grabCursor: true,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            autoplay: { delay: 5000, disableOnInteraction: false },
            breakpoints: {
                320: { slidesPerView: 1.2, spaceBetween: 16, centeredSlides: true },
                768: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
            }
        });
    }

  
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom', distance: '40px', duration: 1200, delay: 200,
            opacity: 0, easing: 'cubic-bezier(0.5, 0, 0, 1)', reset: false,
        });

        sr.reveal(`.hero__text h1`, { origin: 'top', distance: '20px' });
        sr.reveal(`.hero__text p`, { delay: 400 });
        sr.reveal(`.hero__text .button`, { delay: 600 });
        sr.reveal(`.hero__art-container`, { duration: 2000, delay: 300, scale: 0.9 });
        sr.reveal(`.section__title`);
        sr.reveal(`.about__content`, { origin: 'left' });
        sr.reveal(`.about__visual-container`, { origin: 'right', delay: 400 });
        sr.reveal(`.process__step`, { interval: 150 });
        sr.reveal(`.service__card`, { interval: 150 });
        sr.reveal(`.testimonial__card`, { interval: 150, scale: 0.95 });
        sr.reveal(`.projects__container_wrapper`);
        sr.reveal(`.ideal-for__item`, { interval: 100 });
        sr.reveal(`.faq__item`, { interval: 100 });
        sr.reveal(`.cta__container`);
    }
});
