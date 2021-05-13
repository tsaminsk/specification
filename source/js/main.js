// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя

$(document).ready(function(){

	const nav = $('.js-nav');

	// const windowWidth = $(window).innerWidth();

	$('.js-open-nav').on('click', function () {
		$('.js-nav').toggleClass('is-open');
		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'auto');
		}
	});
});
