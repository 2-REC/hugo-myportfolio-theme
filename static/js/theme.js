/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var $offset = $($anchor.attr('href')).offset();
        if ($offset) {
            $('html, body').stop().animate({
                scrollTop: $offset.top - $('.navbar-header').height()
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: ($('.navbar-header').height() + 1)
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#navFixed').affix({
        offset: {
            top: ($('.navbar-header').height() * 2)
        }
    })

})(jQuery); // End of use strict
