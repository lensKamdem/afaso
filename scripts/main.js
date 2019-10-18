$(document).ready(function(){
  $('#projects-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 80,
    center: true,
    dots: false,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 3,
        margin: 10
      },
      1024: {
        items: 3,
        margin: 50
      },
    }
  });
  // Go to the next item
  $('.projects .slider-next').click(function() {
    $("#projects-slider").trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.projects .slider-prev').click(function() {
    $("#projects-slider").trigger('prev.owl.carousel');
  });
  
  $("#partner-slider").owlCarousel({
    items:5,
    loop:true,
    margin:30,
    center: true,
    dots: false,
    nav: false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 2,
        margin: 0,
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      },
    }
  });

  $("#tt-slider").owlCarousel({
    items:1,
    loop:true,
    margin:40,
    center:true,
    dots:false,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
  });
  // Go to the next item
  $('.testimony .slider-next').click(function() {
    $("#tt-slider").trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.testimony .slider-prev').click(function() {
    $("#tt-slider").trigger('prev.owl.carousel');
  });
  $('.owl-nav').css({
    'display':'none'
  });


 
});

