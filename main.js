$(document).ready(function(){
  var slideIndex = 0;

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("sl-item");
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }



  $('.sl-item').ready(function() {

  });
});

