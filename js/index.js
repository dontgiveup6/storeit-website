AOS.init();

const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav");
const navbarLinks = document.querySelectorAll(".navbar-links");
const localeSwitch = document.querySelector(".locale-switcher");
const menu = document.querySelector(".menu");
const logoFixed = document.querySelector(".logo-fixed");
const justLogo = document.querySelector(".just-logo");
const inFixed = document.querySelector(".in-fixed");
const header = document.querySelector(".services");
let clicking = true;

toggler.addEventListener("click", runIt);

function runIt() {
  clicking = !clicking;
  navbar.classList.toggle("navbar-menu-clicked");
  navbarLinks.forEach((link) => {
    link.classList.toggle("navbar-links-clicked");
  });
  toggler.classList.toggle("toggler-clicked");
  localeSwitch.classList.toggle("locale-switcher-clicked-fixed-in");
  menu.classList.toggle("menu-clicked-fixed-in");
}

document.addEventListener("scroll", () => {
  if (clicking) {
    if (window.scrollY > header.offsetTop) {
      menu.classList.add("menu-fixed-in");
      localeSwitch.classList.add("locale-switcher-fixed-in");
      inFixed.classList.add("fixed-in");
      logoFixed.style.display = "block";
      justLogo.style.display = "none";
    } else {
      menu.classList.remove("menu-fixed-in");
      localeSwitch.classList.remove("locale-switcher-fixed-in");
      justLogo.style.display = "block";
      logoFixed.style.display = "none";
      inFixed.classList.remove("fixed-in");
    }
  }
});
