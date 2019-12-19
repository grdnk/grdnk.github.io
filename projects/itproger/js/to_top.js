function toTop() {
    $('html, body').animate({
        scrollTop: $('.first').offset().top
    });
    return false;
}