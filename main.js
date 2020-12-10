// Hamburger menu 

const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});


// Scroll to top button

const btnScrollToTop = document.getElementById('btnScrollToTop');

btnScrollToTop.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});