const video = document.querySelector(".about-company-video");

video.addEventListener("click", () => {
  if (!video.classList.contains("playing")) {
    video.classList.add("playing");
    video.play();
  } else {
    video.classList.remove("playing");
    video.pause();
  }
});
