$(function(){
  $(".watch-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
  });

  $(".single-item").slick({
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: $("#galeria-prev"),
    nextArrow: $("#galeria-next"),
  });
  
})

