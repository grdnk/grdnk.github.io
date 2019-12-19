$(document).ready(function(){
    $('.vantage_cards').owlCarousel({
        autoWidth: false,
        dots: false,
        navText: ["<","<img src='img/front-end/arrow_right.svg'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoWidth: true,
                nav: true,
                margin: 10
            },
            768: {
                items: 2,
                autoWidth: true,
                nav: false
            },
            1140: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
});