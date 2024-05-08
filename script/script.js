// Mostrando Div e Escondendo
function executa_design(){

    var verificar1 = document.getElementById("pagina_certificados");
    var verificar2 = document.getElementById("pagina_desenvolvimento")

    if(verificar1, verificar2.className != "hide"){
        verificar1.classList.add("hide");
        verificar2.classList.add("hide");
    }
    
    var container = document.getElementById("pagina_design");
    container.classList.toggle("hide");
}

function executa_certificados(){

    var verificar1 = document.getElementById("pagina_design");
    var verificar2 = document.getElementById("pagina_desenvolvimento")

    if(verificar1, verificar2.className != "hide"){
        verificar1.classList.add("hide");
        verificar2.classList.add("hide");
    }
    var container = document.getElementById("pagina_certificados");
    container.classList.toggle("hide");
}


function executa_projetos(){
    var verificar1 = document.getElementById("pagina_certificados");
    var verificar2 = document.getElementById("pagina_design")

    if(verificar1, verificar2.className != "hide"){
        verificar1.classList.add("hide");
        verificar2.classList.add("hide");
    }
          
    var container = document.getElementById("pagina_desenvolvimento");
    container.classList.toggle("hide");
    
}













let currentSlide = 0;
let intervalId;

function changeSlide(n) {
  const images = document.querySelectorAll('.carousel__image');
  currentSlide += n;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const images = document.querySelectorAll('.carousel__image');
  const indicators = document.querySelectorAll('.carousel__indicator');

  images.forEach((image, index) => {
    if (index === currentSlide) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    changeSlide(1);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

const images = document.querySelectorAll('.carousel__image');
images[currentSlide].classList.add('active');

const indicatorsContainer = document.querySelector('.carousel__indicators');
images.forEach(() => {
  const indicator = document.createElement('div');
  indicator.classList.add('carousel__indicator');
  indicatorsContainer.appendChild(indicator);
});

startAutoSlide();

document.querySelector('.carousel__button--prev').addEventListener('click', () => {
  changeSlide(-1);
});

document.querySelector('.carousel__button--next').addEventListener('click', () => {
  changeSlide(1);
});


/*

Manipula o CSS com JS
botao.addEventListener("click", function(){
    var container =  document.getElementById("pagina_design")

    if(container.style.display === "none"){
        container.style.display = "block"
    } else{
        container.style.display = "none"
    }

})


var botao  = document.getElementById("btn_desenvolvimento");
botao.addEventListener("click", function(){

    var verificar1 = document.getElementById("pagina_certificados");
    var verificar2 = document.getElementById("pagina_design")

    if(verificar1, verificar2.className != "hide"){
        verificar1.classList.add("hide");
        verificar2.classList.add("hide");
    }
          
    var container = document.getElementById("pagina_desenvolvimento");
    container.classList.toggle("hide");
})

*/

