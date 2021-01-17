'use strict';

// const { default: Swiper } = require("swiper");

(function ($) {
	$(document).ready(function () {
		// Code
		$('.burger').on('click', function () {
			$(this).toggleClass('burger__open');
			$('.menu__wrapper').toggleClass('menu__wrapper--open');
		});

		$(window).scroll(() => {
			if ($(window).scrollTop() > 5) {
				$('.menu').addClass("menu__scroll");
				$('.menu__logo').addClass("menu__logo--open");
				$('.menu__log').addClass("menu__log--open");
				$('.menu__link').addClass("menu__link--open");
			}
			else {
				$('.menu').removeClass("menu__scroll");
				$('.menu__logo').removeClass("menu__logo--open");
				$('.menu__log').removeClass("menu__log--open");
				$('.menu__link').removeClass("menu__link--open");
			}
		});

		$('.tabs__list').click(function(operation) {
			operation.preventDefault();
			$('.tabs__list').removeClass('tabs__list--active');
			$('.tabs__wrapper').removeClass('tabs__wrapper--active');

			$(this).addClass('tabs__list--active');
			let item = $(this).find('a').attr('href');
			$(item).addClass('tabs__wrapper--active');
		})
	});
})(jQuery);

new Swiper('.swiper__container', {
	slidesPerView: 2,
	spaceBetween: 50,
	loop: true,
	navigation: {
    nextEl: '.swiper__next',
    prevEl: '.swiper__prev',
	},
	autoplay: {
    delay: 3500,
    disableOnInteractive: false
	},
	speed: 800,
	breakpoints: {
		768: {
			slidesPerView: 3,
		}
	}
});

new Swiper('.slider__container', {
	navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
	},
	loop: true,
	autoplay: {
    delay: 3500,
    disableOnInteractive: false
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	}
});

