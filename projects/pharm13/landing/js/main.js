//$( window ).load(function() {
window.sendLid = function(name, phone, email){

}

$('.lid-form').submit(function(){
    var postData = {
        'name': $(this).find('.lid-name').val(),
        'phone': $(this).find('.lid-phone').val(),
        'email': $(this).find('.lid-email').val()
    };

    $.post('/lid.php', postData, function(result){
        $('#thanks').modal('show');
        $('#order').modal('hide');



    });

    $(this).find('.lid-name').val('');
    $(this).find('.lid-phone').val('');
    $(this).find('.lid-email').val('');

    return false;
});

$.post('/cb.php', {cb: 1}, function(result){

});

//});