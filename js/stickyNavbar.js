
const navbar = document.getElementById('navbar');

document.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    if (currentScroll > 50) {
        navbar.classList.add("nav-glass");
        navbar.classList.add("nav-small");
    } else {
        navbar.classList.add("nav-glass");
        navbar.classList.add("nav-small");
    }
});