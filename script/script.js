const navIton = document.querySelectorAll(".navbar a");
const imgOpen = document.querySelector("#open-navbar");
const imgClose = document.querySelector("#close-navbar");
const menuButn = document.querySelector(".navbarBtn");
const navbar = document.querySelector(".navbar");
let activitem = document.querySelector(".navbar .active");

const windowHeight = window.innerHeight;
const header = document.querySelector(".header");

function togglMenu() {
  navbar.classList.toggle("active");
  imgOpen.classList.toggle("active");
  imgClose.classList.toggle("active");
}
function handlclick(event) {
  // console.log(activitem);
  console.log(event);
  activitem.classList.remove("active");
  event.currentTarget.classList.add("active");
  activitem = event.currentTarget;
  togglMenu();
}

menuButn.addEventListener("click", togglMenu);
// navIton.forEach((batn) => {
//   batn.addEventListener("click", (event) => handlclick(event));
// });

window.addEventListener("scroll", () => {
  if (window.scrollY >= windowHeight - 100) {
    header.classList.add("down");
    header.classList.remove("up");
  } else if (
    header.classList.contains("down") &&
    window.scrollY <= windowHeight - 100
  ) {
    header.classList.remove("down");
    header.classList.add("up");
  }
});
