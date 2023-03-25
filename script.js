//Declarations
var nav = document.querySelector('nav');
var nav_img = document.getElementById('img');
var nav_menu = document.getElementById('hamburger');

var full = document.getElementById('fullscreen-menu');
var close = document.getElementById('close');
var home = document.getElementById('link_home');
var projects = document.getElementById('link_projects');
var about = document.getElementById('link_about');
var contact = document.getElementById('link_contact');

var card = document.getElementById('info-cards');
var form = document.getElementById('form');
var submit = document.querySelector("#eapps-contact-form-cfb92c29-159c-4170-82b4-70769bbda0e2 > div > div > div.WidgetBackground__ContentContainer-sc-1ho7q3r-1.hYzmOv > div > div > form > div.FormLayout__Footer-sc-2kg2eg-9.bmJdoo > div > button");

var top = document.getElementById('bookmark-one');



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



//About Hover Animation
var cont = document.getElementById('about-container');
var section = document.getElementById('languages');
var section_one = document.getElementById('languages-1');
var section_two = document.getElementById('languages-2');

cont.onmousemove = (e) => {

    const { currentTarget: target } = e;
    console.log("mousemove is working");

        const rect = target.getBoundingClientRect();
        // var section_two = e.target.getBoundingClientRect();

        const x1 = e.clientX - rect.left;
        // x2 = e.clientX - section_two.left;
        const y1 = e.clientY - rect.top;
        // y2 = e.clientY - section_two.top;

        target.style.setProperty("--x1-coor", x1 + "px");
        // e.target.style.setProperty("--x2-coor", x2 + "px");
        target.style.setProperty("--y1-coor", y1 + "px");
        // e.target.style.setProperty("--y2-coor", y2 + "px");

    // if(section_one.style.display === 'none' && section_two.style.display == 'none'){
    //     section.style.background = "yellow";
    //     section = target.getBoundingClientRect();

    //     x = e.clientX - section.left;
    //     y = e.clientY - section.top;

    //     target.style.setProperty("--mouse-x", x + "px");
    //     target.style.setProperty("--mouse-y", y + "px");

    //     console.log("one section");
    // }
};



//Submit Button Actions - Scroll to top on load
window.addEventListener('load', () => {
    console.log("scrolled to top");
    window.scrollTo(0, 0);
});