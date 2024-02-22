

$(document).ready(function() {
  $("#burger-icon").click(function() {
    $(".popup_menu").fadeIn();
  });

  $("#close-popup-menu").click(function() {
    $(".popup_menu").fadeOut();
  });
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.popup_menu').length && !$(e.target).is('#burger-icon')) {
      $(".popup_menu").fadeOut();
    }
  });
  $(window).scroll(function() {
    let top = $(document).scrollTop();
    if (top < 200) $(".header_nav").removeClass('header_nav_fixed');
    else $(".header_nav").addClass('header_nav_fixed');
  });
});
