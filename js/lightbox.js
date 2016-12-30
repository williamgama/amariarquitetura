$(document).ready(function () {
    var current = '#galeria-lightbox ul li.current';

    //Função para verificar a posição atual da imagem e remover as setas(prev e next) conforme necessário
    function check_image_position() {
        if ($(current).is(':last-child')) {
            $('.next').hide();
            $('.prev').show();
        } else if ($(current).is(':first-child')) {
            $('.next').show();
            $('.prev').hide();
        } else {
            $('.next, .prev').show();
        }
    }

    $('#galeria-lightbox ul li').on('click', 'a', function (event) {
        event.preventDefault();
        var big_image_href = $(this).attr('href');

        $(this).parent().addClass('current');
        $('.lightbox').fadeIn();
        $('.lightbox').append('<img class="lightbox-imagem" src="' + big_image_href + '" alt=""></div>');

        check_image_position();
    });
    //Fechar
    $('.lightbox').on('click', '.close-lightbox', function (event) {
        $('.lightbox').fadeOut();
        $('.lightbox .lightbox-imagem').remove();
        $(current).removeClass('current');
    });
    
    //Função Next e Prev
    $('.lightbox a').on('click', function (e) {
        if ($(this).attr('class') == 'next') {
            var big_image_href = $(current).next().find('a').attr('href');

            $(current).next().addClass('current');
            $(current).prev().removeClass('current');

        } else if ($(this).attr('class') == 'prev') {
            var big_image_href = $(current).prev().find('a').attr('href');

            $(current).prev().addClass('current');
            $(current).next().removeClass('current');
        }
        check_image_position();

        $('.lightbox .lightbox-imagem').remove();
        $('.lightbox').append('<img class="lightbox-imagem" src="' + big_image_href + '" alt="">');
    });
});