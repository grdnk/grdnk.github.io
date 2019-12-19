$('.navbar-btn').click(function(e) {
    e.preventDefault();
    
	$('#navbarSupportedContent').toggleClass('is-show');
    if ($('.overlay-menu').hasClass('is-show')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', '');
	}
});