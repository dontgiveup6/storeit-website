AOS.init();

const slides = document.querySelectorAll(".slide-content");
const faq = document.querySelectorAll(".faq-head");

// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
const bulletPoints = document.querySelector(".bullet-points");
let current = document.querySelector(".current");
let pointsHTML = "";
let auto = true;
let intervalTime = 5000;
let slideInterval, points, clickedPoint;

// next.addEventListener("click", () => {
//   nextSlide();
//   clearInt();
// });
// prev.addEventListener("click", () => {
//   prevSlide();
//   clearInt();
// });

const nextSlide = () => {
  prepareDom();

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }

  if (clickedPoint.nextElementSibling) {
    clickedPoint.nextElementSibling.classList.add("clicked-point");
  } else {
    points[0].classList.add("clicked-point");
  }
};

const prevSlide = () => {
  prepareDom();

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }

  if (clickedPoint.previousElementSibling) {
    clickedPoint.previousElementSibling.classList.add("clicked-point");
  } else {
    points[points.length - 1].classList.add("clicked-point");
  }
};

function prepareDom() {
  clickedPoint = document.querySelector(".clicked-point");
  current = document.querySelector(".current");
  current.classList.remove("current");
  clickedPoint.classList.remove("clicked-point");
}

function loading() {
  slides.forEach(() => {
    pointsHTML += `<div class="point"></div>`;
  });

  bulletPoints.innerHTML = pointsHTML;

  points = document.querySelectorAll(".point");
  points[0].classList.add("clicked-point");

  points.forEach((point, index) => {
    point.addEventListener("click", (e) => {
      points.forEach((pointt) => {
        pointt.classList.remove("clicked-point");
      });
      point.classList.add("clicked-point");
      slides.forEach((slide) => {
        slide.classList.remove("current");
      });
      slides[index].classList.add("current");

      clearInt();
    });
  });
}

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

faq.forEach((q) => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

function clearInt() {
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
}
