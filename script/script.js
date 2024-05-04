$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
    });
});

$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        controls: false,
    });
});

$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true
    });
});

$(document).ready(function(){
    $('.accordion').accordion({
        defaultOpen:''
    });
});

$(function(){
    let filterList = {
        init: function(){
            $('.workportfolio').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap'
            });
        },
    };
    filterList.init();
});


$(document).ready(function($){
    $('.primary-nav-trigger').on('click', function(){
        $('.menu-icon').toggleClass('is-clicked');
        $('.primary-nav').toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden');
        console.log("+")
    });
});


$(".primary-nav").on("click", "a", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});