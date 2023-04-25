/*var slideIndex = 1;
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
showSlide(slideIndex);*/
let slideIndex = 0;
let container = document.getElementsByClassName("partnersImg")[0]
console.log(container)
let slides = document.getElementsByClassName("partnersImg")[0].getElementsByTagName("img");
console.log(slides)


let buttonRight = document.getElementsByClassName("right")[0]
let buttonLeft = document.getElementsByClassName("left")[0]

buttonRight.addEventListener("click", nextSlide)
buttonLeft.addEventListener("click", prevSlide)

function nextSlide(){
  if(slideIndex >= slides.length - 1){
    slideIndex = slides.length - 1
    console.log("nel perro")
    return
  }
  else{
    container.style.transform = `translateX(${-100}%)`
    slideIndex++
  }
}

function prevSlide(){
  if(slideIndex < 0){
    slideIndex = 0
    console.log("nel izquierda perro")
    return
  } else {
    container.style.transform = `translateX(${-100}%)`
    slideIndex--
  }
}