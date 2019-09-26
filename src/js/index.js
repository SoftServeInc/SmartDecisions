$(document).ready(function(){
  $('.burder-menu').on('click', function() {
    $(this).addClass('d-none');
    $(this).parent().addClass('active');
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

  $('.tab-pane .next').on('click', function() {
    copy = $(this).closest('.tab-pane').find('.content .row img').first();
    $('.content .row').append(copy);
    copy.html('');
  })

  $('.tab-pane .previous').on('click', function() {
    previous = $(this).closest('.tab-pane').find('.content .row img').last();
    $('.content .row').prepend(previous);
    previous.html('');
  })
});
