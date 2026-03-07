
const navbar = document.getElementById('navbar');

document.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    if (currentScroll > 50) {
        navbar.classList.add("nav-blur-bg");
        navbar.classList.add("nav-shrink");
    } else {
        navbar.classList.add("nav-blur-bg");
        navbar.classList.add("nav-shrink");
    }
});