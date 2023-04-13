//= components/slick.js
//= components/popup.js
//= components/gallery.js

let arrow = document.querySelector(".scroll__to-top");
let burger = document.querySelector(".burger-btn");
let menu = document.querySelector(".menu__inner");

// SCROLL TO TOP
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    arrow.classList.add("arrow");
  } else {
    arrow.classList.remove("arrow");
  }
});

// SLIDER BURGER MENU
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("burger-icon") ||
    e.target.classList.contains("burger-logo")
  ) {
    menu.classList.toggle("active");
  } else if (
    menu.classList.contains("active") ||
    e.target.closest(".menu__inner")
  ) {
    menu.classList.toggle("active");
  }
});
