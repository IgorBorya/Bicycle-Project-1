// fixed header

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

const tabsNav = document.querySelectorAll(`.bikes .tabs-nav__link`);
const tabsContent = document.querySelectorAll(`.bikes .tabs-content`);
showTabs(tabsNav, tabsContent);
