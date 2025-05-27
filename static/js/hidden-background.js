(function($) {
    "use strict";

    const element = document.getElementById("background_hidden");
    const speed = window.getComputedStyle(element).getPropertyValue('--home-bkg-image-hidden-speed');

    var opacity = 0;
    $(window).scroll(function(){
    /*$(window).on('scroll', () => {*/

        var height = $("#home").height();
        var top = $("#home").offset().top;
        var bottom = top + height;

        var scrollTop = $(window).scrollTop();
        if (scrollTop < top || scrollTop > bottom) { 
            opacity = 0;
        } else {
            opacity = (scrollTop - top) * speed / height;
        }
        $("#background_hidden").css('opacity', opacity);
    });

})(jQuery);
