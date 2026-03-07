const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  let currentScroll = window.scrollY;

  /* GLASS + SHRINK */
  if(currentScroll > 50){
    navbar.classList.add("nav-glass");
    navbar.classList.add("nav-small");
  }else{
    navbar.classList.remove("nav-glass");
    navbar.classList.remove("nav-small");
  }

});