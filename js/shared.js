AOS.init();

const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar-links");
const localeSwitch = document.querySelector(".locale-switcher");
const menu = document.querySelector(".menu");

toggler.addEventListener("click", runIt);

function runIt() {
  navbar.classList.toggle("navbar-menu-clicked");
  navbarLinks.forEach((link) => {
    link.classList.toggle("navbar-links-clicked");
  });
  toggler.classList.toggle("toggler-clicked");
  localeSwitch.classList.toggle("locale-switcher-clicked-fixed-in");
  menu.classList.toggle("menu-clicked-fixed-in");
}
