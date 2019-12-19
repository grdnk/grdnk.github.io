var scene1 = document.getElementById('first_scene');
var parallaxInstance1 = new Parallax(scene1);
var scene2 = document.getElementById('test_scene');
var parallaxInstance2 = new Parallax(scene2);

$(window).scroll(function() {   
 if($(window).width() < 900) {
  parallaxInstance1.disable();
  parallaxInstance2.disable();
  return;
 }
 
 if ($(this).scrollTop() > $('section.first').outerHeight())
  parallaxInstance1.disable();
 else
  parallaxInstance1.enable();


 var elemTop = $('section.lang_test').offset().top;
  
 var docViewTop = $(window).scrollTop() - 100;
 var docViewBottom = docViewTop + $(window).height() + 300;
 var heightAfter = elemTop + $('section.lang_test').outerHeight() + 100;
 
 
 $.fn.isOnScreen = function(){
     var win = $(window);
     
     var viewport = {
         top : win.scrollTop()
     };
     viewport.bottom = viewport.top + win.height();
     
     var bounds = this.offset();
     bounds.bottom = bounds.top + this.outerHeight() - 150;
     
     return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
     
 };

 if($('section.lang_test').isOnScreen())
  parallaxInstance2.enable();
 else
  parallaxInstance2.disable();
});