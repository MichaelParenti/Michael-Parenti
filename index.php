<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="Profile-Picture-Glitch-Animated.png" type="image/x-icon">
    <title>Michael Parenti</title>
    <script src="script.js" defer></script>
</head>
<body>
    <nav>
        <img id="img" src="./Profile-Picture-Glitch-Animated.png" alt="">

        <div id="links">
            <a href="#bookmark-one">Home</a>
            <a href="#bookmark-two">Projects</a>
            <a href="#bookmark-three">About</a>
            <a href="#bookmark-four">Contact</a>            
        </div> 

        <img id="hamburger" src="menu.png" alt="">
    </nav>

    <div id="fullscreen-menu">
        <div id="close">X</div>
        <div id="links-2">
            <a id="link_home" href="#bookmark-one">Home</a>
            <a id="link_projects" href="#bookmark-two">Projects</a>
            <a id="link_about" href="#bookmark-three">About</a>
            <a id="link_contact" href="#bookmark-four">Contact</a>            
        </div>
    </div>
    
    <div id="background-circle-1"></div>
    <div id="background-circle-2"></div>
    <div id="background-circle-3"></div>

    <div id="bookmark-one"></div>
    <section>
        <div id="inner-left">
            <img src="pic.jpg" alt="">

            <div id="text">
                <h1>Hello, I'm <span>Michael Parenti</span></h1>
                <p>A self-taught programmer</p>
            </div>

            <div id="buttons">
                <a href="#bookmark-three">About Me</a>
                <a href="#bookmark-four">Contact</a>
            </div>
        </div>
        
        <div id="inner-right">
            <img src="pic.jpg" alt="">
        </div>
    </section>
    <div id="spacer"></div>

    <div id="bookmark-two"></div>
    <section id="projects">
        <h1 class="title">Projects</h1>
        <hr>
        <div id="info-cards">
            <div class="card one">
                <h1>URL Shortener</h1>
                <p>This is a project that I built using HTML, CSS, JS, and React to communicate with an API.</p>
                <a href="https://github.com/M-Coder-3920/URL-Shortener-with-API" target="_blank"><img src="github.png" alt=""></a>
            </div>

            <div class="card two">
                <h1>Church Website</h1>
                <p>My church's website is a Google Site with embedded portions of HTML, CSS, and JS.</p>
                <a href="https://www.lombardchurch.org" target="_blank"><img src="world-wide-web.png" alt=""></a>
            </div>

            <div class="card three">
                <h1>Space Invaders Mini Game</h1>
                <p>This is a mini game I built using HTML, CSS, and JS. It is a simplified clone of the classic arcade game Space Invaders.</p>
                <a href="https://github.com/M-Coder-3920/Space-Invaders-Mini-Game" target="_blank"><img src="github.png" alt=""></a>
            </div>
            
            <div class="card four">
                <h1>Google Maps Clone</h1>
                <p>Using Map Box, this webpage shows a satellite similar to that of Google Maps. This project mainly uses JS.</p>
                <a href="https://github.com/M-Coder-3920/Google-Maps-Clone" target="_blank"><img src="github.png" alt=""></a>
            </div>
        </div>
    </section>

    <div id="bookmark-three"></div>
    <section id="about">
        <h1 class="title">About</h1>
        <hr>
        <div id="about-container">
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum atque ullam quasi quam necessitatibus iure, rerum placeat vero a voluptatem dolorem voluptas libero neque officiis! Minus qui quasi adipisci quod temporibus, odio exercitationem! Architecto tempore animi veritatis porro omnis optio facilis laborum laboriosam. Inventore tempore rem officia sequi culpa vero.</p> -->
            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae praesentium, repellendus quo quam quidem maxime vitae temporibus minima, repellat a odit nihil quaerat fugit?</p> -->
            <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, eaque.</p> -->
            <h1><span><?php htmlspecialchars('<h1>'); ?></span>Skills<span></h1></span></h1>
        </div>
    </section>

    <div id="bookmark-four"></div>
    <section id="contact">
        <h1 class="title">Contact</h1>
        <hr>
        <div id="relative-wrapper">
            <video autoplay muted loop src="Overlay Background _ Michael Parenti Portfolio.mp4"></video>
        </div>
        <div id="form">
            <script src="https://apps.elfsight.com/p/platform.js" defer></script>
            <div class="elfsight-app-cfb92c29-159c-4170-82b4-70769bbda0e2"></div>
        </div>
    </section>

    <!-- <div id="contact-styling"></div> -->

</body>
</html>