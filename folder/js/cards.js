//$(document).ready(function(){
//
//	
//	$('.cases_item').click(function(){
//		
//        var $this = $( this );
//        $this.toggleClass('is-active');
//        
//		if ($this.hasClass('is-active')){
//			$('.fsmenu').removeClass('close-menu');
//			$('.fsmenu').addClass('is-active');
//            $('body').css('overflow', 'hidden');
//		} else{
//			$('.fsmenu').removeClass('close-menu');
//			$('.fsmenu').addClass('is-active');
//            $('body').css('overflow', 'hidden');
//		};
//        
//	});
//    
//    
//	$('.content__back').click(function(){
//		
//        $('.fsmenu').removeClass('is-active');
//        $('.fsmenu').addClass('close-menu');
//        $('body').css('overflow', '');
//        
//	});
//	
//				
//});




//$(document).ready(function(){
//
//	
//    $('.cases_item').on('click', function(){		
//        $(this).parent().find('.fsmenu').removeClass('close-menu'); //закрыть открытые, если надо  
//        $(this).parent().find('.fsmenu').addClass('is-active'); //открыть текущий
//        $('body').css('overflow', 'hidden');
//    });
//	
//	$('.content__back').click(function(){
//		
//        $(this).parent().parent().parent().parent().find('.fsmenu').addClass('close-menu');
//        $(this).parent().parent().parent().parent().find('.fsmenu').removeClass('is-active');
//        $('body').css('overflow', '');
//        
//	});
//    
//				
//});


//$(function() {
//  $('.btn').click(function() {
//    var modal = $(this).data('modal');
////    $('.fade').fadeIn(500);
//    $('#' + modal).addClass('active');
//    $('body').css('overflow', 'hidden');
//  });
//
//  $('.close').click(function() {
////    $('.fade').fadeOut(500);
//    $('.modal').removeClass('active');
//    $('body').css('overflow', '');
//  });
//
//  $(document).keydown(function(e) {
//    if (e.keyCode === 27) {
//      e.stopPropagation();
////      $('.fade').fadeOut(500);
//      $('.modal').removeClass('active');
//      $('body').css('overflow', '');
//    }
//  });
//});



let anim = $('.cases_item').parent().find('.block-anim');

$('.cases_item').on('click', function(){
    
          var $this = $( this );
    
          $(this).parent().find('.block-anim').addClass('is-active');

          if($(this).parent().find('.block-anim').hasClass('is-active')) {
            $(this).parent().find('.block-anim').animate({'width': '100%'}, 400, 'swing', function(){
              $(this).parent().find('.block-anim').css({'left': 0, 'right': ''});
              $('body').css('overflow', 'hidden');
              $('body').css('-webkit-overflow-scrolling', 'touch');
              $('body').css('pointer-events', 'none');
 $('body').css('touch-action', 'none');
            });
          };
    
    
        $('.content__back').click(function(){
            
            anim.removeClass('is-active');

            anim.animate({'width': '0'}, 400, 'swing', function(){
              anim.css({'right': 0, 'left': ''});
              $('body').css('overflow', '');
              $('body').css('-webkit-overflow-scrolling', '');
              $('body').css('pointer-events', 'auto');
 $('body').css('touch-action', 'auto');
            });

        });
    
    
});




//$(document).ready(function(){
//
//	
//	$('.hamburger').click(function(){
//		
//		var $this = $( this );
//		
//		if ($this.hasClass('is-active')){
//			$('.fsmenu, .logo').removeClass('is-active');
//			$('.fsmenu, .logo').addClass('close-menu');
//            $('body').css('overflow', '');
//		} else{
//			$('.fsmenu, .logo').removeClass('close-menu');
//			$('.fsmenu, .logo').addClass('is-active');
//            $('body').css('overflow', 'hidden');
//		};
//		$this.toggleClass('is-active');
//	});
//	
//	$( ".fsmenu--list-element" ).hover(
//		function() {
//			$( this ).addClass('open');
//			$( this ).removeClass('is-closing');
//		}, function() {
//			$( this ).removeClass('open');
//			$( this ).addClass('is-closing');
//		}
//	);
//				
//});
