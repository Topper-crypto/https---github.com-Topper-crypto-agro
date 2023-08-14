$(document).ready(function () {

var Slider = new Swiper('.zoodot-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 2000,
  setInitialSlide: 0,
  spaceBetween: 0,
  autoplay: {
    delay: 1000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.zoodot-slider__button--next',
    prevEl: '.zoodot-slider__button--prev',
  },
     keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})
  AOS.init();

});