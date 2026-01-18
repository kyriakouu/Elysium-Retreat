document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Όταν πατάς το κουμπί Menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Αλλαγή εικονιδίου από γραμμές σε 'X' (προαιρετικό αλλά ωραίο)
        const icon = hamburger.querySelector('ion-icon');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('name', 'close-outline');
        } else {
            icon.setAttribute('name', 'menu-outline');
        }
    });

    // Όταν πατάς ένα link, να κλείνει το μενού αυτόματα
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('ion-icon').setAttribute('name', 'menu-outline');
        });
    });

    // --- Sticky Header ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(248, 245, 242, 1)'; // Match new background
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        } else {
            header.style.background = 'rgba(248, 245, 242, 0.85)'; // Match new background
            header.style.boxShadow = 'none';
        }
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Slideshow ---
    let slideIndex = 1;
    showSlides(slideIndex);

    // Make plusSlides function global so it can be accessed by onclick
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (slides.length === 0) return; // Prevent errors if no slides
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
});
