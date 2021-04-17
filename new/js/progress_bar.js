var counter = document.querySelector(".progress_bar");

function progress() {
    var windowScrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

    $(".count")
        .text(Math.round(progress) + "%")

    $(".fill")
        .height(progress + "%")
        
}
progress();
$(document).on("scroll", progress);