$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   $('html, body').toggleClass('scroll_hide');
});
$(window).scroll(function() {
    if ($(this).scrollTop())
     {
        $('.navbar__subnav').css('display', 'none');
        $('.navbar__items__menu__buttons').css('display', 'none');
        $('input.navbar__items__menu_search').css('margin-right', '0');
        $('.hidden-submenu').css('display', 'block');
        $('.navbar__items__menu').css('min-width', 'auto');
     }
    else
     {
        $('.navbar__subnav').css('display', 'flex');
         $('.navbar__items__menu__buttons').css('display', '');
        $('input.navbar__items__menu_search').css('margin-right', '');
        $('.hidden-submenu').css('display', '');
         $('.navbar__items__menu').css('min-width', '');
     }
});