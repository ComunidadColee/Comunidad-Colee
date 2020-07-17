$(document).ready(function(){
    var altura = $('.pegajoso').offset().top;

    $(window).on('scroll', function(){
        if ($(window).scrollTop() > altura ){
            $('.pegajoso').addClass('pegajoso-fixed');
        } else {
            $('.pegajoso').removeClass('pegajoso-fixed');
        }
    });
});