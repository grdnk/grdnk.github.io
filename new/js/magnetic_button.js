$('#burger-wrapper').mouseleave(function(e){
			     TweenMax.to(this, 0.3, {scale: 1});
			     TweenMax.to('#burger-circle, #menu-burger', 0.3,{scale:1, x: 0, y: 0});			  
			});
			
			$('#burger-wrapper').mouseenter(function(e){
			     TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
			     TweenMax.to('#burger-circle', 0.3,{scale: 1.1});
			});
			
			$('#burger-wrapper').mousemove(function(e){   
			  callParallax(e);
			});
			
			function callParallax(e){
			  parallaxIt(e, '#burger-circle', 60);
			  parallaxIt(e, '#menu-burger', 40);
			}
			
			function parallaxIt(e, target, movement){
			  var $this = $('#burger-wrapper');
			  var boundingRect = $this[0].getBoundingClientRect();
			  var relX = e.pageX - boundingRect.left;
			  var relY = e.pageY - boundingRect.top;
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			
			  TweenMax.to(target, 0.3, {
				x: (relX - boundingRect.width/2) / boundingRect.width * movement,
				y: (relY - boundingRect.height/2 - scrollTop) / boundingRect.width * movement,
				ease: Power2.easeOut
			  });
			}