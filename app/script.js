let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = slides.length - 1;
  else currentSlideIndex = index;

  // Slide o‘tkazish
  const offset = -currentSlideIndex * 100;
  document.querySelector(".carousel-track").style.transform = `translateX(${offset}%)`;

  // Aktiv nuqtani yangilash
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlideIndex].classList.add("active");
}

function moveSlide(n) {
  showSlide(currentSlideIndex + n);
}

function currentSlide(n) {
  showSlide(n - 1);
}

// Karuselni boshlang‘ich holatiga o‘rnatish
showSlide(currentSlideIndex);
