const burgerMenu = document.getElementById('burger-menu');
const nav = document.querySelector('section.slidemenu ul');

// document.onclick = function(e){
// 	if(e.target.id !== 'main ul' && e.target.id !== 'burger-menu')
// 	{
// 		burgerMenu.classList.remove('active');
// 		nav.classList.remove('active');		
// 	}
// }

burgerMenu.onclick = function(){
	burgerMenu.classList.toggle('active');
	nav.classList.toggle('active');
}



// jquery menu ( mobile view )

$('main ul li.menu-items2').click(function(){
$('main ul li ul.main-menu-dropdown2').toggleClass("show");
$('main ul li i.first').toggleClass("rotate");
});

$('main ul li.menu-items3').click(function(){
$('main ul li ul.main-menu-dropdown3').toggleClass("show2");
$('main ul li i.second').toggleClass("rotate");
});

/* Klien Logo-Slider */

$(document).ready(function(){
	$('.customer-logos').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		dots: false,
		pauseOnHover:false,
		responsive: [{
			breakpoint: 950,
			settings: {
				slidesToShow:7
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 5
			}
		},	

		{
			breakpoint: 520,
			settings: {
				slidesToShow: 4
			}
		}]
	})
});

/* Machine Facilities */

$(document).ready(function(){
	$('.machine-facilities').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		pauseOnHover:false,
		responsive: [{
			breakpoint: 950,
			settings: {
				slidesToShow:4
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},	

		{
			breakpoint: 520,
			settings: {
				slidesToShow: 2
			}
		}]
	})
});

$(document).ready(function(){
	$('.produced-items').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		dots: false,
		pauseOnHover:false,
		responsive: [{
			breakpoint: 950,
			settings: {
				slidesToShow:4
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},	

		{
			breakpoint: 520,
			settings: {
				slidesToShow: 2
			}
		}]
	})
});


