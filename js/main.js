$(document).ready(function(){
  fixMenu();
  $('.owl-carousel').owlCarousel({
  	items: 1,
  	loop: true,
  });
  var options = {
      onError: function() {  console.log('ERROR'); }
  };
  var sepia_effect = {
      desaturate: 0.5,
      screen: {r:153,g:153,b:51,a:0.5},
      contrast: 30
  };
  $('.sepia').load(function() {    
      $('.sepia').vintage(options, sepia_effect);
  }).each(function(index) {
      var clone = $(this).clone().removeClass('sepia').addClass('sepia-color').css('opacity',0);
      $(this).parent().append(clone);
  });
  $('.block-onmain').on('mouseenter', function(){
      $(this).find('.sepia-color').css('opacity', 1);
      $(this).find('.sepia').css('opacity',0);
  });    
  $('.block-onmain').on('mouseleave', function(){
      $(this).find('.sepia-color').css('opacity', 0);
      $(this).find('.sepia').css('opacity',1);
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