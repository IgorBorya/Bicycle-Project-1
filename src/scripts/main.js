// fixed header

const headerE1 = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > headerE1.offsetHeight) {
    headerE1.classList.add("scrolled");
  } else {
    headerE1.classList.remove("scrolled");
  }
});

//swiper

const swiper = new Swiper(".feedback .swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".slider-btn--next",
    prevEl: ".slider-btn--prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// tabs
const showTabs = (tabsNav, tabsContent) => {
  tabsNav?.forEach((navLink, index) => {
    navLink?.addEventListener(`click`, () => {
      tabsNav.forEach((link) => {
        link.classList.remove(`active`);
      });

      navLink.classList.add(`active`);

      let navIndex = index;

      tabsContent.forEach((contentItem, index) => {
        contentItem.classList.remove(`active`);

        if (index === navIndex) {
          contentItem.classList.add(`active`);
        }
      });
    });
  });
};

const tabsNav = document.querySelector(`.bikes .tabs-nav__link`);
const tabsContent = document.querySelectorAll(`.bikes .tabs-content`);
showTabs(tabsNav, tabsContent);

// burger

const burgerBtnE1 = document.querySelector(".burger");

const handleBurgerClick = () => {
  burgerBtnE1.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("burger")) {
    handleBurgerClick();
  }
});
