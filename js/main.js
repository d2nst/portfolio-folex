$(document).ready(function () {
  if ($('#fullpage').length > 0) {
    $('#fullpage').fullpage({
      //options here
      autoScrolling: true,
      css3: true,
      anchors: [
        'firstPage',
        'secondPage',
        'thirdPage',
        'forthPage',
        'fifthPage',
      ],
      easing: 'easeInOutCubic',
      easingcss3: 'ease-out',
      afterLoad: function (origin, destination, direction, trigger) {
        // 색인 사용

        if (destination > 1) {
          $('.fixed-nav').fadeIn();
          $('.header nav').addClass('fixed');
          $('.logo img').attr('src', './images/logo-dark.png');
          $('.toggle-btn img').attr('src', './images/menu_icon-dark.png');
        } else {
          $('.fixed-nav').fadeOut();
          $('.header nav').removeClass('fixed');
          $('.logo img').attr('src', './images/logo.png');
          $('.toggle-btn img').attr('src', './images/menu_icon.png');
        }

        if (destination == 6) {
          $('.back_to_top').addClass('active');
        } else {
          $('.back_to_top').removeClass('active');
        }

        if (destination == 2 || destination == 4) {
          $('.fixed-nav').find('a').removeClass('active');
          $('.fixed-nav').find('a').removeClass('active-black');
          $('.fixed-nav')
            .find('a')
            .eq(destination - 1)
            .addClass('active-black');
        } else {
          $('.fixed-nav').find('a').removeClass('active');
          $('.fixed-nav').find('a').removeClass('active-black');
          $('.fixed-nav')
            .find('a')
            .eq(destination - 1)
            .addClass('active');
        }
      },
    });
    //methods
    $.fn.fullpage.setAllowScrolling(true);
  }

  // Main Page Slide
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // toggle menu open & close
  $('.toggle-btn').click(function () {
    $('.toggle-menu').addClass('active');
  });
  $('.toggle-menu .close').click(function () {
    $('.toggle-menu').removeClass('active');
  });
});
