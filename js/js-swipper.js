const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  
  grabCursor: true,
 
  

  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
     
});

AOS.init();
/*   effect: "cube",
grabCursor: true,
cubeEffect: {
  shadow: true,
  slideShadows: true,
  shadowOffset: 20,
  shadowScale: 0.94,
}, */