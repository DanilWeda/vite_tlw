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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwxrr9gY3hHl86SuG0uv8nQa0NJHnmqFYqzCzrqM0w4wWDuE-B--j9r9iwch5FHZK6o/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => alert("Thank you! your form is submitted successfully."))
    .then(() => window.location.reload())
    .catch((error) => console.error("Error!", error.message));
});
