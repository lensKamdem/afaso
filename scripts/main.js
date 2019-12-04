$(document).ready(function(){
  $('#projects-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 70,
    center: true,
    dots: false,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        
      },
      768: {
        items: 3,
        margin: 10,
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

  
  $('#projects-gallery').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    center: true,
    dots: false,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        margin: 10,
        
      },
      768: {
        items: 3,
        margin: 20,
      },
      1024: {
        items: 4,
        margin: 40
      },
    }
  });
  // Go to the next item
  $('#projects-gallery .btn').click(function() {
    $("#projects-grid").trigger('next.owl.carousel');
  });
  $('#projects-gallery .owl-nav').css({
    'display':'none'
  });


  
  $('.ctb-btn').click(function() {
    const name = document.getElementById('in-name').innerText;
    const email = document.getElementById('in-email').innerText;
    const subject = document.getElementById('in-sub').innerText;
    const body = document.getElementById('in-msg').innerText;

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "kamdem.lens@gmail.com",
      Password : "56838db9-8d08-46f0-9b1c-f75914cd8a9f",
      To : 'kamdem.lens@gmail.com',
      From : email,
      Subject : subject,
      Body : body,
  }).then(
    message => alert("some message")
  );


  });

 
});

