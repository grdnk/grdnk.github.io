$('#toggle').click(function() {
   $(this).toggleClass('active');

 if($(this).hasClass('active')){
      $('body').css('overflow', 'hidden');
 }else{
       $('body').css('overflow', 'auto');
 }
    
$('#overlay').toggleClass('open');
});

$('#sub').click(function() {
   $(this).toggleClass('open');
$('#subme').toggleClass('open');
});