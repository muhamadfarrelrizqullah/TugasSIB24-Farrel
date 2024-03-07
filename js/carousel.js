
jQuery(document).ready(function () {
    $('#logoslider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        draggable: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 2000,
                adaptiveHeight: true,
                dots: false,
                arrows: false
            }
        }
        ]
    });

});