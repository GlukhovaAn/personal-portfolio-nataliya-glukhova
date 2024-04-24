import rooms from "../mock-data/rooms.json" assert { type: "json" };

const template = document.querySelector("#rooms-template");
const slider = document.querySelector(".swiper-wrapper");

rooms.data.forEach((item) => {
  let copy = template.content.cloneNode(true);
  let img = copy.querySelector(".swiper-slide-image");
  img.src = item.image_link;
  let figcaption = copy.querySelector("figcaption");
  figcaption.innerText = item.figcaption;
  slider.appendChild(copy);
});

new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  // pagination: {
  //   el: "#swiper-2 .swiper-custom-pagination",
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return `<div class=${className}>
  //           <span class="number">${index + 1}</span>
  //           <span class="line"></span>
  //           </div>`;
  //   },
  // },
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
  breakpoints: {
    800: {
      slidesPerView: 1.5,
    },
    1400: {
      slidesPerView: 2,
    },
  },
});