$(".slick_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  mobileFirst: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(window).scroll(function () {
  var top = $(this).scrollTop();
  if (top >= 80) {
    $("nav").css("background", "#fff");
    $("nav").css("box-shadow", "0px 6px 28px -15px rgba(0,0,0,0.73)");
  } else {
    $("nav").css("background", "transparent");
    $("nav").css("box-shadow", "none");
  }
});
$(".mobile_btn").on("click", function () {
  $(".nav_menu").toggleClass("active");
});

$(".bar_btn").on("click", function () {
  $(".bar_nav").toggleClass("active_bar");
});
