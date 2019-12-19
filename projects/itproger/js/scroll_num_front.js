$(document).ready(function () {
 
    var show = true;
    var countbox = ".course_info_stats";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.stats_item .stats_item_num').css('opacity', '1');
            $('.stats_item .stats_item_num').spincrement({
                thousandSeparator: " ",
                duration: 1200
            });
             
            show = false;
        }
    });
 
});