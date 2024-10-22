$('.b-news-slider').slick({
    // normal options...
    infinite: true,
    // the magic
    responsive: [{
        settings: {
            slidesToShow: 1,
            infinite: true
        }

    }],

    prevArrow: '<button class=\'b-button b-button--left-arrow\' type=\'button\'>',
    nextArrow: '<button class=\'b-button b-button--right-arrow\' type=\'button\'>'

});
