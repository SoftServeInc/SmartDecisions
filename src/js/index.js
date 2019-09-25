// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files


// $('.carousel .carousel-item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
//
//   if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//   }
//   else {
//     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//   }
// });

$(document).ready(function(){
  $('.burder-menu').on('click', function() {
    $(this).parent().addClass('active');
    $(this).addClass('d-none');
    $('header .close-icon.d-none').removeClass('d-none');
  });

  $('.navbar-nav .nav-link, .close-icon').click(function(e){
    $('.navbar.active').removeClass('active');
    $('.navbar-collapse.show').removeClass('show');
  });


  $('.navbar-nav .nav-link, .scroll').click(function(e){
    $('html, body').animate({
      scrollTop : $('body').find($(this).attr('href')).offset().top
    },1000);
  });
});
