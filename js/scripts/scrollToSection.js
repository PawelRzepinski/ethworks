import $ from "jquery";

const headerLi = $('.header__menu li');
const headerLinks = $('.header__menu li a');
const sections = $('.pageSection');

/*
*   Animacja Scroll li styles
*/


async function headerLiAddClass() {
    const aboutSectionTop = $('#ico').offset().top - 100;
    sections.each(function () {
        let sTop = $(window).scrollTop();
        let id = $(this).attr('id'),
            offset = $(this).offset().top - 120 ,
            height = $(this).height() - 120;


        if(sTop >= offset && sTop < offset + height) {
            headerLinks.removeClass('headerLiStyles');
            headerLi.find('a[href*="#' + id + '"]').addClass('headerLiStyles');
        }

        else if (sTop < aboutSectionTop) {
            headerLinks.removeClass('headerLiStyles');
        }
    })
}

$(window).on('scroll', function(){
    headerLiAddClass();
});

/*
*   Animation Scroll to section
*/
function scrollToSection() {
    $('body').on('click', '.jsScrollTo', function(event) {
        let offset = 100;
        let id = $(this).attr("href");
        let target = $(id).offset().top-offset;

        $('html, body').stop().animate({scrollTop:target}, 500);
        event.preventDefault();
    });
}


$(window).on('load', function(){
    scrollToSection();
});
