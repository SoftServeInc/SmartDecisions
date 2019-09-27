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
    const copy = parent.find('.content .row img').first().clone();
    parent.find('.content .row').animate({ left: '-=25%'}, 500, function(){
      parent.find('.content .row').append(copy);
      parent.find('.content .row img').first().remove();
      parent.find('.content .row').css('left', '-12.5%');
    });
  }

  function previous() {
    if ($(':animated').length) { return null };

    const parent = $('.tab-pane.show');
    const copy = parent.find('.content .row img').last().clone();
    parent.find('.content .row').animate({ left: '+=25%'}, 500, function(){
      parent.find('.content .row').prepend(copy);
      parent.find('.content .row img').last().remove();
      parent.find('.content .row').css('left', '-12.5%');
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
