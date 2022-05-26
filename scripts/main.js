//open and close the menu when click in the icon
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

/* when click in a menu item, hidden the menu */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    })
}

//adding shadow in the header when scroll
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {    
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

//Testimonials carousel by swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

//ScrollReveal: Show elements when scroll in the page
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, {interval: 100}
);

//back to top button 
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

//active menu as per the visible section on the page
const sections = document.querySelectorAll('main section[id]');

function activateMenuAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <=sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

/* When Scroll */
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection()
});
