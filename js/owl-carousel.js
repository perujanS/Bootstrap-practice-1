$(document).ready(function ($) {
  $(".owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      items: 4,
      center: false,
      responsive: {
          320: {
              items: 3,
              margin: 10,
              nav: false,
          },
          768: {
              items: 3,
              margin: 30,
              nav: false,
             


          },
          1000: {
              items: 4,
              margin: 40,


          }
      }
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".next-btn").click(function () {
      owl.trigger("next.owl.carousel");
  });
  $(".prev-btn").click(function () {
      owl.trigger("prev.owl.carousel");
  });
  $(".prev-btn").addClass("disabled");
  $(owl).on("translated.owl.carousel", function (event) {
      if ($(".owl-prev").hasClass("disabled")) {
          $(".prev-btn").addClass("disabled");
      } else {
          $(".prev-btn").removeClass("disabled");
      }
      if ($(".owl-next").hasClass("disabled")) {
          $(".next-btn").addClass("disabled");
      } else {
          $(".next-btn").removeClass("disabled");
      }
  });
});
