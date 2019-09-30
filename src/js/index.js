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

  $('#card .card-container .tab-card').attr('data-toggle', 'modal').attr('data-target', '#card-modal');

  $("img.tab-card[data-target='#card-modal']").click(function(e) {
    $('#card-modal .modal-body').html(
      $('<img>', {src: e.target.src})
    )
  });

  function next() {
    if ($(':animated').length) { return null };

    let leftStart = '-25%';
    let leftEnd = '-8.33333%';

    if($( window ).width() < 768) {
      leftStart = '-75%';
      leftEnd = '-25%';
    }

    const parent = $('.tab-pane.show');
    const container = parent.find('.content .card-container');

    parent.find('.controlls .next').addClass('active');
    const copy = parent.find('.content .card-container img').first().clone();
    container.animate({ left: leftStart }, 500, function(){
      container.append(copy);
      container.find('img').first().remove();
      container.css('left', leftEnd);
      parent.find('.controlls .next').removeClass('active');
    });
  }

  function previous() {
    if ($(':animated').length) { return null };

    let leftStart = '8.33333%';
    let leftEnd = '-8.33333%';

    if($( window ).width() < 768) {
      leftStart = '25%';
      leftEnd = '-25%';
    }

    const parent = $('.tab-pane.show');
    const container = parent.find('.content .card-container');

    parent.find('.controlls .previous').addClass('active');
    const copy = parent.find('.content .card-container img').last().clone();
    container.animate({ left: leftStart }, 500, function(){
      container.prepend(copy);
      container.find('img').last().remove();
      container.css('left', leftEnd);
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
    if (e.which == 37) previous();
    if (e.which == 39) next();
  })
});
