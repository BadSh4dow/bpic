var slideIndex = 1;
var slides = document.getElementsByClassName("partnersImg")[0].getElementsByTagName("img");
var totalSlides = slides.length;

// Funciones de navegación
function showSlide(n, side) {
  if (n < 1) {
    slideIndex = totalSlides;
  } else if (n > totalSlides) {
    slideIndex = 1;
  } else {
    slideIndex = n;
  }
  for (var i = 0; i < totalSlides; i++) {
    slides[i].classList.remove("show");
    slides[i].classList.add("hidden");
  }
  slides[slideIndex - 1].classList.add("show")
  slides[slideIndex - 1].classList.remove("hidden")
}

function nextSlide() {
  showSlide(slideIndex + 1, 1);
}

function prevSlide() {
  showSlide(slideIndex - 1, 0);
}

// Eventos de click
document.getElementsByClassName("right")[0].addEventListener("click", nextSlide);
document.getElementsByClassName("left")[0].addEventListener("click", prevSlide);

// Mostrar primera imagen
showSlide(slideIndex);