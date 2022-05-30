// Start Burger Menu
const burgerMenu = document.getElementById('burger-menu');
const nav = document.querySelector('section.slidemenu ul');

burgerMenu.onclick = function(){
	burgerMenu.classList.toggle('active');
	nav.classList.toggle('active');
}
// End of Burger Menu -------------------------------------------------------


// Start Menu Burger Transform From Left Document on Mobile Device Preview
const mainMenu1 = document.querySelector('.menu-items2');
const dropMenu1 = document.querySelector('.main-menu-dropdown2');
const arrowFirst = document.querySelector('i.first');

mainMenu1.onclick = function(){
    dropMenu1.classList.toggle('show');
    arrowFirst.classList.toggle('rotate');
}

const mainMenu2 = document.querySelector('.menu-items3');
const dropMenu2 = document.querySelector('.main-menu-dropdown3');
const arrowSecond = document.querySelector('i.second');

mainMenu2.onclick = function(){
    dropMenu2.classList.toggle('show2');
    arrowSecond.classList.toggle('rotate');
}
// End of Menu Burger Transform From Left Document on Mobile Device Preview -------------------------------------------------------

// Manual Buttton Slide
const slider = document.querySelector(".headproduct__slider");
const nextBtn = document.querySelector(".right-slide");
const prevBtn = document.querySelector(".left-slide");
const slides = document.querySelectorAll(".item");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});
// End of Manual Button Slide Headproduct -------------------------------------------------------

// Start Auto Slide Headproduct
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });


    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});

// Client slide

// Whatsap Close Button
const whatsappClose1 = document.querySelector('section.whatsapp .whatsapp__cta');
const whatsappClose2 = document.querySelector('section.whatsapp .whatsapp__cls__btn');

whatsappClose2.onclick = function(){
	whatsappClose1.classList.toggle('btn__close');
}