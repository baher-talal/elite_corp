$(function() {
    /* Adjust Slider Height */

    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();
    // $('.slider, .carousel-item').height( windowHeight - (upperHeight + navHeight) );
    $('.carousel-item').height('100%');
});

    /* Featured Work Shuffle */
$(document).ready(function(){
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        // console.log( $(this).data('class') );
        if ( $(this).data('class') === 'all' ) {
            $('.shuffle-imgs .col-md').css('opacity','1');
        } else{
            $('.shuffle-imgs .col-md').css('opacity', '.3');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });
});

