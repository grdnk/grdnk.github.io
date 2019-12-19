$('.product-carousel').slick({
    infinite: true,
    prevArrow:'<button type="button" class="prev"></button>',
    nextArrow:'<button type="button" class="next"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
      }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
      }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
      }
    }]
  });
