(function() {
var last_pos = 0;
$(window).scroll(function(e) {
	if ($(this).scrollTop() > 60 && last_pos < $(this).scrollTop()) {
		$(".navbar").css('display', 'none');
	} else {
		$(".navbar").css('display', 'flex');
	}

	last_pos = $(this).scrollTop();
});
})()