// JavaScript for carousel functionality
const carousel = document.querySelector('.carousel');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));

let currentSlide = 0;

function moveToSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  moveToSlide(currentSlide);
}, 5000); // Change slide every 5 seconds
