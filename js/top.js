$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }

    });
    $('.top').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });

});
