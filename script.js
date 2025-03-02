function toggleNav() {
  var nav = document.getElementById("navbarNav");
  var toggle = document.getElementById("toggleMenu");
  nav.classList.toggle("show");
  toggle.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  var nav = document.getElementById("navbarNav");
  var toggle = document.getElementById("toggleMenu");

  if (!nav.contains(event.target) && !toggle.contains(event.target)) {
    nav.classList.remove("show");
    toggle.classList.remove("active");
  }
});

var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollToTopButton.classList.add("show-scroll");
    } else {
      scrollToTopButton.classList.remove("show-scroll");
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const targetNumber = 2025;
  const counterElement = document.getElementById("counter");

  new Waypoint({
    element: counterElement,
    handler: function () {
      anime({
        targets: counterElement,
        innerHTML: [0, targetNumber],
        duration: 1500,
        easing: "linear",
        round: 1,
      });
      this.destroy();
    },
    offset: "bottom-in-view",
  });
});
