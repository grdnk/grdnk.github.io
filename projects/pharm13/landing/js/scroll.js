$('body').scrollspy({ target: '#navbar'})
$('a[href^="#effect"], a[href^="#practical"], a[href^="#action"], a[href^="#testimonials"]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 20
        }, 1000);
        return false;
      }
    }
  });
$('.navbar-nav a').click(function(){
    $('.collapse').collapse('hide');
});