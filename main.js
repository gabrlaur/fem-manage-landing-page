const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const menuOpen = document.querySelector(".icon-hamburger");
const menuClose = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  if (navToggle.getAttribute("aria-expanded") === "true") {
    menuOpen.setAttribute("aria-hidden", true);
    menuClose.setAttribute("aria-hidden", false);
  } else {
    menuOpen.setAttribute("aria-hidden", false);
    menuClose.setAttribute("aria-hidden", true);
  }
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  slidesToShow: 1,
  arrows: false,
  responsive: {
    480: {
      slidesToShow: 1,
      dots: true,
    },
    800: {
      slidesToShow: 3,
      dots: true,
    },
  },
});
