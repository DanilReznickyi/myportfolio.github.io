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
(() => {
  const els = document.querySelectorAll('.about-card.reveal');
  if (!('IntersectionObserver' in window) || !els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();
(() => {
  const items = document.querySelectorAll('.case');
  if (!('IntersectionObserver' in window) || !items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        el.classList.add('revealed');
        const onEnd = (evt) => {
          if (evt.propertyName === 'transform') {
            el.style.transform = 'none';
            el.removeEventListener('transitionend', onEnd);
          }
        };
        el.addEventListener('transitionend', onEnd);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
})();
(() => {
  const wrap = document.getElementById('moreProjects');
  const items = wrap ? wrap.querySelectorAll('.mm-item') : null;
  if (!wrap || !items?.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { root: wrap, threshold: 0.12 });

  items.forEach(el => io.observe(el));
})();


