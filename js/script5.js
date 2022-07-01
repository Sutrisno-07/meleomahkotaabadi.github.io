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

// Whatsap Close Button
const whatsappClose1 = document.querySelector('section.whatsapp .whatsapp__cta');
const whatsappClose2 = document.querySelector('section.whatsapp .whatsapp__cls__btn');

whatsappClose2.onclick = function(){
	whatsappClose1.classList.toggle('btn__close');
}



// Slide Product Items ----------------

// const containerSlide = document.querySelector('.mainproduct__container__item');
// const imgSlide = document.querySelectorAll('.imgslide');
// const nextBtn = document.querySelector('.mainproduct__container__item__next-btn');
// const prevBtn = document.querySelector('.mainproduct__container__item__prev-btn');

// let numberOfImages = imgSlide.length;
// let slideWidth = imgSlide[0].clientWidth;
// let currentSlide = 0;

// function init() { 
//     /*   
//       slideImage[0] = 0
//       slideImage[1] = 100%
//       slideImage[2] = 200%
//       */
  
//     imgSlide.forEach((img, i) => {
//       img.style.left = i * 100 + "%";
//     });
  
//     imgSlide[0].classList.add("active");
//   }
  
//   init();

//   // next-Button
//   nextBtn.addEventListener("click", () => {
//     if (currentSlide >= numberOfImages - 1) {
//       goToSlide(0);
//       return;
//     }
  
//     currentSlide++;
//     goToSlide(currentSlide);
//   });
  
//   // Previous Button
  
//   prevBtn.addEventListener("click", () => {
//     if (currentSlide <= 0) {
//       goToSlide(numberOfImages - 1);
//       return;
//     }
  
//     currentSlide--;
//     goToSlide(currentSlide);
//   });
