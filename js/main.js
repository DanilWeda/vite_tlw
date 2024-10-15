import Swiper from "swiper";
import "swiper/css";

new Swiper(".js-works-slider", {
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 5,
    },
  },
});

const tham = document.querySelector(".tham");
const menu = document.querySelector(".js-burger-menu");
const links = menu.querySelectorAll("a");

const lockOverflow = () => (document.body.style.overflow = "hidden");

const unlockOverflow = () => (document.body.style.overflow = "auto");

const closeMobileMenu = () => {
  tham.classList.remove("tham-active");
  menu.classList.add("hidden");
  unlockOverflow();
};

const toggleMenu = () => {
  menu.classList.toggle("hidden");
  tham.classList.toggle("tham-active");
};

links.forEach((link) => link.addEventListener("click", closeMobileMenu));

tham.addEventListener("click", () => {
  toggleMenu();

  if (menu.classList.contains("hidden")) return unlockOverflow();

  lockOverflow();
});

const nav = document.querySelector("#navigation");
const navTop = nav.offsetTop;

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

window.addEventListener("scroll", stickyNavigation);
