AOS.init();

const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar-links");
const localeSwitch = document.querySelector(".locale-switcher");
const langBtns = document.querySelectorAll(".lang-btn");

const menu = document.querySelector(".menu");
let clicking = false;

toggler.addEventListener("click", toggleIt);

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

localeSwitch.addEventListener("click", () => {
  langBtns.forEach((btn) => {
    btn.classList.toggle("show-btn");
  });
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
