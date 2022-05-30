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

// Logo Client Slide Alt Script
// const arrows = document.querySelectorAll(".button-client-right");
// const container= document.querySelectorAll(".client__item__logo");

//         arrows.forEach((arrow, i) => {
//             const ItemNo = container[i].querySelectorAll("img").length;
//             let clickitem = 0;
//             arrow.addEventListener("click", () => {
//                 clickitem++;
//                 if(ItemNo - (1 + clickitem) >= 0){
//                     container[i].style.transform = `translateX(${
//                         container[i].computedStyleMap().get("transform")[0].x.value
//                         - 100}px)`;
//                 }else{
//                     container[i].style.transform = "translateX(0)";
//                     clickitem = 0;
//                 }
//             });
//         });

// Logo Client Slide Alt Script

// Logo Client Slide
const productContainers = [...document.querySelectorAll('.client__item__logo, .machine__item__img')];
const nxtBtn = [...document.querySelectorAll('.button-client-right')];
const preBtn = [...document.querySelectorAll('.button-client-left')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += 120;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 175;
    })
})
// End Logo Client Slide


// End Auto Slide Headproduct

// jquery menu ( mobile view )

// $('main ul li.menu-items2').click(function(){
// $('main ul li ul.main-menu-dropdown2').toggleClass("show");
// $('main ul li i.first').toggleClass("rotate");
// });

// $('main ul li.menu-items3').click(function(){
// $('main ul li ul.main-menu-dropdown3').toggleClass("show2");
// $('main ul li i.second').toggleClass("rotate");
// });

/* Klien Logo-Slider */

// $(document).ready(function(){
// 	$('.customer-logos').slick({
// 		slidesToShow: 9,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 2500,
// 		arrows: false,
// 		dots: false,
// 		pauseOnHover:false,
// 		responsive: [{
// 			breakpoint: 950,
// 			settings: {
// 				slidesToShow:7
// 			}
// 		}, {
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 5
// 			}
// 		},	

// 		{
// 			breakpoint: 520,
// 			settings: {
// 				slidesToShow: 4
// 			}
// 		}]
// 	})
// });

// /* Machine Facilities */

// $(document).ready(function(){
// 	$('.machine-facilities').slick({
// 		slidesToShow: 5,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 3000,
// 		arrows: false,
// 		dots: false,
// 		pauseOnHover:false,
// 		responsive: [{
// 			breakpoint: 950,
// 			settings: {
// 				slidesToShow:4
// 			}
// 		}, {
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 3
// 			}
// 		},	

// 		{
// 			breakpoint: 520,
// 			settings: {
// 				slidesToShow: 2
// 			}
// 		}]
// 	})
// });

// $(document).ready(function(){
// 	$('.produced-items').slick({
// 		slidesToShow: 5,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 4000,
// 		arrows: false,
// 		dots: false,
// 		pauseOnHover:false,
// 		responsive: [{
// 			breakpoint: 950,
// 			settings: {
// 				slidesToShow:4
// 			}
// 		}, {
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 3
// 			}
// 		},	

// 		{
// 			breakpoint: 520,
// 			settings: {
// 				slidesToShow: 2
// 			}
// 		}]
// 	})
// });


