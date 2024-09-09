// fixed slider

const headerE1 = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > headerE1.offsetHeight) {
    headerE1.classList.add("scrolled");
  } else {
    headerE1.classList.remove("scrolled");
  }
});

const swiper = new Swiper(".feedback .swiper", {
  slidesPerView: 2,

  navigation: {
    nextEl: ".slider-btn--next",
    prevEl: ".slider-btn--prev",
  },
});
