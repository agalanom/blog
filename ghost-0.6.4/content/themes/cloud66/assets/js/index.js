/**
 * Main JS file
 */

/**
* C66 blog Namespace
*/
var C66 = window.C66 || {};
    C66.blog  = {};

C66.blog = (function ( $, window ) {
    "use strict";

    var $document = $(document);
    // global config data
    var config = {
        $bannerEl: $('#js_banner'),
        bannerScrollClass: 'Banner--hasScrolled',
        amountToScoll: 10
    };

    var init = function() {
        console.log('C66.blog.init called');
        bindEvents();
    };

    var bindEvents = function() {
        $document.scroll(function() {
            config.$bannerEl.toggleClass( config.bannerScrollClass, $document.scrollTop() >= config.amountToScoll );
        });
    };

    /* public methods */
    return {
        init: init,
    };

})( window.jQuery, window );

/* globals jQuery, document */
/* default ghost theme */
(function( $ ) {
    "use strict";

    var $document = $(document);


    $document.ready(function () {
        C66.blog.init();

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });
    });

})(jQuery);



(function( $ ) {
    "use strict";

    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);
