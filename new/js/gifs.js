
// list projects gifs --first section
$(".works_list-item a").hover(function(){
    $(this).parent().find("img").addClass("is-hover");
    }, function() {
    $(this).parent().find("img").removeClass("is-hover");
});

// "Michael" gif --last section
$(".about_text").hover(function(){
    $(this).parent().find("picture").addClass("is-hover");
    }, function() {
    $(this).parent().find("picture").removeClass("is-hover");
});