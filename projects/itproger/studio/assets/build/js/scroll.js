$('body').scrollspy({ target: '.cd-overlay-nav'})
$('a[href^="#usl"]').click(function() {
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
$('.cd-overlay-nav a').click(function(){
    $('fade-in').removeClass('is-hidden');
});
$(document).ready(function(){
    $("body").on("click","button.action", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});