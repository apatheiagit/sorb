$(document).ready(function(){
  fixMenu();
  $('.owl-carousel').owlCarousel({
  	items: 1,
  	loop: true,
  });
  $(window).scroll(function(){
    fixMenu();
  });
  function fixMenu(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 10){
        $('.main-header').addClass('fixed');            
    }else{
        $('.main-header').removeClass('fixed');  
    } 
  }
})