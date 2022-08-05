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

        /* 윈도우에 스크롤이 생기면 할 일
        그 양이 1보다 크면 header nav에 클래스명 fixed 추가
        아니면 제거하기 */
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
  } // fullpage end

  // Main Page Slide

  if ($('.main-slides').length > 0) {
    const swiper = new Swiper('.main-slides', {
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
  } // main slides end

  if ($('.testimonial-slides').length > 0) {
    const testimonialSwiper = new Swiper('.testimonial-slides', {
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
  } // testimonial slides end

  // toggle menu open & close
  $('.toggle-btn').click(function () {
    $('.toggle-menu').addClass('active');
  });
  $('.toggle-menu .close').click(function () {
    $('.toggle-menu').removeClass('active');
  });

  //subpage header fixed
  // $('.subpage nav').addClass('fixed');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.subpage nav').addClass('fixed');
      $('.logo img').attr('src', './images/logo-dark.png');
    } else {
      $('.subpage nav').removeClass('fixed');
      $('.logo img').attr('src', './images/logo.png');
    }

    // back to top by scrollTop
    // $('.back_to_top').addClass('active');
    var footerOST = $('.footer').offset().top - 600;
    if ($(this).scrollTop() > footerOST) {
      $('.back_to_top').addClass('active');
    } else {
      $('.back_to_top').removeClass('active');
    }
  });

  //.about_btt 클릭 시 화면 상단 이동 (속도 easeOutQuint 0.5s)
  $('.about_btt').click(function (e) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: 0,
      },
      800,
      'easeOutQuint'
    );
  });
});
