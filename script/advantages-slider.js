import advantages from "../mock-data/advantages.json" assert { type: "json" };

const template = document.querySelector("#advantages-template");
const dotTemplate = document.querySelector("#advantages-dots-template");
const slider = document.querySelector(".advantagesSlider");
const dotsContainer = document.querySelector(".advantagesSliderDots");
const btnRight = document.querySelector(".advantagesSliderNext");
const btnLeft = document.querySelector(".advantagesSliderPrev");

advantages.data.forEach((item, index) => {
  let copy = template.content.cloneNode(true);
  let card = copy.querySelector(".advantagesSlide");
  card.style.backgroundImage = `url(${item.image})`;
  let cardTitle = copy.querySelector("h3");
  cardTitle.innerText = item.title;
  let catDescription = copy.querySelector("p");
  catDescription.innerText = item.description;
  slider.appendChild(copy);
  let dotCopy = dotTemplate.content.cloneNode(true);
  let dot = dotCopy.querySelector(".advantagesSliderDot");
  dot.addEventListener("click", () => {
    currentSlide(index + 1);
  });
  dotsContainer.appendChild(dotCopy);
});

let slideIndex = 1;
let slideIntervslId;

showSlides(slideIndex);

function showSlides(n) {
  let slides = document.querySelectorAll(".advantagesSlide");
  let dots = document.querySelectorAll(".advantagesSliderDot");
  // создают infinite loop, если доходим до последнего слайда справа - n больше количества слайдов, то возвращаемся к первому
  if (n > slides.length) {
    slideIndex = 1;
  }
  // и наоборотв влево
  if (n < 1) {
    slideIndex = slides.length;
  }
  // сначала убираем в всех слайлов видимость и active у точек
  for (let i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" flex", "");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // и в итоге добавляем видимость активному индексу
  slides[slideIndex - 1].className += " flex";
  dots[slideIndex - 1].className += " active";
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

btnRight.addEventListener("click", () => {
  changeSlide(1);
});

btnLeft.addEventListener("click", () => {
  changeSlide(-1);
});

function autoRotateSlides() {
  slideIntervslId = setInterval(() => showSlides((slideIndex += 1)), 5000);
}

slider.addEventListener("mouseover", () => {
  clearInterval(slideIntervslId);
});

slider.addEventListener("mouseout", () => {
  autoRotateSlides();
});

const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) {
    clearInterval(slideIntervslId);
  } else {
    autoRotateSlides();
  }
});

intersectionObserver.observe(slider);