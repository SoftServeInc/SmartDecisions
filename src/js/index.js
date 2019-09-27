$(document).ready(function(){
  $('.burder-menu').on('click', function() {
    $('.burder-menu').addClass('d-none');
    $('header .navbar').addClass('active');
    $('header .close-icon.d-none').removeClass('d-none');
  });

  $('.navbar-nav .nav-link, .close-icon').click(function(e){
    $('.burder-menu').removeClass('d-none');
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

    let leftStart = '-37.5%';
    let leftEnd = '-12.5%';

    if($( window ).width() < 768) {
      leftStart = '-75%';
      leftEnd = '-25%';
    }

    const parent = $('.tab-pane.show');
    parent.find('.controlls .next').addClass('active');
    const copy = parent.find('.content .card-container img').first().clone();
    parent.find('.content .card-container').animate({ left: leftStart }, 500, function(){
      parent.find('.content .card-container').append(copy);
      parent.find('.content .card-container img').first().remove();
      parent.find('.content .card-container').css('left', leftEnd);
      parent.find('.controlls .next').removeClass('active');
    });
  }

  function previous() {
    if ($(':animated').length) { return null };

    let leftStart = '12.5%';
    let leftEnd = '-12.5%';

    if($( window ).width() < 768) {
      leftStart = '25%';
      leftEnd = '-25%';
    }

    const parent = $('.tab-pane.show');
    parent.find('.controlls .previous').addClass('active');
    const copy = parent.find('.content .card-container img').last().clone();
    parent.find('.content .card-container').animate({ left: leftStart }, 500, function(){
      parent.find('.content .card-container').prepend(copy);
      parent.find('.content .card-container img').last().remove();
      parent.find('.content .card-container').css('left', leftEnd);
      parent.find('.controlls .previous').removeClass('active');
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
