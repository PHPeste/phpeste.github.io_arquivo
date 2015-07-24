// 21 Dez 2012, 4:42
;(function ($, window, document, undefined) {
    'use strict';
    ({
        animateScroll : function () {
            $("#nav").find('.nav-link').on('click', function (event) {

                var $this = $(this),
                    $htmlBody = $('html, body'),
                    linkTarget = $this.attr('href'),
                    offSetTop;

                // If not start with #, stop here!
                if (linkTarget[0] !== '#') {
                    return false;
                }

                event.preventDefault();

                // Get distance of top
                offSetTop = $(linkTarget).offset().top;

                // Animate the scroll
                $htmlBody.stop().animate({scrollTop : offSetTop}, function () {
                    location.hash = linkTarget;
                });
            });
        },

        init : function () {
            var that = this;

            $(function () {
                that.animateScroll();
            });
        }
    }).init();
}(jQuery, window, document));


$(document).ready(function(){
    $.getJSON("https://graph.facebook.com/531697990310552/attending?access_token=1397133740555718|358ae752274cddfa67a8b770177c085b")
        .done(function( json ) {
            var vai = "";
            $.each( json.data, function( i, item ) {

                vai += '<a href="http://facebook.com/'+item.id+'" target="_blank"><img class="photo" src="https://graph.facebook.com/'+item.id+'/picture?type=square" alt="'+item.name+'" itemprop="image"></a>';
                console.log(item);
            });
            $(".vai").html(vai);
        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });

});