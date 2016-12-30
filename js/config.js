
$(".hamburger").click(function () {
    $("#filtro").fadeIn()
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.4)")
    $(".menu-mobile").css("top", "0vw")
    $(".menu-mobile").css("opacity", "1")
    
});

$(".hamburger-close, .inicio, .amari, .atuacao, .portfolio, .contato").click(function () {
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.0)")
    $("#filtro").fadeOut()
    $(".menu-mobile").css("opacity", "0")
    $(".menu-mobile").css("top", "-100vh")
});

var nav = $('.cabecalho-desktop');

$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        nav.addClass("fixar");
    } else {
        nav.removeClass("fixar");
    }
});

$(".open").click(function () {
    $(".drop").css("max-height", "180px")
    $(".drop a").css("opacity", "1")
    $(".open").css("display", "none")
    $(".close").css("display", "flex")
});

$(".close").click(function () {
    $(".drop a").css("opacity", "0")
    $(".drop").css("max-height", "0px")
    $(".close").css("display", "none")
    $(".open").css("display", "flex")
});

$('.scroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2500);
            return false;
        }
    }
});

var userFeed = new Instafeed({
        get: 'user',
        userId: '3765048930',
        accessToken: '3765048930.76993d2.512eeaa3e0bc4059afd0b97e321fdb52',
    limit: '6',
    resolution: 'standard_resolution'
    });
    userFeed.run();
