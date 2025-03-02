

var map = L.map("map").setView([-7.8014, 110.3648], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-7.8014, 110.3648])
  .addTo(map)
  .bindPopup("<b>Titik Nol Kilometer Yogyakarta</b><br>Yogyakarta, Indonesia.")
  .openPopup();


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
