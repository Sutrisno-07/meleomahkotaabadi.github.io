var slides = document.querySelector('.boxkemasanbahankarton-leftside').children;
var nextSlide = document.querySelector('.slide-right');
var prevSlide = document.querySelector('.slide-left');
var index = 0;
var totalSlides=slides.length;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

    if(direction=="next"){
       index++;
        if(index==totalSlides){
         index=0;
        }
    } 
    else{
            if(index==0){
             index=totalSlides-1;
            }
            else{
             index--;
            }
     }
 
   for(i=0;i<slides.length;i++){
           slides[i].classList.remove("active");
   }
   slides[index].classList.add("active");     
 
 }