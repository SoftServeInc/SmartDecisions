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
    const parent = $(this).closest('.tab-pane');
    const copy = parent.find('.content .row img').first();
    parent.find('.content .row').append(copy);
    copy.html('');
  })

  $('.tab-pane .previous').on('click', function() {
    const parent = $(this).closest('.tab-pane');
    const previous = parent.find('.content .row img').last();
    parent.find('.content .row').prepend(previous);
    previous.html('');
  })
});
