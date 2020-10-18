import $ from "jquery";

$('.slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});