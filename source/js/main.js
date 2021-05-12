// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function(){

	const nav = $('.js-nav');

	$('.js-open-nav').on('click', function () {
		$('.js-nav').toggleClass('is-open');
		$(this).toggleClass('is-active');
	})

	// $('input[type=tel]')
	// 	.inputmask("8 (999) 999 99 99");


	// $('.js-popup-img')
	// 	.magnificPopup({
	// 		type:'image',
	// 		closeOnContentClick: true,
	// 		fixedContentPos: true,
	// 		mainClass: 'mfp-no-margins mfp-with-zoom',
	// 		image: {
	// 			verticalFit: true
	// 		},
	// 		zoom: {
	// 			enabled: true,
	// 			duration: 300
	// 		}
	// 	});
});
