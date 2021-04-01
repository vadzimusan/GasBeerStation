// Page loading animation
$(window).on('load', function () {


    $("#preloader").animate({
        'opacity': '0'
    }, 1000, function () {
        setTimeout(function () {
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});