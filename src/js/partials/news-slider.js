$('.b-post-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    asNavFor: '.b-news-slider'
});

$('.b-news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    asNavFor: '.b-post-slider',
    prevArrow: '<button class=\'b-button b-button--left-arrow\' type=\'button\'>',
    nextArrow: '<button class=\'b-button b-button--right-arrow\' type=\'button\'>',

    responsive: [{

        breakpoint: 980,
        settings: {
            arrows: true,
            dots: false,
        }

    }]
});
