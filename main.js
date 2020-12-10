// Hamburger menu 

const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

// Typwriter H1 Animation 

const texts = ['Webbanalyser', 'Sökordsanalyser', 'Teknisk Optimering'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 300);

}());

// Mouse animation

const mouseAnimation = document.getElementById('mouse-animation');


mouseAnimation


// Scroll to top button

const btnScrollToTop = document.getElementById('btnScrollToTop');

btnScrollToTop.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});