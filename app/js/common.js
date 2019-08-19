$(function() {
    $('.top-line').after('<div class="menu-mobile"></div>')
    $('.menu-top').clone().appendTo('.menu-mobile');
    $('.hamburger').click(function () {
        $('.menu-mobile').stop().slideToggle();
        $(this).toggleClass('is-active');
    });
    
    $('.down').click(function() {
        $('html, body').stop()
        .animate({
            scrollTop: ($(".footer-distributed").offset().top + $(".footer-distributed").height() - $(window).height())
        }, 'slow','swing');
	});
    

    $('.header-center__subtitle').after('<div class="header-center__btn"></div>');
    $('.quick-order a').clone().appendTo('.header-center__btn');
});