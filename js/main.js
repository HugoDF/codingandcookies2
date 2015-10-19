$(document).ready(function(){
  $('.mobile-menu-toggle').on('click', function(){
    $('.nav-list').toggleClass('open');
  });
  $('.listing').on('click', function(){
    $('.listing').removeClass('open');
    $(this).addClass('open');
  });

});


$('body,html').scrollTop(5000);