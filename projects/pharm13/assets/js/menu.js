$('.navbar-btn').click(function(e) {
    e.preventDefault();
    
	$('#navbarSupportedContent').toggleClass('is-show');
    if ($('.overlay-menu').hasClass('is-show')) {
        $('.navbar-icon-change').attr('src', 'assets/images/close.png');
        $('.navbar-brand').css('display', 'none');
        $('.img-menu').css('margin', '0 auto');
        $('.favorite-img-menu').css('display', 'block').css('margin', '0px 20px');
		$('#lang-select').css('display', 'block');
        $('body').css('overflow', 'hidden');
    } else {
		$('.navbar-icon-change').attr('src', 'assets/images/burger.svg');
		$('.navbar-brand').css('display', 'block');
		$('.favorite-img-menu').css('display', '');
		$('#lang-select').css('display', '');
		$('.img-menu').css('margin', '');
        $('body').css('overflow', '');
	}
});