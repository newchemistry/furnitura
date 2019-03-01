var wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function(box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();
(function($) {
  $(window).scroll(function() {
    $('#navBar').toggleClass('fixed', $(this).scrollTop() > 100);
  });
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    closeMenu();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  $('header, .properties').paroller();

  //mobile nav toggle
  if ('ontouchstart' in window) {
    var click = 'touchstart';
  } else {
    var click = 'click';
  }

  $('#burger').on(click, function() {

    if (!$(this).hasClass('open')) {
      openMenu();
    } else {
      closeMenu();
    }

  });





  function openMenu() {

    $('#circle').addClass('expand');

    $('#burger').addClass('open');
    $('#burger .x, #burger .y, #burger .z').addClass('collapse');
    $('.menu li').addClass('animate');

    setTimeout(function() {
      $('div.y').hide();
      $('div.x').addClass('rotate30');
      $('div.z').addClass('rotate150');
    }, 70);
    setTimeout(function() {
      $('div.x').addClass('rotate45');
      $('div.z').addClass('rotate135');
    }, 120);



  }

  function closeMenu() {

    $('div.burger').removeClass('open');
    $('div.x').removeClass('rotate45').addClass('rotate30');
    $('div.z').removeClass('rotate135').addClass('rotate150');
    $('div.circle').removeClass('expand');
    $('.menu li').removeClass('animate');

    setTimeout(function() {
      $('div.x').removeClass('rotate30');
      $('div.z').removeClass('rotate150');
    }, 50);
    setTimeout(function() {
      $('div.y').show();
      $('div.x, div.y, div.z').removeClass('collapse');
    }, 70);

  }
})(jQuery);
// $(function() {
//   var top = $('#navBar').offset().top - parseFloat($('#navBar').css('marginTop').replace(/auto/, 0)) + 500;
//   var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));
//
//   var maxY = footTop - $('#navBar').outerHeight();
//
//   $(window).scroll(function(evt) {
//     var y = $(this).scrollTop();
//     if (y > top) {
//       if (y < maxY) {
//         $('#navBar').addClass('fixed').removeAttr('style').css('transform', 'translateY(0)');
//       } else {
//         $('#navBar').removeClass('fixed').css({
//           position: 'absolute',
//           top: (maxY - top) + 'px'
//         });
//       }
//     } else {
//       $('#navBar').removeClass('fixed');
//     }
//
//   });
// });
//
// // Back to top button
// (function() {
//   $(document).ready(function() {
//     return $(window).scroll(function() {
//       return $(window).scrollTop() > 200 ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
//     }), $("#back-to-top").click(function() {
//       return $("html,body").animate({
//         scrollTop: "0"
//       })
//     })
//   })
// }).call(this);