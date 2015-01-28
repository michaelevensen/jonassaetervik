// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// images
$(function(){
    $('.images img:gt(0)').hide();

    // fadeinout time
    var t = 200;

    // click thru images
    $('.images').click(function() {
      $('.images :first-child').fadeOut(t)
         .next('img').fadeIn(t)
          .end().appendTo('.images'); 
    });
});



// about
$('.logo').click(function() {
    $('.images, .about').toggle();
});


$(window).load(function() {
  // When the page has loaded
  $(".images").fadeIn(200);

  //remove loader
  $('html').css('background', 'none');
  
});