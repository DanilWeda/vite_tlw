import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const MAX_NUMBER_LENGTH = 10;

new Swiper(".js-works-slider", {
  spaceBetween: 15,
  autoplay: true,
  speed: 1000,
  centeredSlides: true,
  loop: true,
  modules: [Autoplay],
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
  "https://script.google.com/macros/s/AKfycbyjka6es6zgMkWgqFrvUa6uxI7OFppj4t32q2bgLRXuKOzHU0-K_d-O_dYD_ZDvxej9sA/exec";

const form = document.forms["contact-form"];
const inputNumber = document.querySelector("#user-phone");
const inputWarningElement = document.querySelector(".js-text-warning");

const numberInputState = {
  numberValue: "",
};

inputNumber.addEventListener("input", (e) => {
  inputWarningElement.classList.add("hidden");
  numberInputState.numberValue = e.target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
  inputNumber.value = numberInputState.numberValue;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputNumber.value.length < MAX_NUMBER_LENGTH) {
    inputWarningElement.classList.remove("hidden");
    return;
  }

  const loadingButton = document.querySelector(".js-send-message");

  loadingButton.innerHTML = "...";

  const setButtonTimer = () =>
    setTimeout(() => {
      window.location.reload();
    }, 3000);

  fetch(scriptURL, {
    mode: "no-cors",
    method: "POST",
    body: new FormData(form),
  })
    .then(() => {
      loadingButton.innerHTML = "Успішно відправлено";
      loadingButton.classList.add("success-sended");
    })
    .catch((error) => console.error("Error!", error.message))
    .finally(setButtonTimer);
});
