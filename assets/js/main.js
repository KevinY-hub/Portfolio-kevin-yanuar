/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
        navToggle = document.getElementById('nav-toggle')
        navClose = document.getElementById('nav-close')

/*========= MENU SHOW ========= */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*====== MENU HIDDEN ======= */
/* Validate if constantny exists jing */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Pas di scroll greater than 50 viewport heightnya, add blur-header class ke header tag
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
    }else{
        sectionClass.classList.remove('active-link')
    }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // animations repeat
})

sr.reveal('.home__data, .home__social, .contact__container, .footer__container')
sr.reveal('.home__image', {origin: 'bottom'})
sr.reveal('.about__data, .skills__data', {origin: 'left'})
sr.reveal('.about__image, .skills__content', {origin: 'right'})
sr.reveal('.services__card, .projects__card', {interval: 100})