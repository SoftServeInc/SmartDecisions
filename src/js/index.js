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

  function next() {
    if ($(':animated').length) { return null };

    const parent = $('.tab-pane.show');
    const copy = parent.find('.content .card-container img').first().clone();
    parent.find('.content .card-container').animate({ left: '-37.5%' }, 500, function(){
      parent.find('.content .card-container').append(copy);
      parent.find('.content .card-container img').first().remove();
      parent.find('.content .card-container').css('left', '-12.5%');
    });
  }

  function previous() {
    if ($(':animated').length) { return null };

    const parent = $('.tab-pane.show');
    const copy = parent.find('.content .card-container img').last().clone();
    parent.find('.content .card-container').animate({ left: '12.5%' }, 500, function(){
      parent.find('.content .card-container').prepend(copy);
      parent.find('.content .card-container img').last().remove();
      parent.find('.content .card-container').css('left', '-12.5%');
    });
  }

  $('.tab-pane .next').on('click', function() {
    next();
  })

  $('.tab-pane .previous').on('click', function() {
    previous();
  })

  $("body").keydown(function(e) {
    if (!e) e = window.event;
    const kc = e.which;
    if (kc == 37) previous();
    if (kc == 39) next();
  })
});
