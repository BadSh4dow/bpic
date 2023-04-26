/*let index = 0;
let container = document.getElementsByClassName("partnersImg")[0]
console.log(container)
let slides = document.getElementsByClassName("partnersImg")[0].getElementsByTagName("img");
console.log(slides)

console.log("SLIDE: ",index)


let buttonRight = document.getElementsByClassName("right")[0]
let buttonLeft = document.getElementsByClassName("left")[0]

buttonRight.addEventListener("click", nextSlide)
buttonLeft.addEventListener("click", prevSlide)

function nextSlide(){
  if(index >= slides.length - 1){
    index = slides.length - 1
    console.log("SLIDE: ",index)
    console.log("borde derecha")
    return
  } else {
    container.style.transform = `translateX(${-100}%)`
    slides[index].classList.remove("show")
    slides[index].classList.add("hidden")
    index++
    slides[index].classList.add("show")
    slides[index].classList.remove("hidden")
    console.log("SLIDE: ",index)
  }
}

function prevSlide(){
  if(index <= 0){
    index = 0
    console.log("SLIDE: ",index)
    console.log("borde izq")
    return
  } else {
    container.style.transform = `translateX(${0}%)`
    slides[index].classList.remove("show")
    slides[index].classList.add("hidden")
    index--
    slides[index].classList.add("show")
    slides[index].classList.remove("hidden")
    console.log("SLIDE: ",index)
  }
}

for (let i = 0; i < slides.length; i++) {
  slides[i].classList.add("hidden")
}

slides[index].classList.remove("hidden")
slides[index].classList.add("show")*/
let index = 0;
let container = document.getElementsByClassName("partnersImg")[0]
let slides = document.getElementsByClassName("partnersImg")[0].getElementsByTagName("img");

let buttonRight = document.getElementsByClassName("right")[0]
let buttonLeft = document.getElementsByClassName("left")[0]

buttonRight.addEventListener("click", nextSlide)
buttonLeft.addEventListener("click", prevSlide)

for (let i = 0; i < slides.length; i++) {
  slides[i].classList.add("hidden")
}

slides[index].classList.remove("hidden")
slides[index].classList.add("show")

function nextSlide(){
  if(index >= slides.length - 1){
    slides[index].classList.remove("show")
    slides[index].classList.add("hidden")
    index = 0
    slides[index].classList.add("show")
    slides[index].classList.remove("hidden")
  } else {
    slides[index].classList.remove("show")
    slides[index].classList.add("hidden")
    index++
    slides[index].classList.add("show")
    slides[index].classList.remove("hidden")
    console.log("SLIDE: ",index)
  }
}

function prevSlide(){
  if(index <= 0){
    slides[index].classList.remove("show")
    slides[index].classList.add("hidden")
    index = slides.length - 1
    slides[index].classList.add("show")
    slides[index].classList.remove("hidden")
  } else {
    slides[index].classList.remove("show")
    slides[index].classList.add("hidden")
    index--
    slides[index].classList.add("show")
    slides[index].classList.remove("hidden")
    console.log("SLIDE: ",index)
  }
}