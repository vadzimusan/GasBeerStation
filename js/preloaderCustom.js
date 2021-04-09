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

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});