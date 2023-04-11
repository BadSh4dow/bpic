var slideIndex = 1;
var slides = document.getElementsByClassName("partnersImg")[0].getElementsByTagName("img");
var totalSlides = slides.length;

// Funciones de navegación
function showSlide(n) {
  if (n < 1) {
    slideIndex = totalSlides;
  } else if (n > totalSlides) {
    slideIndex = 1;
  } else {
    slideIndex = n;
  }
  for (var i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Eventos de click
document.getElementsByClassName("right")[0].addEventListener("click", nextSlide);
document.getElementsByClassName("left")[0].addEventListener("click", prevSlide);

// Mostrar primera imagen
showSlide(slideIndex);