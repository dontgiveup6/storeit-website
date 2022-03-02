AOS.init();

const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav");
const navbarLinks = document.querySelectorAll(".navbar-links");
const localeSwitch = document.querySelector(".locale-switcher");
const langBtns = document.querySelectorAll(".lang-btn");
const menu = document.querySelector(".menu");
const logoFixed = document.querySelector(".logo-fixed");
const justLogo = document.querySelector(".just-logo");
const inFixed = document.querySelector(".in-fixed");
const header = document.querySelector(".services");
let clicking = false;

toggler.addEventListener("click", toggleIt);

localeSwitch.addEventListener("click", () => {
  langBtns.forEach((btn) => {
    btn.classList.toggle("show-btn");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1300) {
    localeSwitch.classList.remove("locale-switcher-clicked-fixed-in");
    menu.classList.remove("menu-clicked-fixed-in");
  } else {
    if (clicking) {
      localeSwitch.classList.add("locale-switcher-clicked-fixed-in");
      menu.classList.add("menu-clicked-fixed-in");
    }
  }
});

function toggleIt() {
  clicking = !clicking;
  navbar.classList.toggle("navbar-menu-clicked");
  navbarLinks.forEach((link) => {
    link.classList.toggle("navbar-links-clicked");
  });
  toggler.classList.toggle("toggler-clicked");
  toggler.classList.toggle("fas");
  toggler.classList.toggle("fa-bars");
  toggler.classList.toggle("fa-solid");
  toggler.classList.toggle("fa-xmark");

  localeSwitch.classList.toggle("locale-switcher-clicked-fixed-in");
  menu.classList.toggle("menu-clicked-fixed-in");
}

document.addEventListener("scroll", () => {
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
});
