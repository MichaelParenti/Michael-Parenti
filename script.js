//Declarations
var nav = document.querySelector('nav');
var nav_img = document.getElementById('img');
var nav_menu = document.getElementById('hamburger');

var full = document.getElementById('fullscreen-menu');
var close = document.getElementById('close');
var home = document.getElementById('home');
var projects = document.getElementById('projects');
var about = document.getElementById('about');
var contact = document.getElementById('contact');

var card = document.getElementById('info-cards');
var form = document.getElementById('form');



////////////////////////////////

//Fullscreen Menu Controls
nav_menu.addEventListener('click', () => {
    full.style.animation = 'slide-in ease 1s';
    setTimeout(() => {
        full.style.transform = 'translateX(0%)';
    }, 100)
});

close.addEventListener('click', () => {
    full.style.animation = 'slide-out ease 1s';
    setTimeout(() => {
        full.style.transform = 'translateX(100%)';
    }, 100)
});

home.addEventListener('click', () => {
    close.click();
});
projects.addEventListener('click', () => {
    close.click();
});
about.addEventListener('click', () => {
    close.click();
});
contact.addEventListener('click', () => {
    close.click();
});



// Navigation Animation
setInterval (() => {
    if(window.scrollY > 50){
        nav.style.borderBottom = 'solid 1px white';
        nav.style.height = '50px';
        nav_img.style.height = '40px';
        nav_menu.style.height = '40px';
    } else {
        nav.style.borderBottom = 'none';
        nav.style.height = '75px';
        nav_img.style.height = '50px';
        nav_menu.style.height = '50px';
    }
}, 1);



//Project Card Animations
setInterval (() => {
    if(window.innerWidth > 400 && window.scrollY > 500){
        card.style.animation = 'fade-in 1s';
        card.style.opacity = '1';
    }
    else if(window.innerWidth < 400 && window.scrollY > 650){
        card.style.animation = 'fade-in 1s';
        card.style.opacity = '1';
    }
}, 1);