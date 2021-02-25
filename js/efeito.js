/*$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items:1,
      nav: false
    },
    600:{
      items:2,
      nav: false
    },
    1000:{
      items:3,
      nav: false
    }
  }
});
*/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      autoplay: true,
      loop: true,
      margin: 10,
      nav: false,
      navText: ["<div class='nav-btn prev-slide'>Prev</div>", "<div class='nav-btn next-slide'>Next</div>"],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          }
      }
  });
});