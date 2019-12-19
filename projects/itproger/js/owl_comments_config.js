$(document).ready(function(){
    $('.comment_cards').owlCarousel({
        autoWidth: true,
        dots: false,
        navText: ["<","<img src='img/front-end/arrow_right.svg'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: false,
                nav: true,
                margin: 10
            },
            768: {
                items: 2,
                autoWidth: false,
                margin: 30,
                nav: false
            },
            1200: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
});