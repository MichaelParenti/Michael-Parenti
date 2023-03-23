var nav = document.querySelector('nav');
var nav_img = document.getElementById('img');
var nav_menu = document.getElementById('hamburger');
var card = document.getElementById('info-cards');
var form = document.getElementById('form');

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