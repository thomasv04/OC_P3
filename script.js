$(function () {

    var vid = document.getElementById("video");

    /**var count_img = $(".img").length;

    for(var i=0;i<count_img;i++){
        var largeur = $('.img:eq('+i+')').width();
        console.log(largeur +"\n");
        var hauteur = (largeur*40)/27;
        console.log(hauteur +"\n");
        $('.img:eq('+i+')').css('height',hauteur+'px');
        var hauteur_apres = $('.img:eq('+i+')').height();
        console.log(hauteur_apres +"\n");
    }**/


    $('.img').click(function () {
        var link = $(this).children('.img_back').attr("src");
        var link_video = $(this).children('.link_video').attr("id");
        var information = $(this).children('.information').clone();
        var rien = " ";

        //link_video = "video/" + link_video;
        $('.js_header').css('height', '58vh');
        $('.bandeau').css('height', '38vh');
        $('#video').css('display', 'block');
        $('#video').attr('src', link_video);
        $('#video').attr('poster', link);
        $('.js_header').css('background-size', 'cover');
        $('.js_header').css('background-position', '0 30%');
        $('.js_header h1').css('display', 'none');
        $('.js_header .titre_film h1').css('display', 'block');
        $('.js_header .titre_film').css('opacity', '1');
        //$('.bouton_play').css('display', 'block');
        //$('#video').removeAttr('controls');
        $('.titre_film').html(rien).html(information);
        //$('body').css('overflow', 'hidden');
        $('.affiche h4').css('margin-bottom', '-25px');
        $('.img').css('filter', 'brightness(100%)');
        $(this).css('cursor', 'default');
        $(this).css('filter', 'brightness(50%)');
        $('.arrow_left').fadeOut(1000);
        $('.retour').css('display', 'block');
        $('.bandeau').css('margin-top', '4vh');
        $('.bandeau').css('padding-top', '0px');
        $('header .titre_film').css('display', 'block');



    })

    $('.retour').click(function () {
        $('.js_header').css('height', '0vh');
        $('.bandeau').css('height', '100vh');
        $(this).css('display', 'none');
        $('.bandeau').css('margin-top', '0');
        $('.img').css('filter', 'none');
        $('.bandeau').css('padding-top', '30px');
        $('.arrow_left').fadeIn(1000);
        //$('body').css('overflow', 'auto');
        vid.pause();
    })


    $('.bouton_play').click(function () {
        $('#video').attr('controls', '');
        $(this).css('display', 'none');
        vid.play();
        $('header .titre_film').css('display', 'none');
    })


    vid.onplay = function () {
        $('header .titre_film').css('display', 'none');
        $('header .titre_film').css('display', 'none');
    };

    vid.onpause = function () {
        $('header .titre_film').css('display', 'block');
    };



    /**(max-width : 800px),
    (aspect-ratio: 9/16),(not screen) and (max-height : 800px),
    (max-height : 800px),
    (aspect-ratio: 16/9) **/








})
