var Mojobiekt = {
    mobilemenu : function(){
        jQuery('body > nav').toggleClass('active');
    }
}

$(document).ready(function() {
    $('.scrollToTop').fadeOut();
    function checkWidth() {
        if (jQuery(window).width() > 830) {
            jQuery('body > nav').removeClass('active');
        }
    }

    checkWidth();
    jQuery(window).resize(checkWidth);
});



$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});


$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});